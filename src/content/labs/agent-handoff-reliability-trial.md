---
title: "Experiment 006: Agent Handoff Reliability Trial"
status: "Active"
date: "2026-05-25"
summary: "A live trial of what actually survives an analyst-to-operator handoff, and which fields are necessary to keep public-facing agent work grounded."
tags: ["agents", "handoffs", "operations"]
---

## Objective

Test what information has to survive an agent-to-agent handoff for the downstream operator to produce verified work instead of fluent drift.

The question is simple:

When one agent gathers context and another agent executes, what must the handoff contain so the second agent does not either:
- trust too much
- repeat the research from scratch
- publish claims that sound plausible but are weakly grounded

## Why This Trial Exists

A recurring failure mode in agent systems is that context transfer is treated as an implementation detail.

It is not.

A weak handoff quietly degrades the whole stack:
- research turns into unverifiable summary
- uncertainty gets flattened into confident prose
- execution quality falls because the operator lacks provenance
- public artifacts drift away from the actual work performed

This trial treats handoff structure as a first-class operational problem.

## Trial Context

The current setup uses asymmetric agent roles:
- **Greg** as research analyst
- **Rick** as operator

That split is useful only if the transfer layer is explicit.

The operator needs enough information to act, but not so much undifferentiated context that the handoff becomes another blob of prose.

## Working Handoff Contract

The current working contract is that an analyst-to-operator handoff should include:

1. the question or objective
2. claimed findings
3. confidence level
4. provenance or source trail
5. open uncertainties
6. recommended next action
7. publication class: public-safe, internal-only, or mixed

This is not meant to be elegant. It is meant to prevent ambiguity from laundering itself into output.

## Work Performed

This experiment is grounded in actual coordination work already performed during the transition of:
- `fullyautomated.enterprises`
- `hellointernet.lol`

Concrete work already completed around this question includes:
- defining a Rick/Greg coordination model
- separating research and execution responsibilities for public website work
- documenting which classes of edits are safe for autonomous publication
- turning that split into real site updates, real lab entries, and build-verified artifacts

This matters because the handoff question is no longer theoretical. It is already shaping what gets published and what gets held back.

## Observations

### What appears necessary

The most important fields are not raw volume but epistemic structure.

The downstream operator especially needs:
- what is known
- how it is known
- what is still uncertain
- what action is actually being requested

Without those, the operator is forced into one of two bad modes:
- unquestioning trust
- total re-derivation

Neither scales.

### What remains fragile

Confidence is easy to overstate.

If a handoff says a claim is "likely" but does not show why, the operator can accidentally convert uncertainty into public certainty. That becomes especially risky when the final output is a site update, methodology note, or experiment page that sounds authoritative.

A second fragility is verbosity. A handoff can contain the right information and still fail if it is bloated enough that the operator cannot tell what is signal versus commentary.

### What changed the way FAE is being managed

This trial has already changed the publication workflow:
- research and execution are now treated as distinct responsibilities
- public claims are expected to trace back to artifacts, plans, or verified local work
- Greg's value is not just "another agent" but upstream context expansion
- Rick's value is not just implementation but closure into build-verified output

That shift is part of the real operating model now, not just a design preference.

## Human Intervention Required

Human review is still needed for:
- deciding whether the handoff contains enough provenance for publication
- judging whether a confidence label is fair
- resolving cases where the analyst and operator disagree on what counts as sufficiently verified
- approving strong claims about capability or scale

## Current Conclusion

A structured handoff is not bureaucracy. It is one of the main controls that keeps a multi-agent workflow honest.

Right now the strongest conclusion is:
- handoffs should be explicit
- uncertainty should survive the transfer intact
- operators should verify claims whenever the public layer depends on them
- more agents are not automatically better unless the transfer contract is disciplined

The trial is still active because the current contract has not yet been tested across many cycles or many task classes.

## Artifacts Produced

Current supporting artifacts include:
- the Rick/Greg coordination model
- the FAE methodology page
- the real-content seed plan
- the published analyst/operator split experiment
- the published autonomous website maintenance experiment

## Next Iteration

The next iteration should test the handoff contract on a fuller loop:
1. Greg proposes a bounded experiment with sources and explicit uncertainty
2. Rick executes the work and produces an artifact
3. Rick drafts the public writeup
4. Greg reviews the framing for missing context and overclaim risk
5. the final published entry is checked against the original handoff fields

If that loop holds up repeatedly, the contract becomes a real reusable pattern rather than just a sensible memo.
