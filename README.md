# Afroj Charitable Trust – Website

Website for **Afroj Charitable Trust** (Reg. No. 10949/1310, Indian Trusts Act 1882, est. 2013), Chouparan, Hazaribagh, Jharkhand. It is built to explain **what the trust does, how it works and its impact**, so CSR teams and donors can decide to fund it quickly.

Live preview: https://anas8khan.github.io/afroz-charitable-trust/

## Page structure

| Section | Purpose for CSR funders |
|---|---|
| Top bar | Registration facts up front (Reg. No., Act, 12A/80G, CSR-1) |
| Hero | Real field photo, tagline, CSR call to action, impact card (74,344+ free cataract surgeries) |
| Impact numbers | 74,344+ free surgeries since 2013, 6,254 in 2025–26, 1,00,000+ patients/year, 93% surgeries free, 50,000+ students, 10,000+ trees |
| Who we are | Origin story (2011 survey → 2013 registration → own hospital), 3 centres, govt. support |
| Our journey | Timeline 2011 → 2025–26 → goal of 10,000 free surgeries a year |
| Secretary's message | Summary of Md. Imran Khan's message from the Annual Report |
| How we work | Identify → Screen → Counsel → Treat → Follow up → Reconnect (community-to-care pathway) |
| Our work | 6 running programmes with "since" year, Schedule VII tag and key metric, plus "Beyond eye care" |
| Dristy Eye Hospital | Clinical quality indicators, services, medical team |
| CSR alignment | Programme → Schedule VII clause → SDG mapping table |
| Where we work | Hazaribagh, Chatra, Koderma; centres and camp villages |
| Stories of change | Featured Kabilash Devi story + beneficiary quotes with photos |
| From the field | Auto-scrolling gallery of real photos |
| CSR partnership | "Close the gap" meter (6,254 of 10,000), why partner, 6 funding options, process, 2026–30 roadmap, proposal request |
| Partners | DBCS/NPCBVI, Ayushman Bharat, Dristy Eye Hospital, "Your company" |
| Transparency & governance | Registration numbers, audited fund use, documents, compliance, trustees, hospital disclosure |
| Get involved | Corporates, individual donors (Razorpay), volunteers, spread the word |
| Contact | CSR contact person and enquiry form (opens a pre-filled email to the trust) |

Inspired by what works for established NGOs such as NBJK (focus areas, impact numbers, stories, partners, governance, get-involved paths), adapted for corporate CSR decision makers.

## Content sources

- **Afroj Charitable Trust Annual Report 2025–26** – surgery figures, journey, Secretary's message, care pathway, clinical quality indicators, services, doctors, Kabilash Devi story, CSR opportunities, 2026–30 roadmap, compliance, registration numbers and contact.
- **Audit reports FY 2021–22 to 2023–24** – "₹3.3 crore spent in FY 2023–24, over 90% on hospital and patient care", activity list under "Beyond eye care", registered office address.
- Other programme figures (school screening, doorstep camps, trees, blankets) come from the existing trust/hospital content.

## Language

`EN | हिंदी` switch in the top bar. English text in `index.html` is the key; Hindi translations live in `js/hi.js`. Anything not translated falls back to English. The choice is remembered, and `?lang=hi` opens the Hindi version directly. When you change English text in `index.html`, update the matching key in `js/hi.js`.

## Before launch – details to fill in

Values highlighted with a dashed yellow box are placeholders:

- [ ] Cost per partnership option (`₹X lakh`) – e.g. cost per cataract surgery, per camp, per school drive
- [ ] CSR proposal PDF and downloadable Annual Report 2025–26
- [ ] Trust's own email/domain (currently imranchouparan@gmail.com, as listed in the Annual Report)
- [ ] A photo of Kabilash Devi (with consent) for the featured story
- [ ] Partner/supporter logos and any CSR partner testimonials
- [ ] Hindi review by a native speaker
## Tech

Plain HTML, CSS and JavaScript – no build step. Hosted on GitHub Pages. Photos in `assets/img/` are real field photos from the trust's programmes, resized for fast loading.
