import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  Phone,
  Building2,
  Stethoscope,
  Activity,
  Dumbbell,
  Microscope,
  Car,
  Clock,
  CheckCircle,
  MapPin,
  Accessibility,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Facility | Rand Medical Center",
  description:
    "Tour the Rand Medical Center facility in Arlington Heights. Modern medical equipment, comfortable exam rooms, on-site surgery center, physical therapy, and diagnostics all under one roof.",
};

const FACILITY_FEATURES = [
  {
    icon: Building2,
    title: "Modern Medical Office",
    description:
      "Our 15,000 square foot facility features comfortable waiting areas, private exam rooms, and state-of-the-art medical equipment.",
  },
  {
    icon: Activity,
    title: "Ambulatory Surgery Center",
    description:
      "Joint Commission accredited outpatient surgery center for minimally invasive procedures with same-day discharge.",
  },
  {
    icon: Dumbbell,
    title: "Physical Therapy Gym",
    description:
      "Fully equipped rehabilitation facility with modern exercise equipment and private treatment areas.",
  },
  {
    icon: Microscope,
    title: "On-Site Diagnostics",
    description:
      "Digital X-ray imaging and laboratory services available on-site for convenient, same-day results.",
  },
];

const AMENITIES = [
  "Comfortable, modern waiting areas",
  "Free patient Wi-Fi",
  "Private exam and treatment rooms",
  "Wheelchair accessible throughout",
  "Clean, sanitized environment",
  "Friendly, welcoming staff",
  "Convenient check-in process",
  "On-site parking",
];

export default function FacilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/about" className="hover:text-teal-600">
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Our Facility</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Building2 className="h-4 w-4 mr-1" />
              Our Facility
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Comprehensive Care{" "}
              <span className="gradient-text-medical">Under One Roof</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our modern facility in Arlington Heights brings together
              everything you need for your healthcare journey—from diagnosis to
              treatment to rehabilitation—in one convenient location.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Visit
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <MapPin className="h-5 w-5" />
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="h-5 w-5 text-teal-600" />
              <span>{SITE_CONFIG.address.full}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="h-5 w-5 text-teal-600" />
              <span>{SITE_CONFIG.hours.weekdays}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Car className="h-5 w-5 text-teal-600" />
              <span>Free Parking Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Space
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              State-of-the-Art Facility
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every aspect of our facility is designed with your comfort and
              care in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FACILITY_FEATURES.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600 flex-shrink-0">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Under One Roof */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge variant="secondary" className="mb-4">
                Convenience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Everything in One Location
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                No need to travel between multiple facilities. At Rand Medical
                Center, you can receive comprehensive care all in one place:
              </p>
              <ul className="space-y-3">
                {[
                  "Physician consultations and examinations",
                  "Pain management treatments and injections",
                  "Outpatient surgical procedures",
                  "Physical therapy and rehabilitation",
                  "X-ray and diagnostic imaging",
                  "Laboratory testing",
                  "Workers' compensation evaluations",
                  "Pre-operative and post-operative care",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Patient Amenities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {AMENITIES.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Accessibility className="h-4 w-4 mr-1" />
                Accessibility
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Accessible to All Patients
              </h2>
              <p className="text-lg text-slate-600">
                Our facility is designed to be fully accessible and welcoming to
                all patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Wheelchair Access",
                  description:
                    "Level entrance, wide doorways, and wheelchair-accessible exam rooms throughout the facility.",
                },
                {
                  title: "Accessible Parking",
                  description:
                    "Designated accessible parking spaces located near the building entrance.",
                },
                {
                  title: "Accessible Restrooms",
                  description:
                    "ADA-compliant restrooms available for patient use.",
                },
                {
                  title: "Assistance Available",
                  description:
                    "Our staff is happy to assist patients with mobility needs or other accommodations.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              Location
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Easy to Find
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We&apos;re conveniently located on Rand Road in Arlington Heights,
              with easy access from major highways.
            </p>

            <Card className="p-8 text-left">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">
                      Address
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                      {SITE_CONFIG.address.zip}
                    </p>
                    <Button variant="outline" asChild>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          SITE_CONFIG.address.full
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4" />
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">
                      Parking
                    </h3>
                    <p className="text-slate-600">
                      Free parking is available in our dedicated lot. Accessible
                      parking spaces are located near the building entrance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Come See Us
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Experience our modern, comfortable facility for yourself. Schedule
              your appointment today.
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
