import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/lib/constants";
import {
  TREATMENTS,
  getTreatmentBySlug,
  getAllTreatmentSlugs,
} from "@/lib/treatments";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  HelpCircle,
  ListChecks,
  Phone,
  RefreshCw,
  Stethoscope,
  Syringe,
  Target,
  UserCheck,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return { title: "Treatment Not Found" };
  }

  return {
    title: `${treatment.name} in Arlington Heights, IL | Rand Medical Center`,
    description: treatment.metaDescription,
    openGraph: {
      title: `${treatment.name} | Rand Medical Center`,
      description: treatment.metaDescription,
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  // Get other treatments for suggestions
  const otherTreatments = TREATMENTS.filter((t) => t.slug !== slug).slice(0, 3);

  // MedicalProcedure schema for SEO
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.description,
    howPerformed: treatment.howItWorks,
    preparation: treatment.preparation.join(". "),
    procedureType: "https://schema.org/NoninvasiveProcedure",
    followup: treatment.recovery,
    status: "https://schema.org/ActiveActionStatus",
  };

  // FAQPage schema for the FAQs
  const faqSchema = treatment.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container container-default mx-auto py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/treatments" className="hover:text-teal-600">
              Treatments
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">{treatment.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge variant="primary" size="lg" className="mb-4">
                <Syringe className="h-4 w-4 mr-1" />
                Treatment
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-6">
                {treatment.name}
              </h1>

              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                {treatment.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="h-5 w-5 text-teal-500" />
                  <span>{treatment.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <RefreshCw className="h-5 w-5 text-teal-500" />
                  <span>{treatment.frequency}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href={SITE_CONFIG.bookingUrl}>
                    <Calendar className="h-5 w-5" />
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={SITE_CONFIG.phoneTel}>
                    <Phone className="h-5 w-5" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Duration</div>
                    <div className="font-medium text-slate-900">
                      {treatment.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Frequency</div>
                    <div className="font-medium text-slate-900">
                      {treatment.frequency}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">
                      Conditions Treated
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {treatment.relatedConditions.map((condition, index) => (
                        <Badge key={index} variant="outline" size="sm">
                          {condition.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <hr className="my-4" />
                  <Button className="w-full" asChild>
                    <Link href={SITE_CONFIG.bookingUrl}>
                      Book Appointment
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
                How It Works
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {treatment.howItWorks}
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-100 rounded-lg">
                <UserCheck className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
                Is This Treatment Right for You?
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              This treatment may be recommended if you:
            </p>
            <ul className="space-y-3">
              {treatment.idealCandidates.map((candidate, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{candidate}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Procedure */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Stethoscope className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
                What to Expect During the Procedure
              </h2>
            </div>
            <ol className="space-y-4">
              {treatment.procedure.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-slate-600 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Preparation & Risks */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Preparation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-teal-600" />
                  How to Prepare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {treatment.preparation.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Risks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Potential Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  As with any medical procedure, there are potential risks:
                </p>
                <ul className="space-y-2">
                  {treatment.risks.map((risk, index) => (
                    <li
                      key={index}
                      className="text-slate-600 text-sm flex items-start gap-2"
                    >
                      <span className="text-amber-500">•</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery & Results */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
                Recovery
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {treatment.recovery}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
                Expected Results
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {treatment.expectedResults}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {treatment.faqs.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container container-default mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <HelpCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {treatment.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-white rounded-lg border border-slate-200 px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Related Conditions & Services */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Related Conditions */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Conditions This Treats
              </h3>
              <div className="space-y-2">
                {treatment.relatedConditions.map((condition, index) => (
                  <Link
                    key={index}
                    href={condition.href}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-600 hover:text-teal-600"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {condition.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Related Services
              </h3>
              <div className="space-y-2">
                {treatment.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-600 hover:text-teal-600"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Treatments */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Explore Other Treatments
            </h2>
            <p className="text-slate-600">
              Discover additional treatment options that may be right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherTreatments.map((otherTreatment) => (
              <Link
                key={otherTreatment.slug}
                href={`/treatments/${otherTreatment.slug}`}
                className="group"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600 w-fit mb-4">
                      <Syringe className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {otherTreatment.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {otherTreatment.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/treatments">
                View All Treatments
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-600 text-white">
        <div className="container container-default mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Discuss {treatment.name}?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our specialists to see if this treatment
            is right for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-teal-600 hover:bg-slate-100"
              asChild
            >
              <Link href={SITE_CONFIG.bookingUrl}>
                <Calendar className="h-5 w-5" />
                Book Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href={SITE_CONFIG.phoneTel}>
                <Phone className="h-5 w-5" />
                {SITE_CONFIG.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
