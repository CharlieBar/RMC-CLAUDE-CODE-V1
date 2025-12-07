# Landing Page Template

A complete, production-ready landing page template for Next.js + Tailwind CSS.

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # This template
│   └── globals.css
└── components/
    ├── sections/
    │   ├── hero.tsx
    │   ├── features.tsx
    │   ├── testimonials.tsx
    │   ├── pricing.tsx
    │   ├── faq.tsx
    │   └── cta.tsx
    └── layout/
        ├── header.tsx
        └── footer.tsx
```

## Complete Landing Page (page.tsx)

```tsx
// src/app/page.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { FeaturesSection } from "@/components/sections/features";
import { BentoSection } from "@/components/sections/bento";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoCloud />
        <FeaturesSection />
        <BentoSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
```

---

## Hero Section

```tsx
// components/sections/hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-gradient-radial from-primary-500/30 via-primary-500/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-gradient-radial from-violet-500/20 via-violet-500/5 to-transparent rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.03]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-slate-300">Announcing our $10M Series A</span>
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up [animation-delay:100ms]">
            Ship faster with{" "}
            <span className="bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              modern tools
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
            The all-in-one platform for modern teams. Build, deploy, and scale your applications with confidence. No DevOps experience required.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up [animation-delay:300ms]">
            <Button size="lg" className="group">
              Start for Free
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-fade-in-up [animation-delay:400ms]">
            <div>
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-sm text-slate-400">Active developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50M+</div>
              <div className="text-sm text-slate-400">Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-sm text-slate-400">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Logo Cloud Section

```tsx
// components/sections/logo-cloud.tsx
export function LogoCloud() {
  const logos = [
    { name: "Company 1" },
    { name: "Company 2" },
    { name: "Company 3" },
    { name: "Company 4" },
    { name: "Company 5" },
    { name: "Company 6" },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by 10,000+ companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Features Section (3-Column Grid)

```tsx
// components/sections/features.tsx
const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Deploy in seconds with our global edge network. Your apps load instantly from 300+ locations worldwide.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with automatic DDoS protection, WAF, and end-to-end encryption.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Monitor performance, errors, and user behavior with our built-in observability platform.",
  },
  {
    icon: "🔄",
    title: "Auto Scaling",
    description: "Scale from zero to millions of users automatically. Pay only for what you use.",
  },
  {
    icon: "🔗",
    title: "Seamless Integrations",
    description: "Connect with GitHub, GitLab, Slack, and 100+ other tools you already use.",
  },
  {
    icon: "🛠️",
    title: "Developer Experience",
    description: "CLI tools, SDKs, and APIs designed for developer productivity and happiness.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to ship faster
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A complete platform with all the tools and infrastructure you need to build, deploy, and scale modern applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-3xl p-8 border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/20"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-t-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 text-3xl transition-all duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Pricing Section

```tsx
// components/sections/pricing.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and experiments",
    features: [
      "Up to 3 projects",
      "1GB storage",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and small teams",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "SLA guarantee",
      "SSO & SAML",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start for free, upgrade when you're ready. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-3xl p-8 transition-all duration-500",
                plan.popular
                  ? "bg-gradient-to-b from-primary-500 to-primary-600 text-white scale-105 shadow-2xl shadow-primary/30"
                  : "bg-card border border-border hover:border-primary/20 hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-primary-600 text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={cn("text-xl font-bold mb-2", plan.popular ? "text-white" : "text-foreground")}>
                  {plan.name}
                </h3>
                <p className={cn("text-sm", plan.popular ? "text-white/80" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <span className={cn("text-5xl font-bold", plan.popular ? "text-white" : "text-foreground")}>
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className={cn("text-sm", plan.popular ? "text-white/80" : "text-muted-foreground")}>
                    /month
                  </span>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={cn("w-5 h-5 flex-shrink-0", plan.popular ? "text-white" : "text-primary")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={cn("text-sm", plan.popular ? "text-white/90" : "text-muted-foreground")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? "secondary" : "primary"}
                className={cn("w-full", plan.popular && "bg-white text-primary-600 hover:bg-white/90")}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## CTA Section

```tsx
// components/sections/cta.tsx
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary-500/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-violet-500/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to ship faster?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join 10,000+ developers who are building the future with our platform. Start for free today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="px-12">
            Get Started Free
          </Button>
          <button className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold hover:text-primary transition-colors">
            Talk to Sales
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## Usage

1. Copy these sections into your `components/sections/` directory
2. Import and compose them in your `page.tsx`
3. Customize colors, content, and animations to match your brand
4. Ensure you have the required CSS utilities in `globals.css`
