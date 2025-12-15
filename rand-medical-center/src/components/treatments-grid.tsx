"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ChevronRight } from "lucide-react";
import { TREATMENTS } from "@/lib/treatments";

export function TreatmentsGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter treatments based on search query
  const filteredTreatments = useMemo(() => {
    if (!searchQuery.trim()) return TREATMENTS;

    const query = searchQuery.toLowerCase();
    return TREATMENTS.filter(
      (treatment) =>
        treatment.name.toLowerCase().includes(query) ||
        treatment.description.toLowerCase().includes(query) ||
        treatment.shortDescription.toLowerCase().includes(query) ||
        treatment.relatedConditions.some((cond) =>
          cond.name.toLowerCase().includes(query)
        )
    );
  }, [searchQuery]);

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search treatments by name, procedure, or condition..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 text-base border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="mt-3 text-sm text-slate-600 text-center">
            {filteredTreatments.length === 0
              ? "No treatments found"
              : `Showing ${filteredTreatments.length} ${
                  filteredTreatments.length === 1 ? "treatment" : "treatments"
                }`}
          </p>
        )}
      </div>

      {/* Treatments Grid */}
      {filteredTreatments.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-slate-600 mb-4">
            No treatments match your search.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Clear search and view all treatments
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment, index) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
              }}
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                {treatment.name}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                {treatment.shortDescription}
              </p>
              <div className="flex items-center text-sm text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                Learn more
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
