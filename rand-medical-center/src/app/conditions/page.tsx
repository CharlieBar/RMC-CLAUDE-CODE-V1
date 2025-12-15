import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConditionsGrid } from "@/components/conditions-grid";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  Phone,
  Search,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions We Treat | Rand Medical Center",
  description:
    "Expert treatment for back pain, sciatica, neck pain, knee pain, arthritis, sports injuries, and more. Board-certified specialists in Arlington Heights, IL.",
  openGraph: {
    title: "Medical Conditions We Treat | Rand Medical Center",
    description:
      "Find relief from pain conditions with our comprehensive treatment options.",
  },
};

export default function ConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 hero-gradient overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 hero-gradient-overlay" />

        {/* Floating decorative elements */}
        <div className="floating-element floating-element-1 top-20 right-[10%]" />
        <div className="floating-element floating-element-2 bottom-32 right-[25%]" />
        <div className="floating-element floating-element-3 top-1/3 left-[5%]" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge
              variant="primary"
              size="lg"
              className="mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <Stethoscope className="h-4 w-4 mr-1" />
              Conditions We Treat
            </Badge>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 heading-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Expert Care for{" "}
              <span className="gradient-text-medical">Pain Conditions</span>
            </h1>

            <p
              className="text-xl text-slate-600 mb-8 text-lead animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Our board-certified specialists diagnose and treat a wide range of
              musculoskeletal and pain conditions. Find your condition below to
              learn about treatment options.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button size="lg" shine prominent className="group" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Conditions Grid */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Search className="h-4 w-4 mr-1" />
              Browse Conditions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4 heading-tight">
              Find Your Condition
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Search through our comprehensive list of conditions or browse by category.
            </p>
          </div>

          <ConditionsGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 heading-tight">
              Not Sure What&apos;s Causing Your Pain?
            </h2>
            <p className="text-lg text-slate-400 mb-8 text-body">
              Our specialists can help diagnose your condition and create a
              personalized treatment plan. Schedule a consultation to get
              started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                shine
                prominent
                className="bg-teal-500 hover:bg-teal-600 group"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
