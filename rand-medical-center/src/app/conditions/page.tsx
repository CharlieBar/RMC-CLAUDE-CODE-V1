import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { CONDITIONS } from "@/lib/conditions";
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

// Group conditions by category
const CONDITION_CATEGORIES = [
  {
    name: "Spine & Back",
    conditions: CONDITIONS.filter((c) =>
      ["back-pain", "sciatica", "herniated-disc", "neck-pain"].includes(c.slug)
    ),
  },
  {
    name: "Joints",
    conditions: CONDITIONS.filter((c) =>
      ["knee-pain", "shoulder-pain", "arthritis"].includes(c.slug)
    ),
  },
  {
    name: "Other Conditions",
    conditions: CONDITIONS.filter((c) =>
      ["sports-injuries"].includes(c.slug)
    ),
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Stethoscope className="h-4 w-4 mr-1" />
              Conditions We Treat
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Expert Care for{" "}
              <span className="gradient-text-medical">Pain Conditions</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our board-certified specialists diagnose and treat a wide range of
              musculoskeletal and pain conditions. Find your condition below to
              learn about treatment options.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Find Your Condition
            </h2>
          </div>

          {CONDITION_CATEGORIES.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.conditions.map((condition) => (
                  <Link
                    key={condition.slug}
                    href={`/conditions/${condition.slug}`}
                    className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {condition.name}
                    </h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {condition.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {condition.treatments.length} treatments available
                      </span>
                      <span className="inline-flex items-center text-teal-600 text-sm font-medium">
                        Learn More
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Not Sure What&apos;s Causing Your Pain?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our specialists can help diagnose your condition and create a
              personalized treatment plan. Schedule a consultation to get
              started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
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
