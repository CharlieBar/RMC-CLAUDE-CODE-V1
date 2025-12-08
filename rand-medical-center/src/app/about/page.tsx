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
    title: "We Actually Care",
    description:
      "You're not a number here. We take the time to learn your name, understand your situation, and treat you like family.",
  },
  {
    icon: Shield,
    title: "We Do Things Right",
    description:
      "Joint Commission accreditation means we meet the same safety standards as major hospitals. Your safety matters.",
  },
  {
    icon: Target,
    title: "Your Goals First",
    description:
      "Want to play golf again? Chase your grandkids? Get through a workday without pain? That's what we're working toward.",
  },
  {
    icon: Users,
    title: "One Team, Not Silos",
    description:
      "Your doctor talks to your physical therapist. Your PT talks to your specialist. Everyone's on the same page.",
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
              Real Doctors.{" "}
              <span className="gradient-text-medical">Real Care.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We started Rand Medical Center in 2008 with a simple idea: patients
              deserve doctors who listen. Since then, we&apos;ve treated over 50,000
              patients in Arlington Heights and the northwest suburbs. We&apos;re still
              here, and we&apos;re still listening.
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
                Get You Back to Your Life
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                When you&apos;re in pain, everything else takes a back seat. You can&apos;t
                work the way you used to. You can&apos;t play with your kids. You can&apos;t
                sleep through the night. We get it&mdash;and we&apos;re here to help you
                get back to normal.
              </p>
              <p className="text-lg text-slate-600">
                That means finding what&apos;s actually causing your pain, not just treating
                symptoms. It means working with you on a treatment plan that fits your
                life, not something generic. And it means having all your specialists
                under one roof so you&apos;re not bouncing between different offices.
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
              The Boring-But-Important Stuff
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Credentials matter in healthcare. Here&apos;s what they mean for you: we&apos;re
              held to the highest standards, and we take that seriously.
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
              The People Behind the Care
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our doctors aren&apos;t just well-trained&mdash;they&apos;re the kind of people
              who got into medicine because they actually want to help. Get to know them.
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
              Our Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              How We Got Here
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We started small in 2008 with a focus on doing one thing well: treating patients with
              respect and expertise. Here&apos;s how we&apos;ve grown over the years.
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
              Come See for Yourself
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We know you have options. But we think once you meet us, you&apos;ll
              understand why so many patients in Arlington Heights keep coming back.
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
