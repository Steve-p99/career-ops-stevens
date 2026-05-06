# Evaluation Report — Druva — Senior Staff Software Engineer, Distributed Filesystem

**Score:** 2.4/5
**URL:** https://www.druva.com/why-druva/explore/careers/jobs/8207141002/?gh_jid=8207141002
**Date:** 2026-04-24
**Legitimacy:** High Confidence
**PDF:** ❌

---

## A. CV Match — 2.0/5

The Distributed Filesystem team builds a petabyte-scale, distributed, services-oriented cloud file system on AWS — using S3, DynamoDB, Kinesis as underlying primitives, plus custom metadata management, versioning, and eventual consistency systems. Primary stack: Go/Python/C/C++, Linux/Unix, AWS-native services, Kubernetes.

**Overlap:**
- AWS and Kubernetes: Stevens has listed both (K8s in skills)
- Java/Spring Boot: partial — Stevens uses Spring Boot, but Druva FS uses Go/C primarily
- Distributed systems concepts: tangential

**Gaps:**
- Go and C/C++ are the core languages — Stevens has zero experience with either
- No storage, filesystem, or backup engineering background
- No petabyte-scale data platform experience
- No distributed storage concepts (LSM trees, FS metadata, CRDT, eventual consistency at FS level)
- No embedded indexing engine or key-value store engineering

This is one of the most specialized roles in the batch. Building a cloud filesystem from first principles is deep systems programming work — it requires years of low-level storage engineering that Stevens simply hasn't done. CV match is approximately 20-25%.

## B. North Star Alignment — 2.0/5

Distributed filesystem engineering at a data backup company is the polar opposite of Stevens' direction: Full-Stack + AI systems. There is no AI/ML component, no frontend, no product surface. The work is deep infrastructure — storage protocols, metadata durability, write amplification, read latency at petabyte scale.

This is genuinely important and impressive engineering. But it diverges completely from the AI-first trajectory Stevens has built and is not a domain where his Acko AI Agent, Gen AI Patent, or SDUI platform work provides any leverage.

## C. Compensation — 2.5/5

Levels.fyi: Druva Senior Staff SWE in India median ~₹53L total. Range ₹44L–₹63L for the Senior Staff band.

Same leveling problem as Report 030: this is an IC5+ role. At 5 years of experience, Stevens cannot be leveled at Senior Staff — Druva would assess him as Staff or Senior SWE, likely ₹25L–₹35L. The Senior Staff comp is not accessible without the required seniority. Additionally, Druva is not a comp leader — Glean, Razorpay, and Cohere pay significantly more for comparable profiles.

## D. Cultural Signals — 3.0/5

Same company context as Report 030. Druva Pune R&D is a mature, stable engineering org. The Distributed Filesystem team specifically is described as a founding-era team responsible for the core of Druva's technology moat — high technical bar, low churn, deep ownership culture.

**Positives:**
- High technical caliber team, strong systems engineering craft
- Long-tenured team with deep institutional knowledge
- Druva's core product — not at risk of being sunset

**Concerns:**
- Extremely specialized — skills learned here (distributed FS, cloud backup) have narrow portability
- No AI exposure, no frontend, no product feedback loop
- Likely slower pace of innovation vs. product SWE teams

## E. Red Flags — 1.5/5

**Critical:**
1. **Level mismatch:** Senior Staff = IC5+, requires 10-12 years. Stevens has ~5 years. Hard blocker.
2. **Specialization mismatch:** Distributed filesystem engineering requires years of low-level systems programming (C/C++, Go, storage internals). Stevens' background is application-layer product engineering. This is not a learning curve issue — it's a fundamentally different engineering discipline.
3. **Language gap:** Go/C/C++ are primary; Stevens has none.
4. **Location:** Pune-based; Stevens is in Bengaluru.
5. **Domain:** Backup/DR SaaS — narrowly specialized, limited AI career upside.

## F. Global Score — 2.4/5

**Recommend: SKIP**

This is the weakest fit in the Druva batch. The combination of level mismatch, specialization mismatch (distributed storage vs. product SWE), language gap (Go/C vs. Java/TypeScript/Python), and career direction divergence produces the lowest score. Do not apply.

| Block | Score |
|-------|-------|
| A. CV Match | 2.0 |
| B. North Star | 2.0 |
| C. Compensation | 2.5 |
| D. Culture | 3.0 |
| E. Red Flags | 1.5 |
| **Weighted Avg** | **2.4** |

## G. Posting Legitimacy

- **Status:** Active (Greenhouse job ID 8207141002, confirmed via Druva careers page redirect)
- **Tier:** High Confidence — Druva is a verified company. Greenhouse ATS. Job ID confirmed in LinkedIn and Druva careers index.
- **Note:** JD content not directly accessible via WebFetch (JS-rendered embed). Assessment based on Druva Foundation/Filesystem team profile patterns sourced from Glassdoor, Swooped, LinkedIn, and BuiltIn job postings for the same team.

## Recommended Action

**SKIP.** The hardest pass in this batch. The experience level gap and specialization mismatch (systems/storage engineering vs. product SWE) make this a non-starter. Stevens would not pass the initial screening, and even if he did, the role would be a step backward in his career trajectory.
