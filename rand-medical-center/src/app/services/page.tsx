import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard } from "@/components/ui/card";
import { SITE_CONFIG, SERVICE_CATEGORIES } from "@/lib/constants";
import {
  Activity,
  Award,
  Bone,
  Calendar,
  ChevronRight,
  Clock,
  Dumbbell,
  Hospital,
  Phone,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Services | Rand Medical Center",
  description:
    "Comprehensive medical services including pain management, orthopedics, physical therapy, immediate care, internal medicine, and outpatient surgery in Arlington Heights, IL.",
  openGraph: {
    title: "Medical Services | Rand Medical Center Arlington Heights",
    description:
      "Pain management, orthopedics, physical therapy, and more at our Joint Commission-accredited facility.",
  },
};

// Icon mapping for services
const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="h-8 w-8" />,
  Activity: <Activity className="h-8 w-8" />,
  Stethoscope: <Stethoscope className="h-8 w-8" />,
  Bone: <Bone className="h-8 w-8" />,
  Dumbbell: <Dumbbell className="h-8 w-8" />,
  Hospital: <Hospital className="h-8 w-8" />,
};

// Detailed service information
const DETAILED_SERVICES = [
  {
    id: "immediate-care",
    name: "Immediate Care",
    description:
      "Walk-in and same-day appointments for urgent medical needs. From minor injuries to illness evaluation, get the care you need without the ER wait.",
    icon: "Clock",
    href: "/immediate-care",
    features: [
      "Same-day appointments",
      "Walk-ins welcome",
      "Minor injuries & illness",
      "On-site X-ray & labs",
    ],
    highlight: true,
  },
  {
    id: "pain-management",
    name: "Pain Management",
    description:
      "Advanced interventional treatments for chronic and acute pain. Our board-certified specialists use minimally invasive techniques to help you find lasting relief.",
    icon: "Activity",
    href: "/services/pain-management",
    features: [
      "Epidural injections",
      "Radiofrequency ablation",
      "Nerve blocks",
      "Joint injections",
    ],
    highlight: false,
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Expert surgical and non-surgical care for bones, joints, and musculoskeletal conditions. From sports injuries to joint replacement, we help restore your mobility.",
    icon: "Bone",
    href: "/services/orthopedics",
    features: [
      "Joint replacement",
      "Sports medicine",
      "Fracture care",
      "Arthroscopic surgery",
    ],
    highlight: false,
  },
  {
    id: "physical-therapy",
    name: "Physical Therapy",
    description:
      "Personalized rehabilitation programs to help you recover from injury, surgery, or chronic conditions. Our therapists work with you to restore strength and function.",
    icon: "Dumbbell",
    href: "/services/physical-therapy",
    features: [
      "Post-surgical rehab",
      "Sports rehabilitation",
      "Spine therapy",
      "Manual therapy",
    ],
    highlight: false,
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    description:
      "Comprehensive primary care for adults. From annual physicals to chronic disease management, we focus on preventive care and overall wellness.",
    icon: "Stethoscope",
    href: "/services/internal-medicine",
    features: [
      "Annual physicals",
      "Preventive care",
      "Chronic disease management",
      "Vaccinations",
    ],
    highlight: false,
  },
  {
    id: "surgery-center",
    name: "Surgery Center",
    description:
      "Joint Commission-accredited outpatient surgical facility. Experience advanced procedures in a comfortable, efficient setting with faster recovery times.",
    icon: "Hospital",
    href: "/surgery-center",
    features: [
      "Outpatient procedures",
      "Joint Commission accredited",
      "Pain management procedures",
      "Orthopedic surgery",
    ],
    highlight: false,
  },
];

// Injury & Claims section
const INJURY_SERVICES = [
  {
    title: "Motor Vehicle Accidents",
    description:
      "Comprehensive documentation and treatment for auto accident injuries. We work with your attorney and insurance to streamline your care.",
    href: "/services/injuries/motor-vehicle-accidents",
  },
  {
    title: "Workers' Compensation",
    description:
      "Expert care for workplace injuries with employer coordination and timely return-to-work planning.",
    href: "/services/injuries/workers-compensation",
  },
  {
    title: "Personal Injury",
    description:
      "Medical documentation and treatment for slip-and-fall, premises liability, and other personal injury cases.",
    href: "/services/injuries/personal-injury",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Award className="h-4 w-4 mr-1" />
              Our Services
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Comprehensive{" "}
              <span className="gradient-text-medical">Medical Care</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              From urgent care to specialized treatments, Rand Medical Center
              provides a full spectrum of healthcare services under one roof.
              Our board-certified specialists work together to deliver
              coordinated, patient-centered care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
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

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Our Medical Specialties
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each specialty works together to provide integrated care for your
              complete health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_SERVICES.map((service) => (
              <InteractiveCard
                key={service.id}
                href={service.href}
                className={service.highlight ? "ring-2 ring-amber-400" : ""}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-amber-500 text-white">
                      Walk-ins Welcome
                    </Badge>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-teal-100 rounded-2xl text-teal-600">
                    {iconMap[service.icon] || <Activity className="h-8 w-8" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="h-4 w-4 text-teal-500" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-teal-600 font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Injury & Claims Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Injury Treatment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Injury & Claims Services
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Specialized care for accident and injury cases with comprehensive
              documentation for insurance and legal proceedings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {INJURY_SERVICES.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-teal-400 font-medium group-hover:text-teal-300">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics Section */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                On-Site Diagnostics
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Complete Diagnostic Services
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Get answers quickly with our on-site diagnostic capabilities.
                From imaging to lab work, we provide the tests you need to guide
                your treatment—often during the same visit.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/services/diagnostics/x-ray"
                  className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-500 transition-colors" />
                  <span className="font-medium text-slate-700 group-hover:text-teal-600 transition-colors">
                    X-Ray Imaging
                  </span>
                </Link>
                <Link
                  href="/services/diagnostics/lab"
                  className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-300 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-500 transition-colors" />
                  <span className="font-medium text-slate-700 group-hover:text-teal-600 transition-colors">
                    Laboratory Services
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Benefits of On-Site Diagnostics
              </h3>
              <ul className="space-y-4">
                {[
                  "Results available same day for many tests",
                  "Coordinated with your treatment plan",
                  "No need for separate appointments",
                  "Convenient one-stop care",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-teal-100 rounded-full text-teal-600 mt-0.5">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team can help determine the best course of care for your
              condition. Schedule a consultation and let our specialists create
              a personalized treatment plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </>
  );
}
