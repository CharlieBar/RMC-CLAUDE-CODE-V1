import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Building2,
  Calendar,
  Check,
  ChevronRight,
  MapPin,
  Phone,
  Stethoscope,
  Activity,
  Scan,
  Scissors,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facility Tour | Rand Medical Center",
  description:
    "Take a virtual tour of Rand Medical Center's clinic, diagnostic areas, physical therapy gym, and outpatient surgery center in Arlington Heights, IL.",
  openGraph: {
    title: "Facility Tour | Rand Medical Center",
    description:
      "Explore our modern medical facility designed to provide comprehensive injury and pain care under one roof.",
  },
};

export default function FacilityPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container container-default mx-auto py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/about" className="hover:text-teal-600">
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Our Facility</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Building2 className="h-4 w-4 mr-1" />
              Our Facility
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Take a Look Inside{" "}
              <span className="gradient-text-medical">Rand Medical Center</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Take a virtual tour of Rand Medical Center's clinic, diagnostic
              areas, physical therapy gym, and outpatient surgery center in
              Arlington Heights, IL.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule a Visit
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call Our Office
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Everything Under One Roof
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Rand Medical Center was designed to keep as much of your care as
              possible under one roof. Our facility features comfortable waiting
              areas, private exam rooms, on-site diagnostics, a dedicated
              physical therapy gym, and access to an outpatient surgery center
              for advanced procedures.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              Patients appreciate that they don't have to drive all over the
              city for imaging, injections, and rehab—most services are
              available right here in Arlington Heights.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Areas */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Facility Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What You'll Find Here
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our facility is designed with your comfort and convenience in
              mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Comfortable Waiting Areas",
                description:
                  "Spacious, well-lit waiting rooms with comfortable seating, free Wi-Fi, and a calming atmosphere.",
                icon: Building2,
              },
              {
                title: "Private Exam Rooms",
                description:
                  "Modern, private examination rooms where you can discuss your condition with your provider in comfort.",
                icon: Stethoscope,
              },
              {
                title: "On-Site Diagnostics",
                description:
                  "Digital X-ray and diagnostic imaging available on-site so you don't need to travel elsewhere.",
                icon: Scan,
              },
              {
                title: "Physical Therapy Gym",
                description:
                  "A dedicated rehabilitation space with modern equipment for physical therapy and exercise programs.",
                icon: Activity,
              },
              {
                title: "Procedure Rooms",
                description:
                  "Specialized rooms for injections and minimally invasive pain management procedures.",
                icon: Stethoscope,
              },
              {
                title: "Surgery Center Access",
                description:
                  "Access to our affiliated outpatient surgery center for advanced orthopedic procedures.",
                icon: Scissors,
              },
            ].map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mb-4">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-slate-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Facility */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Convenience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Why Patients Choose Our Facility
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                When you're dealing with an injury or chronic pain, the last
                thing you need is the hassle of traveling to multiple locations
                for different services. Our integrated facility means:
              </p>

              <ul className="space-y-4">
                {[
                  "One convenient location for consultations, imaging, treatment, and rehab",
                  "Reduced travel time and fewer appointments to coordinate",
                  "Better communication between your care team",
                  "Faster results and more efficient care",
                  "Easy access with ample parking",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-500 mt-1" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-teal-50 border-teal-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Our Location
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                  {SITE_CONFIG.address.zip}
                </p>
                <p className="text-slate-600 mb-6">
                  Conveniently located in Arlington Heights, we're easily
                  accessible from Mount Prospect, Palatine, Des Plaines, Rolling
                  Meadows, and surrounding northwest Chicago suburbs.
                </p>
                <Button asChild>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Services Available at Our Facility
            </h2>
            <p className="text-slate-600">
              Comprehensive care for injuries and pain conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pain Management",
                description:
                  "Advanced injections and procedures for chronic pain relief",
                href: "/services/pain-management",
              },
              {
                title: "Physical Therapy",
                description:
                  "Rehabilitation programs in our on-site therapy gym",
                href: "/services/physical-therapy",
              },
              {
                title: "Orthopedics",
                description:
                  "Expert care for bone, joint, and musculoskeletal conditions",
                href: "/services/orthopedics",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-teal-600 font-medium">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-600 text-white">
        <div className="container container-default mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Visit Our Facility
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of coordinated care in a modern,
            comfortable environment. Schedule your appointment today.
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
                Book Appointment
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
