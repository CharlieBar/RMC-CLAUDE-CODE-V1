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
    name: "Scheduling & Your First Visit",
    faqs: [
      {
        q: "How do I make an appointment?",
        a: "Call us at " +
          SITE_CONFIG.phoneDisplay +
          " or book online. Need to be seen today? We often have same-day slots for urgent issues.",
      },
      {
        q: "What do I need to bring?",
        a: "Your ID, insurance card, any referral forms, recent imaging (X-rays, MRIs) if you have them, and a list of medications you're taking. Don't have the imaging? That's okay—we can get it.",
      },
      {
        q: "How early should I get there?",
        a: "Come 15-20 minutes early for your first visit so you can fill out paperwork. If you download our forms ahead of time, you can show up right on time.",
      },
      {
        q: "What if I need to cancel?",
        a: "Life happens—just give us 24 hours notice if you can. That way we can give your slot to someone else who needs it.",
      },
    ],
  },
  {
    name: "Insurance & Paying for Care",
    faqs: [
      {
        q: "Do you take my insurance?",
        a: "Probably! We work with Aetna, Blue Cross Blue Shield, Cigna, Humana, Medicare, United Healthcare, and many others. Call us with your card info and we'll check for you.",
      },
      {
        q: "Do I need a referral?",
        a: "HMO plans usually need one; PPO plans usually don't. Not sure what you have? We can look it up when you call.",
      },
      {
        q: "What if I don't have insurance?",
        a: "We work with you. We'll give you an upfront price and can set up a payment plan if needed. More details on our insurance & pricing page.",
      },
      {
        q: "I got hurt at work. Do you handle that?",
        a: "Yes—workers' comp is actually one of our specialties. We know the system and handle the paperwork so you can focus on getting better.",
      },
    ],
  },
  {
    name: "Treatments & What We Do",
    faqs: [
      {
        q: "What conditions do you treat?",
        a: "Back pain, neck pain, sciatica, arthritis, sports injuries, knee problems, shoulder issues—basically anything that hurts when it shouldn't. Check out our conditions page for the full list.",
      },
      {
        q: "Do you do surgery here?",
        a: "Yes, we have an accredited outpatient surgery center right here. Many procedures can be done without a hospital stay—you go home the same day.",
      },
      {
        q: "What are injections like? Do they hurt?",
        a: "We numb the area first, and use X-ray guidance so we know exactly where the needle goes. The whole thing takes 15-30 minutes, and most people are back to their normal routine in a day or two.",
      },
      {
        q: "How long will I need physical therapy?",
        a: "Depends on what's going on. Usually 6-12 weeks, 2-3 times a week. Your therapist will give you a better estimate after evaluating you.",
      },
    ],
  },
  {
    name: "Our Office",
    faqs: [
      {
        q: "What are your hours?",
        a: "Monday through Friday, " +
          SITE_CONFIG.hours.weekdays +
          ". We're closed weekends and holidays.",
      },
      {
        q: "Where exactly are you?",
        a: SITE_CONFIG.address.full +
          ". There's free parking right in front of the building.",
      },
      {
        q: "Can I do a video visit?",
        a: "For some follow-ups, yes. It depends on what you're being seen for. Ask us when you call and we'll let you know if it makes sense for your situation.",
      },
      {
        q: "Is the building wheelchair accessible?",
        a: "Completely. Accessible entrances, restrooms, exam rooms—the whole building.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
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
              Got{" "}
              <span className="gradient-text-medical">Questions?</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Here are the things people ask us most. If you don&apos;t see your
              question, just give us a call—we&apos;re happy to help.
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
              Didn&apos;t Find Your Answer?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              No problem—just give us a call. Real people answer the phone here,
              and we&apos;re happy to help.
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
