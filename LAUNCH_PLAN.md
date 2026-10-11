# Home Solutions — Launch Build Plan

## Product promise
Homeowners describe a specific repair or improvement, optionally upload room photos, and get an actionable project plan with suggested DIY tutorials, relevant materials, optional visualizations, or a path to hire a vetted local professional.

## Phased scope
### Phase 1 — Secure foundation
- Replace static-only preview architecture with frontend, API, and PostgreSQL database
- Homeowner and installer registration, login, email verification, roles, sessions, password reset, authorization tests
- Projects: description, categories, budget, ZIP, status; multiple photo uploads with access controls, size/type validation, deletion, retention policy
- Mobile accessibility, clear consent and privacy policy, deletion request process
- Admin moderation dashboard and audit logging

**Acceptance**: User can sign up, upload project photos securely, save a project, return and edit it; another user cannot see that project.

### Phase 2 — Actionable solutions
- Server-side AI problem assessment (limits, uncertainty and safety flags); image analysis only with clear consent
- Curated third-party tutorial matching with canonical video IDs, attribution and broken-link checking
- Product suggestions via approved affiliate APIs/networks, with transparent affiliate disclosure and live-price safeguards
- Optional paid/on-demand AI visual redesigns; label renders as conceptual and preserve structural context
- Individual project dashboard with DIY, assisted, and done-for-me paths

**Acceptance**: Real homeowner project reliably yields matched instructions, tutorial links, products and sensible professional referral suggestions without invented prices.

### Phase 3 — Installer marketplace
- Professional onboarding, licensing/insurance checks as applicable, location and trade eligibility, admin approval
- Lead consent/qualification, assignment and availability tracking, contact preferences and spam protections
- Messaging, proposals, scope changes, milestones, booking and cancellation workflow
- Proposed plans: Free 2 qualified leads/month and 10% completed-job platform fee; Pro $49/month, 15 leads, 5% fee; Business $99/month, 50 leads, 3% fee — subject to business/legal review
- Stripe subscriptions, Stripe Connect for in-platform payment flow where legally permitted, refunds, disputes, webhooks, ledger/reconciliation; do not assume off-platform job collection

**Acceptance**: A test lead goes from opt-in to approved installer quote to a paid verified completion, with correct fees.

### Phase 4 — Trust and private beta
- Verified completed-job two-way reviews; homeowner feedback private/restricted; independent review window, abuse reports and disputes
- Anti-fraud and contractor quality controls; incident response and privacy/security review
- Beta with 10–20 homeowners and 5–10 vetted metro Atlanta contractors; measure successful project completion, lead quality, payout failures, support incidents
- Public launch only after security, payments, privacy, and operations checks pass

## Launch gates
No public promotion or billing until contractor compliance, service terms, refund/cancellation policy, Stripe and webhook tests, privacy/photo consent, abuse handling and backup/recovery work are complete.

## Current verified state (2026-10-11)
- Existing GitHub repo: tiwaworksonline-rgb/home-solutions (currently PUBLIC)
- Existing Render static preview: home-solutions-preview.onrender.com
- Static preview is not production marketplace; no real secure accounts, AI photo analysis, booking payments, provider screening or reviews
- Keep API keys, credentials and sensitive data out of GitHub. Confirm repository visibility and security model before adding real customer data.

## Next engineering milestone
Deliver a running backend API and database schema with account roles, projects and access-controlled photo upload, plus mobile frontend sign-in/project workflow. Integrate providers and payments in later gated phases.