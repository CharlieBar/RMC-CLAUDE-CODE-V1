// Treatments data for dynamic pages
export interface Treatment {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  howItWorks: string;
  idealCandidates: string[];
  procedure: string[];
  preparation: string[];
  risks: string[];
  recovery: string;
  expectedResults: string;
  duration: string;
  frequency: string;
  relatedConditions: { name: string; href: string }[];
  relatedServices: { name: string; href: string }[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
}

export const TREATMENTS: Treatment[] = [
  {
    slug: "epidural-steroid-injections",
    name: "Epidural Steroid Injections (ESI)",
    shortDescription: "Targeted injection to reduce inflammation and pain in the spine",
    description:
      "Epidural steroid injections deliver powerful anti-inflammatory medication directly into the epidural space surrounding the spinal nerves. This targeted approach provides relief for patients suffering from spinal conditions that cause radiating pain, numbness, or weakness in the arms or legs.",
    howItWorks:
      "The procedure involves injecting a corticosteroid medication combined with a local anesthetic into the epidural space of the spine. The steroid reduces inflammation around the compressed or irritated nerve roots, while the anesthetic provides immediate pain relief. This allows the body to heal while the inflammation subsides.",
    idealCandidates: [
      "Patients with herniated or bulging discs causing nerve compression",
      "Those suffering from spinal stenosis",
      "Individuals with sciatica or radiculopathy",
      "Patients who have not responded to conservative treatments",
      "Those seeking to avoid or delay surgery",
    ],
    procedure: [
      "You will lie face down on a procedure table",
      "The skin is cleaned and numbed with local anesthetic",
      "Using fluoroscopic (X-ray) guidance, a needle is carefully positioned",
      "Contrast dye confirms correct needle placement",
      "The steroid medication is injected into the epidural space",
      "The procedure typically takes 15-30 minutes",
    ],
    preparation: [
      "Inform your doctor of all medications, especially blood thinners",
      "You may need to stop certain medications before the procedure",
      "Do not eat for 6 hours before if sedation is planned",
      "Arrange for someone to drive you home",
      "Wear comfortable, loose-fitting clothing",
    ],
    risks: [
      "Temporary increase in pain",
      "Headache",
      "Infection (rare)",
      "Bleeding (rare)",
      "Nerve damage (very rare)",
      "Allergic reaction to medication",
    ],
    recovery:
      "Most patients can resume normal activities within 24-48 hours. You may experience some soreness at the injection site. Pain relief typically begins within 2-7 days as the steroid takes effect. Some patients experience immediate relief from the local anesthetic, which may wear off before the steroid starts working.",
    expectedResults:
      "Many patients experience significant pain relief lasting weeks to months. The injection can provide a window of reduced pain that allows for more effective physical therapy and rehabilitation.",
    duration: "15-30 minutes",
    frequency: "Up to 3 injections per year, spaced at least 2-4 weeks apart",
    relatedConditions: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Sciatica", href: "/conditions/sciatica" },
      { name: "Herniated Disc", href: "/conditions/herniated-disc" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
    ],
    faqs: [
      {
        question: "How long does it take for an epidural steroid injection to work?",
        answer:
          "Most patients experience relief within 2-7 days, though some may feel immediate relief from the local anesthetic. The full effect of the steroid typically develops over the first week.",
      },
      {
        question: "How many epidural injections can I have?",
        answer:
          "Generally, up to 3 injections can be given within a 12-month period, spaced at least 2-4 weeks apart. Your doctor will determine the appropriate treatment plan based on your response.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "Most patients experience only mild discomfort. Local anesthetic numbs the area before the injection. Some patients opt for light sedation for additional comfort.",
      },
    ],
    metaDescription:
      "Epidural steroid injections for back pain, sciatica, and herniated discs at Rand Medical Center in Arlington Heights. Find lasting relief with our expert pain management team.",
  },
  {
    slug: "radiofrequency-ablation",
    name: "Radiofrequency Ablation (RFA)",
    shortDescription: "Uses heat to disrupt pain signals from specific nerves",
    description:
      "Radiofrequency ablation is a minimally invasive procedure that uses heat generated by radio waves to target specific nerves and temporarily disable their ability to send pain signals. This procedure provides longer-lasting relief than injections alone for certain chronic pain conditions.",
    howItWorks:
      "During the procedure, a specialized needle electrode is positioned near the target nerve under imaging guidance. Radiofrequency energy heats the nerve tissue to create a precise lesion that interrupts pain signal transmission. The procedure does not damage surrounding tissues and allows the nerve to regenerate over time.",
    idealCandidates: [
      "Patients with chronic facet joint pain who responded to diagnostic nerve blocks",
      "Those with sacroiliac joint pain",
      "Individuals seeking longer-lasting relief than steroid injections",
      "Patients who want to reduce reliance on pain medications",
      "Those who are not surgical candidates or prefer to avoid surgery",
    ],
    procedure: [
      "You will lie on a procedure table, and the area is cleaned and numbed",
      "Using fluoroscopic guidance, the needle electrode is precisely positioned",
      "Sensory and motor testing confirms correct placement",
      "Local anesthetic numbs the nerve before ablation",
      "Radiofrequency energy is applied for 60-90 seconds",
      "Multiple nerves may be treated in one session",
    ],
    preparation: [
      "Complete diagnostic nerve blocks to confirm the pain source",
      "Stop blood-thinning medications as directed",
      "Do not eat for 6 hours before if sedation is planned",
      "Arrange for transportation home",
      "Report any infections or illness to your doctor",
    ],
    risks: [
      "Temporary numbness or tingling",
      "Increased pain initially",
      "Infection (rare)",
      "Nerve damage (rare)",
      "Skin burn at needle site (rare)",
    ],
    recovery:
      "You may experience some soreness and mild discomfort for 1-2 weeks as the area heals. Pain relief typically becomes noticeable 2-4 weeks after the procedure as inflammation from the ablation subsides. Most patients return to normal activities within a few days.",
    expectedResults:
      "RFA typically provides pain relief lasting 6 months to 2 years. Since nerves regenerate over time, the procedure can be repeated if pain returns. Many patients experience 50-80% reduction in their pain levels.",
    duration: "45-90 minutes depending on number of nerves treated",
    frequency: "Can be repeated every 6-12 months if needed",
    relatedConditions: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
      { name: "Arthritis", href: "/conditions/arthritis" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Surgery Center", href: "/surgery-center" },
    ],
    faqs: [
      {
        question: "How long does radiofrequency ablation last?",
        answer:
          "Most patients experience relief for 6 months to 2 years. Since nerves can regenerate, the procedure may need to be repeated, and subsequent procedures are typically as effective as the first.",
      },
      {
        question: "Will I need diagnostic blocks before RFA?",
        answer:
          "Yes, diagnostic nerve blocks are typically performed first to confirm that the targeted nerves are the source of your pain. If the blocks provide significant temporary relief, you are likely a good candidate for RFA.",
      },
      {
        question: "Is RFA covered by insurance?",
        answer:
          "Most insurance plans cover radiofrequency ablation when medically necessary. Our staff will verify your coverage and discuss any out-of-pocket costs before the procedure.",
      },
    ],
    metaDescription:
      "Radiofrequency ablation (RFA) for chronic back and neck pain at Rand Medical Center in Arlington Heights. Long-lasting relief with minimally invasive treatment.",
  },
  {
    slug: "facet-joint-injections",
    name: "Facet Joint Injections",
    shortDescription: "Targeted injections to relieve pain from spinal facet joints",
    description:
      "Facet joint injections deliver anti-inflammatory medication directly into or near the facet joints of the spine. These small joints connect the vertebrae and can become painful due to arthritis, injury, or degeneration. The injections serve both diagnostic and therapeutic purposes.",
    howItWorks:
      "Using fluoroscopic guidance, a needle is positioned at the target facet joint. A combination of local anesthetic and corticosteroid is injected to reduce inflammation and block pain signals. The anesthetic provides immediate diagnostic information about whether the facet joint is the pain source, while the steroid offers longer-term relief.",
    idealCandidates: [
      "Patients with facet joint arthritis or degeneration",
      "Those with back or neck pain that worsens with extension or rotation",
      "Individuals whose pain has not responded to physical therapy alone",
      "Patients being evaluated for radiofrequency ablation",
      "Those seeking an alternative to surgery",
    ],
    procedure: [
      "You will lie face down on a fluoroscopy table",
      "The injection site is cleaned and numbed",
      "A thin needle is guided to the facet joint using X-ray imaging",
      "Contrast dye confirms accurate needle placement",
      "The medication mixture is slowly injected",
      "Multiple joints may be treated in one session",
    ],
    preparation: [
      "Discuss all medications with your doctor, especially blood thinners",
      "Do not eat for several hours before the procedure",
      "Arrange for someone to drive you home",
      "Wear comfortable clothing",
      "Bring your imaging studies if requested",
    ],
    risks: [
      "Temporary soreness at injection site",
      "Temporary increase in pain",
      "Infection (rare)",
      "Allergic reaction (rare)",
      "Bleeding (rare)",
    ],
    recovery:
      "Most patients can resume normal activities the next day. Some soreness at the injection site is normal and typically resolves within a few days. Pain relief from the steroid usually begins within 3-7 days.",
    expectedResults:
      "Pain relief typically lasts several weeks to months. If you experience significant relief, facet joint injections can be repeated, or you may be a candidate for radiofrequency ablation for longer-lasting results.",
    duration: "15-30 minutes",
    frequency: "Can be repeated every 3-6 months as needed",
    relatedConditions: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
      { name: "Arthritis", href: "/conditions/arthritis" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
    ],
    faqs: [
      {
        question: "What is the difference between facet joint injections and epidural injections?",
        answer:
          "Facet joint injections target the small joints connecting vertebrae, while epidural injections deliver medication to the space around spinal nerves. The choice depends on the source of your pain—facet joints versus nerve compression.",
      },
      {
        question: "How will I know if facet joints are causing my pain?",
        answer:
          "If facet joint injections provide significant relief, it confirms the facet joints as a pain source. This diagnostic information helps guide further treatment decisions.",
      },
      {
        question: "Can I drive home after a facet joint injection?",
        answer:
          "No, you should arrange for someone to drive you home. The local anesthetic may temporarily affect sensation and reflexes in the treated area.",
      },
    ],
    metaDescription:
      "Facet joint injections for back and neck pain at Rand Medical Center in Arlington Heights. Diagnostic and therapeutic relief for spinal joint pain.",
  },
  {
    slug: "joint-injections",
    name: "Joint Injections",
    shortDescription: "Corticosteroid or hyaluronic acid injections for joint pain",
    description:
      "Joint injections deliver medication directly into painful joints such as the knee, hip, shoulder, or other areas. These injections can include corticosteroids to reduce inflammation or hyaluronic acid to improve joint lubrication, providing relief from arthritis and other joint conditions.",
    howItWorks:
      "The medication is injected directly into the joint space using precise technique, often guided by ultrasound for accuracy. Corticosteroids reduce inflammation and swelling, providing pain relief. Hyaluronic acid supplements the natural joint fluid, improving cushioning and reducing friction between bones.",
    idealCandidates: [
      "Patients with osteoarthritis in the knee, hip, or shoulder",
      "Those with joint inflammation from injury or overuse",
      "Individuals who have not responded to oral medications",
      "Patients seeking to delay joint replacement surgery",
      "Athletes with joint pain affecting performance",
    ],
    procedure: [
      "The joint area is cleaned with antiseptic solution",
      "Ultrasound may be used to visualize the joint",
      "Local anesthetic numbs the skin and surrounding tissue",
      "A needle is inserted into the joint space",
      "Joint fluid may be removed if swelling is present",
      "The medication is injected into the joint",
    ],
    preparation: [
      "Inform your doctor of any allergies or infections",
      "Discuss blood-thinning medications",
      "Eat normally unless otherwise instructed",
      "Wear loose-fitting clothing that allows access to the joint",
      "Plan to rest the joint for 24-48 hours after the procedure",
    ],
    risks: [
      "Temporary pain or swelling at injection site",
      "Infection (rare)",
      "Cartilage damage with repeated steroid injections",
      "Temporary blood sugar elevation in diabetics",
      "Skin discoloration at injection site",
    ],
    recovery:
      "You should rest the injected joint for 24-48 hours after the procedure. Apply ice if there is swelling. Pain relief from corticosteroids typically begins within 2-7 days. Hyaluronic acid injections may require a series of 3-5 treatments for optimal results.",
    expectedResults:
      "Corticosteroid injections typically provide relief lasting 3-6 months. Hyaluronic acid injections may provide relief for 6 months or longer. Results vary based on the severity of joint damage and individual response.",
    duration: "10-20 minutes",
    frequency: "Steroid injections limited to 3-4 per year per joint; hyaluronic acid can be repeated every 6 months",
    relatedConditions: [
      { name: "Knee Pain", href: "/conditions/knee-pain" },
      { name: "Shoulder Pain", href: "/conditions/shoulder-pain" },
      { name: "Arthritis", href: "/conditions/arthritis" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Orthopedics", href: "/services/orthopedics" },
    ],
    faqs: [
      {
        question: "How often can I receive joint injections?",
        answer:
          "Corticosteroid injections are typically limited to 3-4 per year in a single joint to prevent potential cartilage damage. Hyaluronic acid injections can be repeated every 6 months.",
      },
      {
        question: "What is the difference between steroid and hyaluronic acid injections?",
        answer:
          "Steroid injections reduce inflammation and provide faster relief, while hyaluronic acid improves joint lubrication and may be better for patients who cannot tolerate steroids or need frequent injections.",
      },
      {
        question: "Will I need to take time off work?",
        answer:
          "Most patients can return to desk work the same day. Avoid strenuous activity involving the treated joint for 24-48 hours.",
      },
    ],
    metaDescription:
      "Joint injections for knee, hip, and shoulder pain at Rand Medical Center in Arlington Heights. Relief from arthritis and joint conditions with expert care.",
  },
  {
    slug: "selective-nerve-root-block",
    name: "Selective Nerve Root Block",
    shortDescription: "Targeted injection to diagnose and treat specific nerve pain",
    description:
      "A selective nerve root block (SNRB) is a precision injection that delivers medication to a specific spinal nerve root. This procedure serves both diagnostic and therapeutic purposes, helping identify the exact nerve causing pain while providing relief from radicular symptoms.",
    howItWorks:
      "Under fluoroscopic guidance, a needle is positioned adjacent to the specific nerve root suspected of causing pain. A combination of local anesthetic and corticosteroid is injected. If the injection provides significant relief, it confirms that nerve as the pain source. The steroid continues to reduce inflammation for longer-term relief.",
    idealCandidates: [
      "Patients with radiating arm or leg pain",
      "Those being evaluated for spine surgery",
      "Individuals with MRI findings at multiple levels",
      "Patients who need confirmation of the pain source",
      "Those seeking targeted pain relief",
    ],
    procedure: [
      "You will lie face down or on your side",
      "The skin is cleaned and numbed with local anesthetic",
      "Using X-ray guidance, a needle is positioned near the nerve root",
      "Contrast dye confirms correct placement",
      "The medication is carefully injected around the nerve",
      "The procedure takes about 15-30 minutes",
    ],
    preparation: [
      "Stop blood-thinning medications as directed",
      "Do not eat for 6 hours before if sedation is planned",
      "Bring recent imaging studies",
      "Arrange for transportation home",
      "Report any active infections to your doctor",
    ],
    risks: [
      "Temporary numbness or weakness in the affected area",
      "Increased pain initially",
      "Headache",
      "Infection (rare)",
      "Nerve damage (rare)",
    ],
    recovery:
      "You may experience temporary numbness or weakness in the affected arm or leg for several hours after the procedure. Pain relief from the steroid typically develops over 2-7 days. Most patients resume normal activities within 24-48 hours.",
    expectedResults:
      "Significant relief confirms the targeted nerve as the pain source, which is valuable for treatment planning. Therapeutic relief typically lasts weeks to months and can be repeated if effective.",
    duration: "15-30 minutes",
    frequency: "Can be repeated every 4-6 weeks if needed",
    relatedConditions: [
      { name: "Sciatica", href: "/conditions/sciatica" },
      { name: "Herniated Disc", href: "/conditions/herniated-disc" },
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Surgery Center", href: "/surgery-center" },
    ],
    faqs: [
      {
        question: "How is a selective nerve root block different from an epidural?",
        answer:
          "A selective nerve root block targets a single specific nerve, while an epidural spreads medication across multiple nerve levels. SNRB is more precise for diagnosis and for treating single-level nerve problems.",
      },
      {
        question: "Why might I need this before surgery?",
        answer:
          "If imaging shows problems at multiple levels, a selective nerve root block helps identify which level is causing your symptoms, allowing surgeons to target their intervention more precisely.",
      },
      {
        question: "What should I expect after the procedure?",
        answer:
          "You may have temporary numbness or weakness in your arm or leg. Keep track of your pain levels, as this information helps your doctor understand if the correct nerve was treated.",
      },
    ],
    metaDescription:
      "Selective nerve root blocks for sciatica and radiating nerve pain at Rand Medical Center in Arlington Heights. Precise diagnosis and treatment for nerve-related pain.",
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections (TPI)",
    shortDescription: "Injections to release painful muscle knots",
    description:
      "Trigger point injections target painful knots of muscle that form when muscles do not relax. These tight bands of muscle fiber can cause localized pain and may also refer pain to other areas of the body. TPI provides direct relief to these problem areas.",
    howItWorks:
      "The physician locates the trigger point through palpation and inserts a small needle directly into the knotted muscle. A local anesthetic, sometimes combined with a corticosteroid, is injected to relax the muscle and reduce inflammation. The needle itself also helps break up the muscle knot.",
    idealCandidates: [
      "Patients with myofascial pain syndrome",
      "Those with chronic tension headaches",
      "Individuals with fibromyalgia",
      "Patients with muscle pain from injury or overuse",
      "Those who have not responded to physical therapy alone",
    ],
    procedure: [
      "The trigger point is identified by touch",
      "The skin is cleaned with antiseptic",
      "A small needle is inserted into the trigger point",
      "Medication is injected as the needle is moved slightly",
      "The area may be stretched or massaged afterward",
      "Multiple trigger points can be treated in one session",
    ],
    preparation: [
      "Inform your doctor of all medications and allergies",
      "No special preparation is typically required",
      "Wear comfortable clothing that allows access to the treatment area",
      "Stay hydrated before and after the procedure",
    ],
    risks: [
      "Temporary soreness at injection sites",
      "Bruising",
      "Temporary numbness",
      "Infection (rare)",
      "Allergic reaction (rare)",
    ],
    recovery:
      "Most patients can resume normal activities immediately. The treated area may be sore for 1-2 days. Applying heat and gentle stretching can help. Many patients experience immediate relief, with full benefits developing over several days.",
    expectedResults:
      "Many patients experience immediate improvement. Relief can last weeks to months. Combining injections with physical therapy and stretching often provides the best long-term results.",
    duration: "10-30 minutes depending on number of trigger points",
    frequency: "Can be repeated weekly or as needed",
    relatedConditions: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
      { name: "Headaches", href: "/conditions/headaches" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
    ],
    faqs: [
      {
        question: "Are trigger point injections painful?",
        answer:
          "You may feel brief discomfort when the needle enters the trigger point, often described as a twitch or cramping sensation. This is actually a sign that the correct spot was reached. The discomfort is brief.",
      },
      {
        question: "How many trigger points can be treated at once?",
        answer:
          "Multiple trigger points can be treated in a single session, depending on the area affected and your tolerance. Your doctor will determine the appropriate treatment plan.",
      },
      {
        question: "What should I do after trigger point injections?",
        answer:
          "Apply heat to the treated areas, perform gentle stretches as instructed, and stay hydrated. Avoid strenuous activity for the first day or two.",
      },
    ],
    metaDescription:
      "Trigger point injections for muscle pain and tension at Rand Medical Center in Arlington Heights. Fast relief for myofascial pain, tension headaches, and fibromyalgia.",
  },
  {
    slug: "prp-therapy",
    name: "Platelet-Rich Plasma (PRP) Therapy",
    shortDescription: "Uses your own blood to promote healing and reduce pain",
    description:
      "Platelet-rich plasma therapy is a regenerative treatment that uses concentrated platelets from your own blood to promote healing in damaged tissues. This innovative approach harnesses your body's natural healing factors to treat joint pain, tendon injuries, and certain musculoskeletal conditions.",
    howItWorks:
      "A small sample of your blood is drawn and placed in a centrifuge, which separates the platelets from other blood components. The concentrated platelet solution is then injected into the injured area. Platelets release growth factors that stimulate tissue repair and reduce inflammation.",
    idealCandidates: [
      "Patients with chronic tendon injuries (tennis elbow, Achilles tendinitis)",
      "Those with mild to moderate osteoarthritis",
      "Athletes seeking faster recovery from injuries",
      "Patients who prefer to avoid steroids or surgery",
      "Individuals with ligament sprains or muscle strains",
    ],
    procedure: [
      "A small amount of blood is drawn from your arm",
      "The blood is processed in a centrifuge for about 15 minutes",
      "The injection site is cleaned and may be numbed",
      "Using ultrasound guidance, PRP is injected into the target area",
      "The procedure takes about 45-60 minutes total",
    ],
    preparation: [
      "Stop anti-inflammatory medications 1-2 weeks before",
      "Stay well-hydrated before the procedure",
      "Eat a normal meal",
      "Discuss all medications and supplements with your doctor",
      "Plan for reduced activity after the injection",
    ],
    risks: [
      "Pain and swelling at the injection site",
      "Infection (rare)",
      "Nerve or tissue damage (rare)",
      "No improvement in symptoms",
    ],
    recovery:
      "Avoid strenuous activity for 1-2 weeks after the injection. Some increased soreness is normal as the healing process begins. Pain relief develops gradually over 2-6 weeks as the platelets stimulate tissue repair. Physical therapy is often recommended to optimize results.",
    expectedResults:
      "Improvement is typically gradual, with benefits becoming noticeable over 2-6 weeks. Some patients require multiple injections for optimal results. Studies show significant improvement in many patients with tendon injuries and mild arthritis.",
    duration: "45-60 minutes",
    frequency: "1-3 injections spaced 4-6 weeks apart",
    relatedConditions: [
      { name: "Knee Pain", href: "/conditions/knee-pain" },
      { name: "Shoulder Pain", href: "/conditions/shoulder-pain" },
      { name: "Arthritis", href: "/conditions/arthritis" },
      { name: "Sports Injuries", href: "/conditions/sports-injuries" },
    ],
    relatedServices: [
      { name: "Regenerative Medicine", href: "/services/regenerative-medicine" },
      { name: "Orthopedics", href: "/services/orthopedics" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
    ],
    faqs: [
      {
        question: "Is PRP covered by insurance?",
        answer:
          "PRP is considered investigational by many insurance companies and is often not covered. Our staff can provide detailed cost information and discuss payment options.",
      },
      {
        question: "How long does it take to see results from PRP?",
        answer:
          "Unlike steroid injections that provide quick relief, PRP works by stimulating healing. Most patients notice improvement over 2-6 weeks, with continued benefits developing over several months.",
      },
      {
        question: "Can I return to sports after PRP?",
        answer:
          "Most patients can return to light activity within a few days but should avoid high-impact sports for 4-6 weeks. Your doctor will provide specific guidelines based on your condition and activity level.",
      },
    ],
    metaDescription:
      "PRP therapy for joint and tendon injuries at Rand Medical Center in Arlington Heights. Regenerative treatment using your own platelets to promote natural healing.",
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    shortDescription: "Customized rehabilitation programs to restore function and reduce pain",
    description:
      "Physical therapy at Rand Medical Center provides individualized rehabilitation programs designed to reduce pain, restore function, and prevent future injuries. Our licensed therapists work closely with our physicians to create comprehensive treatment plans that address your specific needs and goals.",
    howItWorks:
      "After a thorough evaluation, your physical therapist develops a personalized treatment plan that may include therapeutic exercises, manual therapy, modalities like heat or electrical stimulation, and education on body mechanics. Treatment progresses as you gain strength and function.",
    idealCandidates: [
      "Patients recovering from surgery",
      "Those with chronic pain conditions",
      "Individuals rehabilitating from injuries",
      "Patients seeking to improve mobility and strength",
      "Athletes returning to sport after injury",
      "Those looking to prevent future injuries",
    ],
    procedure: [
      "Initial evaluation assesses your condition, function, and goals",
      "A personalized treatment plan is developed",
      "Regular therapy sessions (typically 2-3 times per week)",
      "Home exercise program is provided",
      "Progress is monitored and the plan is adjusted as needed",
      "Discharge planning prepares you for continued independent progress",
    ],
    preparation: [
      "Wear comfortable, loose-fitting clothing",
      "Bring any braces, orthotics, or assistive devices you use",
      "Bring your prescription and insurance information",
      "Be prepared to discuss your medical history and goals",
      "Bring any relevant imaging or test results",
    ],
    risks: [
      "Temporary muscle soreness after sessions",
      "Potential for symptom flare-up if exercises are done incorrectly",
    ],
    recovery:
      "Physical therapy is itself a recovery treatment. Session frequency typically decreases as you improve. Most treatment courses last 4-12 weeks, depending on the condition. A home exercise program ensures continued progress after discharge.",
    expectedResults:
      "Most patients experience reduced pain, improved strength and flexibility, and better function. Success depends on active participation and compliance with the home exercise program. Many patients report significant improvement within 4-6 weeks.",
    duration: "45-60 minutes per session",
    frequency: "Typically 2-3 sessions per week for 4-12 weeks",
    relatedConditions: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
      { name: "Knee Pain", href: "/conditions/knee-pain" },
      { name: "Shoulder Pain", href: "/conditions/shoulder-pain" },
      { name: "Sports Injuries", href: "/conditions/sports-injuries" },
    ],
    relatedServices: [
      { name: "Physical Therapy Department", href: "/services/physical-therapy" },
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Orthopedics", href: "/services/orthopedics" },
    ],
    faqs: [
      {
        question: "Do I need a referral for physical therapy?",
        answer:
          "In Illinois, you can see a physical therapist without a physician referral for up to 10 visits or 15 business days. However, some insurance plans require a referral for coverage. We recommend checking with your insurance.",
      },
      {
        question: "How many physical therapy sessions will I need?",
        answer:
          "The number of sessions depends on your condition, goals, and progress. Most treatment courses involve 2-3 sessions per week for 4-12 weeks. Your therapist will adjust the plan based on your response to treatment.",
      },
      {
        question: "What should I expect during my first visit?",
        answer:
          "Your first visit includes a comprehensive evaluation of your condition, medical history, and goals. You may perform some exercises and receive initial treatment. Allow about 60 minutes for this initial session.",
      },
    ],
    metaDescription:
      "Physical therapy and rehabilitation at Rand Medical Center in Arlington Heights. Expert care for injury recovery, chronic pain, post-surgical rehab, and sports rehabilitation.",
  },
  {
    slug: "occipital-nerve-block",
    name: "Occipital Nerve Block",
    shortDescription: "Targeted injection for headaches and neck pain originating from occipital nerves",
    description:
      "An occipital nerve block is an injection of local anesthetic and steroid medication around the greater and lesser occipital nerves at the back of the head. This procedure is used to diagnose and treat headaches, migraines, and pain originating from the occipital region.",
    howItWorks:
      "The occipital nerves run from the upper neck to the back of the head. When these nerves become irritated or inflamed, they can cause headaches, migraines, and scalp tenderness. The injection delivers anti-inflammatory medication directly to these nerves, reducing inflammation and blocking pain signals.",
    idealCandidates: [
      "Patients with occipital neuralgia",
      "Those suffering from chronic migraines or cluster headaches",
      "Individuals with tension headaches originating from the neck",
      "Patients with cervicogenic headaches",
      "Those who haven't responded well to oral medications",
    ],
    procedure: [
      "You will sit or lie face down comfortably",
      "The injection site at the back of the head is cleaned",
      "The nerves are located by palpation or ultrasound guidance",
      "A small needle delivers the medication around the nerves",
      "The procedure takes about 10-15 minutes",
      "Both sides may be treated if needed",
    ],
    preparation: [
      "Inform your doctor of all medications, especially blood thinners",
      "No special preparation is typically required",
      "Eat normally unless otherwise instructed",
      "Arrange for someone to drive you home",
    ],
    risks: [
      "Temporary numbness at the injection site",
      "Tenderness or bruising",
      "Dizziness (rare)",
      "Infection (rare)",
      "Allergic reaction (rare)",
    ],
    recovery:
      "Most patients can resume normal activities immediately. You may experience numbness at the back of the head for several hours. Some patients notice immediate relief from the local anesthetic, with longer-term relief developing over the following days as the steroid takes effect.",
    expectedResults:
      "Many patients experience significant headache relief lasting weeks to months. The procedure can be repeated if effective. Some patients achieve long-term relief, while others may need periodic injections.",
    duration: "10-15 minutes",
    frequency: "Can be repeated every 4-6 weeks as needed",
    relatedConditions: [
      { name: "Headaches & Migraines", href: "/conditions/headaches" },
      { name: "Neck Pain", href: "/conditions/neck-pain" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
    ],
    faqs: [
      {
        question: "How quickly will I feel relief?",
        answer:
          "Many patients notice some relief within minutes from the local anesthetic. The steroid typically provides longer-lasting relief within 3-7 days.",
      },
      {
        question: "Is the injection painful?",
        answer:
          "You may feel brief stinging or pressure during the injection. Most patients tolerate the procedure well with minimal discomfort.",
      },
      {
        question: "How long does the relief last?",
        answer:
          "Results vary, but many patients experience relief for several weeks to months. Some patients achieve longer-lasting improvement with repeated treatments.",
      },
    ],
    metaDescription:
      "Occipital nerve block for headaches and migraines at Rand Medical Center in Arlington Heights. Effective treatment for occipital neuralgia and chronic headaches.",
  },
  {
    slug: "si-joint-injection",
    name: "Sacroiliac (SI) Joint Injection",
    shortDescription: "Diagnostic and therapeutic injection for SI joint pain",
    description:
      "A sacroiliac (SI) joint injection delivers medication directly into the SI joint, which connects the lower spine to the pelvis. This procedure helps diagnose SI joint dysfunction as a pain source and provides therapeutic relief from inflammation and pain.",
    howItWorks:
      "The SI joint can become painful due to arthritis, injury, or mechanical dysfunction. Using fluoroscopic guidance, medication is injected directly into the joint space. The local anesthetic provides diagnostic information—if pain relief occurs, the SI joint is confirmed as the source. The corticosteroid reduces inflammation for longer-term relief.",
    idealCandidates: [
      "Patients with lower back or buttock pain suspected to originate from the SI joint",
      "Those with pain that radiates to the groin or upper thigh",
      "Individuals with SI joint arthritis or sacroiliitis",
      "Patients being evaluated for SI joint fusion",
      "Those who haven't responded to physical therapy alone",
    ],
    procedure: [
      "You will lie face down on a procedure table",
      "The skin over the SI joint is cleaned and numbed",
      "Using fluoroscopy (X-ray), a needle is guided into the SI joint",
      "Contrast dye confirms proper needle placement",
      "The medication mixture is injected into the joint",
      "The procedure takes about 15-30 minutes",
    ],
    preparation: [
      "Discuss all medications with your doctor, especially blood thinners",
      "You may need to stop certain medications before the procedure",
      "Do not eat for several hours if sedation is planned",
      "Arrange for transportation home",
      "Wear comfortable, loose-fitting clothing",
    ],
    risks: [
      "Temporary soreness at the injection site",
      "Temporary increase in pain",
      "Infection (rare)",
      "Bleeding (rare)",
      "Allergic reaction (rare)",
    ],
    recovery:
      "You should rest for the remainder of the day after the procedure. Some patients experience temporary leg weakness or numbness. Pain relief from the steroid typically develops over 3-7 days. Most patients can return to normal activities within 24-48 hours.",
    expectedResults:
      "If the SI joint is the source of your pain, you should experience significant relief. Relief typically lasts weeks to months. If effective, the injection can be repeated, or you may be a candidate for radiofrequency ablation or other treatments for longer-lasting results.",
    duration: "15-30 minutes",
    frequency: "Can be repeated every 3-6 months as needed",
    relatedConditions: [
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "SI Joint Pain", href: "/conditions/si-joint-pain" },
      { name: "Hip Pain", href: "/conditions/hip-pain" },
    ],
    relatedServices: [
      { name: "Pain Management", href: "/services/pain-management" },
      { name: "Physical Therapy", href: "/services/physical-therapy" },
    ],
    faqs: [
      {
        question: "How do I know if my SI joint is causing my pain?",
        answer:
          "SI joint pain typically causes lower back and buttock pain, often on one side. It may radiate to the groin or upper thigh but usually doesn't go below the knee. An SI joint injection helps confirm the diagnosis—if you experience significant relief, the SI joint is likely your pain source.",
      },
      {
        question: "Will I need more than one injection?",
        answer:
          "Some patients get lasting relief from a single injection, while others may benefit from periodic injections. If injections provide good but temporary relief, you may be a candidate for radiofrequency ablation for longer-lasting results.",
      },
      {
        question: "What's the difference between SI joint injection and epidural injection?",
        answer:
          "SI joint injections target the joint where the spine meets the pelvis, while epidural injections deliver medication to the space around spinal nerves. The choice depends on the suspected source of your pain.",
      },
    ],
    metaDescription:
      "SI joint injection for lower back and buttock pain at Rand Medical Center in Arlington Heights. Diagnose and treat sacroiliac joint dysfunction with expert care.",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs(): string[] {
  return TREATMENTS.map((t) => t.slug);
}
