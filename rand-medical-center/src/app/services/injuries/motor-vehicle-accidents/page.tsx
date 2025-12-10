import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  AlertCircle,
  Calendar,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Phone,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Car Accident Injury Treatment | Rand Medical Center",
  description:
    "Injured in a car accident? Get same-day treatment in Arlington Heights. We handle PIP/MedPay billing and provide documentation for insurance claims.",
  openGraph: {
    title: "Car Accident Injury Treatment | Rand Medical Center",
    description:
      "Same-day appointments for auto accident injuries. We coordinate with your insurance and provide proper documentation.",
  },
};

const COMMON_INJURIES = [
  "Whiplash and neck pain",
  "Back pain and spinal injuries",
  "Herniated or bulging discs",
  "Shoulder injuries",
  "Knee and leg injuries",
  "Headaches and concussion symptoms",
  "Soft tissue injuries",
  "Muscle strains and sprains",
];

const TREATMENT_OPTIONS = [
  {
    name: "Pain Management",
    description: "Injections, nerve blocks, and other treatments to reduce pain and inflammation",
    href: "/services/pain-management",
  },
  {
    name: "Physical Therapy",
    description: "Rehabilitation to restore strength, mobility, and function",
    href: "/services/physical-therapy",
  },
  {
    name: "Orthopedic Care",
    description: "Evaluation and treatment for bone, joint, and muscle injuries",
    href: "/services/orthopedics",
  },
  {
    name: "On-Site X-Ray",
    description: "Immediate imaging to diagnose fractures and other injuries",
    href: "/services",
  },
];

export default function MotorVehicleAccidentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6 bg-amber-500">
              <Car className="h-4 w-4 mr-1" />
              Auto Accident Injuries
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Been in a{" "}
              <span className="text-amber-600">Car Accident?</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Don&apos;t wait to get checked out. Injuries from car accidents often
              get worse if you ignore them. We can see you today, handle the
              insurance paperwork, and make sure you have proper documentation
              for your claim.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call for Same-Day Appointment
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Notice */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container container-default mx-auto">
          <div className="flex items-center gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <p className="text-amber-900">
              <strong>Important:</strong> Even if you feel okay, get checked out
              within 72 hours of your accident. Some injuries don&apos;t show
              symptoms right away, and waiting can hurt both your health and
              your insurance claim.
            </p>
          </div>
        </div>
      </section>

      {/* Why Act Fast */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why It Matters
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Why You Shouldn&apos;t Wait
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                After an accident, adrenaline masks pain. You might feel fine for
                days before symptoms appear. But here&apos;s the thing: insurance
                companies know this. If you wait too long to see a doctor, they
                may argue your injuries weren&apos;t from the accident.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Getting checked out right away does two things:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">
                    Catches injuries before they get worse (some spinal injuries
                    can become permanent if untreated)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">
                    Creates medical records that link your injuries directly to
                    the accident—essential for your insurance claim
                  </span>
                </li>
              </ul>
            </div>

            <Card className="p-8 bg-slate-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Common Injuries We Treat
                </h3>
                <ul className="space-y-3">
                  {COMMON_INJURIES.map((injury, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight className="h-4 w-4 text-amber-500" />
                      <span className="text-slate-600">{injury}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Billing */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                <Shield className="h-4 w-4 mr-1" />
                Insurance & Billing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                We Handle the Paperwork
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Dealing with insurance after an accident is confusing. PIP,
                MedPay, liability coverage, letters of protection—we deal with
                this every day and can explain your options clearly.
              </p>
              <div className="space-y-4">
                {[
                  "We bill your auto insurance (PIP/MedPay) directly",
                  "We work with personal injury attorneys on lien cases",
                  "We provide all documentation needed for your claim",
                  "No upfront payment required for most auto injury cases",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-white text-slate-900">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  What to Bring to Your First Visit
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Your auto insurance card",
                    "Driver's license or photo ID",
                    "Police report (if available)",
                    "Other driver's insurance info",
                    "Photos of damage/injuries (if you have them)",
                    "Attorney contact info (if you have one)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FileText className="h-4 w-4 text-amber-500 mt-1" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500">
                  Don&apos;t have everything? That&apos;s okay—come in anyway. We can
                  work with what you have.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Treatment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              How We Help You Recover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every accident is different. We&apos;ll evaluate your injuries and
              create a treatment plan that actually addresses what&apos;s wrong.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREATMENT_OPTIONS.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {option.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{option.description}</p>
                <span className="inline-flex items-center text-amber-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What to Expect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Your First Visit
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Call Us or Walk In",
                  description:
                    "We fit in accident patients the same day whenever possible. Call ahead or just come in.",
                },
                {
                  step: "2",
                  title: "Get Evaluated",
                  description:
                    "We'll do a thorough exam, take X-rays if needed, and figure out exactly what's injured.",
                },
                {
                  step: "3",
                  title: "Start Treatment",
                  description:
                    "Depending on your injuries, we may start treatment the same day or schedule follow-up care.",
                },
                {
                  step: "4",
                  title: "Documentation",
                  description:
                    "We document everything properly for your insurance claim—diagnoses, treatment, prognosis.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-200"
                >
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-amber-500 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              The Sooner You Come In, the Better
            </h2>
            <p className="text-lg text-amber-100 mb-8">
              Don&apos;t let a treatable injury become a permanent problem. And
              don&apos;t give the insurance company a reason to deny your claim.
              Call us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50"
                asChild
              >
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Related Resources</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/conditions/whiplash"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Whiplash Treatment
            </Link>
            <Link
              href="/conditions/back-pain"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Back Pain
            </Link>
            <Link
              href="/patients/insurance-pricing"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Insurance & Billing Info
            </Link>
            <Link
              href="/patients/forms"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Patient Forms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
