# Component Library Reference

A comprehensive collection of bold, trendy, and beautiful components for Next.js + Tailwind CSS projects.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Badges & Tags](#badges--tags)
4. [Inputs & Forms](#inputs--forms)
5. [Navigation](#navigation)
6. [Modals & Dialogs](#modals--dialogs)
7. [Hero Sections](#hero-sections)
8. [Feature Sections](#feature-sections)
9. [Testimonials](#testimonials)
10. [Pricing Tables](#pricing-tables)
11. [CTAs](#ctas)
12. [FAQ Accordions](#faq-accordions)
13. [Stats & Metrics](#stats--metrics)
14. [Avatars & User Elements](#avatars--user-elements)
15. [Loading States](#loading-states)
16. [Decorative Elements](#decorative-elements)

---

## Buttons

### Primary Button

```tsx
// components/ui/button.tsx
import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Variants
          {
            // Primary - Gradient with glow
            "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:-translate-y-0.5 active:translate-y-0":
              variant === "primary",
            // Secondary
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            // Outline
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground":
              variant === "outline",
            // Ghost
            "text-foreground hover:bg-accent hover:text-accent-foreground":
              variant === "ghost",
            // Destructive
            "bg-destructive text-destructive-foreground hover:bg-destructive/90":
              variant === "destructive",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "px-10 py-5 text-xl": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
```

### Glass Button (for dark backgrounds)

```tsx
<button className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-semibold rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
  <span>Get Started</span>
  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>
```

### Animated Gradient Button

```tsx
<button className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-full overflow-hidden group">
  {/* Animated gradient background */}
  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 via-violet-500 to-pink-500 animate-gradient bg-[length:200%_200%]" />
  {/* Glow effect */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary-400 via-violet-400 to-pink-400 blur-xl" />
  {/* Content */}
  <span className="relative flex items-center gap-2">
    Start Free Trial
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</button>
```

### Icon Button

```tsx
<button className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
</button>
```

### Button with Loading State

```tsx
interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export const LoadingButton = ({ isLoading, children, ...props }: LoadingButtonProps) => {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  );
};
```

---

## Cards

### Glass Card (Dark Background)

```tsx
// components/ui/glass-card.tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10",
        hover && "transition-all duration-500 hover:bg-white/[0.08] hover:border-primary-500/30 hover:-translate-y-2",
        className
      )}
    >
      {/* Optional glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

### Feature Card with Icon

```tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  const Wrapper = href ? 'a' : 'div';
  
  return (
    <Wrapper
      href={href}
      className="group relative bg-white dark:bg-card rounded-3xl p-8 border border-border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      {/* Icon container */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-500/20 dark:to-primary-500/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-600 group-hover:scale-110">
        <div className="text-primary-600 group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
      </div>
      
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      
      {href && (
        <span className="inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300 group-hover:gap-3">
          Learn more
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      )}
    </Wrapper>
  );
}
```

### Bento Card (Various Sizes)

```tsx
interface BentoCardProps {
  size?: "sm" | "md" | "lg" | "wide" | "tall";
  children: React.ReactNode;
  className?: string;
}

export function BentoCard({ size = "md", children, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-3xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl",
        {
          "p-6": size === "sm",
          "p-8": size === "md",
          "p-10": size === "lg",
          "col-span-2 p-8": size === "wide",
          "row-span-2 p-8": size === "tall",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

// Usage in a bento grid:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <BentoCard size="wide">Hero content</BentoCard>
  <BentoCard>Feature 1</BentoCard>
  <BentoCard size="tall">Tall feature</BentoCard>
  <BentoCard>Feature 2</BentoCard>
  <BentoCard>Feature 3</BentoCard>
</div>
```

### Pricing Card

```tsx
interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  cta,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-8 transition-all duration-500",
        popular
          ? "bg-gradient-to-b from-primary-500 to-primary-600 text-white scale-105 shadow-2xl shadow-primary/30"
          : "bg-card border border-border hover:border-primary/30 hover:shadow-xl"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-white text-primary-600 text-sm font-bold px-4 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={cn("text-xl font-bold mb-2", popular ? "text-white" : "text-foreground")}>
          {name}
        </h3>
        <p className={cn("text-sm", popular ? "text-white/80" : "text-muted-foreground")}>
          {description}
        </p>
      </div>
      
      <div className="mb-8">
        <span className={cn("text-5xl font-bold", popular ? "text-white" : "text-foreground")}>
          {price}
        </span>
        <span className={cn("text-sm", popular ? "text-white/80" : "text-muted-foreground")}>
          {period}
        </span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <svg
              className={cn("w-5 h-5 flex-shrink-0", popular ? "text-white" : "text-primary")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={cn("text-sm", popular ? "text-white/90" : "text-muted-foreground")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={popular ? "secondary" : "primary"}
        className={cn("w-full", popular && "bg-white text-primary-600 hover:bg-white/90")}
      >
        {cta}
      </Button>
    </div>
  );
}
```

### Testimonial Card

```tsx
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="relative bg-card rounded-3xl p-8 border border-border transition-all duration-500 hover:shadow-xl hover:border-primary/20">
      {/* Quote mark */}
      <svg
        className="absolute top-6 right-6 w-12 h-12 text-primary/10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={cn("w-5 h-5", i < rating ? "text-amber-400" : "text-gray-300")}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-lg text-foreground leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        {avatar ? (
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Badges & Tags

### Badge Component

```tsx
// components/ui/badge.tsx
interface BadgeProps {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", size = "md", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full transition-colors",
        // Variants
        {
          "bg-secondary text-secondary-foreground": variant === "default",
          "bg-primary/10 text-primary": variant === "primary",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400": variant === "success",
          "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400": variant === "warning",
          "bg-destructive/10 text-destructive": variant === "destructive",
          "border border-border text-foreground": variant === "outline",
        },
        // Sizes
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
          "px-4 py-1.5 text-base": size === "lg",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
```

### Animated Status Badge

```tsx
export function StatusBadge({ status }: { status: "online" | "offline" | "busy" }) {
  const statusConfig = {
    online: { color: "bg-emerald-500", text: "Online" },
    offline: { color: "bg-gray-400", text: "Offline" },
    busy: { color: "bg-amber-500", text: "Busy" },
  };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
      <span className="relative flex h-2.5 w-2.5">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", statusConfig[status].color)} />
        <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", statusConfig[status].color)} />
      </span>
      <span className="text-sm font-medium text-foreground">{statusConfig[status].text}</span>
    </div>
  );
}
```

### Gradient Badge

```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 via-violet-500/10 to-pink-500/10 border border-primary/20">
  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-violet-500" />
  <span className="text-sm font-medium bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
    New Feature
  </span>
</span>
```

---

## Inputs & Forms

### Text Input

```tsx
// components/ui/input.tsx
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">{label}</label>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border border-border bg-background px-4 py-2 text-base transition-all",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {hint && !error && <p className="text-sm text-muted-foreground">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
```

### Floating Label Input

```tsx
export function FloatingInput({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className="peer w-full h-14 px-4 pt-5 pb-2 rounded-xl border border-border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      />
      <label className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-200 peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
        {label}
      </label>
    </div>
  );
}
```

### Search Input

```tsx
export function SearchInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="search"
        className="w-full h-12 pl-12 pr-4 rounded-full border border-border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        placeholder="Search..."
        {...props}
      />
    </div>
  );
}
```

### Select Dropdown

```tsx
// components/ui/select.tsx
export function Select({
  label,
  options,
  ...props
}: {
  label?: string;
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <div className="relative">
        <select
          className="w-full h-12 px-4 pr-10 rounded-xl border border-border bg-background text-foreground appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
```

### Checkbox

```tsx
export function Checkbox({
  label,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className="w-6 h-6 rounded-lg border-2 border-border bg-background transition-all peer-checked:bg-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 group-hover:border-primary/50" />
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-foreground">{label}</span>
    </label>
  );
}
```

### Toggle Switch

```tsx
export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          checked ? "bg-primary" : "bg-secondary"
        )}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 rounded-full bg-white shadow-lg transition-transform",
            checked ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
      <span className="text-foreground">{label}</span>
    </label>
  );
}
```

---

## Navigation

See `references/layouts.md` for complete header and navigation patterns.

---

## Hero Sections

### Full-Screen Hero with Gradient Mesh

```tsx
// components/sections/hero.tsx
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950" />
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-radial from-primary-500/40 via-primary-500/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-violet-500/30 via-violet-500/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-slate-300">Now Available</span>
          </div>
          
          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Build something{" "}
            <span className="bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl">
            The most powerful platform for modern teams. Ship faster, collaborate better, and scale effortlessly.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Get Started Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </button>
          </div>
          
          {/* Social proof */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400 mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap items-center gap-8 opacity-50">
              {/* Add company logos here */}
              <span className="text-2xl font-bold text-white">Company</span>
              <span className="text-2xl font-bold text-white">Brand</span>
              <span className="text-2xl font-bold text-white">Startup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Split Hero with Image

```tsx
export function SplitHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="primary" className="mb-6">
              <span className="mr-2">✨</span>
              Introducing v2.0
            </Badge>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Design faster than ever before
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Stop wasting time on repetitive tasks. Our AI-powered tools help you create stunning designs in seconds.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">Book a Demo</Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Active users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50M+</div>
                <div className="text-sm text-muted-foreground">Designs created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-primary-500/20 to-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-primary-500/20 rounded-full blur-3xl" />
            
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/images/hero-dashboard.png"
                alt="Dashboard preview"
                className="w-full h-auto"
              />
              
              {/* Floating elements */}
              <div className="absolute top-8 -left-8 bg-white dark:bg-card rounded-2xl p-4 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Design approved</div>
                    <div className="text-xs text-muted-foreground">Just now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Stats & Metrics

### Stats Grid

```tsx
interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatsSection({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-primary/30"
            >
              {stat.icon && (
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary/25">
                  {stat.icon}
                </div>
              )}
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Animated Counter

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}
```

---

## Loading States

### Skeleton Loader

```tsx
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] rounded-lg",
        className
      )}
    />
  );
}

// Usage examples
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-32 w-full rounded-2xl" />
<Skeleton className="h-10 w-10 rounded-full" />
```

### Card Skeleton

```tsx
export function CardSkeleton() {
  return (
    <div className="bg-card rounded-3xl p-8 border border-border">
      <Skeleton className="h-16 w-16 rounded-2xl mb-6" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <Skeleton className="h-5 w-1/3" />
    </div>
  );
}
```

### Spinner

```tsx
export function Spinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <svg
      className={cn("animate-spin text-primary", sizes[size])}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
```

---

## Decorative Elements

### Gradient Orbs

```tsx
export function GradientOrbs() {
  return (
    <>
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-radial from-primary-500/30 via-primary-500/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-violet-500/20 via-violet-500/5 to-transparent rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" />
    </>
  );
}
```

### Grid Pattern Background

```tsx
export function GridBackground() {
  return (
    <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02] dark:opacity-[0.03]" />
  );
}
```

### Aurora Background

```tsx
export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50 animate-gradient bg-[length:400%_400%]" />
    </div>
  );
}
```

### Noise Texture Overlay

```tsx
export function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.015] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
```

---

## Quick Reference

### Common Tailwind Class Combinations

```tsx
// Glass effect (dark background)
"bg-white/5 backdrop-blur-xl border border-white/10"

// Glass effect (light background)
"bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl"

// Gradient text
"bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent"

// Glow shadow
"shadow-[0_0_40px_rgba(20,184,166,0.3)]"

// Card hover lift
"transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"

// Smooth border color transition
"transition-colors duration-300 hover:border-primary/30"

// Responsive container
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Section padding
"py-24 md:py-32"
```
