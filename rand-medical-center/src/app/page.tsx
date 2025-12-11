import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard, Card, CardHeader, CardTitle, CardContent, GlassCard } from "@/components/ui/card";
import { SITE_CONFIG, SERVICE_CATEGORIES, TRUST_BADGES, PROVIDERS } from "@/lib/constants";
import {
  Phone,
  Calendar,
  Clock,
  ChevronRight,
  Activity,
  Stethoscope,
  Award,
  BadgeCheck,
  CreditCard,
  MapPin,
  Star,
  Quote,
  UserCircle,
  Building2,
  Bone,
  Dumbbell,
  Hospital,
} from "lucide-react";

// Icon mapping for service categories
const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="h-6 w-6" />,
  Activity: <Activity className="h-6 w-6" />,
  Stethoscope: <Stethoscope className="h-6 w-6" />,
  Bone: <Bone className="h-6 w-6" />,
  Dumbbell: <Dumbbell className="h-6 w-6" />,
  Hospital: <Hospital className="h-6 w-6" />,
};

// Conditions we commonly treat
const CONDITIONS = [
  { name: "Back Pain", href: "/conditions/back-pain" },
  { name: "Sciatica", href: "/conditions/sciatica" },
  { name: "Neck Pain", href: "/conditions/neck-pain" },
  { name: "Herniated Disc", href: "/conditions/herniated-disc" },
  { name: "Knee Pain", href: "/conditions/knee-pain" },
  { name: "Shoulder Pain", href: "/conditions/shoulder-pain" },
  { name: "Hip Pain", href: "/conditions/hip-pain" },
  { name: "Arthritis", href: "/conditions/arthritis" },
  { name: "Sports Injuries", href: "/conditions/sports-injuries" },
  { name: "Auto Injuries", href: "/conditions/auto-injury" },
  { name: "Carpal Tunnel", href: "/conditions/carpal-tunnel-syndrome" },
  { name: "Spinal Stenosis", href: "/conditions/spinal-stenosis" },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "After my car accident, I was in constant pain. Dr. Chunduri's treatment plan got me back on my feet within weeks. The staff here genuinely cares about your recovery.",
    author: "Michael R.",
    location: "Arlington Heights",
    rating: 5,
  },
  {
    quote: "I've seen several orthopedic surgeons over the years, but Dr. Giannoulias actually listened to my concerns and offered treatment options I hadn't heard of before.",
    author: "Sarah T.",
    location: "Mount Prospect",
    rating: 5,
  },
  {
    quote: "The physical therapy team helped me recover from my knee surgery faster than expected. Professional, encouraging, and thorough with every session.",
    author: "James L.",
    location: "Palatine",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
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
              <Button size="lg" className="group" asChild>
                <Link href={SITE_CONFIG.bookingUrl}>
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                    {iconMap[service.icon] || <Activity className="h-6 w-6" />}
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

      {/* Quick Access CTAs (Injuries) */}
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
                href: "/conditions/auto-injury",
              },
              {
                title: "Workplace Injury?",
                description:
                  "Expert workers' compensation care with employer coordination.",
                cta: "File Your Claim",
                href: "/conditions/workplace-injury",
              },
              {
                title: "Chronic Pain?",
                description:
                  "Advanced pain management treatments from epidurals to nerve blocks.",
                cta: "Find Relief",
                href: "/services/pain-management",
              },
            ].map((item, index) => (
              <Link
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Conditions We Treat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Expert Treatment for Common Conditions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our specialists diagnose and treat a wide range of musculoskeletal
              and pain conditions using evidence-based approaches.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.name}
                href={condition.href}
                className="group flex items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200"
              >
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                <span className="text-slate-700 group-hover:text-teal-600 font-medium transition-colors">
                  {condition.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/conditions">
                View All Conditions
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Providers */}
      <section className="section bg-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
              Meet Our Board-Certified Specialists
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our experienced medical team brings decades of combined expertise
              in pain management, orthopedics, and primary care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROVIDERS.slice(0, 4).map((provider) => (
              <Link
                key={provider.id}
                href={`/providers/${provider.slug}`}
                className="group text-center"
              >
                <div className="relative mb-4 aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserCircle className="h-24 w-24 text-slate-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {provider.name}
                </h3>
                <p className="text-sm text-teal-600 font-medium">{provider.specialty}</p>
                <p className="text-sm text-slate-500">{provider.title}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/providers">
                Meet All Providers
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container container-default mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Patient Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Real feedback from patients who have experienced our care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <GlassCard key={index} className="relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-white/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <UserCircle className="h-6 w-6 text-white/60" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-teal-200">{testimonial.location}</p>
                  </div>
                </div>
              </GlassCard>
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
                    <Button size="lg" className="w-full" asChild>
                      <Link href={SITE_CONFIG.bookingUrl}>
                        <Calendar className="h-5 w-5" />
                        Book Appointment
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href={SITE_CONFIG.phoneTel}>
                        <Phone className="h-5 w-5" />
                        Call {SITE_CONFIG.phoneDisplay}
                      </a>
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

      {/* Location Section */}
      <section className="section bg-slate-50">
        <div className="container container-default mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative aspect-video lg:aspect-square rounded-2xl bg-slate-200 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Building2 className="h-16 w-16 mb-4" />
                <p className="font-medium">Map Location</p>
              </div>
              {/* Real map can be added here */}
            </div>

            <div>
              <Badge variant="secondary" className="mb-4">
                Visit Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Conveniently Located in Arlington Heights
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      {SITE_CONFIG.address.street}<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: {SITE_CONFIG.hours.weekdays}<br />
                      Saturday - Sunday: {SITE_CONFIG.hours.weekend}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container container-default mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Start Your Journey to Pain Relief Today
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Don&apos;t let pain control your life. Our experienced team is ready to help
            you get back to doing what you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
              <Link href={SITE_CONFIG.bookingUrl}>
                <Calendar className="h-5 w-5" />
                Book Your Appointment
              </Link>
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
      </section>
    </>
  );
}
