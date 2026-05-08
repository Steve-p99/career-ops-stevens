#!/usr/bin/env node

/**
 * scan-linkedin.mjs — LinkedIn portal scanner via Apify
 *
 * Companion to scan.mjs. Where scan.mjs hits Greenhouse/Ashby/Lever JSON APIs
 * for free, this script calls the curious_coder/linkedin-jobs-scraper Apify
 * actor for jobs that aren't on standard ATS boards (Razorpay LinkedIn-only
 * roles, Indian product cos using LinkedIn primary, etc.).
 *
 * Reads `linkedin_apify_searches` from portals.yml. For each enabled entry it
 * runs the Apify actor, applies the same `title_filter` used by scan.mjs,
 * dedups against scan-history.tsv + pipeline.md + applications.md, and
 * appends new offers to data/pipeline.md and data/scan-history.tsv with
 * source = `linkedin-apify`.
 *
 * Cost: $0.001 per result returned by the actor. A 75-result search ≈ $0.075.
 *
 * Setup:
 *   1. Add your Apify token to .env:   APIFY_TOKEN=apify_api_xxx
 *   2. Edit `linkedin_apify_searches` in portals.yml
 *   3. node scan-linkedin.mjs            # scan all enabled searches
 *      node scan-linkedin.mjs --dry-run  # no writes
 *      node scan-linkedin.mjs --search 1 # only search index 1 (0-based)
 *
 * Notes:
 *   - Generate fresh search URLs from an incognito linkedin.com/jobs/search
 *     session (logged-in URLs differ and won't scrape correctly).
 *   - The actor will scrape the company profile too (`scrapeCompany: true`)
 *     so each result also surfaces company size + industry for evaluation.
 */

import { readFileSync, writeFileSync, appendFileSync, existsSync, mkdirSync } from 'fs';
import { config as dotenv } from 'dotenv';
import yaml from 'js-yaml';

dotenv();
const parseYaml = yaml.load;

// ── Config ──────────────────────────────────────────────────────────

const PORTALS_PATH = 'portals.yml';
const SCAN_HISTORY_PATH = 'data/scan-history.tsv';
const PIPELINE_PATH = 'data/pipeline.md';
const APPLICATIONS_PATH = 'data/applications.md';

const ACTOR_ID = 'curious_coder~linkedin-jobs-scraper';
const APIFY_BASE = 'https://api.apify.com/v2';
const APIFY_TOKEN = process.env.APIFY_TOKEN;

mkdirSync('data', { recursive: true });

// ── Title filter (same logic as scan.mjs) ───────────────────────────

function buildTitleFilter(titleFilter) {
  const positive = (titleFilter?.positive || []).map(k => k.toLowerCase());
  const negative = (titleFilter?.negative || []).map(k => k.toLowerCase());
  return (title) => {
    const lower = (title || '').toLowerCase();
    const hasPositive = positive.length === 0 || positive.some(k => lower.includes(k));
    const hasNegative = negative.some(k => lower.includes(k));
    return hasPositive && !hasNegative;
  };
}

// ── Dedup ───────────────────────────────────────────────────────────

function loadSeenUrls() {
  const seen = new Set();

  if (existsSync(SCAN_HISTORY_PATH)) {
    const lines = readFileSync(SCAN_HISTORY_PATH, 'utf-8').split('\n');
    for (const line of lines.slice(1)) {
      const url = line.split('\t')[0];
      if (url) seen.add(normalizeUrl(url));
    }
  }

  if (existsSync(PIPELINE_PATH)) {
    const text = readFileSync(PIPELINE_PATH, 'utf-8');
    for (const match of text.matchAll(/- \[[ x]\] [^|]*\| (https?:\/\/\S+)/g)) {
      seen.add(normalizeUrl(match[1]));
    }
    for (const match of text.matchAll(/- \[[ x]\] (https?:\/\/\S+)/g)) {
      seen.add(normalizeUrl(match[1]));
    }
  }

  if (existsSync(APPLICATIONS_PATH)) {
    const text = readFileSync(APPLICATIONS_PATH, 'utf-8');
    for (const match of text.matchAll(/https?:\/\/[^\s|)]+/g)) {
      seen.add(normalizeUrl(match[0]));
    }
  }

  return seen;
}

function loadSeenCompanyRoles() {
  const seen = new Set();
  if (!existsSync(APPLICATIONS_PATH)) return seen;
  const text = readFileSync(APPLICATIONS_PATH, 'utf-8');
  for (const match of text.matchAll(/\|[^|]+\|[^|]+\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/g)) {
    const company = match[1].trim().toLowerCase();
    const role = match[2].trim().toLowerCase();
    if (company && role && company !== 'company') seen.add(`${company}::${role}`);
  }
  return seen;
}

// LinkedIn job URLs vary by query string; canonicalize to the bare /jobs/view/<id>/.
function normalizeUrl(url) {
  if (!url) return '';
  const m = url.match(/linkedin\.com\/jobs\/view\/(\d+)/);
  if (m) return `https://www.linkedin.com/jobs/view/${m[1]}/`;
  return url.split('?')[0].replace(/\/$/, '');
}

// ── Pipeline writer ─────────────────────────────────────────────────

function appendToPipeline(offers) {
  if (offers.length === 0) return;

  let text = readFileSync(PIPELINE_PATH, 'utf-8');
  const marker = '## Pendientes';
  const idx = text.indexOf(marker);

  const lines = offers.map(o => `- [ ] ${o.url} | ${o.company} | ${o.title}`).join('\n');

  if (idx === -1) {
    const procIdx = text.indexOf('## Procesados') !== -1
      ? text.indexOf('## Procesados')
      : text.indexOf('## Procesadas');
    const insertAt = procIdx === -1 ? text.length : procIdx;
    const block = `\n${marker}\n\n${lines}\n\n`;
    text = text.slice(0, insertAt) + block + text.slice(insertAt);
  } else {
    const afterMarker = idx + marker.length;
    const nextSection = text.indexOf('\n## ', afterMarker);
    const insertAt = nextSection === -1 ? text.length : nextSection;
    const block = '\n' + lines + '\n';
    text = text.slice(0, insertAt) + block + text.slice(insertAt);
  }

  writeFileSync(PIPELINE_PATH, text, 'utf-8');
}

function appendToScanHistory(offers, date) {
  if (!existsSync(SCAN_HISTORY_PATH)) {
    writeFileSync(SCAN_HISTORY_PATH, 'url\tfirst_seen\tportal\ttitle\tcompany\tstatus\n', 'utf-8');
  }
  const lines = offers.map(o =>
    `${o.url}\t${date}\t${o.source}\t${(o.title || '').replace(/\t/g, ' ')}\t${(o.company || '').replace(/\t/g, ' ')}\tadded`
  ).join('\n') + '\n';
  appendFileSync(SCAN_HISTORY_PATH, lines, 'utf-8');
}

// ── Apify call ──────────────────────────────────────────────────────

async function runApifyActor(input) {
  if (!APIFY_TOKEN) {
    throw new Error(
      'APIFY_TOKEN missing. Add it to .env (see .env.example) — get a token at https://console.apify.com/settings/integrations'
    );
  }

  // Synchronous run-and-return-dataset endpoint: blocks until done, then returns items.
  const url = `${APIFY_BASE}/acts/${ACTOR_ID}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Apify HTTP ${res.status}: ${text.slice(0, 300)}`);
  }
  return await res.json();
}

// Parse one Apify dataset item → { title, url, company, location } shape used by scan.mjs.
function parseLinkedInItem(item) {
  const title = item.title || item.jobTitle || '';
  const url = item.jobUrl || item.url || item.link || '';
  const company = item.companyName || item.company || (item.companyDetails && item.companyDetails.name) || '';
  const location = item.location || item.formattedLocation || '';
  return { title, url, company, location };
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const searchFlag = args.indexOf('--search');
  const onlyIndex = searchFlag !== -1 ? Number(args[searchFlag + 1]) : null;

  if (!existsSync(PORTALS_PATH)) {
    console.error('Error: portals.yml not found.');
    process.exit(1);
  }

  const config = parseYaml(readFileSync(PORTALS_PATH, 'utf-8'));
  const searches = (config.linkedin_apify_searches || []).filter(s => s.enabled !== false);
  const titleFilter = buildTitleFilter(config.title_filter);

  if (searches.length === 0) {
    console.log('No enabled LinkedIn searches in portals.yml. Add some under linkedin_apify_searches.');
    return;
  }

  const targets = onlyIndex !== null ? [searches[onlyIndex]].filter(Boolean) : searches;

  console.log(`LinkedIn Apify scan — ${targets.length} search(es)`);
  if (dryRun) console.log('(dry run — no files will be written)');
  if (!APIFY_TOKEN && !dryRun) {
    console.error('\nAPIFY_TOKEN not set. Add it to .env or run with --dry-run.');
    process.exit(1);
  }

  const seenUrls = loadSeenUrls();
  const seenCompanyRoles = loadSeenCompanyRoles();
  const date = new Date().toISOString().slice(0, 10);

  let totalFound = 0;
  let totalFiltered = 0;
  let totalDupes = 0;
  const newOffers = [];

  for (const search of targets) {
    console.log(`\n→ ${search.name} (count=${search.count || 50})`);
    if (dryRun) {
      console.log('  (dry run — skipping actor call)');
      continue;
    }
    try {
      const items = await runApifyActor({
        urls: [search.url],
        count: search.count || 50,
        scrapeCompany: true,
        splitByLocation: false,
      });
      console.log(`  fetched ${items.length} item(s)`);
      totalFound += items.length;

      for (const raw of items) {
        const job = parseLinkedInItem(raw);
        if (!job.title || !job.url) continue;
        if (!titleFilter(job.title)) { totalFiltered++; continue; }
        const key = normalizeUrl(job.url);
        if (seenUrls.has(key)) { totalDupes++; continue; }
        const cr = `${job.company.toLowerCase()}::${job.title.toLowerCase()}`;
        if (seenCompanyRoles.has(cr)) { totalDupes++; continue; }
        seenUrls.add(key);
        seenCompanyRoles.add(cr);
        newOffers.push({ ...job, url: key, source: 'linkedin-apify' });
      }
    } catch (err) {
      console.error(`  ✗ ${err.message}`);
    }
  }

  if (!dryRun && newOffers.length > 0) {
    appendToPipeline(newOffers);
    appendToScanHistory(newOffers, date);
  }

  console.log(`\n${'━'.repeat(45)}`);
  console.log(`LinkedIn Apify Scan — ${date}`);
  console.log(`${'━'.repeat(45)}`);
  console.log(`Searches run:          ${targets.length}`);
  console.log(`Total jobs found:      ${totalFound}`);
  console.log(`Filtered by title:     ${totalFiltered} removed`);
  console.log(`Duplicates:            ${totalDupes} skipped`);
  console.log(`New offers added:      ${newOffers.length}`);

  if (newOffers.length > 0) {
    console.log('\nNew offers:');
    for (const o of newOffers) {
      console.log(`  + ${o.company} | ${o.title} | ${o.location || 'N/A'}`);
    }
    if (!dryRun) console.log(`\nResults saved to ${PIPELINE_PATH} and ${SCAN_HISTORY_PATH}`);
  }

  console.log('\n→ Run /career-ops pipeline to evaluate new offers.');
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
