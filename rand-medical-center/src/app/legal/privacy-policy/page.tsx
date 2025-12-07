import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Rand Medical Center",
  description:
    "Privacy policy for Rand Medical Center website. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | Rand Medical Center",
    description: "How we collect, use, and protect your information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/legal/privacy-policy" className="text-slate-700">
              Privacy Policy
            </Link>
          </nav>

          <Badge variant="primary" size="lg" className="mb-6">
            <Shield className="h-4 w-4 mr-1" />
            Legal
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-600">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl prose prose-slate prose-lg">
            <h2>Introduction</h2>
            <p>
              Rand Medical Center (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website at {SITE_CONFIG.domain}.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect information that you voluntarily provide when you:</p>
            <ul>
              <li>Fill out a contact form</li>
              <li>Request an appointment</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via phone or email</li>
            </ul>
            <p>
              This information may include your name, email address, phone
              number, and any other details you choose to provide.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain
              information, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and requests</li>
              <li>Schedule appointments</li>
              <li>Send administrative information</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Protected Health Information</h2>
            <p>
              For information about how we handle your protected health
              information (PHI) in accordance with HIPAA, please see our{" "}
              <Link href="/legal/notice-of-privacy-practices">
                Notice of Privacy Practices
              </Link>
              .
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul>
              <li>
                Service providers who assist us in operating our website and
                conducting our business
              </li>
              <li>
                Law enforcement or government agencies when required by law
              </li>
              <li>
                Third parties in connection with a merger, acquisition, or sale
                of assets
              </li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your experience. You can set your browser to refuse
              cookies, but some features of our website may not function
              properly.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these websites and
              encourage you to review their privacy policies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated date at the top of this
              page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <ul>
              <li>
                <strong>Address:</strong> {SITE_CONFIG.address.full}
              </li>
              <li>
                <strong>Phone:</strong> {SITE_CONFIG.phoneDisplay}
              </li>
              <li>
                <strong>Email:</strong> {SITE_CONFIG.email}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
