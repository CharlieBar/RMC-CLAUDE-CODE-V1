import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calendar,
  ChevronRight,
  HelpCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | Rand Medical Center",
  description:
    "Frequently asked questions about appointments, insurance, treatments, and patient care at Rand Medical Center in Arlington Heights.",
  openGraph: {
    title: "Frequently Asked Questions | Rand Medical Center",
    description:
      "Find answers to common questions about our medical services and patient care.",
  },
};

const FAQ_CATEGORIES = [
  {
    name: "Appointments & Scheduling",
    faqs: [
      {
        q: "How do I schedule an appointment?",
        a: "You can schedule an appointment by calling us at " +
          SITE_CONFIG.phoneDisplay +
          " or booking online through our patient portal. Same-day appointments are available for urgent needs.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring your photo ID, insurance card, any referral forms, recent imaging or test results (X-rays, MRIs), a list of current medications, and any relevant medical records.",
      },
      {
        q: "How early should I arrive for my appointment?",
        a: "We recommend arriving 15-20 minutes before your scheduled appointment time to complete any necessary paperwork, especially for first-time visits.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We ask that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other patients who may need care.",
      },
    ],
  },
  {
    name: "Insurance & Billing",
    faqs: [
      {
        q: "What insurance plans do you accept?",
        a: "We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Humana, Medicare, United Healthcare, and more. Contact us to verify your specific plan.",
      },
      {
        q: "Do I need a referral to see a specialist?",
        a: "It depends on your insurance plan. HMO plans typically require a referral from your primary care physician, while PPO plans usually don't. We can help determine if you need one.",
      },
      {
        q: "What if I don't have insurance?",
        a: "We offer competitive self-pay rates and payment plans to make care accessible. We'll provide you with a cost estimate before your appointment.",
      },
      {
        q: "Do you handle workers' compensation cases?",
        a: "Yes, we have extensive experience with workers' compensation cases and coordinate directly with employers and insurance carriers to ensure your treatment is covered.",
      },
    ],
  },
  {
    name: "Treatments & Services",
    faqs: [
      {
        q: "What conditions do you treat?",
        a: "We treat a wide range of conditions including back pain, neck pain, sciatica, arthritis, sports injuries, and more. Visit our Conditions page for a complete list.",
      },
      {
        q: "Do you perform surgery?",
        a: "Yes, we have a Joint Commission-accredited outpatient surgery center where we perform minimally invasive pain management procedures and orthopedic surgeries.",
      },
      {
        q: "What should I expect during an injection procedure?",
        a: "Most injections take 15-30 minutes and are performed using local anesthesia and image guidance. You can typically return to normal activities within 24-48 hours.",
      },
      {
        q: "How long does physical therapy take?",
        a: "Treatment duration varies based on your condition and goals. A typical course of physical therapy is 6-12 weeks with 2-3 sessions per week, but your therapist will create a plan specific to your needs.",
      },
    ],
  },
  {
    name: "Office & Location",
    faqs: [
      {
        q: "What are your office hours?",
        a: "We are open Monday through Friday, " +
          SITE_CONFIG.hours.weekdays +
          ". We are closed on weekends and major holidays.",
      },
      {
        q: "Where are you located?",
        a: "We are located at " +
          SITE_CONFIG.address.full +
          ". Free parking is available on-site.",
      },
      {
        q: "Do you offer telehealth appointments?",
        a: "We offer telehealth consultations for follow-up appointments when appropriate. Contact us to determine if a virtual visit is suitable for your needs.",
      },
      {
        q: "Is your facility wheelchair accessible?",
        a: "Yes, our facility is fully ADA compliant with wheelchair-accessible entrances, restrooms, and examination rooms.",
      },
    ],
  },
];

// Generate FAQPage schema from FAQ data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <HelpCircle className="h-4 w-4 mr-1" />
              FAQs
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="gradient-text-medical">Questions</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Find answers to common questions about appointments, insurance,
              treatments, and more. Can&apos;t find what you&apos;re looking for? Contact
              us directly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={SITE_CONFIG.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          {FAQ_CATEGORIES.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <h3 className="font-semibold text-slate-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-slate-600">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Our team is here to help. Contact us with any questions about your
              care or our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
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
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
