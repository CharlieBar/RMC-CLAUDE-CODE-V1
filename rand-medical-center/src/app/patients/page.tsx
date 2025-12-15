import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  CreditCard,
  FileText,
  HelpCircle,
  Phone,
  Shield,
  Users,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Resources | Rand Medical Center",
  description:
    "Find everything you need as a patient at Rand Medical Center - insurance information, patient forms, FAQs, and helpful resources for your visit.",
  openGraph: {
    title: "Patient Resources | Rand Medical Center",
    description:
      "Access patient forms, insurance information, FAQs, and prepare for your visit at Rand Medical Center.",
  },
};

export default function PatientsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Users className="h-4 w-4 mr-1" />
              Patient Resources
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Everything You Need for{" "}
              <span className="gradient-text-medical">Your Visit</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We want to make your experience at Rand Medical Center as smooth
              as possible. Find insurance information, patient forms, FAQs, and
              helpful resources to prepare for your appointment.
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

      {/* Quick Links */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Quick Access
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Patient Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find the information you need to prepare for your visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Insurance & Pricing",
                description:
                  "Learn about accepted insurance plans, workers' compensation, personal injury liens, and payment options.",
                icon: CreditCard,
                href: "/patients/insurance-pricing",
              },
              {
                title: "Patient Forms",
                description:
                  "Download and complete your patient forms before your appointment to save time.",
                icon: FileText,
                href: "/patients/forms",
              },
              {
                title: "FAQs",
                description:
                  "Find answers to frequently asked questions about our services, appointments, and what to expect.",
                icon: HelpCircle,
                href: "/patients/faq",
              },
            ].map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mb-4">
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    <span className="inline-flex items-center gap-1 text-teal-600 font-medium group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Prepare for Your Visit
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                What to Bring to Your Appointment
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Being prepared for your appointment helps us provide you with
                the best possible care. Please bring the following items:
              </p>

              <ul className="space-y-4">
                {[
                  "Valid photo ID (driver's license, state ID, or passport)",
                  "Insurance card(s) - all that apply",
                  "Workers' compensation claim information (if applicable)",
                  "Attorney contact information (if applicable)",
                  "List of current medications with dosages",
                  "Relevant medical records or imaging studies (X-rays, MRI, CT scans)",
                  "Referral from your primary care physician (if required)",
                  "Completed patient forms (available for download)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  First-Time Patients
                </h3>
                <p className="text-slate-600 mb-6">
                  If this is your first visit, please arrive 15-20 minutes early
                  to complete any remaining paperwork. You can also download and
                  complete forms ahead of time.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="h-5 w-5 text-teal-500" />
                    <span>Arrive 15-20 minutes early</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <FileText className="h-5 w-5 text-teal-500" />
                    <span>Complete forms in advance</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="h-5 w-5 text-teal-500" />
                    <span>Free parking available</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <Button asChild className="w-full">
                    <Link href="/patients/forms">
                      <FileText className="h-5 w-5" />
                      Download Patient Forms
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Insurance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              We Work With Your Insurance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We accept most major insurance plans and work with workers'
              compensation and personal injury cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Private Insurance",
                description:
                  "We accept most major health insurance plans. Contact us to verify your coverage.",
                icon: Shield,
              },
              {
                title: "Workers' Compensation",
                description:
                  "Experienced in handling workers' comp cases with proper documentation and billing.",
                icon: FileText,
              },
              {
                title: "Personal Injury / Liens",
                description:
                  "We work with attorneys on personal injury cases and can provide care on a lien basis.",
                icon: CreditCard,
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mx-auto mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/patients/insurance-pricing">
                View Insurance Details
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-teal-500" />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <a
                        href={SITE_CONFIG.phoneTel}
                        className="text-teal-600 hover:underline"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-teal-500" />
                    <div>
                      <p className="font-medium text-slate-900">Hours</p>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Location</p>
                      <p className="text-slate-600">
                        {SITE_CONFIG.address.street}
                        <br />
                        {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                        {SITE_CONFIG.address.zip}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Have Questions?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our staff is here to help. If you have questions about your
                  appointment, insurance, or anything else, don't hesitate to
                  reach out.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Contact Us
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/patients/faq">
                      View FAQs
                      <HelpCircle className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal & Privacy */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Legal & Privacy Information
            </h2>
            <p className="text-slate-600">
              Important information about your rights and our policies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Privacy Policy", href: "/legal/privacy-policy" },
              { title: "Notice of Privacy Practices", href: "/legal/notice-of-privacy-practices" },
              { title: "Terms of Use", href: "/legal/terms" },
              { title: "Nondiscrimination", href: "/legal/nondiscrimination" },
            ].map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-4 text-center">
                    <span className="text-slate-600 group-hover:text-teal-600 transition-colors text-sm font-medium">
                      {link.title}
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
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward better health. Our team is ready to help
            you.
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
