# Layouts Reference

Complete page layouts, navigation patterns, headers, footers, and structural components for Next.js + Tailwind CSS.

---

## Table of Contents

1. [Root Layout](#root-layout)
2. [Headers](#headers)
3. [Mobile Navigation](#mobile-navigation)
4. [Footers](#footers)
5. [Page Layouts](#page-layouts)
6. [Dashboard Layouts](#dashboard-layouts)
7. [Sidebars](#sidebars)

---

## Root Layout

### Complete Root Layout with Providers

```tsx
// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yoursite.com"),
  title: {
    default: "Site Name - Tagline",
    template: "%s | Site Name",
  },
  description: "Your comprehensive site description for SEO.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Site Name",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## Headers

### Transparent Header (For Hero Sections)

```tsx
// components/layout/header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary/25">
              <span className="text-white font-bold">S</span>
            </div>
            <span className={cn("transition-colors", isScrolled ? "text-foreground" : "text-white")}>
              SiteName
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isScrolled ? "text-muted-foreground" : "text-white/80"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              Sign In
            </Link>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <MobileNav navItems={navItems} isScrolled={isScrolled} />
        </nav>
      </div>
    </header>
  );
}
```

### Solid Header (Standard)

```tsx
// components/layout/solid-header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SolidHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-xl font-bold">SiteName</Link>
          <ul className="hidden lg:flex items-center gap-8">
            <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
            <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
          </ul>
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium">Sign In</Link>
            <Button>Start Free</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
```

---

## Mobile Navigation

### Slide-Out Mobile Menu

```tsx
// components/layout/mobile-nav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  navItems: { label: string; href: string }[];
  isScrolled?: boolean;
}

export function MobileNav({ navItems, isScrolled = true }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-accent"
        aria-label="Open menu"
      >
        <svg className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        className={cn("fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Panel */}
      <div className={cn("fixed top-0 right-0 bottom-0 w-80 bg-background z-50 lg:hidden transition-transform duration-300", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="font-display text-xl font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-accent">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium rounded-xl hover:bg-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-border space-y-3">
            <Button className="w-full" size="lg">Get Started</Button>
            <Button variant="outline" className="w-full" size="lg">Sign In</Button>
          </div>
        </div>
      </div>
    </>
  );
}
```

---

## Footers

### Comprehensive Footer

```tsx
// components/layout/footer.tsx
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Stay up to date</h2>
              <p className="text-slate-400">Get the latest news delivered to your inbox.</p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="h-14 px-8 rounded-full bg-primary text-white font-semibold hover:bg-primary/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-display text-xl font-bold">SiteName</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-xs">
              Building the future of web development with modern tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} SiteName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Page Layouts

### Marketing Page Layout

```tsx
// src/app/(marketing)/layout.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

---

## Dashboard Layouts

### Dashboard with Sidebar

```tsx
// src/app/(dashboard)/layout.tsx
import { DashboardSidebar } from "@/components/layout/sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardSidebar />
      <div className="lg:pl-72">
        <DashboardHeader />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
```

---

## Sidebars

### Dashboard Sidebar

```tsx
// components/layout/sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "🏠" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "📊" },
  { label: "Projects", href: "/dashboard/projects", icon: "📁" },
  { label: "Team", href: "/dashboard/team", icon: "👥" },
  { label: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn("fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col bg-card border-r border-border", collapsed ? "w-20" : "w-72")}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-border">
        {!collapsed && <span className="font-display text-xl font-bold">SiteName</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-lg hover:bg-accent">
          <svg className={cn("w-5 h-5", collapsed && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                    isActive ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "text-muted-foreground hover:bg-accent"
                  )}
                >
                  <span>{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-medium">
            JD
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">John Doe</div>
              <div className="text-sm text-muted-foreground truncate">john@example.com</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
```

---

## Common Patterns

### Container Widths

```tsx
// Standard content container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Narrow content (blog, articles)
<div className="max-w-3xl mx-auto px-4 sm:px-6">

// Wide content (dashboards)
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Section Spacing

```tsx
// Standard section
<section className="py-24 md:py-32">

// Compact section
<section className="py-16 md:py-20">

// Hero section
<section className="py-32 md:py-40">
```

### Grid Layouts

```tsx
// 3-column feature grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 4-column grid
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

// 2-column split
<div className="grid lg:grid-cols-2 gap-16 items-center">

// Bento grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">Large card</div>
  <div>Small card</div>
  <div>Small card</div>
  <div className="lg:col-span-2">Large card</div>
</div>
```
