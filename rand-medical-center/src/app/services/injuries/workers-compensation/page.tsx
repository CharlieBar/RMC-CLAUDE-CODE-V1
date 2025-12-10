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
  HardHat,
  Clock,
  FileText,
  CheckCircle,
  Briefcase,
  Shield,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workers Compensation Injury Treatment | Rand Medical Center",
  description:
    "Expert workers comp injury care in Arlington Heights. Same-day appointments, complete documentation, and return-to-work coordination. All workers compensation insurance accepted.",
  openGraph: {
    title: "Workers Compensation Treatment | Rand Medical Center Arlington Heights",
    description:
      "Specialized care for workplace injuries. Same-day appointments, workers comp accepted, comprehensive treatment.",
  },
};

const COMMON_WORK_INJURIES = [
  { name: "Back & Spine Injuries", description: "Lifting injuries, disc problems, strains" },
  { name: "Repetitive Strain Injuries", description: "Carpal tunnel, tendonitis, bursitis" },
  { name: "Shoulder Injuries", description: "Rotator cuff tears, impingement" },
  { name: "Knee Injuries", description: "Meniscus tears, ligament damage" },
  { name: "Slip & Fall Injuries", description: "Fractures, sprains, head injuries" },
  { name: "Neck Injuries", description: "Whiplash, disc herniations, strains" },
];

const OCCUPATIONS_SERVED = [
  "Construction Workers",
  "Warehouse & Manufacturing",
  "Healthcare Workers",
  "Office & Desk Jobs",
  "Retail Workers",
  "Transportation & Delivery",
  "Food Service Workers",
  "Landscaping & Maintenance",
];

export default function WorkersCompensationPage() {
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
            <span className="text-slate-700">Workers&apos; Compensation</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <HardHat className="h-4 w-4 mr-1" />
              Workers&apos; Compensation
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Workplace{" "}
              <span className="gradient-text-medical">Injury Care</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Injured on the job? We specialize in treating work-related
              injuries and understand how important it is to get you back to
              work safely. We handle all workers&apos; comp paperwork and communicate
              directly with your employer and insurance.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-teal-800">
                    Your Rights as an Injured Worker
                  </p>
                  <p className="text-teal-700 text-sm">
                    You have the right to medical treatment for work injuries.
                    We&apos;ll ensure you receive the care you deserve and proper
                    documentation for your claim.
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

      {/* Key Benefits */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Same-Day Appointments", description: "Get treatment quickly after your injury" },
              { icon: FileText, title: "Complete Documentation", description: "Thorough records for your claim" },
              { icon: ClipboardList, title: "Paperwork Handled", description: "We manage all workers' comp forms" },
              { icon: Briefcase, title: "Return-to-Work Planning", description: "Coordinated recovery timeline" },
            ].map((item, index) => (
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

      {/* Common Work Injuries */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions We Treat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Common Workplace Injuries
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We treat the full range of work-related injuries, from sudden
              accidents to conditions that develop over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {COMMON_WORK_INJURIES.map((injury, index) => (
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

      {/* What to Do After Injury */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Steps to Take
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                After a Workplace Injury
              </h2>
              <p className="text-lg text-slate-600">
                Taking the right steps protects both your health and your claim.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Report the Injury",
                  description:
                    "Notify your supervisor immediately, even if the injury seems minor. Documentation from the start is crucial.",
                },
                {
                  step: "2",
                  title: "Seek Medical Treatment",
                  description:
                    "Get evaluated by a doctor as soon as possible. Prompt treatment prevents minor issues from becoming major problems.",
                },
                {
                  step: "3",
                  title: "Complete Required Forms",
                  description:
                    "Fill out your employer's accident report and any required workers' comp forms. We can help with medical documentation.",
                },
                {
                  step: "4",
                  title: "Follow Your Treatment Plan",
                  description:
                    "Attend all appointments and follow medical advice. This is essential for your recovery and your claim.",
                },
                {
                  step: "5",
                  title: "Communicate with Your Employer",
                  description:
                    "Keep your employer informed about your recovery progress and any work restrictions from your doctor.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200"
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

      {/* Occupations We Serve */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Industries Served
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                We Treat Workers from All Industries
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From construction sites to offices, we understand the unique
                demands and injury risks of different occupations. Our team has
                experience treating workers from:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {OCCUPATIONS_SERVED.map((occupation, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700">{occupation}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-slate-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Our Workers&apos; Comp Services Include
                </h3>
                <ul className="space-y-4">
                  {[
                    "Same-day injury evaluations",
                    "Complete medical documentation",
                    "Direct communication with employers",
                    "Work status reports and restrictions",
                    "Functional capacity evaluations",
                    "Return-to-work coordination",
                    "Physical therapy & rehabilitation",
                    "Pain management treatments",
                    "Specialist referrals when needed",
                    "Independent medical examinations",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Comprehensive Care
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Treatment Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide complete care under one roof, minimizing time away from
              work while maximizing your recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Pain Management",
                items: ["Injections", "Nerve blocks", "Medication management"],
              },
              {
                title: "Physical Therapy",
                items: ["Rehabilitation", "Work conditioning", "Injury prevention"],
              },
              {
                title: "Orthopedic Care",
                items: ["Joint injuries", "Fracture care", "Surgical consultations"],
              },
              {
                title: "Diagnostics",
                items: ["On-site X-rays", "MRI referrals", "Lab work"],
              },
            ].map((category, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Injured at Work? We&apos;re Here to Help.
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our experienced team will get you the treatment you need and handle
              the paperwork so you can focus on getting better. Same-day
              appointments available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Appointment
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
