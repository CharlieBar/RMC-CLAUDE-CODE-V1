---
name: nextjs-tailwind-builder
description: Build stunning, production-ready websites with Next.js 15 and Tailwind CSS 4. Features App Router patterns, Server Components, advanced animations, glassmorphism, gradient meshes, and bold modern aesthetics. Use when creating landing pages, dashboards, SaaS apps, portfolios, e-commerce sites, or any web application requiring cutting-edge design and performance.
---

# Next.js + Tailwind CSS Website Builder

Build bold, trendy, and beautiful websites with Next.js 15 (App Router) and Tailwind CSS 4. This skill emphasizes unforgettable design, smooth animations, and production-ready code.

## Reference Files

**IMPORTANT:** Read these reference files for complete implementation details:

- `references/components.md` - Complete UI component library with 40+ patterns
- `references/layouts.md` - Page layouts, navigation, and structural patterns
- `references/animations.md` - Animation system, transitions, and micro-interactions
- `references/design-system.md` - Colors, typography, spacing, and visual tokens
- `templates/` - Ready-to-use page templates

---

## Design Philosophy

Create interfaces that are:

- **BOLD & Unforgettable**: No generic AI aesthetics—every design has a clear point of view
- **Modern & Trendy**: Glassmorphism, gradient meshes, bento grids, aurora effects
- **High Performance**: Server Components, optimized images, minimal JS
- **Accessible**: WCAG AA compliant, keyboard navigable, semantic HTML
- **Mobile-First**: Responsive from the ground up

### Aesthetic Directions to Choose From

Pick ONE and commit fully:

| Style | Characteristics |
|-------|-----------------|
| **Glassmorphism** | Frosted glass, blur effects, layered transparency, soft shadows |
| **Neo-Brutalist** | Raw, bold typography, thick borders, stark contrasts, chunky elements |
| **Aurora/Gradient Mesh** | Flowing color gradients, organic shapes, ethereal glow |
| **Dark Luxury** | Deep blacks, gold/teal accents, premium feel, subtle animations |
| **Soft Minimal** | Pastel colors, generous whitespace, refined typography |
| **Retro-Futuristic** | Neon accents, grids, synthwave colors, geometric shapes |
| **Editorial** | Magazine-style layouts, dramatic typography, image-centric |
| **Bento Grid** | Card-based layouts, varying sizes, interactive hover states |

---

## Tech Stack

```
Next.js 15          - App Router, Server Components, Server Actions
Tailwind CSS 4      - Utility-first styling with CSS variables
TypeScript          - Type-safe development
Framer Motion       - Advanced animations (optional)
Lucide React        - Beautiful icon system
```

---

## Project Structure

```
project/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, metadata
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Tailwind imports + custom CSS
│   │   ├── (marketing)/            # Marketing pages group
│   │   │   ├── about/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── (dashboard)/            # App pages group
│   │   │   ├── layout.tsx          # Dashboard-specific layout
│   │   │   └── dashboard/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog index
│   │   │   └── [slug]/page.tsx     # Dynamic blog posts
│   │   └── api/                    # API routes
│   │       └── contact/route.ts
│   ├── components/
│   │   ├── ui/                     # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   └── dialog.tsx
│   │   ├── layout/                 # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── sidebar.tsx
│   │   ├── sections/               # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── cta.tsx
│   │   │   └── faq.tsx
│   │   └── shared/                 # Shared components
│   │       ├── logo.tsx
│   │       ├── theme-toggle.tsx
│   │       └── scroll-to-top.tsx
│   ├── lib/
│   │   ├── utils.ts                # Utility functions (cn helper)
│   │   ├── fonts.ts                # Font configuration
│   │   └── constants.ts            # Site-wide constants
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-scroll.ts
│   │   └── use-media-query.ts
│   └── types/                      # TypeScript types
│       └── index.ts
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start Setup

### 1. Initialize Project

```bash
npx create-next-app@latest project-name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd project-name
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install clsx tailwind-merge lucide-react

# Animation (optional but recommended)
npm install framer-motion

# Fonts (optional - or use next/font)
npm install @fontsource-variable/inter @fontsource-variable/space-grotesk
```

### 3. Create Utility Function

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4. Configure Fonts

Create `src/lib/fonts.ts`:

```typescript
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
```

### 5. Root Layout

Create `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Site Name",
    template: "%s | Site Name",
  },
  description: "Your site description",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Site Name",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
```

### 6. Global Styles

Create `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light mode colors */
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --primary: 168 76% 42%;
    --primary-foreground: 0 0% 100%;
    --secondary: 220 14% 96%;
    --secondary-foreground: 222 47% 11%;
    --muted: 220 14% 96%;
    --muted-foreground: 220 9% 46%;
    --accent: 220 14% 96%;
    --accent-foreground: 222 47% 11%;
    --destructive: 0 84% 60%;
    --border: 220 13% 91%;
    --ring: 168 76% 42%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 222 47% 6%;
    --foreground: 210 40% 98%;
    --card: 222 47% 8%;
    --card-foreground: 210 40% 98%;
    --primary: 168 76% 50%;
    --primary-foreground: 222 47% 6%;
    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 17%;
    --muted-foreground: 215 20% 65%;
    --accent: 217 33% 17%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62% 50%;
    --border: 217 33% 17%;
    --ring: 168 76% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .glass {
    @apply bg-white/10 backdrop-blur-xl border border-white/20;
  }
  
  .glass-dark {
    @apply bg-black/20 backdrop-blur-xl border border-white/10;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-primary via-teal-400 to-emerald-400 bg-clip-text text-transparent;
  }
  
  .glow {
    box-shadow: 0 0 40px rgba(20, 184, 166, 0.3);
  }
  
  .glow-lg {
    box-shadow: 0 0 80px rgba(20, 184, 166, 0.4);
  }
}

/* Animations */
@layer utilities {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out 2s infinite;
  }
  
  .animate-gradient {
    animation: gradient 8s ease infinite;
    background-size: 200% 200%;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Tailwind Configuration

Create `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                         linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
        "aurora": `linear-gradient(125deg, 
          hsl(168 76% 42% / 0.2) 0%, 
          hsl(192 91% 36% / 0.2) 25%, 
          hsl(262 83% 58% / 0.2) 50%, 
          hsl(330 81% 60% / 0.2) 75%, 
          hsl(168 76% 42% / 0.2) 100%)`,
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam 4s linear infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        gradient: "gradient 8s ease infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-beam": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 1rem))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
```

---

## Next Steps

1. **Read `references/components.md`** for all UI component patterns
2. **Read `references/layouts.md`** for page structures and navigation
3. **Read `references/animations.md`** for animation patterns
4. **Read `references/design-system.md`** for visual design tokens
5. **Check `templates/`** for ready-to-use page templates

---

## Design Excellence Checklist

Before shipping, ensure:

- [ ] Typography is distinctive (not Inter/Roboto default)
- [ ] Color palette is cohesive with clear hierarchy
- [ ] Hover states on ALL interactive elements
- [ ] Loading states for async operations
- [ ] Smooth page transitions
- [ ] Mobile navigation works flawlessly
- [ ] Dark mode support (if applicable)
- [ ] Accessibility: 4.5:1 contrast, keyboard nav, ARIA labels
- [ ] Performance: <100kb JS, optimized images, Core Web Vitals pass
- [ ] SEO: Meta tags, Open Graph, structured data
