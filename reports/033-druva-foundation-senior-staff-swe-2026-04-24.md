# Evaluation Report — Druva — Senior Staff Software Engineer (Foundation)

**Score:** 2.5/5
**URL:** https://www.druva.com/why-druva/explore/careers/jobs/7892681002/?gh_jid=7892681002
**Date:** 2026-04-24
**Legitimacy:** High Confidence
**PDF:** ❌

---

## A. Match con CV — 2.2/5

The Foundation team is responsible for the lowest layer of Druva's platform: a petabyte-scale, distributed cloud file system on AWS. Components include the cloud filesystem itself, an indexing engine, a key-value store, and a big data pipeline for search, analytics, and compliance. AWS primitives: S3, DynamoDB, Kinesis. Primary languages: Go/Python/C/C++.

**Overlap:**
- AWS awareness: Stevens has listed cloud skills; however, depth in AWS (S3/DDB/Kinesis at scale) is different from application-layer AWS usage
- Kubernetes/Docker: present in Stevens' skill set
- Python: Stevens has Python skills, which partially aligns
- Big data pipeline awareness: tangential — Stevens has worked with data-adjacent systems

**Gaps:**
- Go and C/C++ primary — Stevens has no Go or C/C++ experience
- Distributed filesystem internals: FS metadata, versioning, eventual consistency — deeply specialized, no equivalent in Stevens' background
- Key-value store or indexing engine engineering: not in CV
- Storage/backup domain: zero overlap
- Platform-level component ownership (used by multiple internal teams): Stevens' work is product-facing, not platform-layer

The Foundation team is arguably the most technically demanding role in this batch. Building the storage substrate for a petabyte-scale cloud backup product is PhD/10yr+ systems engineering territory. Stevens' application-layer SWE background provides essentially no foundation (pun intended) for this work. Match is ~20%.

**One partial positive:** The JD explicitly mentions "AI first mindset to software development, with experience using genAI during various phases of SDLC from design to code to test using tools like 'cursor'." This is the only Druva JD with a GenAI reference and it matches Stevens' profile (Gen AI Patent, Admissibility AI Agent). However, this is listed as a mindset requirement, not a core competency requirement — it won't compensate for the systems engineering gap.

## B. North Star Alignment — 2.2/5

Foundation team work is deep platform infrastructure — the antithesis of product-facing AI systems work. Despite the GenAI mindset mention in the JD, the actual daily work is distributed storage engineering: file system metadata, replication, consistency protocols, compression, deduplication, indexing. There is no AI product to build here.

Stevens' North Star (Full-Stack + AI systems) requires proximity to LLMs, APIs, product surfaces, and user-facing applications. The Foundation team at Druva is about as far from that as it is possible to be in software engineering.

## C. Compensation — 2.5/5

Levels.fyi: Druva Senior Staff SWE India median ~₹53L total (₹44L–₹63L range). Foundation team may carry a slight premium given the specialization, but the range is consistent with other Senior Staff Druva roles.

Same leveling problem: Senior Staff requires 10-12 years. Stevens at 5 years would not be placed here. Realistic offer if somehow hired would be at Staff level: ~₹25L–₹38L. The Senior Staff band comp, while respectable, is not accessible without the prerequisite seniority. Druva also does not compete with the top-of-market comp offered by Glean, Anthropic, or Razorpay for AI-adjacent profiles.

## D. Cultural Signals — 3.0/5

The Foundation team is described as a "founding-era" team at Druva — high tenure, deep ownership, strong engineering culture. Engineers here have been with the company 5-8+ years in many cases. The team has strong institutional knowledge of the product and platform.

**Positives:**
- High-caliber systems engineering environment
- Long-term product ownership, not outsourced or deprioritized
- Intellectually challenging low-level problems

**Concerns:**
- Highly specialized, insular team — not easy to onboard or ramp
- Cultural fit requires deep systems engineering identity, not product SWE identity
- No AI/ML work despite GenAI mindset mention
- Innovation pace is slower in infrastructure vs. product teams

**Interesting signal:** The JD mentions "continuously evaluating and integrating emerging technologies" and genAI tooling (cursor) for SDLC — this suggests Druva is trying to modernize their engineering culture. Small positive for someone like Stevens who has genAI literacy.

## E. Red Flags — 1.8/5

**Critical:**
1. **Level mismatch:** Senior Staff = IC5+, 10-12 years required. Stevens has ~5 years. Hard blocker — would be filtered at resume stage.
2. **Deep specialization barrier:** Distributed filesystem engineering at petabyte scale is one of the most specialized engineering disciplines. No equivalent work in Stevens' CV.
3. **Language gap:** Go and C/C++ primary. Stevens has Java/TypeScript/Python/JavaScript — none of these map cleanly to the core stack.

**Moderate:**
4. **Domain barrier:** Backup/DR SaaS with no AI trajectory. The GenAI mention in JD is superficial.
5. **Location:** Pune-based; Stevens is in Bengaluru.

**Minor:**
6. Tenure-heavy team — may be difficult for a relatively junior engineer to integrate
7. Comp not competitive vs. AI-first companies for Stevens' profile

## F. Global Score — 2.5/5

**Recommend: SKIP**

The Foundation role is highly prestigious and technically impressive engineering. But it is deeply misaligned with Stevens' experience, language stack, career trajectory, and seniority. The one genuine positive — GenAI mindset mention — is a nice-to-have in a JD that fundamentally requires 10+ years of distributed storage engineering. Do not apply.

| Block | Score |
|-------|-------|
| A. CV Match | 2.2 |
| B. North Star | 2.2 |
| C. Compensation | 2.5 |
| D. Culture | 3.0 |
| E. Red Flags | 1.8 |
| **Weighted Avg** | **2.5** |

## G. Posting Legitimacy

- **Status:** Active (Greenhouse job ID 7892681002, confirmed active — appears on druva.com/about/careers/jobs/7892681002 and job-boards.greenhouse.io/embed/job_app for=druva&token=7892681002, indexed on Blind)
- **Tier:** High Confidence — Most well-confirmed posting in this batch. Multiple external job boards (Blind, Swooped, foundit.in, Glassdoor) have this specific posting. Druva is a real, well-known company.
- **Note:** This is the only Druva posting in this batch with confirmed external indexing beyond Druva's own site. The JD content was partially reconstructed from WebSearch results referencing the Foundation team description.

## Recommended Action

**SKIP.** The Foundation team role is the most prestigious but also the most mismatched in this batch. A 5-year product SWE cannot realistically target a Senior Staff distributed storage engineering role. Stevens' Gen AI Patent and AI systems experience do not substitute for the 7-10 additional years of systems programming experience this team requires. The GenAI mindset mention is encouraging for the future — revisit Druva in 3-4 years when the seniority gap has closed and if AI becomes more central to their platform.
