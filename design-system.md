# Design System Reference

Complete visual design tokens, color palettes, typography, spacing, and styling guidelines.

---

## Color System

### CSS Variables (globals.css)

```css
@layer base {
  :root {
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
```

### Primary Colors (Teal)

| Name | Hex | Usage |
|------|-----|-------|
| primary-50 | `#f0fdfa` | Subtle backgrounds |
| primary-100 | `#ccfbf1` | Light backgrounds |
| primary-200 | `#99f6e4` | Borders |
| primary-300 | `#5eead4` | Icons on dark |
| primary-400 | `#2dd4bf` | Hover states |
| **primary-500** | `#14b8a6` | **Main brand** |
| primary-600 | `#0d9488` | Buttons, links |
| primary-700 | `#0f766e` | Active states |
| primary-800 | `#115e59` | Text on light |
| primary-900 | `#134e4a` | Darkest |

### Neutral Colors (Slate)

| Name | Hex | Usage |
|------|-----|-------|
| slate-50 | `#f8fafc` | Light backgrounds |
| slate-100 | `#f1f5f9` | Card backgrounds |
| slate-200 | `#e2e8f0` | Borders |
| slate-300 | `#cbd5e1` | Muted text (dark) |
| slate-400 | `#94a3b8` | Placeholder text |
| slate-500 | `#64748b` | Secondary text |
| slate-600 | `#475569` | Body text |
| slate-700 | `#334155` | Headings |
| slate-800 | `#1e293b` | Cards (dark) |
| slate-900 | `#0f172a` | Backgrounds (dark) |
| slate-950 | `#020617` | Darkest |

### Accent Colors

| Purpose | Color | Hex |
|---------|-------|-----|
| Success | Emerald | `#10b981` |
| Warning | Amber | `#f59e0b` |
| Error | Red | `#ef4444` |
| Info | Blue | `#3b82f6` |
| Accent | Violet | `#8b5cf6` |
| Accent | Pink | `#ec4899` |

### Gradients

```css
/* Primary gradient */
.gradient-primary {
  @apply bg-gradient-to-r from-primary-500 to-primary-600;
}

/* Aurora gradient */
.gradient-aurora {
  background: linear-gradient(125deg, 
    rgba(20, 184, 166, 0.2) 0%, 
    rgba(139, 92, 246, 0.2) 50%, 
    rgba(236, 72, 153, 0.2) 100%);
}

/* Vibrant gradient */
.gradient-vibrant {
  @apply bg-gradient-to-r from-primary-500 via-violet-500 to-pink-500;
}

/* Gradient text */
.text-gradient {
  @apply bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent;
}
```

---

## Typography

### Font Stack

```typescript
// lib/fonts.ts
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

### Type Scale

| Element | Classes |
|---------|---------|
| Hero H1 | `text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1]` |
| Section H2 | `text-3xl md:text-4xl lg:text-5xl font-display font-bold` |
| Card H3 | `text-xl md:text-2xl font-display font-semibold` |
| Subtitle | `text-lg md:text-xl text-muted-foreground leading-relaxed` |
| Body | `text-base leading-relaxed` |
| Small | `text-sm text-muted-foreground` |

---

## Spacing

### Section Spacing

```css
/* Standard section */
.section { @apply py-24 md:py-32; }

/* Compact section */
.section-compact { @apply py-16 md:py-20; }

/* Hero section */
.section-hero { @apply py-32 md:py-40; }
```

### Containers

```css
/* Standard container */
.container-default { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }

/* Narrow (blog) */
.container-narrow { @apply max-w-3xl mx-auto px-4 sm:px-6; }

/* Wide (dashboard) */
.container-wide { @apply max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8; }
```

---

## Shadows & Effects

### Box Shadows

```typescript
// tailwind.config.ts
boxShadow: {
  'glow': '0 0 40px rgba(20, 184, 166, 0.3)',
  'glow-lg': '0 0 80px rgba(20, 184, 166, 0.4)',
  'card': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.05)',
  'card-hover': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.08), 0 24px 48px rgba(0, 0, 0, 0.1)',
}
```

### Glass Effects

```css
/* Light glass */
.glass { @apply bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl; }

/* Dark glass */
.glass-dark { @apply bg-white/5 backdrop-blur-xl border border-white/10; }
```

---

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| sm | 6px | Small elements |
| DEFAULT | 8px | Inputs |
| md | 10px | Buttons |
| lg | 12px | Cards |
| xl | 16px | Large cards |
| 2xl | 20px | Modals |
| 3xl | 24px | Hero cards |
| full | 9999px | Pills, avatars |

---

## Accessibility

### Contrast Requirements

- Body text: 7:1+ ratio (slate-700 on white)
- Large text: 4.5:1+ ratio
- Interactive: Clear focus states

### Focus States

```css
:focus-visible {
  @apply outline-none ring-2 ring-primary ring-offset-2 ring-offset-background;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Quick Reference

### Common Class Combinations

```tsx
// Glass card (dark bg)
"bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"

// Card hover
"transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/20"

// Gradient text
"bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent"

// Glow shadow
"shadow-[0_0_40px_rgba(20,184,166,0.3)]"

// Button primary
"px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90"

// Section container
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
```
