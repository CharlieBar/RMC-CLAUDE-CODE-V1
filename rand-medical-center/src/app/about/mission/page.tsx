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
  Heart,
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission & Values | Rand Medical Center",
  description:
    "Learn about Rand Medical Center's mission to provide compassionate, comprehensive healthcare to the Arlington Heights community. Discover our values and commitment to patient care.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with dignity, respect, and empathy. Your comfort and well-being are our priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in medical care through continuous learning, advanced technology, and evidence-based practices.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description:
      "You are a partner in your healthcare journey. We listen, educate, and collaborate with you on treatment decisions.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all we do, building trust through honesty and transparency.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/about" className="hover:text-teal-600">
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Our Mission</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Target className="h-4 w-4 mr-1" />
              Our Mission
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Dedicated to Your{" "}
              <span className="gradient-text-medical">Health & Wellness</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              For over 15 years, Rand Medical Center has been committed to
              providing exceptional healthcare to the Arlington Heights
              community and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-3 bg-teal-100 rounded-xl text-teal-600 inline-flex mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To provide compassionate, comprehensive, and accessible healthcare
              services that improve the health and quality of life of every
              patient we serve. We are committed to treating each person with
              dignity and respect while delivering the highest standard of
              medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600 inline-flex mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To be the most trusted healthcare provider in our community,
                recognized for exceptional patient experiences, clinical
                excellence, and a commitment to the well-being of those we
                serve.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a healthcare experience where every patient feels
                heard, understood, and confident in their care—where medical
                expertise meets genuine compassion.
              </p>
            </div>

            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  What This Means for You
                </h3>
                <ul className="space-y-4">
                  {[
                    "Personalized treatment plans tailored to your unique needs",
                    "Clear communication and shared decision-making",
                    "Timely access to appointments when you need them",
                    "Coordination across all aspects of your care",
                    "A welcoming environment where you feel comfortable",
                    "Respect for your time, preferences, and privacy",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Heart className="h-4 w-4 mr-1" />
              Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {VALUES.map((value, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/10 text-white border-white/20"
            >
              Our Promise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Our Commitment to You
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              When you choose Rand Medical Center, you&apos;re choosing a team that
              genuinely cares about your health and well-being. We promise to
              listen to your concerns, explain your options clearly, and work
              with you to achieve the best possible outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
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
