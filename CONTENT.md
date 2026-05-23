# Adding Content to FAE Website

This guide explains how to add new experiments, products, and pages to the website.

## Adding New Lab Experiments

### 1. Create a New Markdown File

Create a new file in `src/content/labs/` with a descriptive filename (e.g., `my-experiment.md`).

The filename becomes the URL slug automatically. For example:
- `my-experiment.md` → `/labs/my-experiment`
- `llm-orchestration.md` → `/labs/llm-orchestration`

### 2. Add Frontmatter

At the top of the file, add the required metadata:

```markdown
---
title: "Experiment 004: My Experiment Title"
status: "Active"
date: "2026-01-20"
summary: "A brief one-sentence description of the experiment."
tags: ["tag1", "tag2", "tag3"]
---
```

**Status Options:**
- `Active` - Currently running
- `Archived` - Completed or discontinued
- `Productized` - Led to a product

### 3. Write the Content

After the frontmatter, write your experiment notes using these standard sections:

```markdown
## Objective

What you're trying to test or accomplish.

## System Configuration (Sanitized)

High-level architecture without exposing sensitive details:
- Component 1
- Component 2
- Component 3

## Output Summary

Key metrics and results.

## Observations

### What Worked

Things that performed well or exceeded expectations.

### What Failed

Things that didn't work as planned.

### Unexpected Behavior

Surprising or unanticipated results.

## Human Intervention Required

- List of manual steps needed
- Time spent on oversight
- Critical decision points

## Next Iteration

Plans for future experiments or improvements.
```

### 4. Build and Deploy

```bash
npm run build
```

The new experiment will automatically appear in:
- The Labs index page (`/labs`)
- Tag filtering system
- Home page (if it's one of the 3 most recent)

## Adding New Products

### 1. Create a New Markdown File

Create a file in `src/content/products/` (e.g., `my-product.md`).

### 2. Add Frontmatter

```markdown
---
title: "Product Name"
stage: "Incubation"
summary: "Brief description of the product."
cta: "Join waitlist"
---
```

**Stage Options:**
- `Idea` - Early concept
- `Incubation` - In development
- `Beta` - Testing phase
- `Live` - Publicly available

### 3. Write Product Details

```markdown
## Overview

Detailed description of what the product does.

## Status

Current development status and progress.

## Target Users

Who this product is for.

## Availability

When/how users can access it.
```

### 4. Build and Deploy

```bash
npm run build
```

The product will appear on the `/products` page.

## Updating the About Page

Edit `src/content/pages/about.md`:

```markdown
---
title: "About Fully Automated Enterprises"
description: "Learn about FAE's mission..."
---

Your content here in Markdown format.
```

## Content Guidelines

### Writing Style

- **Technical but accessible** - Assume intelligent readers, but explain jargon
- **Honest about failures** - Document what didn't work
- **Specific over vague** - Use concrete examples and metrics
- **No marketing speak** - This is a research lab, not a product pitch

### What to Include

✅ Real experiments with actual results
✅ Specific observations and metrics
✅ Failures and limitations
✅ Time spent on human oversight
✅ Unexpected behaviors

### What to Avoid

❌ Marketing language or hype
❌ Vague descriptions without data
❌ Hiding failures or limitations
❌ Exposing API keys or sensitive configs
❌ Making promises about timelines

## File Organization

```
src/content/
├── labs/           # Experiment notes
│   ├── experiment-001.md
│   ├── experiment-002.md
│   └── ...
├── products/       # Product pages
│   ├── product-001.md
│   └── ...
└── pages/          # Static pages
    └── about.md
```

## Markdown Features

### Headings

```markdown
# H1 - Page title (automatic from frontmatter)
## H2 - Main sections
### H3 - Subsections
```

### Lists

```markdown
- Bullet point
- Another point

1. Numbered item
2. Another item
```

### Bold and Italic

```markdown
**bold text**
*italic text*
```

### Code

Inline code: \`variable\`

Code blocks:
\`\`\`javascript
const example = true;
\`\`\`

### Links

```markdown
[Link text](https://example.com)
```

### Blockquotes

```markdown
> This is a quote or callout
```

## Testing Locally

Before deploying, test your changes:

```bash
npm run dev
```

Visit `http://localhost:4321` to preview the site.

## Deployment Workflow

1. Add or edit content in `src/content/`
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Upload `dist/` folder to hosting
5. Clear browser cache to see changes

## Need Help?

- Check existing lab files for examples
- Markdown syntax: https://www.markdownguide.org/basic-syntax/
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
