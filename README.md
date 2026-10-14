# fullyautomated.enterprises

Astro 5 / Tailwind source for Fully Automated Enterprises LLC: an independent studio for local AI, useful tools, and machine-made media. This refresh is a local working tree, not a publication or deployment.

## Develop and verify

```sh
npm ci
npm run build
node --test tests/site.test.mjs
node tests/browser-smoke.mjs
npm run preview -- --host 127.0.0.1
```

Preview defaults to `http://127.0.0.1:4321`. The build writes `dist/`, which is ignored by Git. No new dependencies were added. Browser smoke checks require Node 22+ (native WebSocket) and Chromium on PATH; set `CHROMIUM` to override the executable. It serves `dist/` on an ephemeral loopback port, creates a temporary browser profile under `TMPDIR`, and cleans up its server/browser on completion. Set `SCREENSHOT_DIR` to a scratch directory to capture homepage and open-menu review images.

`tests/site.test.mjs` checks content boundaries, legacy corrections, metadata, local links/fragments/assets, and basic document landmarks. The browser test checks every built route at 320, 390, 768, and 1440px, plus the keyboard-operated native mobile menu, touch targets, and skip link, with page JavaScript disabled. These are targeted checks, not a full accessibility audit or cross-browser certification.

## Structure

- `src/data/work.ts` — curated selected-work descriptions, maturity labels, and evidence links.
- `src/pages/work.astro` — work inventory and private-workflow context.
- `src/pages/products.astro` — explanatory compatibility page, not a product catalog.
- `src/content/labs/` — historical notes and in-place corrections at original URLs.
- `src/content/pages/` — About and Method content.
- `src/styles/studio.css` — responsive paper/ink design, system typography, focus and reduced-motion treatment.
- `public/studio-plate.svg` — original abstract studio illustration.
- `public/share.svg` / `public/share.png` — original share artwork and social-crawler raster export.
- `archive/legacy-content/` — exact pre-refresh lab and product-concept source snapshots; excluded from the site build, not secret storage.

The unused legacy product collection/components remain as source-only compatibility material; no route renders the old concept records. See `CONTENT.md` for editorial rules.

## Evidence boundaries

Work descriptions were checked against local project documentation and public GitHub metadata/READMEs for Horizon Code and Sloperator. GolfBench is labeled a local prototype with no public release. LLM Wiki is a private research workflow; its repository and notes are not linked or copied. This website verification does not rerun those projects’ tests or independently certify their capabilities.

Graphic studies are explicitly labeled as illustrations, not screenshots or measured outputs. To regenerate the deliberately versioned share asset with ImageMagick: `magick -background '#f3f0e7' public/share.svg public/share.png`. ImageMagick is not needed to build or serve the site. Astro uses its no-op image service because the site serves pre-authored assets without native image processing.

## Publication and security

Deployment remains a separate, explicitly authorized operation. Hosting is Namecheap shared hosting; consult `DEPLOYMENT.md` for the public posture. Credentials, connection details, document roots, and the host-specific runbook stay outside this repository. Do not commit `dist/`, `.astro/`, `node_modules/`, secrets, browser profiles, or review screenshots. No commit, push, deploy, or publication is implied by a passing build.
