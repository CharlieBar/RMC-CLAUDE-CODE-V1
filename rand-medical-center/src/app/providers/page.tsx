import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { PROVIDERS_DETAILED } from "@/lib/providers";
import {
  Calendar,
  ChevronRight,
  GraduationCap,
  Languages,
  Phone,
  Stethoscope,
  UserCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Providers | Rand Medical Center",
  description:
    "Meet our team of board-certified physicians and specialists at Rand Medical Center in Arlington Heights. Pain management, orthopedics, internal medicine, and more.",
  openGraph: {
    title: "Meet Our Providers | Rand Medical Center",
    description:
      "Board-certified specialists in pain management, orthopedic surgery, and internal medicine serving Arlington Heights.",
  },
};

export default function ProvidersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Users className="h-4 w-4 mr-1" />
              Our Team
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Meet Our{" "}
              <span className="gradient-text-medical">Board-Certified Specialists</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our team of experienced physicians and healthcare providers are
              committed to delivering compassionate, expert care. Each brings
              specialized training and a patient-centered approach to help you
              achieve your health goals.
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

      {/* Providers Grid */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROVIDERS_DETAILED.map((provider) => (
              <Card key={provider.slug} className="group overflow-hidden">
                <Link href={`/providers/${provider.slug}`}>
                  {/* Provider Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserCircle className="h-32 w-32 text-slate-300" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium flex items-center gap-1">
                        View Profile <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-1">
                      {provider.name}, {provider.credentials}
                    </h2>
                    <p className="text-teal-600 font-medium mb-3">
                      {provider.specialty}
                    </p>
                    <p className="text-slate-500 text-sm mb-4">{provider.title}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2 text-slate-600">
                        <Stethoscope className="h-4 w-4 mt-0.5 text-teal-500" />
                        <span>
                          {provider.specialties.slice(0, 3).join(", ")}
                          {provider.specialties.length > 3 && "..."}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Languages className="h-4 w-4 text-teal-500" />
                        <span>{provider.languages.join(", ")}</span>
                      </div>
                      {provider.acceptingNewPatients && (
                        <Badge variant="success" size="sm">
                          Accepting New Patients
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Commitment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Why Patients Trust Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our providers work together to deliver comprehensive, coordinated
              care tailored to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Board Certified",
                description:
                  "All our physicians are board certified in their specialties with extensive training.",
              },
              {
                icon: Users,
                title: "Team Approach",
                description:
                  "Our specialists collaborate to provide integrated care across all our services.",
              },
              {
                icon: Stethoscope,
                title: "Specialized Expertise",
                description:
                  "From pain management to orthopedics, access specialists in one convenient location.",
              },
              {
                icon: Languages,
                title: "Multilingual Care",
                description:
                  "Our team speaks multiple languages to better serve our diverse community.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-slate-200"
              >
                <div className="p-4 bg-teal-100 rounded-xl text-teal-600 w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Ready to Schedule Your Appointment?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our providers are accepting new patients. Book your appointment
              today and experience the difference of personalized, expert care.
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
