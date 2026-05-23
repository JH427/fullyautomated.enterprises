# FAE Website - Deployment Guide

This guide covers the deployment posture for the Fully Automated Enterprises website on Namecheap shared hosting.

Current status: deployment automation is not configured yet. GitHub is the source of truth; GitHub Actions build checks are configured; Namecheap is the host target.

## Build locally

```bash
npm ci
npm run build
```

This creates a `dist/` directory containing the static site. GitHub Actions runs the same install/build check on pushes and pull requests to `main`.

Expected build output includes:

- `dist/index.html`
- `dist/about/index.html`
- `dist/contact/index.html`
- `dist/labs/index.html`
- `dist/labs/*/index.html`
- `dist/products/index.html`
- `dist/sitemap-index.xml`
- `dist/robots.txt`

## Preferred deployment path: SSH/SFTP/rsync

Joshua confirmed Namecheap cPanel exposes an SSH Keys page with both "Generate a New Key" and "Import Key" options.

Preferred security posture:

1. Generate a dedicated deploy key locally on titan.
2. Import only the public key into cPanel.
3. Authorize the imported key in cPanel if required.
4. Keep the private key out of the repo, wiki, shell history, and chat logs.
5. Verify the exact SSH hostname, username, port, and document root in Namecheap/cPanel.
6. Deploy the contents of `dist/` to the verified document root with `rsync` or SFTP.

Do not assume the remote path. Common cPanel paths include `public_html/` or a domain-specific subdirectory, but this must be verified before scripting.

## Fallback deployment path: cPanel File Manager

If SSH/SFTP is unavailable:

1. Run `npm run build` locally.
2. Compress the contents of `dist/`.
3. Upload through cPanel File Manager.
4. Extract into the verified document root.
5. Check the live site and rollback if needed.

## Manual verification after deploy

Check at least:

- `https://fullyautomated.enterprises/`
- `https://fullyautomated.enterprises/about/`
- `https://fullyautomated.enterprises/contact/`
- `https://fullyautomated.enterprises/labs/`
- `https://fullyautomated.enterprises/products/`
- `https://fullyautomated.enterprises/sitemap-index.xml`
- `https://fullyautomated.enterprises/robots.txt`

## Open questions before automation

- Namecheap SSH hostname
- cPanel username
- SSH port
- Remote document root for `fullyautomated.enterprises`
- Whether deploys should delete removed files or only overwrite changed files
- Whether `.htaccess` is needed for HTTPS redirects or clean URL behavior

## Optional `.htaccess`

Only add this after inspecting the live host's existing `.htaccess` and confirming it is needed.

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension if files are emitted that way
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)$ $1.html [NC,L]
```

