import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  Heart,
  Phone,
  Target,
  Eye,
  Users,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision | Rand Medical Center",
  description:
    "Our mission is to provide focused, compassionate injury care that restores function, supports families, and respects the legal and workplace realities our patients face.",
  openGraph: {
    title: "Mission & Vision | Rand Medical Center",
    description:
      "Dedicated to delivering safe, evidence-based injury and pain care that helps patients move better, feel better, and return to meaningful work and daily life.",
  },
};

export default function MissionPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container container-default mx-auto py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/about" className="hover:text-teal-600">
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Mission & Vision</span>
          </nav>
        </div>
      </div>

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
              <Heart className="h-4 w-4 mr-1" />
              Our Purpose
            </Badge>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 heading-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Our Mission &{" "}
              <span className="gradient-text-medical">Vision</span>
            </h1>

            <p
              className="text-xl text-slate-600 mb-8 text-lead animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Our mission is to provide focused, compassionate injury care that
              restores function, supports families, and respects the legal and
              workplace realities our patients face.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button size="lg" shine prominent className="group" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule an Appointment
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call Our Office
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To deliver safe, evidence-based injury and pain care that helps
                patients move better, feel better, and return to meaningful work
                and daily life.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                We believe that every patient deserves access to coordinated,
                compassionate care from a team that understands not just their
                medical needs, but also the workplace and legal challenges they
                may face during recovery.
              </p>
            </div>
            <Card className="bg-teal-50 border-teal-100">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-slate-700 leading-relaxed">
                  "Every decision we make is guided by one question: Is this in
                  the best interest of the patient's health and long-term
                  function?"
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-white order-2 lg:order-1">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Clinical Excellence", icon: Shield },
                    { label: "Clear Communication", icon: Users },
                    { label: "Coordinated Care", icon: Heart },
                    { label: "Patient Safety", icon: Target },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mx-auto mb-3">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <p className="font-medium text-slate-900">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the trusted regional center for work injuries, auto
                accidents, and complex pain conditions—known for clinical
                excellence, clear communication, and coordinated care.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                We strive to set the standard for injury care in the northwest
                Chicago suburbs, bringing together specialists who work as one
                cohesive team to help patients achieve the best possible
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from patient care to team
              collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Patient-Centered Care",
                description:
                  "Every treatment plan is tailored to the individual patient's needs, goals, and circumstances.",
              },
              {
                title: "Clinical Excellence",
                description:
                  "We maintain the highest standards of medical practice through ongoing education and evidence-based approaches.",
              },
              {
                title: "Clear Communication",
                description:
                  "We ensure patients, families, employers, and legal teams have the information they need.",
              },
              {
                title: "Team Collaboration",
                description:
                  "Our physicians, therapists, and staff work together to provide seamless, coordinated care.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related About Pages */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Learn More About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Our Facility",
                description:
                  "Take a look inside our modern clinic, diagnostic areas, and physical therapy gym.",
                href: "/about/facility",
              },
              {
                title: "Accreditations",
                description:
                  "Learn about our certifications and commitment to quality care.",
                href: "/about/accreditation",
              },
              {
                title: "Our Providers",
                description:
                  "Meet the experienced physicians and specialists on our team.",
                href: "/providers",
              },
            ].map((page, index) => (
              <Link key={index} href={page.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {page.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{page.description}</p>
                    <span className="inline-flex items-center gap-1 text-teal-600 font-medium">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-600 text-white">
        <div className="container container-default mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Experience Our Care?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Schedule an appointment and see how our mission translates into
            exceptional patient care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-teal-600 hover:bg-slate-100"
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
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href={SITE_CONFIG.phoneTel}>
                <Phone className="h-5 w-5" />
                {SITE_CONFIG.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
