Portfolio Website - Kimi AI

This is a modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Modern hero section with Three.js 3D ASCII sphere animation
- Smooth scroll animations using GSAP and ScrollTrigger
- Responsive design with Tailwind CSS
- 40+ UI components from shadcn/ui
- Projects showcase section
- About page with timeline and values
- Contact form
- Mobile-friendly navigation

## Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 3.4.19 + Tailwind Animate
- **Routing:** React Router v7
- **Animation:** GSAP 3.15.0, Three.js 0.184.0
- **UI Components:** shadcn/ui (40+)
- **Icons:** Lucide React

## Setup & Installation

### Prerequisites

- Node.js 18+ and npm

### Installation Steps

1. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode

Start the dev server with hot reload:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

#### Production Build

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

#### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── ui/             # shadcn/ui components
  │   ├── Navigation.tsx   # Top navigation
  │   ├── Layout.tsx       # Main layout wrapper
  │   ├── Footer.tsx       # Footer
  │   └── AsciiSphere.tsx  # 3D sphere animation
  ├── sections/            # Page sections
  │   ├── HeroSection.tsx
  │   ├── ProjectsSection.tsx
  │   ├── SkillsSection.tsx
  │   ├── AboutSnippet.tsx
  │   └── ContactSection.tsx
  ├── pages/               # Page components
  │   ├── HomePage.tsx
  │   └── AboutPage.tsx
  ├── hooks/               # Custom React hooks
  │   └── useScrollAnimation.ts
  ├── lib/                 # Utility functions
  │   └── utils.ts
  ├── App.tsx              # Root component
  ├── main.tsx             # Entry point
  └── index.css            # Global styles
```

## Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

## Notes

- The `.env` file contains database configuration (not used by frontend)
- Server-side code files (server.ts, src/lib/db.ts) are included for reference but not used in the frontend build
- All styling uses inline Tailwind classes and CSS variables
- Images are located in `public/images/`

## Fonts

The project uses Google Fonts:

- **Display:** Libre Baskerville (serif)
- **Accent:** Caveat (cursive)
- **Body:** DM Sans (sans-serif)
