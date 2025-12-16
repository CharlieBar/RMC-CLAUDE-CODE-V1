// Blog posts data
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: string;
  metaDescription: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-epidural-steroid-injections",
    title: "Understanding Epidural Steroid Injections: What to Expect",
    excerpt:
      "Epidural steroid injections are one of the most common treatments for spine-related pain. Learn what happens during the procedure and how it can help you find relief.",
    content: `
## What Are Epidural Steroid Injections?

Epidural steroid injections (ESIs) deliver anti-inflammatory medication directly to the epidural space surrounding your spinal nerves. This targeted approach allows the medication to reduce inflammation where it's needed most, providing relief from pain caused by conditions like herniated discs, spinal stenosis, and sciatica.

## How Do They Work?

When spinal nerves become inflamed or irritated, they can cause pain that radiates through your back and into your arms or legs. The steroid medication in an ESI works by reducing this inflammation, which in turn reduces pressure on the nerves and decreases pain signals.

## What to Expect During the Procedure

The injection is typically performed as an outpatient procedure and takes about 15-30 minutes:

1. **Preparation**: You'll lie on your stomach on an examination table. The injection site will be cleaned and numbed with a local anesthetic.

2. **Guidance**: Using fluoroscopy (real-time X-ray), your physician guides a thin needle to the precise location in your spine.

3. **Injection**: Once the needle is properly positioned, contrast dye confirms placement, and then the steroid medication is injected.

4. **Recovery**: You'll rest for about 15-30 minutes while we monitor you, then you can go home with a driver.

## After Your Injection

Most patients can return to normal activities within 24 hours. You may experience temporary numbness or weakness in your legs, and some people notice increased pain for a day or two before improvement begins. Many patients notice significant relief within 3-7 days.

## Is an ESI Right for You?

ESIs work best for conditions where inflammation is causing nerve irritation. They're often recommended when conservative treatments like physical therapy and medications haven't provided adequate relief. Talk to your pain management specialist to determine if this treatment is appropriate for your condition.
    `.trim(),
    author: "Dr. Krishna C. Chunduri",
    authorTitle: "Pain Management Specialist",
    publishedAt: "2024-11-15",
    category: "Pain Management",
    tags: ["epidural", "spine", "injections", "pain relief"],
    readTime: "4 min read",
    metaDescription:
      "Learn what to expect from epidural steroid injections, how they work, and whether this pain management treatment is right for your back or neck pain.",
  },
  {
    slug: "preparing-for-knee-replacement-surgery",
    title: "How to Prepare for Knee Replacement Surgery",
    excerpt:
      "Proper preparation can significantly improve your knee replacement outcomes and recovery. Here's what you should do before your surgery.",
    content: `
## Why Preparation Matters

Knee replacement surgery is a major procedure that can dramatically improve your quality of life if you have severe arthritis or knee damage. Taking time to prepare properly can lead to better outcomes, faster recovery, and fewer complications.

## Weeks Before Surgery

### Get Physically Ready

- **Start physical therapy**: Pre-surgical exercises strengthen the muscles around your knee, which helps with recovery
- **Lose weight if needed**: Every pound of body weight puts 4 pounds of pressure on your knees
- **Stop smoking**: Smoking slows healing and increases infection risk
- **Manage chronic conditions**: Work with your doctors to optimize diabetes, blood pressure, and other conditions

### Prepare Your Home

- **Clear walking paths**: Remove rugs and obstacles that could cause tripping
- **Install safety aids**: Consider grab bars in the bathroom and a shower chair
- **Move essentials**: Place frequently used items at waist level to avoid bending or reaching
- **Prepare meals**: Stock up on easy-to-prepare foods or make meals ahead to freeze

## The Week Before

- Complete any required lab tests or medical clearances
- Stop certain medications as directed by your surgeon
- Arrange for someone to drive you home and stay with you
- Prepare a bag for your hospital stay

## Day of Surgery

- Follow fasting instructions (typically no food or drink after midnight)
- Take only medications your surgeon has approved
- Wear loose, comfortable clothing
- Leave jewelry and valuables at home

## What to Expect After Surgery

Most patients stay in the hospital for 1-2 days. You'll start physical therapy the same day as surgery to begin your recovery. Full recovery takes 3-6 months, but many patients notice significant improvement within the first few weeks.

## Questions to Ask Your Surgeon

- What type of implant will you use?
- What are the risks specific to my situation?
- How long will I need physical therapy?
- When can I return to my normal activities?
    `.trim(),
    author: "Dr. Christos S. Giannoulias",
    authorTitle: "Orthopedic Surgeon",
    publishedAt: "2024-10-22",
    category: "Orthopedics",
    tags: ["knee replacement", "surgery", "preparation", "recovery"],
    readTime: "5 min read",
    metaDescription:
      "Prepare for successful knee replacement surgery with tips on physical preparation, home modifications, and what to expect before, during, and after your procedure.",
  },
  {
    slug: "benefits-of-physical-therapy-after-surgery",
    title: "The Benefits of Physical Therapy After Surgery",
    excerpt:
      "Post-surgical physical therapy is essential for optimal recovery. Discover how PT helps restore strength, mobility, and function after your procedure.",
    content: `
## Why Physical Therapy Matters After Surgery

Whether you've had a joint replacement, spine surgery, or orthopedic procedure, physical therapy plays a crucial role in your recovery. It's not just about regaining strength—PT helps you heal properly and return to your normal activities safely.

## Key Benefits of Post-Surgical PT

### 1. Faster Recovery

Studies consistently show that patients who participate in physical therapy recover faster than those who don't. Your therapist guides you through progressive exercises that safely challenge your healing tissues without overdoing it.

### 2. Reduced Pain and Swelling

While it might seem counterintuitive, moving appropriately after surgery actually reduces pain. PT techniques like manual therapy, therapeutic exercises, and modalities (ice, heat, electrical stimulation) help manage post-surgical discomfort.

### 3. Prevention of Complications

Without proper movement, surgery sites can develop scar tissue adhesions that limit mobility. Physical therapy prevents this by keeping tissues flexible during healing. PT also reduces the risk of blood clots and other complications associated with inactivity.

### 4. Restored Strength and Mobility

Surgery often requires cutting through muscles or temporarily restricting movement. Physical therapy systematically rebuilds the strength and flexibility you've lost, tailored to your specific procedure and goals.

### 5. Education and Confidence

Your physical therapist teaches you how to move safely, what activities to avoid, and when it's okay to progress. This knowledge helps you recover with confidence and reduces anxiety about reinjury.

## What to Expect in PT

Your program will be customized based on your surgery type, overall health, and personal goals. Typically, you'll attend sessions 2-3 times per week and perform home exercises daily. As you progress, your exercises will become more challenging.

## Maximizing Your PT Results

- **Attend all scheduled sessions**: Consistency is key to recovery
- **Do your home exercises**: They're just as important as in-clinic work
- **Communicate with your therapist**: Report pain, concerns, or changes in your condition
- **Be patient**: Recovery takes time, but dedication pays off
    `.trim(),
    author: "Physical Therapy Team",
    authorTitle: "Rand Medical Center",
    publishedAt: "2024-09-18",
    category: "Physical Therapy",
    tags: ["physical therapy", "surgery", "recovery", "rehabilitation"],
    readTime: "4 min read",
    metaDescription:
      "Discover why physical therapy is essential after surgery and how it speeds recovery, reduces pain, and helps restore strength and mobility.",
  },
  {
    slug: "when-to-see-doctor-for-back-pain",
    title: "When Should You See a Doctor for Back Pain?",
    excerpt:
      "Most back pain improves on its own, but some symptoms require medical attention. Learn when to seek professional care for your back pain.",
    content: `
## Most Back Pain Resolves on Its Own

Here's some good news: the majority of back pain episodes improve significantly within 2-4 weeks with basic self-care. Rest, over-the-counter pain relievers, ice, and gentle stretching help most people recover from acute back pain.

## Warning Signs That Require Immediate Attention

Seek emergency care if your back pain is accompanied by:

- **Loss of bladder or bowel control**: This could indicate cauda equina syndrome, a serious condition requiring immediate treatment
- **Progressive weakness in the legs**: Especially if it's rapidly worsening
- **Numbness in the groin or inner thighs**: Known as "saddle anesthesia"
- **Severe abdominal pain**: Back pain combined with abdominal symptoms could indicate a serious internal condition
- **Fever with back pain**: Could indicate an infection

## When to Schedule an Appointment

See a doctor within the next few days if you experience:

- Pain that persists beyond 2-3 weeks despite self-care
- Pain that radiates down one or both legs, especially below the knee
- Numbness, tingling, or weakness in one or both legs
- Unintentional weight loss with back pain
- Pain that worsens at night or when lying down
- History of cancer, osteoporosis, or recent trauma
- Pain that began after age 50 or before age 20

## What to Expect at Your Appointment

Your doctor will:

1. **Take a detailed history**: Including when the pain started, what makes it better or worse, and any other symptoms
2. **Perform a physical exam**: Testing your range of motion, strength, and reflexes
3. **Order tests if needed**: X-rays, MRI, or other imaging may be recommended based on your symptoms

## Treatment Options

Depending on your diagnosis, treatment might include:

- Physical therapy to strengthen supporting muscles
- Medications for pain and inflammation
- Interventional procedures like epidural injections
- Referral to a spine specialist if needed

Don't suffer in silence—if your back pain is affecting your quality of life, it's worth getting evaluated.
    `.trim(),
    author: "Dr. Demetrios Giokaris",
    authorTitle: "Chief Physician",
    publishedAt: "2024-08-05",
    category: "Health Education",
    tags: ["back pain", "symptoms", "when to see doctor", "spine health"],
    readTime: "4 min read",
    metaDescription:
      "Know when back pain requires medical attention. Learn the warning signs, when to schedule an appointment, and what to expect from your doctor visit.",
  },
  {
    slug: "immediate-care-vs-emergency-room",
    title: "Immediate Care vs. Emergency Room: How to Decide in Arlington Heights",
    excerpt:
      "Not sure whether to visit immediate care or the ER? Learn which facility is right for your situation and how to make the best choice for your health.",
    content: `
## Making the Right Choice for Your Health

When you're feeling sick or injured, deciding where to seek care can be confusing. Should you go to an immediate care center or the emergency room? Understanding the differences can save you time, money, and help you get the right level of care.

## What Is Immediate Care?

Immediate care centers, also called urgent care or walk-in clinics, treat non-life-threatening conditions that need attention the same day. They offer extended hours beyond typical doctor's offices and accept walk-in patients without appointments.

At Rand Medical Center, our immediate care services are available Monday through Friday, 9am-5pm, with on-site X-ray and lab services for faster diagnosis and treatment.

## When to Choose Immediate Care

Visit immediate care for conditions like:

- **Minor injuries**: Sprains, strains, minor cuts requiring stitches, simple fractures
- **Common illnesses**: Cold, flu, strep throat, ear infections, pink eye, UTIs
- **Skin conditions**: Minor burns, rashes, insect bites, skin infections
- **Mild respiratory issues**: Mild asthma attacks, bronchitis, sinus infections
- **Digestive problems**: Mild dehydration, vomiting, diarrhea (not severe)
- **Other concerns**: Minor headaches, allergic reactions without breathing difficulty, STD testing

## When to Go to the Emergency Room

Choose the ER for life-threatening conditions including:

- **Chest pain or pressure**: Especially with shortness of breath, sweating, or pain radiating to arm or jaw
- **Severe breathing difficulty**: Trouble catching your breath or turning blue
- **Head injuries**: Loss of consciousness, severe headache, confusion, or vomiting after head trauma
- **Severe bleeding**: That won't stop with direct pressure
- **Poisoning or overdose**: Any suspected poisoning or drug overdose
- **Severe burns**: Large burns or burns to the face, hands, or genitals
- **Stroke symptoms**: Sudden weakness, numbness, difficulty speaking, vision changes
- **Severe abdominal pain**: Especially if sudden and severe
- **Broken bones**: Obvious deformities or bones protruding through skin
- **Loss of bladder/bowel control**: With back pain or weakness

## Key Differences

### Wait Times
- **Immediate Care**: Typically 30 minutes or less
- **Emergency Room**: Can be several hours, depending on severity of cases

### Cost
- **Immediate Care**: Significantly lower, often similar to a specialist copay
- **Emergency Room**: Much higher, even with insurance

### Services
- **Immediate Care**: X-rays, lab work, minor procedures, prescriptions
- **Emergency Room**: All immediate care services plus CT scans, MRI, surgery, admission to hospital

## The Benefits of Immediate Care at Rand Medical Center

Our immediate care facility offers several advantages:

- **On-site X-ray and laboratory services**: Get results quickly without traveling to multiple locations
- **Experienced providers**: Our medical team handles everything from minor injuries to urgent medical conditions
- **Shorter wait times**: See a provider quickly without the ER wait
- **Lower cost**: Save money while still receiving quality care
- **Convenient location**: Located in Arlington Heights at 1925 E Rand Rd

## Still Not Sure?

When in doubt, call us at (224) 735-3522. Our staff can help you determine whether immediate care is appropriate for your situation or if you should seek emergency care.

Remember: if you're experiencing a medical emergency, don't hesitate—call 911 or go directly to the nearest emergency room. Your health and safety are the top priority.
    `.trim(),
    author: "Rand Medical Center Staff",
    authorTitle: "Healthcare Team",
    publishedAt: "2024-11-20",
    category: "Immediate Care",
    tags: ["immediate care", "emergency room", "urgent care", "when to seek care"],
    readTime: "5 min read",
    metaDescription:
      "Immediate care or ER? Learn when to choose each facility, compare costs and wait times, and make the best decision for your health in Arlington Heights.",
  },
  {
    slug: "sciatica-relief-treatment-options",
    title: "Finding Relief from Sciatica: Treatment Options That Work",
    excerpt:
      "Sciatica pain can be debilitating, but effective treatments are available. Discover conservative and advanced options to relieve your sciatic nerve pain.",
    content: `
## Understanding Sciatica

Sciatica refers to pain that radiates along the path of the sciatic nerve, which runs from your lower back through your hips and buttocks and down each leg. While sciatica most commonly affects only one side of your body, the pain can range from mild to severe and debilitating.

The good news? Most people with sciatica improve with treatment, and many find relief without surgery.

## What Causes Sciatica?

Sciatica occurs when the sciatic nerve becomes compressed or irritated. Common causes include:

- **Herniated disc**: The most common cause, where the soft inner material of a disc pushes through its outer ring
- **Spinal stenosis**: Narrowing of the spinal canal that puts pressure on nerves
- **Degenerative disc disease**: Age-related wear and tear on spinal discs
- **Bone spurs**: Overgrowth of bone that can pinch the nerve
- **Piriformis syndrome**: When the piriformis muscle in the buttocks irritates the sciatic nerve

## Recognizing Sciatica Symptoms

Typical symptoms include:

- Sharp, shooting pain from the lower back down the leg
- Burning or tingling sensation down the leg
- Numbness or weakness in the leg or foot
- Pain that worsens when sitting
- Difficulty moving the leg or foot
- Pain that may be worse on one side

## Conservative Treatment Options

Most cases of sciatica respond well to non-surgical treatments:

### 1. Physical Therapy

Physical therapy is one of the most effective treatments for sciatica. A physical therapist will teach you exercises to:
- Strengthen muscles supporting your back
- Improve flexibility and posture
- Reduce pressure on the sciatic nerve
- Prevent future episodes

### 2. Medications

Over-the-counter and prescription medications can help manage symptoms:
- NSAIDs (ibuprofen, naproxen) to reduce inflammation
- Muscle relaxants for muscle spasms
- Neuropathic pain medications for nerve-related pain

### 3. Heat and Ice Therapy

- **Ice**: Apply during the first 48-72 hours to reduce inflammation
- **Heat**: Use after the initial acute phase to relax muscles and improve blood flow

### 4. Activity Modification

Avoid activities that worsen your pain, but don't stay in bed too long. Light activity and gentle stretching usually help more than complete rest.

## Advanced Treatment Options

When conservative treatments aren't providing enough relief, interventional procedures can help:

### Epidural Steroid Injections

Epidural steroid injections deliver anti-inflammatory medication directly to the area around the irritated nerve root. Many patients experience significant relief within a few days to a week after the injection.

**Benefits:**
- Reduces inflammation around the nerve
- Provides pain relief lasting weeks to months
- Can help you participate more fully in physical therapy
- Minimally invasive with quick recovery

### Selective Nerve Root Blocks

These targeted injections deliver medication to the specific nerve root causing your symptoms. They can provide both diagnostic information and therapeutic relief.

### Radiofrequency Ablation

For chronic sciatica, radiofrequency ablation uses heat to reduce pain signal transmission from affected nerves, providing longer-lasting relief.

## When to See a Doctor

Seek medical attention if you experience:

- Severe pain that doesn't improve with self-care
- Symptoms lasting more than a week
- Pain that progressively worsens
- Weakness, numbness, or difficulty moving your leg
- Loss of bladder or bowel control (seek emergency care immediately)

## How Rand Medical Center Can Help

At Rand Medical Center in Arlington Heights, our multidisciplinary team offers comprehensive sciatica treatment:

- **Pain Management**: Advanced injection therapies performed by experienced specialists
- **Physical Therapy**: Customized rehabilitation programs
- **On-Site Diagnostics**: X-ray and imaging to accurately diagnose your condition
- **Coordinated Care**: Our team works together to create your personalized treatment plan

## The Path to Recovery

Recovery timelines vary, but most patients see improvement within 4-6 weeks with appropriate treatment. The key is starting treatment early and following through with your care plan.

Don't let sciatica keep you from the activities you love. With the right treatment approach, you can find relief and get back to living your life.

Ready to find relief? Call Rand Medical Center at (224) 735-3522 to schedule your consultation.
    `.trim(),
    author: "Dr. Krishna C. Chunduri",
    authorTitle: "Pain Management Specialist",
    publishedAt: "2024-11-10",
    category: "Pain Management",
    tags: ["sciatica", "leg pain", "nerve pain", "pain relief", "epidural injections"],
    readTime: "6 min read",
    metaDescription:
      "Find effective sciatica relief with conservative treatments and advanced pain management options. Learn about symptoms, causes, and treatment at Rand Medical Center.",
  },
  {
    slug: "radiofrequency-ablation-chronic-pain",
    title: "Radiofrequency Ablation: Long-Term Relief for Chronic Pain",
    excerpt:
      "Learn how radiofrequency ablation uses heat to interrupt pain signals and provide lasting relief from chronic back, neck, and joint pain.",
    content: `
## What Is Radiofrequency Ablation?

Radiofrequency ablation (RFA), also called radiofrequency neurotomy, is a minimally invasive procedure that uses heat generated by radio waves to target specific nerves and temporarily turn off their ability to send pain signals to your brain.

For patients suffering from chronic pain that hasn't responded adequately to conservative treatments, RFA can provide significant relief lasting six months to two years or longer.

## How Does RFA Work?

The procedure works by heating nerve tissue to create a lesion that disrupts the nerve's ability to transmit pain signals. Here's what happens:

1. **Targeting**: Your physician uses fluoroscopy (X-ray guidance) to precisely locate the nerves causing your pain
2. **Numbing**: Local anesthetic is applied to the treatment area
3. **Placement**: A thin needle is carefully positioned near the target nerve
4. **Testing**: A small electrical current confirms proper placement
5. **Treatment**: Radiofrequency energy heats the nerve tissue for 60-90 seconds
6. **Repeat**: The process may be repeated for multiple nerves if needed

The entire procedure typically takes 30-60 minutes, and you can go home the same day.

## Conditions Treated with RFA

Radiofrequency ablation is particularly effective for:

### Spine-Related Pain
- **Facet joint arthritis**: Pain from worn cartilage in the small joints of the spine
- **Sacroiliac (SI) joint pain**: Pain in the joints connecting your spine to your pelvis
- **Chronic neck or back pain**: From various degenerative conditions

### Joint Pain
- **Knee arthritis**: Particularly for patients who aren't surgical candidates
- **Hip pain**: From arthritis or other conditions
- **Shoulder pain**: Chronic pain from various causes

### Other Chronic Pain Conditions
- Occipital neuralgia (headaches)
- Peripheral nerve pain
- Post-surgical pain syndromes

## Who Is a Good Candidate?

RFA may be right for you if:

- You have chronic pain lasting more than three months
- Conservative treatments (physical therapy, medications) haven't provided adequate relief
- You've had successful temporary relief from diagnostic nerve blocks
- You want to avoid or aren't a candidate for surgery
- You're looking for longer-lasting relief than injections provide

## What to Expect During Recovery

### Immediately After
- You may experience soreness at the injection sites
- Some patients notice a temporary increase in pain for a few days
- Most people return to normal activities within 24-48 hours

### First Week
- Avoid strenuous activities
- You can use ice and over-the-counter pain relievers for discomfort
- Some patients start noticing pain relief, while others may take 2-3 weeks

### Long-Term Results
- Maximum pain relief typically occurs within 2-4 weeks
- Relief can last from six months to two years or more
- The procedure can be safely repeated when pain returns

## Benefits of RFA

### Non-Surgical Solution
RFA offers significant pain relief without the risks and recovery time of surgery.

### Long-Lasting Results
Unlike injections that last weeks or months, RFA provides relief for many months to years.

### Reduced Medication Dependence
Many patients can reduce or eliminate pain medications after successful RFA.

### Quick Recovery
Most patients resume normal activities within days, not weeks or months.

### Low Risk
Complications are rare, and the procedure has an excellent safety profile.

## Success Rates

Clinical studies show that RFA is highly effective:
- 70-80% of patients experience significant pain relief
- Many patients report 50% or greater pain reduction
- Success rates are highest when proper patient selection and technique are used

## Is RFA Right for You?

The best way to determine if radiofrequency ablation is appropriate for your condition is through a thorough evaluation by a pain management specialist. Your doctor will:

- Review your medical history and previous treatments
- Perform a physical examination
- Evaluate any imaging studies (X-rays, MRI)
- Consider diagnostic nerve blocks to predict RFA success

## Experience Matters

At Rand Medical Center, Dr. Krishna C. Chunduri and our pain management team have extensive experience performing radiofrequency ablation procedures. We use the latest technology and fluoroscopic guidance to ensure precision and optimal results.

## Take the Next Step

If chronic pain is limiting your life, radiofrequency ablation might be the solution you've been looking for. Contact Rand Medical Center at (224) 735-3522 to schedule a consultation and learn whether RFA is right for you.

Don't let chronic pain control your life—discover if this proven treatment can help you find lasting relief.
    `.trim(),
    author: "Dr. Krishna C. Chunduri",
    authorTitle: "Pain Management Specialist",
    publishedAt: "2024-10-28",
    category: "Pain Management",
    tags: ["radiofrequency ablation", "RFA", "chronic pain", "pain relief", "minimally invasive"],
    readTime: "6 min read",
    metaDescription:
      "Discover how radiofrequency ablation provides long-term chronic pain relief. Learn about the procedure, success rates, and whether RFA is right for you.",
  },
  {
    slug: "recovering-from-workplace-injury",
    title: "Recovering from a Workplace Injury: Your Complete Guide",
    excerpt:
      "Injured at work? Learn the essential steps to take in the first 48 hours, how to navigate workers' compensation, and what to expect during recovery.",
    content: `
## The First 48 Hours Are Critical

A workplace injury can be stressful and confusing. Knowing what steps to take immediately after an injury can protect your health, your job, and your rights to workers' compensation benefits.

## Immediate Steps After a Workplace Injury

### 1. Report the Injury Immediately

**Why it matters**: Most states require you to report workplace injuries within a specific timeframe (often 45 days, but the sooner the better).

**What to do**:
- Notify your supervisor or manager right away, even if the injury seems minor
- Submit a written report to your employer
- Keep a copy of all documentation for your records
- Don't downplay the injury or delay reporting

### 2. Seek Medical Attention

**When to go**:
- Immediately for serious injuries
- Same day or next day for less severe injuries
- Even minor injuries should be evaluated—some worsen over time

**Where to go**:
- Your employer may have a designated medical provider
- In Illinois, you can choose your own doctor after an emergency
- Rand Medical Center treats workers' compensation injuries and handles all necessary documentation

### 3. Document Everything

Keep detailed records of:
- How, when, and where the injury occurred
- Names of any witnesses
- Photos of the injury and the location where it happened
- All medical appointments and treatments
- Time missed from work
- Communications with your employer and insurance company

## Understanding Workers' Compensation

### What Workers' Comp Covers

In Illinois, workers' compensation typically covers:
- All necessary medical treatment related to your injury
- A portion of lost wages (usually about 2/3 of your average weekly wage)
- Rehabilitation and physical therapy
- Permanent disability benefits if applicable

### What to Expect

**Medical Treatment**:
- You'll see a doctor for initial evaluation
- Treatment plans are developed based on your specific injury
- Follow-up appointments monitor your progress

**Return to Work**:
- Your doctor determines when you can return to work
- You may return with restrictions (light duty)
- Gradual return to full duties as you recover

## Common Workplace Injuries We Treat

### Back and Spine Injuries
- Lifting injuries
- Repetitive stress injuries
- Herniated discs
- Muscle strains

**Treatment options**: Physical therapy, pain management injections, medication management

### Joint Injuries
- Shoulder injuries
- Knee injuries
- Wrist and hand injuries
- Hip pain

**Treatment options**: Orthopedic evaluation, injections, surgical referrals when needed

### Repetitive Strain Injuries
- Carpal tunnel syndrome
- Tendonitis
- Bursitis

**Treatment options**: Ergonomic assessment, physical therapy, injections, splinting

### Slip and Fall Injuries
- Fractures
- Sprains and strains
- Head injuries

**Treatment options**: On-site X-ray, orthopedic care, concussion management

## The Recovery Process

### Phase 1: Acute Care (Days 1-7)
- Pain management
- Reduce inflammation
- Protect injured area
- Begin gentle movement when appropriate

### Phase 2: Rehabilitation (Weeks 2-6)
- Physical therapy begins
- Gradual increase in activity
- Strengthening exercises
- Work conditioning if needed

### Phase 3: Return to Function (Weeks 6+)
- Resume work activities (with or without restrictions)
- Continue therapy as needed
- Prevent re-injury through proper techniques
- Final evaluation and case closure

## Tips for Successful Recovery

1. **Follow your treatment plan**: Attend all appointments and do prescribed exercises
2. **Communicate openly**: Tell your doctor about all symptoms and concerns
3. **Don't rush**: Returning to full activities too soon can cause re-injury
4. **Stay positive**: Recovery takes time, but most workplace injuries heal well with proper care
5. **Ask questions**: Understand your treatment and your rights

## Common Mistakes to Avoid

- Delaying medical treatment
- Not reporting the injury to your employer
- Missing medical appointments
- Ignoring work restrictions
- Not documenting your injury and treatment
- Settling your case without understanding the full extent of your injury

## How Rand Medical Center Helps

We specialize in treating workplace injuries and understand the workers' compensation process:

### Comprehensive Care
- On-site X-ray and lab services
- Pain management specialists
- Physical therapy
- Orthopedic consultation when needed

### Documentation Expertise
- Complete medical records for your claim
- Work status reports
- Functional capacity evaluations
- Coordination with case managers and attorneys

### Convenient Scheduling
- Same-day appointments available
- Extended hours to accommodate work schedules
- One location for multiple services

## When to Seek Legal Advice

Consider consulting a workers' compensation attorney if:
- Your claim is denied
- You're not receiving appropriate medical treatment
- Your employer retaliates against you
- You have questions about permanent disability
- Settlement negotiations begin

## Your Rights as an Injured Worker

You have the right to:
- Receive medical treatment for your work injury
- Choose your own doctor (after emergency care in Illinois)
- Receive wage replacement benefits while unable to work
- Return to work when medically cleared
- Privacy regarding your medical information
- Fair treatment without retaliation

## Take Action Today

If you've been injured at work, don't wait. Early treatment leads to better outcomes and protects your rights.

Call Rand Medical Center at (224) 735-3522 to schedule your appointment. We accept workers' compensation insurance and will handle all the necessary paperwork for your claim.

Your recovery is our priority.
    `.trim(),
    author: "Rand Medical Center Staff",
    authorTitle: "Healthcare Team",
    publishedAt: "2024-09-25",
    category: "Workers' Compensation",
    tags: ["workplace injury", "workers compensation", "injury recovery", "occupational health"],
    readTime: "7 min read",
    metaDescription:
      "Complete guide to workplace injury recovery: what to do in the first 48 hours, navigating workers' comp, treatment options, and protecting your rights.",
  },
  {
    slug: "knee-pain-causes-and-treatments",
    title: "Knee Pain: Common Causes and Effective Treatment Options",
    excerpt:
      "Experiencing knee pain? Discover the most common causes, when to see a doctor, and proven treatments from conservative care to advanced procedures.",
    content: `
## Understanding Knee Pain

Your knees bear a significant amount of stress every day, supporting your body weight and enabling movement. It's no wonder knee pain is one of the most common complaints we see at Rand Medical Center.

The good news is that most knee pain responds well to treatment, especially when addressed early.

## Common Causes of Knee Pain

### Arthritis

**Osteoarthritis** is the most common form, resulting from wear and tear of the cartilage that cushions your knee joint. Symptoms include:
- Gradual onset of pain and stiffness
- Pain that worsens with activity
- Swelling, especially after inactivity
- Decreased range of motion

**Rheumatoid arthritis** is an autoimmune condition causing inflammation in the joint lining.

### Injuries

**Ligament injuries** (ACL, MCL, PCL, LCL):
- Often occur during sports or sudden movements
- May involve hearing a "pop" at the time of injury
- Instability and swelling

**Meniscus tears**:
- Torn cartilage from twisting movements
- Clicking or locking sensation
- Difficulty fully straightening the knee

**Tendonitis**:
- Inflammation of tendons from overuse
- Pain above or below the kneecap
- Common in runners and jumpers

### Other Conditions

- **Bursitis**: Inflammation of fluid-filled sacs cushioning the knee
- **IT band syndrome**: Pain on the outside of the knee from tight iliotibial band
- **Baker's cyst**: Fluid-filled swelling behind the knee
- **Gout**: Sudden, severe pain from uric acid crystal buildup

## When to See a Doctor

Seek medical evaluation if you experience:

- Pain that doesn't improve with rest and ice after a few days
- Significant swelling or visible deformity
- Inability to bear weight on the affected leg
- Knee gives way or feels unstable
- Red, warm, swollen knee (especially with fever)
- Significant limitation in range of motion
- Persistent pain interfering with daily activities

## Diagnosis: What to Expect

Your doctor will:

1. **Take a detailed history**: When did the pain start? Was there an injury? What makes it better or worse?
2. **Perform a physical exam**: Checking range of motion, stability, and tender areas
3. **Order imaging if needed**:
   - X-rays to evaluate bones and joint space
   - MRI for soft tissue injuries
   - Ultrasound for some conditions

At Rand Medical Center, we have on-site X-ray capabilities for immediate evaluation.

## Conservative Treatment Options

Many knee conditions improve with non-surgical treatments:

### 1. Physical Therapy

Physical therapy is often the cornerstone of knee pain treatment. Your therapist will design a program to:
- Strengthen muscles supporting the knee
- Improve flexibility and range of motion
- Correct movement patterns that may be causing pain
- Enhance balance and stability

### 2. Medications

- **NSAIDs**: Ibuprofen or naproxen to reduce pain and inflammation
- **Acetaminophen**: For pain relief without anti-inflammatory effects
- **Topical treatments**: Creams or patches applied directly to the knee

### 3. Lifestyle Modifications

- **Weight management**: Every pound lost removes 4 pounds of pressure from your knees
- **Activity modification**: Low-impact exercises like swimming or cycling
- **Supportive footwear**: Proper shoes can significantly impact knee pain
- **Assistive devices**: Braces, sleeves, or orthotics when appropriate

### 4. RICE Protocol

For acute injuries:
- **Rest**: Avoid activities that cause pain
- **Ice**: Apply for 15-20 minutes several times daily
- **Compression**: Use an elastic bandage
- **Elevation**: Keep the knee raised above heart level

## Advanced Treatment Options

When conservative treatments aren't sufficient, interventional options include:

### Corticosteroid Injections

Anti-inflammatory medication injected directly into the knee joint can provide:
- Rapid pain relief (often within days)
- Reduced inflammation
- Improved mobility
- Relief lasting weeks to months

### Hyaluronic Acid Injections

Also called "viscosupplementation," these injections:
- Supplement the natural lubricating fluid in your joint
- Can provide pain relief for several months
- Often used for osteoarthritis
- Series of 1-3 injections depending on the product

### Platelet-Rich Plasma (PRP) Therapy

PRP uses your body's own healing factors to:
- Reduce inflammation
- Promote tissue healing
- Provide longer-lasting relief
- Potentially slow arthritis progression

### Radiofrequency Ablation

For chronic knee pain from arthritis, RFA can interrupt pain signals for long-term relief.

### Surgical Options

When non-surgical treatments don't provide adequate relief:
- **Arthroscopy**: Minimally invasive surgery to repair or remove damaged tissue
- **Partial or total knee replacement**: For severe arthritis
- **Ligament reconstruction**: For torn ACL or other ligaments

Our orthopedic specialists can evaluate whether surgery is appropriate for your condition.

## Prevention: Protecting Your Knees

### Strengthen Supporting Muscles
- Quadriceps and hamstrings exercises
- Core strengthening
- Hip stabilizers

### Maintain Flexibility
- Regular stretching routine
- Yoga or tai chi
- Foam rolling

### Use Proper Technique
- Correct form during exercise
- Appropriate training progression
- Adequate warm-up and cool-down

### Listen to Your Body
- Don't push through pain
- Allow adequate recovery between workouts
- Address minor pain before it becomes major

## Comprehensive Knee Care at Rand Medical Center

Our multidisciplinary approach means you have access to:

**Orthopedic Specialists**:
- Accurate diagnosis
- Surgical and non-surgical treatment options
- Coordination with other specialists

**Pain Management**:
- Injectable therapies
- Advanced procedures
- Medication management

**Physical Therapy**:
- Customized rehabilitation programs
- Pre and post-operative therapy
- Sports rehab and return-to-play programs

**Diagnostics**:
- On-site X-ray
- Referrals for advanced imaging when needed

## Your Path Forward

Don't let knee pain keep you from the activities you love. Whether you're dealing with arthritis, a sports injury, or chronic pain, effective treatments are available.

The first step is an accurate diagnosis and comprehensive treatment plan tailored to your specific needs and goals.

Ready to take control of your knee pain? Call Rand Medical Center at (224) 735-3522 to schedule your evaluation.

Our Arlington Heights team is here to help you get back to moving comfortably and confidently.
    `.trim(),
    author: "Dr. Christos S. Giannoulias",
    authorTitle: "Orthopedic Surgeon",
    publishedAt: "2024-10-05",
    category: "Orthopedics",
    tags: ["knee pain", "arthritis", "sports injury", "joint pain", "treatment options"],
    readTime: "7 min read",
    metaDescription:
      "Comprehensive guide to knee pain: causes, diagnosis, and treatment options from physical therapy to injections and surgery at Rand Medical Center.",
  },
  {
    slug: "physical-therapy-for-chronic-pain",
    title: "How Physical Therapy Helps Manage Chronic Pain",
    excerpt:
      "Physical therapy offers powerful tools for managing chronic pain without medication. Learn how PT can help you reduce pain and improve quality of life.",
    content: `
## A Different Approach to Chronic Pain

If you're living with chronic pain—pain lasting more than three months—you've likely tried various treatments. While medications can help, they're not the only answer. Physical therapy offers a comprehensive approach to pain management that addresses the root causes of pain and helps you regain function.

## What Makes Chronic Pain Different?

Chronic pain differs from acute pain in important ways:

- **Duration**: Lasts beyond normal healing time (typically 3+ months)
- **Complexity**: Often involves multiple contributing factors
- **Impact**: Affects physical function, mood, sleep, and quality of life
- **Treatment**: Requires a multifaceted approach rather than a single solution

## How Physical Therapy Addresses Chronic Pain

### 1. Identifying Contributing Factors

Your physical therapist will perform a comprehensive evaluation to identify:
- Muscle imbalances and weakness
- Poor movement patterns
- Flexibility limitations
- Postural issues
- Biomechanical problems
- Lifestyle factors affecting pain

This thorough assessment allows for targeted treatment of the underlying causes, not just the symptoms.

### 2. Reducing Pain and Inflammation

Physical therapists use various techniques to decrease pain:

**Manual Therapy**:
- Soft tissue mobilization
- Joint mobilization
- Myofascial release
- Trigger point therapy

**Therapeutic Modalities**:
- Ice and heat therapy
- Electrical stimulation (TENS)
- Ultrasound
- Laser therapy

These techniques can provide immediate pain relief while addressing underlying issues.

### 3. Restoring Movement and Function

Chronic pain often leads to avoiding movement, which can actually make pain worse over time. Physical therapy helps by:

- Gradually increasing activity tolerance
- Improving range of motion
- Restoring normal movement patterns
- Building confidence in movement

### 4. Strengthening and Stabilization

Weak or imbalanced muscles often contribute to chronic pain. Your PT program will include:
- Core strengthening exercises
- Targeted muscle strengthening
- Functional training
- Progressive resistance training

Stronger muscles better support your joints and spine, reducing pain and preventing future problems.

### 5. Education and Self-Management

Knowledge is power when managing chronic pain. Your physical therapist will teach you:
- Proper body mechanics
- Ergonomic improvements
- Pain management strategies
- Home exercise programs
- Activity pacing techniques

These tools help you manage pain independently and prevent flare-ups.

## Physical Therapy for Specific Chronic Pain Conditions

### Chronic Back Pain

PT interventions:
- Spinal stabilization exercises
- Flexibility training
- Posture correction
- Manual therapy
- Movement re-education

Research shows physical therapy is highly effective for chronic back pain, often providing as much relief as surgery for certain conditions.

### Fibromyalgia

PT approaches:
- Graded exercise programs
- Aquatic therapy
- Gentle stretching
- Aerobic conditioning
- Relaxation techniques

Regular physical therapy has been shown to reduce fibromyalgia symptoms and improve quality of life.

### Arthritis

PT helps by:
- Maintaining joint mobility
- Strengthening supporting muscles
- Improving function
- Reducing pain
- Delaying or preventing need for surgery

### Neuropathic Pain

PT interventions:
- Desensitization techniques
- Nerve gliding exercises
- Balance and coordination training
- Strengthening programs

### Headaches and Neck Pain

PT addresses:
- Cervical muscle imbalances
- Postural dysfunction
- Joint restrictions
- Trigger points
- Forward head posture

## The Chronic Pain Cycle—And How to Break It

Chronic pain creates a cycle:
1. Pain leads to decreased activity
2. Decreased activity causes deconditioning
3. Deconditioning increases pain and disability
4. Increased pain leads to further decreased activity

Physical therapy breaks this cycle by:
- Safely increasing activity levels
- Improving conditioning
- Reducing pain
- Restoring function
- Building confidence

## What to Expect in Physical Therapy

### Initial Evaluation (60 minutes)

Your first visit includes:
- Detailed history
- Physical examination
- Functional assessment
- Goal setting
- Treatment plan development

### Treatment Sessions (45-60 minutes)

Typical sessions include:
- Manual therapy techniques
- Therapeutic exercises
- Modalities for pain relief
- Education and coaching
- Home program instruction

### Frequency and Duration

- Most patients attend 2-3 times per week initially
- Treatment duration varies based on your condition
- Many people see improvement within 4-6 weeks
- Some conditions require longer-term management

## Combining PT with Other Treatments

Physical therapy works well alongside:

**Pain Management Procedures**:
- Injections can reduce pain enough to participate fully in PT
- PT maximizes and extends the benefits of procedures

**Medications**:
- PT may allow you to reduce medication use
- Better function with less reliance on pills

**Psychological Support**:
- Chronic pain often has psychological components
- Combining PT with counseling can be very effective

## The Benefits Beyond Pain Relief

Regular physical therapy offers additional benefits:
- Improved sleep quality
- Better mood and reduced depression
- Increased energy levels
- Enhanced overall fitness
- Greater independence
- Improved quality of life
- Reduced healthcare costs

## Evidence-Based Approach

Physical therapy for chronic pain is supported by extensive research showing:
- Significant pain reduction
- Improved function and mobility
- Reduced disability
- Decreased medication use
- High patient satisfaction
- Cost-effectiveness

## Physical Therapy at Rand Medical Center

Our physical therapy team specializes in chronic pain management with:

**Experienced Therapists**:
- Specialized training in pain management
- Evidence-based treatment approaches
- Compassionate, patient-centered care

**Comprehensive Services**:
- Manual therapy
- Therapeutic exercise
- Modalities
- Work conditioning
- Sports rehabilitation

**Integrated Care**:
- Coordination with pain management physicians
- Communication with orthopedic specialists
- Multidisciplinary team approach

## Taking the First Step

Living with chronic pain is challenging, but you don't have to accept it as your new normal. Physical therapy offers a path to better pain management, improved function, and enhanced quality of life.

The key is getting started. Even if you've tried PT before without success, advances in techniques and a fresh approach may provide the relief you've been seeking.

Ready to take control of your chronic pain? Call Rand Medical Center at (224) 735-3522 to schedule your physical therapy evaluation.

Our Arlington Heights team is here to help you move better, feel better, and live better—without relying solely on medications.

Your journey to better pain management starts with a single step. Let us help you take it.
    `.trim(),
    author: "Physical Therapy Team",
    authorTitle: "Rand Medical Center",
    publishedAt: "2024-09-12",
    category: "Physical Therapy",
    tags: ["chronic pain", "physical therapy", "pain management", "rehabilitation", "pain relief"],
    readTime: "8 min read",
    metaDescription:
      "Discover how physical therapy provides effective chronic pain management through exercise, manual therapy, and education. Learn about PT for back pain, arthritis, and more.",
  },
  {
    slug: "preventing-sports-injuries",
    title: "Preventing Sports Injuries: Essential Tips for Athletes",
    excerpt:
      "Whether you're a weekend warrior or competitive athlete, learn evidence-based strategies to prevent common sports injuries and stay in the game.",
    content: `
## The Importance of Injury Prevention

Every athlete knows the frustration of being sidelined by an injury. Not only does it interrupt training and competition, but it can have long-term consequences for your health and performance.

The good news? Many sports injuries are preventable with the right approach to training, conditioning, and recovery.

## Common Sports Injuries

Understanding what you're trying to prevent helps you take the right precautions:

### Acute Injuries
- Ankle sprains
- Knee ligament tears (ACL, MCL)
- Muscle strains and pulls
- Fractures
- Dislocations
- Concussions

### Overuse Injuries
- Tendonitis (tennis elbow, golfer's elbow, Achilles)
- Stress fractures
- Runner's knee
- Shin splints
- Rotator cuff injuries
- IT band syndrome

## Essential Injury Prevention Strategies

### 1. Proper Warm-Up and Cool-Down

**Dynamic Warm-Up (10-15 minutes before activity)**:
- Light aerobic activity to increase blood flow
- Dynamic stretching (leg swings, arm circles)
- Sport-specific movements at low intensity
- Gradual increase in intensity

Never skip your warm-up, even when you're short on time. A proper warm-up:
- Increases muscle temperature and flexibility
- Improves reaction time
- Prepares your nervous system
- Reduces injury risk by 30-50%

**Cool-Down (10 minutes after activity)**:
- Gradual decrease in intensity
- Static stretching
- Foam rolling
- Proper hydration

### 2. Strength and Conditioning

**Why it matters**: Strong muscles protect joints and absorb impact forces that would otherwise stress tendons and ligaments.

**Key areas to strengthen**:
- Core (prevents lower back injuries and improves stability)
- Hips and glutes (critical for knee health)
- Shoulders (especially for overhead athletes)
- Sport-specific muscle groups

**Recommendations**:
- Strength train 2-3 times per week
- Include both compound and isolation exercises
- Focus on proper form over heavy weight
- Address muscle imbalances

### 3. Flexibility and Mobility

Tight muscles and limited range of motion increase injury risk.

**Static Stretching**:
- Hold stretches for 30-60 seconds
- Perform after workouts when muscles are warm
- Focus on major muscle groups
- Don't bounce or force positions

**Mobility Work**:
- Joint-specific movements
- Foam rolling and self-myofascial release
- Yoga or dedicated mobility sessions
- Address areas of restriction

### 4. Proper Technique and Form

Incorrect form is a leading cause of both acute and overuse injuries.

**How to ensure good technique**:
- Work with qualified coaches or trainers
- Record yourself to identify issues
- Start new skills slowly and progress gradually
- Don't sacrifice form when fatigued

### 5. Appropriate Progression

The "10% Rule": Don't increase training volume (distance, weight, repetitions) by more than 10% per week.

**Progressive Overload Principles**:
- Gradual increases in intensity
- Adequate recovery between hard sessions
- Periodization (varying training phases)
- Listen to your body's signals

### 6. Rest and Recovery

**Why recovery matters**:
- Muscles need time to repair and strengthen
- Mental freshness improves focus and reduces errors
- Overtraining increases injury risk dramatically

**Recovery strategies**:
- Take at least 1-2 rest days per week
- Get 7-9 hours of quality sleep
- Incorporate active recovery (light walking, swimming, yoga)
- Consider periodized training with built-in recovery weeks

### 7. Proper Equipment and Footwear

**Sport-Specific Equipment**:
- Replace running shoes every 300-500 miles
- Ensure proper fit for protective gear
- Maintain equipment in good condition
- Use sport-appropriate gear (don't run in tennis shoes)

**Protective Equipment**:
- Wear appropriate padding and braces when indicated
- Use helmets and mouthguards for contact sports
- Replace protective gear after impacts
- Don't compromise on safety gear

### 8. Cross-Training

**Benefits**:
- Reduces repetitive stress on specific body parts
- Improves overall fitness
- Prevents boredom and burnout
- Develops complementary skills

**Ideas**:
- Runners: Add swimming or cycling
- Tennis players: Include strength training and yoga
- Weightlifters: Add mobility work and light cardio

### 9. Proper Nutrition and Hydration

**Nutrition for Injury Prevention**:
- Adequate protein for muscle repair
- Calcium and vitamin D for bone health
- Antioxidants to reduce inflammation
- Sufficient calories for your activity level

**Hydration**:
- Drink before you're thirsty
- Monitor urine color (should be pale yellow)
- Replace electrolytes during long or intense sessions
- Pre-hydrate before workouts

### 10. Address Pain Early

**Warning signs to never ignore**:
- Sharp pain during activity
- Pain that doesn't resolve with rest
- Swelling or bruising
- Limited range of motion
- Joint instability
- Numbness or tingling

**Don't push through pain**. What starts as minor discomfort can become a serious injury requiring months of recovery.

## Sport-Specific Considerations

### Running
- Replace shoes regularly
- Gradually increase mileage
- Vary running surfaces
- Include strength training for hips and core

### Basketball/Soccer
- Proper landing mechanics
- Agility training
- Core and hip strengthening
- Ankle stability exercises

### Tennis/Golf
- Rotational core strength
- Shoulder stability work
- Proper grip and technique
- Equipment fitting (racket, clubs)

### Weightlifting
- Perfect form before adding weight
- Balanced programming (don't neglect opposing muscle groups)
- Adequate warm-up sets
- Spotter for heavy lifts

## Return to Sport After Injury

If you do get injured:

1. **Get proper diagnosis**: Don't self-diagnose serious injuries
2. **Follow treatment plan**: Complete all recommended therapy
3. **Don't rush return**: Reinjury risk is high if you return too soon
4. **Gradual progression**: Return to full activity in stages
5. **Address root causes**: Identify what led to injury and correct it

## When to Seek Professional Help

See a sports medicine specialist if you experience:
- Persistent pain despite rest
- Recurrent injuries in the same area
- Decreased performance not explained by training
- Chronic overuse symptoms
- Need for injury prevention screening

## Sports Medicine at Rand Medical Center

Our multidisciplinary team provides comprehensive sports injury care:

**Orthopedic Specialists**:
- Accurate diagnosis of injuries
- Surgical and non-surgical treatment
- Return-to-sport protocols

**Physical Therapy**:
- Injury rehabilitation
- Performance enhancement
- Functional movement screening
- Sport-specific training

**Pain Management**:
- Injections for injuries
- Regenerative treatments (PRP)
- Return-to-play facilitation

**On-Site Services**:
- X-ray and diagnostics
- Coordinated care
- Convenient Arlington Heights location

## Prevention Is the Best Medicine

The time and effort you invest in injury prevention pays enormous dividends:
- Fewer missed practices and competitions
- Better long-term athletic performance
- Lower healthcare costs
- Longer athletic career
- Better overall health

Don't wait for an injury to prioritize prevention. Whether you need a movement screening, rehabilitation from a previous injury, or guidance on training safely, we're here to help.

Call Rand Medical Center at (224) 735-3522 to schedule your sports medicine consultation.

Stay healthy, stay active, and stay in the game.
    `.trim(),
    author: "Dr. Thomas Poepping",
    authorTitle: "Orthopedic Surgeon",
    publishedAt: "2024-08-20",
    category: "Sports Medicine",
    tags: ["sports injuries", "injury prevention", "athletic training", "sports medicine"],
    readTime: "8 min read",
    metaDescription:
      "Essential sports injury prevention tips for athletes: proper training, conditioning, recovery strategies, and when to seek professional care.",
  },
];

export const BLOG_CATEGORIES = [
  "Pain Management",
  "Orthopedics",
  "Physical Therapy",
  "Health Education",
  "Immediate Care",
  "Workers' Compensation",
  "Sports Medicine",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
