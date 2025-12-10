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
  FileText,
  Users,
  CheckCircle,
  Clock,
  Mail,
  Printer,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Referral Information | Rand Medical Center",
  description:
    "Information for referring physicians and patients about referrals to Rand Medical Center. Learn how to refer a patient to our specialists.",
};

export default function ReferralsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/patients/faq" className="hover:text-teal-600">
              Patients
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Referrals</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Users className="h-4 w-4 mr-1" />
              Referral Information
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Patient{" "}
              <span className="gradient-text-medical">Referrals</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Thank you for choosing Rand Medical Center for your patient&apos;s
              care. We make the referral process simple for both physicians and
              patients.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Appointment
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

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-teal-600" />
              <span>Same-Day Appointments Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span>Quick Referral Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-teal-600" />
              <span>Detailed Reports Provided</span>
            </div>
          </div>
        </div>
      </section>

      {/* For Physicians */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              For Referring Physicians
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              How to Refer a Patient
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We&apos;ve streamlined the referral process to make it as easy as
              possible for you and your patients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Referral Methods */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Submit a Referral
              </h3>
              <div className="space-y-4">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                        <Printer className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          Fax Referral
                        </h4>
                        <p className="text-slate-600 text-sm mb-2">
                          Fax completed referral form with patient records
                        </p>
                        <p className="font-medium text-teal-600">
                          Fax: (847) 398-1660
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          Call Our Office
                        </h4>
                        <p className="text-slate-600 text-sm mb-2">
                          Speak directly with our referral coordinator
                        </p>
                        <p className="font-medium text-teal-600">
                          {SITE_CONFIG.phoneDisplay}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          Email Referral
                        </h4>
                        <p className="text-slate-600 text-sm mb-2">
                          Send secure referral via email
                        </p>
                        <p className="font-medium text-teal-600">
                          referrals@randmedicalcenter.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* What to Include */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Information to Include
              </h3>
              <Card className="p-6 bg-slate-50">
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {[
                      "Patient demographics and contact information",
                      "Insurance information and authorization if required",
                      "Reason for referral and clinical summary",
                      "Relevant medical history",
                      "Current medications",
                      "Recent diagnostic test results (X-rays, MRI, labs)",
                      "Specific questions or concerns to address",
                      "Urgency level (routine, urgent, emergent)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" download>
                    <Download className="h-5 w-5" />
                    Download Referral Form (PDF)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Accept Referrals For */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Services We Provide
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We accept referrals for a comprehensive range of medical services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Pain Management",
                services: ["Epidural injections", "Nerve blocks", "Joint injections", "Radiofrequency ablation"],
              },
              {
                title: "Orthopedics",
                services: ["Joint evaluations", "Sports injuries", "Arthroscopic surgery", "Joint replacement"],
              },
              {
                title: "Physical Therapy",
                services: ["Post-surgical rehab", "Spine rehabilitation", "Sports rehab", "Work conditioning"],
              },
              {
                title: "Internal Medicine",
                services: ["Chronic disease management", "Preventive care", "Pre-operative clearance", "Second opinions"],
              },
              {
                title: "Diagnostics",
                services: ["X-ray imaging", "Laboratory services", "Diagnostic evaluations"],
              },
              {
                title: "Workers' Comp / Auto",
                services: ["Work injury care", "Auto accident treatment", "IME evaluations", "Functional capacity"],
              },
            ].map((specialty, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    {specialty.title}
                  </h3>
                  <ul className="space-y-2">
                    {specialty.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Patients */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                For Patients
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Do You Need a Referral?
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Insurance Requirements
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Whether you need a referral depends on your insurance plan:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>HMO Plans:</strong> Usually require a referral from
                        your primary care physician
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>PPO Plans:</strong> Generally do not require a
                        referral
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Workers&apos; Comp:</strong> Your employer or insurance
                        company will direct you
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Medicare:</strong> Referrals are typically not
                        required for specialists
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 bg-teal-50 border-teal-200">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Not Sure? We Can Help
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Our staff can help verify your insurance requirements and assist
                    with obtaining any necessary referrals. Call us and we&apos;ll guide
                    you through the process.
                  </p>
                  <Button asChild>
                    <a href={SITE_CONFIG.phoneTel}>
                      <Phone className="h-5 w-5" />
                      Call {SITE_CONFIG.phoneDisplay}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                The Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                What Happens After a Referral
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "We Receive the Referral",
                  description:
                    "Our referral coordinator reviews the information and verifies insurance coverage.",
                },
                {
                  step: "2",
                  title: "Patient Contact",
                  description:
                    "We reach out to the patient within 24-48 hours to schedule an appointment.",
                },
                {
                  step: "3",
                  title: "Appointment & Evaluation",
                  description:
                    "The patient is seen by our specialist for a comprehensive evaluation.",
                },
                {
                  step: "4",
                  title: "Communication Back to You",
                  description:
                    "We send a detailed consultation report to the referring physician with our findings and treatment plan.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200"
                >
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
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
              Questions About Referrals?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our referral coordinators are here to help. Contact us with any
              questions about the referral process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Appointment
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
