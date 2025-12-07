import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Building2,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Rand Medical Center",
  description:
    "Contact Rand Medical Center in Arlington Heights. Call (224) 735-3522, visit our office at 1925 E Rand Rd, or book an appointment online.",
  openGraph: {
    title: "Contact Rand Medical Center | Arlington Heights, IL",
    description:
      "Get in touch with our team. Call, visit, or schedule an appointment online.",
  },
};

const CONTACT_REASONS = [
  {
    icon: Calendar,
    title: "Schedule an Appointment",
    description: "Book a new patient visit or follow-up appointment.",
    action: "Book Online",
    href: SITE_CONFIG.bookingUrl,
    primary: true,
  },
  {
    icon: FileText,
    title: "Request Medical Records",
    description: "Access or transfer your medical records.",
    action: "Patient Forms",
    href: "/patients/forms",
    primary: false,
  },
  {
    icon: MessageSquare,
    title: "General Inquiries",
    description: "Questions about our services or insurance.",
    action: "Call Us",
    href: SITE_CONFIG.phoneTel,
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Phone className="h-4 w-4 mr-1" />
              Contact Us
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Get in Touch
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Have questions or ready to schedule an appointment? We&apos;re here to
              help. Reach out by phone, visit our office, or book online.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              How Can We Help?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Choose Your Preferred Contact Method
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_REASONS.map((reason, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mb-4">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{reason.description}</p>
                  <Button
                    variant={reason.primary ? "primary" : "outline"}
                    size="sm"
                    asChild
                  >
                    {reason.href.startsWith("tel:") ? (
                      <a href={reason.href}>
                        {reason.action}
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    ) : reason.href.startsWith("http") ? (
                      <a href={reason.href} target="_blank" rel="noopener noreferrer">
                        {reason.action}
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link href={reason.href}>
                        {reason.action}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Location
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-8">
                Visit Our Office
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                      {SITE_CONFIG.address.zip}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        SITE_CONFIG.address.full
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium mt-2"
                    >
                      Get Directions
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Office Hours
                    </h3>
                    <div className="text-slate-600 space-y-1">
                      <p>
                        <span className="font-medium">Monday - Friday:</span>{" "}
                        {SITE_CONFIG.hours.weekdays}
                      </p>
                      <p>
                        <span className="font-medium">Saturday - Sunday:</span>{" "}
                        {SITE_CONFIG.hours.weekend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="mt-8 p-6 bg-amber-50 border-amber-200">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      Same-Day Appointments
                    </h3>
                    <p className="text-sm text-amber-800">
                      Need to be seen today? Call us directly and we&apos;ll do our
                      best to accommodate urgent needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <div className="relative aspect-square rounded-2xl bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                  <Building2 className="h-16 w-16 mb-4" />
                  <p className="font-medium">Map Location</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      SITE_CONFIG.address.full
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button size="sm" variant="outline">
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Patient Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find helpful information for your visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Insurance & Pricing",
                description: "Accepted insurance plans and self-pay options",
                href: "/patients/insurance-pricing",
              },
              {
                title: "Patient Forms",
                description: "Download forms before your appointment",
                href: "/patients/forms",
              },
              {
                title: "FAQs",
                description: "Common questions about our services",
                href: "/patients/faq",
              },
              {
                title: "New Patients",
                description: "What to expect at your first visit",
                href: "/patients/new-patients",
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{link.description}</p>
                <span className="inline-flex items-center text-teal-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container container-default mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Our friendly team is here to help you book your appointment and
            answer any questions you may have.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
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
      </section>
    </>
  );
}
