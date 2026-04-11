# mianather.dev

Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS + inline design tokens
- **Animation** — Framer Motion
- **Typography** — DM Serif Display, DM Sans, DM Mono
- **Deployment** — Vercel

## Structure
app/
├── page.tsx              # Home
└── resume/page.tsx       # Formatted resume at /resume
components/
├── layout/
│   ├── Nav.tsx           # Sticky navbar
│   └── Footer.tsx
└── sections/
├── Hero.tsx          # Animated canvas + headline
├── Projects.tsx      # Featured + filterable project grid
├── Skills.tsx        # Infinite scroll skill carousel
├── Experience.tsx    # Work history
├── About.tsx         # Education, orgs, certs
└── Contact.tsx       # Copy-to-clipboard contact
public/
└── resume.pdf            # Resume download

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

Deployed on Vercel.
