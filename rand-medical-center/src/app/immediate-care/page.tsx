import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Phone,
  Stethoscope,
  Thermometer,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Immediate Care | Walk-In Medical Care | Rand Medical Center",
  description:
    "Same-day and walk-in medical care in Arlington Heights. Urgent care for minor injuries, illness, and non-emergency conditions. On-site X-ray and labs available.",
  openGraph: {
    title: "Immediate Care | Rand Medical Center Arlington Heights",
    description:
      "Walk-in and same-day appointments for urgent medical needs. No ER wait times.",
  },
};

const WE_TREAT = [
  "Sprains & strains",
  "Minor fractures",
  "Back & neck pain",
  "Cuts requiring stitches",
  "Infections",
  "Cold, flu & respiratory illness",
  "Allergic reactions (non-severe)",
  "Headaches & migraines",
  "Skin rashes & irritations",
  "Urinary tract infections",
  "Eye & ear infections",
  "Minor burns",
];

const WHEN_TO_VISIT_ER = [
  "Chest pain or difficulty breathing",
  "Signs of stroke (facial drooping, arm weakness, speech difficulty)",
  "Severe allergic reactions (anaphylaxis)",
  "Uncontrolled bleeding",
  "Loss of consciousness",
  "Severe burns or head injuries",
];

export default function ImmediateCarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-amber-100 text-amber-700">
              <Clock className="h-4 w-4 mr-1" />
              Walk-Ins Welcome
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Immediate Care{" "}
              <span className="text-amber-600">When You Need It</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Skip the ER wait. Get same-day medical care for urgent but
              non-life-threatening conditions. Walk-ins welcome or book online
              for priority scheduling.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Same-Day Visit
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-amber-500" />
                <span>On-Site X-Ray & Labs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Thermometer className="h-4 w-4 mr-1" />
              Conditions We Treat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What We Can Help With
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our immediate care services address a wide range of urgent but
              non-emergency conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WE_TREAT.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Visit ER */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-red-50 border-red-200">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 rounded-xl text-red-600">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-red-900">
                    When to Visit the Emergency Room
                  </h2>
                </div>
                <p className="text-red-800 mb-6">
                  For life-threatening emergencies, please call 911 or go to your
                  nearest emergency room. This includes:
                </p>
                <ul className="space-y-3">
                  {WHEN_TO_VISIT_ER.map((condition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div>
              <Badge variant="secondary" className="mb-4">
                Right Care, Right Place
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Why Choose Immediate Care Over the ER?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Shorter Wait Times",
                    description:
                      "Skip the crowded ER waiting room and get seen faster.",
                  },
                  {
                    title: "Lower Costs",
                    description:
                      "Immediate care visits typically cost less than emergency room visits.",
                  },
                  {
                    title: "Specialized Follow-Up",
                    description:
                      "Direct access to specialists if your condition requires ongoing care.",
                  },
                  {
                    title: "On-Site Diagnostics",
                    description:
                      "X-ray and lab services available for quick diagnosis.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What to Expect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Your Visit Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Check In",
                description:
                  "Walk in or check in online to reserve your spot in line.",
              },
              {
                step: "2",
                title: "Evaluation",
                description:
                  "A provider will assess your condition and discuss symptoms.",
              },
              {
                step: "3",
                title: "Diagnostics",
                description:
                  "If needed, we'll perform X-rays or lab tests on-site.",
              },
              {
                step: "4",
                title: "Treatment",
                description:
                  "Receive treatment and a personalized care plan before you leave.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Injury Services CTA */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              <FileText className="h-4 w-4 mr-1" />
              Injury Documentation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Injured in an Accident?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We specialize in treating and documenting injuries from auto
              accidents, workplace incidents, and personal injury cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Auto Accidents",
                href: "/services/injuries/motor-vehicle-accidents",
              },
              {
                title: "Workers' Compensation",
                href: "/services/injuries/workers-compensation",
              },
              {
                title: "Personal Injury",
                href: "/services/injuries/personal-injury",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal-500/50 transition-all text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <span className="inline-flex items-center text-teal-400 font-medium group-hover:text-teal-300">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-amber-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Need Care Today?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Walk in during office hours or book online to reserve your spot.
              We&apos;ll get you seen as quickly as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Same-Day Visit
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>
            <p className="mt-6 text-slate-500">
              <Clock className="h-4 w-4 inline mr-1" />
              Office Hours: {SITE_CONFIG.hours.display}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
