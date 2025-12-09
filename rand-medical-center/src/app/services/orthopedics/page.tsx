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
      "Throwing pain? Can't reach overhead? We fix torn rotator cuffs, frozen shoulders, and get you moving again.",
    href: "/services/orthopedics/shoulder-rotator-cuff",
  },
  {
    name: "Knee Care",
    description:
      "ACL tears, meniscus problems, worn-out joints—whether you need surgery or not, we'll get your knee working right.",
    href: "/services/orthopedics/knee",
  },
  {
    name: "Hip Treatment",
    description:
      "Hip pain making it hard to walk? We do everything from injections to total hip replacement.",
    href: "/services/orthopedics/hip",
  },
  {
    name: "Sports Injuries",
    description:
      "Get back in the game. We treat athletes from weekend warriors to competitive players.",
    href: "/services/orthopedics/sports-injuries",
  },
  {
    name: "Fracture Care",
    description:
      "Broken bone? We handle everything from simple fractures to complex breaks that need surgery.",
    href: "/services/orthopedics/fractures",
  },
  {
    name: "Hand & Wrist",
    description:
      "Carpal tunnel, trigger finger, or hand injury—we'll get you using your hands again without pain.",
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
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Bone className="h-4 w-4 mr-1" />
              Orthopedics
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Move Without{" "}
              <span className="text-blue-600">Pain Again</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Torn ACL? Arthritic knee? Shoulder that won&apos;t stop aching? We see
              these every day&mdash;and we know how to fix them. Our surgeons will
              tell you honestly whether you need surgery or if there&apos;s a better option.
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

      {/* Services */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What We Fix
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              From Head to Toe
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Shoulders, knees, hips, hands&mdash;if it&apos;s a bone, joint, or muscle problem,
              we can help. We always try conservative treatment first, surgery only when it makes sense.
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
              Surgeons Who Do This Every Day
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our orthopedic surgeons have performed thousands of procedures.
              They&apos;ll give you straight answers about what&apos;s wrong and what it takes to fix it.
            </p>
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
              Sound Like You?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If you&apos;re dealing with any of these, we can help.
            </p>
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
                Surgery Without the Hospital Stay
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Many procedures can be done right here&mdash;you come in, get it done,
                and go home the same day. Same safety standards as a hospital, but
                more convenient and usually costs less.
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

      {/* Related Services & Resources */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Related Services */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Complete Care
              </Badge>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Everything Under One Roof
              </h3>
              <p className="text-slate-600 mb-6">
                Orthopedic care often involves more than just surgery. Here&apos;s what else we offer:
              </p>
              <div className="space-y-4">
                <Link
                  href="/services/physical-therapy"
                  className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    <Bone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 group-hover:text-green-600">
                      Physical Therapy
                    </h4>
                    <p className="text-sm text-slate-600">
                      Post-surgical rehab and injury recovery programs
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-green-500" />
                </Link>
                <Link
                  href="/services/pain-management"
                  className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-teal-50 transition-colors"
                >
                  <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                    <Bone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 group-hover:text-teal-600">
                      Pain Management
                    </h4>
                    <p className="text-sm text-slate-600">
                      Joint injections and non-surgical pain treatments
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-500" />
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Learn More
              </Badge>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Helpful Resources
              </h3>
              <p className="text-slate-600 mb-6">
                Thinking about surgery? These resources might help:
              </p>
              <div className="space-y-4">
                <Link
                  href="/blog/preparing-for-knee-replacement-surgery"
                  className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-1">
                    Getting Ready for Knee Replacement
                  </h4>
                  <p className="text-sm text-slate-600">
                    A practical guide to preparing for surgery and recovery
                  </p>
                </Link>
                <Link
                  href="/blog/benefits-of-physical-therapy-after-surgery"
                  className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-1">
                    Why PT After Surgery Matters
                  </h4>
                  <p className="text-sm text-slate-600">
                    How physical therapy speeds your recovery
                  </p>
                </Link>
                <Link
                  href="/conditions/knee-pain"
                  className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-1">
                    Knee Pain Treatment Options
                  </h4>
                  <p className="text-sm text-slate-600">
                    From conservative care to surgery&mdash;all your options
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Let&apos;s Get You Moving Again
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether it&apos;s an old injury that never healed right or a new problem
              that&apos;s slowing you down&mdash;we&apos;ll figure out what&apos;s going on and how to fix it.
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
