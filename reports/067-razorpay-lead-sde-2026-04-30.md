# Evaluation: Razorpay — Lead Software Development Engineer

**Date:** 2026-04-30
**Archetype:** Senior Software Engineer / Tech Lead (Full-Stack Backend)
**Score:** 3.2/5
**URL:** https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4684249005
**Legitimacy:** Proceed with Caution
**PDF:** ❌

---

## A) Role Summary

| Dimension | Detail |
|-----------|--------|
| Archetype | Tech Lead / Lead Software Engineer (Backend-heavy) |
| Domain | Payments infrastructure, REST APIs, open-source mobile payments |
| Function | Build + Lead — IC engineering lead with product and design input |
| Seniority | Lead / Senior+ (5+ years minimum) |
| Remote | Bangalore (on-site presumed) |
| Team | Payments infrastructure / core platform |
| TL;DR | Backend-first lead engineer role on Razorpay's core payments infrastructure — REST API design, PHP/Python/Go/Java/C++ backend, open-source standards. |

---

## B) CV Match

| JD Requirement | Stevens Match | Source |
|---------------|---------------|--------|
| 5+ years technology experience | ~5 years total (Acko + Dell + intern) | cv.md Experience |
| Backend programming language: PHP, Python, Django, Golang, Java, or C++ | Python (AI/ML work, PRISMO chatbot), Java/Spring Boot (Dell + Acko) — matches Java/Spring Boot subset | cv.md Skills |
| REST API and web architecture | BFF pattern, API contract design, auto-attendance APIs, cross-team API contracts at Acko | cv.md Acko + Dell |
| Product company background | Acko (Insurtech product co) + Dell (enterprise product) | cv.md |
| Open-source contributions | **Gap** — Dell patent but no open-source contribution history mentioned | — |
| GitHub presence with side projects | Portfolio at stevens-philip-portfolio.vercel.app; GitHub presence implied but not detailed | cv.md |
| Product design understanding | RSA platform (product-thinking: booking flows, UX, analytics), Buddy Board, PUD | cv.md Acko |
| Shape REST API decisions for global developer audiences | API contract leadership at Acko; cross-team reviews; less evidence of external developer-facing API design | cv.md |
| Support scaling payment infrastructure | Payments domain at Acko (RSA, PUD, Claims) — insurance adjacent to payments but not core payments infra | cv.md |
| Contribute to open-source mobile payment standards | **Hard Gap** — no mobile development or open-source payments standards experience | — |
| Translate user requirements into solutions | RSA + PUD end-to-end ownership (requirements → production) | cv.md Acko |

### Gaps

| Gap | Blocker? | Adjacent Experience | Mitigation |
|-----|----------|---------------------|------------|
| Core payments infrastructure experience | Soft blocker — Acko is insurance, not payments | Payment-adjacent: RSA booking + PUD garage payments, IRDAI-compliant flows | Highlight insurance payment flows and data-sensitive API design |
| PHP / Golang / Django | Soft blocker — JD lists these as primary | Java/Spring Boot is listed; Python is present | Emphasise Spring Boot + Python; position Java as the primary backend lang |
| Open-source contributions | Nice-to-have | Dell patent, portfolio projects | Create at least one public GitHub contribution before applying |
| Mobile payment standards | Hard blocker | No mobile development in CV at all | Cannot mitigate honestly — flag this as a true gap |
| Lead experience (people/team dimension) | Nice-to-have | Mentored juniors at Acko, led API contract discussions, cross-team code reviews | Frame these as lead-level signals |

### SKIP Assessment

Per `_profile.md`: **Full-stack required titles** (Tech Lead, Lead Software Engineer, Lead Software Developer, Lead Engineer) — "Only evaluate if the JD explicitly requires both frontend (React/Angular/TypeScript) AND backend (Spring Boot/Node.js/APIs). If purely frontend-only, backend-only, or AI-only → mark SKIP with note."

This JD is **backend-only** (PHP, Python, Django, Golang, Java, C++ — no frontend mentioned). The Lead LSDE title here does not require full-stack scope.

**Recommendation: SKIP.** The backend-only scope (PHP/Go/C++/Django primary), hard gap in mobile payment standards, and no open-source contribution requirement make this a poor fit. Stevens' primary strength is full-stack + AI, not pure backend payments infrastructure. Score reflects mismatch, not inability.

---

## C) Level & Strategy

**Detected level:** Senior+ / Lead (5+ years required). Stevens is at the lower boundary.

**Stack mismatch is the core problem:** The JD centers on PHP, Golang, or C++ — none of which Stevens has in his CV. Java/Spring Boot is adjacent but not the same. Razorpay's payments backend is likely PHP (Razorpay was historically PHP-first) or Go.

**If still applying despite recommendation against:**
- Lead with Java/Spring Boot depth + API design experience
- Emphasise Acko's payment-adjacent flows (RSA slot booking, PUD garage payments, IRDAI-compliant PII masking)
- Be upfront about no PHP/Go experience but willing to ramp — but this weakens the application significantly

**If downleveled:** N/A — this is already a Lead title. If they downlevel to SDE2/Senior, comp may drop below ₹30L minimum.

---

## D) Comp & Demand

| Source | Data | Notes |
|--------|------|-------|
| Glassdoor | Lead SDE at Razorpay: avg ₹26L, 75th pct ₹34.5L, 90th pct ₹47L | [Glassdoor](https://www.glassdoor.co.in/Salary/Razorpay-Lead-Software-Development-Engineer-Salaries-E1146550_D_KO9,43.htm) |
| Levels.fyi | Lead Software Engineer Razorpay India median: ₹54L total comp | [Levels.fyi](https://www.levels.fyi/companies/razorpay/salaries/software-engineer/levels/lead-software-engineer/locations/india) |
| Blind (Oct 2025) | Lead SWE offer: 60L base + 60L ESOPs (4yr) + 2L joining + 2L retention = 77L first year TC | Community data |
| Glassdoor (alternative avg) | Base ₹42L + additional ₹4L avg additional pay | Glassdoor |

**Assessment:** Comp at Lead level at Razorpay can be excellent (₹54–77L TC) — well above Stevens' ₹50L target ceiling. However, this is contingent on getting to Lead level compensation, which requires passing the technical bar for the stack (PHP/Go/C++) that Stevens doesn't have. The comp upside doesn't compensate for the stack mismatch.

---

## E) Personalization Plan

*Not recommended to apply — this section is provided for informational purposes only.*

| # | Section | Change | Why |
|---|---------|--------|-----|
| 1 | Skills | Add Python/Django more prominently | Partial match to backend stack |
| 2 | Summary | Reframe as "backend systems + API design" | Better alignment to infrastructure scope |
| 3 | API contract bullets | Expand Acko cross-team API design | Lead signal for developer-facing API work |
| 4 | Dell backend work | Highlight Spring Boot Layer-7 auth + PCF | Production backend ownership evidence |
| 5 | Open source | Create one meaningful public contribution before applying | Explicit JD requirement |

---

## F) Interview Prep

*Provided for reference in case Stevens decides to override the SKIP recommendation.*

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---------------|--------------|---|---|---|---|------------|
| 1 | REST API design for developer audiences | Acko API contracts | Multiple teams (RSA, PUD, Claims) needed consistent API contracts | Lead API contract discussions and cross-team reviews | Defined API schemas, led review sessions, enforced conventions | Consistent contracts adopted across 3 teams; fewer integration bugs | Should have documented contracts as OpenAPI specs from day 1 — tribal knowledge is a scaling risk |
| 2 | Scaling payment infrastructure | RSA + PUD at Acko | RSA platform needed to scale to handle peak RSA requests (accidents, monsoon season spikes) | Build resilient booking and tracking systems | Towing eligibility logic, pit/flood routing, real-time status polling, PII-masked phone calls | 1000+ garages onboarded in PUD; RSA handling high-volume peaks | Learned: design for 10x traffic before you need it — adding capacity under pressure is much harder |
| 3 | Product company background | Acko (full product ownership) | Acko is a D2C insurance product — engineers own features end-to-end | Deliver RSA, PUD, and CES features from design to production | Figma-to-code, API contracts, analytics, rollout — no handoff culture | Full product delivered with measurable business outcomes | Product engineers think in outcomes, not tickets — this is the cultural shift from enterprise (Dell) to product (Acko) |

**Recommended case study:** Not applicable — recommendation is SKIP.

---

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Apply button | Active (Greenhouse) | Positive |
| JD specificity | Low — very short JD, minimal detail on team/scope, generic requirements list | Concerning |
| Role history | Previous Razorpay LSDE postings (#007, #008) already evaluated — this appears to be a new/different LSDE role (different job ID) | Neutral |
| Salary transparency | Not mentioned | Neutral |
| Company hiring signals | 190+ open roles at Razorpay April 2026 | Positive |
| JD quality | No specific technologies beyond language list; no team context; no scope description; very generic for a Lead role | Concerning |
| Requirements realism | "Open-source contributions" and "GitHub presence" are somewhat unusual hard requirements for a Lead role at an enterprise | Neutral |

**Assessment: Proceed with Caution** — The JD is unusually sparse for a Lead-level role. Combined with the backend-only scope that doesn't match Stevens' full-stack profile, and a prior LSDE evaluation in the tracker (report #007) showing 3.8/5 for a different LSDE job ID, this warrants caution. The sparse JD may indicate an evergreen/rolling posting rather than an urgent hire.

**Context note:** Razorpay has historically posted multiple Lead SDE roles simultaneously across different product areas. This is likely a legitimate posting but for a team/stack where Stevens is not competitive.

---

## Keywords

`Lead Software Development Engineer`, `REST API`, `backend`, `PHP`, `Python`, `Golang`, `Java`, `open-source`, `payments infrastructure`, `mobile payments`, `product company`, `web architecture`, `API design`, `scaling`
