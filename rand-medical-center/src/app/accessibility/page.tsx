import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { Accessibility, ChevronRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | Rand Medical Center",
  description:
    "Rand Medical Center's commitment to digital accessibility. Learn about our efforts to make our website accessible to all users.",
};

export default function AccessibilityPage() {
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
            <span className="text-slate-700">Accessibility</span>
          </nav>

          <Badge variant="primary" size="lg" className="mb-4">
            <Accessibility className="h-4 w-4 mr-1" />
            Accessibility
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">
            Accessibility Statement
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Rand Medical Center is committed to ensuring digital accessibility
            for people with disabilities. We continually improve the user
            experience for everyone.
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
            <h2>Our Commitment</h2>
            <p>
              Rand Medical Center is committed to ensuring that our website is
              accessible to people with disabilities. We are continually improving
              the user experience for everyone and applying the relevant
              accessibility standards.
            </p>

            <h2>Conformance Status</h2>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA standards. These guidelines explain how to make
              web content more accessible for people with disabilities and more
              user-friendly for everyone.
            </p>

            <h2>Measures We Take</h2>
            <p>
              Rand Medical Center takes the following measures to ensure
              accessibility of our website:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              {[
                "Include accessibility as a requirement in our web development process",
                "Conduct regular accessibility assessments of our website",
                "Train our staff on accessibility best practices",
                "Provide text alternatives for non-text content",
                "Ensure sufficient color contrast throughout the site",
                "Make our site navigable by keyboard",
                "Use descriptive link text",
                "Structure content with proper headings",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <h2>Technical Specifications</h2>
            <p>
              Accessibility of the Rand Medical Center website relies on the
              following technologies to work with the particular combination of web
              browser and any assistive technologies or plugins installed on your
              computer:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WAI-ARIA</li>
            </ul>
            <p>
              These technologies are relied upon for conformance with the
              accessibility standards used.
            </p>

            <h2>Limitations and Alternatives</h2>
            <p>
              Despite our best efforts to ensure accessibility of the Rand Medical
              Center website, there may be some limitations. Below is a description
              of known limitations and potential solutions:
            </p>
            <ul>
              <li>
                <strong>Third-party content:</strong> Some content provided by
                third parties may not be fully accessible. We are working with
                our partners to improve accessibility.
              </li>
              <li>
                <strong>PDF documents:</strong> Some older PDF documents may not
                be fully accessible. We are in the process of updating these
                documents. Please contact us if you need an accessible version.
              </li>
              <li>
                <strong>Video content:</strong> Some video content may not have
                captions. We are working to add captions to all video content.
              </li>
            </ul>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of the Rand Medical
              Center website. Please let us know if you encounter accessibility
              barriers:
            </p>
            <div className="not-prose bg-slate-50 rounded-xl p-6 my-6">
              <p className="font-semibold text-slate-900 mb-4">
                Accessibility Feedback
              </p>
              <div className="space-y-2 text-slate-600">
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.phoneDisplay}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.email}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  {SITE_CONFIG.address.full}
                </p>
              </div>
            </div>
            <p>
              We try to respond to feedback within 2 business days.
            </p>

            <h2>Compatibility with Browsers and Assistive Technology</h2>
            <p>
              The Rand Medical Center website is designed to be compatible with the
              following assistive technologies:
            </p>
            <ul>
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            <p>
              The website is designed to be compatible with the latest versions of
              Chrome, Firefox, Safari, and Edge browsers.
            </p>

            <h2>Facility Accessibility</h2>
            <p>
              In addition to our website, our physical facility at{" "}
              {SITE_CONFIG.address.full} is designed to be accessible:
            </p>
            <ul>
              <li>Wheelchair accessible entrance and exam rooms</li>
              <li>Accessible parking spaces near the entrance</li>
              <li>Accessible restrooms</li>
              <li>Assistive listening devices available upon request</li>
              <li>Service animals welcome</li>
              <li>Sign language interpreter services available with advance notice</li>
            </ul>

            <h2>Assessment Methods</h2>
            <p>
              Rand Medical Center assessed the accessibility of this website using
              the following methods:
            </p>
            <ul>
              <li>Self-evaluation</li>
              <li>Automated accessibility testing tools</li>
              <li>Manual testing with assistive technologies</li>
            </ul>

            <h2>Formal Approval</h2>
            <p>
              This accessibility statement was approved by the management of Rand
              Medical Center.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
