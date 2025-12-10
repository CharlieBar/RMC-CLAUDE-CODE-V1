import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { PROVIDERS_DATA, getProviderBySlug, getAllProviderSlugs } from "@/lib/providers";
import {
  Calendar,
  ChevronRight,
  Phone,
  UserRound,
  Award,
  GraduationCap,
  Languages,
  Stethoscope,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";

interface ProviderPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProviderSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProviderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    return {
      title: "Provider Not Found | Rand Medical Center",
    };
  }

  return {
    title: `${provider.name}, ${provider.credentials} | Rand Medical Center`,
    description: provider.metaDescription,
    openGraph: {
      title: `${provider.name}, ${provider.credentials} | Rand Medical Center Arlington Heights`,
      description: provider.metaDescription,
    },
  };
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    notFound();
  }

  // Get other providers for the "Meet Our Team" section
  const otherProviders = PROVIDERS_DATA.filter((p) => p.id !== provider.id).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/providers" className="hover:text-teal-600">
              Providers
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">{provider.name}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Provider Image */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg">
                <UserRound className="h-32 w-32 text-slate-400" />
              </div>
              {provider.acceptsNewPatients && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-600 bg-green-50 rounded-lg py-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Accepting New Patients</span>
                </div>
              )}
            </div>

            {/* Provider Info */}
            <div className="lg:col-span-2">
              <Badge variant="primary" size="lg" className="mb-4">
                <Stethoscope className="h-4 w-4 mr-1" />
                {provider.specialty}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-2">
                {provider.name}
              </h1>
              <p className="text-xl text-slate-500 mb-2">{provider.credentials}</p>
              <p className="text-lg text-teal-600 font-medium mb-6">
                {provider.title}
              </p>

              {/* Languages */}
              <div className="flex items-center gap-3 mb-6">
                <Languages className="h-5 w-5 text-slate-400" />
                <span className="text-slate-600">
                  Languages: {provider.languages.join(", ")}
                </span>
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {provider.bio}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href={SITE_CONFIG.bookingUrl}>
                    <Calendar className="h-5 w-5" />
                    Book with {provider.name.split(" ")[0]}
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
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Education & Training
                  </h2>
                </div>
                <ul className="space-y-3">
                  {provider.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Board Certifications
                  </h2>
                </div>
                <ul className="space-y-3">
                  {provider.certifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Areas of Focus
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {provider.specializations.map((item, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Providers */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Other Providers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our team of specialists works together to provide comprehensive care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherProviders.map((other) => (
              <Link
                key={other.id}
                href={`/providers/${other.slug}`}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mx-auto mb-4">
                  <UserRound className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {other.name}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{other.specialty}</p>
                <span className="inline-flex items-center text-teal-600 text-sm font-medium">
                  View Profile
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/providers">
                View All Providers
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Schedule with {provider.name.split(" ")[0]}?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Take the first step toward better health. Book an appointment
              online or call our office to speak with a scheduling coordinator.
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
