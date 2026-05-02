# Evaluation: dbt Labs — Staff Software Engineer (Agentic Automation & ADLC)

**Date:** 2026-05-01
**Archetype:** Agentic / Automation (primary) + AI Platform / LLMOps (secondary)
**Score:** 3.5/5
**URL:** https://job-boards.greenhouse.io/dbtlabsinc/jobs/4665640005
**Legitimacy:** High Confidence
**PDF:** ✅

---

## A) Role Summary

| Dimension | Detail |
|-----------|--------|
| Archetype | Agentic / Automation — ADLC orchestration systems |
| Domain | Analytics Development Life Cycle (ADLC) automation, agentic AI, decision memory |
| Function | Build — autonomous agents for requirements capture → deploy → remediation |
| Seniority | Staff (above Senior — reach role for Stevens) |
| Location | **India — Remote** ✅ |
| Stack | Python (inferred), LLM APIs, event-driven architecture, orchestration frameworks |
| Comp | Not listed; dbt Labs India Staff comp estimated ₹45–70L (market-competitive for Staff) |
| TL;DR | Staff AI engineer building autonomous agents across dbt's analytics lifecycle — agents that reason, act on data, and leave decision memory. India remote. One level above Stevens' target. |

---

## B) CV Match

| JD Requirement | Stevens Match | Source |
|---------------|---------------|--------|
| Backend, platform, or systems engineering expertise | Spring Boot APIs at Acko scale (RSA/PUD/Claims), microservices | cv.md Acko |
| Experience building automation, workflows, orchestration systems | Admissibility AI Agent (ML-based claims orchestration), Acko Global Care pipeline | cv.md Acko AI sections |
| Event-driven architecture familiarity | Real-time status polling, RSA live tracking (event-driven patterns) | cv.md Acko |
| Hands-on production experience with LLMs or agentic systems | Admissibility AI Agent (agentic claims decisioning), Acko Global Care (LLM pipeline) | cv.md Acko |
| Strong intuition for safety, failure modes, guardrails, AI observability | **Gap** — Segment analytics is analogous but not AI-specific; no explicit AI safety/guardrail work | — |
| Structured/semi-structured/unstructured data exposure | Claims data, medical reports (Global Care), insurance policy data | cv.md Acko |
| CI/CD or developer tooling background | CI/CD pipelines at Dell (60%→97% DevOps coverage) | cv.md Dell |
| Analytics engineering or dbt familiarity | **Gap** — zero dbt experience | — |
| Integration with human workflow tools (GitHub, Slack, Jira, Notion) | JIRA, team tooling at both Acko and Dell | Partial |
| Reliability/resilience engineering background | Fallback handling in Self PI flow, error handling at Acko | Partial |

### Gaps

| Gap | Blocker? | Adjacent Experience | Mitigation |
|-----|----------|---------------------|------------|
| Staff level (8+ yr typical) | Soft blocker — Stevens has ~5yr | Quality of AI/agentic work is Staff-grade in complexity | Apply and let the work speak — explain "5 deep years" framing |
| dbt / analytics domain | Soft blocker — steep learning curve | No dbt experience; ADLC is new territory | Honest gap — frame as "production AI + fast domain learning" |
| Python as primary (likely) | Soft blocker | Python used in AI/ML work, energy model, PRISMO chatbot | Position Python as secondary primary for AI track |
| AI observability / safety guardrails | Nice-to-have | Segment analytics (observability mindset), Growthbook feature flags (safe rollout) | Map Growthbook → AI guardrails analogy; learn Langfuse basics |
| Decision memory substrate architecture | Specialized | Claim Timeline/Audit Trail at Acko (decision logging) | Claim Timeline is a concrete decision-memory implementation — lead with this |

---

## C) Level & Strategy

**Staff is one level above Stevens' target (Senior).** This is a reach application. The key question: does Stevens have Staff-quality impact, even if not Staff-tenure?

**Evidence for making the case:**
- Admissibility AI Agent: Architected and shipped an agentic ML system at production scale — autonomous claim classification (admissible/fraud/doc-deficient/manual). This is Staff-grade work: autonomous decision system with configurable rules, cross-functional impact.
- Acko Global Care LLM pipeline: Built end-to-end from diagnosis extraction to hospital ranking to cost estimation. Multi-stage LLM orchestration.
- Claim Timeline & Audit Trail: Direct analog to "durable decision memory" — SLA tags, task-history navigation, audit trail for every claim handler workflow.

**Strategy:** Lead with agentic systems proof points. Frame the role as a natural continuation of the Admissibility AI Agent work, extended to analytics workflows. Acknowledge the Staff title is a stretch but position the impact quality as Staff-grade.

**Python positioning:** dbt Labs is Python-first. Stevens should lead Python exposure (chatbot, energy model, AI work) and prepare for Python-heavy interviews.

**dbt gap:** Honest. Learn dbt basics before applying (< 1 week with docs + trial project). Show you understand what ADLC means for data teams.

---

## D) Comp & Demand

| Source | Data |
|--------|------|
| dbt Labs US Staff | $207K–$251K USD base |
| India remote equivalent | Not disclosed; estimated ₹45–70L based on comparable Staff Remote India roles at US companies |
| Equity | RSUs or comparable for international employees |
| Benefits | Unlimited vacation, health insurance, wellness + home office stipend |

**Assessment:** No India-specific comp posted. For a US company with Staff roles in India, market-competitive positioning suggests ₹45–70L range — meets Stevens' ₹35–50L target and likely exceeds it. Comp risk is low if offer materializes.

**Demand:** dbt Labs is actively building AI/agentic products. The ADLC agent work is core to their competitive roadmap. India-specific role means they want sustained, senior technical presence in India.

---

## E) Personalization Plan

### CV Changes (top 4)

| # | Section | Change | Why |
|---|---------|--------|-----|
| 1 | Admissibility AI Agent | Add: "event-driven orchestration logic, configurable rules engine, agentic claim lifecycle: intake → analysis → classification → audit trail" | Maps to "orchestration systems," "agent lifecycle stages" |
| 2 | CES Claim Timeline | Reframe as: "Decision memory substrate for claims — audit trail logging every agent action with SLA classification, task-history, and attribution across handler workflows" | Direct analog to "durable memory substrate that powers agentic analytics workflows" |
| 3 | Acko Global Care | Add: "multi-stage LLM orchestration pipeline: requirements capture (medical report) → build (extraction) → validate (hospital match) → remediate (fallback prompts)" | Maps to "ADLC stages: requirements → build → test/deploy → operate/remediate" |
| 4 | Summary | Reframe for agentic: "Built production AI systems at Acko — agentic claims decisioning, multi-stage LLM orchestration, and audit trail infrastructure — targeting Staff roles in AI automation and agentic system design." | Signals intent and Staff-level positioning |

---

## F) Interview Prep

| # | JD Requirement | STAR+R Story |
|---|---------------|--------------|
| 1 | Agentic systems that reason over enterprise context | Admissibility AI Agent: agentic claim analysis — cross-referencing damage reports with incident descriptions using ML, then classifying autonomously |
| 2 | Durable decision memory | Claim Timeline & Audit Trail at Acko: every handler action logged with SLA status, task-history, audit attribution — built to be the system of record for claim decisions |
| 3 | Multi-stage orchestration (requirements → deploy → remediate) | Acko Global Care: LLM pipeline from medical document intake → extraction → validation → recommendation → cost estimation — each stage a distinct orchestration step |
| 4 | Safety, failure modes, guardrails | Self PI flow stabilization: fallbacks, re-upload handling, completion 70–72% — built explicit error paths for every failure scenario |
| 5 | Event-driven architecture | RSA live tracking: real-time status events → UI updates, ETA via Distance Matrix API, field executive location → event-sourced status model |

---

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| India - Remote | Explicitly stated in posting | Positive |
| JD specificity | High — ADLC lifecycle stages, memory substrate, observability requirements | Positive |
| Apply button | Active on Greenhouse | Positive |
| Company stability | dbt Labs well-funded ($222M raised), strong OSS community, commercial product growing | Positive |
| Role alignment | Core to dbt's AI product roadmap | Positive |

**Assessment: High Confidence** — this is a real, active role central to dbt Labs' strategic direction. India-remote is explicit, not ambiguous.

---

## Recommendation

**Score 3.5/5 — Apply with preparation.** Below the 4.0 threshold for strong recommendation, but this is a meaningful opportunity: India-remote, AI/agentic archetype match, strong company.

**Before applying:**
1. Build a toy dbt project (1–2 days) — understand ADLC fundamentals
2. Prepare a Python-focused coding walkthrough of the Admissibility AI Agent
3. Frame the Claim Timeline as "decision memory infrastructure"
4. Acknowledge the Staff level candidly — "I'm applying based on impact quality, not tenure length"

**Stevens' call:** Is the analytics domain pivot acceptable? If yes, this is worth pursuing. If you want to stay in product/insurance/consumer AI, wait for a better-matched India-remote AI role.
