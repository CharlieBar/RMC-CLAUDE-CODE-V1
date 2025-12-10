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
      "If your back is keeping you from doing normal things—sitting at your desk, playing with your kids, or just sleeping through the night—you're not alone. Back pain is incredibly common, and while some of it goes away on its own, a lot of it doesn't. That's when you need someone who can figure out what's actually causing it.",
    causes: [
      "Lifting something heavy the wrong way or a sudden twist",
      "A disc in your spine bulging or herniated and pressing on a nerve",
      "Wear and tear as you get older (degenerative disc disease)",
      "Narrowing of your spinal canal putting pressure on nerves",
      "Arthritis affecting the joints in your spine",
      "Years of sitting hunched over at a desk",
      "An old injury that never healed right",
    ],
    symptoms: [
      "A dull ache that won't let up, or sharp pain that stops you in your tracks",
      "Pain that shoots down into your buttock, leg, or foot",
      "Stiffness that makes it hard to bend or turn",
      "Muscle spasms that come out of nowhere",
      "Pain that gets worse when you sit, stand, or lie in certain positions",
      "Feeling like you can't stand up straight",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Radiofrequency Ablation", href: "/services/pain-management/radiofrequency-ablation" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
    ],
    relatedConditions: ["sciatica", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Back pain treatment in Arlington Heights. Our specialists find out what's causing your pain and offer real solutions—from physical therapy to injections to minimally invasive procedures.",
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    description:
      "You know sciatica when you feel it—that sharp, shooting pain that starts in your lower back or hip and runs all the way down your leg. Sometimes it's a constant burn, sometimes it hits like lightning. Either way, it can make sitting, standing, and walking miserable. The good news? It's usually very treatable once we figure out what's irritating your sciatic nerve.",
    causes: [
      "A herniated or bulging disc pressing on the nerve",
      "Your spinal canal narrowing and squeezing the nerve (stenosis)",
      "A tight piriformis muscle in your hip irritating the nerve",
      "A vertebra that's slipped out of place",
      "Bone spurs from arthritis",
      "Wear and tear from aging",
    ],
    symptoms: [
      "Sharp or burning pain that runs from your back down through your leg",
      "Tingling or 'pins and needles' in your leg or foot",
      "One leg feels weak or hard to control",
      "Pain that gets worse when you sit for a while",
      "Electric shock sensations when you move certain ways",
      "Numbness in your leg, foot, or toes",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Selective Nerve Root Block", href: "/services/pain-management/selective-nerve-root-block" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Radiofrequency Ablation", href: "/services/pain-management/radiofrequency-ablation" },
    ],
    relatedConditions: ["back-pain", "herniated-disc", "spinal-stenosis"],
    metaDescription:
      "Sciatica relief in Arlington Heights. We find what's causing that shooting leg pain and treat it—with injections, nerve blocks, PT, or other options that actually work.",
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    description:
      "Neck pain can sneak up on you from years of hunching over a computer, or hit suddenly after a car accident. Either way, when your neck hurts, it affects everything—work, sleep, even just turning to talk to someone. If rest and stretching aren't cutting it anymore, it's time to find out what's really going on.",
    causes: [
      "Too many hours hunched over a computer or phone",
      "Whiplash from a car accident (even a minor one)",
      "A disc in your neck that's bulging or herniated",
      "Arthritis wearing down the joints in your cervical spine",
      "Muscles that are chronically tight and knotted",
      "A pinched nerve from bone spurs or disc problems",
    ],
    symptoms: [
      "Stiffness that makes turning your head difficult",
      "Sharp pain in one spot or a general aching soreness",
      "Pain that travels into your shoulder, arm, or hand",
      "Headaches that start at the base of your skull",
      "Tingling or numbness running down your arm",
      "Muscle spasms that lock up your neck",
    ],
    treatments: [
      { name: "Cervical Epidural Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Trigger Point Injections", href: "/services/pain-management/trigger-point-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
    ],
    relatedConditions: ["whiplash", "herniated-disc"],
    metaDescription:
      "Neck pain treatment in Arlington Heights. Whether it's from an accident or years at a desk, we'll figure out what's wrong and help you get relief.",
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    description:
      "Your knees take a beating over a lifetime—sports injuries, old falls, years of wear and tear. When knee pain starts affecting how you walk, work, or enjoy life, you need answers. Is it something that'll heal on its own? Does it need surgery? Let's find out and get you a plan that actually works.",
    causes: [
      "Torn ACL, MCL, or meniscus (common in sports and accidents)",
      "Arthritis wearing down the cartilage",
      "Tendinitis from overuse or repetitive motion",
      "Bursitis from kneeling too much",
      "IT band issues from running or cycling",
      "A fracture or dislocation that didn't heal right",
    ],
    symptoms: [
      "Pain when you put weight on it or try to walk",
      "Swelling that won't go down",
      "Your knee feels unstable, like it might give out",
      "Popping, clicking, or grinding when you move it",
      "Can't bend or straighten it all the way",
      "The joint feels warm or looks red",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Knee Arthroscopy", href: "/services/orthopedics/knee" },
      { name: "Knee Replacement", href: "/services/orthopedics/knee" },
    ],
    relatedConditions: ["arthritis", "sports-injuries"],
    metaDescription:
      "Knee pain specialists in Arlington Heights. From torn ligaments to worn-out joints, we figure out what's wrong and offer solutions—from injections and PT to surgery if you need it.",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    description:
      "Shoulder pain can make the simplest things—reaching for a cup, putting on a coat, throwing a ball with your kid—feel impossible. Whether it came on slowly or happened in one bad moment, shoulder problems tend to get worse if you ignore them. Let's figure out what's going on and get your arm working again.",
    causes: [
      "A torn or inflamed rotator cuff",
      "Frozen shoulder (your joint gradually locks up)",
      "Impingement (tendons getting pinched when you move)",
      "Arthritis grinding away at the joint",
      "Bursitis causing inflammation and swelling",
      "An old dislocation or instability from sports",
    ],
    symptoms: [
      "It hurts to reach overhead or behind your back",
      "Weakness when you try to lift or rotate your arm",
      "Pain that wakes you up at night",
      "Clicking, popping, or catching sensations",
      "Gradual loss of motion—your shoulder just won't move like it used to",
      "Aching that won't let up, even at rest",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Shoulder Arthroscopy", href: "/services/orthopedics/shoulder-rotator-cuff" },
      { name: "Rotator Cuff Repair", href: "/services/orthopedics/shoulder-rotator-cuff" },
    ],
    relatedConditions: ["arthritis", "sports-injuries"],
    metaDescription:
      "Shoulder pain treatment in Arlington Heights. Rotator cuff injuries, frozen shoulder, or something else—we'll diagnose it and help you get your arm working again.",
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    description:
      "Arthritis isn't just something you have to live with. Yes, it's common—especially as you get older—but that doesn't mean you should accept constant pain and stiffness as your new normal. There are real treatments that help, from injections that reduce inflammation to surgery when a joint is truly worn out. Let's talk about your options.",
    causes: [
      "Years of wear and tear on your joints (osteoarthritis)",
      "Your immune system attacking your own joints (rheumatoid)",
      "An old injury that damaged cartilage",
      "It runs in your family",
      "Extra weight putting stress on your joints",
      "Just getting older—cartilage breaks down over time",
    ],
    symptoms: [
      "Joints that ache and feel tender to the touch",
      "Morning stiffness that takes a while to work out",
      "Swelling around knees, hips, hands, or other joints",
      "You can't move the joint like you used to",
      "Grinding, grating, or crunching when you move",
      "Bony bumps forming around the joint",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Joint Replacement Surgery", href: "/services/orthopedics" },
      { name: "Radiofrequency Ablation", href: "/services/pain-management/radiofrequency-ablation" },
    ],
    relatedConditions: ["knee-pain", "shoulder-pain", "hip-pain"],
    metaDescription:
      "Arthritis relief in Arlington Heights. Don't just live with the pain—we offer injections, PT, and surgery options that actually help you move better and hurt less.",
  },
  {
    slug: "herniated-disc",
    name: "Herniated Disc",
    description:
      "A herniated disc happens when one of the cushions between your vertebrae bulges out and presses on a nerve. It can cause intense pain, numbness running down your arm or leg, and weakness that makes you worry something's seriously wrong. The good news: most herniated discs get better without surgery if treated right.",
    causes: [
      "The discs in your spine naturally weaken as you age",
      "Lifting something heavy with bad form",
      "A sudden twist that put too much stress on your spine",
      "A fall, car accident, or other trauma",
      "Years of repetitive bending and twisting",
      "Some people are just more prone to disc problems",
    ],
    symptoms: [
      "Sharp, burning pain in your back or neck",
      "Pain shooting down your arm or leg (depends on where the disc is)",
      "Numbness or tingling in your extremities",
      "One arm or leg feels weaker than it should",
      "Pain that spikes when you cough, sneeze, or move certain ways",
      "Symptoms usually worse on one side",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Selective Nerve Root Block", href: "/services/pain-management/selective-nerve-root-block" },
    ],
    relatedConditions: ["back-pain", "sciatica", "neck-pain"],
    metaDescription:
      "Herniated disc treatment in Arlington Heights. Most disc problems don't need surgery—we offer injections, nerve blocks, and PT to help you heal and get out of pain.",
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    description:
      "Whether you're a weekend warrior or a serious athlete, injuries happen. A wrong step, a hard collision, or just pushing too hard for too long. The goal isn't just to heal—it's to get you back to doing what you love, safely. We'll figure out exactly what's wrong and create a plan to get you there.",
    causes: [
      "Pushing too hard without enough rest (overuse injuries)",
      "A bad tackle, fall, or collision",
      "Training with bad form or ramping up too fast",
      "Skipping warmups or not stretching enough",
      "Being out of shape for the activity you're doing",
      "Old, worn-out, or wrong equipment",
    ],
    symptoms: [
      "Pain that flares up during or after activity",
      "Swelling that shows up quickly after an injury",
      "You can't move the joint through its full range",
      "The injured area feels weak or gives way",
      "A joint feels loose or unstable",
      "Visible bruising, swelling, or deformity",
    ],
    treatments: [
      { name: "Sports Medicine Evaluation", href: "/services/orthopedics/sports-injuries" },
      { name: "Physical Therapy", href: "/services/physical-therapy/sports-rehab" },
      { name: "Arthroscopic Surgery", href: "/services/orthopedics" },
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
    ],
    relatedConditions: ["knee-pain", "shoulder-pain"],
    metaDescription:
      "Sports injury care in Arlington Heights. Torn ACL, rotator cuff, or overuse injury—we diagnose it, treat it, and get you back in the game safely.",
  },
  {
    slug: "hip-pain",
    name: "Hip Pain",
    description:
      "Hip pain can make everything harder—walking, climbing stairs, even sitting comfortably. Whether it's from arthritis wearing down the joint, a sports injury, or just years of use catching up with you, hip problems don't get better by ignoring them. Let's figure out what's going on and what we can do about it.",
    causes: [
      "Arthritis wearing down the hip joint cartilage",
      "Bursitis from overuse or pressure on the hip",
      "A labral tear from sports or repetitive motion",
      "Muscle strains around the hip and groin",
      "Hip impingement (bones rubbing together)",
      "Referred pain from your lower back",
      "An old injury that never healed properly",
    ],
    symptoms: [
      "Pain in your groin, outer hip, thigh, or buttock",
      "Stiffness that makes it hard to bend or rotate your leg",
      "Limping or difficulty walking",
      "Pain that gets worse with activity or prolonged sitting",
      "Clicking, locking, or catching sensations",
      "Reduced range of motion—can't cross your legs or tie your shoes",
    ],
    treatments: [
      { name: "Joint Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Hip Arthroscopy", href: "/services/orthopedics" },
      { name: "Hip Replacement", href: "/services/orthopedics" },
    ],
    relatedConditions: ["arthritis", "back-pain"],
    metaDescription:
      "Hip pain treatment in Arlington Heights. From arthritis to sports injuries, we diagnose what's causing your hip pain and offer real solutions—from PT and injections to surgery if needed.",
  },
  {
    slug: "whiplash",
    name: "Whiplash",
    description:
      "Whiplash happens when your head snaps forward and backward suddenly—usually in a car accident, but sometimes from sports or falls. The tricky thing about whiplash is that symptoms often don't show up for hours or even days. If you've been in an accident, getting checked out early matters for both your health and your insurance claim.",
    causes: [
      "Rear-end car accidents (most common)",
      "Side-impact collisions",
      "Sports collisions or tackles",
      "Falls that jerk your head suddenly",
      "Amusement park rides or roller coasters",
      "Physical abuse or assault",
    ],
    symptoms: [
      "Neck pain and stiffness that gets worse over time",
      "Headaches starting at the base of your skull",
      "Pain or tenderness in your shoulders and upper back",
      "Tingling or numbness in your arms",
      "Dizziness or feeling off-balance",
      "Fatigue and difficulty concentrating",
      "Blurred vision or ringing in your ears",
    ],
    treatments: [
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Trigger Point Injections", href: "/services/pain-management/trigger-point-injections" },
      { name: "Cervical Epidural Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Facet Joint Injections", href: "/services/pain-management/facet-joint-injections" },
    ],
    relatedConditions: ["neck-pain", "herniated-disc"],
    metaDescription:
      "Whiplash treatment after car accidents in Arlington Heights. Don't wait for symptoms to get worse—get evaluated early and document your injuries properly for insurance.",
  },
  {
    slug: "carpal-tunnel",
    name: "Carpal Tunnel Syndrome",
    description:
      "That tingling, numbness, or pain in your hand? It might be carpal tunnel syndrome—a condition where the nerve running through your wrist gets squeezed. It's common in people who do repetitive hand work, from typing to assembly line jobs. The good news: if caught early, it often responds well to treatment without surgery.",
    causes: [
      "Repetitive hand and wrist motions (typing, assembly work)",
      "Wrist anatomy—some people have narrower tunnels",
      "Inflammatory conditions like rheumatoid arthritis",
      "Fluid retention during pregnancy or menopause",
      "Diabetes or thyroid disorders",
      "Wrist injuries or fractures",
    ],
    symptoms: [
      "Tingling or numbness in your thumb, index, middle, and ring fingers",
      "Pain that radiates from your wrist up your arm",
      "Weakness in your hand—dropping things more often",
      "Shock-like sensations in your fingers",
      "Symptoms that wake you up at night",
      "Difficulty with fine motor tasks like buttoning shirts",
    ],
    treatments: [
      { name: "Wrist Splinting", href: "/services/orthopedics" },
      { name: "Corticosteroid Injections", href: "/services/pain-management/joint-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Carpal Tunnel Release Surgery", href: "/services/surgery-center" },
    ],
    relatedConditions: ["arthritis"],
    metaDescription:
      "Carpal tunnel treatment in Arlington Heights. Tingling, numbness, or weakness in your hand? We offer non-surgical and surgical options to relieve your symptoms.",
  },
  {
    slug: "spinal-stenosis",
    name: "Spinal Stenosis",
    description:
      "Spinal stenosis means the spaces in your spine are narrowing and putting pressure on your nerves. It usually develops gradually—often from arthritis—and gets worse over time. If you're finding that walking is harder than it used to be, or you feel better when you lean forward or sit down, stenosis might be the culprit.",
    causes: [
      "Osteoarthritis and bone spurs in the spine",
      "Thickening of spinal ligaments over time",
      "Herniated or bulging discs",
      "Tumors (rare)",
      "Previous spinal injuries",
      "You were born with a narrow spinal canal",
    ],
    symptoms: [
      "Pain in your lower back or neck",
      "Numbness, tingling, or weakness in your legs or arms",
      "Cramping in your legs when walking or standing (claudication)",
      "Relief when you bend forward, sit, or lean on a shopping cart",
      "Balance problems or difficulty walking",
      "In severe cases, bladder or bowel issues (get help immediately)",
    ],
    treatments: [
      { name: "Epidural Steroid Injections", href: "/services/pain-management/epidural-steroid-injections" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
      { name: "Nerve Block Injections", href: "/services/pain-management/selective-nerve-root-block" },
      { name: "Spinal Decompression Surgery", href: "/services/surgery-center" },
    ],
    relatedConditions: ["back-pain", "sciatica", "arthritis"],
    metaDescription:
      "Spinal stenosis treatment in Arlington Heights. If walking has become painful and sitting brings relief, we can help—with injections, therapy, or surgery when needed.",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return CONDITIONS.map((c) => c.slug);
}
