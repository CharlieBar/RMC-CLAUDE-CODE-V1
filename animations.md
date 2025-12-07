# Animations Reference

Complete animation system for Next.js + Tailwind CSS. Includes CSS animations, Framer Motion patterns, scroll effects, and micro-interactions.

---

## Table of Contents

1. [CSS Animations](#css-animations)
2. [Tailwind Animation Classes](#tailwind-animation-classes)
3. [Framer Motion Patterns](#framer-motion-patterns)
4. [Scroll Animations](#scroll-animations)
5. [Hover Effects](#hover-effects)
6. [Page Transitions](#page-transitions)
7. [Loading Animations](#loading-animations)
8. [Micro-interactions](#micro-interactions)

---

## CSS Animations

### Add to globals.css

```css
/* ============================================
   ANIMATION KEYFRAMES
   ============================================ */

/* Float animation - gentle up/down movement */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(2deg); 
  }
}

/* Gradient shift - animated gradient backgrounds */
@keyframes gradient {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

/* Pulse glow - breathing glow effect */
@keyframes pulse-glow {
  0%, 100% { 
    opacity: 0.4; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.05); 
  }
}

/* Shimmer - skeleton loading effect */
@keyframes shimmer {
  0% { 
    background-position: -200% 0; 
  }
  100% { 
    background-position: 200% 0; 
  }
}

/* Spin slow - decorative rotation */
@keyframes spin-slow {
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
}

/* Border beam - animated border highlight */
@keyframes border-beam {
  0% { 
    offset-distance: 0%; 
  }
  100% { 
    offset-distance: 100%; 
  }
}

/* Marquee - horizontal scroll */
@keyframes marquee {
  from { 
    transform: translateX(0); 
  }
  to { 
    transform: translateX(calc(-100% - 1rem)); 
  }
}

/* Fade in up - entrance animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade in down */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale in - zoom entrance */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide in from right */
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide in from left */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Bounce subtle */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Wiggle */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

/* ============================================
   ANIMATION UTILITY CLASSES
   ============================================ */

@layer utilities {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out 2s infinite;
  }
  
  .animate-float-slow {
    animation: float 10s ease-in-out infinite;
  }
  
  .animate-gradient {
    animation: gradient 8s ease infinite;
    background-size: 200% 200%;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 2s linear infinite;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    background-size: 200% 100%;
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
  
  .animate-fade-in-down {
    animation: fade-in-down 0.6s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scale-in 0.5s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.6s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 0.6s ease-out forwards;
  }
  
  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }
  
  .animate-wiggle {
    animation: wiggle 0.5s ease-in-out;
  }
}

/* ============================================
   REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Tailwind Animation Classes

### Add to tailwind.config.ts

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      animation: {
        // Floating animations
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 10s ease-in-out infinite",
        
        // Background animations
        "gradient": "gradient 8s ease infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        
        // Loading animations
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        
        // Entrance animations
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        
        // Interactive animations
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "wiggle": "wiggle 0.5s ease-in-out",
        
        // UI animations
        "accordion-down": "accordionDown 0.2s ease-out",
        "accordion-up": "accordionUp 0.2s ease-out",
        "marquee": "marquee 40s linear infinite",
        "border-beam": "borderBeam 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 1rem))" },
        },
        borderBeam: {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
    },
  },
};
```

---

## Framer Motion Patterns

### Installation

```bash
npm install framer-motion
```

### Basic Fade In Component

```tsx
// components/animations/fade-in.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
}: FadeInProps) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Staggered Children Animation

```tsx
// components/animations/stagger-container.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Usage:
// <StaggerContainer className="grid grid-cols-3 gap-6">
//   <StaggerItem><Card /></StaggerItem>
//   <StaggerItem><Card /></StaggerItem>
//   <StaggerItem><Card /></StaggerItem>
// </StaggerContainer>
```

### Scale on Hover

```tsx
// components/animations/scale-hover.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ScaleHover({
  children,
  scale = 1.05,
  className,
}: {
  children: ReactNode;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Animated Counter

```tsx
// components/animations/animated-counter.tsx
"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [isInView, target, duration, count]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
```

### Text Reveal Animation

```tsx
// components/animations/text-reveal.tsx
"use client";

import { motion } from "framer-motion";

export function TextReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.1, duration: 0.5 },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
```

---

## Scroll Animations

### Intersection Observer Hook

```tsx
// hooks/use-scroll-animation.ts
"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Usage:
// const { ref, isVisible } = useScrollAnimation();
// <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
```

### CSS-Only Scroll Animation Component

```tsx
// components/animations/scroll-reveal.tsx
"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animations = {
    "fade-up": {
      initial: "opacity-0 translate-y-10",
      visible: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-10",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-10",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-10",
      visible: "opacity-100 translate-x-0",
    },
    scale: {
      initial: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    blur: {
      initial: "opacity-0 blur-sm",
      visible: "opacity-100 blur-0",
    },
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? animations[animation].visible : animations[animation].initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
```

---

## Hover Effects

### Card Hover Effects (CSS Only)

```css
/* Lift effect */
.card-hover-lift {
  @apply transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl;
}

/* Glow effect */
.card-hover-glow {
  @apply transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)];
}

/* Border effect */
.card-hover-border {
  @apply transition-all duration-300 border-transparent hover:border-primary/30;
}

/* Scale effect */
.card-hover-scale {
  @apply transition-transform duration-300 hover:scale-[1.02];
}

/* Shine effect */
.card-hover-shine {
  @apply relative overflow-hidden;
}
.card-hover-shine::before {
  content: "";
  @apply absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700;
}
.card-hover-shine:hover::before {
  @apply translate-x-full;
}
```

### Button Hover Effects

```tsx
// Glow button
<button className="relative px-8 py-4 bg-primary text-white rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:-translate-y-0.5">
  Get Started
</button>

// Gradient shift button
<button className="relative px-8 py-4 bg-gradient-to-r from-primary-500 to-violet-500 text-white rounded-full transition-all duration-300 hover:from-primary-400 hover:to-violet-400">
  Get Started
</button>

// Icon slide button
<button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full">
  Get Started
  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>
```

---

## Loading Animations

### Skeleton Shimmer

```tsx
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-muted rounded-lg animate-pulse",
        "bg-gradient-to-r from-muted via-muted/50 to-muted",
        "bg-[length:200%_100%] animate-shimmer",
        className
      )}
    />
  );
}
```

### Spinner Variants

```tsx
// Simple spinner
<div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />

// Dots loader
<div className="flex gap-1">
  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
</div>

// Pulse loader
<div className="flex gap-1">
  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
  <div className="w-3 h-3 bg-primary rounded-full animate-pulse [animation-delay:0.2s]" />
  <div className="w-3 h-3 bg-primary rounded-full animate-pulse [animation-delay:0.4s]" />
</div>
```

---

## Micro-interactions

### Toggle Switch Animation

```tsx
<button
  onClick={() => setEnabled(!enabled)}
  className={cn(
    "relative w-14 h-8 rounded-full transition-colors duration-300",
    enabled ? "bg-primary" : "bg-muted"
  )}
>
  <div
    className={cn(
      "absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300",
      enabled ? "translate-x-7" : "translate-x-1"
    )}
  />
</button>
```

### Checkbox Animation

```tsx
<label className="flex items-center gap-3 cursor-pointer group">
  <div className="relative">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-6 h-6 rounded-md border-2 border-border bg-background transition-all duration-200 peer-checked:bg-primary peer-checked:border-primary" />
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <span>Label text</span>
</label>
```

### Like Button Animation

```tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={cn(
        "p-3 rounded-full transition-all duration-300",
        liked ? "bg-red-100 text-red-500" : "bg-muted text-muted-foreground hover:bg-muted/80"
      )}
    >
      <svg
        className={cn("w-6 h-6 transition-transform duration-300", liked && "scale-110")}
        fill={liked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
```

---

## Performance Tips

1. **Use CSS animations over JS when possible** - CSS animations are GPU-accelerated
2. **Animate only transform and opacity** - These properties don't trigger layout recalculation
3. **Use `will-change` sparingly** - Only on elements that will actually animate
4. **Respect `prefers-reduced-motion`** - Always include the media query
5. **Use `once: true` for scroll animations** - Don't re-animate elements
6. **Stagger animations thoughtfully** - Don't make users wait too long
