// Detailed provider information for individual pages
export interface Provider {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  specialty: string;
  image: string;
  bio: string;
  education: string[];
  certifications: string[];
  specialties: string[];
  conditionsTreated: { name: string; href: string }[];
  proceduresPerformed: { name: string; href: string }[];
  languages: string[];
  acceptingNewPatients: boolean;
  metaDescription: string;
}

export const PROVIDERS_DETAILED: Provider[] = [
  {
    slug: "demetrios-giokaris-md",
    name: "Dr. Demetrios Giokaris",
    credentials: "MD",
    title: "Chief Physician",
    specialty: "Internal Medicine",
    image: "/images/providers/dr-giokaris.jpg",
    bio: "Dr. Demetrios Giokaris is the founder and Chief Physician of Rand Medical Center. With over 20 years of experience in internal medicine, he has dedicated his career to providing comprehensive primary care to the Arlington Heights community. Dr. Giokaris believes in building lasting relationships with patients and taking the time to understand each individual's health goals and concerns. His approach combines evidence-based medicine with personalized care, ensuring patients receive treatments tailored to their unique needs.",
    education: [
      "Medical Degree - Rush Medical College, Chicago, IL",
      "Residency in Internal Medicine - Advocate Lutheran General Hospital",
      "Bachelor of Science - University of Illinois at Urbana-Champaign",
    ],
    certifications: [
      "Board Certified in Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)",
    ],
    specialties: [
      "Primary Care",
      "Preventive Medicine",
      "Chronic Disease Management",
      "Diabetes Care",
      "Hypertension Management",
      "Annual Physicals",
    ],
    conditionsTreated: [
      { name: "Diabetes", href: "/conditions" },
      { name: "Hypertension", href: "/conditions" },
      { name: "High Cholesterol", href: "/conditions" },
      { name: "Thyroid Disorders", href: "/conditions" },
      { name: "Respiratory Infections", href: "/conditions" },
    ],
    proceduresPerformed: [
      { name: "Annual Physicals", href: "/services/internal-medicine/physicals" },
      { name: "Preventive Screenings", href: "/services/internal-medicine/preventive-care" },
      { name: "Chronic Disease Management", href: "/services/internal-medicine/chronic-disease-management" },
      { name: "Vaccinations", href: "/services/internal-medicine/vaccinations" },
    ],
    languages: ["English", "Greek"],
    acceptingNewPatients: true,
    metaDescription:
      "Dr. Demetrios Giokaris is a board-certified internal medicine physician and Chief Physician at Rand Medical Center in Arlington Heights. Schedule your appointment today.",
  },
  {
    slug: "krishna-chunduri-md",
    name: "Dr. Krishna C. Chunduri",
    credentials: "MD",
    title: "Pain Management Specialist",
    specialty: "Pain Management",
    image: "/images/providers/dr-chunduri.jpg",
    bio: "Dr. Krishna C. Chunduri is a fellowship-trained interventional pain management specialist with expertise in diagnosing and treating complex pain conditions. He specializes in minimally invasive procedures that target the source of pain, helping patients achieve lasting relief and improved quality of life. Dr. Chunduri takes a multimodal approach to pain management, combining advanced interventional techniques with physical therapy and medication management when appropriate.",
    education: [
      "Medical Degree - Gandhi Medical College, India",
      "Residency in Anesthesiology - Mount Sinai Medical Center, New York",
      "Fellowship in Interventional Pain Management - Texas Tech University",
    ],
    certifications: [
      "Board Certified in Anesthesiology",
      "Board Certified in Pain Medicine",
      "Fluoroscopy Certification",
    ],
    specialties: [
      "Interventional Pain Management",
      "Spine Injections",
      "Joint Injections",
      "Nerve Blocks",
      "Radiofrequency Ablation",
      "Spinal Cord Stimulation",
    ],
    conditionsTreated: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
      { name: "Sciatica", href: "/conditions/sciatica" },
      { name: "Herniated Disc", href: "/conditions/herniated-disc" },
      { name: "Arthritis", href: "/conditions/arthritis" },
      { name: "Neuropathy", href: "/conditions" },
    ],
    proceduresPerformed: [
      { name: "Epidural Steroid Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
      { name: "Facet Joint Injections", href: "/treatments/facet-joint-injections" },
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Selective Nerve Root Block", href: "/treatments/selective-nerve-root-block" },
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
    ],
    languages: ["English", "Hindi", "Telugu"],
    acceptingNewPatients: true,
    metaDescription:
      "Dr. Krishna Chunduri is a board-certified interventional pain management specialist at Rand Medical Center in Arlington Heights. Expert care for back pain, neck pain, and more.",
  },
  {
    slug: "christos-giannoulias-md",
    name: "Dr. Christos S. Giannoulias",
    credentials: "MD",
    title: "Orthopedic Surgeon",
    specialty: "Orthopedic Surgery",
    image: "/images/providers/dr-giannoulias.jpg",
    bio: "Dr. Christos S. Giannoulias is a board-certified orthopedic surgeon specializing in sports medicine and joint replacement. With extensive training in minimally invasive surgical techniques, Dr. Giannoulias helps patients recover faster and return to their active lifestyles. He has particular expertise in treating shoulder, knee, and hip conditions, utilizing both surgical and non-surgical approaches based on each patient's specific needs and goals.",
    education: [
      "Medical Degree - University of Illinois College of Medicine",
      "Residency in Orthopedic Surgery - Rush University Medical Center",
      "Fellowship in Sports Medicine - Midwest Orthopaedics at Rush",
    ],
    certifications: [
      "Board Certified in Orthopedic Surgery",
      "Certificate of Added Qualification in Sports Medicine",
    ],
    specialties: [
      "Sports Medicine",
      "Shoulder Surgery",
      "Knee Surgery",
      "Hip Arthroscopy",
      "Joint Replacement",
      "ACL Reconstruction",
    ],
    conditionsTreated: [
      { name: "Shoulder Pain", href: "/conditions/shoulder-pain" },
      { name: "Knee Pain", href: "/conditions/knee-pain" },
      { name: "Sports Injuries", href: "/conditions/sports-injuries" },
      { name: "Arthritis", href: "/conditions/arthritis" },
      { name: "Rotator Cuff Tears", href: "/conditions/shoulder-pain" },
    ],
    proceduresPerformed: [
      { name: "Knee Arthroscopy", href: "/services/orthopedics/knee" },
      { name: "Shoulder Arthroscopy", href: "/services/orthopedics/shoulder-rotator-cuff" },
      { name: "ACL Reconstruction", href: "/services/orthopedics/knee" },
      { name: "Rotator Cuff Repair", href: "/services/orthopedics/shoulder-rotator-cuff" },
      { name: "Joint Replacement", href: "/services/orthopedics" },
    ],
    languages: ["English", "Greek"],
    acceptingNewPatients: true,
    metaDescription:
      "Dr. Christos Giannoulias is a board-certified orthopedic surgeon specializing in sports medicine at Rand Medical Center in Arlington Heights.",
  },
  {
    slug: "thomas-poepping-md",
    name: "Dr. Thomas Poepping",
    credentials: "MD",
    title: "Orthopedic Surgeon",
    specialty: "Orthopedic Surgery",
    image: "/images/providers/dr-poepping.jpg",
    bio: "Dr. Thomas Poepping is a board-certified orthopedic surgeon with expertise in treating conditions of the hand, wrist, elbow, foot, and ankle. His subspecialty training allows him to address complex upper and lower extremity problems with precision and care. Dr. Poepping is committed to helping patients regain function and return to their daily activities through both conservative treatments and surgical interventions when necessary.",
    education: [
      "Medical Degree - Northwestern University Feinberg School of Medicine",
      "Residency in Orthopedic Surgery - Northwestern Memorial Hospital",
      "Fellowship in Hand and Upper Extremity Surgery - Indiana Hand to Shoulder Center",
    ],
    certifications: [
      "Board Certified in Orthopedic Surgery",
      "Certificate of Added Qualification in Hand Surgery",
    ],
    specialties: [
      "Hand Surgery",
      "Wrist Surgery",
      "Elbow Conditions",
      "Foot and Ankle Surgery",
      "Carpal Tunnel Release",
      "Fracture Care",
    ],
    conditionsTreated: [
      { name: "Carpal Tunnel Syndrome", href: "/conditions/carpal-tunnel-syndrome" },
      { name: "Plantar Fasciitis", href: "/conditions/plantar-fasciitis" },
      { name: "Arthritis", href: "/conditions/arthritis" },
      { name: "Fractures", href: "/conditions" },
      { name: "Trigger Finger", href: "/conditions" },
    ],
    proceduresPerformed: [
      { name: "Carpal Tunnel Release", href: "/services/orthopedics/hand-wrist-elbow" },
      { name: "Hand Surgery", href: "/services/orthopedics/hand-wrist-elbow" },
      { name: "Foot and Ankle Surgery", href: "/services/orthopedics/foot-ankle" },
      { name: "Fracture Repair", href: "/services/orthopedics/fracture-care" },
    ],
    languages: ["English"],
    acceptingNewPatients: true,
    metaDescription:
      "Dr. Thomas Poepping is a board-certified orthopedic surgeon specializing in hand, wrist, and foot/ankle conditions at Rand Medical Center in Arlington Heights.",
  },
  {
    slug: "ruben-bermudez-pa",
    name: "Ruben Bermudez",
    credentials: "PA-C",
    title: "Physician Assistant",
    specialty: "General Medicine",
    image: "/images/providers/ruben-bermudez.jpg",
    bio: "Ruben Bermudez is a certified physician assistant with experience in both primary care and urgent care settings. He works closely with the medical team at Rand Medical Center to provide high-quality patient care across multiple specialties. Ruben is known for his thorough approach to patient evaluation and his ability to explain complex medical information in an accessible way. He is fluent in both English and Spanish, allowing him to serve the diverse Arlington Heights community.",
    education: [
      "Master of Physician Assistant Studies - Midwestern University",
      "Bachelor of Science in Biology - University of Illinois at Chicago",
    ],
    certifications: [
      "Certified Physician Assistant (PA-C)",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)",
    ],
    specialties: [
      "Primary Care",
      "Urgent Care",
      "Pre-operative Evaluations",
      "Minor Procedures",
      "Patient Education",
    ],
    conditionsTreated: [
      { name: "Acute Illnesses", href: "/immediate-care" },
      { name: "Minor Injuries", href: "/immediate-care" },
      { name: "Chronic Disease Follow-up", href: "/services/internal-medicine" },
    ],
    proceduresPerformed: [
      { name: "Wound Care", href: "/immediate-care" },
      { name: "Minor Procedures", href: "/immediate-care" },
      { name: "Injections", href: "/services/pain-management" },
    ],
    languages: ["English", "Spanish"],
    acceptingNewPatients: true,
    metaDescription:
      "Ruben Bermudez is a certified physician assistant at Rand Medical Center in Arlington Heights. Bilingual care in English and Spanish.",
  },
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return PROVIDERS_DETAILED.find((p) => p.slug === slug);
}

export function getAllProviderSlugs(): string[] {
  return PROVIDERS_DETAILED.map((p) => p.slug);
}
