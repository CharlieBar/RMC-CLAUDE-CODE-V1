import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG, PROVIDERS } from "@/lib/constants";
import {
  Award,
  Bone,
  Calendar,
  CheckCircle,
  ChevronRight,
  Phone,
  UserCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Orthopedics | Joint & Bone Care | Rand Medical Center",
  description:
    "Expert orthopedic care in Arlington Heights. Board-certified surgeons specializing in joint replacement, sports medicine, fracture care, and minimally invasive procedures.",
  openGraph: {
    title: "Orthopedic Services | Rand Medical Center",
    description:
      "Surgical and non-surgical orthopedic care for bones, joints, and musculoskeletal conditions.",
  },
};

const SERVICES = [
  {
    name: "Shoulder & Rotator Cuff",
    description:
      "Treatment for rotator cuff tears, shoulder instability, frozen shoulder, and other shoulder conditions.",
    href: "/services/orthopedics/shoulder-rotator-cuff",
  },
  {
    name: "Knee Care",
    description:
      "ACL reconstruction, meniscus repair, knee replacement, and treatment for arthritis and injuries.",
    href: "/services/orthopedics/knee",
  },
  {
    name: "Hip Treatment",
    description:
      "Hip replacement, hip arthroscopy, and treatment for hip pain and mobility issues.",
    href: "/services/orthopedics/hip",
  },
  {
    name: "Sports Injuries",
    description:
      "Comprehensive care for athletic injuries from diagnosis through return to play.",
    href: "/services/orthopedics/sports-injuries",
  },
  {
    name: "Fracture Care",
    description:
      "Treatment for broken bones, from simple fractures to complex trauma cases.",
    href: "/services/orthopedics/fractures",
  },
  {
    name: "Hand & Wrist",
    description:
      "Treatment for carpal tunnel, trigger finger, and hand injuries.",
    href: "/services/orthopedics/hand-wrist",
  },
];

const CONDITIONS = [
  "Arthritis",
  "ACL tears",
  "Meniscus tears",
  "Rotator cuff injuries",
  "Fractures",
  "Tendonitis",
  "Bursitis",
  "Carpal tunnel",
  "Joint instability",
  "Sports injuries",
  "Dislocations",
  "Ligament injuries",
];

export default function OrthopedicsPage() {
  const orthopedicSurgeons = PROVIDERS.filter(
    (p) => p.specialty === "Orthopedic Surgery"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="floating-element floating-element-1 top-20 right-[10%]" />
        <div className="floating-element floating-element-2 bottom-32 right-[25%]" />
        <div className="floating-element floating-element-3 top-1/3 left-[5%]" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge
              variant="primary"
              size="lg"
              className="mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <Bone className="h-4 w-4 mr-1" />
              Orthopedics
            </Badge>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 heading-tight animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Expert Care for{" "}
              <span className="gradient-text-medical">Bones & Joints</span>
            </h1>

            <p
              className="text-xl text-slate-600 mb-8 text-lead animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Our board-certified orthopedic surgeons provide comprehensive
              surgical and non-surgical care for musculoskeletal conditions.
              From sports injuries to joint replacement, we help restore your
              mobility and quality of life.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button size="lg" shine prominent className="group" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Services */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Orthopedic Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive care for all orthopedic conditions, from conservative
              treatment to advanced surgical procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Surgeons
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Board-Certified Orthopedic Surgeons
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {orthopedicSurgeons.map((provider) => (
              <Card key={provider.id} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                      <UserCircle className="h-16 w-16 text-slate-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {provider.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {provider.specialty}
                      </p>
                      <p className="text-slate-500 text-sm">{provider.title}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-slate-600">
                          Board Certified
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <Link href={`/providers/${provider.slug}`}>
                      View Profile
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Conditions We Treat
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgery Center */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                <Award className="h-4 w-4 mr-1" />
                Accredited Facility
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Joint Commission Accredited Surgery Center
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Many orthopedic procedures can be performed at our on-site,
                outpatient surgery center. Benefit from the same quality care in
                a more convenient, cost-effective setting.
              </p>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600"
                asChild
              >
                <Link href="/surgery-center">
                  Learn About Our Surgery Center
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {[
                "Outpatient procedures with same-day discharge",
                "Lower costs than hospital settings",
                "Dedicated orthopedic operating rooms",
                "Experienced surgical staff",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>{benefit}</span>
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
              Get Back to Moving Freely
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you&apos;re dealing with an acute injury or chronic joint pain,
              our orthopedic team can help. Schedule a consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </>
  );
}
