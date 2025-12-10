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
      "When your back hurts, everything becomes harder—getting out of bed, sitting at your desk, picking up your kids. You're not alone: back pain is one of the most common reasons people miss work and visit the doctor. Whether it's a dull ache that won't quit or sudden sharp pain that stops you in your tracks, you shouldn't have to just push through it. Most back pain does improve with the right care, and we can help you figure out what's causing yours and how to fix it.",
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
      "That shooting pain running from your lower back down through your leg? That's sciatica—and if you have it, you know how exhausting it can be. Sitting becomes torture, sleeping is hit or miss, and even walking can feel like a challenge. The sciatic nerve is the longest nerve in your body, and when something presses on it—usually a herniated disc or bone spur—you feel it with every move. The good news is that most sciatica responds well to treatment, and you don't have to just wait it out.",
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
      "Constant neck pain changes how you move through your day. You can't turn your head to check traffic, sleeping comfortably seems impossible, and even looking at your phone becomes painful. Whether it started from hunching over a computer, waking up wrong, or that fender-bender last month, you deserve relief. Most neck pain does get better with the right treatment—and when it doesn't resolve on its own, we can help identify exactly what's going on and what to do about it.",
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
      "Your knees carry you through life—literally. So when they start hurting, it affects everything: climbing stairs, getting in and out of the car, exercising, even just standing up from a chair. Whether you twisted your knee playing sports, noticed gradual stiffness from arthritis, or aren't sure what's causing the problem, you don't have to live with it. We see knee pain every day, and there are more treatment options than ever to help you move comfortably again.",
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
      "It's amazing how much you use your shoulder until it hurts. Reaching for a coffee mug, putting on a jacket, lifting something off a high shelf—suddenly everything reminds you something's wrong. The shoulder is your most flexible joint, which also makes it vulnerable to injury. Whether you've been dealing with a nagging ache that won't quit or woke up one day unable to lift your arm, we can figure out what's happening and get you back to using your shoulder without wincing.",
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
      "Stiff, achy joints that get worse over time can make you feel older than you are. Maybe your knees creak when you stand up, your hands hurt when you grip things, or mornings have become a slow, painful process of loosening up. Arthritis affects millions of people, and while there's no cure, there's a lot we can do to reduce your pain and keep you moving. You don't have to accept that this is just how life is now.",
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
      "A herniated disc can take you from fine to barely able to move in a matter of moments. The discs between your vertebrae act like cushions, and when one bulges or ruptures, it can press on nearby nerves—causing intense pain that shoots down your arm or leg, along with numbness, tingling, or weakness. Here's what many people don't realize: surgery is rarely necessary. Most herniated discs improve significantly with the right non-surgical treatment.",
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
      "Whether you're a weekend warrior or a serious athlete, getting sidelined by an injury is frustrating. You want to get back out there—but pushing too hard, too fast can make things worse. From twisted ankles and torn ligaments to overuse injuries that built up over time, proper treatment makes the difference between a full recovery and a problem that keeps coming back. We help athletes of all levels heal properly and return to their sport safely.",
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
    slug: "hip-pain",
    name: "Hip Pain",
    description:
      "If hip pain is making it hard to walk, climb stairs, or even get out of bed, you know how much it can take over your daily life. The hip joint handles a lot—it bears your weight, lets you move freely, and absorbs shock with every step. When something goes wrong, you feel it everywhere. The good news is that most hip conditions respond well to treatment, and you don't have to just live with the pain.",
    causes: [
      "Osteoarthritis wearing down the cartilage over time",
      "Bursitis from inflammation of the fluid-filled sacs around the joint",
      "Tendinitis from overuse or repetitive strain",
      "Hip labral tears affecting the ring of cartilage around the socket",
      "Hip fractures, especially in older adults with weakened bones",
      "Referred pain from sciatica or lower back problems",
      "Hip impingement (bones rubbing together abnormally)",
      "Muscle strains from sudden movements or overexertion",
    ],
    symptoms: [
      "Pain in the groin area or outer hip that may extend to the thigh",
      "Stiffness that's worse in the morning or after sitting",
      "Limping or difficulty walking normally",
      "Reduced range of motion—trouble bending or rotating the hip",
      "Clicking, locking, or catching sensations during movement",
      "Pain that worsens with activity and improves with rest",
      "Difficulty putting on shoes or socks",
      "Night pain that disrupts sleep",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Hip Arthroscopy", href: "/services/orthopedics/hip" },
      { name: "Hip Replacement", href: "/services/orthopedics/hip" },
    ],
    relatedConditions: ["arthritis", "back-pain", "sciatica"],
    metaDescription:
      "Hip pain treatment in Arlington Heights. Our orthopedic and pain specialists offer comprehensive care from injections to surgery for hip arthritis, bursitis, and injuries.",
  },
  {
    slug: "whiplash",
    name: "Whiplash",
    description:
      "That sudden jolt from a car accident or impact can leave your neck in serious pain—even if you didn't feel much right away. Whiplash happens when your head snaps forward and backward rapidly, straining the muscles, ligaments, and discs in your neck. Many people dismiss it as minor because symptoms can take hours or days to appear, but getting proper treatment early makes a real difference in how well and how quickly you recover.",
    causes: [
      "Rear-end car accidents (the most common cause)",
      "Sports collisions or tackles, especially in football or hockey",
      "Physical assault or being struck on the head",
      "Amusement park rides with sudden acceleration or deceleration",
      "Bicycle or motorcycle accidents",
      "Falls that snap the head backward or sideways",
      "Any sudden impact that forces the neck beyond its normal range",
    ],
    symptoms: [
      "Neck pain and stiffness that often worsens over 24-72 hours",
      "Headaches starting at the base of the skull",
      "Pain or tenderness in the shoulders, upper back, or arms",
      "Reduced range of motion in the neck",
      "Tingling or numbness radiating down the arms",
      "Fatigue and difficulty concentrating",
      "Dizziness or blurred vision",
      "Sleep disturbances and irritability",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Trigger Point Injections", href: "/services/pain-management/trigger-point-injections" },
      { name: "Cervical Epidural Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
    ],
    relatedConditions: ["neck-pain", "back-pain", "herniated-disc"],
    metaDescription:
      "Whiplash treatment in Arlington Heights. Expert care for auto accident neck injuries with same-day appointments, thorough documentation, and comprehensive pain management.",
  },
  {
    slug: "carpal-tunnel",
    name: "Carpal Tunnel Syndrome",
    description:
      "Waking up with numb, tingling hands? Dropping things because your grip isn't what it used to be? Carpal tunnel syndrome affects millions of people, especially those who do repetitive work with their hands. The carpal tunnel is a narrow passageway in your wrist, and when it gets compressed, the median nerve inside gets squeezed—causing the pain, numbness, and weakness you're feeling. The earlier you address it, the better your chances of avoiding permanent nerve damage.",
    causes: [
      "Repetitive hand and wrist motions over time",
      "Keeping the wrist bent for extended periods",
      "Pregnancy causing fluid retention and swelling",
      "Thyroid disorders and other hormonal imbalances",
      "Rheumatoid arthritis and other inflammatory conditions",
      "Diabetes increasing risk of nerve damage",
      "Wrist fractures or injuries that narrow the tunnel",
      "Jobs involving vibrating tools or assembly line work",
    ],
    symptoms: [
      "Numbness and tingling in thumb, index, middle, and ring fingers",
      "Burning sensation or pain in the hand and wrist",
      "Symptoms that wake you up at night",
      "Weakness in hand grip—difficulty holding objects",
      "Tendency to drop things",
      "Pain that radiates up the arm toward the shoulder",
      "Symptoms that worsen with activities like driving or holding a phone",
      "Shaking or flicking hands to try to relieve symptoms",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Steroid Injections", href: "/services/pain-management/joint-injections" },
      { name: "Carpal Tunnel Release Surgery", href: "/services/orthopedics" },
    ],
    relatedConditions: ["arthritis", "neck-pain"],
    metaDescription:
      "Carpal tunnel treatment in Arlington Heights. From wrist splints to minimally invasive surgery, our specialists help relieve hand numbness, tingling, and weakness.",
  },
  {
    slug: "spinal-stenosis",
    name: "Spinal Stenosis",
    description:
      "If walking has become uncomfortable—you need to stop and rest, lean on a shopping cart, or find yourself bending forward for relief—spinal stenosis might be the culprit. This condition narrows the spaces in your spine, putting pressure on the nerves that travel through it. It typically develops gradually with age, which is why many people in their 50s and older start noticing these symptoms. While it sounds serious, there are effective treatments that can restore your ability to move comfortably.",
    causes: [
      "Osteoarthritis and bone spurs from wear and tear over time",
      "Thickening of ligaments that support the spine",
      "Herniated or bulging discs pushing into the spinal canal",
      "Degenerative disc disease reducing space between vertebrae",
      "Spondylolisthesis (vertebrae slipping out of alignment)",
      "Congenital narrowing of the spinal canal",
      "Previous spine surgery causing scar tissue buildup",
      "Tumors or cysts in the spinal canal (rare)",
    ],
    symptoms: [
      "Leg pain, cramping, or heaviness when walking or standing",
      "Relief when sitting, leaning forward, or lying down",
      "Numbness or tingling in legs, feet, or buttocks",
      "Weakness in the legs that makes walking difficult",
      "Back pain that may be less noticeable than leg symptoms",
      "Difficulty walking for long distances (neurogenic claudication)",
      "Balance problems and increased risk of falling",
      "In severe cases, bladder or bowel dysfunction",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
      { name: "Decompression Surgery", href: "/services/orthopedics" },
    ],
    relatedConditions: ["back-pain", "sciatica", "herniated-disc"],
    metaDescription:
      "Spinal stenosis treatment in Arlington Heights. Our specialists help relieve leg pain and improve mobility with epidural injections, therapy, and minimally invasive procedures.",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return CONDITIONS.map((c) => c.slug);
}
