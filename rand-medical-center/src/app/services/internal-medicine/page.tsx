import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG, PROVIDERS } from "@/lib/constants";
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Heart,
  Phone,
  Shield,
  Stethoscope,
  UserCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Internal Medicine | Primary Care | Rand Medical Center",
  description:
    "Adult primary care and internal medicine in Arlington Heights. Annual physicals, preventive care, chronic disease management, and vaccinations from board-certified physicians.",
  openGraph: {
    title: "Internal Medicine & Primary Care | Rand Medical Center",
    description:
      "Comprehensive primary care for adults with focus on prevention and wellness.",
  },
};

const SERVICES = [
  {
    name: "Annual Physicals",
    description:
      "Your yearly checkup isn't just a formality—it's how we catch issues before they become problems.",
    href: "/services/internal-medicine/physicals",
  },
  {
    name: "Preventive Care",
    description:
      "Screenings, health assessments, and honest conversations about what you can do to stay healthy.",
    href: "/services/internal-medicine/preventive-care",
  },
  {
    name: "Chronic Conditions",
    description:
      "Managing diabetes, high blood pressure, or cholesterol? We'll help you get it under control and keep it there.",
    href: "/services/internal-medicine/chronic-disease-management",
  },
  {
    name: "Vaccinations",
    description:
      "Flu shots, pneumonia, shingles—whatever you're due for. We'll keep you up to date.",
    href: "/services/internal-medicine/vaccinations",
  },
];

const CONDITIONS = [
  "High blood pressure",
  "Diabetes",
  "High cholesterol",
  "Thyroid disorders",
  "Respiratory conditions",
  "Heart disease prevention",
  "Obesity management",
  "Arthritis",
  "Anxiety & depression",
  "Sleep disorders",
  "Allergies",
  "Digestive issues",
];

export default function InternalMedicinePage() {
  const primaryCareProvider = PROVIDERS.find(
    (p) => p.specialty === "Internal Medicine"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Stethoscope className="h-4 w-4 mr-1" />
              Internal Medicine
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              A Doctor Who{" "}
              <span className="text-purple-600">Knows You</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Having a primary care doctor who actually knows your history makes all
              the difference. We manage your ongoing health, catch problems early,
              and coordinate with specialists when you need them&mdash;so nothing falls through the cracks.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Appointment
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

      {/* Approach */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                More Than Just Checkups
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                When you need to see a specialist&mdash;pain management, orthopedics, whatever&mdash;we
                coordinate it. We&apos;re all in the same building, so your care actually gets coordinated
                instead of you playing phone tag between offices.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Heart,
                    title: "We Catch Things Early",
                    description:
                      "Regular checkups aren't just paperwork—they're how we spot problems before they get serious.",
                  },
                  {
                    icon: Shield,
                    title: "We Manage the Long Haul",
                    description:
                      "Diabetes, blood pressure, cholesterol—we help you keep them under control, not just take pills.",
                  },
                  {
                    icon: Stethoscope,
                    title: "We Coordinate Your Care",
                    description:
                      "Need a specialist? We'll make sure they know your history and we stay in the loop.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider Card */}
            {primaryCareProvider && (
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <UserCircle className="h-20 w-20 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {primaryCareProvider.name}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {primaryCareProvider.specialty}
                    </p>
                    <p className="text-slate-500">{primaryCareProvider.title}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-slate-600">Board Certified</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/providers/${primaryCareProvider.slug}`}>
                      View Profile
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The basics that keep you healthy, plus the ongoing care when things need managing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <span className="inline-flex items-center text-purple-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Things We Help Manage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If you&apos;re dealing with any of these, we can help you stay on top of it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-purple-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Time for a Checkup?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you&apos;re overdue for a physical, have a new concern, or need
              someone to help manage an ongoing condition&mdash;let&apos;s get you scheduled.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Appointment
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
