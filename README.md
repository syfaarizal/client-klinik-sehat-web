# Klinik Sehat — Healthcare Clinic Website

A modern, responsive website for Klinik Sehat — a healthcare clinic offering general consultations, dental care, vaccinations, and specialized medical services. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 15** — App Router, Server Components
- **React 19** + TypeScript (strict mode)
- **Tailwind CSS v4**
- **shadcn/ui** — Radix UI primitives + CVA
- **Framer Motion** — Animations
- **Lucide React** — Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                    # App Router pages
  page.tsx             # Homepage
  about/               # About page
  contact/             # Contact page
  products/            # Services & doctors listing
  products/[slug]/     # Individual service/doctor detail
  artikel/             # Health articles listing
  artikel/[slug]/      # Individual article detail

components/
  ui/                  # Primitive UI components (button, card, accordion, etc.)
  sections/            # Page sections (navbar, hero, footer, etc.)
  shared/              # Reusable small components (SectionHeading, StarRating)

data/                   # Centralized data files
  products.ts          # Doctors and services data
  articles.ts          # Health articles data
  categories.ts        # Service categories
  company.ts           # Company information
  testimonials.ts      # Customer testimonials
  features.ts           # Feature highlights
  promo.ts             # Promotional content

types/                  # TypeScript type definitions
hooks/                  # Custom React hooks
lib/                    # Utility functions and constants

public/
  images/               # Image assets (replace with actual files)
  icons/                # Custom SVG icons
```

## Managing Content

### Replacing Images

All images are stored in `public/images/` and referenced through data files in `data/`. Replace files with matching names — no code changes required.

### Updating Data

All content (doctors, services, testimonials, company info) is centralized in the `data/` folder as TypeScript files. To connect to a backend or CMS, update the data fetching functions in these files.

## Design System

| Token | Value |
|-------|-------|
| Primary | `#F7931A` |
| Secondary | `#2B2B2B` |
| Background | `#FFF8F1` |
| Font | Plus Jakarta Sans |

Color tokens and border radius are configured in `app/globals.css` via `@theme` (Tailwind v4).

## Features

- **Homepage** — Hero, categories, featured doctors/services, testimonials, trust badges
- **About** — Company story, values, statistics, facilities
- **Contact** — Contact info, embedded map, reservation form, FAQ
- **Products** — Filterable listing of doctors and services
- **Product Detail** — Full information, gallery, related items
- **Articles** — Health articles listing and detail pages

## License

MIT
