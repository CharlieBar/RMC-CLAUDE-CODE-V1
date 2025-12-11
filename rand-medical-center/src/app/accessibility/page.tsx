import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { ChevronRight, Accessibility, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | Rand Medical Center",
  description:
    "Rand Medical Center is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts and how to contact us for assistance.",
};

export default function AccessibilityPage() {
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
            <span className="text-slate-900">Accessibility</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-4">
              <Accessibility className="h-4 w-4 mr-1" />
              Accessibility
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Accessibility Statement
            </h1>
            <p className="text-slate-600">
              Our commitment to digital accessibility for all users
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Our Commitment
                  </h2>
                  <p className="text-slate-600">
                    Rand Medical Center is committed to ensuring digital
                    accessibility for people with disabilities. We are
                    continually improving the user experience for everyone and
                    applying the relevant accessibility standards to ensure we
                    provide equal access to all users.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Accessibility Standards
                  </h2>
                  <p className="text-slate-600 mb-4">
                    We strive to conform to the Web Content Accessibility
                    Guidelines (WCAG) 2.1 at the AA level. These guidelines
                    explain how to make web content more accessible for people
                    with disabilities. Conformance with these guidelines helps
                    make the web more user-friendly for everyone.
                  </p>
                  <p className="text-slate-600">Our efforts include:</p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>
                      Providing text alternatives for non-text content
                    </li>
                    <li>
                      Ensuring sufficient color contrast between text and
                      backgrounds
                    </li>
                    <li>
                      Making all functionality available from a keyboard
                    </li>
                    <li>
                      Providing clear and consistent navigation
                    </li>
                    <li>
                      Using proper heading structure and page organization
                    </li>
                    <li>
                      Ensuring forms are properly labeled and accessible
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Assistive Technologies
                  </h2>
                  <p className="text-slate-600">
                    Our website is designed to be compatible with assistive
                    technologies, including screen readers, voice recognition
                    software, and screen magnifiers. We test our website with
                    common assistive technologies to ensure compatibility.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Browser Compatibility
                  </h2>
                  <p className="text-slate-600">
                    For the best experience, we recommend using the latest
                    versions of major browsers such as Chrome, Firefox, Safari,
                    or Edge. Our website is designed to work with both desktop
                    and mobile devices.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    In-Person Accommodations
                  </h2>
                  <p className="text-slate-600 mb-4">
                    At our physical location, we are committed to providing
                    accessible healthcare services:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Wheelchair-accessible entrance and facilities</li>
                    <li>Accessible parking spaces</li>
                    <li>
                      Sign language interpreters available upon request
                    </li>
                    <li>
                      Written materials available in large print upon request
                    </li>
                    <li>
                      Staff trained to assist patients with disabilities
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Feedback & Contact
                  </h2>
                  <p className="text-slate-600 mb-4">
                    We welcome your feedback on the accessibility of our website
                    and services. If you encounter accessibility barriers or
                    need assistance, please contact us:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg space-y-4">
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
                      <Mail className="h-5 w-5 text-teal-500" />
                      <div>
                        <p className="font-medium text-slate-900">Address</p>
                        <p className="text-slate-600">
                          {SITE_CONFIG.address.street}
                          <br />
                          {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                          {SITE_CONFIG.address.zip}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4">
                    We try to respond to accessibility feedback within 2
                    business days.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Continuous Improvement
                  </h2>
                  <p className="text-slate-600">
                    We are committed to ongoing accessibility improvements. As
                    accessibility standards and technologies evolve, we will
                    continue to update our website to provide the best possible
                    experience for all users.
                  </p>
                </section>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/contact">
                  Contact Us for Assistance
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Related Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Patient Resources", href: "/patients" },
              { title: "Contact Us", href: "/contact" },
              { title: "Nondiscrimination Notice", href: "/legal/nondiscrimination" },
            ].map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <Card>
                  <CardContent className="p-4 text-center">
                    <span className="text-slate-600 group-hover:text-teal-600 transition-colors font-medium">
                      {link.title}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
