import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Nondiscrimination Notice | Rand Medical Center",
  description:
    "Rand Medical Center complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.",
};

export default function NondiscriminationPage() {
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
            <span className="text-slate-900">Nondiscrimination Notice</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-4">
              <Heart className="h-4 w-4 mr-1" />
              Civil Rights
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Nondiscrimination Notice
            </h1>
            <p className="text-slate-600">
              Your rights under Federal civil rights laws
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Notice of Nondiscrimination
                </h2>
                <p className="text-slate-600 mb-6">
                  Rand Medical Center complies with applicable Federal civil
                  rights laws and does not discriminate on the basis of race,
                  color, national origin, age, disability, or sex. Rand Medical
                  Center does not exclude people or treat them differently
                  because of race, color, national origin, age, disability, or
                  sex.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Our Commitment
                </h2>
                <p className="text-slate-600 mb-4">
                  Rand Medical Center is committed to providing care to all
                  patients without discrimination. We:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>
                    Provide free aids and services to people with disabilities
                    to communicate effectively with us, such as qualified sign
                    language interpreters and written information in other
                    formats (large print, audio, accessible electronic formats,
                    other formats)
                  </li>
                  <li>
                    Provide free language services to people whose primary
                    language is not English, such as qualified interpreters and
                    information written in other languages
                  </li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  How to Request Services
                </h2>
                <p className="text-slate-600 mb-6">
                  If you need these services, please contact our office at (224)
                  735-3522. We will make every effort to accommodate your needs
                  and ensure you receive the care you deserve.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Filing a Grievance
                </h2>
                <p className="text-slate-600 mb-4">
                  If you believe that Rand Medical Center has failed to provide
                  these services or discriminated in another way on the basis of
                  race, color, national origin, age, disability, or sex, you can
                  file a grievance with:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <p className="text-slate-600">
                    Rand Medical Center
                    <br />
                    Attention: Office Manager
                    <br />
                    3330 W. Dundee Road
                    <br />
                    Northbrook, IL 60062
                    <br />
                    Phone: (224) 735-3522
                  </p>
                </div>
                <p className="text-slate-600 mb-6">
                  You can file a grievance in person or by mail. If you need
                  help filing a grievance, our office staff is available to help
                  you.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Filing a Complaint with the U.S. Department of Health and
                  Human Services
                </h2>
                <p className="text-slate-600 mb-4">
                  You can also file a civil rights complaint with the U.S.
                  Department of Health and Human Services, Office for Civil
                  Rights electronically through the Office for Civil Rights
                  Complaint Portal, available at{" "}
                  <a
                    href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    https://ocrportal.hhs.gov/ocr/portal/lobby.jsf
                  </a>
                  , or by mail or phone at:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <p className="text-slate-600">
                    U.S. Department of Health and Human Services
                    <br />
                    200 Independence Avenue SW
                    <br />
                    Room 509F, HHH Building
                    <br />
                    Washington, DC 20201
                    <br />
                    Phone: 1-800-368-1019
                    <br />
                    TDD: 1-800-537-7697
                  </p>
                </div>
                <p className="text-slate-600">
                  Complaint forms are available at{" "}
                  <a
                    href="https://www.hhs.gov/ocr/complaints/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    https://www.hhs.gov/ocr/complaints/index.html
                  </a>
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
              { title: "Terms of Use", href: "/legal/terms" },
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
