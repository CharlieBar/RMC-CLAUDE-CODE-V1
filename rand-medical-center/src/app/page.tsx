import { Button } from "@/components/ui/button";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { InteractiveCard, Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SITE_CONFIG, SERVICE_CATEGORIES, TRUST_BADGES } from "@/lib/constants";
import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Activity,
  Stethoscope,
  Award,
  BadgeCheck,
  CreditCard,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container container-default mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="hidden md:flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4" />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <StatusBadge status="available" />
            <a
              href={SITE_CONFIG.bookingUrl}
              className="bg-teal-500 hover:bg-teal-600 px-4 py-1 rounded-full transition-colors font-medium"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container container-default mx-auto relative z-10">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <Badge variant="primary" size="lg" className="mb-6">
              <Award className="h-4 w-4 mr-1" />
              Joint Commission Accredited
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Comprehensive Medical Care in{" "}
              <span className="gradient-text-medical">Arlington Heights</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Pain management, orthopedics, physical therapy, and immediate care
              &mdash; all under one roof. Board-certified specialists with 15+
              years of experience helping patients get back to their lives.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mb-10 text-slate-600">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-teal-500" />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-500" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-teal-500" />
                <span>Most Insurance Accepted</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <Calendar className="h-5 w-5" />
                Book Appointment
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="h-5 w-5" />
                Call {SITE_CONFIG.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Complete Medical Care Under One Roof
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From urgent care to specialized treatments, we provide comprehensive
              services to address all your healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((service) => (
              <InteractiveCard key={service.id} href={service.href}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    {service.icon === "Clock" && <Clock className="h-6 w-6" />}
                    {service.icon === "Activity" && <Activity className="h-6 w-6" />}
                    {service.icon === "Stethoscope" && <Stethoscope className="h-6 w-6" />}
                    {service.icon !== "Clock" && service.icon !== "Activity" && service.icon !== "Stethoscope" && (
                      <Activity className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access CTAs */}
      <section className="section bg-slate-900 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Get the Care You Need Today
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We specialize in injury treatment with same-day appointments and
              streamlined documentation for insurance and legal cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Auto Accident Injury?",
                description:
                  "Get comprehensive documentation and treatment for your injury claim.",
                cta: "Start Your Evaluation",
                href: "/services/injuries/motor-vehicle-accidents",
              },
              {
                title: "Workplace Injury?",
                description:
                  "Expert workers' compensation care with employer coordination.",
                cta: "File Your Claim",
                href: "/services/injuries/workers-compensation",
              },
              {
                title: "Chronic Pain?",
                description:
                  "Advanced pain management treatments from epidurals to nerve blocks.",
                cta: "Find Relief",
                href: "/services/pain-management",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.description}</p>
                <span className="inline-flex items-center text-teal-400 font-medium group-hover:text-teal-300">
                  {item.cta}
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
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
                Trusted by Arlington Heights for 15+ Years
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                At Rand Medical Center, we combine advanced treatments with
                compassionate care. Our Joint Commission-accredited facility and
                board-certified specialists ensure you receive the highest quality
                medical care.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {TRUST_BADGES.slice(0, 6).map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50"
                  >
                    <div className="text-teal-500">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle>Ready to Feel Better?</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-slate-600">
                    Schedule your consultation today and take the first step toward
                    relief.
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full">
                      <Calendar className="h-5 w-5" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="h-5 w-5" />
                      Call {SITE_CONFIG.phoneDisplay}
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    Same-day appointments available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container container-default mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Rand Medical Center</h3>
              <p className="text-slate-400 text-sm mb-4">
                Comprehensive medical care for pain management, orthopedics,
                physical therapy, and immediate care.
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4" />
                {SITE_CONFIG.address.full}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="/services/pain-management" className="hover:text-teal-400">
                    Pain Management
                  </a>
                </li>
                <li>
                  <a href="/services/orthopedics" className="hover:text-teal-400">
                    Orthopedics
                  </a>
                </li>
                <li>
                  <a href="/services/physical-therapy" className="hover:text-teal-400">
                    Physical Therapy
                  </a>
                </li>
                <li>
                  <a href="/immediate-care" className="hover:text-teal-400">
                    Immediate Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Patients</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="/patients/insurance-pricing" className="hover:text-teal-400">
                    Insurance & Pricing
                  </a>
                </li>
                <li>
                  <a href="/patients/forms" className="hover:text-teal-400">
                    Patient Forms
                  </a>
                </li>
                <li>
                  <a href="/patients/faq" className="hover:text-teal-400">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-teal-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="flex items-center gap-2 hover:text-teal-400"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {SITE_CONFIG.hours.display}
                </div>
                <Button size="sm" className="mt-4">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Rand Medical Center. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/legal/privacy-policy" className="hover:text-teal-400">
                Privacy Policy
              </a>
              <a href="/legal/terms" className="hover:text-teal-400">
                Terms of Use
              </a>
              <a href="/accessibility" className="hover:text-teal-400">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
