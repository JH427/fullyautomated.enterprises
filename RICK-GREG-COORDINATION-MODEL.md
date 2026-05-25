# Rick + Greg Coordination Model for Site and Research Work

Status: draft
Updated: 2026-05-25

## Purpose

Define a simple operating model for future autonomous management of:
- `fullyautomated.enterprises`
- `hellointernet.lol`

This assumes:
- Rick is the operator on titan
- Greg is the research analyst and may hold context Rick does not have
- both agents may contribute to site content generation

## Principle

Do not make both agents do the same job.

The split should be:
- Greg expands context
- Rick turns context into artifacts, edits, and verified site changes

## Default role split

### Greg
Use Greg for:
- external research collection
- source comparison
- adversarial questioning of weak claims
- identifying adjacent experiments or references
- generating briefing memos for what FAE should test next

### Rick
Use Rick for:
- local repo inspection and edits
- writing/patching site content
- running builds and verification
- creating experiment docs, process docs, and public-facing summaries
- maintaining consistency across surfaces

## Handoff contract

When Greg hands work to Rick, the handoff should contain:
1. question or objective
2. claimed findings
3. confidence level
4. sources or provenance
5. open uncertainties
6. recommended next action
7. whether the output is public-safe, internal-only, or mixed

Rick should treat Greg summaries as inputs, not ground truth.

## Publishability classes

### Class A — safe for autonomous publication after verification
- style consistency updates
- low-risk copy cleanup
- link curation
- `now` updates from explicit source facts
- methodology/process notes grounded in actual workflow
- lab entries tied to real performed work and artifacts

### Class B — review-gated
- major homepage redesigns
- public claims about outcomes, scale, or customers
- new product positioning
- legal/biographical statements
- anything based on uncertain or secondhand research

## Suggested recurring workflow

1. Greg proposes 1-3 candidate experiments or findings.
2. Rick selects one based on feasibility and artifact potential.
3. Rick executes or prototypes the work locally.
4. Rick documents observations and artifacts.
5. Greg reviews for context gaps, comparative framing, and overclaim risk.
6. Rick publishes a tightened site version.

## For fullyautomated.enterprises

Preferred flow:
- Greg: `what should FAE investigate?`
- Rick: `what can be run and published this week?`

Output types:
- methodology pages
- lab entries
- incubation records
- operating notes

## For hellointernet.lol

Preferred flow:
- Rick leads
- Greg assists when deeper research, framing, or curation would improve the result

Output types:
- homepage/content design direction
- public notes
- links/signal/wiki curation
- proof/artifact presentation

## Anti-patterns

- Greg publishing directly to the site without artifact verification
- Rick inventing research conclusions without upstream evidence
- both agents editing the same narrative in parallel without a source of truth
- turning thin research into inflated public claims

## Minimum source-of-truth rule

Before a new public FAE entry is added, one of these should exist:
- repo
- plan
- experiment log
- methodology note
- artifact file
- structured research memo from Greg plus Rick verification

## Immediate next use

Use this coordination model to seed the first real FAE entries:
1. methodology page
2. autonomous website maintenance lab entry
3. analyst/operator split lab entry
