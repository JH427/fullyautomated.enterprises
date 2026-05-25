# Fully Automated Enterprises Credibility Rewrite Brief

Status: draft
Updated: 2026-05-25

## Purpose

Tighten `fullyautomated.enterprises` so it reads like a real research studio with public restraint, not a polished synthetic case-study generator.

This brief is based on the currently committed content and the current homepage structure.

## Core diagnosis

The site architecture is fine.
The immediate problem is not just copy posture: the current labs/products are demo UI data rather than real public FAE work.

Main issues:
- synthetic experiment/product entries are occupying slots that should eventually hold real work
- exact metrics and percentages read stronger than the public evidence base
- some experiment entries feel pre-fabricated rather than observed because they are effectively scaffolding
- product incubation cards imply go-to-market energy that the site does not yet support
- the homepage says the right broad thing, but it does not yet explain methodology or evidence pathways

Implication:
- this site should transition from believable demo scaffolding to actual published experiments, notes, and incubation records
- the best way to improve credibility is to create real work and publish traces of it, not just rewrite synthetic entries

## Keep

Keep these traits:
- restrained visual tone
- research / experiments / products triad
- emphasis on systems, autonomy, and experimentation
- no-consulting posture
- low-hype studio framing

## Tightening rules

Public copy should prefer:
- observations over claims
- ranges or qualitative language over suspicious precision
- explicit limits over broad confidence
- process language over performance theater
- evidence links wherever possible

Editorial rule:
If a sentence sounds more impressive than falsifiable, weaken it.

## File-by-file recommendations

### Homepage
File:
- `src/pages/index.astro`

Current strengths:
- good high-level framing
- clean sectioning
- experiments/products separation is understandable

Recommended changes:
- keep the hero simple
- add one small methodology sentence or link near the top
- rename `Featured Experiments` to `Recent Experiments` unless “featured” is editorially intentional
- in `Product Incubation`, avoid any copy that implies launch readiness if there is no public artifact yet
- if the cards remain sparse, add a sentence clarifying these are incubation records, not finished product pages

Suggested addition near hero:
- `We publish experiments, prototypes, and operating notes from ongoing work in autonomous systems.`

### Labs index
File:
- `src/pages/labs/index.astro`

Current strengths:
- structure is clear
- filter UI is useful

Recommended changes:
- swap “exploring the boundaries” for less grand language
- emphasize documented trials, setup notes, failures, and observations

Suggested replacement sentence:
- `Documented trials in autonomous systems, including setup choices, observed behavior, and failure modes.`

## Lab entry recommendations

### 1. Experiment 001: Autonomous Content Engine
File:
- `src/content/labs/autonomous-content-engine.md`

Primary issue:
- the entry reads like a finalized benchmark report with exact volumes, scores, and percentages

What to change:
- remove or soften exact output counts unless Joshua wants to stand behind them publicly
- remove exact quality scores and fact-check percentages unless a public method is linked
- replace dashboard language if there is no public dashboard artifact
- keep the main learning: short-form held up better than long-form; quality gates mattered; human calibration remained necessary

Safer rewrite direction:
- describe a sustained trial over several weeks
- say the system produced technical and research-oriented content across multiple formats
- note that short-form held up better than long-form
- say human review remained necessary for publication and threshold tuning

### 2. Experiment 002: Multi-Agent Research Pipeline
File:
- `src/content/labs/multi-agent-research-pipeline.md`

Primary issue:
- exact task counts, reduction percentages, and evaluation scores feel over-resolved for public-facing copy

What to change:
- replace exact completion time, review reduction, and quality score with bounded findings
- keep the core learning: specialization helped, verification mattered, and deadlocks/circular reasoning were real failure modes
- soften any claim that sounds like a benchmark result unless supported by a linked method

Safer rewrite direction:
- describe repeated multi-agent research trials
- note that specialization improved structure and coverage in many cases
- explicitly state that ambiguity sometimes caused loops or over-coordination
- retain the need for human scope definition and final review

### 3. Experiment 003: Zero-Oversight Automation
File:
- `src/content/labs/zero-oversight-automation.md`

Primary issue:
- this is actually the most credible conceptually, but still leans on precise counts more than necessary

What to change:
- keep the archival posture
- preserve the strong conclusion that zero oversight was not viable for stakeholder-facing operations
- reduce exact operational counts unless they matter materially
- foreground the lesson, not the throughput

Safer rewrite direction:
- frame it as a bounded operational trial that failed in predictable but instructive ways
- stress escalation, edge cases, and interpersonal nuance as the decisive constraints

## Product recommendations

### Automation Cost Meter
File:
- `src/content/products/automation-cost-meter.md`

Recommendation:
- present as a tool concept or internal prototype unless there is a public product surface
- avoid language that sounds like a ready SaaS offer
- ideally link to a repo, spec, screenshot, or methodology note

### Agent Orchestration Toolkit
File:
- `src/content/products/agent-orchestration-toolkit.md`

Recommendation:
- frame as patterns and tooling emerging from internal experiments
- avoid vague “framework” language unless there is a concrete artifact
- make unknowns explicit: what exists, what is still only conceptual, and what public evidence is available

## Structural content additions with highest leverage

### 1. Methodology page
Create a small page answering:
- how experiments are chosen
- what counts as evidence
- what gets published publicly vs withheld
- how human oversight fits into the process

This would make the whole site more believable.

### 2. Current work / current questions block
A small section on the homepage or about page listing:
- what is actively being explored
- what is paused
- what questions are open

This gives the studio a living-research feel without making large claims.

### 3. Evidence hooks
Every lab/product page should point to at least one of:
- repo
- public note
- design document
- output artifact
- methodology page

## Recommended execution order

1. Rewrite the three lab entries for public credibility.
2. Reframe product summaries around incubation reality.
3. Add a methodology/process page.
4. Add a small current-work signal on homepage or about page.
5. Only then consider deeper homepage copy changes.

## Safe vs review-gated

Safe:
- tightening lab markdown
- tightening product markdown
- adding methodology/about copy
- adding evidence links

Review-gated:
- changing overall positioning of the studio
- introducing public claims about clients, outcomes, or scale
- changing nav or major homepage architecture

## Verification

```bash
cd /home/joshua/projects/fullyautomated-enterprises
npm ci
npm run build
```