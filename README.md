# GDG VIT Mumbai — Official Website

The official website for **Google Developers Group, Vidyalankar Institute of Technology, Mumbai**.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — build tool
- **Tailwind CSS v4** — styling
- **Motion (Framer Motion)** — animations
- **GSAP + ScrollTrigger** — scroll-linked animations
- **Lenis** — smooth scrolling
- **Three.js** — pixel reveal WebGL transition

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Route-level pages (Home, Events, Gallery, Spectrum)
└── index.css     # Global styles + Tailwind theme

public/
├── team/
│   ├── dithered/ # Dithered B&W member portraits (default state)
│   └── color/    # Full-colour member photos (hover state)
├── google_dino.png
└── GDG-Sticker-Brackets.gif
```

## License

Apache-2.0 © 2026 GDG VIT Mumbai
