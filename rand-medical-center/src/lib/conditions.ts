// Conditions data for dynamic pages
export interface Condition {
  slug: string;
  name: string;
  description: string;
  causes: string[];
  symptoms: string[];
  treatments: {
    name: string;
    href: string;
  }[];
  relatedConditions: string[];
  metaDescription: string;
}

export const CONDITIONS: Condition[] = [
  {
    slug: "back-pain",
    name: "Back Pain",
    description:
      "Back pain is one of the most common reasons people seek medical care. It can range from a dull, constant ache to sudden, sharp pain. While most back pain improves within a few weeks with self-care, persistent or severe back pain may require professional treatment.",
    causes: [
      "Muscle or ligament strain from heavy lifting or sudden movements",
      "Bulging or herniated discs pressing on nerves",
      "Degenerative disc disease from aging",
      "Spinal stenosis (narrowing of the spinal canal)",
      "Osteoarthritis affecting the spine",
      "Poor posture over extended periods",
      "Injury from accidents or falls",
    ],
    symptoms: [
      "Aching or stiffness along the spine",
      "Sharp, localized pain in the neck, upper back, or lower back",
      "Pain that radiates from the low back to the buttock, thigh, and calf",
      "Difficulty standing straight without pain",
      "Decreased range of motion",
      "Muscle spasms",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Radiofrequency Ablation", href: "/services/pain-management/radiofrequency-ablation" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
    ],
    relatedConditions: ["sciatica", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Find relief from back pain at Rand Medical Center. Our specialists offer advanced treatments including physical therapy, injections, and minimally invasive procedures in Arlington Heights.",
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    description:
      "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. Typically, sciatica affects only one side of the body and occurs when a herniated disk, bone spur, or spinal stenosis compresses part of the nerve.",
    causes: [
      "Herniated or bulging disc in the lumbar spine",
      "Spinal stenosis narrowing the nerve pathways",
      "Piriformis syndrome (muscle irritating the sciatic nerve)",
      "Degenerative disc disease",
      "Spondylolisthesis (vertebra slipping out of position)",
      "Bone spurs on the spine",
    ],
    symptoms: [
      "Pain radiating from the lower back through the buttock and down the leg",
      "Numbness or tingling in the leg or foot",
      "Weakness in the affected leg",
      "Burning or shooting pain",
      "Pain that worsens with prolonged sitting",
      "Difficulty moving the leg or foot",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Selective Nerve Root Block", href: "/services/pain-management/selective-nerve-root-block" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Radiofrequency Ablation", href: "/services/pain-management/radiofrequency-ablation" },
    ],
    relatedConditions: ["back-pain", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Sciatica treatment in Arlington Heights. Our pain specialists offer epidural injections, nerve blocks, and physical therapy to relieve sciatic nerve pain.",
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    description:
      "Neck pain is extremely common and can be caused by poor posture, injury, arthritis, or degenerative conditions. While most neck pain improves with conservative treatment, chronic or severe neck pain may require specialized care to address the underlying cause.",
    causes: [
      "Poor posture, especially from desk work or phone use",
      "Whiplash from car accidents",
      "Cervical disc herniation",
      "Cervical spondylosis (arthritis of the neck)",
      "Muscle strain or tension",
      "Pinched nerves in the cervical spine",
    ],
    symptoms: [
      "Stiffness and decreased range of motion",
      "Sharp or stabbing pain in one spot",
      "General soreness or tenderness",
      "Pain that radiates to shoulders, arms, or hands",
      "Headaches starting at the base of the skull",
      "Numbness or tingling in the arms",
    ],
    treatments: [
      { name: "Cervical Epidural Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Trigger Point Injections", href: "/services/pain-management/trigger-point-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
    ],
    relatedConditions: ["whiplash", "herniated-disc"],
    metaDescription:
      "Neck pain treatment at Rand Medical Center in Arlington Heights. Expert care for cervical pain with injections, physical therapy, and advanced pain management.",
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    description:
      "Knee pain can result from injuries, mechanical problems, arthritis, and other conditions. The severity ranges from minor discomfort to debilitating pain that affects daily activities. Treatment depends on the cause and may include conservative measures or surgical intervention.",
    causes: [
      "ACL, MCL, or meniscus injuries",
      "Osteoarthritis or rheumatoid arthritis",
      "Patellar tendinitis (jumper's knee)",
      "Bursitis from repetitive pressure",
      "Iliotibial band syndrome",
      "Fractures or dislocations",
    ],
    symptoms: [
      "Pain with weight-bearing or movement",
      "Swelling and stiffness",
      "Instability or weakness",
      "Popping or crunching sounds",
      "Inability to fully straighten the knee",
      "Warmth or redness around the joint",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Knee Arthroscopy", href: "/services/orthopedics/knee" },
      { name: "Knee Replacement", href: "/services/orthopedics/knee" },
    ],
    relatedConditions: ["arthritis", "sports-injuries"],
    metaDescription:
      "Knee pain treatment in Arlington Heights. Our orthopedic specialists and pain management team offer comprehensive care from injections to surgery.",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    description:
      "The shoulder is the most mobile joint in the body, making it susceptible to injury and wear. Shoulder pain can originate from the joint itself or from surrounding muscles, ligaments, and tendons. Treatment varies based on the underlying cause.",
    causes: [
      "Rotator cuff tears or tendinitis",
      "Frozen shoulder (adhesive capsulitis)",
      "Shoulder impingement syndrome",
      "Arthritis of the shoulder",
      "Bursitis",
      "Shoulder instability or dislocation",
    ],
    symptoms: [
      "Pain with overhead movements",
      "Difficulty reaching behind the back",
      "Weakness when lifting or rotating the arm",
      "Night pain affecting sleep",
      "Clicking or popping sensations",
      "Stiffness and reduced range of motion",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Shoulder Arthroscopy", href: "/services/orthopedics/shoulder-rotator-cuff" },
      { name: "Rotator Cuff Repair", href: "/services/orthopedics/shoulder-rotator-cuff" },
    ],
    relatedConditions: ["arthritis", "sports-injuries"],
    metaDescription:
      "Shoulder pain specialists in Arlington Heights. From rotator cuff injuries to frozen shoulder, get expert diagnosis and treatment at Rand Medical Center.",
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    description:
      "Arthritis is inflammation of one or more joints, causing pain and stiffness that typically worsens with age. The most common types are osteoarthritis (wear-and-tear) and rheumatoid arthritis (autoimmune). Proper management can significantly reduce pain and improve quality of life.",
    causes: [
      "Wear and tear of cartilage (osteoarthritis)",
      "Autoimmune disorders attacking joint lining",
      "Previous joint injuries",
      "Family history and genetics",
      "Obesity increasing stress on joints",
      "Age-related changes",
    ],
    symptoms: [
      "Joint pain and tenderness",
      "Stiffness, especially in the morning",
      "Swelling around affected joints",
      "Reduced range of motion",
      "Grinding or grating sensation",
      "Bone spurs around affected joints",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Joint Replacement Surgery", href: "/services/orthopedics" },
      { name: "Radiofrequency Ablation", href: "/services/pain-management/radiofrequency-ablation" },
    ],
    relatedConditions: ["knee-pain", "shoulder-pain", "hip-pain"],
    metaDescription:
      "Arthritis treatment at Rand Medical Center. Our team offers joint injections, physical therapy, and surgical options to manage arthritis pain in Arlington Heights.",
  },
  {
    slug: "herniated-disc",
    name: "Herniated Disc",
    description:
      "A herniated disc occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior. This can irritate nearby nerves and result in pain, numbness, or weakness in an arm or leg. Many herniated discs improve with conservative treatment.",
    causes: [
      "Age-related disc degeneration",
      "Heavy lifting with improper technique",
      "Sudden twisting movements",
      "Trauma from falls or accidents",
      "Repetitive strain on the spine",
      "Genetic predisposition",
    ],
    symptoms: [
      "Sharp or burning pain in the affected area",
      "Pain radiating to arms (cervical) or legs (lumbar)",
      "Numbness or tingling",
      "Muscle weakness",
      "Pain that worsens with certain movements",
      "Symptoms often worse on one side",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Selective Nerve Root Block", href: "/services/pain-management/selective-nerve-root-block" },
    ],
    relatedConditions: ["back-pain", "sciatica", "neck-pain"],
    metaDescription:
      "Herniated disc treatment in Arlington Heights. Find relief with epidural injections, nerve blocks, and physical therapy at Rand Medical Center.",
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    description:
      "Sports injuries are injuries that occur during athletic activities or exercise. They can affect muscles, bones, tendons, ligaments, and other tissues. Proper diagnosis and treatment are essential for full recovery and safe return to activity.",
    causes: [
      "Overuse and repetitive stress",
      "Acute trauma from contact or falls",
      "Improper training techniques",
      "Inadequate warm-up or stretching",
      "Poor conditioning",
      "Using worn or improper equipment",
    ],
    symptoms: [
      "Pain during or after activity",
      "Swelling and inflammation",
      "Reduced range of motion",
      "Weakness in the affected area",
      "Instability in joints",
      "Bruising or visible deformity",
    ],
    treatments: [
      { name: "Sports Medicine Evaluation", href: "/services/orthopedics/sports-injuries" },
      { name: "Physical Therapy", href: "/services/physical-therapy/sports-rehab" },
      { name: "Arthroscopic Surgery", href: "/services/orthopedics" },
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
    ],
    relatedConditions: ["knee-pain", "shoulder-pain"],
    metaDescription:
      "Sports injury treatment in Arlington Heights. From ACL tears to tendinitis, our orthopedic and sports medicine specialists help athletes recover and return to play.",
  },
  {
    slug: "headaches",
    name: "Headaches & Migraines",
    description:
      "Headaches and migraines are among the most common pain conditions, affecting millions of people. While occasional headaches are normal, chronic or severe headaches can significantly impact quality of life. Understanding the type and triggers of your headaches is key to effective treatment.",
    causes: [
      "Tension in neck and shoulder muscles",
      "Stress and anxiety",
      "Hormonal changes",
      "Certain foods or environmental triggers",
      "Sleep disturbances",
      "Underlying medical conditions",
      "Medication overuse",
    ],
    symptoms: [
      "Throbbing or pulsating pain, often on one side",
      "Sensitivity to light and sound",
      "Nausea or vomiting with migraines",
      "Visual disturbances or aura",
      "Neck stiffness and tension",
      "Pain that worsens with physical activity",
    ],
    treatments: [
      { name: "Occipital Nerve Block", href: "/services/pain-management/occipital-nerve-block" },
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Medication Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["neck-pain"],
    metaDescription:
      "Headache and migraine treatment in Arlington Heights. Find relief with occipital nerve blocks, trigger point injections, and comprehensive care at Rand Medical Center.",
  },
  {
    slug: "carpal-tunnel-syndrome",
    name: "Carpal Tunnel Syndrome",
    description:
      "Carpal tunnel syndrome occurs when the median nerve, which runs through a narrow passageway in the wrist called the carpal tunnel, becomes compressed. This common condition causes numbness, tingling, and weakness in the hand and can significantly affect daily activities and work.",
    causes: [
      "Repetitive hand and wrist motions",
      "Wrist anatomy and bone structure",
      "Pregnancy and hormonal changes",
      "Medical conditions like diabetes or thyroid disorders",
      "Inflammatory conditions like rheumatoid arthritis",
      "Prolonged use of vibrating hand tools",
    ],
    symptoms: [
      "Numbness or tingling in thumb, index, middle, and ring fingers",
      "Pain that radiates from wrist up the arm",
      "Weakness in the hand, difficulty gripping objects",
      "Symptoms often worse at night",
      "Dropping objects due to numbness or weakness",
      "Shock-like sensations in the fingers",
    ],
    treatments: [
      { name: "Carpal Tunnel Release Surgery", href: "/services/orthopedics/hand-wrist-elbow" },
      { name: "Steroid Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Splinting and Conservative Care", href: "/services/orthopedics" },
    ],
    relatedConditions: ["neck-pain"],
    metaDescription:
      "Carpal tunnel syndrome treatment in Arlington Heights. From conservative care to minimally invasive surgery, our specialists provide comprehensive hand and wrist care.",
  },
  {
    slug: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    description:
      "Plantar fasciitis is one of the most common causes of heel pain, involving inflammation of the thick band of tissue (plantar fascia) that runs across the bottom of the foot and connects the heel bone to the toes. The condition typically causes stabbing pain that is worst with the first steps in the morning.",
    causes: [
      "Overuse from running, walking, or standing for long periods",
      "Foot mechanics issues such as flat feet or high arches",
      "Tight calf muscles and Achilles tendon",
      "Obesity increasing stress on the plantar fascia",
      "Improper footwear lacking arch support",
      "Age-related degeneration of the fascia",
    ],
    symptoms: [
      "Sharp, stabbing pain in the bottom of the heel",
      "Pain that is worst with the first steps after waking",
      "Pain after prolonged standing or sitting",
      "Increased pain after exercise, not during",
      "Gradual onset of symptoms over time",
      "Stiffness and tenderness along the arch",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Steroid Injections", href: "/services/pain-management/joint-injections" },
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Orthotics and Conservative Care", href: "/services/orthopedics/foot-ankle" },
    ],
    relatedConditions: ["knee-pain", "arthritis"],
    metaDescription:
      "Plantar fasciitis treatment in Arlington Heights. Get relief from heel pain with physical therapy, injections, and expert foot care at Rand Medical Center.",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return CONDITIONS.map((c) => c.slug);
}
