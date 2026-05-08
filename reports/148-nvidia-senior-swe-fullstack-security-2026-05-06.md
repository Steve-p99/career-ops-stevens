# Evaluation: NVIDIA -- Senior Software Engineer, Full Stack (Security Platform)

**Date:** 2026-05-06
**Archetype:** Senior Full-Stack Engineer (Security Platform / Data Engineering)
**Score:** 3.1/5
**URL:** https://jobs.nvidia.com/careers/job/893395030726?domain=nvidia.com&hl=en
**Legitimacy:** High Confidence
**PDF:** ✅ output/cv-stevens-philip-nvidia-security-fullstack-2026-05-06.pdf

---

## A) Role Summary

| Dimension | Detail |
|-----------|--------|
| **Detected Archetype** | Senior Full-Stack Engineer (Security Platform / Data Engineering) |
| **Domain** | Enterprise Security Engineering -- Unified security platform, vulnerability management, threat intelligence, data pipelines |
| **Function** | Build (security services, data ingestion pipelines, observability portals, vulnerability automation platforms) |
| **Seniority** | Senior -- 5+ years required; global cross-team collaboration scope |
| **Remote** | India-based (Pune inferred from JR2017519 / India posting pattern); work arrangement not specified |
| **Team size** | Not specified; cross-functional with product engineering, security architecture, cloud infra |
| **TL;DR** | "Full Stack" is the job title; **Security Platform Engineer** is the actual role. The JD requires: Java/Spring Boot + React frontend ✅, but also: IAM/SSO/SAML/RBAC/Federated Identity, Databricks/Spark/Delta Lake, Kafka/Pub/Sub, threat intelligence, CVSS, vulnerability management platforms -- all absent from Stevens' CV. Exceptional company (NVIDIA = world's most valuable company, ~₹65L median India, zero layoffs, 21.62% headcount growth). Score 3.1 -- domain mismatch prevents a strong recommendation despite the company being outstanding. |

---

## B) CV Match

| JD Requirement | CV Match | Strength |
|----------------|----------|----------|
| Java (Spring Boot) | Unified Cost Management (Dell): Angular + Spring Boot; Layer-7 auth, PCF production | ✅ Strong |
| Python | Flask Mail backend at Dell; Rasa NLP; ML scripts | ✅ Moderate |
| React / Angular | React at Acko (RSA, PUD, CES, Claims); Angular at Dell (3 yrs) | ✅ Strong |
| TypeScript / JavaScript / HTML5 / CSS | TypeScript across all Acko products; SCSS, CSS Modules now confirmed | ✅ Strong |
| REST API development (scalable) | BFF pattern at Acko; Spring Boot APIs at Dell; API contract ownership | ✅ Strong |
| Cloud (AWS, GCP, Azure, OCI) | AWS at Acko ✅; PCF at Dell ✅; GCP/Azure/OCI not in CV | ⚠️ Partial |
| Docker + Kubernetes | Both in Technical Skills; used at Dell (Rasa chatbot) | ✅ Moderate |
| CI/CD pipeline ownership | DevOps coverage 60%→97% at Dell; Jenkins/GitHub Actions | ✅ Strong |
| IaC (Infrastructure-as-Code) | Not in CV | ⚠️ Gap |
| Monitoring (Grafana, Prometheus, Datadog, PagerDuty) | Datadog integrated at Acko ✅; Grafana/Prometheus/PagerDuty not in CV | ⚠️ Partial |
| Auth protocols (SSO, SAML, Federated Identity, RBAC, IAM) | Layer-7 auth at Dell (closest analog); no direct SSO/SAML/IAM experience | ❌ Significant gap |
| Multi-cloud security / IAM policies | No multi-cloud security experience | ❌ Significant gap |
| Data ingestion pipelines (threat, vulnerability, asset, ticket data) | No data pipeline engineering experience | ❌ Gap |
| Databricks (Spark, Delta Lake) | Not in CV | ❌ Hard gap |
| Kafka / Pub/Sub event streaming | Not in CV | ❌ Hard gap |
| Threat intelligence tagging, CVSS mappings | No security domain knowledge in CV | ❌ Domain gap |
| Vulnerability assessment / management platforms | No experience | ❌ Domain gap |
| AI/ML pipelines (preferred) | Admissibility AI Agent at Acko; ML scripts, Rasa NLP, speech recognition | ✅ Strong (preferred) |
| 5+ years SWE experience | ~4.75 years (Aug 2021 -- May 2026) | ✅ Essentially met |
| Cross-functional global team collaboration | API contract design across teams at Acko; cross-team code reviews | ✅ Strong |

**Gap analysis:**

1. **Security domain expertise (IAM/SSO/SAML/RBAC/Federated Identity)** -- This is the JD's "What We Need to See" core requirement, not a preferred. The role is building NVIDIA's unified security platform. "Proven understanding" of these protocols is explicitly required. Layer-7 auth at Dell is the closest Stevens has -- it's authentication-adjacent but not IAM policy management.

2. **Data engineering stack (Databricks, Spark, Delta Lake, Kafka, Pub/Sub)** -- The role's data layer is Apache Kafka for event streaming and Databricks for batch/near-real-time analytics. These are specialized tools Stevens has not worked with. Not learnable-in-a-week gaps.

3. **Observability tooling (Grafana, Prometheus, Datadog, PagerDuty)** -- Datadog integrated at Acko ✅ (now in cv.md). Grafana and Prometheus not yet in CV -- learnable quickly and complementary to Datadog experience already held.

4. **IaC** -- Terraform or CDK not mentioned in CV. PCF deployment at Dell is the closest analog.

**What genuinely matches:** The full-stack engineering layer -- Java/Spring Boot APIs, React/Angular frontend, TypeScript, AWS, Docker/K8s, CI/CD, REST API design. If the role were purely a product full-stack role, Stevens would be a strong candidate. The security domain specialization is what changes the equation.

---

## C) Level & Strategy

**Detected Level:** Senior SWE (5+ years) -- Stevens at ~4.75 years essentially meets the bar, unlike earlier roles requiring 7+.

**The core tension:** NVIDIA is building the security nerve centre for AI infrastructure. The role demands security-domain depth (IAM, threat intelligence, CVSS, vulnerability management) that is a genuine specialization -- not a technology stack gap, but a career track gap. A product engineer becoming a security platform engineer in one sprint is not realistic.

**If Stevens genuinely wants to pivot into security engineering:** NVIDIA is the single best place to do it. The engineering quality, scale, and AI-era context are unmatched. But this pivot would require:
- Study: IAM/SSO/SAML/RBAC (1-2 months to speak credibly), Databricks fundamentals (weeks), Kafka concepts (days)
- CV reframe: Surface Dell security/DevOps lead as primary narrative, Layer-7 auth as auth pattern experience, PCF vulnerability remediation as security context
- Be explicit about the pivot intent: "I'm a product engineer with strong full-stack depth moving toward security platform engineering; my attraction to NVIDIA is the AI-era security scale problem"

**If this is a standard application without pivot intent:** The domain mismatch will surface within the first technical screen. Investing prep time without genuine interest in security engineering is low ROI.

**If downleveled:** A junior security platform role at NVIDIA would likely be below ₹35L. Accept only with a clear Senior review path at 6-12 months.

---

## D) Compensation & Market

| Item | Data | Source |
|------|------|--------|
| NVIDIA SWE India (Levels.fyi median) | ₹67L total comp | Levels.fyi |
| NVIDIA SWE India range (IC1-IC6) | ₹25.8L – ₹193.1L | Levels.fyi |
| NVIDIA SWE Bengaluru median | ₹64.7L | Levels.fyi |
| NVIDIA average salary India | ₹51L | 6figr.com |
| Estimated Senior SWE band (India) | ₹60L – ₹100L+ total comp | Inferred (IC3-IC4) |
| Stevens' target | ₹35L – ₹50L CTC | profile.yml |
| Comp disclosed in JD | ❌ Not specified (India) | JD |
| NVIDIA market position | ~$3.3T market cap; world's most valuable company at times | Public markets |
| NVIDIA India headcount | ~5,040 (14% of ~36,000 global) | SQ Magazine |
| NVIDIA headcount growth | +21.62% YoY (FY2025): 29,600 → 36,000 | SQ Magazine |
| NVIDIA layoffs | None -- CEO Jensen Huang vocally against AI-driven layoffs | Multiple sources |
| Open positions 2025 | 3,000+ active job postings | Industry data |

**Comp verdict: Exceptional.** NVIDIA's Indian Senior SWE band (₹60L-₹100L+) is 20-100% above Stevens' target ceiling of ₹50L. Equity component at NVIDIA's current market cap adds significant upside. This is top-quartile comp in the Bengaluru market by a wide margin. The comp is the strongest of any role evaluated so far.

---

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Summary | "Frontend engineer / full-stack SDE2" | "Full-stack engineer with ~5 years building Java/Spring Boot APIs and React/Angular frontends in production -- with a security and compliance track record: PCF vulnerability remediation, Layer-7 authentication systems, IRDAI-regulated data handling" | Role is security platform engineering; lead with the security-adjacent evidence |
| 2 | Dell security bullet | "DevOps coverage 60%→97%; PCF vulnerability remediation" | Expand: "Security & DevOps Lead: PCF vulnerability remediation (60-70% resolved); CI/CD pipeline with security scanning; Layer-7 auth implementation for Unified Cost Management Dashboard; IRDAI-compliant PII handling at Acko" | JD requires security-domain experience -- these are Stevens' closest proof points |
| 3 | AI angle | Buried in projects | Surface Admissibility AI Agent as "AI-driven security decision pipeline" analog -- per-rule pass/fail, evidence analysis, handler override logic maps to automated threat detection workflow | JD preferred: "AI or ML pipelines, intelligent security controls" -- Admissibility AI Agent is genuinely close |
| 4 | Spring Boot | Listed in skills | Move higher; add: "Spring Boot REST APIs (Layer-7 auth, PCF production, cross-team consumption) -- primary backend framework at Dell for 3.5 years" | JD: "Java (Spring Boot)" is the first-named required backend |
| 5 | Monitoring/observability | Not in CV | Add to Skills: "Observability: Prometheus (learning), Grafana (learning)" -- honest signal that Stevens knows the category | JD: Grafana, Prometheus, Datadog, PagerDuty required |

**Note on non-paperable gaps:** IAM/SSO/SAML/RBAC, Databricks/Spark, Kafka -- none of these can be addressed by CV changes. If applying, these must be addressed honestly in a cover letter or screening call.

---

## F) Interview Prep

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|----------------|-------|---|---|---|---|------------|
| 1 | Security platform engineering | Dell Security & DevOps Lead | DISCP/One Cost PCF deployments had 40% uncovered DevOps, 60-70% unresolved vulnerabilities | Own CI/CD and security posture for two products | PCF vulnerability remediation; CI/CD pipeline ownership; Layer-7 auth for Unified Cost Management | DevOps 60%→97%; PCF vulnerabilities 60-70% resolved; Layer-7 auth in production | Security is a process problem before it's a tooling problem -- the 37% DevOps coverage gap was the root cause of the vulnerability backlog, not the scanner |
| 2 | AI-driven security controls (preferred) | Admissibility AI Agent at Acko | Claims handlers spending excessive time on manual admissibility review; 100k+ claims/year | Build AI agent that classifies claims against configurable rules, flags contradictions, surfaces supporting evidence | React frontend showing per-rule pass/fail, evidence display, contra-action flagging; handler overrides feed retraining loop | Adopted across all claim-handler workflows; reduced handler decisioning time; closed feedback loop between human override and model retraining | The closest analog to "AI-driven detection and response": classify an event (claim/threat), surface evidence, allow human override, feed back into the model |
| 3 | Full-stack (Java Spring Boot + React) | Unified Cost Management Dashboard | Dell procurement teams doing approval workflows manually; $65M annual ROI at stake | Build full-stack enterprise admin: Angular + Spring Boot REST + Layer-7 auth on PCF | Angular frontend, Spring Boot REST APIs, Layer-7 SSO-adjacent auth, PCF production deployment | 50% approval-efficiency gain; $65M ROI in FY; Layer-7 auth securing procurement data | Internal tooling built to production standards -- the same discipline that makes consumer products reliable makes internal security platforms trusted |
| 4 | Data ingestion pipelines / API design | BFF + API contract design at Acko | RSA/PUD pulling data from multiple backend services causing waterfall latency and inconsistent data contracts | Design BFF layer + own API contract design across teams | Spring Boot BFF aggregating RSA + garage + slot APIs; standardised API contracts across RSA, PUD, platform teams | Registration time -50%; cross-team API rework cycles reduced | API contract ownership is the highest-leverage input to pipeline reliability -- a bad contract at ingestion propagates errors to every downstream consumer |
| 5 | Auth / identity management | Layer-7 auth at Dell | Unified Cost Management Dashboard needed enterprise-grade auth across Dell's internal identity infrastructure | Implement Layer-7 authentication for PCF-deployed Spring Boot app | Layer-7 auth integration; RBAC for approval workflow (approver vs viewer vs admin roles) | Secure, role-based access in production; no auth incidents | Layer-7 auth and RBAC are the gateway to IAM -- I haven't implemented SAML/Federated Identity end-to-end, but the concepts and patterns are the same foundation |
| 6 | Cross-functional global team collaboration | API contract design at Acko | RSA, PUD, platform teams shipping independently without aligned contracts -- causing rework | Lead API contract design process across all three teams | Input/output schema review before backend implementation; cross-team code reviews | Multiple rework cycles prevented; cross-team velocity improved | Global security teams will have stronger alignment pressure than co-located product teams -- the same API-contract-first discipline applies at higher stakes |

**Case study to lead with:** Admissibility AI Agent + Dell Security Lead combo -- the AI classification pipeline (for security-decision analog) + the actual security/DevOps track record at Dell.

**Red-flag questions:**
- *"No IAM/SSO/SAML experience?"* → "My auth work is Layer-7 at Dell and IRDAI-compliant PII handling at Acko -- the access-control patterns are adjacent. I haven't implemented Federated Identity end-to-end; I've studied SAML/OAuth2 and could be productive quickly. I'd want to be honest about the gap rather than overclaim."
- *"No Databricks/Kafka experience?"* → "Data pipeline engineering is a gap I'm aware of. My closest analog is BFF API aggregation and multi-source data orchestration at Acko. Databricks/Spark would be a learning curve of weeks, not months -- happy to discuss what a ramp-up plan would look like."
- *"Why security?"* → Be honest about the motivation: NVIDIA's AI-era security scale problem is genuinely interesting. If this is a genuine pivot interest, say so. If not, this question will expose the mismatch immediately.
- *"No multi-cloud experience?"* → "AWS at Acko and PCF at Dell. GCP/Azure I've not shipped to production -- the primitives (container orchestration, IAM, networking) translate across providers, but I wouldn't claim production multi-cloud depth."

---

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting source | jobs.nvidia.com (NVIDIA's own portal, backed by Workday) | ✅ Positive |
| Job requisition ID | JR2017519 -- specific internal JR number confirms real ATS entry | ✅ Positive |
| Description quality | Specific team context (Security Platform), named tools (Databricks, Kafka, Grafana, CVSS), specific auth protocols, named cloud platforms | ✅ Positive |
| Apply button | Active posting on NVIDIA careers | ✅ Positive |
| NVIDIA headcount | +21.62% YoY -- actively growing, not contracting | ✅ Positive |
| NVIDIA layoffs | None -- CEO Jensen Huang vocally opposed to AI-driven layoffs | ✅ Positive |
| NVIDIA India presence | ~5,040 India employees (14% of global); Bengaluru + Pune engineering centres | ✅ Positive |
| Market position | ~$3.3T market cap; AI era demand is structural | ✅ Positive |
| JD realism | Requirements are specific and internally consistent; security platform engineering at this scope is a real senior IC role | ✅ Positive |

**Assessment: High Confidence** -- Every signal positive. NVIDIA is one of the strongest hiring signals in tech right now. This is a real, active opening. No concerns about posting legitimacy.

---

## Score Breakdown

| Block | Score |
|-------|-------|
| CV Match | 2.5 |
| North Star alignment | 2.5 |
| Comp | 5.0 |
| Cultural signals | 5.0 |
| Red flags penalty | −0.5 |
| **Global** | **3.1/5** |

## Recommendation: ⚠️ Apply Only If Genuinely Interested in Security Engineering

The company is a 5/5. The role is a 2.5/5 domain match. That tension is the whole story.

**The honest framing:**
- If Stevens is interested in pivoting to security platform engineering (and NVIDIA's AI security infrastructure is genuinely compelling) -- this is the best possible place to do that pivot. The comp (₹60L-₹100L+), the engineering quality, and the AI-era context are unmatched.
- If this is a standard "full stack" application, the security domain gaps (IAM/SSO/SAML, Databricks, Kafka, threat intelligence, CVSS) will surface within the first 15 minutes of a technical screen. The JD title says "Full Stack"; the actual role is security platform engineering.

**Before applying:**
1. Decide honestly: is security engineering a direction you want to go, or is this purely a brand-name application?
2. If yes: spend 2-3 days on IAM/SAML/OAuth2 fundamentals + Kafka concepts + Databricks overview -- enough to discuss them credibly and show genuine curiosity
3. Lead with the Dell Security & DevOps Lead narrative + Admissibility AI Agent (closest analogues in CV)
4. Be transparent in the cover letter: "My background is product engineering; I'm drawn to NVIDIA's security infrastructure problem because of [specific reason]. Here's what I bring and here's what I'll ramp on."

---

## Extracted Keywords

Java, Spring Boot, Python, React, Angular, TypeScript, JavaScript, HTML5, CSS, REST API, AWS, GCP, Azure, OCI, Docker, Kubernetes, EKS, AKS, GKE, IaC, Grafana, Prometheus, Datadog, PagerDuty, SSO, SAML, RBAC, IAM, Federated Identity, Databricks, Spark, Delta Lake, Kafka, Pub/Sub, CVSS, threat intelligence, vulnerability management, security platform, observability, CI/CD, full stack, senior software engineer, NVIDIA, security engineering, data ingestion, data enrichment
