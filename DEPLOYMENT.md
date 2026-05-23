# FAE Website - Deployment Guide

This guide covers the deployment posture for the Fully Automated Enterprises website on Namecheap shared hosting.

Current status: deployment is working via SSH/rsync. Detailed connection values and runbook are kept locally (not in this public repo).

## Quick reference

- Build: `npm ci && npm run build`
- Output: `dist/`
- Deploy method: rsync over SSH using a dedicated local deploy key
- Full runbook: kept outside this public repository in a private local location

Do not commit hosting credentials, private keys, or host-specific paths to this repository.
