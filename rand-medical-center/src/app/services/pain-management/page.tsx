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
      "If you've got back pain shooting down your leg (or neck pain going down your arm), this is often our go-to. Puts anti-inflammatory medicine right where the nerve is irritated.",
    href: "/services/pain-management/epidural-steroid-injections",
  },
  {
    name: "Radiofrequency Ablation",
    description:
      "Uses gentle heat to quiet down overactive nerves. The pain relief can last 6-12 months or longer—sometimes much longer.",
    href: "/services/pain-management/radiofrequency-ablation",
  },
  {
    name: "Joint Injections",
    description:
      "Knees, hips, shoulders giving you trouble? We inject anti-inflammatory or lubricating medicine directly into the joint.",
    href: "/services/pain-management/joint-injections",
  },
  {
    name: "Nerve Blocks",
    description:
      "Numbs specific nerves to both diagnose where your pain is coming from and provide relief. Think of it as a very targeted anesthetic.",
    href: "/services/pain-management/selective-nerve-root-block",
  },
  {
    name: "Trigger Point Injections",
    description:
      "Got a muscle knot that won't go away no matter how much you stretch? We can inject it directly to release the tension.",
    href: "/services/pain-management/trigger-point-injections",
  },
  {
    name: "Facet Joint Injections",
    description:
      "The small joints along your spine can cause a lot of back and neck pain. We inject them to calm down inflammation.",
    href: "/services/pain-management/facet-joint-injections",
  },
];

const CONDITIONS = [
  { name: "Chronic back pain", href: "/conditions/back-pain" },
  { name: "Neck pain", href: "/conditions/neck-pain" },
  { name: "Sciatica", href: "/conditions/sciatica" },
  { name: "Herniated disc", href: "/conditions/herniated-disc" },
  { name: "Spinal stenosis", href: "/conditions/spinal-stenosis" },
  { name: "Degenerative disc disease", href: null },
  { name: "Arthritis pain", href: "/conditions/arthritis" },
  { name: "Joint pain", href: "/conditions/knee-pain" },
  { name: "Neuropathy", href: null },
  { name: "Post-surgical pain", href: null },
  { name: "Complex regional pain syndrome", href: null },
  { name: "Fibromyalgia", href: null },
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
              When Nothing Else{" "}
              <span className="gradient-text-medical">Has Worked</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              You&apos;ve tried the stretches. You&apos;ve taken the pills. You&apos;ve done the
              ice and heat routine. And you&apos;re still in pain. We get it&mdash;and we have
              treatments that actually target what&apos;s causing your pain, not just
              mask it.
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
                We Go After the Source
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Here&apos;s the thing about pain pills: they just cover up the problem.
                We use injections and procedures that go directly to the nerve, joint,
                or disc that&apos;s causing your pain. The result? Relief that actually lasts.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: "We Find the Real Problem",
                    description:
                      "Before we treat anything, we figure out exactly what's causing your pain.",
                  },
                  {
                    icon: Syringe,
                    title: "Small Needle, Big Relief",
                    description:
                      "Most procedures use a needle smaller than an IV—no surgery required.",
                  },
                  {
                    icon: Zap,
                    title: "Get Back to Life Fast",
                    description:
                      "Most patients are back to normal activities within a day or two.",
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
              How We Help You Feel Better
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Different problems need different solutions. Here are the main treatments
              we use&mdash;your doctor will recommend what makes sense for your situation.
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
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If you&apos;re dealing with any of these, you&apos;re in the right place.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((condition, index) =>
              condition.href ? (
                <Link
                  key={index}
                  href={condition.href}
                  className="group flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-teal-50 hover:border-teal-200 border border-transparent transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-teal-600 transition-colors">
                    {condition.name}
                  </span>
                </Link>
              ) : (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span className="text-slate-700">{condition.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Here&apos;s What Happens Next
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "We Talk",
                description:
                  "Tell us about your pain—when it started, what makes it worse, what you've already tried.",
              },
              {
                step: "2",
                title: "We Diagnose",
                description:
                  "Using imaging and sometimes diagnostic injections, we figure out what's really going on.",
              },
              {
                step: "3",
                title: "We Treat",
                description:
                  "Based on what we find, we recommend a treatment plan. You decide if it makes sense for you.",
              },
              {
                step: "4",
                title: "We Follow Up",
                description:
                  "We check in to see how you're feeling and adjust if needed. We're in this together.",
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

      {/* Related Services & Resources */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Related Services */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Works Well With
              </Badge>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Often Combined With Pain Management
              </h3>
              <p className="text-slate-600 mb-6">
                Pain treatment often works best as part of a bigger picture. Here&apos;s what else we offer:
              </p>
              <div className="space-y-4">
                <Link
                  href="/services/physical-therapy"
                  className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 group-hover:text-green-600">
                      Physical Therapy
                    </h4>
                    <p className="text-sm text-slate-600">
                      Strengthen muscles and improve mobility to support your treatment
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-green-500" />
                </Link>
                <Link
                  href="/services/orthopedics"
                  className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 group-hover:text-blue-600">
                      Orthopedics
                    </h4>
                    <p className="text-sm text-slate-600">
                      For joint, bone, or structural issues that may need surgical evaluation
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500" />
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
                Want to know more before your appointment? These articles might help:
              </p>
              <div className="space-y-4">
                <Link
                  href="/blog/understanding-epidural-steroid-injections"
                  className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 mb-1">
                    Epidural Steroid Injections: What Actually Happens
                  </h4>
                  <p className="text-sm text-slate-600">
                    The honest breakdown of what to expect during and after
                  </p>
                </Link>
                <Link
                  href="/blog/when-to-see-doctor-for-back-pain"
                  className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 mb-1">
                    Back Pain: When to Actually See a Doctor
                  </h4>
                  <p className="text-sm text-slate-600">
                    How to tell if your back pain needs professional attention
                  </p>
                </Link>
                <Link
                  href="/patients/insurance-pricing"
                  className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 mb-1">
                    Insurance & Pricing Information
                  </h4>
                  <p className="text-sm text-slate-600">
                    What&apos;s covered, what to expect cost-wise, payment options
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
              You Don&apos;t Have to Keep Living Like This
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Pain takes so much from you&mdash;your energy, your mood, your ability to
              do the things you love. Let&apos;s see if we can help you get some of that back.
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
