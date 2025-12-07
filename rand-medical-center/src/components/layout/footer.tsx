import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Award,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container container-default mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Rand Medical
                </div>
                <div className="text-xs text-slate-400 -mt-0.5">Center</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Comprehensive medical care for pain management, orthopedics,
              physical therapy, and immediate care. Joint Commission accredited
              facility serving Arlington Heights and the Northwest Chicago suburbs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Phone className="h-5 w-5 text-teal-500" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="h-5 w-5 text-teal-500" />
                {SITE_CONFIG.hours.weekdays}
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
                <Award className="h-5 w-5 text-amber-400" />
                <span className="text-xs text-slate-300">
                  Joint Commission
                  <br />
                  Accredited
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.footer.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Conditions</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.footer.conditions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patients Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Patients</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.footer.patients.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Button size="sm" className="w-full">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container container-default mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-400 text-center md:text-left">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {NAV_ITEMS.footer.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SITE_CONFIG.socialMedia.facebook && (
                <a
                  href={SITE_CONFIG.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {SITE_CONFIG.socialMedia.instagram && (
                <a
                  href={SITE_CONFIG.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {SITE_CONFIG.socialMedia.linkedin && (
                <a
                  href={SITE_CONFIG.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {SITE_CONFIG.socialMedia.youtube && (
                <a
                  href={SITE_CONFIG.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
