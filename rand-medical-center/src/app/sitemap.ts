import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllConditionSlugs } from "@/lib/conditions";
import { getAllBlogSlugs } from "@/lib/blog";
import { getAllTreatmentSlugs } from "@/lib/treatments";
import { getAllProviderSlugs } from "@/lib/providers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/about/mission",
    "/about/facility",
    "/about/accreditation",
    "/contact",
    "/services",
    "/services/pain-management",
    "/services/orthopedics",
    "/services/physical-therapy",
    "/services/internal-medicine",
    "/immediate-care",
    "/surgery-center",
    "/conditions",
    "/treatments",
    "/providers",
    "/blog",
    "/patients",
    "/patients/insurance-pricing",
    "/patients/faq",
    "/patients/forms",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/nondiscrimination",
    "/legal/notice-of-privacy-practices",
    "/accessibility",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.includes("/services") ? 0.9 : 0.8,
  }));

  // Condition pages
  const conditionPages = getAllConditionSlugs().map((slug) => ({
    url: `${baseUrl}/conditions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Treatment pages
  const treatmentPages = getAllTreatmentSlugs().map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Provider pages
  const providerPages = getAllProviderSlugs().map((slug) => ({
    url: `${baseUrl}/providers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog pages
  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...conditionPages, ...treatmentPages, ...providerPages, ...blogPages];
}
