import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { FileText, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Rand Medical Center",
  description:
    "Terms of use for the Rand Medical Center website. Please read these terms carefully before using our website.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Terms of Use</span>
          </nav>

          <Badge variant="primary" size="lg" className="mb-4">
            <FileText className="h-4 w-4 mr-1" />
            Legal
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Please read these terms of use carefully before using the Rand
            Medical Center website.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last Updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Rand Medical Center website
              (&quot;Website&quot;), you accept and agree to be bound by these Terms of
              Use and our Privacy Policy. If you do not agree to these terms,
              please do not use this Website.
            </p>

            <h2>Medical Information Disclaimer</h2>
            <p>
              The information provided on this Website is for general
              informational and educational purposes only. It is not intended to
              be, and should not be construed as, medical advice or a substitute
              for professional medical consultation, diagnosis, or treatment.
            </p>
            <p>
              Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition. Never disregard professional medical advice or delay in
              seeking it because of something you have read on this Website.
            </p>
            <p>
              If you think you may have a medical emergency, call your doctor, go
              to the emergency department, or call 911 immediately.
            </p>

            <h2>No Doctor-Patient Relationship</h2>
            <p>
              Use of this Website does not create a doctor-patient relationship
              between you and Rand Medical Center or any of its physicians,
              healthcare providers, or staff. A doctor-patient relationship is
              established only when you have been formally accepted as a patient
              and have been seen in person by a provider.
            </p>

            <h2>Use of Website</h2>
            <p>You agree to use this Website only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Infringe on the rights of others</li>
              <li>Restrict or inhibit anyone else&apos;s use and enjoyment of the Website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any material that is harmful, threatening, defamatory, or obscene</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this Website, including text, graphics, logos, images,
              and software, is the property of Rand Medical Center or its content
              suppliers and is protected by United States and international
              copyright laws. You may not reproduce, distribute, modify, or create
              derivative works from any content on this Website without our prior
              written consent.
            </p>

            <h2>Links to Third-Party Websites</h2>
            <p>
              This Website may contain links to third-party websites that are not
              owned or controlled by Rand Medical Center. We have no control over,
              and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites. We encourage you to read the
              terms and conditions and privacy policies of any third-party websites
              you visit.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              THIS WEBSITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. RAND MEDICAL CENTER
              DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Website will be uninterrupted, error-free,
              or free of viruses or other harmful components. We do not warrant
              that the information on the Website is accurate, complete, or
              current.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RAND MEDICAL CENTER SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
              INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR
              INABILITY TO ACCESS OR USE THE WEBSITE.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Rand Medical Center,
              its officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses, including
              reasonable attorneys&apos; fees, arising out of or in any way connected
              with your access to or use of the Website or your violation of these
              Terms of Use.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Changes
              will be effective immediately upon posting to the Website. Your
              continued use of the Website after any changes constitutes your
              acceptance of the new Terms of Use.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance
              with the laws of the State of Illinois, without regard to its conflict
              of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="not-prose bg-slate-50 rounded-xl p-6 my-6">
              <p className="font-semibold text-slate-900 mb-4">
                Rand Medical Center
              </p>
              <div className="space-y-2 text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.address.full}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.phoneDisplay}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
