import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  Download,
  FileText,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Forms | Rand Medical Center",
  description:
    "Download patient forms before your appointment at Rand Medical Center. New patient registration, medical history, consent forms, and more.",
  openGraph: {
    title: "Patient Forms | Rand Medical Center Arlington Heights",
    description:
      "Save time at your appointment by completing forms ahead of time.",
  },
};

const FORMS = [
  {
    name: "New Patient Registration",
    description:
      "Complete your personal information, emergency contacts, and demographic details.",
    required: true,
  },
  {
    name: "Medical History Form",
    description:
      "Document your health history, past surgeries, current medications, and allergies.",
    required: true,
  },
  {
    name: "HIPAA Privacy Notice",
    description:
      "Review our privacy practices and sign to acknowledge receipt.",
    required: true,
  },
  {
    name: "Consent for Treatment",
    description:
      "Authorization for medical examination, treatment, and procedures.",
    required: true,
  },
  {
    name: "Insurance Information",
    description:
      "Provide your insurance details and authorize us to bill on your behalf.",
    required: true,
  },
  {
    name: "Workers' Compensation Form",
    description:
      "For work-related injuries, provide employer and injury information.",
    required: false,
  },
  {
    name: "Auto Accident Information",
    description:
      "For auto accident injuries, document accident details and insurance information.",
    required: false,
  },
  {
    name: "Medical Records Release",
    description:
      "Authorize the release of your medical records to/from other providers.",
    required: false,
  },
];

export default function PatientFormsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <FileText className="h-4 w-4 mr-1" />
              Patient Forms
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Save Time at Your{" "}
              <span className="gradient-text-medical">Appointment</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Download and complete your forms before your visit. Bringing
              completed forms helps us get you seen faster and ensures we have
              all the information needed to provide the best care.
            </p>
          </div>
        </div>
      </section>

      {/* Forms List */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Required Forms for New Patients
            </h2>
            <p className="text-slate-600">
              Please complete these forms before your first visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {FORMS.filter((f) => f.required).map((form, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-slate-900">
                        {form.name}
                      </h3>
                      <Badge className="bg-red-100 text-red-700">Required</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      {form.description}
                    </p>
                    <Button variant="outline" size="sm" disabled>
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Additional Forms
            </h2>
            <p className="text-slate-600">
              These forms are needed for specific situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FORMS.filter((f) => !f.required).map((form, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-xl text-slate-600 flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {form.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {form.description}
                    </p>
                    <Button variant="outline" size="sm" disabled>
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-6 bg-amber-50 border-amber-200">
            <CardContent className="p-0 flex items-start gap-4">
              <FileText className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  Need Help With Forms?
                </h3>
                <p className="text-sm text-amber-800">
                  If you have questions about any forms or need assistance,
                  please call us at {SITE_CONFIG.phoneDisplay}. You can also
                  complete forms when you arrive for your appointment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Bring */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                First Visit Checklist
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                What to Bring to Your Appointment
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Photo ID (driver's license or state ID)",
                "Insurance card",
                "Referral form (if required by your insurance)",
                "Completed patient forms",
                "List of current medications with dosages",
                "Recent imaging results (X-rays, MRI) on CD or electronically",
                "Medical records from other providers",
                "Payment method for copay or self-pay",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200"
                >
                  <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Ready to Schedule Your Appointment?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Once you&apos;ve completed your forms, schedule your appointment
              online or give us a call.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
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
    </>
  );
}
