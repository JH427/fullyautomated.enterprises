---
title: "Methodology"
description: "How Fully Automated Enterprises chooses experiments, handles evidence, and decides what becomes public."
---

## Why This Page Exists

FAE is intended to become a record of real work, not a container for plausible-sounding automation claims.

This page describes the operating standard behind that goal: how experiments are chosen, what counts as evidence, what gets published, and where human review still matters.

## How Experiments Are Chosen

We prefer questions that are:

- narrow enough to run in days, not months
- tied to a real workflow, not a thought experiment alone
- likely to produce an artifact, note, or reusable pattern
- capable of failing in a visible way
- useful even if the outcome is negative or partial

Good experiment questions usually look like:
- What can an agent do safely in a bounded maintenance lane?
- What breaks when context is handed from one agent role to another?
- Which parts of a workflow are expensive because of model choice rather than real difficulty?
- When does a promising pattern harden into something worth naming or productizing?

## What Counts as Evidence

We do not treat confidence, polish, or fluency as evidence.

For this site, evidence usually means one or more of:

- a repository or code artifact
- a build log or verification result
- a structured experiment note
- an operating document or checklist
- a reproducible workflow
- a concrete failure case
- a decision memo grounded in performed work

Public writing should point back to something real whenever possible.

## Publication Standard

A result is publishable when:

1. a real question was pursued
2. some work was actually performed
3. at least one observation, constraint, or failure became clearer
4. there is enough provenance to explain why the claim exists

This means negative results are valid material.

A failed handoff, a brittle workflow, or a tool that looked promising but did not survive contact with real use can all be more valuable than a polished success story.

## What Gets Published

Typical public outputs include:

- lab entries for bounded experiments
- methodology notes
- operating rules and checklists
- incubation records for repeated internal patterns
- short notes that clarify evidence, constraints, or lessons learned

We publish the useful layer, not every internal detail.

## What Gets Withheld or Sanitized

Some things should not be published directly even when the work is real.

This includes, depending on context:

- secrets, tokens, internal endpoints, or access details
- sensitive deployment specifics
- third-party information that is not ours to disclose
- internal notes that would create security or privacy risk
- details that are too raw to support a clean public claim yet

When material is sanitized, the goal is to preserve the lesson without exposing the wrong substrate.

## Human Review

Human review still matters in a few places:

- public claims that imply outcomes, scale, or capability
- subjective design direction
- legal or biographical framing
- deciding whether a result is genuinely supported
- deciding whether something is publishable at all

The point is not to remove humans from the loop everywhere.
The point is to understand where autonomy holds up and where review is still the mechanism that keeps the record honest.

## Productization Threshold

A pattern should not become a "product" page just because it sounds useful.

Before something is treated as a real incubation candidate, we want to see:

- repeated internal use or repeated experimental relevance
- a stable problem statement
- at least one artifact or spec
- evidence that the pattern is more than a one-off workaround

Until then, it is better described as an idea, a note, or an internal pattern.

## Current Operating Bias

FAE currently prefers:

- bounded experiments over grand programs
- notes with provenance over polished stories
- visible failure modes over synthetic certainty
- small real artifacts over large speculative roadmaps

That bias is deliberate. It is easier to grow a trustworthy record from small real things than to backfill truth under large invented narratives.
