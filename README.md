# Mian Ather Ali — Portfolio

Personal portfolio site built with Next.js 16, Tailwind CSS, and Framer Motion.
Live at: [mianather-dev.vercel.app](https://mianather-dev.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + inline styles
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Fonts:** DM Serif Display, DM Sans, DM Mono
- **Deployment:** Vercel

## How To Make Your Own

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── resume/page.tsx
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── About.tsx
│       └── Contact.tsx
└── public/
    └── resume.pdf
```

## Adding Your Resume

Drop your PDF into `public/resume.pdf` — the download button serves it automatically.

## Deploy to Vercel

Push to GitHub, import repo on [vercel.com](https://vercel.com), click Deploy. Every push to `main` redeploys automatically.

## Pushing Updates

```powershell
git add .
git commit -m "your message"
git push
```

## Customization

| What | File |
|---|---|
| Headline, bio | `components/sections/Hero.tsx` |
| Projects | `components/sections/Projects.tsx` |
| Skills | `components/sections/Skills.tsx` |
| Experience | `components/sections/Experience.tsx` |
| About, certs | `components/sections/About.tsx` |
| Contact links | `components/sections/Contact.tsx` |
| Resume page | `app/resume/page.tsx` |
| SEO metadata | `app/layout.tsx` |

## License

© 2026 Mian Ather Ali. All rights reserved.