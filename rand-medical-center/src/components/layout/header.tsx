"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import {
  Phone,
  Calendar,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container container-default mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">{SITE_CONFIG.hours.display}</span>
          </div>
          <div className="flex items-center gap-4">
            {NAV_ITEMS.utility.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        )}
      >
        <div className="container container-default mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-slate-900 text-lg leading-tight">
                  Rand Medical
                </div>
                <div className="text-xs text-slate-500 -mt-0.5">Center</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.main.map((item) => {
                const hasMegaMenu = "megaMenu" in item && item.megaMenu;
                const hasChildren = "children" in item && item.children;
                const isHighlight = "highlight" in item && item.highlight;

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => (hasMegaMenu || hasChildren) && setActiveMenu(item.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        isHighlight
                          ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                          : "text-slate-700 hover:text-teal-600 hover:bg-slate-100"
                      )}
                    >
                      {item.label}
                      {(hasMegaMenu || hasChildren) && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Link>

                    {/* Mega Menu */}
                    {hasMegaMenu && hasChildren && activeMenu === item.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 min-w-[800px]">
                          <div className="grid grid-cols-4 gap-6">
                            {(item.children as unknown as Array<{ category: string; items: Array<{ label: string; href: string }> }>).slice(0, 8).map((category) => (
                              <div key={category.category}>
                                <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                                  {category.category}
                                </h3>
                                <ul className="space-y-2">
                                  {category.items.map((subItem) => (
                                    <li key={subItem.href}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-slate-600 hover:text-teal-600 transition-colors"
                                      >
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Simple Dropdown */}
                    {hasChildren && !hasMegaMenu && activeMenu === item.label && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 py-2 min-w-[200px]">
                          {(item.children as unknown as Array<{ label: string; href: string }>).map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <Button size="sm" className="hidden sm:flex">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-teal-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
