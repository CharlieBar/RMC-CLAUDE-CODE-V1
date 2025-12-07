import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  Dumbbell,
  Heart,
  Phone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physical Therapy | Rehabilitation Services | Rand Medical Center",
  description:
    "Physical therapy and rehabilitation in Arlington Heights. Post-surgical rehab, sports rehabilitation, spine therapy, and personalized treatment plans for injury recovery.",
  openGraph: {
    title: "Physical Therapy Services | Rand Medical Center",
    description:
      "Personalized rehabilitation programs to restore strength, mobility, and function.",
  },
};

const PROGRAMS = [
  {
    name: "Post-Surgical Rehabilitation",
    description:
      "Specialized recovery programs following orthopedic surgery, including joint replacement, ACL reconstruction, and spine surgery.",
    href: "/services/physical-therapy/post-surgical-rehab",
  },
  {
    name: "Spine Rehabilitation",
    description:
      "Targeted therapy for back and neck conditions, herniated discs, and chronic spinal pain.",
    href: "/services/physical-therapy/spine-rehab",
  },
  {
    name: "Sports Rehabilitation",
    description:
      "Get athletes back in the game with sport-specific training and return-to-play protocols.",
    href: "/services/physical-therapy/sports-rehab",
  },
  {
    name: "Manual Therapy",
    description:
      "Hands-on techniques including joint mobilization, soft tissue work, and myofascial release.",
    href: "/services/physical-therapy/manual-therapy",
  },
  {
    name: "Balance & Fall Prevention",
    description:
      "Programs to improve stability and reduce fall risk, especially for older adults.",
    href: "/services/physical-therapy/balance-training",
  },
  {
    name: "Work Conditioning",
    description:
      "Prepare for safe return to work after injury with job-specific functional training.",
    href: "/services/physical-therapy/work-conditioning",
  },
];

const CONDITIONS = [
  "Back & neck pain",
  "Post-surgical recovery",
  "Sports injuries",
  "Joint replacement rehab",
  "Shoulder injuries",
  "Knee injuries",
  "Hip pain",
  "Sciatica",
  "Arthritis",
  "Balance disorders",
  "Work injuries",
  "Chronic pain",
];

export default function PhysicalTherapyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Dumbbell className="h-4 w-4 mr-1" />
              Physical Therapy
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Restore Your{" "}
              <span className="text-green-600">Strength & Mobility</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our physical therapists work closely with your medical team to
              create personalized rehabilitation programs. Whether you&apos;re
              recovering from surgery, injury, or managing chronic pain, we help
              you get back to the activities you love.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
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
                Integrated, Personalized Care
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                As part of a comprehensive medical center, our physical
                therapists collaborate directly with your physicians. This
                integrated approach means your rehabilitation is coordinated
                with your overall treatment plan for better outcomes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Goal-Oriented",
                  description:
                    "We set clear, measurable goals based on what matters to you.",
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description:
                    "Direct communication with your doctors for coordinated care.",
                },
                {
                  icon: TrendingUp,
                  title: "Progress Tracking",
                  description:
                    "Regular assessments to measure improvement and adjust plans.",
                },
                {
                  icon: Heart,
                  title: "Patient Education",
                  description:
                    "Learn exercises and strategies for long-term wellness.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-2xl border border-slate-200"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600 w-fit mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Rehabilitation Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized therapy programs tailored to your specific condition
              and recovery goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => (
              <Link
                key={index}
                href={program.href}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                  {program.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{program.description}</p>
                <span className="inline-flex items-center text-green-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Conditions We Treat
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Your Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What to Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Evaluation",
                description:
                  "Comprehensive assessment of your condition, mobility, and goals.",
              },
              {
                step: "2",
                title: "Treatment Plan",
                description:
                  "Personalized program designed to address your specific needs.",
              },
              {
                step: "3",
                title: "Active Therapy",
                description:
                  "One-on-one sessions with exercises, manual therapy, and education.",
              },
              {
                step: "4",
                title: "Home Program",
                description:
                  "Exercises and strategies to continue progress between sessions.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-green-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Start Your Recovery Today
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you&apos;re recovering from surgery, managing an injury, or
              dealing with chronic pain, our physical therapy team is here to
              help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
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
