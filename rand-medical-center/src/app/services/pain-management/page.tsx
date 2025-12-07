import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG, PROVIDERS } from "@/lib/constants";
import {
  Activity,
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Phone,
  Syringe,
  Target,
  UserCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pain Management | Interventional Pain Treatments | Rand Medical Center",
  description:
    "Advanced pain management in Arlington Heights. Board-certified specialists offering epidural injections, nerve blocks, radiofrequency ablation, and minimally invasive treatments for chronic pain.",
  openGraph: {
    title: "Pain Management Services | Rand Medical Center",
    description:
      "Find relief from chronic pain with our interventional treatments and board-certified pain specialists.",
  },
};

const TREATMENTS = [
  {
    name: "Epidural Steroid Injections",
    description:
      "Targeted injection of anti-inflammatory medication to reduce nerve inflammation and relieve back, neck, and radiating leg or arm pain.",
    href: "/services/pain-management/epidural-steroid-injections",
  },
  {
    name: "Radiofrequency Ablation",
    description:
      "Uses heat to disrupt pain signals from specific nerves, providing long-lasting relief for chronic back and neck pain.",
    href: "/services/pain-management/radiofrequency-ablation",
  },
  {
    name: "Joint Injections",
    description:
      "Corticosteroid or hyaluronic acid injections to reduce inflammation and improve mobility in arthritic joints.",
    href: "/services/pain-management/joint-injections",
  },
  {
    name: "Nerve Blocks",
    description:
      "Targeted injections that interrupt pain signals from specific nerves, useful for diagnosing and treating various pain conditions.",
    href: "/services/pain-management/selective-nerve-root-block",
  },
  {
    name: "Trigger Point Injections",
    description:
      "Treatment for painful muscle knots that can cause localized or referred pain patterns.",
    href: "/services/pain-management/trigger-point-injections",
  },
  {
    name: "Facet Joint Injections",
    description:
      "Injections targeting the small joints of the spine that can cause back and neck pain.",
    href: "/services/pain-management/facet-joint-injections",
  },
];

const CONDITIONS = [
  "Chronic back pain",
  "Neck pain",
  "Sciatica",
  "Herniated disc",
  "Spinal stenosis",
  "Degenerative disc disease",
  "Arthritis pain",
  "Joint pain",
  "Neuropathy",
  "Post-surgical pain",
  "Complex regional pain syndrome",
  "Fibromyalgia",
];

export default function PainManagementPage() {
  const painSpecialist = PROVIDERS.find((p) => p.specialty === "Pain Management");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Activity className="h-4 w-4 mr-1" />
              Pain Management
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Find Lasting{" "}
              <span className="gradient-text-medical">Pain Relief</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our board-certified pain management specialists use advanced,
              minimally invasive techniques to target the source of your pain.
              Get back to living your life without being held back by chronic
              pain.
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

      {/* Approach Section */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Interventional Pain Management
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Rather than masking symptoms with medication alone, we use
                image-guided interventional procedures to target the specific
                structures causing your pain. This approach often provides longer
                lasting relief with fewer side effects.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: "Precise Diagnosis",
                    description:
                      "We identify the exact source of your pain using advanced diagnostic techniques.",
                  },
                  {
                    icon: Syringe,
                    title: "Minimally Invasive",
                    description:
                      "Most procedures are performed using tiny needles with image guidance.",
                  },
                  {
                    icon: Zap,
                    title: "Quick Recovery",
                    description:
                      "Return to normal activities faster than with traditional surgery.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider Card */}
            {painSpecialist && (
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <UserCircle className="h-20 w-20 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {painSpecialist.name}
                    </h3>
                    <p className="text-teal-600 font-medium">
                      {painSpecialist.specialty}
                    </p>
                    <p className="text-slate-500">{painSpecialist.title}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-slate-600">Board Certified</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/providers/${painSpecialist.slug}`}>
                      View Profile
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Treatments
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Pain Management Procedures
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a comprehensive range of interventional pain treatments
              performed in our Joint Commission-accredited facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center text-teal-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions We Treat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Pain Conditions We Treat
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Your Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What to Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description:
                  "Meet with our specialist to discuss your pain history and goals.",
              },
              {
                step: "2",
                title: "Diagnosis",
                description:
                  "We use imaging and diagnostic procedures to identify pain sources.",
              },
              {
                step: "3",
                title: "Treatment Plan",
                description:
                  "Receive a personalized plan that may include procedures and therapy.",
              },
              {
                step: "4",
                title: "Follow-Up",
                description:
                  "We monitor your progress and adjust treatment as needed.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Ready to Take Control of Your Pain?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Don&apos;t let chronic pain limit your life. Schedule a consultation
              with our pain management specialists today.
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
