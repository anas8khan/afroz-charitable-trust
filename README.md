# Afroz Charitable Trust – Website Layout (Prototype)

A clickable layout prototype for the **Afroz Charitable Trust** website. The site is aimed at **rural eye-care** and at **attracting CSR funders**. It is a review mock-up only. Development (CMS, real content, forms) starts after it is approved.

## Preview

- Open `index.html` in any browser. No build step is needed.
- Click **"Show layout labels"** (bottom-right) to see each section's name and purpose during a client review.
- Highlighted <mark>yellow dashed</mark> values are **placeholders** that must be replaced with verified trust data.

## Page structure (home page)

| # | Section | Purpose for CSR funders |
|---|---------|-------------------------|
| 1 | Utility bar | CSR-1, 12A/80G and Darpan IDs visible straight away |
| 2 | Header | Clear "Partner with Us" and "Donate" buttons |
| 3 | Hero | One rural mission statement, cost-per-impact card, CSR call-to-action |
| 4 | Impact counters | Scale of work (screenings, surgeries, camps, villages) |
| 5 | The rural problem | Why funding is needed (distance, cost, awareness) |
| 6 | Our model | Mobilise → Screen → Transport → Treat → Follow-up |
| 7 | Programs | Each program is a fundable project with cost and outcome |
| 8 | Where we work | District and village footprint map |
| 9 | CSR partnership | Why partner, funding tiers, 5-step process, proposal download |
| 10 | Transparency | Statutory documents and fund-utilisation chart |
| 11 | Governance | Trustees and the disclosed relationship with Dristy Eye Hospital |
| 12 | Stories | Beneficiary testimonials (photo/video) |
| 13 | Partners | Supporter logos, with a "Your logo here" prompt |
| 14 | CSR enquiry form | Captures leads: company, interest area, budget |
| 15 | Footer | Registration numbers, policies, hospital link |

## Planned inner pages (development phase)

`/about` · `/programs/:slug` · `/impact` (reports and dashboards) · `/csr` · `/transparency` · `/stories` · `/gallery` · `/donate` · `/contact` · Hindi version (`/hi`)

## Content checklist from the trust

- [ ] Trust deed, 12A, 80G, CSR-1, PAN, NGO Darpan (and FCRA if any)
- [ ] Audited financials and annual reports for the last 3 years
- [ ] Verified impact numbers (screenings, surgeries, camps, villages)
- [ ] Cost per surgery, per camp, per school and per spectacle pair
- [ ] Trustee names, photos and short bios
- [ ] High-quality, consented photos and videos from camps and beneficiaries
- [ ] Domain (e.g. `afrozcharitabletrust.org`) and official email

## Tech (prototype)

Plain HTML, CSS and JavaScript. The plan for production is React + Vite + Tailwind with pre-rendered pages (for SEO) and Contentful as the CMS, the same stack as the Dristy Eye Hospital site.
