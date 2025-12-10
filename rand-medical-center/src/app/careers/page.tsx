import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ChevronRight,
  Phone,
  Briefcase,
  Heart,
  Users,
  Award,
  Clock,
  DollarSign,
  GraduationCap,
  Mail,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Rand Medical Center",
  description:
    "Join the Rand Medical Center team. Explore career opportunities in healthcare at our Arlington Heights medical facility. Competitive benefits and growth opportunities.",
};

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Salary packages that recognize your skills and experience",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Medical, dental, and vision coverage for you and your family",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible scheduling and paid time off",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Continuing education support and career advancement",
  },
];

const OPEN_POSITIONS = [
  {
    title: "Medical Assistant",
    department: "Clinical",
    type: "Full-time",
    description:
      "Support our physicians in providing excellent patient care. Requires CMA certification and 1+ years experience.",
  },
  {
    title: "Physical Therapist",
    department: "Physical Therapy",
    type: "Full-time",
    description:
      "Join our rehabilitation team helping patients recover from injuries and surgeries. DPT required.",
  },
  {
    title: "Front Desk Receptionist",
    department: "Administration",
    type: "Full-time",
    description:
      "Be the welcoming face of our practice. Medical office experience preferred.",
  },
  {
    title: "Registered Nurse (OR)",
    department: "Surgery Center",
    type: "Full-time",
    description:
      "Operating room nurse for our ambulatory surgery center. OR experience required.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="container container-default mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/about" className="hover:text-teal-600">
              About
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700">Careers</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              <Briefcase className="h-4 w-4 mr-1" />
              Careers
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Join Our{" "}
              <span className="gradient-text-medical">Healthcare Team</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              At Rand Medical Center, we&apos;re always looking for dedicated
              healthcare professionals who share our commitment to compassionate
              patient care. Build your career with a team that values excellence
              and teamwork.
            </p>

            <Button size="lg" asChild>
              <a href="#open-positions">
                <Briefcase className="h-5 w-5" />
                View Open Positions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Users className="h-4 w-4 mr-1" />
              Why Rand Medical Center
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe in investing in our team members and creating an
              environment where everyone can thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {BENEFITS.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600 inline-flex mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Culture
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                A Supportive Team Environment
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our team members describe Rand Medical Center as a place where
                they feel valued, supported, and empowered to do their best work.
                We foster a collaborative culture where everyone contributes to
                our mission of exceptional patient care.
              </p>
              <ul className="space-y-3">
                {[
                  "Collaborative, team-oriented workplace",
                  "Supportive leadership and mentorship",
                  "Recognition for excellent work",
                  "Open communication at all levels",
                  "Focus on continuous improvement",
                  "Commitment to work-life balance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-teal-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    What Our Team Values
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Patient-First Mentality",
                      description:
                        "Every decision we make centers on what's best for our patients.",
                    },
                    {
                      title: "Professional Excellence",
                      description:
                        "We hold ourselves to the highest standards in healthcare delivery.",
                    },
                    {
                      title: "Respect & Integrity",
                      description:
                        "We treat each other and our patients with dignity and honesty.",
                    },
                    {
                      title: "Continuous Learning",
                      description:
                        "We're committed to growing our skills and knowledge.",
                    },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <h4 className="font-medium text-slate-900">
                        {value.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section bg-white scroll-mt-20">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="h-4 w-4 mr-1" />
              Open Positions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our current openings and find your next career opportunity.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {OPEN_POSITIONS.map((position, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">
                          {position.title}
                        </h3>
                        <Badge variant="secondary" size="sm">
                          {position.type}
                        </Badge>
                      </div>
                      <p className="text-teal-600 text-sm mb-2">
                        {position.department}
                      </p>
                      <p className="text-slate-600">{position.description}</p>
                    </div>
                    <Button className="flex-shrink-0" asChild>
                      <a href={`mailto:careers@randmedicalcenter.com?subject=Application: ${position.title}`}>
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 bg-slate-50 max-w-xl mx-auto">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Don&apos;t See Your Position?
                </h3>
                <p className="text-slate-600 mb-4">
                  We&apos;re always interested in hearing from talented healthcare
                  professionals. Send us your resume and we&apos;ll keep it on file
                  for future opportunities.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:careers@randmedicalcenter.com">
                    <Mail className="h-4 w-4" />
                    Send Your Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Application Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                How to Apply
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Submit Your Application",
                  description:
                    "Send your resume and cover letter to careers@randmedicalcenter.com, indicating the position you're applying for.",
                },
                {
                  step: "2",
                  title: "Application Review",
                  description:
                    "Our hiring team will review your application and reach out to qualified candidates within 1-2 weeks.",
                },
                {
                  step: "3",
                  title: "Interview Process",
                  description:
                    "Qualified candidates will be invited for interviews with our hiring managers and team members.",
                },
                {
                  step: "4",
                  title: "Offer & Onboarding",
                  description:
                    "Successful candidates will receive an offer and begin our comprehensive onboarding program.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200"
                >
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Take the next step in your healthcare career. Apply today or
              contact us to learn more about opportunities at Rand Medical
              Center.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600"
                asChild
              >
                <a href="mailto:careers@randmedicalcenter.com">
                  <Mail className="h-5 w-5" />
                  Email Your Resume
                </a>
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
