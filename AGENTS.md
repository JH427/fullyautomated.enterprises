# Agent instructions for fullyautomated.enterprises

This repo contains the Astro static site for Fully Automated Enterprises LLC.

## Site purpose

`fullyautomated.enterprises` is a public research-studio website for Fully Automated Enterprises, focused on AI-driven autonomous business processes. Treat the current site as a mockup/prototype unless Joshua explicitly says otherwise.

## Voice and positioning

- Serious research studio / experimental lab.
- Concrete, credible, and specific.
- Avoid startup hype, fake certainty, and overclaiming.
- It is fine to describe experiments, prototypes, and lessons learned.
- Do not imply products are live, revenue-generating, or production-ready unless the content proves it.

## Safe edit surfaces

Low-risk markdown/content surfaces:

- `src/content/labs/*.md`
- `src/content/products/*.md`
- `src/content/pages/*.md`
- `CONTENT.md`
- README/runbook docs, after inspecting current content

Higher-risk surfaces requiring explicit Joshua approval:

- `src/pages/**`
- `src/layouts/**`
- `src/components/**`
- `astro.config.mjs`
- `package.json` / `package-lock.json`
- deploy scripts, CI, DNS, hosting config, secrets, credentials, private keys

## Required checks

Before committing or deploying content changes:

```bash
npm ci
npm run build
```

If a visual/layout route changed, also preview locally:

```bash
npm run preview -- --host 127.0.0.1
```

Review the affected routes in `dist/` or browser preview before calling work complete.

## Content schemas

Schemas live in `src/content/config.ts`.

Labs require:

- `title: string`
- `status: Active | Archived | Productized`
- `date: string`
- `summary: string`
- `tags: string[]`

Products require:

- `title: string`
- `stage: Idea | Incubation | Beta | Live`
- `summary: string`
- `cta: string`

Pages require:

- `title: string`
- optional `description: string`

## Secrets and generated files

Never commit:

- `.env` or `.env.*`
- cPanel/Namecheap credentials
- SSH private keys
- GitHub tokens
- `dist/`
- `.astro/`
- `node_modules/`
- local editor/cache directories

## Deployment posture

Hosting is Namecheap shared hosting. Preferred future deployment path is SSH/SFTP/rsync using a locally generated deploy key whose public key is imported into cPanel. Deployment automation is not yet configured; do not invent credentials or deploy paths.

