# Stogai Dzūkijoje

Modern website for a professional roofing contractor serving the Dzūkija region in southern Lithuania since 2010.

**Live site:** [stogai-dzukijoje.lt](https://stogai-dzukijoje.lt)

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Features

- Responsive, mobile-first design
- Smooth scroll animations
- Interactive quote calculator
- Photo gallery with lightbox
- Comprehensive pricing tables
- Contact form with direct call/email CTAs

## SEO

The site includes comprehensive SEO optimization:

- Semantic HTML structure
- JSON-LD structured data (RoofingContractor, WebSite, BreadcrumbList, FAQPage)
- Open Graph and Twitter Card meta tags
- XML sitemap (`/sitemap.xml`)
- robots.txt configuration
- PWA manifest for mobile home screen

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/eimis1990/stogu-dengimas.git
cd stogu-dengimas

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── public/
│   ├── gallery/          # Project photos
│   ├── favicon.ico       # Browser tab icon
│   ├── icon.svg          # Modern browser icon
│   ├── apple-touch-icon.png
│   ├── icon-192.png      # PWA icon
│   ├── icon-512.png      # PWA splash
│   ├── logo.png          # Company logo
│   ├── roof-hero.png     # Hero section image
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with SEO
│   │   ├── page.tsx      # Homepage
│   │   ├── kainos/       # Pricing page
│   │   └── sitemap.ts    # XML sitemap generator
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   └── lib/
│       └── pricing-data.ts
└── ...
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with services, process, materials, gallery, pricing preview, and contact |
| `/kainos` | Full pricing tables for all services |

## Environment Variables

No environment variables required for basic functionality.

For analytics or form handling, you may add:

```env
# .env.local (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## TODO

- [ ] Set up Google Search Console verification
- [ ] Connect contact form to email service
- [ ] Add Google Analytics

## Deploy on Vercel

The easiest way to deploy is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js).

## License

Private project. All rights reserved.

## Contact

**Marius**
Phone: +370 6299 9330
Email: stogodarbaijums@gmail.com
Facebook: [Mariusstogodarbai](https://www.facebook.com/Mariusstogodarbai)
