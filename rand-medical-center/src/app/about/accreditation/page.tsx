import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  Phone,
  Award,
  Shield,
  CheckCircle,
  BadgeCheck,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accreditation & Certifications | Rand Medical Center",
  description:
    "Rand Medical Center is Joint Commission accredited with board-certified physicians. Learn about our certifications, accreditations, and commitment to quality care.",
};

const ACCREDITATIONS = [
  {
    name: "The Joint Commission",
    type: "Gold Seal of Approval",
    description:
      "Our ambulatory surgery center has earned The Joint Commission's Gold Seal of Approval®, demonstrating our commitment to meeting the highest standards of quality and safety.",
    details: [
      "Rigorous on-site surveys by Joint Commission experts",
      "Continuous compliance with national performance standards",
      "Evidence-based protocols and procedures",
      "Patient safety and quality improvement programs",
    ],
  },
  {
    name: "Illinois Department of Public Health",
    type: "Licensed Medical Facility",
    description:
      "Rand Medical Center is fully licensed by the Illinois Department of Public Health to operate as an ambulatory surgical treatment center and medical clinic.",
    details: [
      "Annual facility inspections and compliance reviews",
      "Adherence to state health and safety regulations",
      "Proper credentialing of all medical staff",
      "Maintenance of required staffing ratios",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Board Certified Physicians",
    description:
      "Our physicians are board certified in their respective specialties, ensuring they have met rigorous standards of education, training, and expertise.",
    boards: [
      "American Board of Internal Medicine",
      "American Board of Anesthesiology (Pain Medicine)",
      "American Board of Orthopaedic Surgery",
    ],
  },
  {
    title: "Certified Medical Staff",
    description:
      "Our support staff holds appropriate certifications and maintains ongoing education to provide safe, quality care.",
    certifications: [
      "Registered Nurses (RN)",
      "Certified Medical Assistants (CMA)",
      "Certified Surgical Technologists (CST)",
      "Basic & Advanced Life Support (BLS/ACLS)",
    ],
  },
];

export default function AccreditationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/about" className="hover:text-teal-600">
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Accreditation</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Award className="h-4 w-4 mr-1" />
              Accreditation & Certifications
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Recognized for{" "}
              <span className="gradient-text-medical">Excellence</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our accreditations and certifications reflect our commitment to
              meeting the highest standards of patient care, safety, and
              quality.
            </p>
          </div>
        </div>
      </section>

      {/* Key Badges */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-amber-50 rounded-xl">
              <Award className="h-8 w-8 text-amber-600" />
              <div>
                <p className="font-semibold text-slate-900">Joint Commission</p>
                <p className="text-sm text-slate-600">Gold Seal of Approval</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-teal-50 rounded-xl">
              <BadgeCheck className="h-8 w-8 text-teal-600" />
              <div>
                <p className="font-semibold text-slate-900">Board Certified</p>
                <p className="text-sm text-slate-600">Physicians</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-xl">
              <FileCheck className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-semibold text-slate-900">State Licensed</p>
                <p className="text-sm text-slate-600">Medical Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Accreditations */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Facility Accreditation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Our Accreditations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These accreditations demonstrate that our facility meets or exceeds
              national standards for quality and patient safety.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {ACCREDITATIONS.map((accreditation, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-xl text-amber-600 flex-shrink-0">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {accreditation.name}
                      </h3>
                      <p className="text-teal-600 font-medium">
                        {accreditation.type}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">
                    {accreditation.description}
                  </p>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">
                      What This Means for Patients:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {accreditation.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Staff Credentials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Certified Healthcare Professionals
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our team maintains the highest professional certifications in their
              fields.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                      <BadgeCheck className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">{cert.description}</p>
                  <ul className="space-y-2">
                    {(cert.boards || cert.certifications)?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Shield className="h-4 w-4 mr-1" />
                Quality Commitment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Our Commitment to Excellence
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Continuous Quality Improvement",
                  description:
                    "We regularly review our outcomes and processes to identify opportunities for improvement. Our quality committee meets monthly to analyze data and implement enhancements.",
                },
                {
                  title: "Patient Safety Programs",
                  description:
                    "We maintain comprehensive patient safety protocols, including infection control programs, medication safety checks, and fall prevention measures.",
                },
                {
                  title: "Staff Education",
                  description:
                    "Our team participates in ongoing education and training to stay current with the latest medical advances and best practices.",
                },
                {
                  title: "Patient Feedback",
                  description:
                    "We actively seek patient feedback through surveys and direct communication, using this input to continuously improve our services.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Experience Quality Care
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Choose a healthcare provider that has earned recognition for
              quality and safety. Schedule your appointment with our accredited
              team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
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
        </div>
      </section>
    </>
  );
}
