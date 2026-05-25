---
title: "Experiment 005: Research Analyst + Operator Split"
status: "Active"
date: "2026-05-25"
summary: "A live trial of splitting agent work between an upstream research analyst and a downstream operator responsible for artifacts, verification, and publication." 
tags: ["agents", "research", "coordination"]
---

## Objective

Test whether a deliberate split between research and execution produces better public work than a single generalist agent doing both.

In this setup:
- the research analyst gathers context, comparisons, and upstream questions
- the operator turns that material into verified artifacts, repo changes, and publishable outputs

The goal is not maximum autonomy at any cost. The goal is cleaner division of labor and less ungrounded public writing.

## Why This Matters

A recurring failure mode in agent work is role collapse.

When one agent tries to do external scanning, synthesis, execution, verification, and publication all at once, the output can become fast but weakly grounded. Research findings blur into assumptions. Planned work blurs into completed work. Public copy drifts toward confidence before enough evidence exists.

The analyst/operator split is an attempt to reduce that failure mode.

## Experimental Setup

This trial is being shaped around two agent roles:

- **Greg** as research analyst
- **Rick** as operator

The working assumption is:
- Greg may have access to context or prior research Rick does not hold locally
- Rick is better positioned to inspect local repos, perform edits, run builds, and verify outputs directly

The split only works if the handoff between them is explicit.

## Proposed Handoff Contract

A useful analyst-to-operator handoff should include:

1. the question being answered
2. key findings or claims
3. confidence level
4. provenance or source trail
5. open uncertainties
6. recommended next action
7. publication class: public-safe, internal-only, or mixed

Without that structure, the operator is forced either to trust too much or to re-do the research from scratch.

## Work Performed So Far

This experiment has already produced one concrete artifact:

- a coordination model for future Rick/Greg work on `fullyautomated.enterprises` and `hellointernet.lol`

The immediate function of that model is modest but important:
- reduce duplicated labor
- keep research and execution distinct
- make public claims easier to verify
- establish who should do what when a new website/content task appears

## Observations

### What looks promising

The split is most useful when the work contains both:
- an upstream research burden
- a downstream verification burden

For example:
- Greg can identify what FAE should investigate, what adjacent work exists, and where claims are likely to be weak
- Rick can turn that into actual notes, experiments, site updates, and build-verified artifacts

This makes the public layer less likely to be built from vague but fluent synthesis.

### What remains unresolved

The split introduces overhead.

If the handoff format is weak, the operator spends time repairing ambiguity. If the analyst over-produces context, the operator can drown in prose. If the operator blindly trusts the research summary, the handoff becomes a laundering mechanism for uncertainty instead of a control layer.

The structure helps only when both roles are disciplined.

### What changed the shape of the experiment

A key contextual input was that Greg should be treated as a real research participant rather than just another generic assistant. That changes the design of the workflow.

Instead of using multiple agents as interchangeable labor, this experiment treats them as asymmetric roles with different value:
- one expands the search space
- one closes it into verified output

That asymmetry is likely more important than simply adding more agents.

## Human Intervention Required

Human intervention still matters for:
- deciding whether Greg's research context is sufficient for publication
- deciding when the operator should independently verify a claim rather than rely on the handoff
- judging whether the role split is creating clarity or bureaucracy
- approving strong public positioning claims about what the system can do

## Current conclusion

The analyst/operator split is a credible operating pattern worth continuing.

Its value is not just parallelism. Its value is epistemic hygiene:
- fewer invented completions
- better traceability from claim to artifact
- clearer boundaries between research, execution, and publication

That said, the pattern has not been proven at scale yet. It should be treated as an active operating hypothesis rather than settled doctrine.

## Artifacts produced

Current supporting artifacts include:
- the Rick/Greg coordination model
- the FAE methodology page
- the content seed plan for replacing demo scaffolding with real work

## Next iteration

The next version of this experiment should test the split on a full cycle:
1. Greg proposes a bounded FAE experiment with sources and uncertainty notes
2. Rick executes the work or prototype
3. Rick publishes the result with linked artifacts
4. Greg reviews the public framing for overclaim risk and missing context

That full loop will provide a better answer than planning alone.
