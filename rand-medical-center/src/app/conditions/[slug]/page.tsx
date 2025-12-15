import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { CONDITIONS, getConditionBySlug, getAllConditionSlugs } from "@/lib/conditions";
import {
  AlertCircle,
  AlertTriangle,
  Calendar,
  CheckCircle,
  ChevronRight,
  Phone,
  Stethoscope,
} from "lucide-react";

interface ConditionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllConditionSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return {
      title: "Condition Not Found | Rand Medical Center",
    };
  }

  return {
    title: `${condition.name} Treatment | Rand Medical Center`,
    description: condition.metaDescription,
    openGraph: {
      title: `${condition.name} Treatment | Rand Medical Center Arlington Heights`,
      description: condition.metaDescription,
    },
  };
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const relatedConditions = condition.relatedConditions
    .map((slug) => CONDITIONS.find((c) => c.slug === slug))
    .filter(Boolean);

  // MedicalCondition schema for SEO
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: condition.description,
    possibleTreatment: condition.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t.name,
    })),
    signOrSymptom: condition.symptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      name: s,
    })),
    associatedAnatomy: {
      "@type": "AnatomicalStructure",
      name: condition.name.includes("Back") || condition.name.includes("Spine")
        ? "Spine"
        : condition.name.includes("Knee")
        ? "Knee"
        : condition.name.includes("Shoulder")
        ? "Shoulder"
        : condition.name.includes("Hip")
        ? "Hip"
        : condition.name.includes("Neck")
        ? "Cervical Spine"
        : "Musculoskeletal System",
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalConditionSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/conditions" className="hover:text-teal-600">
                Conditions
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-slate-700">{condition.name}</span>
            </nav>

            <Badge variant="primary" size="lg" className="mb-6">
              <Stethoscope className="h-4 w-4 mr-1" />
              Condition
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              {condition.name}{" "}
              <span className="gradient-text-medical">Treatment</span>
            </h1>

            <p className="text-xl text-slate-600 mb-4 leading-relaxed">
              {condition.description}
            </p>

            {condition.overview && (
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                {condition.overview}
              </p>
            )}

            {!condition.overview && <div className="mb-4" />}

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

      {/* Causes & Symptoms */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Causes */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Common Causes
                  </h2>
                </div>
                <ul className="space-y-3">
                  {condition.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{cause}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Symptoms */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Symptoms</h2>
                </div>
                <ul className="space-y-3">
                  {condition.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to See a Doctor */}
      {condition.whenToSeeDoctor && condition.whenToSeeDoctor.length > 0 && (
        <section className="section bg-amber-50">
          <div className="container container-default mx-auto">
            <Card className="p-8 border-amber-200 bg-white">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    When to See a Doctor for {condition.name}
                  </h2>
                </div>
                <p className="text-slate-600 mb-6">
                  While some cases of {condition.name.toLowerCase()} can be managed with home care, you should seek medical attention if you experience any of the following:
                </p>
                <ul className="space-y-3 mb-6">
                  {condition.whenToSeeDoctor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600" asChild>
                    <Link href={SITE_CONFIG.bookingUrl}>
                      <Calendar className="h-5 w-5" />
                      Schedule an Evaluation
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={SITE_CONFIG.phoneTel}>
                      <Phone className="h-5 w-5" />
                      Call {SITE_CONFIG.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Treatments */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Treatment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              How We Treat {condition.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our specialists offer multiple treatment approaches to address your
              condition based on its severity and your individual needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {condition.treatments.map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {treatment.name}
                  </h3>
                  <span className="text-sm text-slate-500">
                    Learn about this treatment
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Conditions */}
      {relatedConditions.length > 0 && (
        <section className="section bg-white">
          <div className="container container-default mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Related Conditions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                You May Also Be Interested In
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedConditions.map((related) => (
                <Link
                  key={related!.slug}
                  href={`/conditions/${related!.slug}`}
                  className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all"
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
              Ready to Find Relief from {condition.name}?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our specialists will evaluate your condition and create a
              personalized treatment plan to help you get back to living without
              pain.
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
