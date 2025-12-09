import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  CreditCard,
  DollarSign,
  FileText,
  HelpCircle,
  Phone,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Rand Medical Center",
  description:
    "Insurance information and self-pay options at Rand Medical Center. We accept most major insurance plans and offer flexible payment options for uninsured patients.",
  openGraph: {
    title: "Insurance & Pricing | Rand Medical Center Arlington Heights",
    description:
      "Learn about accepted insurance plans and payment options for your medical care.",
  },
};

const ACCEPTED_INSURANCE = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Humana",
  "Medicare",
  "United Healthcare",
  "TriCare",
  "Workers' Compensation",
  "Auto Insurance (PIP/MedPay)",
  "Personal Injury Liens",
];

export default function InsurancePricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <CreditCard className="h-4 w-4 mr-1" />
              Insurance & Pricing
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Let&apos;s Talk About{" "}
              <span className="gradient-text-medical">Paying for Care</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Nobody likes surprise bills. We&apos;ll tell you what to expect before
              your appointment—whether you&apos;re using insurance, paying out of
              pocket, or dealing with an injury claim.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Verify Your Insurance
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Shield className="h-4 w-4 mr-1" />
                Accepted Insurance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                We Probably Take Your Insurance
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Here are the plans we work with most often. Don&apos;t see yours? Give
                us a call—we may still accept it. And if your plan requires a
                referral or prior authorization, we&apos;ll help you figure that out.
              </p>

              <Card className="p-6 bg-amber-50 border-amber-200">
                <CardContent className="p-0 flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      Not Sure About Your Coverage?
                    </h3>
                    <p className="text-sm text-amber-800">
                      Call us at {SITE_CONFIG.phoneDisplay} and our team will
                      verify your benefits before your visit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {ACCEPTED_INSURANCE.map((insurance, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                  >
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700">{insurance}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                ...and many other plans. Contact us to verify your specific plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <DollarSign className="h-4 w-4 mr-1" />
              Self-Pay Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              No Insurance? No Problem.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We get it—not everyone has insurance, and that shouldn&apos;t stop you
              from getting care. Here&apos;s how we make it work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="p-4 bg-teal-100 rounded-2xl text-teal-600 w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  No Surprise Bills
                </h3>
                <p className="text-sm text-slate-600">
                  We&apos;ll tell you the cost upfront, before your appointment. You&apos;ll
                  know exactly what you&apos;re paying for.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="p-4 bg-teal-100 rounded-2xl text-teal-600 w-fit mx-auto mb-4">
                  <CreditCard className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Payment Plans Available
                </h3>
                <p className="text-sm text-slate-600">
                  Can&apos;t pay all at once? We can set up a payment plan that works
                  for your budget.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="p-4 bg-teal-100 rounded-2xl text-teal-600 w-fit mx-auto mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  It&apos;s Your Right
                </h3>
                <p className="text-sm text-slate-600">
                  Federal law says you can ask for a written estimate before
                  your appointment. Just ask—we&apos;re happy to provide one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Injury Claims */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                Injury Cases
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Injured in an Accident or at Work?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Don&apos;t worry about how to pay right now—focus on getting better.
                Your car insurance (PIP/MedPay) or workers&apos; comp should cover
                treatment. We deal with the paperwork and the insurance companies
                so you don&apos;t have to.
              </p>
              <div className="space-y-4">
                {[
                  "Auto accident injury treatment",
                  "Workers' compensation cases",
                  "Personal injury lien arrangements",
                  "Comprehensive documentation for claims",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-white text-slate-900">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  Injured in an Accident?
                </h3>
                <p className="text-slate-600 mb-6">
                  Don&apos;t delay treatment. We can help you understand your
                  coverage options and coordinate with your insurance.
                </p>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href={SITE_CONFIG.phoneTel}>
                      <Phone className="h-4 w-4" />
                      Call {SITE_CONFIG.phoneDisplay}
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services/injuries/motor-vehicle-accidents">
                      Learn About Injury Care
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Quick Answers to Money Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I know if you take my insurance?",
                a: "Give us a call at " +
                  SITE_CONFIG.phoneDisplay +
                  " and have your insurance card handy. We'll check your coverage and tell you what to expect for out-of-pocket costs.",
              },
              {
                q: "I don't have insurance. Can I still come in?",
                a: "Absolutely. We'll give you an upfront price before your appointment, and we can set up a payment plan if you need one.",
              },
              {
                q: "Do I need a referral from my primary care doctor?",
                a: "Depends on your plan. HMOs usually need a referral; PPOs usually don't. Not sure? We can look it up for you.",
              },
              {
                q: "What should I bring to my appointment?",
                a: "Your insurance card, photo ID, any referral or prior authorization forms, recent imaging (X-rays, MRIs), and a list of your current medications.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/patients/faq"
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
            >
              View All FAQs
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Insurance is confusing—we get it. Call us and we&apos;ll walk you through
              your coverage, what you&apos;ll owe, and any paperwork you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
