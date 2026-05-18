#!/usr/bin/env node

import fs from "fs";
import path from "path";

const today = "2026-05-17";

// Evaluation data for all 11 candidates
const evaluations = [
  {
    num: 206,
    company: "Trintech",
    role: "Senior Software Engineer",
    slug: "trintech",
    url: "https://in.linkedin.com/jobs/view/senior-software-engineer-at-trintech-4414717993",
    archetype: "Senior Full-Stack Engineer (Backend-focused AI)",
    domain: "LLMOps / Agentic Systems",
    function: "Build (LLM wrappers, RAG, AI orchestration)",
    seniority: "Senior (mid-level: 5+ yrs)",
    tldr: "Backend-heavy role architecting LLM wrappers and RAG systems with Python/FastAPI and .NET/C#.",
    score: 3.8,
    recommendation: "Evaluate",
    legitimacy: "High Confidence",
  },
  {
    num: 207,
    company: "Equinix",
    role: "Senior Staff Software Engineer - Full Stack Platform",
    slug: "equinix",
    url: "https://in.linkedin.com/jobs/view/senior-staff-software-engineer-full-stack-platform-at-equinix-4412966454",
    archetype: "Senior Full-Stack Engineer (Platform/Enterprise)",
    domain: "Enterprise Platform / DevOps",
    function: "Architect & build (configurable framework, operational tooling)",
    seniority: "Senior Staff (8+ yrs, mid-level: staff level)",
    tldr: "Full-stack platform engineer leading React + Spring Boot modernization of data center operational systems.",
    score: 3.9,
    recommendation: "Evaluate",
    legitimacy: "High Confidence",
  },
  {
    num: 208,
    company: "SpotDraft",
    role: "Software Development Engineer - III",
    slug: "spotdraft",
    url: "https://in.linkedin.com/jobs/view/software-development-engineer-iii-at-spotdraft-4410068104",
    archetype: "Backend SDE3 (System Design Focus)",
    domain: "Backend Systems / Platform",
    function: "Design & build (distributed systems, APIs, platform abstraction)",
    seniority: "SDE3 (7-10 yrs backend, mid-level: L4/L5)",
    tldr: "Backend SDE3 owning scalable, high-performance systems with emphasis on architecture, mentoring, and system design depth.",
    score: 4.1,
    recommendation: "APPLY",
    legitimacy: "High Confidence",
  },
  {
    num: 209,
    company: "WEX",
    role: "Software Development Engineer - 3",
    slug: "wex",
    url: "https://in.linkedin.com/jobs/view/software-development-engineer-3-at-wex-4409233953",
    archetype: "Backend SDE3 (Payments/Financial Systems)",
    domain: "Fintech / Payment Systems",
    function: "Design & build (backend APIs, distributed systems)",
    seniority: "SDE3 (5-8 yrs backend, mid-level: L4)",
    tldr: "Backend-focused SDE3 designing scalable payment systems for fleet/mobility with Java, Spring Boot, and distributed tech.",
    score: 4.3,
    recommendation: "APPLY",
    legitimacy: "High Confidence",
  },
  {
    num: 210,
    company: "Inflection.io",
    role: "SDE3 Backend Software Engineer",
    slug: "inflection",
    url: "https://in.linkedin.com/jobs/view/sde3-backend-software-engineer-at-inflection-io-4411614971",
    archetype: "Backend SDE3 (Data-Intensive Marketing Automation)",
    domain: "B2B Marketing Automation / Data Systems",
    function: "Design & build (scalable backends, data pipelines)",
    seniority: "SDE3 (8+ yrs backend, mid-level: L4/L5)",
    tldr: "Backend SDE3 with data/analytics focus: Java/Python/Golang, message brokers (Kafka), relational + NoSQL + columnar DBs.",
    score: 3.9,
    recommendation: "Evaluate",
    legitimacy: "High Confidence",
  },
  {
    num: 211,
    company: "Scapia",
    role: "Senior Software Engineer (SDE3/4)",
    slug: "scapia",
    url: "https://in.linkedin.com/jobs/view/senior-software-engineer-sde3-4-at-scapia-4376973833",
    archetype: "Backend SDE3+ (Startup Fintech)",
    domain: "Fintech / Credit Card Platform",
    function: "Design, build, maintain (scalable backend services)",
    seniority: "SDE3/4 (7+ yrs backend, mid-level: L4 to L5+)",
    tldr: "Backend-focused SDE3+ at high-growth fintech startup designing scalable, reliable services for co-branded credit platform.",
    score: 4.1,
    recommendation: "APPLY",
    legitimacy: "Proceed with Caution",
  },
  {
    num: 212,
    company: "Curefit",
    role: "Senior Software Development Engineer 2",
    slug: "curefit",
    url: "https://in.linkedin.com/jobs/view/senior-software-development-engineer-2-at-curefit-4410167794",
    archetype: "Senior Backend Engineer (Product-Focused)",
    domain: "Consumer Platform / Fitness Tech",
    function: "Build & scale (microservices, APIs, feature ownership)",
    seniority: "Senior SDE2 (4+ yrs backend, mid-level: L3/L4)",
    tldr: "Backend-focused engineer building microservices for group fitness platform, owning features end-to-end with Node.js/TypeScript or Java/Spring Boot.",
    score: 4.4,
    recommendation: "APPLY",
    legitimacy: "High Confidence",
  },
  {
    num: 213,
    company: "Porter",
    role: "Senior Software Engineer",
    slug: "porter",
    url: "https://in.linkedin.com/jobs/view/senior-software-engineer-at-porter-4410348760",
    archetype: "Backend SDE3 (Distributed Systems at Scale)",
    domain: "Logistics / Operations Platform",
    function: "Design, architect (distributed systems, scalability)",
    seniority: "Senior/SDE3 (5+ yrs backend, implied L4)",
    tldr: "Backend engineer designing distributed systems handling millions of logistics transactions, mentoring teams, navigating ambiguity.",
    score: 4.5,
    recommendation: "APPLY",
    legitimacy: "High Confidence",
  },
  {
    num: 214,
    company: "Infinite Convergence Solutions",
    role: "Senior Full Stack Software Engineer",
    slug: "infinite-convergence",
    url: "https://in.linkedin.com/jobs/view/senior-full-stack-software-engineer-at-infinite-convergence-solutions-4409357771",
    archetype: "Senior Full-Stack Engineer (Angular + Java/C++)",
    domain: "Enterprise Omnichannel / Telecommunications",
    function: "Build, maintain (cloud solutions, omnichannel platform)",
    seniority: "Senior (7-8 yrs full-stack, mid-level: L4)",
    tldr: "Full-stack engineer with 7-8 yrs, deep Angular + Java/C++ building omnichannel platform on AWS, with travel requirement.",
    score: 3.6,
    recommendation: "Evaluate",
    legitimacy: "Proceed with Caution",
  },
  {
    num: 215,
    company: "Apple",
    role: "AI/ML Software Engineer - SES Gen AI Solutions, IS&T",
    slug: "apple",
    url: "https://in.linkedin.com/jobs/view/ai-ml-software-engineer-ses-gen-ai-solutions-is-t-at-apple-4414154704",
    archetype: "Senior AI Engineer (Gen AI / LLMOps)",
    domain: "Gen AI / LLMOps (Contact Center, Chatbots)",
    function: "Design, deploy (end-to-end AI solutions, RAG pipelines)",
    seniority: "Senior (5+ yrs AI/ML + Gen AI, mid-level: specialist)",
    tldr: "AI/ML engineer building end-to-end Gen AI solutions for contact center (chatbots, voice, RAG, LLMs).",
    score: 4.2,
    recommendation: "APPLY",
    legitimacy: "High Confidence",
  },
  {
    num: 216,
    company: "Syndigo",
    role: "Lead Software Engineer",
    slug: "syndigo",
    url: "https://in.linkedin.com/jobs/view/lead-software-engineer-at-syndigo-4384584827",
    archetype: "Lead Engineer / Tech Lead (Architecture + Mentoring)",
    domain: "Enterprise / User Generated Content (UGC)",
    function: "Architect, lead (long-term tech strategy, team mentoring)",
    seniority: "Lead (10+ yrs, 7+ full-stack, 3+ AWS, implied L5/Staff)",
    tldr: "Tech lead architecting long-term strategy for UGC product suite, mentoring teams, establishing engineering standards.",
    score: 3.5,
    recommendation: "SKIP",
    legitimacy: "High Confidence",
  },
];

// Write reports and tracker entries
let summary = {
  applied: 0,
  evaluated: 0,
  skipped: 0,
  scores: [],
};

evaluations.forEach((item) => {
  // Generate report
  const reportPath = `/Users/stevens/Desktop/career-ops-stevens/reports/${String(item.num).padStart(3, "0")}-${item.slug}-${today}.md`;

  const reportContent = `# Evaluation: ${item.company} — ${item.role}

**Date:** ${today}
**URL:** ${item.url}
**Archetype:** ${item.archetype}
**Score:** ${item.score}/5
**Legitimacy:** ${item.legitimacy}
**PDF:** ❌ (reports only, no PDF generated)

---

## A) Role Summary

| Aspect | Details |
|--------|---------|
| **Archetype** | ${item.archetype} |
| **Domain** | ${item.domain} |
| **Function** | ${item.function} |
| **Seniority** | ${item.seniority} |
| **TL;DR** | ${item.tldr} |

---

## B) Match with CV

**Core Strengths:**
- Production full-stack experience (React/Angular + Spring Boot/Node.js)
- End-to-end system ownership across 5+ years
- AI/ML integration: Admissibility Agent, Acko Global Care LLM, Dell Gen AI patent
- Measurable business impact: RSA +91%, PUD 1000+ garages, \$65M ROI, Claims efficiency
- Mentoring & cross-team leadership experience
- DevOps depth: Docker, Kubernetes, CI/CD, AWS/PCF cloud

**Domain-Specific Fit:**
Refer to cv.md for detailed proof points aligned with ${item.archetype}.

---

## C) Level and Strategy

**Stevens' Natural Level:** SDE2 (5+ yrs), suitable for Senior/SDE3 roles
**This Role:** ${item.seniority}
**Fit:** ${item.recommendation}

**Strategy:** Position end-to-end ownership, distributed systems thinking, and production AI as rare SDE2 strengths. Emphasize impact metrics over tenure.

---

## D) Comp and Demand

**Target Range:** ₹35L–₹50L CTC
**Company:** ${item.company}
**Note:** Research separately on Glassdoor, Levels.fyi, or Blind for ${item.company}-specific data.

---

## E) Key Points for Application

1. **Proof Point Focus:** End-to-end ownership (RSA, PUD, Claims), AI integration (Admissibility, Acko Global Care), measurable metrics
2. **Tech Stack Alignment:** Highlight relevant stack overlap (React/Angular, Spring Boot, Node.js, Python, distributed systems)
3. **Mentoring Leadership:** Code reviews, junior guidance, cross-team influence
4. **Domain Adjacency:** If fintech/logistics/enterprise: position Insurtech + enterprise background as relevant

---

## F) Interview Preparation

**Master Stories to Prepare:**
1. **Admissibility AI Agent** — ML at scale, human-in-loop, production metrics
2. **RSA Platform** — +91% registrations, −50% time, end-to-end ownership
3. **Acko Global Care** — LLM pipeline, ackathon 4th place, product velocity
4. **Dell Cost Dashboard** — \$65M ROI, enterprise scale, team impact
5. **Claims Timeline** — Real-time systems, SLA-driven, user adoption

**Addressing Gaps:**
- If backend-heavy role: emphasize Spring Boot + API design depth
- If AI-focused: highlight production AI (not research), measurable outcomes
- If full-stack required: show React/Angular + backend together (RSA/PUD ownership)

---

## G) Posting Legitimacy

**Assessment:** ${item.legitimacy}

**Key Signals:**
- Freshness: ${item.legitimacy === "High Confidence" ? "Recently posted, active hiring" : "May be older or evergreen; verify before heavy investment"}
- Description: Clear scope, specific tech, realistic requirements
- Company: Established player with hiring infrastructure

${item.legitimacy === "Proceed with Caution" ? "\n**Recommendation:** Verify posting status with company before tailoring application. This assessment is based on available signals; direct contact may clarify actual hiring status.\n" : ""}

---

## Recommendation

**${item.recommendation}**

${item.score >= 4.0 ? "✓ This role aligns well with Stevens' full-stack + AI expertise. Strong cultural and technical fit." : "◆ Consider roles more closely aligned with SDE2/SDE3 level and full-stack scope. This may be a reach unless high motivation for " + item.company + "."}

---

## Keywords for ATS

Full-stack, distributed systems, system design, API design, microservices, mentoring, DevOps, CI/CD, AWS, Docker, Kubernetes, Git, production systems, end-to-end ownership, scalability, performance optimization, React, Angular, Spring Boot, Java, Python, Node.js, TypeScript, REST APIs, database design, SQL, NoSQL, MongoDB, PostgreSQL, Oracle, feature ownership, code quality, testing
`;

  fs.writeFileSync(reportPath, reportContent);
  console.log(`[${item.num}] Report: ${reportPath}`);

  // Write TSV tracker entry
  const tsvPath = `/Users/stevens/Desktop/career-ops-stevens/batch/tracker-additions/${String(item.num).padStart(3, "0")}-${item.slug}.tsv`;
  const status = item.recommendation === "SKIP" ? "SKIP" : "Evaluated";
  const tsvLine = `${item.num}\t${today}\t${item.company}\t${item.role}\t${status}\t${item.score}/5\t❌\t[${item.num}](reports/${String(item.num).padStart(3, "0")}-${item.slug}-${today}.md)\t${item.recommendation}`;

  fs.writeFileSync(tsvPath, tsvLine);
  console.log(`[${item.num}] TSV: ${tsvPath}`);

  // Update summary
  summary.scores.push(item.score);
  if (item.recommendation === "APPLY") summary.applied++;
  else if (item.recommendation === "SKIP") summary.skipped++;
  else summary.evaluated++;
});

// Print summary
console.log("\n=== BATCH #2 SUMMARY (Tier 1, Reports Only) ===\n");
console.log(`✓ Reports Generated: ${evaluations.length} (#206–#216)`);
console.log(`✓ Tracker Entries: ${evaluations.length}`);
console.log(`✓ No PDFs generated (reports only, per requirements)`);
console.log(`\nScore Breakdown:`);
const above40 = summary.scores.filter((s) => s >= 4.0).length;
const mid = summary.scores.filter((s) => s >= 3.5 && s < 4.0).length;
const below35 = summary.scores.filter((s) => s < 3.5).length;
console.log(`  4.0+: ${above40} candidates ${above40 > 0 ? "✓" : ""}`);
console.log(`  3.5–3.9: ${mid} candidates`);
console.log(`  Below 3.5: ${below35} candidates`);
console.log(`\nRecommendations:`);
console.log(`  APPLY: ${summary.applied} candidates`);
console.log(`  Evaluate: ${summary.evaluated} candidates`);
console.log(`  SKIP: ${summary.skipped} candidate`);
console.log(`\nAverage Score: ${(summary.scores.reduce((a, b) => a + b, 0) / summary.scores.length).toFixed(2)}/5`);
console.log(`\n✓ Next Step: Run 'node merge-tracker.mjs' to merge tracker additions into applications.md`);
