# Home Solutions

Home Solutions is a home-improvement planning and vetted-contractor marketplace under development.

## Current state
- `index.html`: responsive Phase 1 **development preview** deployed on Render static hosting. It does not store projects, analyze images, create accounts or take payments.
- `server/`: Express API **scaffold** with health/status endpoints only; it has **not been deployed**.
- `server/db/schema.sql`: proposed PostgreSQL schema; **not applied** to a live database.
- `LAUNCH_PLAN.md`: phased product, business and security requirements.

## Run API locally
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
GET http://localhost:3000/health

## Deployment
Existing Render static site publishes the root directory. Deploy the API as a separate Node web service only after configuring origin allowlists, database, authentication, rate limiting, photo storage, backups and security tests. Do not collect customer photos or credentials in this static preview.

## Security
This repository is currently public. Never commit secrets, personal photos, payment credentials or production database URLs. Authentication, authorization, contractor vetting and payment processing are not implemented. Do not market this as a production-ready marketplace.
