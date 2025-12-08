import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Hospital,
  Phone,
  Shield,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Surgery Center | Outpatient Surgery | Rand Medical Center",
  description:
    "Joint Commission-accredited outpatient surgery center in Arlington Heights. Pain management procedures and orthopedic surgery with same-day discharge and lower costs than hospital settings.",
  openGraph: {
    title: "Outpatient Surgery Center | Rand Medical Center",
    description:
      "Advanced surgical care in a comfortable, accredited outpatient setting.",
  },
};

const PROCEDURES = [
  {
    category: "Pain Management Procedures",
    items: [
      "Epidural steroid injections",
      "Radiofrequency ablation",
      "Spinal cord stimulator trials",
      "Facet joint injections",
      "Nerve blocks",
      "Trigger point injections",
    ],
    href: "/surgery-center/pain-procedures",
  },
  {
    category: "Orthopedic Procedures",
    items: [
      "Arthroscopic knee surgery",
      "Shoulder arthroscopy",
      "Carpal tunnel release",
      "Trigger finger release",
      "Minor fracture fixation",
      "Joint injections under fluoroscopy",
    ],
    href: "/surgery-center/orthopedic-procedures",
  },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: "It Costs Less",
    description:
      "Hospital ORs charge a premium. We do the same procedures for 40-60% less.",
  },
  {
    icon: Clock,
    title: "Home the Same Day",
    description:
      "No overnight stays. Get your procedure done and recover in your own bed.",
  },
  {
    icon: Shield,
    title: "Fully Accredited",
    description:
      "Joint Commission certified—that's the gold standard for surgical facilities.",
  },
  {
    icon: Users,
    title: "You're Not Just a Number",
    description:
      "Smaller facility means the staff actually knows who you are and what you need.",
  },
];

export default function SurgeryCenterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-rose-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Hospital className="h-4 w-4 mr-1" />
              Surgery Center
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Surgery Without the{" "}
              <span className="text-rose-600">Hospital Hassle</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Many procedures don&apos;t require a hospital stay. You come in, get it done,
              and go home the same day&mdash;all in a facility that meets the same safety
              standards as any hospital, but without the chaos and the big bill.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <Award className="h-6 w-6 text-amber-500" />
              <span className="font-medium">Joint Commission Accredited Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Why Here
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Why Skip the Hospital?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="p-3 bg-rose-100 rounded-xl text-rose-600 w-fit mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What We Do
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Procedures We Perform Here
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pain management injections, orthopedic procedures, and other surgeries
              that don&apos;t require an overnight stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROCEDURES.map((category, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-rose-600 font-medium hover:text-rose-700"
                  >
                    View All {category.category}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                <Award className="h-4 w-4 mr-1" />
                Safety Standards
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Same Standards as Any Hospital
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                &ldquo;Outpatient&rdquo; doesn&apos;t mean cutting corners. We&apos;re accredited by The
                Joint Commission&mdash;the same organization that inspects major hospitals.
                They show up unannounced and check everything.
              </p>
              <p className="text-slate-400">
                You get the same safety protocols, infection prevention, and
                emergency preparedness you&apos;d expect from any surgical facility.
                Just without the hospital overhead.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Regular unannounced inspections",
                "Comprehensive quality standards",
                "Patient safety protocols",
                "Infection prevention measures",
                "Emergency preparedness",
                "Continuous quality improvement",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What Your Day Looks Like
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "We Talk First",
                description:
                  "Meet with your surgeon beforehand so you know exactly what to expect.",
              },
              {
                step: "2",
                title: "Surgery Day",
                description:
                  "Show up, check in, and we&apos;ll get you prepped and comfortable.",
              },
              {
                step: "3",
                title: "The Procedure",
                description:
                  "Our surgical team handles everything while you&apos;re under.",
              },
              {
                step: "4",
                title: "Wake Up, Go Home",
                description:
                  "Rest a bit in recovery, then head home to your own bed.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-rose-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Got Questions? Let&apos;s Talk.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Not sure if your procedure can be done here? Wondering about costs
              or what to expect? Talk to one of our specialists and we&apos;ll give you
              straight answers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Consultation
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
    </>
  );
}
