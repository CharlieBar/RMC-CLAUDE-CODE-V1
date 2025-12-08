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
  { name: "Whiplash", href: "/conditions/whiplash" },
  { name: "Carpal Tunnel", href: "/conditions/carpal-tunnel" },
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
              Get Back to Living{" "}
              <span className="gradient-text-medical">Pain-Free</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Whether you&apos;re dealing with chronic back pain, recovering from an
              injury, or just need to see a doctor today&mdash;we&apos;re here to help.
              Our Arlington Heights team treats over 5,000 patients each year,
              and we&apos;d like to help you too.
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
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No more driving across town for different specialists. Get your diagnosis,
              treatment, and therapy all coordinated by one team who actually talks to each other.
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
              Hurt? Let&apos;s Get You Feeling Better
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We see patients the same day they call. If you need documentation for
              insurance or a legal case, we handle that too&mdash;so you can focus on healing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Car Accident?",
                description:
                  "We'll document your injuries properly and get you the treatment you need. Most patients feel better within 4-6 weeks.",
                cta: "Get Help Now",
                href: "/services/injuries/motor-vehicle-accidents",
              },
              {
                title: "Hurt at Work?",
                description:
                  "We've handled thousands of workers' comp cases. We know the paperwork and we'll coordinate with your employer.",
                cta: "Start Your Claim",
                href: "/services/injuries/workers-compensation",
              },
              {
                title: "Living with Pain?",
                description:
                  "From epidural injections to nerve blocks, we have options when nothing else has worked. Many patients find relief after one visit.",
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
              We Treat These Every Day
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If you&apos;re dealing with any of these, you&apos;re not alone&mdash;and
              you don&apos;t have to keep suffering. Click any condition to learn how we can help.
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
              Doctors Who Actually Listen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our physicians have 15+ years of experience treating patients in Arlington Heights.
              They&apos;ll take the time to understand your situation and explain your options clearly.
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
              Don&apos;t Just Take Our Word For It
            </h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Hear from real patients in Arlington Heights and the surrounding area.
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
                We&apos;ve Been Doing This a Long Time
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Since 2008, we&apos;ve helped thousands of patients in Arlington Heights
                and the northwest suburbs. We&apos;re Joint Commission accredited, which means
                we meet the same safety standards as major hospitals. But what really
                matters is that you&apos;ll feel heard and cared for from the moment you walk in.
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
                  <CardTitle>Ready to Feel Like Yourself Again?</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-slate-600">
                    Let&apos;s figure out what&apos;s going on and get you on the path
                    to feeling better. Most new patients are seen within 24-48 hours.
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
                Easy to Find, Easy to Get To
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
            You Don&apos;t Have to Keep Living Like This
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Whether it&apos;s pain that won&apos;t go away, an injury that needs attention,
            or just time for a checkup&mdash;we&apos;re here when you&apos;re ready.
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
