import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { TREATMENTS, getTreatmentBySlug, getAllTreatmentSlugs } from "@/lib/treatments";
import {
  Activity,
  AlertTriangle,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Phone,
  Syringe,
  UserCheck,
} from "lucide-react";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Rand Medical Center",
    };
  }

  return {
    title: `${treatment.name} | Pain Management | Rand Medical Center`,
    description: treatment.metaDescription,
    openGraph: {
      title: `${treatment.name} in Arlington Heights | Rand Medical Center`,
      description: treatment.metaDescription,
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatment.relatedTreatments
    .map((slug) => TREATMENTS.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/services/pain-management" className="hover:text-teal-600">
                Pain Management
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-slate-700">{treatment.name}</span>
            </nav>

            <Badge variant="primary" size="lg" className="mb-6">
              <Syringe className="h-4 w-4 mr-1" />
              Treatment
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              {treatment.name}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {treatment.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200">
                <Clock className="h-4 w-4 text-teal-600" />
                <span className="text-sm text-slate-600">{treatment.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200">
                <Activity className="h-4 w-4 text-teal-600" />
                <span className="text-sm text-slate-600">Outpatient Procedure</span>
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
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & How It Works */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                Overview
              </Badge>
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">
                Understanding {treatment.name}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {treatment.overview}
              </p>
            </div>

            <div>
              <Badge variant="secondary" className="mb-4">
                How It Works
              </Badge>
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">
                The Science Behind the Treatment
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {treatment.howItWorks}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated & Benefits */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Conditions */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Conditions Treated
                  </h2>
                </div>
                <ul className="space-y-3">
                  {treatment.conditions.map((condition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Benefits</h2>
                </div>
                <ul className="space-y-3">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              The Procedure
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here&apos;s what happens during your {treatment.name.toLowerCase()} procedure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {treatment.procedure.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {step.step}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recovery & Risks */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recovery */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Recovery
              </Badge>
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">
                After Your Procedure
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {treatment.recovery}
              </p>
            </div>

            {/* Risks */}
            <Card className="p-8 border-amber-200 bg-amber-50/50">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Potential Risks
                  </h2>
                </div>
                <p className="text-slate-600 mb-4">
                  All medical procedures carry some risk. Serious complications are rare with {treatment.name.toLowerCase()}.
                </p>
                <ul className="space-y-2">
                  {treatment.risks.map((risk, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{risk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is a Candidate */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <UserCheck className="h-4 w-4 mr-1" />
                Candidacy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Is {treatment.name} Right for You?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {treatment.candidateFor.map((candidate, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100"
                >
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{candidate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container container-default mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Related Treatments
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Other Treatments You May Consider
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedTreatments.map((related) => (
                <Link
                  key={related!.slug}
                  href={`/services/pain-management/${related!.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {related!.name}
                  </h3>
                  <span className="inline-flex items-center text-teal-600 text-sm font-medium">
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Learn More About {treatment.name}?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Schedule a consultation with our pain management specialists to
              determine if this treatment is right for your condition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
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
