import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  Phone,
  Car,
  Clock,
  FileText,
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Auto Accident Injury Treatment | Rand Medical Center",
  description:
    "Same-day treatment for car accident injuries in Arlington Heights. We handle insurance paperwork, document injuries, and provide comprehensive care. All auto insurance accepted.",
  openGraph: {
    title: "Motor Vehicle Accident Treatment | Rand Medical Center Arlington Heights",
    description:
      "Expert care for auto accident injuries. Same-day appointments, insurance paperwork handled, comprehensive treatment.",
  },
};

const COMMON_INJURIES = [
  { name: "Whiplash", description: "Neck strain from sudden head movement" },
  { name: "Back Injuries", description: "Disc herniations, muscle strains, spinal injuries" },
  { name: "Soft Tissue Injuries", description: "Sprains, strains, and contusions" },
  { name: "Head Injuries", description: "Concussions and traumatic brain injuries" },
  { name: "Shoulder Injuries", description: "Rotator cuff tears, dislocations" },
  { name: "Knee Injuries", description: "Ligament tears, meniscus damage" },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Same-Day Appointments", description: "Get seen quickly when you need care most" },
  { icon: FileText, title: "Complete Documentation", description: "Thorough records for your insurance claim" },
  { icon: Stethoscope, title: "Comprehensive Care", description: "Multiple specialists under one roof" },
  { icon: Activity, title: "Full Recovery Focus", description: "Treatment until you're back to normal" },
];

export default function MotorVehicleAccidentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/services" className="hover:text-teal-600">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Auto Accident Injuries</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Car className="h-4 w-4 mr-1" />
              Motor Vehicle Accidents
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Car Accident{" "}
              <span className="gradient-text-medical">Injury Care</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Been in a car accident? Getting proper medical care quickly is
              crucial—both for your health and your insurance claim. We provide
              same-day appointments, comprehensive documentation, and coordinate
              directly with your insurance.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800">
                    Important: Don&apos;t delay treatment
                  </p>
                  <p className="text-amber-700 text-sm">
                    Many accident injuries don&apos;t show symptoms immediately. Early
                    documentation is essential for your claim and recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Same-Day Appointment
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

      {/* Why Choose Us */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After an Accident */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                What To Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                After a Car Accident
              </h2>
              <p className="text-lg text-slate-600">
                Follow these steps to protect your health and your claim.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Ensure Safety",
                  description:
                    "Move to a safe location if possible. Call 911 if anyone is injured or there's significant damage.",
                },
                {
                  step: "2",
                  title: "Document Everything",
                  description:
                    "Take photos of vehicles, injuries, and the scene. Exchange information with other drivers. Get witness contacts.",
                },
                {
                  step: "3",
                  title: "Seek Medical Attention",
                  description:
                    "Even if you feel fine, get evaluated within 24-48 hours. Many injuries have delayed symptoms. This also documents your condition for insurance.",
                },
                {
                  step: "4",
                  title: "Report to Insurance",
                  description:
                    "Notify your insurance company about the accident. Don't give recorded statements without understanding your rights.",
                },
                {
                  step: "5",
                  title: "Follow Up on Treatment",
                  description:
                    "Attend all medical appointments and follow your treatment plan. Gaps in treatment can hurt your claim.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-slate-50 rounded-2xl"
                >
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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

      {/* Common Injuries */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions We Treat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Common Auto Accident Injuries
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our team has extensive experience treating all types of car
              accident injuries, from minor strains to complex trauma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {COMMON_INJURIES.map((injury, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {injury.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {injury.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What to Expect at Your Visit
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Comprehensive Evaluation
                  </h3>
                  <p className="text-slate-600">
                    We&apos;ll review your accident details, examine you thoroughly, and
                    order any necessary imaging (X-rays, MRI) to understand the
                    full extent of your injuries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Detailed Documentation
                  </h3>
                  <p className="text-slate-600">
                    We create thorough medical records documenting your injuries,
                    their cause, and the treatment needed. This is essential for
                    your insurance claim.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Personalized Treatment Plan
                  </h3>
                  <p className="text-slate-600">
                    Based on your injuries, we develop a customized treatment plan
                    that may include pain management, physical therapy, and
                    specialist referrals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Ongoing Care & Follow-Up
                  </h3>
                  <p className="text-slate-600">
                    We monitor your progress, adjust treatment as needed, and
                    provide continued documentation until you reach maximum
                    medical improvement.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-teal-50 border-teal-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Insurance & Billing
                </h3>
                <p className="text-slate-600 mb-6">
                  We work with all auto insurance policies and can help you
                  understand your coverage options:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Personal Injury Protection (PIP)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Medical Payments Coverage (MedPay)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Third-Party Liability Claims
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Health Insurance Coordination
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Letter of Protection Arrangements
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Been in an Accident? We Can Help Today.
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Don&apos;t wait to get the care you need. Our team is ready to see you
              today, document your injuries, and help you start the path to
              recovery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Same-Day Appointment
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
