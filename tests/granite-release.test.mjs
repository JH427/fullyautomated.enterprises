import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

// Exercise Astro's real collection schema and templates, not source-string mocks.
execFileSync('npm', ['run', 'build'], { stdio: 'pipe' });
const html = route => readFileSync(`dist/${route}/index.html`, 'utf8');

test('research is listed first without changing historical or correction semantics', () => {
  const index = html('labs');
  assert.ok(index.includes('Research reports'), 'Research section must exist');
  assert.ok(index.indexOf('Research reports') < index.indexOf('Historical notes'));
  assert.ok(index.includes('href="/labs/granite-system1-350m"'));
  assert.ok(index.includes('Research report · Experimental release'));
  assert.ok(index.includes('Historical note · Archived'));
  assert.ok(index.includes('Unsupported demo · Correction'));
  for (const [slug, label, content] of [
    ['research-analyst-operator-split', 'Historical note / Archived', 'Those agent identities are retired.'],
    ['zero-oversight-automation', 'Correction / Unsupported demo', 'not measured results'],
  ]) {
    const page = html(`labs/${slug}`);
    assert.ok(page.includes(label));
    assert.ok(page.includes('Original record date:'));
    assert.ok(page.includes('Status: Archived'));
    assert.ok(page.includes(content));
  }
});

test('rendered report attaches results, failed gates, scope limits, and reproducibility sources', () => {
  const page = html('labs/granite-system1-350m');
  for (const text of ['Abstract', 'Objective and architecture', 'Data and splits', 'Training method', 'Results', 'Failures and limitations', 'Reproducibility', '315/768', '429/768', '3 of 8', '1.3676', '0.9448', '15,904', '383 distinct', '62/128', '80/128', '7/32', '13/32', '170.84', 'prefix-dependent', 'not pretraining-clean', 'uncalibrated', '141', '1,000.411', '1,007.386', '82.523', '84.683', '18m 12.069s']) {
    assert.ok(page.includes(text), `Missing report evidence or limitation: ${text}`);
  }
  for (const url of ['https://huggingface.co/ibm-granite/granite-4.0-350m', 'https://nlp.stanford.edu/projects/snli/', 'https://arxiv.org/abs/1508.05326', 'https://huggingface.co/FullyAutomated/granite-system1-350m-experimental', '/research/granite-system1-350m/results.json', '/research/granite-system1-350m/protocol.json']) assert.ok(page.includes(`href="${url}"`), `Missing source: ${url}`);
  assert.ok(!/\/home\/|localhost|127\.0\.0\.1/.test(page));
});

test('research report renders through the collection with active experimental metadata', () => {
  assert.ok(existsSync('dist/labs/granite-system1-350m/index.html'), 'Research route must be generated');
  const page = html('labs/granite-system1-350m');
  assert.ok(page.includes('Adapting Granite 4.0 350M for Non-Generative Variable-Option Decisions'));
  assert.ok(page.includes('Research report / Experimental release'));
  assert.match(page, /Report date: <time datetime="2026-11-06">2026-11-06<\/time> · Status: Active/);
  assert.ok(!page.includes('Historical note / Archived'));
  assert.ok(!page.includes('Original record date:'));
});
