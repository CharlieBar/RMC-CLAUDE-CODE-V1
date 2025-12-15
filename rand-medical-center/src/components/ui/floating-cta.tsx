"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, X } from "lucide-react";
import { Button } from "./button";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setHasScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || !hasScrolled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden animate-fade-in-up">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-slate-900/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative container container-default mx-auto p-4">
        <div className="flex items-center gap-3">
          {/* Main CTA Button */}
          <Button
            size="lg"
            shine
            prominent
            className="flex-1 shadow-lg shadow-teal-500/50"
            asChild
          >
            <Link href={SITE_CONFIG.bookingUrl}>
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Link>
          </Button>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            aria-label="Close floating button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick info */}
        <p className="text-xs text-white/60 text-center mt-2">
          Same-day appointments available • Most insurance accepted
        </p>
      </div>
    </div>
  );
}
