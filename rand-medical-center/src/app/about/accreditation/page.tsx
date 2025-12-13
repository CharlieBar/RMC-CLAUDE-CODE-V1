import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Award,
  Calendar,
  Check,
  ChevronRight,
  GraduationCap,
  Phone,
  Shield,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Accreditations | Rand Medical Center",
  description:
    "Learn about the certifications, accreditations, and recognitions that demonstrate Rand Medical Center's commitment to high-quality, safe, and ethical care.",
  openGraph: {
    title: "Awards & Accreditations | Rand Medical Center",
    description:
      "Committed to meeting and exceeding industry standards for safety, cleanliness, and ethical practice.",
  },
};

export default function AccreditationPage() {
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
            <span className="text-slate-900">Accreditations</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Award className="h-4 w-4 mr-1" />
              Quality & Standards
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Awards, Accreditations &{" "}
              <span className="gradient-text-medical">Quality Commitments</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Learn about the certifications, accreditations, and recognitions
              that demonstrate Rand Medical Center's commitment to high-quality,
              safe, and ethical care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule an Appointment
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

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Rand Medical Center is committed to meeting and exceeding industry
              standards for safety, cleanliness, and ethical practice. Our
              providers maintain board certifications and ongoing medical
              education. Our affiliated facilities and programs follow strict
              guidelines for infection control, documentation, and patient
              safety.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              These recognitions are a reflection of the daily work our team
              does to put patient safety and quality of care first.
            </p>
          </div>
        </div>
      </section>

      {/* Provider Credentials */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Provider Credentials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Board-Certified Specialists
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our physicians and providers maintain the highest levels of
              certification and continuing education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Board Certification",
                description:
                  "Our physicians are board certified in their respective specialties, including Pain Management, Internal Medicine, and Orthopedic Surgery.",
                icon: GraduationCap,
              },
              {
                title: "Medical Licensure",
                description:
                  "All providers maintain active medical licenses with the State of Illinois and meet all regulatory requirements.",
                icon: Shield,
              },
              {
                title: "Continuing Education",
                description:
                  "Our team participates in ongoing medical education to stay current with the latest treatment advances and best practices.",
                icon: Star,
              },
            ].map((credential, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mb-4">
                    <credential.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-slate-600">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Standards */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Facility Standards
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Safety & Quality Protocols
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our facility adheres to strict standards for patient safety,
                infection control, and quality care. These protocols ensure that
                every patient receives care in a safe, clean environment.
              </p>

              <ul className="space-y-4">
                {[
                  "Rigorous infection control and sterilization procedures",
                  "Regular equipment maintenance and calibration",
                  "Emergency preparedness protocols",
                  "HIPAA-compliant patient privacy protections",
                  "Documentation standards for accurate medical records",
                  "Staff training and competency verification",
                ].map((standard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-500 mt-1" />
                    <span className="text-slate-600">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-teal-50 border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-teal-600" />
                  Patient Safety First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Patient safety is at the core of everything we do. From the
                  moment you walk through our doors, our team follows
                  established protocols designed to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Verify patient identity at every interaction",
                    "Confirm procedure and site before treatment",
                    "Monitor for adverse reactions",
                    "Ensure proper post-procedure care instructions",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-600"
                    >
                      <Check className="h-4 w-4 text-teal-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Commitments
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Quality Promises to Our Patients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Evidence-Based Care",
                description:
                  "We follow evidence-based treatment guidelines and stay current with the latest medical research to provide you with the most effective care options.",
              },
              {
                title: "Transparent Communication",
                description:
                  "We believe in clear, honest communication about your diagnosis, treatment options, expected outcomes, and costs.",
              },
              {
                title: "Ethical Practice",
                description:
                  "We adhere to the highest ethical standards in medical practice, always putting your best interests first.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We regularly review our outcomes and processes to identify opportunities for improvement in patient care.",
              },
            ].map((commitment, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-slate-600">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Meet Our Qualified Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our board-certified physicians and experienced providers are
              dedicated to delivering exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pain Management",
                description:
                  "Board-certified specialists in interventional pain management",
                href: "/providers",
              },
              {
                title: "Orthopedic Surgery",
                description:
                  "Fellowship-trained orthopedic surgeons with specialized expertise",
                href: "/providers",
              },
              {
                title: "Internal Medicine",
                description:
                  "Experienced physicians providing comprehensive medical care",
                href: "/providers",
              },
            ].map((specialty, index) => (
              <Link key={index} href={specialty.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {specialty.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {specialty.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-teal-600 font-medium">
                      View Providers <ChevronRight className="h-4 w-4" />
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
            Experience Quality Care
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Our commitment to excellence means you can trust that you're
            receiving the highest quality care. Schedule your appointment today.
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
