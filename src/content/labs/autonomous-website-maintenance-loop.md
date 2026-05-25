---
title: "Experiment 004: Autonomous Website Maintenance Loop"
status: "Active"
date: "2026-05-25"
summary: "A bounded trial of agent-managed maintenance on static websites: source recovery, consistency fixes, build verification, and editorial lane definition."
tags: ["agents", "websites", "operations"]
---

## Objective

Test how much routine static-site maintenance can be delegated to agents without lowering trust.

The focus of this trial was not visual redesign. It was operational stewardship:
- identifying the canonical source repo
- separating source from deploy artifacts
- making low-risk consistency fixes
- verifying builds after changes
- defining which editorial lanes are safe for autonomous work

## Scope

This experiment used two live surfaces:
- `hellointernet.lol`
- `fullyautomated.enterprises`

The work stayed inside a bounded maintenance lane:
- source-tree inspection
- content and footer cleanup
- public-link cleanup
- planning and operating-note creation
- build verification

## System Configuration

- local agent operator with repo and shell access
- static Astro sites with multiple surfaces/subdomains
- build-first verification loop
- review-gated treatment for design changes, public claims, and deployment wiring

## Work Performed

### Source-of-truth recovery

The largest operational risk was not broken code. It was source confusion.

A canonical source repo for `hellointernet.lol` had been displaced by an artifact-like checkout, while a more current source clone existed in a temporary path. The maintenance loop first had to identify the real editable source tree, move it into the durable projects location, preserve the artifact checkout as backup, and rebuild all surfaces from the corrected location.

### Consistency and credibility fixes

Low-risk changes were then applied:
- normalized footer wording across `hellointernet.lol` surfaces
- removed placeholder social/contact links from `fullyautomated.enterprises`
- wrote site-management and redesign planning notes
- audited weak or placeholder surfaces such as `links` and `now`

### Verification

All touched Astro surfaces were rebuilt after changes. Static redirect/utility surfaces were also checked for expected files.

## Observations

### What worked

A narrowly scoped maintenance loop works well when the task is concrete and verifiable.

Agents were effective at:
- locating source-vs-deploy confusion
- performing repetitive consistency edits
- writing planning artifacts
- rebuilding surfaces to catch breakage
- separating safe autonomous work from review-gated work

### What failed or remained constrained

Agents should not invent freshness.

Pages like `now` become low-trust quickly if there is no explicit source of truth behind them. The same applies to research claims, product status, and current-focus language.

The experiment also showed that visual redesign is a different class of task from maintenance. It needs direction and approval, even when the implementation work is agent-capable.

### Unexpected behavior

The most consequential failure mode was administrative rather than technical: a previous agent had cloned or worked from a temporary source location, which made it easy to confuse a deploy-shaped tree for the canonical repo. Once that ambiguity existed, every later edit became higher-risk until the source tree was re-established.

## Human Intervention Required

Human input was still required for:
- deciding acceptable public language
- approving homepage direction changes
- defining what counts as canonical current-state information
- setting the boundary between demo scaffolding and real published work

## Current conclusion

Autonomous website maintenance is viable in a bounded lane.

It is strongest when the work is:
- reversible
- verifiable
- local to known repos
- low-risk in public claims

It becomes much less reliable when the task depends on:
- ambiguous source-of-truth inputs
- subjective design decisions
- current-state claims without a maintained upstream source
- synthetic content standing in for real work

## Artifacts produced

This trial produced:
- source-repo canonicalization for `hellointernet.lol`
- consistency fixes across multiple surfaces
- homepage redesign brief for `hellointernet.lol`
- surface-copy audit for `hellointernet.lol`
- content-transition and seed-work planning notes for `fullyautomated.enterprises`

## Next iteration

Next iterations should test a slightly more ambitious lane:
- real `links` upkeep
- a source-backed `now` workflow
- publishing real lab entries as experiments are completed
- formal analyst/operator handoffs between Greg and Rick
