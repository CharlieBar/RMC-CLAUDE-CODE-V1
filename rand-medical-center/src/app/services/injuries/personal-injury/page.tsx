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
  Scale,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Injury Treatment | Rand Medical Center",
  description:
    "Expert medical care for personal injury cases in Arlington Heights. Comprehensive documentation for legal claims, same-day appointments, and complete treatment until recovery.",
  openGraph: {
    title: "Personal Injury Medical Care | Rand Medical Center Arlington Heights",
    description:
      "Medical treatment and documentation for personal injury cases. Same-day appointments, thorough records for your claim.",
  },
};

const INJURY_TYPES = [
  { name: "Slip and Fall Injuries", description: "Fractures, sprains, head injuries, back injuries" },
  { name: "Dog Bites & Animal Attacks", description: "Wound care, infection prevention, scarring treatment" },
  { name: "Premises Liability", description: "Injuries from unsafe property conditions" },
  { name: "Sports & Recreation Injuries", description: "Injuries from equipment failure or negligence" },
  { name: "Assault Injuries", description: "Physical trauma from violent incidents" },
  { name: "Product Liability Injuries", description: "Injuries from defective products" },
];

export default function PersonalInjuryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/services" className="hover:text-teal-600">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Personal Injury</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Scale className="h-4 w-4 mr-1" />
              Personal Injury
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Personal Injury{" "}
              <span className="gradient-text-medical">Medical Care</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              When someone else&apos;s negligence causes your injury, you deserve
              proper medical care and thorough documentation to support your
              claim. We provide comprehensive treatment and work with your legal
              team to ensure your case is fully documented.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-800">
                    Documentation Matters
                  </p>
                  <p className="text-blue-700 text-sm">
                    Proper medical documentation is essential for personal injury
                    claims. We provide detailed records that clearly connect your
                    injuries to the incident.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
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

      {/* Key Features */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Prompt Appointments", description: "Timely evaluation after your injury" },
              { icon: FileText, title: "Legal Documentation", description: "Detailed records for your case" },
              { icon: Stethoscope, title: "Complete Treatment", description: "Care until maximum recovery" },
              { icon: Shield, title: "Expert Testimony", description: "Medical opinions if needed" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Personal Injuries */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Cases We Handle
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Types of Personal Injuries We Treat
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide medical care for all types of personal injury cases,
              with experience in the specific documentation needs for legal
              claims.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {INJURY_TYPES.map((injury, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {injury.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {injury.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Your Case */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Supporting Your Claim
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                How We Help Your Personal Injury Case
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                A successful personal injury claim requires clear medical
                evidence. We provide thorough documentation that establishes:
              </p>
              <ul className="space-y-4">
                {[
                  "The nature and extent of your injuries",
                  "How the injuries are connected to the incident",
                  "The treatment you needed and received",
                  "Your prognosis and any permanent limitations",
                  "The medical necessity of your care",
                  "Any future medical needs related to the injury",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Our Documentation Includes
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Initial Evaluation Report",
                      description: "Detailed assessment of your injuries immediately after the incident",
                    },
                    {
                      title: "Treatment Records",
                      description: "Complete documentation of all care provided",
                    },
                    {
                      title: "Progress Notes",
                      description: "Ongoing documentation of your recovery",
                    },
                    {
                      title: "Diagnostic Results",
                      description: "X-rays, MRI findings, and lab work",
                    },
                    {
                      title: "Narrative Reports",
                      description: "Detailed medical opinions for your attorney",
                    },
                    {
                      title: "Causation Statements",
                      description: "Connecting your injuries to the incident",
                    },
                  ].map((item, index) => (
                    <li key={index} className="border-b border-slate-100 pb-3 last:border-0">
                      <h4 className="font-medium text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working with Your Attorney */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Legal Coordination
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Working with Your Legal Team
              </h2>
              <p className="text-lg text-slate-600">
                We understand the medical-legal process and work effectively with
                attorneys to support your case.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Records Requests",
                  description:
                    "We respond promptly to requests for medical records from your attorney, ensuring they have the documentation needed for your case.",
                },
                {
                  title: "Narrative Reports",
                  description:
                    "Upon request, we provide detailed narrative reports explaining your injuries, treatment, and prognosis in clear, professional terms.",
                },
                {
                  title: "Deposition Testimony",
                  description:
                    "If needed, our physicians are available for depositions or court testimony to explain your medical condition and treatment.",
                },
                {
                  title: "Letter of Protection",
                  description:
                    "We accept Letters of Protection, allowing you to receive treatment now with payment from your eventual settlement.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-slate-50 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
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

      {/* Payment Options */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Payment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Flexible Payment for Injury Cases
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We understand that personal injury situations create financial
              stress. We offer several payment options to ensure you can get the
              care you need:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Health Insurance",
                  description:
                    "We bill your health insurance and handle coordination with third-party liability claims.",
                },
                {
                  title: "Letter of Protection",
                  description:
                    "We accept LOPs from attorneys, deferring payment until your case settles.",
                },
                {
                  title: "Auto Insurance",
                  description:
                    "For motor vehicle accidents, we bill PIP/MedPay coverage directly.",
                },
              ].map((option, index) => (
                <Card key={index} className="p-6 text-left">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-sm text-slate-600">{option.description}</p>
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
              Injured Due to Someone Else&apos;s Negligence?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Get the medical care and documentation you need for your personal
              injury case. We&apos;ll provide expert treatment and work with your
              legal team to support your claim.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
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
