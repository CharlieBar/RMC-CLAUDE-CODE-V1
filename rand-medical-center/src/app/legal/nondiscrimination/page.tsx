import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { Heart, ChevronRight, Phone, Mail, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Nondiscrimination Notice | Rand Medical Center",
  description:
    "Rand Medical Center's nondiscrimination notice. We comply with applicable Federal civil rights laws and do not discriminate.",
};

export default function NondiscriminationPage() {
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
            <span className="text-slate-700">Nondiscrimination Notice</span>
          </nav>

          <Badge variant="primary" size="lg" className="mb-4">
            <Heart className="h-4 w-4 mr-1" />
            Civil Rights
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">
            Nondiscrimination Notice
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Rand Medical Center is committed to providing healthcare services
            without discrimination to all individuals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2>Notice of Nondiscrimination</h2>
            <p>
              Rand Medical Center complies with applicable Federal civil rights
              laws and does not discriminate on the basis of race, color, national
              origin, age, disability, or sex. Rand Medical Center does not exclude
              people or treat them differently because of race, color, national
              origin, age, disability, or sex.
            </p>

            <h2>Services We Provide</h2>
            <p>Rand Medical Center:</p>
            <ul>
              <li>
                Provides free aids and services to people with disabilities to
                communicate effectively with us, such as:
                <ul>
                  <li>Qualified sign language interpreters</li>
                  <li>
                    Written information in other formats (large print, audio,
                    accessible electronic formats, other formats)
                  </li>
                </ul>
              </li>
              <li>
                Provides free language services to people whose primary language is
                not English, such as:
                <ul>
                  <li>Qualified interpreters</li>
                  <li>Information written in other languages</li>
                </ul>
              </li>
            </ul>
            <p>
              If you need these services, please contact our office at{" "}
              {SITE_CONFIG.phoneDisplay}.
            </p>

            <h2>Filing a Grievance</h2>
            <p>
              If you believe that Rand Medical Center has failed to provide these
              services or discriminated in another way on the basis of race, color,
              national origin, age, disability, or sex, you can file a grievance
              with:
            </p>

            <div className="not-prose bg-slate-50 rounded-xl p-6 my-6">
              <p className="font-semibold text-slate-900 mb-4">
                Civil Rights Coordinator
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

            <p>
              You can file a grievance in person or by mail, fax, or email. If you
              need help filing a grievance, our Civil Rights Coordinator is
              available to help you.
            </p>

            <h2>Filing a Complaint with the U.S. Department of Health and Human Services</h2>
            <p>
              You can also file a civil rights complaint with the U.S. Department
              of Health and Human Services, Office for Civil Rights, electronically
              through the Office for Civil Rights Complaint Portal, available at:
            </p>
            <p>
              <a
                href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                https://ocrportal.hhs.gov/ocr/portal/lobby.jsf
              </a>
            </p>
            <p>Or by mail or phone at:</p>

            <div className="not-prose bg-slate-50 rounded-xl p-6 my-6">
              <p className="font-semibold text-slate-900 mb-4">
                U.S. Department of Health and Human Services
              </p>
              <div className="space-y-1 text-slate-600">
                <p>200 Independence Avenue, SW</p>
                <p>Room 509F, HHH Building</p>
                <p>Washington, D.C. 20201</p>
                <p className="mt-4">
                  <strong>Phone:</strong> 1-800-368-1019
                </p>
                <p>
                  <strong>TDD:</strong> 1-800-537-7697
                </p>
              </div>
            </div>

            <p>
              Complaint forms are available at:{" "}
              <a
                href="http://www.hhs.gov/ocr/office/file/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                www.hhs.gov/ocr/office/file/index.html
              </a>
            </p>

            <h2>Language Assistance Services</h2>
            <p>
              Attention: If you speak a language other than English, language
              assistance services are available to you free of charge. Please call{" "}
              {SITE_CONFIG.phoneDisplay}.
            </p>

            <div className="not-prose bg-teal-50 border border-teal-200 rounded-xl p-6 my-6">
              <div className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-teal-800 mb-2">
                    Multi-Language Services
                  </p>
                  <p className="text-teal-700 text-sm">
                    We provide interpretation services in many languages including
                    Spanish, Polish, Korean, Tagalog, Arabic, Chinese, Vietnamese,
                    and more. Please call our office to request an interpreter.
                  </p>
                </div>
              </div>
            </div>

            <h3>Spanish (Español)</h3>
            <p>
              ATENCIÓN: si habla español, tiene a su disposición servicios
              gratuitos de asistencia lingüística. Llame al {SITE_CONFIG.phoneDisplay}.
            </p>

            <h3>Polish (Polski)</h3>
            <p>
              UWAGA: Jeżeli mówisz po polsku, możesz skorzystać z bezpłatnej pomocy
              językowej. Zadzwoń pod numer {SITE_CONFIG.phoneDisplay}.
            </p>

            <h3>Korean (한국어)</h3>
            <p>
              주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수
              있습니다. {SITE_CONFIG.phoneDisplay}번으로 전화해 주십시오.
            </p>

            <h3>Chinese (繁體中文)</h3>
            <p>
              注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電{" "}
              {SITE_CONFIG.phoneDisplay}。
            </p>

            <h3>Tagalog</h3>
            <p>
              PAUNAWA: Kung nagsasalita ka ng Tagalog, maaari kang gumamit ng mga
              serbisyo ng tulong sa wika nang walang bayad. Tumawag sa{" "}
              {SITE_CONFIG.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
