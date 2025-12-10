import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { PROVIDERS_DATA } from "@/lib/providers";
import {
  Calendar,
  ChevronRight,
  Phone,
  UserRound,
  Award,
  Languages,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Providers | Rand Medical Center",
  description:
    "Meet the experienced physicians and healthcare providers at Rand Medical Center. Board-certified specialists in pain management, orthopedics, internal medicine, and more.",
  openGraph: {
    title: "Our Medical Providers | Rand Medical Center Arlington Heights",
    description:
      "Board-certified physicians and specialists dedicated to your care. Meet our team.",
  },
};

// Group providers by specialty
const PROVIDER_SPECIALTIES = [
  {
    name: "Internal Medicine",
    providers: PROVIDERS_DATA.filter((p) => p.specialty === "Internal Medicine"),
  },
  {
    name: "Pain Management",
    providers: PROVIDERS_DATA.filter((p) => p.specialty === "Pain Management"),
  },
  {
    name: "Orthopedic Surgery",
    providers: PROVIDERS_DATA.filter((p) => p.specialty === "Orthopedic Surgery"),
  },
  {
    name: "General Medicine",
    providers: PROVIDERS_DATA.filter((p) => p.specialty === "General Medicine"),
  },
].filter((group) => group.providers.length > 0);

export default function ProvidersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <UserRound className="h-4 w-4 mr-1" />
              Our Providers
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Meet Your{" "}
              <span className="gradient-text-medical">Care Team</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our board-certified physicians and healthcare providers bring
              decades of combined experience to your care. Each member of our
              team is committed to providing compassionate, personalized
              treatment.
            </p>

            <div className="flex flex-wrap gap-4">
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

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-teal-600" />
              <span>Board Certified Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-teal-600" />
              <span>Multilingual Staff</span>
            </div>
          </div>
        </div>
      </section>

      {/* Providers by Specialty */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          {PROVIDER_SPECIALTIES.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
                {group.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {group.providers.map((provider) => (
                  <Card
                    key={provider.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Provider Image Placeholder */}
                        <div className="sm:w-40 h-48 sm:h-auto bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                          <UserRound className="h-20 w-20 text-slate-400" />
                        </div>
                        {/* Provider Info */}
                        <div className="flex-1 p-6">
                          <div className="mb-2">
                            <h3 className="text-xl font-bold text-slate-900">
                              {provider.name}
                            </h3>
                            <p className="text-sm text-slate-500">
                              {provider.credentials}
                            </p>
                          </div>
                          <p className="text-teal-600 font-medium mb-3">
                            {provider.title}
                          </p>
                          <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                            {provider.bio}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {provider.languages.map((lang, i) => (
                              <Badge key={i} variant="secondary" size="sm">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                          <Link
                            href={`/providers/${provider.slug}`}
                            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                          >
                            View Full Profile
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Providers Quick List */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Quick Reference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Provider Directory
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on any provider below to learn more about their background
              and specializations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {PROVIDERS_DATA.map((provider) => (
              <Link
                key={provider.id}
                href={`/providers/${provider.slug}`}
                className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
                  <UserRound className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors truncate">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-slate-500 truncate">
                    {provider.specialty}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Meet Your Provider?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Schedule an appointment with one of our experienced providers.
              We&apos;re accepting new patients and look forward to helping you
              achieve your health goals.
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
