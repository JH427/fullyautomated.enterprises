# Studio content guide

## Work, not a speculative product catalog

Edit selected projects in `src/data/work.ts`; the homepage and `/work` share the same component. Each public-source entry needs a real repository link and a plain account of what is implemented. Local work needs an explicit local/private label, a limit statement, and no misleading download or source link. `/products` is a compatibility explanation pointing to `/work`, not a place to incubate invented offerings.

Verify source visibility separately from local implementation. A public repository does not mean a product is released, hosted, supported, or reliable. Do not publish private repository URLs, local paths, endpoints, prompts, logs, personal data, or secrets.

## Lab notes

Markdown under `src/content/labs/` retains the original `/labs/<filename>` addresses. Required frontmatter:

```yaml
title: "A specific record"
status: "Archived" # Existing schema also accepts Active | Productized; require evidence before using them.
kind: "historical" # historical | correction (default historical)
date: "2026-05-25" # Original record date, not a claim of recent activity.
summary: "One sentence that preserves the evidence limit."
tags: ["historical", "agents"]
```

The current notebook groups historical records and corrections without a client-side filter. New live experiments would need a deliberate schema/presentation change; do not label current work historical just to fit the current view. Rick/Greg records are retired historical context, not the current team or Active work.

Unsupported demos retain explanatory correction pages. Never restore their illustrative output counts, quality percentages, or operational anecdotes as results. Exact originals are in `archive/legacy-content/`, outside Astro’s public/content trees. That archive is excluded from website output, but is not confidential if the source repository is shared.

## About and Method

Edit `src/content/pages/about.md` and `methodology.md`. Use h2 sections; the template supplies the single h1. Keep the method small: artifacts, bounded claims, failures, and separate human publication decisions. Avoid self-referential operating bureaucracy.

## Images and claims

Use permitted real screenshots scrubbed of private details, or clearly identified original artwork. Never fabricate a terminal session, measurement, dashboard, or film and present it as a project output. The current project studies are visual identities, explicitly not screenshots. The share PNG is an intentional source asset; build outputs and review screenshots stay ignored or outside the repository.

For a result claim, retain the exact task, configuration, observation, and evidence link. A plan is not implementation; implementation is not a benchmark; a passing build is not permission to publish.

## Required local checks

```sh
npm ci
npm run build
node --test tests/site.test.mjs
node tests/browser-smoke.mjs
npm run preview -- --host 127.0.0.1
```

Inspect affected pages visually at mobile and desktop widths. Keep new behavior in vertical test-first slices: fail an assertion against the existing built site, implement, rebuild, pass, then move to the next behavior. Deployment requires separate authorization.
