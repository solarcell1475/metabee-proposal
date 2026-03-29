# MetaBee × GBA Healthcare Data Initiative — Proposal Website

Interactive single-page application presenting the MetaBee GBA Health Data Commercialisation strategic proposal.

## Tech Stack

- **Vite** + **React 19** + **TypeScript**
- CSS custom properties (design tokens) with light/dark theme
- No external UI libraries — zero runtime dependencies beyond React

## Quick Start

```bash
# Install dependencies
npm install

# Development server (hot-reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### GitHub Pages

1. In `vite.config.ts`, set `base` to your repo name:
   ```ts
   base: '/your-repo-name/',
   ```
2. Build and push the `dist/` folder:
   ```bash
   npm run build
   # Use gh-pages or manually push dist/ to the gh-pages branch
   npx gh-pages -d dist
   ```

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. No special configuration needed — `base: './'` works with Netlify

### Vercel

```bash
npx vercel
```

## Project Structure

```
proposal-site/
├── index.html                # Entry HTML with Google Fonts
├── vite.config.ts            # Vite config (base: './')
├── src/
│   ├── main.tsx              # React root
│   ├── App.tsx               # App shell + theme + fade-in observer
│   ├── index.css             # All design tokens + component styles
│   ├── hooks/
│   │   └── useFadeIn.ts      # IntersectionObserver hook for scroll animation
│   ├── data/                 # Typed content data (source of truth)
│   │   ├── vision.ts
│   │   ├── policyWindows.ts
│   │   ├── businessLogic.ts
│   │   ├── hsitp.ts
│   │   ├── stakeholders.ts
│   │   ├── timeline.ts
│   │   ├── market.ts
│   │   ├── compliance.ts
│   │   ├── risks.ts
│   │   └── budget.ts
│   └── components/           # Section components
│       ├── Navbar.tsx         # Sticky nav + scroll highlight + theme toggle
│       ├── HeroSection.tsx
│       ├── PolicySection.tsx
│       ├── BusinessLogicSection.tsx
│       ├── HSITPSection.tsx
│       ├── StakeholderSection.tsx  # Category filter
│       ├── TimelineSection.tsx     # Collapsible details
│       ├── MarketSection.tsx
│       ├── ComplianceSection.tsx
│       ├── RiskSection.tsx         # Level filter + expand
│       ├── BudgetSection.tsx
│       └── CTASection.tsx
└── dist/                     # Production build output
```

## Content Updates

All proposal content lives in `src/data/*.ts` as typed TypeScript modules. To update content:

1. Edit the relevant data file
2. TypeScript will catch any structural errors
3. Rebuild with `npm run build`

The data layer is designed to be easily replaceable with API calls in the future.

## Features

- Light/dark theme with system preference detection and localStorage persistence
- Scroll-activated navigation highlighting
- Stakeholder category filtering (Academic / Clinical / Commercial / Government / Community)
- Risk level filtering with expandable mitigation details
- Collapsible timeline milestone details
- Scroll-triggered fade-in animations
- Responsive mobile layout with hamburger menu
- Semantic HTML with keyboard accessibility

## Brand

- Primary: `#0a5c66` (Deep Medical Teal)
- Accent: `#c94a2b` (Warm Coral)
- Gold: `#b88a00` (Funding/Commercial)
- Display font: Instrument Serif
- Body font: Work Sans
