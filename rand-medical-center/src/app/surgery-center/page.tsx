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
    title: "Lower Costs",
    description:
      "Outpatient surgery centers typically cost 40-60% less than hospital operating rooms for the same procedures.",
  },
  {
    icon: Clock,
    title: "Same-Day Discharge",
    description:
      "Go home the same day to recover in the comfort of your own environment.",
  },
  {
    icon: Shield,
    title: "Joint Commission Accredited",
    description:
      "Our facility meets the highest standards for safety and quality of care.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description:
      "Smaller setting means more individualized care from our dedicated surgical team.",
  },
];

export default function SurgeryCenterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 hero-gradient-overlay" />
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
              <Hospital className="h-4 w-4 mr-1" />
              Surgery Center
            </Badge>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 heading-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Advanced Surgery in a{" "}
              <span className="gradient-text-medical">Comfortable Setting</span>
            </h1>

            <p
              className="text-xl text-slate-600 mb-8 text-lead animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Our Joint Commission-accredited outpatient surgery center provides
              advanced surgical care in a comfortable, efficient environment.
              Experience quality care with shorter wait times, lower costs, and
              same-day recovery.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button size="lg" shine prominent className="group" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Consultation
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

            <div
              className="flex items-center gap-3 text-slate-600 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
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
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Advantages of Outpatient Surgery
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
              Procedures
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Procedures Performed
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our surgery center specializes in pain management and orthopedic
              procedures that can be safely performed in an outpatient setting.
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
                Accreditation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Joint Commission Accredited
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Our surgery center has earned accreditation from The Joint
                Commission, the nation&apos;s leading healthcare quality organization.
                This recognition demonstrates our commitment to meeting rigorous
                performance standards and continuous improvement.
              </p>
              <p className="text-slate-400">
                Joint Commission accreditation is voluntary and requires
                facilities to meet comprehensive standards for patient safety,
                quality of care, infection control, medication management, and
                more.
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
              Your Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What to Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Pre-Op Consultation",
                description:
                  "Meet with your surgeon to discuss the procedure and prepare for surgery.",
              },
              {
                step: "2",
                title: "Day of Surgery",
                description:
                  "Arrive at our center, complete check-in, and receive pre-op care.",
              },
              {
                step: "3",
                title: "Procedure",
                description:
                  "Your procedure is performed by our experienced surgical team.",
              },
              {
                step: "4",
                title: "Recovery & Discharge",
                description:
                  "Recover in our comfortable setting before going home same day.",
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
              Learn More About Your Procedure
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Have questions about whether your procedure can be performed at our
              outpatient surgery center? Schedule a consultation with one of our
              specialists.
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
