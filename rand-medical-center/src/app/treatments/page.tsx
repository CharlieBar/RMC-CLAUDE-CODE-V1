import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import { TREATMENTS } from "@/lib/treatments";
import {
  Activity,
  Calendar,
  ChevronRight,
  Clock,
  Phone,
  Syringe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments | Pain Management Procedures | Rand Medical Center",
  description:
    "Explore our pain management treatments in Arlington Heights. Epidural injections, radiofrequency ablation, joint injections, and more. Board-certified specialists.",
  openGraph: {
    title: "Pain Management Treatments | Rand Medical Center",
    description:
      "Advanced pain treatments including epidural injections, nerve blocks, and radiofrequency ablation. Find relief for chronic pain.",
  },
};

export default function TreatmentsPage() {
  const painManagementTreatments = TREATMENTS.filter(
    (t) => t.category === "pain-management"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Syringe className="h-4 w-4 mr-1" />
              Treatments
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Pain Management{" "}
              <span className="gradient-text-medical">Treatments</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our board-certified pain management specialists offer a range of
              advanced, minimally invasive treatments. From targeted injections
              to long-lasting nerve procedures, we have options to address your
              specific condition and get you back to living without pain.
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

      {/* All Treatments */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Activity className="h-4 w-4 mr-1" />
              Pain Management
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Interventional Pain Treatments
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our pain specialists use image-guided techniques to deliver
              treatment precisely where it&apos;s needed for maximum effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painManagementTreatments.map((treatment) => (
              <Link
                key={treatment.slug}
                href={`/services/pain-management/${treatment.slug}`}
                className="group"
              >
                <Card className="h-full hover:border-teal-300 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                        <Syringe className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        {treatment.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {treatment.name}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {treatment.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {treatment.conditions.slice(0, 3).map((condition, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
                        >
                          {condition}
                        </span>
                      ))}
                      {treatment.conditions.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                          +{treatment.conditions.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center text-teal-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Expert Pain Management Care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Board-Certified Specialists",
                description:
                  "Our pain management physicians are fellowship-trained and board-certified.",
              },
              {
                title: "Image-Guided Precision",
                description:
                  "All procedures use fluoroscopy or ultrasound for accurate needle placement.",
              },
              {
                title: "Accredited Facility",
                description:
                  "Joint Commission accredited ambulatory surgery center for your safety.",
              },
              {
                title: "Comprehensive Approach",
                description:
                  "We combine procedures with physical therapy and other treatments for best results.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Not Sure Which Treatment Is Right for You?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Schedule a consultation with our pain management specialists.
              We&apos;ll evaluate your condition and recommend the most appropriate
              treatment options for your specific situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
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
