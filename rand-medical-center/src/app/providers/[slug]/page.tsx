import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  PROVIDERS_DETAILED,
  getProviderBySlug,
  getAllProviderSlugs,
} from "@/lib/providers";
import {
  Award,
  Calendar,
  Check,
  ChevronRight,
  GraduationCap,
  Languages,
  MapPin,
  Phone,
  Stethoscope,
  UserCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProviderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    return { title: "Provider Not Found" };
  }

  return {
    title: `${provider.name}, ${provider.credentials} - ${provider.specialty} | Rand Medical Center`,
    description: provider.metaDescription,
    openGraph: {
      title: `${provider.name} | ${provider.specialty} in Arlington Heights`,
      description: provider.metaDescription,
    },
  };
}

export default async function ProviderPage({ params }: Props) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    notFound();
  }

  // Get other providers for the sidebar
  const otherProviders = PROVIDERS_DETAILED.filter((p) => p.slug !== slug).slice(
    0,
    3
  );

  // Physician schema for SEO
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${provider.name}, ${provider.credentials}`,
    description: provider.bio,
    url: `${SITE_CONFIG.domain}/providers/${provider.slug}`,
    image: `${SITE_CONFIG.domain}${provider.image || "/images/providers/placeholder.jpg"}`,
    jobTitle: provider.title,
    medicalSpecialty: provider.specialty,
    worksFor: {
      "@type": "MedicalOrganization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    telephone: SITE_CONFIG.phone,
    availableService: provider.specialties.map((specialty) => ({
      "@type": "MedicalProcedure",
      name: specialty,
    })),
  };

  return (
    <>
      {/* Physician Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container container-default mx-auto py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/providers" className="hover:text-teal-600">
              Providers
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">{provider.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Provider Image & Quick Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <UserCircle className="h-48 w-48 text-slate-300" />
                  </div>
                  <CardContent className="p-6">
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">
                      {provider.name}
                    </h1>
                    <p className="text-lg text-teal-600 font-medium mb-2">
                      {provider.credentials}
                    </p>
                    <p className="text-slate-600 mb-4">{provider.title}</p>

                    {provider.acceptingNewPatients && (
                      <Badge variant="success" size="lg" className="mb-4">
                        <Check className="h-4 w-4 mr-1" />
                        Accepting New Patients
                      </Badge>
                    )}

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-slate-600">
                        <Stethoscope className="h-5 w-5 text-teal-500" />
                        <span>{provider.specialty}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <Languages className="h-5 w-5 text-teal-500" />
                        <span>{provider.languages.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <MapPin className="h-5 w-5 text-teal-500" />
                        <span>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full" size="lg" asChild>
                        <Link href={SITE_CONFIG.bookingUrl}>
                          <Calendar className="h-5 w-5" />
                          Book Appointment
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={SITE_CONFIG.phoneTel}>
                          <Phone className="h-5 w-5" />
                          {SITE_CONFIG.phoneDisplay}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Provider Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <section>
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">
                  About {provider.name}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {provider.bio}
                </p>
              </section>

              {/* Education & Training */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-teal-600" />
                    Education & Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {provider.education.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-teal-500 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-teal-600" />
                    Board Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {provider.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-teal-500 mt-0.5" />
                        <span className="text-slate-600">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-teal-600" />
                    Areas of Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Conditions Treated */}
              <Card>
                <CardHeader>
                  <CardTitle>Conditions Treated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {provider.conditionsTreated.map((condition, index) => (
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
                </CardContent>
              </Card>

              {/* Procedures Performed */}
              <Card>
                <CardHeader>
                  <CardTitle>Procedures & Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {provider.proceduresPerformed.map((procedure, index) => (
                      <Link
                        key={index}
                        href={procedure.href}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-600 hover:text-teal-600"
                      >
                        <ChevronRight className="h-4 w-4" />
                        {procedure.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Providers */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Meet Our Other Providers
            </h2>
            <p className="text-slate-600">
              Our team of specialists work together to provide comprehensive care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProviders.map((otherProvider) => (
              <Link
                key={otherProvider.slug}
                href={`/providers/${otherProvider.slug}`}
                className="group"
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <UserCircle className="h-24 w-24 text-slate-300" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {otherProvider.name}, {otherProvider.credentials}
                    </h3>
                    <p className="text-sm text-teal-600">{otherProvider.specialty}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/providers">
                View All Providers
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
            Schedule Your Appointment with {provider.name.split(" ")[0]}
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward better health. Book your appointment today.
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
                Book Online
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
