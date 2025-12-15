// Site Information
export const SITE_CONFIG = {
  name: "Rand Medical Center",
  shortName: "RMC",
  domain: "https://www.randmedicalcenter.com",
  description:
    "Comprehensive medical care in Arlington Heights, IL. Pain management, orthopedics, physical therapy, immediate care, and outpatient surgery. Joint Commission accredited.",
  phone: "+1-224-735-3522",
  phoneDisplay: "(224) 735-3522",
  phoneTel: "tel:+12247353522",
  email: "info@randmedicalcenter.com",
  address: {
    street: "1925 E Rand Rd",
    city: "Arlington Heights",
    state: "IL",
    zip: "60004",
    full: "1925 E Rand Rd, Arlington Heights, IL 60004",
  },
  hours: {
    weekdays: "9:00 AM - 5:00 PM",
    weekend: "Closed",
    display: "Mon-Fri 9am-5pm",
  },
  bookingUrl: "https://www.tebra.com/care/practice/rand-medical-center-456192",
  socialMedia: {
    facebook: "https://www.facebook.com/RandMedicalCenter",
    instagram: "https://www.instagram.com/randmedicalcenter_/",
    twitter: "https://x.com/rand_medical",
    linkedin: "",
    youtube: "",
  },
} as const;

// Navigation
export const NAV_ITEMS = {
  main: [
    { label: "Immediate Care", href: "/immediate-care", highlight: true },
    {
      label: "Services",
      href: "/services",
      megaMenu: true,
      children: [
        {
          category: "Internal Medicine",
          items: [
            { label: "Primary Care", href: "/services/internal-medicine" },
            { label: "View All Services", href: "/services/internal-medicine" },
          ],
        },
        {
          category: "Pain Management",
          items: [
            { label: "Epidural Injections", href: "/treatments/epidural-steroid-injections" },
            { label: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
            { label: "Joint Injections", href: "/treatments/joint-injections" },
            { label: "Nerve Blocks", href: "/treatments/selective-nerve-root-block" },
            { label: "View All", href: "/services/pain-management" },
          ],
        },
        {
          category: "Orthopedics",
          items: [
            { label: "Shoulder Pain", href: "/conditions/shoulder-pain" },
            { label: "Knee Pain", href: "/conditions/knee-pain" },
            { label: "Hip Pain", href: "/conditions/hip-pain" },
            { label: "Sports Injuries", href: "/conditions/sports-injuries" },
            { label: "View All", href: "/services/orthopedics" },
          ],
        },
        {
          category: "Physical Therapy",
          items: [
            { label: "Physical Therapy", href: "/treatments/physical-therapy" },
            { label: "View All", href: "/services/physical-therapy" },
          ],
        },
        {
          category: "Treatments",
          items: [
            { label: "PRP Therapy", href: "/treatments/prp-therapy" },
            { label: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
            { label: "View All Treatments", href: "/treatments" },
          ],
        },
        {
          category: "Injuries & Claims",
          items: [
            { label: "Auto Accidents", href: "/conditions/auto-injury" },
            { label: "Workers' Comp", href: "/conditions/workplace-injury" },
            { label: "Immediate Care", href: "/immediate-care" },
          ],
        },
        {
          category: "Surgery Center",
          items: [
            { label: "Surgery Center", href: "/surgery-center" },
          ],
        },
      ],
    },
    { label: "Conditions", href: "/conditions" },
    { label: "Treatments", href: "/treatments" },
    { label: "Providers", href: "/providers" },
    {
      label: "Patients",
      href: "/patients",
      children: [
        { label: "Insurance & Pricing", href: "/patients/insurance-pricing" },
        { label: "Patient Forms", href: "/patients/forms" },
        { label: "FAQs", href: "/patients/faq" },
      ],
    },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Mission", href: "/about/mission" },
        { label: "Accreditation", href: "/about/accreditation" },
        { label: "Our Facility", href: "/about/facility" },
      ],
    },
    { label: "Blog", href: "/blog" },
  ],
  utility: [
    { label: "Insurance & Pricing", href: "/patients/insurance-pricing" },
    { label: "Patient Forms", href: "/patients/forms" },
    { label: "FAQs", href: "/patients/faq" },
  ],
  footer: {
    services: [
      { label: "Pain Management", href: "/services/pain-management" },
      { label: "Orthopedics", href: "/services/orthopedics" },
      { label: "Physical Therapy", href: "/services/physical-therapy" },
      { label: "Immediate Care", href: "/immediate-care" },
      { label: "Internal Medicine", href: "/services/internal-medicine" },
      { label: "Surgery Center", href: "/surgery-center" },
    ],
    conditions: [
      { label: "Back Pain", href: "/conditions/back-pain" },
      { label: "Sciatica", href: "/conditions/sciatica" },
      { label: "Neck Pain", href: "/conditions/neck-pain" },
      { label: "Knee Pain", href: "/conditions/knee-pain" },
      { label: "Shoulder Pain", href: "/conditions/shoulder-pain" },
      { label: "All Conditions", href: "/conditions" },
    ],
    patients: [
      { label: "Insurance & Pricing", href: "/patients/insurance-pricing" },
      { label: "Patient Forms", href: "/patients/forms" },
      { label: "FAQs", href: "/patients/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "HIPAA Notice", href: "/legal/notice-of-privacy-practices" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Nondiscrimination", href: "/legal/nondiscrimination" },
    ],
  },
} as const;

// Providers
export const PROVIDERS = [
  {
    id: "demetrios-giokaris-md",
    name: "Dr. Demetrios Giokaris",
    credentials: "MD",
    title: "Chief Physician",
    specialty: "Internal Medicine",
    slug: "demetrios-giokaris-md",
    image: "/images/providers/dr-giokaris.jpg",
  },
  {
    id: "krishna-chunduri-md",
    name: "Dr. Krishna C. Chunduri",
    credentials: "MD",
    title: "Pain Management Specialist",
    specialty: "Pain Management",
    slug: "krishna-chunduri-md",
    image: "/images/providers/dr-chunduri.jpg",
  },
  {
    id: "christos-giannoulias-md",
    name: "Dr. Christos S. Giannoulias",
    credentials: "MD",
    title: "Orthopedic Surgeon",
    specialty: "Orthopedic Surgery",
    slug: "christos-giannoulias-md",
    image: "/images/providers/dr-giannoulias.jpg",
  },
  {
    id: "thomas-poepping-md",
    name: "Dr. Thomas Poepping",
    credentials: "MD",
    title: "Orthopedic Surgeon",
    specialty: "Orthopedic Surgery",
    slug: "thomas-poepping-md",
    image: "/images/providers/dr-poepping.jpg",
  },
  {
    id: "ruben-bermudez-pa",
    name: "Ruben Bermudez",
    credentials: "PA",
    title: "Physician Assistant",
    specialty: "General Medicine",
    slug: "ruben-bermudez-pa",
    image: "/images/providers/ruben-bermudez.jpg",
  },
] as const;

// Service Categories
export const SERVICE_CATEGORIES = [
  {
    id: "immediate-care",
    name: "Immediate Care",
    description: "Walk-in and same-day care for urgent medical needs",
    icon: "Clock",
    href: "/immediate-care",
    color: "amber",
  },
  {
    id: "pain-management",
    name: "Pain Management",
    description: "Advanced treatments for chronic and acute pain",
    icon: "Activity",
    href: "/services/pain-management",
    color: "teal",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Expert care for bones, joints, and musculoskeletal conditions",
    icon: "Bone",
    href: "/services/orthopedics",
    color: "blue",
  },
  {
    id: "physical-therapy",
    name: "Physical Therapy",
    description: "Rehabilitation and recovery programs",
    icon: "Dumbbell",
    href: "/services/physical-therapy",
    color: "green",
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    description: "Primary care, preventive medicine, and chronic disease management",
    icon: "Stethoscope",
    href: "/services/internal-medicine",
    color: "purple",
  },
  {
    id: "surgery-center",
    name: "Surgery Center",
    description: "Joint Commission accredited outpatient surgical facility",
    icon: "Hospital",
    href: "/surgery-center",
    color: "rose",
  },
] as const;

// Trust Badges
export const TRUST_BADGES = [
  { label: "Joint Commission Accredited", icon: "Award" },
  { label: "Board Certified Specialists", icon: "BadgeCheck" },
  { label: "Same-Day Appointments", icon: "Calendar" },
  { label: "On-Site X-Ray & Labs", icon: "Microscope" },
  { label: "Most Insurance Accepted", icon: "CreditCard" },
  { label: "15+ Years Experience", icon: "Clock" },
] as const;
