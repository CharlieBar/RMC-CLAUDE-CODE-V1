import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Rand Medical Center",
  description:
    "Review the terms of use for the Rand Medical Center website. Learn about your rights and responsibilities when using our site.",
};

export default function TermsPage() {
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
            <Link href="/patients" className="hover:text-teal-600">
              Patients
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Terms of Use</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-4">
              <FileText className="h-4 w-4 mr-1" />
              Legal
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-slate-600">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-slate-600 mb-6">
                  By accessing and using the Rand Medical Center website, you
                  agree to be bound by these Terms of Use. If you do not agree
                  with any part of these terms, you may not access the website.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Use of Website
                </h2>
                <p className="text-slate-600 mb-4">
                  This website is provided for informational purposes only. The
                  content on this site is not intended to be a substitute for
                  professional medical advice, diagnosis, or treatment. Always
                  seek the advice of your physician or other qualified health
                  provider with any questions you may have regarding a medical
                  condition.
                </p>
                <p className="text-slate-600 mb-6">
                  Never disregard professional medical advice or delay in
                  seeking it because of something you have read on this website.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Medical Disclaimer
                </h2>
                <p className="text-slate-600 mb-6">
                  The information provided on this website is for general
                  educational and informational purposes only. It is not
                  intended to diagnose, treat, cure, or prevent any disease or
                  medical condition. The information should not be used as a
                  substitute for medical advice from your healthcare provider.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-slate-600 mb-6">
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of Rand Medical Center
                  or its content suppliers and is protected by copyright laws.
                  You may not reproduce, distribute, modify, or republish any
                  materials from this site without prior written consent.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Links to Other Websites
                </h2>
                <p className="text-slate-600 mb-6">
                  Our website may contain links to third-party websites or
                  services that are not owned or controlled by Rand Medical
                  Center. We have no control over, and assume no responsibility
                  for, the content, privacy policies, or practices of any
                  third-party websites or services.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 mb-6">
                  Rand Medical Center shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  resulting from your access to or use of, or inability to
                  access or use, this website or any content provided on or
                  through this website.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-slate-600 mb-6">
                  We reserve the right to modify these terms at any time. Any
                  changes will be effective immediately upon posting to this
                  website. Your continued use of the website following the
                  posting of revised terms means that you accept and agree to
                  the changes.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Governing Law
                </h2>
                <p className="text-slate-600 mb-6">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Illinois, without regard to its
                  conflict of law provisions.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-slate-600">
                  If you have any questions about these Terms of Use, please
                  contact us at:
                </p>
                <p className="text-slate-600 mt-2">
                  Rand Medical Center
                  <br />
                  3330 W. Dundee Road
                  <br />
                  Northbrook, IL 60062
                  <br />
                  Phone: (224) 735-3522
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Related Legal Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Privacy Policy", href: "/legal/privacy-policy" },
              { title: "Notice of Privacy Practices", href: "/legal/notice-of-privacy-practices" },
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
