// Provider data with detailed information

export interface Provider {
  id: string;
  slug: string;
  name: string;
  credentials: string;
  title: string;
  specialty: string;
  image: string;
  bio: string;
  education: string[];
  certifications: string[];
  specializations: string[];
  languages: string[];
  acceptsNewPatients: boolean;
  metaDescription: string;
}

export const PROVIDERS_DATA: Provider[] = [
  {
    id: "demetrios-giokaris-md",
    slug: "demetrios-giokaris-md",
    name: "Dr. Demetrios Giokaris",
    credentials: "MD",
    title: "Chief Physician",
    specialty: "Internal Medicine",
    image: "/images/providers/dr-giokaris.jpg",
    bio: "Dr. Demetrios Giokaris has been serving the Arlington Heights community for over 15 years as the Chief Physician at Rand Medical Center. His approach to medicine focuses on building lasting relationships with patients and providing comprehensive care that addresses the whole person, not just symptoms. Dr. Giokaris believes in taking the time to listen to each patient's concerns and working together to develop treatment plans that fit their lifestyle and goals. Whether managing chronic conditions like diabetes and hypertension or providing preventive care, he is committed to helping patients achieve their best health.",
    education: [
      "Doctor of Medicine, University of Illinois College of Medicine",
      "Bachelor of Science in Biology, University of Illinois at Chicago",
      "Residency in Internal Medicine, Advocate Lutheran General Hospital"
    ],
    certifications: [
      "American Board of Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)"
    ],
    specializations: [
      "Preventive Medicine",
      "Chronic Disease Management",
      "Executive Health Examinations",
      "Hypertension Management",
      "Diabetes Care",
      "Geriatric Medicine"
    ],
    languages: ["English", "Greek"],
    acceptsNewPatients: true,
    metaDescription: "Dr. Demetrios Giokaris is the Chief Physician at Rand Medical Center, specializing in internal medicine, preventive care, and chronic disease management in Arlington Heights, IL."
  },
  {
    id: "krishna-chunduri-md",
    slug: "krishna-chunduri-md",
    name: "Dr. Krishna C. Chunduri",
    credentials: "MD",
    title: "Pain Management Specialist",
    specialty: "Pain Management",
    image: "/images/providers/dr-chunduri.jpg",
    bio: "Dr. Krishna Chunduri is dedicated to helping patients find relief from chronic pain and regain their quality of life. With specialized training in interventional pain management, he uses the latest techniques to treat conditions ranging from back pain and sciatica to complex regional pain syndrome. Dr. Chunduri understands that living with chronic pain affects every aspect of life, and he works closely with each patient to develop a personalized treatment approach. His goal is always to reduce reliance on medications while improving function and comfort through minimally invasive procedures.",
    education: [
      "Doctor of Medicine, Ross University School of Medicine",
      "Residency in Anesthesiology, Mount Sinai Hospital",
      "Fellowship in Pain Management, Rush University Medical Center"
    ],
    certifications: [
      "American Board of Anesthesiology",
      "Subspecialty Certification in Pain Medicine",
      "Advanced Cardiac Life Support (ACLS)"
    ],
    specializations: [
      "Epidural Steroid Injections",
      "Radiofrequency Ablation",
      "Spinal Cord Stimulation",
      "Joint Injections",
      "Nerve Blocks",
      "Regenerative Medicine"
    ],
    languages: ["English", "Hindi", "Telugu"],
    acceptsNewPatients: true,
    metaDescription: "Dr. Krishna Chunduri is a board-certified pain management specialist at Rand Medical Center, providing advanced interventional pain treatments in Arlington Heights, IL."
  },
  {
    id: "christos-giannoulias-md",
    slug: "christos-giannoulias-md",
    name: "Dr. Christos S. Giannoulias",
    credentials: "MD",
    title: "Orthopedic Surgeon",
    specialty: "Orthopedic Surgery",
    image: "/images/providers/dr-giannoulias.jpg",
    bio: "Dr. Christos Giannoulias brings both surgical expertise and a compassionate approach to treating orthopedic conditions. He specializes in sports medicine and joint preservation, helping patients return to active lifestyles after injuries. Dr. Giannoulias believes that surgery should be a last resort, and he often works with patients to explore non-surgical options first. When surgery is the best path forward, he uses minimally invasive arthroscopic techniques whenever possible to speed recovery. His patients appreciate his straightforward communication style and his commitment to explaining all treatment options clearly.",
    education: [
      "Doctor of Medicine, Loyola University Chicago Stritch School of Medicine",
      "Bachelor of Science in Kinesiology, University of Illinois",
      "Residency in Orthopedic Surgery, Rush University Medical Center",
      "Fellowship in Sports Medicine, Midwest Orthopaedics at Rush"
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Certificate of Added Qualification in Sports Medicine",
      "Advanced Trauma Life Support (ATLS)"
    ],
    specializations: [
      "Knee Arthroscopy",
      "Shoulder Surgery",
      "ACL Reconstruction",
      "Rotator Cuff Repair",
      "Sports Injuries",
      "Joint Preservation"
    ],
    languages: ["English", "Greek"],
    acceptsNewPatients: true,
    metaDescription: "Dr. Christos Giannoulias is a board-certified orthopedic surgeon specializing in sports medicine and minimally invasive joint surgery at Rand Medical Center in Arlington Heights, IL."
  },
  {
    id: "thomas-poepping-md",
    slug: "thomas-poepping-md",
    name: "Dr. Thomas Poepping",
    credentials: "MD",
    title: "Orthopedic Surgeon",
    specialty: "Orthopedic Surgery",
    image: "/images/providers/dr-poepping.jpg",
    bio: "Dr. Thomas Poepping specializes in treating complex orthopedic conditions, with particular expertise in hip and knee replacement surgery. He has helped hundreds of patients regain mobility and reduce pain through joint replacement procedures. Dr. Poepping takes pride in his careful surgical technique and his dedication to achieving the best possible outcomes for each patient. He understands that the decision to have joint replacement surgery is significant, and he spends considerable time educating patients about what to expect before, during, and after their procedure.",
    education: [
      "Doctor of Medicine, Northwestern University Feinberg School of Medicine",
      "Bachelor of Science in Biomedical Engineering, Northwestern University",
      "Residency in Orthopedic Surgery, Northwestern Memorial Hospital",
      "Fellowship in Adult Reconstruction, Hospital for Special Surgery"
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Certificate of Added Qualification in Adult Reconstructive Surgery",
      "Advanced Trauma Life Support (ATLS)"
    ],
    specializations: [
      "Total Hip Replacement",
      "Total Knee Replacement",
      "Partial Knee Replacement",
      "Hip Resurfacing",
      "Revision Joint Surgery",
      "Complex Joint Reconstruction"
    ],
    languages: ["English", "German"],
    acceptsNewPatients: true,
    metaDescription: "Dr. Thomas Poepping is a board-certified orthopedic surgeon specializing in hip and knee replacement surgery at Rand Medical Center in Arlington Heights, IL."
  },
  {
    id: "ruben-bermudez-pa",
    slug: "ruben-bermudez-pa",
    name: "Ruben Bermudez",
    credentials: "PA-C",
    title: "Physician Assistant",
    specialty: "General Medicine",
    image: "/images/providers/ruben-bermudez.jpg",
    bio: "Ruben Bermudez is a certified physician assistant with a warm, patient-centered approach to healthcare. He works alongside the physicians at Rand Medical Center to provide comprehensive care for a wide range of medical conditions. Ruben is known for his excellent bedside manner and his ability to put anxious patients at ease. He takes time to thoroughly explain diagnoses and treatment plans, ensuring patients feel confident and informed about their care. His bilingual abilities allow him to serve the diverse Arlington Heights community effectively.",
    education: [
      "Master of Science in Physician Assistant Studies, Midwestern University",
      "Bachelor of Science in Biology, Northeastern Illinois University",
      "Clinical Rotations in Internal Medicine, Emergency Medicine, and Surgery"
    ],
    certifications: [
      "National Commission on Certification of Physician Assistants (NCCPA)",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)",
      "Pediatric Advanced Life Support (PALS)"
    ],
    specializations: [
      "Primary Care",
      "Urgent Care",
      "Minor Procedures",
      "Patient Education",
      "Chronic Disease Management",
      "Preventive Care"
    ],
    languages: ["English", "Spanish"],
    acceptsNewPatients: true,
    metaDescription: "Ruben Bermudez is a certified physician assistant at Rand Medical Center, providing comprehensive primary and urgent care services in Arlington Heights, IL."
  }
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return PROVIDERS_DATA.find((provider) => provider.slug === slug);
}

export function getAllProviderSlugs(): string[] {
  return PROVIDERS_DATA.map((provider) => provider.slug);
}

export function getProvidersBySpecialty(specialty: string): Provider[] {
  return PROVIDERS_DATA.filter((provider) => provider.specialty === specialty);
}
