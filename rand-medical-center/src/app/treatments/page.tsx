import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { TREATMENTS } from "@/lib/treatments";
import {
  Activity,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Phone,
  Syringe,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments & Procedures | Rand Medical Center",
  description:
    "Explore our comprehensive treatments including epidural injections, radiofrequency ablation, joint injections, PRP therapy, and physical therapy in Arlington Heights.",
  openGraph: {
    title: "Treatments & Procedures | Rand Medical Center",
    description:
      "Advanced pain management treatments and procedures. Find relief with our expert care in Arlington Heights.",
  },
};

const TREATMENT_CATEGORIES = [
  {
    name: "Spine Injections",
    icon: Syringe,
    treatments: ["epidural-steroid-injections", "facet-joint-injections", "selective-nerve-root-block"],
  },
  {
    name: "Advanced Procedures",
    icon: Zap,
    treatments: ["radiofrequency-ablation"],
  },
  {
    name: "Joint Treatments",
    icon: Activity,
    treatments: ["joint-injections", "prp-therapy"],
  },
  {
    name: "Muscle & Rehab",
    icon: Activity,
    treatments: ["trigger-point-injections", "physical-therapy"],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Syringe className="h-4 w-4 mr-1" />
              Treatments & Procedures
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Advanced Treatments for{" "}
              <span className="gradient-text-medical">Lasting Relief</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our board-certified specialists offer a comprehensive range of
              minimally invasive treatments designed to address the source of your
              pain and help you return to the activities you love.
            </p>

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

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container container-default mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "8+", label: "Treatment Options" },
              { value: "Same Day", label: "Appointments" },
              { value: "Most", label: "Insurance Accepted" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold text-teal-600">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Treatments */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Treatments
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Comprehensive Treatment Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From minimally invasive injections to physical therapy, we offer
              treatments tailored to your specific condition and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((treatment) => (
              <Card key={treatment.slug} className="group h-full">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="block h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600 w-fit mb-4">
                      <Syringe className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {treatment.name}
                    </h3>

                    <p className="text-slate-600 mb-4 flex-grow">
                      {treatment.shortDescription}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {treatment.duration}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {treatment.relatedConditions.slice(0, 2).map((condition, index) => (
                        <Badge key={index} variant="outline" size="sm">
                          {condition.name}
                        </Badge>
                      ))}
                      {treatment.relatedConditions.length > 2 && (
                        <Badge variant="outline" size="sm">
                          +{treatment.relatedConditions.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-teal-600 font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What to Expect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Your Treatment Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We guide you through every step, from initial consultation to
              recovery and follow-up care.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description:
                  "Meet with our specialist to discuss your symptoms, medical history, and treatment goals.",
              },
              {
                step: "2",
                title: "Diagnosis",
                description:
                  "Comprehensive evaluation including physical exam and review of imaging studies.",
              },
              {
                step: "3",
                title: "Treatment Plan",
                description:
                  "Personalized treatment recommendations based on your specific condition and needs.",
              },
              {
                step: "4",
                title: "Care & Follow-Up",
                description:
                  "Expert treatment with ongoing monitoring and adjustments for optimal results.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-teal-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-slate-600">
              Our treatments are part of our comprehensive care approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pain Management",
                description: "Advanced interventional procedures for chronic pain relief",
                href: "/services/pain-management",
              },
              {
                title: "Physical Therapy",
                description: "Rehabilitation programs to restore function and mobility",
                href: "/services/physical-therapy",
              },
              {
                title: "Orthopedics",
                description: "Expert care for bone, joint, and musculoskeletal conditions",
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

      {/* CTA Section */}
      <section className="section bg-teal-600 text-white">
        <div className="container container-default mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Find Relief?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our specialists to discuss which treatment
            options are right for you.
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
