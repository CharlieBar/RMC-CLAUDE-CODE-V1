// Treatments data for dynamic pages
export interface Treatment {
  slug: string;
  name: string;
  category: "pain-management" | "orthopedics" | "physical-therapy" | "regenerative";
  description: string;
  overview: string;
  howItWorks: string;
  conditions: string[];
  benefits: string[];
  procedure: {
    step: string;
    description: string;
  }[];
  recovery: string;
  risks: string[];
  candidateFor: string[];
  duration: string;
  relatedTreatments: string[];
  metaDescription: string;
}

export const TREATMENTS: Treatment[] = [
  {
    slug: "epidural-steroid-injections",
    name: "Epidural Steroid Injections",
    category: "pain-management",
    description:
      "When back or neck pain starts running down your arm or leg, it often means a nerve is being pinched or irritated. Epidural steroid injections deliver powerful anti-inflammatory medication right to the source of the problem—the inflamed nerve root. For many patients, this provides significant relief that lasts weeks or months, giving you the break you need to heal.",
    overview:
      "Epidural steroid injections (ESIs) are one of the most common and effective treatments for spine-related nerve pain. The epidural space surrounds your spinal cord and nerve roots, and when we inject medication there, it bathes the inflamed nerves in anti-inflammatory steroid. This reduces swelling, calms irritation, and interrupts the pain cycle.",
    howItWorks:
      "The steroid medication works by reducing inflammation around compressed or irritated nerve roots. When a herniated disc, bone spur, or narrowed spinal canal presses on a nerve, the nerve becomes inflamed and sends pain signals. By delivering corticosteroids directly to the affected area—rather than taking pills that spread throughout your body—we get a much more concentrated effect right where it's needed.",
    conditions: [
      "Sciatica and radiating leg pain",
      "Herniated or bulging discs",
      "Spinal stenosis",
      "Degenerative disc disease",
      "Pinched nerves in the neck or back",
      "Failed back surgery syndrome",
      "Cervical radiculopathy (arm pain from neck)",
      "Lumbar radiculopathy (leg pain from back)",
    ],
    benefits: [
      "Significant pain reduction, often 50-80% improvement",
      "Relief can last several weeks to several months",
      "Allows participation in physical therapy",
      "Minimally invasive outpatient procedure",
      "Can be repeated if effective",
      "May help avoid or delay surgery",
      "Quick procedure with minimal downtime",
    ],
    procedure: [
      {
        step: "Preparation",
        description:
          "You'll lie face down on a procedure table. The skin over the injection site is cleaned and numbed with local anesthetic.",
      },
      {
        step: "Imaging guidance",
        description:
          "Using fluoroscopy (real-time X-ray), your physician guides a thin needle to the precise location in your spine's epidural space.",
      },
      {
        step: "Confirmation",
        description:
          "A small amount of contrast dye confirms the needle is in the correct position before any medication is injected.",
      },
      {
        step: "Injection",
        description:
          "The steroid medication, often mixed with a numbing agent, is slowly injected into the epidural space.",
      },
      {
        step: "Recovery",
        description:
          "You'll rest for 15-30 minutes while we monitor you. Someone needs to drive you home.",
      },
    ],
    recovery:
      "Most patients return to normal activities within 24-48 hours. You may feel numbness or weakness in your legs for a few hours from the local anesthetic. Some people experience temporary increased pain before improvement—this is normal. Most patients notice significant relief within 3-7 days, with maximum benefit around 2 weeks.",
    risks: [
      "Temporary increase in pain",
      "Headache (rare)",
      "Infection (very rare)",
      "Bleeding at injection site",
      "Allergic reaction to medication",
      "Temporary leg weakness or numbness",
    ],
    candidateFor: [
      "Patients with radiating arm or leg pain from spine conditions",
      "Those who haven't responded adequately to medication and physical therapy",
      "Patients looking to avoid or delay surgery",
      "People who need pain relief to participate in rehabilitation",
    ],
    duration: "15-30 minutes",
    relatedTreatments: ["selective-nerve-root-block", "facet-joint-injections", "radiofrequency-ablation"],
    metaDescription:
      "Epidural steroid injections in Arlington Heights for sciatica, herniated discs, and spine pain. Board-certified specialists using image-guided precision. Same-day appointments.",
  },
  {
    slug: "radiofrequency-ablation",
    name: "Radiofrequency Ablation",
    category: "pain-management",
    description:
      "If you've had good results from nerve blocks but the pain keeps coming back, radiofrequency ablation might give you the longer-lasting relief you're looking for. This procedure uses heat to interrupt pain signals from specific nerves, often providing 6-12 months of relief—sometimes even longer. It's like turning down the volume on a nerve that won't stop broadcasting pain.",
    overview:
      "Radiofrequency ablation (RFA), also called radiofrequency neurotomy, uses heat generated by radio waves to target specific nerves that are transmitting pain signals. By creating a small lesion on the nerve, we interrupt its ability to send pain messages to your brain. The procedure is most commonly used for chronic back and neck pain originating from facet joints or the sacroiliac joint.",
    howItWorks:
      "A special needle with an electrode tip is positioned near the nerve responsible for your pain. Once we confirm the correct location through testing, radiofrequency energy heats the needle tip to create a precise lesion on the nerve. This disrupts the nerve's ability to transmit pain signals. The nerve eventually regenerates (usually in 6-12 months), but many patients enjoy prolonged relief and can repeat the procedure if needed.",
    conditions: [
      "Chronic facet joint pain in the neck or back",
      "Sacroiliac joint pain",
      "Chronic lower back pain",
      "Chronic neck pain",
      "Arthritis of the spine",
      "Pain that responds temporarily to nerve blocks",
      "Knee arthritis pain (genicular nerve ablation)",
    ],
    benefits: [
      "Long-lasting relief—typically 6-12 months, sometimes longer",
      "Can be repeated when pain returns",
      "Minimally invasive outpatient procedure",
      "Reduces need for pain medications",
      "Allows return to normal activities",
      "Covered by most insurance including Medicare",
    ],
    procedure: [
      {
        step: "Positioning",
        description:
          "You'll lie on a procedure table. The treatment area is cleaned and numbed with local anesthetic.",
      },
      {
        step: "Needle placement",
        description:
          "Using fluoroscopy guidance, thin needles with electrode tips are positioned near the target nerves.",
      },
      {
        step: "Sensory and motor testing",
        description:
          "Before ablation, we test to confirm we're at the correct nerve and not affecting any motor function.",
      },
      {
        step: "Ablation",
        description:
          "Radiofrequency energy heats each needle tip for about 90 seconds, creating small lesions that interrupt pain signals.",
      },
      {
        step: "Completion",
        description:
          "The needles are removed and small bandages applied. You'll rest briefly before going home.",
      },
    ],
    recovery:
      "You may experience soreness at the treatment sites for 1-2 weeks—this is normal and doesn't mean the procedure didn't work. Pain relief typically begins within 2-3 weeks, with maximum benefit around 4-6 weeks. Some patients take longer to notice improvement. Avoid strenuous activity for a few days, but most people return to normal activities quickly.",
    risks: [
      "Temporary increased pain or soreness",
      "Numbness at treatment site",
      "Infection (rare)",
      "Bleeding",
      "Nerve damage (very rare)",
    ],
    candidateFor: [
      "Patients who got significant but temporary relief from diagnostic nerve blocks",
      "Those with chronic facet joint or sacroiliac joint pain",
      "People who want to reduce reliance on pain medications",
      "Patients who aren't surgical candidates or want to avoid surgery",
    ],
    duration: "30-60 minutes",
    relatedTreatments: ["facet-joint-injections", "epidural-steroid-injections"],
    metaDescription:
      "Radiofrequency ablation in Arlington Heights for long-lasting back and neck pain relief. 6-12 months of relief from a minimally invasive procedure. Call today.",
  },
  {
    slug: "joint-injections",
    name: "Joint Injections",
    category: "pain-management",
    description:
      "When joint pain from arthritis or injury makes every movement difficult, joint injections can deliver relief right where you need it. Whether it's your knee, shoulder, hip, or smaller joints, we can inject medication directly into the joint space to reduce inflammation, cushion damaged cartilage, or promote healing. Many patients find this gives them the relief they need to stay active.",
    overview:
      "Joint injections deliver medication directly into the affected joint, providing targeted relief that oral medications can't match. We offer several types of joint injections depending on your condition: corticosteroids for inflammation, hyaluronic acid for lubrication and cushioning, and PRP for regenerative healing. All injections are performed with precision using ultrasound guidance.",
    howItWorks:
      "Different types of joint injections work in different ways. Corticosteroid injections reduce inflammation in the joint lining, providing relief from arthritis flares and acute inflammation. Hyaluronic acid (viscosupplementation) acts like synthetic joint fluid, cushioning and lubricating joints where natural fluid has broken down. Platelet-rich plasma (PRP) delivers concentrated growth factors that stimulate healing.",
    conditions: [
      "Knee osteoarthritis",
      "Shoulder arthritis and bursitis",
      "Hip arthritis",
      "Hand and wrist arthritis",
      "Ankle arthritis",
      "Rotator cuff problems",
      "Tennis elbow and golfer's elbow",
      "Joint injuries and inflammation",
    ],
    benefits: [
      "Targeted relief directly at the source of pain",
      "Faster-acting than oral medications",
      "Fewer systemic side effects than pills",
      "Can significantly improve function and mobility",
      "May delay or prevent need for joint replacement",
      "Quick outpatient procedure",
      "Relief typically lasts weeks to months",
    ],
    procedure: [
      {
        step: "Evaluation",
        description:
          "We examine your joint and review any imaging to determine the best type of injection for your condition.",
      },
      {
        step: "Preparation",
        description:
          "The skin over your joint is cleaned with antiseptic. Local anesthetic numbs the injection site.",
      },
      {
        step: "Ultrasound guidance",
        description:
          "We use ultrasound imaging to visualize your joint in real-time and guide the needle to the optimal position.",
      },
      {
        step: "Injection",
        description:
          "The medication is slowly injected into the joint space. You may feel pressure but minimal pain.",
      },
      {
        step: "Post-injection",
        description:
          "A bandage is applied and you'll receive instructions for the first 24-48 hours.",
      },
    ],
    recovery:
      "Recovery varies by injection type. Corticosteroid injections may cause temporary increased pain for 24-48 hours before relief kicks in—full effect usually within a week. Hyaluronic acid injections work more gradually over 2-4 weeks. Avoid strenuous activity for a day or two. Most patients can return to normal activities the same or next day.",
    risks: [
      "Temporary pain flare after injection",
      "Infection (rare with sterile technique)",
      "Bleeding or bruising",
      "Cartilage damage with repeated steroid injections",
      "Allergic reaction",
    ],
    candidateFor: [
      "Patients with joint arthritis not adequately controlled by oral medications",
      "Those with acute joint inflammation or bursitis",
      "People wanting to delay joint replacement surgery",
      "Athletes with joint injuries needing targeted treatment",
    ],
    duration: "15-20 minutes",
    relatedTreatments: ["trigger-point-injections", "epidural-steroid-injections"],
    metaDescription:
      "Joint injections in Arlington Heights for arthritis, knee pain, shoulder pain, and hip pain. Ultrasound-guided for precision. Relief in days.",
  },
  {
    slug: "selective-nerve-root-block",
    name: "Selective Nerve Root Block",
    category: "pain-management",
    description:
      "A selective nerve root block targets a single nerve root as it exits your spine. It serves two purposes: first, it helps pinpoint exactly which nerve is causing your pain (diagnosis); second, it delivers anti-inflammatory medication directly to that nerve (treatment). If you're experiencing radiating arm or leg pain and we need to identify the exact source, this procedure can provide answers—and relief.",
    overview:
      "When pain travels from your spine down into your arm or leg, it's usually because a specific nerve root is being compressed or irritated. A selective nerve root block allows us to isolate and treat that one nerve. Unlike epidural injections that bathe multiple nerves, this targeted approach helps us confirm which nerve is responsible and delivers concentrated medication exactly where it's needed.",
    howItWorks:
      "Using fluoroscopic guidance, we position a needle at the specific nerve root suspected of causing your pain. First, we inject a small amount of local anesthetic. If your pain significantly decreases, we've confirmed the diagnosis—that nerve is the problem. We then inject corticosteroid to reduce inflammation for longer-lasting relief. The diagnostic information also helps guide further treatment decisions.",
    conditions: [
      "Sciatica with unclear origin",
      "Cervical radiculopathy (arm pain from neck)",
      "Lumbar radiculopathy (leg pain from back)",
      "Herniated disc affecting a specific nerve",
      "Foraminal stenosis (nerve compression)",
      "Pre-surgical diagnostic evaluation",
      "Complex spine pain requiring precise diagnosis",
    ],
    benefits: [
      "Precisely identifies which nerve is causing pain",
      "Highly targeted treatment with minimal medication",
      "Helps plan further treatment including surgery if needed",
      "Can provide significant pain relief",
      "Outpatient procedure with quick recovery",
      "Useful when multiple levels could be responsible",
    ],
    procedure: [
      {
        step: "Positioning",
        description:
          "You'll lie on the procedure table. The skin is cleaned and local anesthetic numbs the area.",
      },
      {
        step: "Needle guidance",
        description:
          "Using fluoroscopy, a thin needle is guided to the specific nerve root opening (foramen).",
      },
      {
        step: "Contrast confirmation",
        description:
          "Contrast dye confirms the needle is at the correct nerve root before injection.",
      },
      {
        step: "Diagnostic injection",
        description:
          "Local anesthetic is injected first to assess pain relief and confirm diagnosis.",
      },
      {
        step: "Therapeutic injection",
        description:
          "If the block is diagnostic, corticosteroid is added for longer-lasting relief.",
      },
    ],
    recovery:
      "You may experience numbness or weakness in the affected arm or leg for several hours—this is expected and temporary. Arrange for someone to drive you home. Most patients can resume normal activities the next day. Track your pain relief over the following days; this information helps guide your treatment plan.",
    risks: [
      "Temporary numbness or weakness",
      "Temporary increase in pain",
      "Infection (rare)",
      "Nerve injury (very rare)",
      "Bleeding",
      "Allergic reaction",
    ],
    candidateFor: [
      "Patients with radiating arm or leg pain",
      "Those being evaluated for spine surgery",
      "People with multi-level spine problems where the pain source is unclear",
      "Patients who want targeted treatment for a specific nerve",
    ],
    duration: "20-30 minutes",
    relatedTreatments: ["epidural-steroid-injections", "radiofrequency-ablation"],
    metaDescription:
      "Selective nerve root blocks in Arlington Heights for precise diagnosis and treatment of sciatica and radiating nerve pain. Expert pain specialists.",
  },
  {
    slug: "facet-joint-injections",
    name: "Facet Joint Injections",
    category: "pain-management",
    description:
      "The facet joints are small joints along the back of your spine that help you bend and twist. When they become arthritic or inflamed—which happens with age or after injury—they can cause significant back or neck pain. Facet joint injections deliver anti-inflammatory medication directly into these joints, often providing substantial relief and helping confirm that the facets are indeed your pain source.",
    overview:
      "Your spine has pairs of facet joints at each level—these joints guide movement and bear weight. Over time, wear and tear causes arthritis in these joints, leading to pain, stiffness, and reduced mobility. Facet joint injections target these specific joints, combining local anesthetic (for immediate but temporary relief) with corticosteroid (for longer-lasting inflammation reduction).",
    howItWorks:
      "Using fluoroscopic guidance, we inject medication directly into the facet joint capsule or the small nerves that supply sensation to the joint (medial branch block). The local anesthetic provides immediate but short-term relief, which helps confirm the facet joint is your pain source. The corticosteroid reduces inflammation and can provide weeks to months of relief.",
    conditions: [
      "Facet joint arthritis",
      "Chronic back pain from facet joints",
      "Chronic neck pain from cervical facets",
      "Pain and stiffness that worsens with extension or rotation",
      "Spine pain after whiplash or injury",
      "Diagnostic evaluation before radiofrequency ablation",
    ],
    benefits: [
      "Targets a common but often overlooked pain source",
      "Both diagnostic and therapeutic",
      "Can provide weeks to months of relief",
      "Helps determine if you're a candidate for radiofrequency ablation",
      "Minimally invasive outpatient procedure",
      "Reduces need for pain medications",
    ],
    procedure: [
      {
        step: "Preparation",
        description:
          "You'll lie face down. The skin over your spine is cleaned and numbed.",
      },
      {
        step: "Needle placement",
        description:
          "Using fluoroscopy, thin needles are guided into the facet joints or onto the medial branch nerves.",
      },
      {
        step: "Confirmation",
        description:
          "Contrast dye confirms proper needle position within the joint capsule.",
      },
      {
        step: "Injection",
        description:
          "A mixture of local anesthetic and corticosteroid is injected into each targeted joint.",
      },
      {
        step: "Assessment",
        description:
          "You'll be asked to perform movements that normally cause pain to assess immediate relief.",
      },
    ],
    recovery:
      "You may feel immediate relief from the local anesthetic, which wears off in a few hours. The steroid takes 3-7 days to reach full effect. Some people experience soreness at the injection sites for a day or two. Most patients return to normal activities the same or next day. Keep a pain diary to track your response.",
    risks: [
      "Temporary soreness at injection sites",
      "Temporary increase in pain",
      "Infection (rare)",
      "Bleeding",
      "Allergic reaction",
    ],
    candidateFor: [
      "Patients with back or neck pain that worsens with extension or twisting",
      "Those with spine arthritis on imaging",
      "People whose pain hasn't responded to medication and physical therapy alone",
      "Patients being evaluated for radiofrequency ablation",
    ],
    duration: "15-30 minutes",
    relatedTreatments: ["radiofrequency-ablation", "epidural-steroid-injections", "trigger-point-injections"],
    metaDescription:
      "Facet joint injections in Arlington Heights for back and neck pain from spine arthritis. Image-guided precision for lasting relief.",
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    category: "pain-management",
    description:
      "Those painful knots in your muscles—trigger points—can cause surprisingly severe and widespread pain. You might feel them as tight bands in your neck, shoulders, back, or other muscles, often referring pain to other areas. Trigger point injections release these knots quickly, providing relief that stretching and massage alone couldn't achieve.",
    overview:
      "Trigger points are hyperirritable spots within tight bands of muscle that can cause local pain and referred pain to other areas. For example, a trigger point in your shoulder might cause headaches or pain down your arm. Trigger point injections use a small needle to release these knots, often with medication to reduce inflammation and spasm.",
    howItWorks:
      "The injection itself mechanically disrupts the contracted muscle fibers, helping them relax. Depending on your condition, we may inject local anesthetic (to block pain and break the cycle), corticosteroid (to reduce inflammation), or simply use dry needling (the needle alone without medication). The result is release of the tight band and reduction in referred pain.",
    conditions: [
      "Myofascial pain syndrome",
      "Tension headaches and migraines from muscle tension",
      "Chronic neck and shoulder pain",
      "Upper and lower back muscle pain",
      "Fibromyalgia-related muscle pain",
      "Muscle pain after injury or whiplash",
      "Repetitive strain injuries",
    ],
    benefits: [
      "Immediate relief as muscle knots release",
      "Reduces referred pain to other areas",
      "Breaks the cycle of muscle spasm and pain",
      "Can be done in office without sedation",
      "Multiple trigger points treated in one session",
      "Complements physical therapy and stretching",
    ],
    procedure: [
      {
        step: "Identification",
        description:
          "Through palpation, your provider locates the trigger points—you'll likely recognize them as tender spots.",
      },
      {
        step: "Preparation",
        description:
          "The skin is cleaned with antiseptic. Sometimes a small amount of local anesthetic is used to numb the skin.",
      },
      {
        step: "Injection",
        description:
          "A small needle is inserted into the trigger point. You may feel a brief cramping or twitch as the knot releases.",
      },
      {
        step: "Treatment completion",
        description:
          "Multiple trigger points can be treated in one session. Pressure is applied briefly to control any bleeding.",
      },
    ],
    recovery:
      "You may feel soreness at the injection sites for 24-48 hours—this is normal. Gentle stretching, heat, and over-the-counter pain relievers help. Avoid strenuous use of the treated muscles for a day or two. Many patients feel significant relief once the initial soreness subsides.",
    risks: [
      "Soreness at injection sites",
      "Bruising",
      "Temporary numbness (if anesthetic used)",
      "Infection (rare)",
      "Vasovagal response (feeling faint)",
    ],
    candidateFor: [
      "Patients with palpable muscle knots causing pain",
      "Those with tension headaches related to neck muscle tightness",
      "People with myofascial pain syndrome",
      "Anyone with chronic muscle pain not responding to stretching alone",
    ],
    duration: "10-20 minutes",
    relatedTreatments: ["facet-joint-injections", "joint-injections"],
    metaDescription:
      "Trigger point injections in Arlington Heights for muscle knots, tension headaches, and myofascial pain. Quick relief in one office visit.",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs(): string[] {
  return TREATMENTS.map((t) => t.slug);
}

export function getTreatmentsByCategory(category: Treatment["category"]): Treatment[] {
  return TREATMENTS.filter((t) => t.category === category);
}
