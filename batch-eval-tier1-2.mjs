#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Candidate data
const candidates = [
  {
    num: 206,
    company: "Trintech",
    role: "Senior Software Engineer",
    slug: "trintech",
    url: "https://in.linkedin.com/jobs/view/senior-software-engineer-at-trintech-4414717993",
  },
  {
    num: 207,
    company: "Equinix",
    role: "Senior Staff Software Engineer - Full Stack Platform",
    slug: "equinix",
    url: "https://in.linkedin.com/jobs/view/senior-staff-software-engineer-full-stack-platform-at-equinix-4412966454",
  },
  {
    num: 208,
    company: "SpotDraft",
    role: "Software Development Engineer - III",
    slug: "spotdraft",
    url: "https://in.linkedin.com/jobs/view/software-development-engineer-iii-at-spotdraft-4410068104",
  },
  {
    num: 209,
    company: "WEX",
    role: "Software Development Engineer - 3",
    slug: "wex",
    url: "https://in.linkedin.com/jobs/view/software-development-engineer-3-at-wex-4409233953",
  },
  {
    num: 210,
    company: "Inflection.io",
    role: "SDE3 Backend Software Engineer",
    slug: "inflection",
    url: "https://in.linkedin.com/jobs/view/sde3-backend-software-engineer-at-inflection-io-4411614971",
  },
  {
    num: 211,
    company: "Scapia",
    role: "Senior Software Engineer (SDE3/4)",
    slug: "scapia",
    url: "https://in.linkedin.com/jobs/view/senior-software-engineer-sde3-4-at-scapia-4376973833",
  },
  {
    num: 212,
    company: "Curefit",
    role: "Senior Software Development Engineer 2",
    slug: "curefit",
    url: "https://in.linkedin.com/jobs/view/senior-software-development-engineer-2-at-curefit-4410167794",
  },
  {
    num: 213,
    company: "Porter",
    role: "Senior Software Engineer",
    slug: "porter",
    url: "https://in.linkedin.com/jobs/view/senior-software-engineer-at-porter-4410348760",
  },
  {
    num: 214,
    company: "Infinite Convergence Solutions",
    role: "Senior Full Stack Software Engineer",
    slug: "infinite-convergence",
    url: "https://in.linkedin.com/jobs/view/senior-full-stack-software-engineer-at-infinite-convergence-solutions-4409357771",
  },
  {
    num: 215,
    company: "Apple",
    role: "AI/ML Software Engineer - SES Gen AI Solutions, IS&T",
    slug: "apple",
    url: "https://in.linkedin.com/jobs/view/ai-ml-software-engineer-ses-gen-ai-solutions-is-t-at-apple-4414154704",
  },
  {
    num: 216,
    company: "Syndigo",
    role: "Lead Software Engineer",
    slug: "syndigo",
    url: "https://in.linkedin.com/jobs/view/lead-software-engineer-at-syndigo-4384584827",
  },
];

console.log("Batch Evaluation: Tier 1 Batch #2 (11 candidates, reports only)");
console.log("Starting report generation at #206...\n");

candidates.forEach((c) => {
  console.log(`[${c.num}] ${c.company} — ${c.role}`);
});

console.log(
  "\nTo generate reports, use: node batch-eval-tier1-2-worker.mjs <num>"
);
