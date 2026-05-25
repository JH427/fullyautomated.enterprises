# Fully Automated Enterprises Real Content Seed Plan

Status: draft
Updated: 2026-05-25

## Purpose

Replace demo UI data on `fullyautomated.enterprises` with real, lightweight, publishable work.

This plan assumes:
- the current labs/products are scaffolding
- Rick can propose and execute work autonomously
- Greg will eventually contribute research context Rick does not have
- the goal is not “big projects first” but a steady stream of believable public artifacts

## Strategy

FAE should not wait for a fully mature flagship project before publishing.

Instead, it should accumulate:
- small experiments
- methodology notes
- operating logs
- tool evaluations
- artifact writeups
- incubation records

The content engine should run from real work outward:
1. run a bounded experiment
2. save notes and outputs
3. publish a short lab entry
4. link any repo/spec/note produced
5. only later elevate repeat patterns into products

## What counts as a good seed experiment

A good seed experiment is:
- bounded to 1-3 days of work
- produces at least one visible artifact
- answers a real question
- has a concrete failure mode
- creates a reusable note, script, or pattern even if the result is negative

Bad seed experiments:
- vague moonshots
- work that needs weeks before anything publishable exists
- claims-heavy projects with no artifact trail
- anything that depends on pretending the result already exists

## Recommended first content lanes

### Lane 1: Methodology and operating notes

Fastest path to credibility.

Candidate entries:
- `How FAE runs agent experiments`
- `Public evidence policy for autonomous systems work`
- `What gets published, sanitized, or withheld`
- `Failure logging rubric for agent workflows`

Why first:
- low dependence on external completion
- directly improves site credibility
- creates framing for every later experiment page

### Lane 2: Agent operations experiments

Use the actual agent stack as subject matter.

Candidate experiments:
1. `Agent Handoff Reliability Trial`
   - question: what survives across agent-to-agent handoff reliably?
   - artifact: protocol note, checklist, example handoff schema

2. `Autonomous Website Maintenance Loop`
   - question: what tasks can agents safely perform on static sites without review?
   - artifact: lane policy, verification checklist, deploy runbook

3. `Research Analyst + Operator Split`
   - question: when is a dedicated research agent actually useful versus overhead?
   - artifact: role matrix, failure cases, escalation rules

4. `Public Note Projection Pipeline`
   - question: what is the safest path from internal notes to public-safe site content?
   - artifact: filtering rubric, publishing workflow

### Lane 3: Tooling and infrastructure evaluations

Candidate experiments:
1. `Model Routing for Agent Work`
   - compare quality/cost/latency across the models actually available in the Hermes stack
   - artifact: decision memo, routing policy

2. `Static Site Multi-Surface Governance`
   - evaluate how to maintain consistency across root + subdomains without content drift
   - artifact: style governance doc, content ownership map

3. `Agent Memory vs Session Recall`
   - question: what belongs in durable memory versus searchable transcript history?
   - artifact: operating note, examples, failure patterns

### Lane 4: Early incubation records

These should only exist when backed by some artifact.

Candidate incubation records:
- `Agent Site Steward` — patterns/scripts/checklists for autonomous static-site management
- `Research Relay` — lightweight handoff structure for analyst-to-operator collaboration
- `Evidence Ledger` — structured notes format for tracking claims, artifacts, and publishability

These are not products yet. They are named internal patterns that might become products later.

## Proposed first six publishable entries

Recommendation: build these in order.

1. `Methodology: How FAE Runs Agent Experiments`
2. `Lab: Autonomous Website Maintenance Loop`
3. `Lab: Agent Handoff Reliability Trial`
4. `Note: What We Count as Public Evidence`
5. `Lab: Research Analyst + Operator Split`
6. `Incubation Record: Evidence Ledger`

## Suggested site transition plan

### Phase 1: credibility foundation
Replace or supplement demo data with:
- one methodology page
- two real lab entries
- one public note/process page

### Phase 2: operating rhythm
Establish a repeatable cadence:
- 1 small lab or note per week
- every entry must link to at least one artifact
- every claim must be traceable to work performed

### Phase 3: incubation layer
Once 2-3 experiments cluster around the same pattern:
- create a product/incubation record
- describe what exists today
- describe what is still unknown
- avoid launch/CTA theater

## Rick/Greg division of labor

Rick:
- execution
- site maintenance
- experiment setup
- artifact production
- drafting public-facing summaries

Greg:
- upstream research
- external scan / literature / source gathering
- comparative analysis
- identifying adjacent methods Rick may miss

Shared:
- experiment scoping
- evidence review
- deciding what is public-safe
- identifying which patterns deserve incubation records

## Publishing rule

Nothing should go live on FAE just because it sounds plausible.

Minimum publishability threshold:
- a real question was pursued
- some work was actually done
- there is a concrete observation or failure
- there is at least one artifact, note, or documented method

## Immediate next actions

1. Create a methodology page for FAE.
2. Draft the first real lab entry around autonomous website maintenance.
3. Draft the Rick/Greg coordination model as an internal operating note.
4. Mark current demo entries for deletion, archival, or rewrite.
5. Replace product waitlist theater with incubation language once real seeds exist.
