// Conditions data for dynamic pages
export interface Condition {
  slug: string;
  name: string;
  description: string;
  overview?: string; // Additional SEO content
  causes: string[];
  symptoms: string[];
  whenToSeeDoctor?: string[]; // Red flag symptoms requiring medical attention
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
    overview:
      "At Rand Medical Center in Arlington Heights, our board-certified pain management specialists and orthopedic surgeons work together to diagnose the root cause of your back pain and develop a personalized treatment plan. We serve patients throughout the northwest Chicago suburbs including Mount Prospect, Palatine, Des Plaines, Rolling Meadows, and Schaumburg.",
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
    whenToSeeDoctor: [
      "Pain persists for more than a few weeks despite rest and home care",
      "Severe pain that doesn't improve with rest",
      "Pain that spreads down one or both legs, especially below the knee",
      "Weakness, numbness, or tingling in your legs",
      "Unexplained weight loss accompanying back pain",
      "Back pain after a fall, blow to your back, or other injury",
      "Bladder or bowel problems (seek immediate medical attention)",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Epidural Steroid Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
      { name: "Facet Joint Injections", href: "/treatments/facet-joint-injections" },
    ],
    relatedConditions: ["sciatica", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Back pain treatment in Arlington Heights, IL. Board-certified specialists offering physical therapy, epidural injections, and minimally invasive procedures. Serving Mount Prospect, Palatine, Des Plaines & NW Chicago suburbs.",
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    description:
      "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. Typically, sciatica affects only one side of the body and occurs when a herniated disk, bone spur, or spinal stenosis compresses part of the nerve.",
    overview:
      "Sciatica is one of the most common conditions we treat at Rand Medical Center. Our interventional pain management specialists use advanced diagnostic techniques to pinpoint the exact cause of your sciatic pain, then develop a targeted treatment plan using the latest minimally invasive procedures.",
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
    whenToSeeDoctor: [
      "Leg pain that lasts longer than a week",
      "Progressive weakness in the leg",
      "Numbness in the leg or foot that worsens",
      "Loss of bladder or bowel control (emergency - seek immediate care)",
      "Pain following a violent injury or accident",
      "Pain so severe that it disrupts sleep or daily activities",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Selective Nerve Root Block", href: "/treatments/selective-nerve-root-block" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
    ],
    relatedConditions: ["back-pain", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Sciatica treatment in Arlington Heights, IL. Expert pain specialists offering epidural injections, nerve blocks & physical therapy for sciatic nerve pain. Serving NW Chicago suburbs.",
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    description:
      "Neck pain is extremely common and can be caused by poor posture, injury, arthritis, or degenerative conditions. While most neck pain improves with conservative treatment, chronic or severe neck pain may require specialized care to address the underlying cause.",
    overview:
      "Whether your neck pain is from an auto accident, work injury, or years of desk work, our team at Rand Medical Center provides comprehensive diagnosis and treatment. We combine interventional pain management with physical therapy for optimal results.",
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
    whenToSeeDoctor: [
      "Neck pain after a car accident or injury (even if it seems minor)",
      "Pain that persists for several days without relief",
      "Pain that radiates down your arms or legs",
      "Headaches accompanying your neck pain",
      "Numbness, weakness, or tingling in your arms or hands",
      "Difficulty gripping objects or loss of coordination",
    ],
    treatments: [
      { name: "Cervical Epidural Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Facet Joint Injections", href: "/treatments/facet-joint-injections" },
    ],
    relatedConditions: ["whiplash", "herniated-disc"],
    metaDescription:
      "Neck pain treatment in Arlington Heights, IL. Expert cervical pain care with injections, physical therapy & advanced pain management. Serving Palatine, Des Plaines & NW suburbs.",
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    description:
      "Knee pain can result from injuries, mechanical problems, arthritis, and other conditions. The severity ranges from minor discomfort to debilitating pain that affects daily activities. Treatment depends on the cause and may include conservative measures or surgical intervention.",
    overview:
      "Our orthopedic surgeons and pain management specialists at Rand Medical Center work together to provide comprehensive knee care. From sports injuries to arthritis, we offer everything from conservative treatments to advanced surgical options at our Joint Commission-accredited surgery center.",
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
    whenToSeeDoctor: [
      "Unable to bear weight on your knee",
      "Significant swelling that develops quickly",
      "Obvious deformity or instability in the knee",
      "Fever along with redness, pain, and swelling",
      "Knee gives out or locks up",
      "Pain that doesn't improve with rest and ice after a few days",
    ],
    treatments: [
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Knee Arthroscopy", href: "/services/orthopedics" },
      { name: "Knee Replacement", href: "/services/orthopedics" },
    ],
    relatedConditions: ["arthritis", "sports-injuries"],
    metaDescription:
      "Knee pain treatment in Arlington Heights, IL. Orthopedic specialists & pain management offering injections, physical therapy & surgery. Serving Mount Prospect, Rolling Meadows & NW suburbs.",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    description:
      "The shoulder is the most mobile joint in the body, making it susceptible to injury and wear. Shoulder pain can originate from the joint itself or from surrounding muscles, ligaments, and tendons. Treatment varies based on the underlying cause.",
    overview:
      "At Rand Medical Center, our orthopedic surgeons specialize in shoulder conditions from rotator cuff tears to frozen shoulder. We offer both non-surgical treatments and advanced arthroscopic procedures at our accredited surgery center, helping you get back to your active lifestyle.",
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
    whenToSeeDoctor: [
      "Sudden, severe shoulder pain after an injury",
      "Shoulder appears deformed or out of place",
      "Unable to use your arm or lift things",
      "Intense pain, swelling, or bruising around the joint",
      "Signs of infection (fever, redness, warmth)",
      "Pain that persists despite rest and home treatment",
    ],
    treatments: [
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Shoulder Arthroscopy", href: "/services/orthopedics" },
      { name: "Rotator Cuff Repair", href: "/services/orthopedics" },
    ],
    relatedConditions: ["arthritis", "sports-injuries"],
    metaDescription:
      "Shoulder pain specialists in Arlington Heights, IL. Expert care for rotator cuff injuries, frozen shoulder & arthritis. Orthopedic surgery available. Serving NW Chicago suburbs.",
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    description:
      "Arthritis is inflammation of one or more joints, causing pain and stiffness that typically worsens with age. The most common types are osteoarthritis (wear-and-tear) and rheumatoid arthritis (autoimmune). Proper management can significantly reduce pain and improve quality of life.",
    overview:
      "Rand Medical Center provides comprehensive arthritis care from our pain management and orthopedic teams. We offer a full range of treatments from conservative options like injections and physical therapy to joint replacement surgery when needed. Our goal is to reduce your pain and keep you active.",
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
    whenToSeeDoctor: [
      "Joint pain that persists for more than a few days",
      "Swelling that doesn't go down with rest and ice",
      "Significant stiffness limiting daily activities",
      "Redness or warmth in a joint (may indicate infection)",
      "Pain that interferes with sleep or work",
      "Joint deformity or significant loss of function",
    ],
    treatments: [
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Joint Replacement Surgery", href: "/services/orthopedics" },
      { name: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
    ],
    relatedConditions: ["knee-pain", "shoulder-pain", "hip-pain"],
    metaDescription:
      "Arthritis treatment in Arlington Heights, IL. Joint injections, physical therapy & joint replacement surgery. Expert care serving Palatine, Mount Prospect & NW Chicago suburbs.",
  },
  {
    slug: "herniated-disc",
    name: "Herniated Disc",
    description:
      "A herniated disc occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior. This can irritate nearby nerves and result in pain, numbness, or weakness in an arm or leg. Many herniated discs improve with conservative treatment.",
    overview:
      "Our spine specialists at Rand Medical Center use advanced imaging and diagnostic techniques to accurately diagnose herniated discs and develop targeted treatment plans. Most patients find relief through our non-surgical interventional procedures, avoiding the need for spine surgery.",
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
    whenToSeeDoctor: [
      "Pain that persists or worsens over several weeks",
      "Numbness or tingling that spreads or worsens",
      "Weakness in your arm or leg affecting daily activities",
      "Bladder or bowel dysfunction (seek emergency care)",
      "Pain following an injury or accident",
      "Difficulty walking or maintaining balance",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Selective Nerve Root Block", href: "/treatments/selective-nerve-root-block" },
    ],
    relatedConditions: ["back-pain", "sciatica", "neck-pain"],
    metaDescription:
      "Herniated disc treatment in Arlington Heights, IL. Non-surgical relief with epidural injections, nerve blocks & physical therapy. Serving Des Plaines, Palatine & NW Chicago suburbs.",
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    description:
      "Sports injuries are injuries that occur during athletic activities or exercise. They can affect muscles, bones, tendons, ligaments, and other tissues. Proper diagnosis and treatment are essential for full recovery and safe return to activity.",
    overview:
      "At Rand Medical Center, our orthopedic surgeons have extensive experience treating athletes of all levels. We understand the importance of getting you back to your sport safely and develop individualized return-to-play protocols to ensure full recovery.",
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
    whenToSeeDoctor: [
      "Inability to bear weight or use the injured area",
      "Significant swelling that develops rapidly",
      "Visible deformity of a bone or joint",
      "Joint gives way or locks up",
      "Pain that doesn't improve with RICE (rest, ice, compression, elevation)",
      "Numbness, tingling, or coldness in the affected limb",
    ],
    treatments: [
      { name: "Sports Medicine Evaluation", href: "/services/orthopedics" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Arthroscopic Surgery", href: "/services/orthopedics" },
      { name: "Joint Injections", href: "/treatments/joint-injections" },
    ],
    relatedConditions: ["knee-pain", "shoulder-pain"],
    metaDescription:
      "Sports injury treatment in Arlington Heights, IL. ACL tears, tendinitis, sprains & fractures. Expert orthopedic care helping athletes return to play. Serving NW Chicago suburbs.",
  },
  {
    slug: "headaches",
    name: "Headaches & Migraines",
    description:
      "Headaches and migraines are among the most common pain conditions, affecting millions of people. While occasional headaches are normal, chronic or severe headaches can significantly impact quality of life. Understanding the type and triggers of your headaches is key to effective treatment.",
    overview:
      "Chronic headaches and migraines often have underlying causes that can be addressed with proper treatment. Our pain management specialists at Rand Medical Center use a comprehensive approach to identify your headache triggers and develop an effective treatment plan.",
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
    whenToSeeDoctor: [
      "Sudden, severe headache unlike any you've had before",
      "Headache with fever, stiff neck, confusion, or seizures",
      "Headache after a head injury",
      "Chronic headaches that are getting worse",
      "Headaches that wake you from sleep",
      "Headaches with vision changes, speech difficulty, or weakness",
    ],
    treatments: [
      { name: "Occipital Nerve Block", href: "/services/pain-management" },
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Medication Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["neck-pain"],
    metaDescription:
      "Headache & migraine treatment in Arlington Heights, IL. Occipital nerve blocks, trigger point injections & comprehensive care. Serving Mount Prospect, Palatine & NW Chicago suburbs.",
  },
  {
    slug: "carpal-tunnel-syndrome",
    name: "Carpal Tunnel Syndrome",
    description:
      "Carpal tunnel syndrome occurs when the median nerve, which runs through a narrow passageway in the wrist called the carpal tunnel, becomes compressed. This common condition causes numbness, tingling, and weakness in the hand and can significantly affect daily activities and work.",
    overview:
      "Carpal tunnel syndrome is a common workplace injury that we treat regularly at Rand Medical Center. Our hand and wrist specialists offer both conservative treatments and minimally invasive surgical options when needed.",
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
    whenToSeeDoctor: [
      "Symptoms that persist for more than two weeks",
      "Frequent numbness that interferes with sleep",
      "Weakness that makes it hard to grip or hold objects",
      "Loss of coordination or clumsiness in the hand",
      "Constant numbness or tingling",
      "Symptoms affecting your ability to work",
    ],
    treatments: [
      { name: "Carpal Tunnel Release Surgery", href: "/services/orthopedics" },
      { name: "Steroid Injections", href: "/treatments/joint-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Splinting and Conservative Care", href: "/services/orthopedics" },
    ],
    relatedConditions: ["neck-pain"],
    metaDescription:
      "Carpal tunnel treatment in Arlington Heights, IL. From splinting to minimally invasive surgery. Expert hand & wrist care serving NW Chicago suburbs.",
  },
  {
    slug: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    description:
      "Plantar fasciitis is one of the most common causes of heel pain, involving inflammation of the thick band of tissue (plantar fascia) that runs across the bottom of the foot and connects the heel bone to the toes. The condition typically causes stabbing pain that is worst with the first steps in the morning.",
    overview:
      "Heel pain doesn't have to slow you down. At Rand Medical Center, we offer effective treatments for plantar fasciitis that help you get back on your feet, from physical therapy and custom orthotics to advanced injection therapies.",
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
    whenToSeeDoctor: [
      "Heel pain that persists despite home treatment",
      "Severe heel pain after an injury",
      "Pain that prevents normal walking or activities",
      "Numbness or tingling in the foot",
      "Pain accompanied by swelling or discoloration",
      "Foot pain along with fever or signs of infection",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Steroid Injections", href: "/treatments/joint-injections" },
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Orthotics and Conservative Care", href: "/services/orthopedics" },
    ],
    relatedConditions: ["knee-pain", "arthritis"],
    metaDescription:
      "Plantar fasciitis treatment in Arlington Heights, IL. Heel pain relief with physical therapy, injections & orthotics. Expert foot care serving NW Chicago suburbs.",
  },
  // Additional conditions from services-conditions.json
  {
    slug: "spinal-stenosis",
    name: "Spinal Stenosis",
    description:
      "Spinal stenosis is a narrowing of the spaces within your spine, which can put pressure on the nerves that travel through the spine. It most commonly occurs in the lower back and neck. While some people have no symptoms, others may experience pain, numbness, muscle weakness, and problems with bladder or bowel function.",
    causes: [
      "Overgrowth of bone (bone spurs) from osteoarthritis",
      "Herniated discs pressing on the spinal canal",
      "Thickened ligaments that can bulge into the spinal canal",
      "Tumors or abnormal growths",
      "Spinal injuries causing fractures or dislocations",
      "Congenital spinal stenosis (born with a narrow spinal canal)",
    ],
    symptoms: [
      "Pain or cramping in legs when standing or walking",
      "Numbness or tingling in legs, feet, or buttocks",
      "Weakness in the leg or foot",
      "Back pain that improves when bending forward or sitting",
      "Balance problems",
      "In severe cases, bladder or bowel dysfunction",
    ],
    whenToSeeDoctor: [
      "Leg weakness or difficulty walking",
      "Worsening numbness or tingling in your legs",
      "Difficulty with balance or coordination",
      "Bladder or bowel changes (seek emergency care)",
      "Pain that significantly limits your daily activities",
      "Symptoms that progressively worsen over time",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Pain Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["back-pain", "sciatica", "herniated-disc"],
    metaDescription:
      "Spinal stenosis treatment in Arlington Heights, IL. Expert care for nerve compression, leg pain, numbness & weakness. Serving Mount Prospect, Des Plaines & NW suburbs.",
  },
  {
    slug: "degenerative-disc-disease",
    name: "Degenerative Disc Disease",
    description:
      "Degenerative disc disease is not actually a disease, but rather a term used to describe the normal changes in your spinal discs as you age. The spinal discs act as shock absorbers between the vertebrae, and over time they can break down and cause pain, instability, and other symptoms.",
    causes: [
      "Natural aging and wear on spinal discs",
      "Loss of fluid in the discs reducing flexibility",
      "Tiny tears or cracks in the outer layer of the disc",
      "Previous back injuries",
      "Repetitive activities that stress the spine",
      "Genetic predisposition",
    ],
    symptoms: [
      "Pain that comes and goes, lasting weeks to months",
      "Pain that worsens with sitting, bending, or twisting",
      "Pain that feels better when walking or moving",
      "Numbness or tingling in extremities",
      "Weakness in leg muscles",
      "Pain in the lower back, buttocks, or thighs",
    ],
    whenToSeeDoctor: [
      "Back or neck pain that persists for more than a few weeks",
      "Pain accompanied by numbness or tingling",
      "Weakness in your arms or legs",
      "Pain that limits your ability to work or enjoy activities",
      "Sudden worsening of symptoms",
      "Loss of bladder or bowel control (seek emergency care)",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
    ],
    relatedConditions: ["back-pain", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Degenerative disc disease treatment in Arlington Heights, IL. Expert care for age-related disc wear causing back & neck pain. Serving NW Chicago suburbs.",
  },
  {
    slug: "hip-pain",
    name: "Hip Pain",
    description:
      "Hip pain is a common complaint that can be caused by a wide variety of problems. The precise location of your hip pain can provide valuable clues about the underlying cause. Problems within the hip joint itself tend to cause pain inside the hip or groin, while problems with muscles, ligaments, or tendons may cause pain in the thigh, outer hip, or buttocks.",
    causes: [
      "Osteoarthritis or rheumatoid arthritis",
      "Hip fractures from falls or trauma",
      "Bursitis (inflammation of the fluid-filled sacs)",
      "Tendinitis from repetitive activities",
      "Hip labral tear",
      "Referred pain from the lower back",
    ],
    symptoms: [
      "Groin pain or pain inside the hip",
      "Pain on the outside of the hip, upper thigh, or buttock",
      "Stiffness and reduced range of motion",
      "Limping or difficulty walking",
      "Pain that worsens with activity",
      "Clicking or locking sensation in the hip",
    ],
    whenToSeeDoctor: [
      "Hip pain after a fall or injury",
      "Sudden, intense hip pain",
      "Deformity or inability to move your leg",
      "Signs of infection (fever, redness, warmth)",
      "Hip pain that disrupts sleep",
      "Limping or difficulty bearing weight",
    ],
    treatments: [
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Orthopedic Evaluation", href: "/services/orthopedics" },
    ],
    relatedConditions: ["arthritis", "back-pain"],
    metaDescription:
      "Hip pain treatment in Arlington Heights, IL. Expert care for arthritis, bursitis & injuries. Orthopedic specialists serving Palatine, Mount Prospect & NW suburbs.",
  },
  {
    slug: "neuropathy",
    name: "Peripheral Neuropathy",
    description:
      "Peripheral neuropathy refers to damage to the peripheral nerves, which transmit messages between your brain and spinal cord and the rest of your body. This condition can cause weakness, numbness, and pain, usually in the hands and feet. It can result from traumatic injuries, infections, metabolic problems, and exposure to toxins.",
    causes: [
      "Diabetes (most common cause)",
      "Autoimmune diseases",
      "Infections such as shingles or Lyme disease",
      "Vitamin deficiencies (especially B vitamins)",
      "Alcoholism",
      "Exposure to toxins or certain medications",
    ],
    symptoms: [
      "Gradual onset of numbness or tingling in hands or feet",
      "Sharp, jabbing, or burning pain",
      "Extreme sensitivity to touch",
      "Lack of coordination and falling",
      "Muscle weakness",
      "Feeling like wearing gloves or socks when not",
    ],
    treatments: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Medication Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["diabetic-neuropathy"],
    metaDescription:
      "Peripheral neuropathy treatment in Arlington Heights, IL for burning, tingling, or numbness in hands and feet.",
  },
  {
    slug: "diabetic-neuropathy",
    name: "Diabetic Neuropathy",
    description:
      "Diabetic neuropathy is a type of nerve damage that can occur in people with diabetes. High blood sugar can injure nerves throughout the body, but diabetic neuropathy most often damages nerves in the legs and feet. Depending on the affected nerves, symptoms can range from pain and numbness to problems with the digestive system, urinary tract, and heart.",
    causes: [
      "Prolonged high blood sugar levels",
      "Metabolic factors associated with diabetes",
      "Damage to blood vessels that supply nerves",
      "Inflammation in the nerves",
      "Genetic factors affecting nerve vulnerability",
      "Lifestyle factors such as smoking and alcohol use",
    ],
    symptoms: [
      "Numbness or reduced ability to feel pain or temperature changes",
      "Burning or tingling sensation in feet and legs",
      "Sharp pains or cramps",
      "Increased sensitivity to touch",
      "Muscle weakness",
      "Serious foot problems like ulcers and infections",
    ],
    treatments: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Internal Medicine", href: "/services/internal-medicine" },
    ],
    relatedConditions: ["neuropathy"],
    metaDescription:
      "Care for diabetic neuropathy symptoms in Arlington Heights, IL including burning foot pain and numbness.",
  },
  {
    slug: "rotator-cuff-tear",
    name: "Rotator Cuff Tear",
    description:
      "A rotator cuff tear is a common cause of pain and disability among adults. The rotator cuff is a group of four muscles and tendons that stabilize the shoulder joint and enable you to lift and rotate your arm. A tear in the rotator cuff can occur from an injury or from degeneration over time.",
    causes: [
      "Acute injury from a fall or lifting",
      "Repetitive overhead motions",
      "Age-related degeneration",
      "Bone spurs that rub against the tendon",
      "Decreased blood supply with aging",
      "Sports activities like baseball or tennis",
    ],
    symptoms: [
      "Pain at rest and at night, especially lying on the affected shoulder",
      "Pain when lifting or lowering the arm",
      "Weakness when lifting or rotating the arm",
      "Crackling sensation when moving the shoulder",
      "Difficulty reaching behind the back",
      "Limited range of motion",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Orthopedic Surgery", href: "/services/orthopedics" },
    ],
    relatedConditions: ["shoulder-pain"],
    metaDescription:
      "Rotator cuff tear treatment in Arlington Heights, IL for shoulder pain and weakness.",
  },
  {
    slug: "myofascial-pain",
    name: "Myofascial Pain Syndrome",
    description:
      "Myofascial pain syndrome is a chronic pain disorder in which pressure on sensitive points in your muscles (trigger points) causes pain in the muscle and sometimes in seemingly unrelated parts of your body. This is called referred pain. Myofascial pain typically occurs after a muscle has been contracted repetitively.",
    causes: [
      "Repetitive motions used in jobs or hobbies",
      "Muscle injury or strain",
      "Stress and anxiety causing muscle tension",
      "Poor posture",
      "Inactivity or immobilization",
      "Lack of sleep or poor nutrition",
    ],
    symptoms: [
      "Deep, aching muscle pain",
      "Pain that persists or worsens",
      "Tender knots in muscles (trigger points)",
      "Pain that refers to other areas when trigger points pressed",
      "Difficulty sleeping due to pain",
      "Stiffness and decreased range of motion",
    ],
    treatments: [
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Pain Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["back-pain", "neck-pain", "headaches"],
    metaDescription:
      "Myofascial pain treatment in Arlington Heights, IL for tender trigger points and muscle knots.",
  },
  {
    slug: "fibromyalgia",
    name: "Fibromyalgia",
    description:
      "Fibromyalgia is a disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory, and mood issues. Researchers believe that fibromyalgia amplifies painful sensations by affecting the way your brain and spinal cord process painful and nonpainful signals.",
    causes: [
      "Genetics may play a role in susceptibility",
      "Physical or emotional trauma triggering onset",
      "Infections that may trigger or aggravate the condition",
      "Repeated nerve stimulation causing brain changes",
      "Imbalance of pain-related brain chemicals",
      "Often develops gradually with no single triggering event",
    ],
    symptoms: [
      "Widespread pain lasting more than 3 months",
      "Fatigue despite adequate sleep",
      "Cognitive difficulties (fibro fog)",
      "Sleep disturbances",
      "Headaches and migraines",
      "Irritable bowel syndrome",
    ],
    treatments: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Internal Medicine", href: "/services/internal-medicine" },
    ],
    relatedConditions: ["chronic-pain", "myofascial-pain"],
    metaDescription:
      "Care for fibromyalgia symptoms in Arlington Heights, IL including widespread pain and fatigue.",
  },
  {
    slug: "chronic-pain",
    name: "Chronic Pain",
    description:
      "Chronic pain is pain that lasts for longer than three months, or beyond the normal healing time for an injury. It can affect any part of the body and can range from mild to severe. Chronic pain can significantly impact quality of life, affecting sleep, mood, and daily activities.",
    causes: [
      "Initial injury or infection that triggers ongoing pain",
      "Ongoing cause of pain such as arthritis",
      "Changes in the nervous system",
      "No clear physical cause (central sensitization)",
      "Psychological factors influencing pain perception",
      "Combination of physical and psychological factors",
    ],
    symptoms: [
      "Pain that persists beyond expected healing time",
      "Pain that may be constant or intermittent",
      "Fatigue and sleep problems",
      "Mood changes including depression and anxiety",
      "Reduced activity and mobility",
      "Difficulty concentrating",
    ],
    treatments: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Interventional Procedures", href: "/treatments" },
    ],
    relatedConditions: ["back-pain", "fibromyalgia"],
    metaDescription:
      "Chronic pain management in Arlington Heights, IL for pain lasting more than three months.",
  },
  {
    slug: "facet-syndrome",
    name: "Facet Joint Syndrome",
    description:
      "Facet joint syndrome is a condition where the facet joints in the spine become a source of pain. Facet joints are small joints at each segment of the spine that provide stability and help guide motion. They can become painful due to arthritis, injury, or mechanical stress.",
    causes: [
      "Degenerative changes from aging",
      "Injury or trauma to the spine",
      "Poor posture over time",
      "Repetitive stress on the spine",
      "Obesity putting extra strain on joints",
      "Disc degeneration affecting joint alignment",
    ],
    symptoms: [
      "Localized pain in the back or neck",
      "Pain that worsens with extension or twisting",
      "Stiffness, especially in the morning",
      "Pain that improves with rest",
      "Tenderness over the affected joints",
      "Pain that radiates to buttocks or shoulders",
    ],
    treatments: [
      { name: "Facet Joint Injections", href: "/treatments/facet-joint-injections" },
      { name: "Radiofrequency Ablation", href: "/treatments/radiofrequency-ablation" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
    ],
    relatedConditions: ["back-pain", "neck-pain", "arthritis"],
    metaDescription:
      "Facet joint syndrome care in Arlington Heights, IL for arthritis-related back and neck pain.",
  },
  {
    slug: "radiculopathy",
    name: "Radiculopathy",
    description:
      "Radiculopathy occurs when a nerve root in the spine becomes compressed, inflamed, or damaged. This can cause pain, numbness, tingling, or weakness along the path of the nerve. Radiculopathy is often referred to as a pinched nerve and can occur in any part of the spine.",
    causes: [
      "Herniated or bulging discs",
      "Bone spurs from arthritis",
      "Spinal stenosis narrowing nerve pathways",
      "Degenerative disc disease",
      "Injury or trauma to the spine",
      "Tumors or infections (rare)",
    ],
    symptoms: [
      "Sharp pain that radiates down arm or leg",
      "Numbness or tingling in extremities",
      "Muscle weakness in the affected area",
      "Pins and needles sensations",
      "Pain that worsens with certain movements",
      "Decreased reflexes",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/treatments/epidural-steroid-injections" },
      { name: "Selective Nerve Root Block", href: "/treatments/selective-nerve-root-block" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
    ],
    relatedConditions: ["sciatica", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Radiculopathy treatment in Arlington Heights, IL for nerve pain, numbness, or weakness from pinched spinal nerves.",
  },
  {
    slug: "si-joint-pain",
    name: "Sacroiliac (SI) Joint Pain",
    description:
      "The sacroiliac joints connect the lower spine to the pelvis and are responsible for transferring weight and forces between the upper body and legs. Dysfunction or inflammation in these joints can cause pain in the lower back, buttocks, and legs.",
    causes: [
      "Arthritis wearing down the SI joint cartilage",
      "Pregnancy causing ligament loosening",
      "Injury from falls or car accidents",
      "Leg length discrepancy",
      "Altered gait from other conditions",
      "Previous lumbar fusion surgery",
    ],
    symptoms: [
      "Low back pain, often on one side",
      "Pain in the buttock or hip",
      "Pain radiating down the leg",
      "Pain when standing from sitting",
      "Stiffness in the lower back and hips",
      "Instability feeling in the pelvis",
    ],
    treatments: [
      { name: "SI Joint Injections", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Pain Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["back-pain", "hip-pain"],
    metaDescription:
      "SI joint pain treatment in Arlington Heights, IL for lower back and buttock pain from sacroiliac dysfunction.",
  },
  {
    slug: "complex-regional-pain-syndrome",
    name: "Complex Regional Pain Syndrome (CRPS)",
    description:
      "Complex regional pain syndrome (CRPS) is a chronic pain condition that usually affects an arm or leg. It typically develops after an injury, surgery, stroke, or heart attack, and the pain is out of proportion to the severity of the initial injury.",
    causes: [
      "Injury or trauma to the affected limb",
      "Surgery complications",
      "Nerve damage or dysfunction",
      "Immune system response",
      "Unknown causes in some cases",
      "Genetic factors may play a role",
    ],
    symptoms: [
      "Continuous burning or throbbing pain",
      "Sensitivity to touch or cold",
      "Swelling of the affected area",
      "Changes in skin temperature, color, or texture",
      "Changes in hair and nail growth",
      "Joint stiffness and muscle spasms",
    ],
    treatments: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Nerve Blocks", href: "/services/pain-management" },
    ],
    relatedConditions: ["chronic-pain", "neuropathy"],
    metaDescription:
      "CRPS treatment in Arlington Heights, IL for severe, long-lasting pain after injury or surgery.",
  },
  {
    slug: "occipital-neuralgia",
    name: "Occipital Neuralgia",
    description:
      "Occipital neuralgia is a condition characterized by chronic pain in the upper neck, back of the head, and behind the eyes. It is caused by irritation or injury to the occipital nerves, which run from the top of the spinal cord up through the scalp.",
    causes: [
      "Trauma to the back of the head",
      "Neck tension or muscle tightness",
      "Osteoarthritis in the cervical spine",
      "Tumors affecting the nerve",
      "Gout or diabetes causing nerve damage",
      "Blood vessel inflammation",
    ],
    symptoms: [
      "Aching, burning, or throbbing pain from base of head to scalp",
      "Sharp, shocking pain in the back of head or neck",
      "Pain on one or both sides of the head",
      "Pain behind the eyes",
      "Sensitivity to light",
      "Tender scalp",
    ],
    treatments: [
      { name: "Occipital Nerve Block", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
    ],
    relatedConditions: ["headaches", "neck-pain"],
    metaDescription:
      "Occipital neuralgia treatment in Arlington Heights, IL for sharp, shooting pain at the base of the skull.",
  },
  {
    slug: "trigeminal-neuralgia",
    name: "Trigeminal Neuralgia",
    description:
      "Trigeminal neuralgia is a chronic pain condition affecting the trigeminal nerve, which carries sensation from your face to your brain. Even mild stimulation of your face — such as from brushing your teeth or putting on makeup — may trigger a jolt of excruciating pain.",
    causes: [
      "Blood vessel pressing on the trigeminal nerve",
      "Multiple sclerosis or similar disorders",
      "Tumor compressing the nerve",
      "Facial trauma or surgical injury",
      "Aging-related changes",
      "Unknown cause in some cases",
    ],
    symptoms: [
      "Episodes of severe, shooting, shock-like pain",
      "Pain triggered by touch, chewing, or talking",
      "Pain attacks lasting from seconds to minutes",
      "Pain on one side of the face",
      "Pain in cheek, jaw, teeth, gums, or lips",
      "Periods of remission between attacks",
    ],
    treatments: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Medication Management", href: "/services/pain-management" },
      { name: "Nerve Block", href: "/services/pain-management" },
    ],
    relatedConditions: ["headaches"],
    metaDescription:
      "Trigeminal neuralgia treatment in Arlington Heights, IL for severe facial pain episodes.",
  },
  {
    slug: "piriformis-syndrome",
    name: "Piriformis Syndrome",
    description:
      "Piriformis syndrome is a neuromuscular disorder that occurs when the piriformis muscle, located in the buttock region, spasms and causes buttock pain. The piriformis muscle can also irritate the nearby sciatic nerve and cause pain, numbness, and tingling along the back of the leg.",
    causes: [
      "Muscle spasm in the piriformis muscle",
      "Swelling of the piriformis muscle from injury",
      "Irritation of the piriformis or sciatic nerve",
      "Prolonged sitting",
      "Overuse from repetitive activities",
      "Anatomic variations in muscle or nerve",
    ],
    symptoms: [
      "Pain in the buttock that worsens with sitting",
      "Pain radiating down the back of the leg",
      "Numbness or tingling in the buttock or leg",
      "Pain with climbing stairs or walking",
      "Reduced range of motion in the hip",
      "Pain that improves with movement",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Trigger Point Injections", href: "/treatments/trigger-point-injections" },
      { name: "Pain Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["sciatica", "back-pain", "hip-pain"],
    metaDescription:
      "Piriformis syndrome treatment in Arlington Heights, IL for buttock and leg pain similar to sciatica.",
  },
  {
    slug: "osteoarthritis",
    name: "Osteoarthritis",
    description:
      "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of the bones wears down over time. Although osteoarthritis can damage any joint, the disorder most commonly affects joints in the hands, knees, hips, and spine.",
    causes: [
      "Age-related wear and tear on cartilage",
      "Joint injuries from sports or accidents",
      "Repetitive stress on a joint",
      "Obesity putting extra stress on joints",
      "Genetics and bone deformities",
      "Other diseases affecting joint health",
    ],
    symptoms: [
      "Pain during or after movement",
      "Joint stiffness after inactivity",
      "Tenderness when pressing on the joint",
      "Loss of flexibility",
      "Grating sensation with joint use",
      "Bone spurs around the affected joint",
    ],
    treatments: [
      { name: "Joint Injections", href: "/treatments/joint-injections" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
    ],
    relatedConditions: ["knee-pain", "hip-pain", "arthritis"],
    metaDescription:
      "Osteoarthritis care in Arlington Heights, IL for age-related joint wear and chronic pain.",
  },
  {
    slug: "auto-injury",
    name: "Auto Accident Injuries",
    description:
      "Auto accident injuries can range from minor to severe and may not be immediately apparent after a collision. Common injuries include whiplash, back injuries, and soft tissue damage. Prompt evaluation and treatment are essential for proper recovery and documentation.",
    causes: [
      "Rear-end collisions causing whiplash",
      "Side-impact collisions",
      "Head-on collisions",
      "Rollover accidents",
      "Low-speed fender benders",
      "Pedestrian or cyclist accidents",
    ],
    symptoms: [
      "Neck pain and stiffness",
      "Back pain",
      "Headaches",
      "Shoulder or arm pain",
      "Numbness or tingling",
      "Delayed onset of symptoms (sometimes days later)",
    ],
    treatments: [
      { name: "Immediate Care", href: "/immediate-care" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Pain Management", href: "/services/pain-management" },
    ],
    relatedConditions: ["neck-pain", "back-pain", "headaches"],
    metaDescription:
      "Auto accident injury treatment in Arlington Heights, IL. Comprehensive care for whiplash, back pain, and injuries from car accidents.",
  },
  {
    slug: "workplace-injury",
    name: "Workplace Injuries",
    description:
      "Workplace injuries can occur in any job setting and may involve acute trauma or develop over time from repetitive activities. Workers' compensation cases require proper documentation and coordinated care between medical providers, employers, and insurers.",
    causes: [
      "Lifting heavy objects improperly",
      "Slips, trips, and falls",
      "Repetitive motion injuries",
      "Being struck by objects",
      "Equipment or machinery accidents",
      "Prolonged poor ergonomics",
    ],
    symptoms: [
      "Pain at the injury site",
      "Swelling or bruising",
      "Limited range of motion",
      "Numbness or tingling",
      "Weakness in affected area",
      "Symptoms that worsen with work activities",
    ],
    treatments: [
      { name: "Immediate Care", href: "/immediate-care" },
      { name: "Physical Therapy", href: "/treatments/physical-therapy" },
      { name: "Workers' Compensation Care", href: "/services/injuries/workers-compensation" },
    ],
    relatedConditions: ["back-pain", "carpal-tunnel-syndrome"],
    metaDescription:
      "Workplace injury treatment in Arlington Heights, IL. Expert care for work-related injuries with workers' compensation documentation.",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return CONDITIONS.map((c) => c.slug);
}
