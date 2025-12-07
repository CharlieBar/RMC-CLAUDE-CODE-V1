import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllConditionSlugs } from "@/lib/conditions";
import { getAllBlogSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/pain-management",
    "/services/orthopedics",
    "/services/physical-therapy",
    "/services/internal-medicine",
    "/immediate-care",
    "/surgery-center",
    "/conditions",
    "/blog",
    "/patients/insurance-pricing",
    "/patients/faq",
    "/patients/forms",
    "/legal/privacy-policy",
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

  // Blog pages
  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...conditionPages, ...blogPages];
}
