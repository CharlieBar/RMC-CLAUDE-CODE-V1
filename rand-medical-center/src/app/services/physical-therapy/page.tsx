import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  Dumbbell,
  Heart,
  Phone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physical Therapy | Rehabilitation Services | Rand Medical Center",
  description:
    "Physical therapy and rehabilitation in Arlington Heights. Post-surgical rehab, sports rehabilitation, spine therapy, and personalized treatment plans for injury recovery.",
  openGraph: {
    title: "Physical Therapy Services | Rand Medical Center",
    description:
      "Personalized rehabilitation programs to restore strength, mobility, and function.",
  },
};

const PROGRAMS = [
  {
    name: "Post-Surgery Recovery",
    description:
      "Just had knee replacement, ACL repair, or spine surgery? We'll make sure you heal right and get your strength back safely.",
    href: "/services/physical-therapy/post-surgical-rehab",
  },
  {
    name: "Back & Neck Rehab",
    description:
      "Back and neck problems are our specialty. We work with your pain doctor to get you moving without pain.",
    href: "/services/physical-therapy/spine-rehab",
  },
  {
    name: "Sports Rehab",
    description:
      "Getting an athlete back to their sport takes specific training. We know the protocols for ACL, shoulder, and more.",
    href: "/services/physical-therapy/sports-rehab",
  },
  {
    name: "Hands-On Treatment",
    description:
      "Sometimes you need manual work—massage, joint mobilization, the stuff that loosens things up when stretching isn't enough.",
    href: "/services/physical-therapy/manual-therapy",
  },
  {
    name: "Balance Training",
    description:
      "Falls are scary and preventable. We'll help you feel steady on your feet, especially if you've fallen before.",
    href: "/services/physical-therapy/balance-training",
  },
  {
    name: "Return to Work",
    description:
      "Going back to work after an injury? We'll make sure you can do your job safely without re-injuring yourself.",
    href: "/services/physical-therapy/work-conditioning",
  },
];

const CONDITIONS = [
  "Back & neck pain",
  "Post-surgical recovery",
  "Sports injuries",
  "Joint replacement rehab",
  "Shoulder injuries",
  "Knee injuries",
  "Hip pain",
  "Sciatica",
  "Arthritis",
  "Balance disorders",
  "Work injuries",
  "Chronic pain",
];

export default function PhysicalTherapyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Dumbbell className="h-4 w-4 mr-1" />
              Physical Therapy
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Get Stronger.{" "}
              <span className="text-green-600">Feel Like Yourself.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Recovery doesn&apos;t happen by accident. Our PTs create a plan that works
              for YOUR body, YOUR schedule, and YOUR goals&mdash;whether that&apos;s playing
              with your grandkids or getting back on the tennis court.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
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

      {/* Approach */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                We Don&apos;t Just Give You Exercises
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Your PT talks directly to your doctor. If you&apos;re seeing our pain
                specialist or orthopedic surgeon, everyone&apos;s on the same page about
                your recovery. No miscommunication, no conflicting advice.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Your Goals, Not Ours",
                  description:
                    "Want to get back to running? Gardening? We build your plan around what you actually want to do.",
                },
                {
                  icon: Users,
                  title: "One Team",
                  description:
                    "Your PT, your doctor, your surgeon—we all talk to each other about your progress.",
                },
                {
                  icon: TrendingUp,
                  title: "We Track Results",
                  description:
                    "Regular check-ins to make sure you're actually getting better, not just going through motions.",
                },
                {
                  icon: Heart,
                  title: "Skills for Life",
                  description:
                    "We teach you how to stay strong and prevent future problems, not just fix the current one.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-2xl border border-slate-200"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600 w-fit mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              What We Help With
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Different situations need different approaches. Here&apos;s what we specialize in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => (
              <Link
                key={index}
                href={program.href}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                  {program.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{program.description}</p>
                <span className="inline-flex items-center text-green-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If you&apos;re dealing with any of these, PT can probably help.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
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
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Here&apos;s What Happens
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "We Assess",
                description:
                  "First visit: we figure out what's going on, what your goals are, and create a plan.",
              },
              {
                step: "2",
                title: "We Work Together",
                description:
                  "Hands-on sessions 2-3 times per week with exercises tailored to your body.",
              },
              {
                step: "3",
                title: "You Practice",
                description:
                  "Home exercises matter. We'll give you things you can actually do between visits.",
              },
              {
                step: "4",
                title: "We Adjust",
                description:
                  "As you improve, we progress your program. If something's not working, we change it.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="section bg-green-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
              Let&apos;s Get You Back to 100%
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you just had surgery, tweaked something at the gym, or have been
              dealing with pain for months&mdash;we&apos;ll create a plan to get you where you want to be.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Schedule Evaluation
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
