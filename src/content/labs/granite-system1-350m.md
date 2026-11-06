---
title: "Adapting Granite 4.0 350M for Non-Generative Variable-Option Decisions"
kind: "research"
status: "Active"
date: "2026-11-06"
summary: "An experimental non-generative decision model improved on a frozen 768-case comparison, but failed its semantic qualification gates. Active research, not production-ready software."
tags: ["research", "Granite", "decision models", "experimental"]
---

## Abstract

We adapted IBM Granite 4.0 350M to select among variable-length option lists without generating text. A frozen 768-case confirmation comparison improved from 315/768 (41.0%) to 429/768 (55.9%). The improvement is measurable but insufficient: only 3 of 8 prospective qualification gates passed. The model remains weak on public language inference and several structured decision families. This experimental release supports inspection and further research, not production use or autonomous action.

## Objective and architecture

The objective is a non-generative interface accepting context and 2–16 dynamically supplied option descriptions, returning scores over those options plus a semantic NONE outcome. NONE means no offered option matches; it is not uncertainty, calibrated abstention, or authorization to act. No autoregressive answer decoding is used.

The base is [IBM Granite 4.0 350M](https://huggingface.co/ibm-granite/granite-4.0-350m), pinned to the [recorded base revision](https://huggingface.co/ibm-granite/granite-4.0-350m/tree/bd8a1497065c0d6ba1ef19af6b0d2b14bacf71c2). Inspection found 28 attention layers and zero experts: the hybrid class name does not make this particular 350M model a mixture-of-experts system. Rank-8 adapters modify query/value projections in the last four attention blocks. A shared 1024→128→1 head reads each option-end hidden state; a separate final-state head scores NONE. There are 369,154 trainable adapter/head parameters and 352,379,904 frozen base parameters. This is an adaptation of existing components, not a claim of architectural novelty.

Option IDs remain outside model inputs. Exact description sorting supplies a canonical order, with outputs mapped back to caller IDs and gold targets remapped during training. Duplicate descriptions are rejected. This removes caller-order and identifier variation, but causal readouts remain prefix-dependent: canonical ordering does not make candidate representations independent of other candidates.

## Data and splits

The course used 16,384 training row IDs representing 15,904 distinct visible decision states. Development contained 384 rows and 383 distinct states. Within-split semantic duplicates therefore exist; row counts should not be mistaken for unique-state counts.

The confirmation set was frozen before training and predicted only after checkpoint selection. Its 768 distinct cases comprise 384 synthetic instances across 12 trained logical families and 384 previously unused public SNLI pairs. Each domain contains one-quarter semantic NONE targets. Audits checked source labels, transformed targets, structured oracles, fingerprints, and token limits; previously used normalized premises and equivalent canonical states were excluded.

“Fresh” means fresh relative to locally used data, not pretraining-clean. Pretraining exposure is unknown, source image IDs were unavailable, and image-level independence is unverified. These are new instances of trained families, not unseen-family generalization. The transformed SNLI component is not an official full-SNLI benchmark. [SNLI's owners](https://nlp.stanford.edu/projects/snli/) and [original paper](https://arxiv.org/abs/1508.05326) describe the underlying corpus. The source snapshot is [pinned to an immutable dataset revision](https://huggingface.co/datasets/stanfordnlp/snli/tree/cdb5c3d5eed6ead6e5a341c8e56e669bb666725b); its CC-BY-SA 4.0 attribution/share-alike obligations are distinct from the base model's Apache-2.0 license.

## Training method

One broader course warm-started the prior canonical learnability checkpoint. The comparison control is that existing adapted checkpoint, not the untouched IBM base. Architecture and description-only canonical encoding were unchanged between control and course. Across 2,048 updates, every training row ID was used once. Each eight-example update included two NONE cases. Training used float32 on an AMD Radeon 8060S, AdamW, head learning rate 0.00005, adapter learning rate 0.00001, weight decay 0.01, and gradient clipping at 1.

Full development negative log likelihood (NLL), including step 0, alone selected the checkpoint; step 2,048 was best. Development accuracy rose from 179/384 to 215/384. The deterministic training metric sample improved from 62/128 to 80/128: these are sampled training results, not full-corpus accuracy. Confirmation outcomes did not select the checkpoint.

## Results

The same confirmation cases were scored by both models. Supported-choice accuracy measures correct selection when a matching option exists; NONE precision measures how often predicted NONE is correct, and recall measures how many actual NONE cases are detected.

| Metric | Control | Trained course |
| --- | --- | --- |
| Overall accuracy | 315/768 (41.0%) | 429/768 (55.9%) |
| Supported-choice accuracy | 33.7% | 52.4% |
| NONE precision | 37.0% | 57.0% |
| NONE recall | 63.0% | 66.1% |
| Structured decisions | 209/384 (54.4%) | 278/384 (72.4%) |
| Public language inference | 106/384 (27.6%) | 151/384 (39.3%) |
| NLL | 1.3676 | 0.9448 |

Always-NONE scores 25.0%, always-first 27.2%, and uniform choice including NONE has expected accuracy 26.5%. These are simple baselines, not comparisons against competing neural systems. Raw softmax scores are uncalibrated.

Only improvement and two invariance gates passed. Both models preserved the full mapped score distributions exactly in 32/32 reversed-order and 32/32 ID-renaming checks, rather than merely preserving the winning choice. Semantic gates failed: overall accuracy, supported accuracy, NONE precision, and NONE recall each required 75%; the combined domain gate required at least 65% in each domain. Structured performance exceeded that threshold, but public language inference did not.

All structured family counts are shown to avoid hiding weak areas behind the aggregate:

| Family (32 cases each) | Control correct | Trained correct |
| --- | --- | --- |
| active_budget | 11/32 | 19/32 |
| budget | 8/32 | 7/32 |
| capabilities | 8/32 | 19/32 |
| capability_priority | 9/32 | 13/32 |
| category | 28/32 | 32/32 |
| category_deadline | 19/32 | 31/32 |
| deadline | 28/32 | 24/32 |
| evidence | 22/32 | 26/32 |
| language | 22/32 | 31/32 |
| language_evidence | 19/32 | 21/32 |
| lookup | 27/32 | 31/32 |
| priority | 8/32 | 24/32 |

## Failures and limitations

Budget fell to 7/32, below that family's 8/32 always-NONE baseline; capability-plus-priority reached only 13/32. Deadline also regressed. Stronger category or lookup results do not establish a dependable constraint solver. These patterns motivate coverage and error analysis, not a proven single causal explanation.

An earlier input path exposed option IDs to the model, allowing arbitrary labels to affect representations. Removing IDs and canonicalizing descriptions addressed that interface defect, but applying the new prompt to old weights collapsed a 32-case probe to 10/32 correct with 31 NONE predictions. A subsequent 48-case learnability exercise reached 44/48 training versus 21/48 development. Several variables changed across those stages; they are diagnostics, not a controlled ablation isolating the effect of canonicalization or training.

Native 32,768-token capacity and overflow rejection are retained. This does not demonstrate useful 32k behavior. An earlier full-window CPU attempt timed out after 170.84 seconds: an unmet execution check, not evidence that the window was reduced. The confirmation cases are short, and no new full-window execution or quality claim follows from this course.

There is no established general reliability, calibration, unseen-family transfer, or safe agent deployment. Synthetic rules and a transformed language-inference subset do not represent broad real-world judgment. This confirmation is now consumed; subsequent tuning must not reuse it under a fresh-test label or lower its frozen gates.

## Reproducibility

The training helper took 1,000.411 seconds; its enclosing service took 1,007.386 seconds. The two-model fresh-comparison helper took 82.523 seconds and its service 84.683 seconds. Combined service time was 18m 12.069s. Preparation, tests, audits, CPU replays, and documentation are outside that timing.

The original format-2 checkpoint contains adapters and heads. Local audits verified frozen base integrity, row exposures, finite updates, checkpoint selection, and metrics reconstructed from raw scores. Two fresh CPU processes reproduced predictions exactly apart from timing. The research software suite passed 141 tests; software correctness checks do not prove decision quality.

The public companion uses a separate `portable_export_v1` package with the exact same adapter bytes and pinned IBM backbone. Its CPU loader was exercised from a copy outside the research directory, offline with existing base assets: eight saved cases reproduced complete predictions exactly, with exact distributions under reversal and renaming. The standalone example CLI also ran successfully. This verifies that bounded portability path, not a fresh dependency installation, a full retraining replay, or arbitrary-platform compatibility.

Inspect the [machine-readable results](/research/granite-system1-350m/results.json), [protocol projection](/research/granite-system1-350m/protocol.json), and [experimental checkpoint companion](https://huggingface.co/FullyAutomated/granite-system1-350m-experimental). The companion includes exact training/development/consumed-confirmation data with separate CC-BY-SA licensing, original raw predictions, and a standard-library result auditor. Follow its model card for inference and auditing instructions. Some historical code and the warm-start artifact are not redistributed; a complete end-to-end training reproduction is not supplied. The published protocol is a projection of the prospectively frozen local record, not an independently timestamped preregistration.
