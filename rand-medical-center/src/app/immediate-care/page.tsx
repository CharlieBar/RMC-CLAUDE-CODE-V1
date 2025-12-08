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
              Sick or Hurt?{" "}
              <span className="text-amber-600">Don&apos;t Wait.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              You don&apos;t need to sit in an ER for hours when you&apos;ve got a bad
              sprain, that infection that won&apos;t quit, or your kid spiked a fever.
              Walk in or book online&mdash;we&apos;ll get you seen fast.
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
              Walk In With Any of These
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What We Treat
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Urgent stuff that can&apos;t wait for your regular doctor, but isn&apos;t an
              emergency room situation.
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
                  Some things really do need the ER. If you&apos;re experiencing any of
                  these, call 911 or get to the emergency room immediately:
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
                Skip the ER
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Why Come Here Instead of the ER?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "You Won't Wait for Hours",
                    description:
                      "No crowded waiting rooms. We get you in, treated, and out.",
                  },
                  {
                    title: "It Costs a Lot Less",
                    description:
                      "ER visits can cost thousands. We can usually treat the same things for much less.",
                  },
                  {
                    title: "Specialists Are Right Here",
                    description:
                      "If you need follow-up care, our pain docs, orthopedics, and PT are all in the building.",
                  },
                  {
                    title: "X-Ray and Labs On-Site",
                    description:
                      "We can run tests right here so you leave with answers, not just a referral.",
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
              What Happens
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              In and Out, Simple as That
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Walk In or Book",
                description:
                  "Show up during office hours or book online to skip the line.",
              },
              {
                step: "2",
                title: "We Take a Look",
                description:
                  "A provider checks you out and asks what&apos;s going on.",
              },
              {
                step: "3",
                title: "Run Tests If Needed",
                description:
                  "X-rays, labs, whatever it takes to figure out what&apos;s wrong.",
              },
              {
                step: "4",
                title: "Get Treated, Go Home",
                description:
                  "We fix you up, give you a plan, and send you on your way.",
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
              Accident Injuries
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Been in an Accident?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Car crash, workplace injury, or slip and fall? We treat your injuries
              and document everything properly&mdash;which matters if you need to file a claim.
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
              Feeling Lousy? Let&apos;s Fix That.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Walk in anytime we&apos;re open, or book online if you want to skip the wait.
              Either way, we&apos;ll take care of you.
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
