"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="font-bold text-slate-900">Rand Medical</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-700"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* CTAs */}
        <div className="p-4 border-b border-slate-200 space-y-3">
          <Button size="lg" className="w-full">
            <Calendar className="h-5 w-5" />
            Book Appointment
          </Button>
          <a
            href={SITE_CONFIG.phoneTel}
            className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 rounded-full text-slate-700 font-medium hover:bg-slate-200 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call {SITE_CONFIG.phoneDisplay}
          </a>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.main.map((item) => {
              const hasMegaMenu = "megaMenu" in item && item.megaMenu;
              const hasChildren = "children" in item && item.children;
              const isHighlight = "highlight" in item && item.highlight;

              return (
                <li key={item.href}>
                  {hasChildren ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-colors",
                          isHighlight
                            ? "bg-amber-100 text-amber-700"
                            : "text-slate-700 hover:bg-slate-100"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            expandedItems.includes(item.label) && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Submenu */}
                      {expandedItems.includes(item.label) && (
                        <div className="mt-1 ml-4 pl-4 border-l-2 border-slate-200">
                          {hasMegaMenu ? (
                            // Mega menu items
                            (item.children as unknown as Array<{ category: string; items: Array<{ label: string; href: string }> }>).map((category) => (
                              <div key={category.category} className="mb-4">
                                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                  {category.category}
                                </h4>
                                <ul className="space-y-1">
                                  {category.items.map((subItem) => (
                                    <li key={subItem.href}>
                                      <Link
                                        href={subItem.href}
                                        onClick={onClose}
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-teal-600 rounded-lg hover:bg-slate-50"
                                      >
                                        <ChevronRight className="h-4 w-4" />
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            // Simple dropdown items
                            <ul className="space-y-1">
                              {(item.children as unknown as Array<{ label: string; href: string }>).map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-teal-600 rounded-lg hover:bg-slate-50"
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block px-4 py-3 rounded-lg font-medium transition-colors",
                        isHighlight
                          ? "bg-amber-100 text-amber-700"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="p-4 mt-auto border-t border-slate-200 bg-slate-50">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-slate-900">
                {SITE_CONFIG.address.street}
              </p>
              <p>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                {SITE_CONFIG.address.zip}
              </p>
              <p className="mt-1 text-slate-500">{SITE_CONFIG.hours.display}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
