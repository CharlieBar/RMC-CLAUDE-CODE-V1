import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  AlertCircle,
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  FileText,
  HardHat,
  Phone,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workers' Compensation Doctor | Rand Medical Center",
  description:
    "Work injury treatment in Arlington Heights. We handle workers' comp paperwork, coordinate with employers, and focus on getting you back to work safely.",
  openGraph: {
    title: "Workers' Compensation Doctor | Rand Medical Center",
    description:
      "Experienced workers' comp doctors. We know the system and handle the paperwork so you can focus on healing.",
  },
};

const COMMON_WORK_INJURIES = [
  "Back injuries from lifting or repetitive motion",
  "Slip and fall injuries",
  "Carpal tunnel and repetitive strain",
  "Shoulder injuries",
  "Knee injuries",
  "Neck and spine injuries",
  "Fractures and sprains",
  "Construction and industrial injuries",
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Report Your Injury",
    description:
      "Tell your employer about your injury as soon as possible. Illinois law requires you to report within 45 days, but sooner is better.",
  },
  {
    step: "2",
    title: "Get Treated",
    description:
      "Come see us. In Illinois, you have the right to choose your own doctor for workers' comp. You don't have to use whoever your employer suggests.",
  },
  {
    step: "3",
    title: "We Handle Documentation",
    description:
      "We provide all the paperwork your employer and their insurance need—injury reports, treatment plans, work restrictions, and progress notes.",
  },
  {
    step: "4",
    title: "Return to Work Safely",
    description:
      "When you're ready, we'll clear you to return—with any necessary restrictions. We won't rush you back before you're healed.",
  },
];

export default function WorkersCompensationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6 bg-blue-600">
              <HardHat className="h-4 w-4 mr-1" />
              Workers&apos; Compensation
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Hurt at{" "}
              <span className="text-blue-600">Work?</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Work injuries are stressful enough without having to figure out
              the paperwork. We&apos;ve treated thousands of workers&apos; comp patients
              and know exactly what documentation you need. Focus on healing—
              we&apos;ll handle the rest.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call for Same-Day Appointment
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Rights */}
      <section className="py-6 bg-blue-50 border-y border-blue-200">
        <div className="container container-default mx-auto">
          <div className="flex items-center gap-4">
            <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <p className="text-blue-900">
              <strong>Know Your Rights:</strong> In Illinois, you can choose your
              own doctor for workers&apos; compensation treatment. You don&apos;t have to
              see whoever your employer recommends.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                We Know Workers&apos; Comp
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Workers&apos; comp has its own rules—what forms to fill out, what
                language to use, what the insurance adjusters are looking for.
                We deal with this every day. That experience means:
              </p>
              <ul className="space-y-4">
                {[
                  "Your claims get processed faster because the paperwork is done right",
                  "Insurance companies can't deny treatment over technicalities",
                  "You get the care you actually need, not just what's cheapest",
                  "Your employer gets clear work restriction guidelines",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-slate-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Common Work Injuries We Treat
                </h3>
                <ul className="space-y-3">
                  {COMMON_WORK_INJURIES.map((injury, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight className="h-4 w-4 text-blue-500" />
                      <span className="text-slate-600">{injury}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              <ClipboardList className="h-4 w-4 mr-1" />
              The Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              How Workers&apos; Comp Treatment Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              It&apos;s actually pretty straightforward once you know the steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              >
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Documentation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                The Paperwork You Need
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Workers&apos; comp claims live and die by documentation. We provide
                everything required to support your claim and ensure you get the
                benefits you&apos;re entitled to.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, title: "Initial Injury Report" },
                { icon: ClipboardList, title: "Treatment Plans" },
                { icon: Briefcase, title: "Work Restrictions" },
                { icon: CheckCircle, title: "Progress Notes" },
                { icon: Calendar, title: "Return-to-Work Clearance" },
                { icon: Shield, title: "IME Rebuttals (if needed)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                >
                  <item.icon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                First Visit
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                What to Bring
              </h2>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">Required</h3>
                    <ul className="space-y-3">
                      {[
                        "Photo ID",
                        "Employer information (name, address, phone)",
                        "Date and description of how injury occurred",
                        "Supervisor or HR contact name",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-1" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">
                      If You Have Them
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Workers' comp claim number",
                        "Insurance adjuster contact info",
                        "Any forms your employer gave you",
                        "Previous medical records related to injury",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="h-4 w-4 text-slate-400 mt-1" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 p-6 bg-amber-50 border-amber-200">
              <CardContent className="p-0 flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Don&apos;t Wait for Paperwork
                  </h3>
                  <p className="text-sm text-amber-800">
                    If you don&apos;t have a claim number yet or your employer hasn&apos;t
                    given you forms, come in anyway. Getting treatment started is
                    more important—we can sort out the paperwork later.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Will this affect my job?",
                  a: "It's illegal for your employer to fire you or retaliate against you for filing a workers' comp claim. That said, document everything and consider consulting with an attorney if you feel you're being treated differently.",
                },
                {
                  q: "How long can I receive workers' comp benefits?",
                  a: "As long as you're still treating and haven't reached maximum medical improvement (MMI). We won't discharge you until you're actually better or have reached a stable point.",
                },
                {
                  q: "What if my employer disputes my claim?",
                  a: "We provide thorough documentation that supports your case. If your employer or their insurance disputes treatment, we can provide additional reports and, if necessary, testimony.",
                },
                {
                  q: "Do I need an attorney?",
                  a: "Not always, but sometimes it helps—especially if your claim is disputed or you're not getting the benefits you should. We work with many workers' comp attorneys and can provide referrals.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                    <p className="text-slate-600">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <HardHat className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Don&apos;t Let Paperwork Delay Your Treatment
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              You have the right to choose your doctor. You have the right to
              proper treatment. Let us help you get both.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                asChild
              >
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Related Resources</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/conditions/back-pain"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Back Pain Treatment
            </Link>
            <Link
              href="/services/physical-therapy"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Physical Therapy
            </Link>
            <Link
              href="/patients/insurance-pricing"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Insurance Info
            </Link>
            <Link
              href="/patients/forms"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Patient Forms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
