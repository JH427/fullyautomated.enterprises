# fullyautomated.enterprises

Astro source for the public website of Fully Automated Enterprises LLC.

Fully Automated Enterprises is Joshua's research studio for AI-driven autonomous business processes. The current site is a static Astro/Markdown prototype and should be treated as a credible research-lab surface, not a finished product catalog.

## Local development

```bash
npm ci
npm run dev
npm run build
npm run preview
```

The production build writes static files to `dist/`.

## Content model

Primary agent-editable content lives under `src/content/`:

- `src/content/labs/*.md` — research/lab entries
- `src/content/products/*.md` — product/incubation pages
- `src/content/pages/*.md` — long-form static page content

Schemas are defined in `src/content/config.ts`.

Lab frontmatter:

```yaml
title: "Experiment title"
status: "Active" # Active | Archived | Productized
date: "2026-01-20"
summary: "One-sentence summary."
tags: ["agent", "automation"]
```

Product frontmatter:

```yaml
title: "Product Name"
stage: "Incubation" # Idea | Incubation | Beta | Live
summary: "Brief description."
cta: "Join waitlist"
```

Page frontmatter:

```yaml
title: "Page title"
description: "Optional description"
```

See `CONTENT.md` for more detailed writing guidance.

## Deployment status

Hosting target: Namecheap shared hosting for `https://fullyautomated.enterprises`.

Deployment is not automated yet. The planned path is SSH/SFTP/rsync after verifying Namecheap cPanel SSH access, hostname, username, port, and document root. Do not commit hosting credentials or private keys.

See `DEPLOYMENT.md` and `docs/deployment-namecheap.md` for the current manual runbook and open questions.

## Agent workflow

- Markdown/content edits are the safe lane after `npm run build` passes.
- Template/component/package/deployment/DNS changes require explicit Joshua approval.
- Keep claims conservative: describe research, prototypes, and experiments honestly; do not overstate product maturity or business capability.
- Never commit `.env`, generated `dist/`, `.astro`, `node_modules`, credentials, or private keys.

