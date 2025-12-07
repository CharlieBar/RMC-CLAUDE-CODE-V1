import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG, PROVIDERS, TRUST_BADGES } from "@/lib/constants";
import {
  Award,
  BadgeCheck,
  Calendar,
  ChevronRight,
  Clock,
  Heart,
  Phone,
  Shield,
  Target,
  UserCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Rand Medical Center",
  description:
    "Learn about Rand Medical Center, a Joint Commission-accredited facility serving Arlington Heights with pain management, orthopedics, and physical therapy for over 15 years.",
  openGraph: {
    title: "About Rand Medical Center | Arlington Heights Medical Care",
    description:
      "Joint Commission-accredited medical center with board-certified specialists in pain management, orthopedics, and physical therapy.",
  },
};

const CORE_VALUES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with empathy and respect, understanding that each person's health journey is unique.",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    description:
      "Our Joint Commission accreditation reflects our commitment to meeting the highest standards in healthcare.",
  },
  {
    icon: Target,
    title: "Patient-Centered Approach",
    description:
      "Your goals drive our treatment plans. We work with you to develop personalized care strategies.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Our specialists work together, sharing expertise to provide comprehensive, coordinated care.",
  },
];

const MILESTONES = [
  { year: "2008", event: "Rand Medical Center founded in Arlington Heights" },
  { year: "2010", event: "Added pain management specialty services" },
  { year: "2012", event: "Opened outpatient surgery center" },
  { year: "2015", event: "Achieved Joint Commission accreditation" },
  { year: "2018", event: "Expanded physical therapy department" },
  { year: "2020", event: "Introduced advanced minimally invasive procedures" },
  { year: "2023", event: "Celebrated 15 years of serving the community" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Award className="h-4 w-4 mr-1" />
              About Us
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Dedicated to Your{" "}
              <span className="gradient-text-medical">Health & Recovery</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              For over 15 years, Rand Medical Center has been Arlington Heights&apos;
              trusted destination for comprehensive medical care. Our team of
              board-certified specialists combines advanced treatments with
              genuine compassion.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/providers">
                  Meet Our Team
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Helping Patients Live Pain-Free, Active Lives
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                At Rand Medical Center, our mission is to provide exceptional
                medical care that addresses the root cause of your condition—not
                just the symptoms. We believe everyone deserves access to
                quality healthcare delivered with expertise and compassion.
              </p>
              <p className="text-lg text-slate-600">
                From your first consultation through recovery, our integrated
                approach ensures you receive coordinated care across all our
                specialties. Whether you&apos;re recovering from an injury, managing
                chronic pain, or seeking preventive care, we&apos;re here to support
                your health journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CORE_VALUES.map((value, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Credentials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Why Patients Trust Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our accreditations and certifications demonstrate our commitment
              to excellence in patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_BADGES.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200"
              >
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <span className="font-medium text-slate-700">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Meet Our Board-Certified Specialists
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our physicians bring decades of combined experience in pain
              management, orthopedics, and primary care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROVIDERS.slice(0, 4).map((provider) => (
              <Link
                key={provider.id}
                href={`/providers/${provider.slug}`}
                className="group text-center"
              >
                <div className="relative mb-4 aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserCircle className="h-24 w-24 text-slate-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {provider.name}
                </h3>
                <p className="text-sm text-teal-600 font-medium">
                  {provider.specialty}
                </p>
                <p className="text-sm text-slate-500">{provider.title}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/providers">
                View All Providers
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Our History
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              15+ Years of Serving Our Community
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From our founding to today, we&apos;ve continuously evolved to meet the
              healthcare needs of Arlington Heights and surrounding communities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-500/30 -translate-x-1/2" />

              {MILESTONES.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="text-teal-400 font-bold text-lg">
                      {milestone.year}
                    </span>
                    <p className="text-slate-300">{milestone.event}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Schedule your appointment today and discover why patients
              throughout Arlington Heights trust Rand Medical Center for their
              healthcare needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </>
  );
}
