import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} | Comprehensive Medical Care in Arlington Heights, IL`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "pain management arlington heights",
    "orthopedic doctor arlington heights",
    "physical therapy arlington heights",
    "immediate care arlington heights",
    "back pain treatment",
    "sciatica doctor",
    "joint injection",
    "epidural steroid injection",
    "sports injury doctor",
    "workers comp doctor",
    "auto accident injury treatment",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Comprehensive Medical Care in Arlington Heights, IL`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Medical Care in Arlington Heights`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Medical Care in Arlington Heights`,
    description: SITE_CONFIG.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "verification_token",
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  logo: `${SITE_CONFIG.domain}/images/logo.png`,
  image: `${SITE_CONFIG.domain}/images/facility.jpg`,
  description: SITE_CONFIG.description,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.0654,
    longitude: -87.9806,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  medicalSpecialty: [
    "Pain Management",
    "Orthopedics",
    "Physical Therapy",
    "Internal Medicine",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Epidural Steroid Injection",
    },
    {
      "@type": "MedicalProcedure",
      name: "Joint Injection",
    },
    {
      "@type": "MedicalTherapy",
      name: "Physical Therapy",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Joint Commission Accreditation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Fonts - Load in production */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
