#!/usr/bin/env node
/**
 * One-off processor for the two Apify LinkedIn runs we just executed via MCP.
 * Reads portals.yml title_filter + dedup state from existing career-ops files,
 * then appends survivors to data/pipeline.md and data/scan-history.tsv.
 *
 * The 150 items below come from datasets:
 *   lY7ZbkcND7aa2V0Wn (Senior Software Engineer Bengaluru, last 7 days)
 *   5cF9UYY59kkF7wdXJ (AI Engineer India, last 7 days)
 */

import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'fs';
import yaml from 'js-yaml';

const ROOT = '/sessions/quirky-pensive-mayer/mnt/career-ops';
const PORTALS_PATH = `${ROOT}/portals.yml`;
const PIPELINE_PATH = `${ROOT}/data/pipeline.md`;
const SCAN_HISTORY_PATH = `${ROOT}/data/scan-history.tsv`;
const APPLICATIONS_PATH = `${ROOT}/data/applications.md`;

const ITEMS = [
  // ── Run 1: Senior Software Engineer, Bengaluru (last 7 days) ──
  { id: '4407779028', title: 'Senior Java Software Engineer', company: 'Deloitte', location: 'Bengaluru, Karnataka, India' },
  { id: '4398451931', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407757183', title: '(IND) SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4408816274', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4399979593', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4410558285', title: 'Senior Software Engineer - WPF', company: 'Nemetschek Group', location: 'Bengaluru, Karnataka, India' },
  { id: '4344361401', title: 'Senior Staff Software Engineer', company: 'slice', location: 'Bengaluru, Karnataka, India' },
  { id: '4297739868', title: 'Senior Software Engineer (Infrastructure)', company: 'Databricks', location: 'Bengaluru, Karnataka, India' },
  { id: '4409363608', title: 'Senior Software Engineer - Front End', company: 'Infinite Convergence Solutions', location: 'Bengaluru, Karnataka, India' },
  { id: '4409365601', title: 'Senior Software Engineer - Back End', company: 'Infinite Convergence Solutions', location: 'Bengaluru, Karnataka, India' },
  { id: '4398467826', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407757184', title: '(IND) SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4400197073', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4362363782', title: 'Principal Software Engineer I - Periscope', company: 'McKinsey & Company', location: 'Bengaluru, Karnataka, India' },
  { id: '4409286718', title: 'Senior Software Engineer', company: 'eBay', location: 'Bengaluru, Karnataka, India' },
  { id: '4375216601', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407762576', title: 'Senior Software Engineer - Node JS', company: 'Emirates NBD', location: 'Bangalore Urban, Karnataka, India' },
  { id: '4409342169', title: 'Senior Software Test Engineer', company: 'BlackLine India', location: 'Bengaluru, Karnataka, India' },
  { id: '4384791627', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4297754026', title: 'Senior Staff Software Engineer (Backend)', company: 'Databricks', location: 'Bengaluru, Karnataka, India' },
  { id: '4408651565', title: 'Staff Software Engineer / Lead Software Engineer', company: 'Endava', location: 'Bengaluru, Karnataka, India' },
  { id: '4408659453', title: 'Senior Software Engineer', company: 'Endava', location: 'Bengaluru, Karnataka, India' },
  { id: '4398457891', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4410941869', title: 'Senior Software Engineer - Mobility Verticals', company: 'Uber', location: 'Bengaluru, Karnataka, India' },
  { id: '4399520476', title: 'Senior, Software Engineer', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4398833648', title: '(IND) SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4363191656', title: 'Senior, Software Engineer', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407744280', title: 'Principal Software Engineer', company: 'Okta', location: 'Bengaluru, Karnataka, India' },
  { id: '4399510545', title: 'Senior, Software Engineer', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4335999823', title: 'Senior Backend Software Engineer', company: 'Nexthink', location: 'Bengaluru, Karnataka, India' },
  { id: '4379836986', title: 'Principal UI Software Engineer', company: 'Okta', location: 'Bengaluru, Karnataka, India' },
  { id: '4379643701', title: 'Sr. Software Engineer, Commerce Backend', company: 'Docusign', location: 'Bengaluru, Karnataka, India' },
  { id: '4410025900', title: 'Principal Software Engineer', company: 'MakeMyTrip', location: 'Bengaluru, Karnataka, India' },
  { id: '4322051959', title: 'Senior Software Engineer', company: 'Kobie', location: 'Bengaluru, Karnataka, India' },
  { id: '4385753873', title: '(IND) SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4401172463', title: 'Senior Software Engineer, HighTide', company: 'Google', location: 'Bengaluru, Karnataka, India' },
  { id: '4398695304', title: 'Senior, Software Engineer', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4297750027', title: 'Sr Staff Software Engineer (Backend)', company: 'Databricks', location: 'Bengaluru, Karnataka, India' },
  { id: '4407759247', title: 'Senior Software Engineer - Full Stack', company: 'Emirates NBD', location: 'Bangalore Urban, Karnataka, India' },
  { id: '4348350415', title: 'Senior Software Engineer - Backend', company: 'Databricks', location: 'Bengaluru, Karnataka, India' },
  { id: '4411639934', title: 'Sr Software Engineer', company: 'Uber', location: 'Bengaluru, Karnataka, India' },
  { id: '4409303114', title: 'Senior Software Quality Assurance Engineer', company: 'Emmes', location: 'Bengaluru, Karnataka, India' },
  { id: '4410571050', title: 'Senior Software Engineer II, Payments Platform (Back End)', company: 'Flywire', location: 'Bengaluru, Karnataka, India' },
  { id: '4388198869', title: 'Senior Software Engineer - Frontend (Full Stack)', company: 'Cognite', location: 'Bengaluru, Karnataka, India' },
  { id: '4407750482', title: '(IND) SENIOR, SOFTWARE ENGINEER - Front End', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4346110070', title: 'Senior Software Engineer', company: 'Cognite', location: 'Bengaluru, Karnataka, India' },
  { id: '4409306465', title: 'Senior Software Engineer', company: 'Grid Dynamics', location: 'Bengaluru, Karnataka, India' },
  { id: '4407748859', title: '(IND) SENIOR, SOFTWARE ENGINEER - Front End', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4297726988', title: 'Senior Software Engineer (Backend)', company: 'Databricks', location: 'Bengaluru, Karnataka, India' },
  { id: '4399000996', title: 'Principal Software Engineer', company: 'Okta', location: 'Bengaluru, Karnataka, India' },
  { id: '4399515556', title: 'SENIOR, SOFTWARE ENGINEER - Frontend', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407769020', title: '(IND) SENIOR, SOFTWARE ENGINEER - Front End', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4354298593', title: 'Senior Software Engineer', company: 'eBay', location: 'Bengaluru, Karnataka, India' },
  { id: '4399506621', title: 'Senior, Software Engineer - Front End', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4398130745', title: 'Senior Software Engineer, Networking', company: 'Google', location: 'Bengaluru, Karnataka, India' },
  { id: '4408981993', title: 'Senior Software Engineer', company: 'Rippling', location: 'Bengaluru, Karnataka, India' },
  { id: '4411274635', title: 'Sr Software Engineer-Backend', company: 'Uber', location: 'Bengaluru, Karnataka, India' },
  { id: '4409320016', title: 'Senior Software Engineer (C#.Net)', company: 'Deltek', location: 'Bangalore Urban, Karnataka, India' },
  { id: '4399674047', title: 'Senior Software Engineer, Infrastructure', company: 'Google', location: 'Bengaluru, Karnataka, India' },
  { id: '4408990350', title: 'Senior Software Engineer', company: 'Delart', location: 'Bengaluru, Karnataka, India' },
  { id: '4409332758', title: 'Senior Software Quality Assurance Engineer', company: 'Emmes Group', location: 'Bengaluru, Karnataka, India' },
  { id: '4407206752', title: 'Lead Software Developer (Remote, Full-Time) [HR173]', company: 'Smart Working', location: 'Bengaluru, Karnataka, India' },
  { id: '4379156314', title: 'Sr. Software Engineer, Commerce Frontend', company: 'Docusign', location: 'Bengaluru, Karnataka, India' },
  { id: '4407740258', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407741275', title: '(IND) SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4398827718', title: 'Senior Software Engineer - UI', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4407736254', title: '(IND) SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4406280270', title: 'Senior Software Engineer Fullstack', company: "Lowe's India", location: 'Bengaluru, Karnataka, India' },
  { id: '4409338575', title: 'Senior Software Engineer', company: 'nference', location: 'Bengaluru, Karnataka, India' },
  { id: '4407787526', title: 'SENIOR, SOFTWARE ENGINEER', company: 'Walmart Global Tech India', location: 'Bengaluru, Karnataka, India' },
  { id: '4409245593', title: 'Senior Java Developer', company: 'Miratech', location: 'Bengaluru, Karnataka, India' },
  { id: '4410469724', title: '.Net - Lead Software Engineer', company: 'REGUL SOLUTIONS', location: 'Bengaluru, Karnataka, India' },
  { id: '4325260307', title: 'Senior Staff Software Engineer', company: 'Intuit', location: 'Bengaluru, Karnataka, India' },
  { id: '4369764602', title: 'Sr. Software Development Engineer', company: 'Amazon', location: 'Bengaluru, Karnataka, India' },
  { id: '4407764164', title: 'Lead Software Engineer (Full Stack- MERN)', company: 'Emirates NBD', location: 'Bengaluru, Karnataka, India' },

  // ── Run 2: AI Engineer, India (last 7 days) ──
  { id: '4408844979', title: 'Machine Learning Engineer', company: 'Luxoft', location: 'Hyderabad, Telangana, India' },
  { id: '4411601831', title: 'Data Scientist', company: 'HSBC', location: 'Bengaluru, Karnataka, India' },
  { id: '4388886277', title: 'AI / ML Engineer', company: 'Accenture in India', location: 'Bengaluru, Karnataka, India' },
  { id: '4408996399', title: 'Data Scientist', company: 'GTT Data Solutions Ltd', location: 'Bengaluru, Karnataka, India' },
  { id: '4344003603', title: 'AI Engineer', company: 'Zinier', location: 'Bengaluru, Karnataka, India' },
  { id: '4388959680', title: 'AI Automation Engineer', company: 'StockX', location: 'Bengaluru, Karnataka, India' },
  { id: '4409762628', title: 'Machine Learning Engineer', company: 'Sagility', location: 'Bangalore Urban, Karnataka, India' },
  { id: '4408858536', title: 'Data Scientist', company: 'Straive', location: 'Greater Bengaluru Area' },
  { id: '4408809629', title: 'ReactJs AI Frontend Developer', company: 'Persistent Systems', location: 'Pune City, Maharashtra, India' },
  { id: '4407953748', title: 'Artificial Intelligence Engineer', company: 'FinThrive', location: 'India' },
  { id: '4408664369', title: 'Data Scientist - AI (Python) (Immediate Joiners only)', company: 'TalentQuell', location: 'Bengaluru, Karnataka, India' },
  { id: '4409792099', title: 'Python Developer', company: 'Recro', location: 'Mumbai Metropolitan Region' },
  { id: '4408489318', title: 'Gen AI Engineer', company: 'Persistent Systems', location: 'Pune City, Maharashtra, India' },
  { id: '4248968949', title: 'Data Scientist', company: 'UPS', location: 'Chennai, Tamil Nadu, India' },
  { id: '4409305288', title: 'Data Scientist', company: 'GTT Data Solutions Ltd', location: 'Pune Division, Maharashtra, India' },
  { id: '4409353640', title: 'Data Scientist', company: 'IDFC FIRST Bank', location: 'Mumbai, Maharashtra, India' },
  { id: '4248971859', title: 'Data Scientist - Pytorch/TensorFlow', company: 'UPS', location: 'Chennai, Tamil Nadu, India' },
  { id: '4410795412', title: 'Software Engineer, Machine Learning', company: 'Ema', location: 'Bengaluru, Karnataka, India' },
  { id: '4409267549', title: 'Data Scientist - Gen AI', company: 'Fractal', location: 'Bengaluru, Karnataka, India' },
  { id: '4409390122', title: 'Data Scientist (Product Company, Mumbai)', company: 'Shaadi.com', location: 'Mumbai, Maharashtra, India' },
  { id: '4248975118', title: 'Data Scientist', company: 'UPS', location: 'Chennai, Tamil Nadu, India' },
  { id: '4407797345', title: 'Artificial Intelligence Engineer', company: 'Knorr-Bremse Technology Center India', location: 'Chennai, Tamil Nadu, India' },
  { id: '4408654729', title: 'AI ML Engineer - Data & Analytics', company: 'The Hartford India', location: 'Hyderabad, Telangana, India' },
  { id: '4411227981', title: 'Machine Learning Engineer - L3', company: 'RZR', location: 'Bengaluru, Karnataka, India' },
  { id: '4408184335', title: 'AI Developer - Google Gemini Enterprise', company: 'Tech Mahindra', location: 'Bengaluru, Karnataka, India' },
  { id: '4410544124', title: 'Artificial Intelligence Engineer', company: 'Greystar', location: 'Bengaluru, Karnataka, India' },
  { id: '4408645839', title: 'Data Scientist - Data & Analytics', company: 'The Hartford India', location: 'Hyderabad, Telangana, India' },
  { id: '4248970933', title: 'Data Scientist - Pytorch/TensorFlow', company: 'UPS', location: 'Chennai, Tamil Nadu, India' },
  { id: '4410494520', title: 'Machine Learning Engineer', company: 'Crudcook', location: 'Bengaluru, Karnataka, India' },
  { id: '4248970810', title: 'Data Scientist', company: 'UPS', location: 'Chennai, Tamil Nadu, India' },
  { id: '4408683062', title: 'Machine Learning Engineer II', company: 'Kuku', location: 'Bengaluru, Karnataka, India' },
  { id: '4399502472', title: 'ML Engineer I', company: 'UST', location: 'Bengaluru, Karnataka, India' },
  { id: '4408191158', title: 'Data Scientist', company: 'Astek', location: 'Kochi, Kerala, India' },
  { id: '4399560274', title: 'AI Engineer', company: 'Onit India', location: 'Pune Division, Maharashtra, India' },
  { id: '4409287399', title: 'Artificial Intelligence Engineer', company: 'LTIMindtree', location: 'Pune City, Maharashtra, India' },
  { id: '4410574559', title: 'Data Scientist', company: 'Crescendo Global', location: 'Delhi, India' },
  { id: '4402908693', title: 'Software Engineer - AI', company: 'Anaplan', location: 'Gurgaon, Haryana, India' },
  { id: '4378063866', title: 'AI Engineer II (Remote)', company: 'Sezzle', location: 'India' },
  { id: '4409786950', title: 'Machine Learning Engineer', company: 'S&P Global', location: 'Hyderabad, Telangana, India' },
  { id: '4402907783', title: 'Software Engineer - AI', company: 'Anaplan', location: 'Gurgaon, Haryana, India' },
  { id: '4410473470', title: 'Data Scientist', company: 'Sequoia', location: 'Bengaluru, Karnataka, India' },
  { id: '4410557860', title: 'Machine Learning Engineer', company: 'HuntingCube', location: 'Bengaluru, Karnataka, India' },
  { id: '4395959899', title: 'Python Developer - Agentic AI, Cloud & CI/CD', company: 'UST', location: 'Bengaluru, Karnataka, India' },
  { id: '4325461135', title: 'Data Scientist', company: 'Forbes Advisor', location: 'Mumbai Metropolitan Region' },
  { id: '4410793365', title: 'Python Developer', company: 'NetApp', location: 'Bengaluru, Karnataka, India' },
  { id: '4408424592', title: 'Data Scientist', company: 'Tezo', location: 'Hyderabad, Telangana, India' },
  { id: '4410474629', title: 'Data Scientist', company: 'Infosys Finacle', location: 'Bengaluru, Karnataka, India' },
  { id: '4409627156', title: 'Machine Learning Engineer', company: 'Icertis', location: 'Pune Division, Maharashtra, India' },
  { id: '4410559543', title: 'Full Stack AI Engineer', company: 'Grazitti Interactive', location: 'Panchkula, Haryana, India' },
  { id: '4401848888', title: 'Data Scientist', company: 'Infosys', location: 'Bengaluru East, Karnataka, India' },
  { id: '4267435259', title: 'Software Engineer, ML Systems', company: 'eBay', location: 'Bengaluru, Karnataka, India' },
  { id: '4408195479', title: 'Staff Python Developer, AI/ML', company: 'Kinaxis', location: 'Bengaluru, Karnataka, India' },
  { id: '4408166563', title: 'AI Software Engineer', company: 'IBM', location: 'Bengaluru, Karnataka, India' },
  { id: '4408406267', title: 'Data Scientist', company: 'HDFC Bank', location: 'Navi Mumbai, Maharashtra, India' },
  { id: '4409767693', title: 'Machine Learning Engineer', company: 'NielsenIQ', location: 'Vadodara, Gujarat, India' },
  { id: '4409702703', title: 'Machine Learning Engineer', company: 'Codelogicx', location: 'Kolkata, West Bengal, India' },
  { id: '4409245353', title: 'Data Scientist', company: 'Deloitte', location: 'Bengaluru, Karnataka, India' },
  { id: '4408989428', title: 'AI/ML, Python', company: 'LTIMindtree', location: 'Bhubaneswar, Odisha, India' },
  { id: '4410727677', title: 'AI Developer', company: 'GEDU Services', location: 'Noida, Uttar Pradesh, India' },
  { id: '4408417143', title: 'Data Scientist', company: 'EXL', location: 'Gurugram, Haryana, India' },
  { id: '4398834257', title: 'Data Scientist - Artificial Intelligence', company: 'IBM', location: 'Bengaluru, Karnataka, India' },
  { id: '4410575474', title: 'Principal Applied AI Engineer - Internal Tools', company: 'Poppulo', location: 'Bengaluru, Karnataka, India' },
  { id: '4410753353', title: 'Machine Learning Engineer', company: 'Luxoft', location: 'Hyderabad, Telangana, India' },
  { id: '4399581010', title: 'Data Scientist - Artificial Intelligence', company: 'IBM', location: 'Pune Division, Maharashtra, India' },
  { id: '4388890129', title: 'AI / ML Engineer', company: 'Accenture in India', location: 'Greater Chennai Area' },
  { id: '4409190695', title: 'Data Scientist', company: 'Knowl', location: 'Bengaluru, Karnataka, India' },
  { id: '4408487389', title: 'Senior AI/ML Engineer', company: 'Access Healthcare', location: 'Bengaluru, Karnataka, India' },
  { id: '4392903216', title: 'Data Scientist', company: 'EXL', location: 'Bengaluru, Karnataka, India' },
  { id: '4388881476', title: 'AI / ML Engineer', company: 'Accenture in India', location: 'Bengaluru, Karnataka, India' },
  { id: '4389601056', title: 'AI / ML Engineer', company: 'Accenture in India', location: 'Bengaluru, Karnataka, India' },
  { id: '4385765716', title: 'AI / ML Engineer', company: 'Accenture in India', location: 'Gurugram, Haryana, India' },
  { id: '4408986760', title: 'AI Enablement Engineer', company: 'Neurealm', location: 'Bengaluru, Karnataka, India' },
  { id: '4409953463', title: 'AI ML Engineer - Generative AI - 5+ years - Upto 40LPA', company: 'The BigCjobs.com', location: 'Navi Mumbai, Maharashtra, India' },
  { id: '4408654178', title: 'AI/ML Engineer', company: 'Unosecur', location: 'Bengaluru, Karnataka, India' },
  { id: '4409258982', title: 'Artificial Intelligence Engineer', company: 'DotKonnekt', location: 'Bengaluru, Karnataka, India' },
];

// ── Title filter (mirrors scan.mjs) ─────────────────────────────────

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
      if (url) seen.add(canonicalize(url));
    }
  }
  if (existsSync(PIPELINE_PATH)) {
    const text = readFileSync(PIPELINE_PATH, 'utf-8');
    for (const m of text.matchAll(/(https?:\/\/\S+)/g)) seen.add(canonicalize(m[1]));
  }
  if (existsSync(APPLICATIONS_PATH)) {
    const text = readFileSync(APPLICATIONS_PATH, 'utf-8');
    for (const m of text.matchAll(/https?:\/\/[^\s|)]+/g)) seen.add(canonicalize(m[0]));
  }
  return seen;
}

function loadSeenCompanyRoles() {
  const seen = new Set();
  if (!existsSync(APPLICATIONS_PATH)) return seen;
  const text = readFileSync(APPLICATIONS_PATH, 'utf-8');
  for (const m of text.matchAll(/\|[^|]+\|[^|]+\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/g)) {
    const company = m[1].trim().toLowerCase();
    const role = m[2].trim().toLowerCase();
    if (company && role && company !== 'company') seen.add(`${company}::${role}`);
  }
  return seen;
}

function canonicalize(url) {
  if (!url) return '';
  const m = url.match(/linkedin\.com\/jobs\/view\/(?:[^/]*-)?(\d{8,})/);
  if (m) return `https://www.linkedin.com/jobs/view/${m[1]}/`;
  return url.split('?')[0].replace(/\/$/, '').replace(/[|,]+$/, '');
}

// ── Writers ─────────────────────────────────────────────────────────

function appendToPipeline(offers) {
  if (offers.length === 0) return;
  let text = readFileSync(PIPELINE_PATH, 'utf-8');
  const marker = '## Pendientes';
  const idx = text.indexOf(marker);
  const lines = offers.map(o => `- [ ] ${o.url} | ${o.company} | ${o.title}`).join('\n');

  if (idx === -1) {
    const procIdx = (() => {
      const a = text.indexOf('## Procesados');
      const b = text.indexOf('## Procesadas');
      if (a !== -1 && b !== -1) return Math.min(a, b);
      return a !== -1 ? a : b;
    })();
    const insertAt = procIdx === -1 ? text.length : procIdx;
    const block = `\n${marker}\n\n${lines}\n\n`;
    text = text.slice(0, insertAt) + block + text.slice(insertAt);
  } else {
    const after = idx + marker.length;
    const next = text.indexOf('\n## ', after);
    const insertAt = next === -1 ? text.length : next;
    text = text.slice(0, insertAt) + '\n' + lines + '\n' + text.slice(insertAt);
  }
  writeFileSync(PIPELINE_PATH, text, 'utf-8');
}

function appendToScanHistory(offers, date) {
  if (!existsSync(SCAN_HISTORY_PATH)) {
    writeFileSync(SCAN_HISTORY_PATH, 'url\tfirst_seen\tportal\ttitle\tcompany\tstatus\n', 'utf-8');
  }
  const lines = offers.map(o =>
    `${o.url}\t${date}\t${o.source}\t${o.title.replace(/\t/g, ' ')}\t${o.company.replace(/\t/g, ' ')}\tadded`
  ).join('\n') + '\n';
  appendFileSync(SCAN_HISTORY_PATH, lines, 'utf-8');
}

// ── Main ────────────────────────────────────────────────────────────

const dryRun = process.argv.includes('--dry-run');
const config = yaml.load(readFileSync(PORTALS_PATH, 'utf-8'));
const titleFilter = buildTitleFilter(config.title_filter);
const seenUrls = loadSeenUrls();
const seenCompanyRoles = loadSeenCompanyRoles();
const date = new Date().toISOString().slice(0, 10);

let totalFound = ITEMS.length, totalFiltered = 0, totalDupes = 0;
const newOffers = [];

for (const it of ITEMS) {
  const url = `https://www.linkedin.com/jobs/view/${it.id}/`;
  if (!titleFilter(it.title)) { totalFiltered++; continue; }
  if (seenUrls.has(url)) { totalDupes++; continue; }
  const cr = `${it.company.toLowerCase()}::${it.title.toLowerCase()}`;
  if (seenCompanyRoles.has(cr)) { totalDupes++; continue; }
  seenUrls.add(url);
  seenCompanyRoles.add(cr);
  newOffers.push({ url, title: it.title, company: it.company, location: it.location, source: 'linkedin-apify' });
}

if (!dryRun && newOffers.length > 0) {
  appendToPipeline(newOffers);
  appendToScanHistory(newOffers, date);
}

console.log(`\n${'━'.repeat(45)}`);
console.log(`LinkedIn Apify Scan — ${date}`);
console.log(`${'━'.repeat(45)}`);
console.log(`Total jobs found:      ${totalFound}`);
console.log(`Filtered by title:     ${totalFiltered} removed`);
console.log(`Duplicates:            ${totalDupes} skipped`);
console.log(`New offers added:      ${newOffers.length}`);
if (newOffers.length > 0) {
  console.log('\nNew offers:');
  for (const o of newOffers) console.log(`  + ${o.company} | ${o.title} | ${o.location}`);
  if (dryRun) console.log('\n(dry run — re-run without --dry-run to commit)');
  else console.log(`\nSaved → ${PIPELINE_PATH}\nSaved → ${SCAN_HISTORY_PATH}`);
}
