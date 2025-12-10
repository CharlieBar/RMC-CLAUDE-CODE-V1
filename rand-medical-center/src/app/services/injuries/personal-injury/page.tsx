import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  ChevronRight,
  FileText,
  Gavel,
  Phone,
  Scale,
  Shield,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Injury Treatment | Rand Medical Center",
  description:
    "Medical treatment for personal injury cases in Arlington Heights. We provide thorough documentation, work with attorneys, and offer treatment on lien.",
  openGraph: {
    title: "Personal Injury Treatment | Rand Medical Center",
    description:
      "Slip and falls, premises injuries, and other personal injury cases. We provide the medical documentation your case needs.",
  },
};

const INJURY_TYPES = [
  "Slip and fall injuries",
  "Premises liability injuries",
  "Dog bites and animal attacks",
  "Assault injuries",
  "Defective product injuries",
  "Pedestrian accidents",
  "Bicycle accidents",
  "Recreational accidents",
];

export default function PersonalInjuryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6 bg-purple-600">
              <Scale className="h-4 w-4 mr-1" />
              Personal Injury
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Injured Due to{" "}
              <span className="text-purple-600">Someone&apos;s Negligence?</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Slip and falls, premises injuries, dog bites—if someone else&apos;s
              negligence caused your injury, you need proper medical documentation.
              We&apos;ll treat your injuries and provide the records your attorney
              needs to build your case.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call for Appointment
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

      {/* Treatment on Lien */}
      <section className="py-6 bg-purple-50 border-y border-purple-200">
        <div className="container container-default mx-auto">
          <div className="flex items-center gap-4">
            <Shield className="h-6 w-6 text-purple-600 flex-shrink-0" />
            <p className="text-purple-900">
              <strong>Treatment on Lien Available:</strong> If you have an attorney,
              we can provide treatment on a lien basis—meaning you don&apos;t pay out
              of pocket until your case settles.
            </p>
          </div>
        </div>
      </section>

      {/* Why Documentation Matters */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why It Matters
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Your Medical Records Make or Break Your Case
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                In personal injury cases, medical documentation isn&apos;t just about
                getting better—it&apos;s evidence. Insurance companies and defense
                attorneys will scrutinize every detail to minimize what they pay.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                You need medical records that:
              </p>
              <ul className="space-y-3">
                {[
                  "Clearly document how your injuries occurred",
                  "Describe your symptoms and limitations in detail",
                  "Connect your injuries directly to the incident",
                  "Track your recovery progress over time",
                  "Support your claim for damages",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-slate-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Types of Injuries We Treat
                </h3>
                <ul className="space-y-3">
                  {INJURY_TYPES.map((injury, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight className="h-4 w-4 text-purple-500" />
                      <span className="text-slate-600">{injury}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working with Attorneys */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                <Gavel className="h-4 w-4 mr-1" />
                Attorney Coordination
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                We Work with Your Attorney
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                If you have a personal injury attorney, we&apos;ll coordinate directly
                with their office. We know what they need and provide it without
                you having to play middleman.
              </p>
              <div className="space-y-4">
                {[
                  "Treatment on lien (no out-of-pocket cost until settlement)",
                  "Detailed narrative reports for demand letters",
                  "Records provided promptly when requested",
                  "Testimony available if case goes to trial",
                  "Clear causation documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-white text-slate-900">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  Don&apos;t Have an Attorney Yet?
                </h3>
                <p className="text-slate-600 mb-4">
                  That&apos;s okay. You can still come see us—getting treatment
                  started is the priority. If you decide you need legal help
                  later, we work with several personal injury attorneys and can
                  provide referrals.
                </p>
                <p className="text-slate-600 mb-6">
                  Not every injury requires an attorney, but if someone else&apos;s
                  negligence caused serious harm, it&apos;s worth a consultation.
                  Most offer free case evaluations.
                </p>
                <Button className="w-full" asChild>
                  <a href={SITE_CONFIG.phoneTel}>
                    <Phone className="h-4 w-4" />
                    Call to Schedule
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              What We Provide
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Documentation That Supports Your Case
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We know exactly what attorneys, insurance adjusters, and (if it
              comes to it) juries need to see.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Initial Evaluation Report",
                description:
                  "Detailed documentation of your injuries, how they occurred, and your symptoms at first visit.",
              },
              {
                icon: CheckCircle,
                title: "Treatment Records",
                description:
                  "Every visit documented with findings, treatment provided, and your progress.",
              },
              {
                icon: Scale,
                title: "Causation Opinion",
                description:
                  "Clear medical opinion linking your injuries to the incident in question.",
              },
              {
                icon: Users,
                title: "Narrative Reports",
                description:
                  "Comprehensive summaries for demand letters and settlement negotiations.",
              },
              {
                icon: AlertTriangle,
                title: "Functional Limitations",
                description:
                  "Documentation of how your injuries affect daily activities and quality of life.",
              },
              {
                icon: Gavel,
                title: "Expert Testimony",
                description:
                  "If your case goes to trial, we can provide testimony about your injuries and treatment.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="p-3 bg-purple-100 rounded-xl text-purple-600 w-fit mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Protecting Your Case */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Protect Your Case
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                What You Should Know
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Get Treatment Quickly",
                  description:
                    "The longer you wait to see a doctor, the easier it is for the other side to claim your injuries aren't serious or weren't caused by the incident.",
                },
                {
                  title: "Be Honest and Detailed",
                  description:
                    "Tell us exactly what happened and how you're feeling. Exaggerating helps no one, but don't downplay your symptoms either.",
                },
                {
                  title: "Follow Your Treatment Plan",
                  description:
                    "Missing appointments or not doing your exercises gives insurance companies ammunition to deny or reduce your claim.",
                },
                {
                  title: "Don't Talk to the Other Side's Insurance",
                  description:
                    "They may seem friendly, but their job is to pay you as little as possible. Let your attorney handle communications.",
                },
                {
                  title: "Keep Everything",
                  description:
                    "Photos of your injuries, the accident scene, receipts for expenses—document everything related to your injury.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                Your First Visit
              </h2>
            </div>

            <Card className="p-8 bg-purple-50 border-purple-200">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900 mb-6">
                  What to Bring
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      {[
                        "Photo ID",
                        "Health insurance card (if using)",
                        "Attorney contact info (if you have one)",
                        "Incident report or police report",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-purple-500 mt-1" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {[
                        "Photos of your injuries",
                        "Photos of the accident scene",
                        "List of your symptoms",
                        "Any previous medical records",
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-purple-600 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Scale className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Your Injuries Deserve Proper Documentation
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Whether you&apos;re working with an attorney or not sure yet, get
              your injuries properly documented now. It protects your health
              and your legal options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
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
              href="/services/injuries/motor-vehicle-accidents"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Car Accidents
            </Link>
            <Link
              href="/services/injuries/workers-compensation"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Workers&apos; Comp
            </Link>
            <Link
              href="/services/pain-management"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Pain Management
            </Link>
            <Link
              href="/services/physical-therapy"
              className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Physical Therapy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
