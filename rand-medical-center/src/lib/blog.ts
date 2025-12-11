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
    slug: "workers-compensation-injury-guide",
    title: "A Complete Guide to Workers' Compensation Injuries",
    excerpt:
      "Injured at work? Learn how workers' compensation works, your rights as an injured worker, and how to navigate the claims process successfully.",
    content: `
## Understanding Workers' Compensation

Workers' compensation is a system designed to provide medical care and wage replacement to employees who are injured on the job. In Illinois, most employers are required to carry workers' compensation insurance, and you don't need to prove your employer was at fault to receive benefits.

## What to Do If You're Injured at Work

### 1. Report the Injury Immediately

Notify your supervisor or employer as soon as possible. In Illinois, you should report your injury within 45 days, but reporting immediately protects your rights and ensures proper documentation.

### 2. Seek Medical Treatment

Your health is the priority. You have the right to choose your own doctor. At Rand Medical Center, we have extensive experience treating work-related injuries and understanding the documentation requirements for workers' comp cases.

### 3. Document Everything

Keep records of:
- How the injury occurred
- Witnesses to the accident
- All medical treatments and appointments
- Any work restrictions given by your doctor
- Communication with your employer

## Benefits You May Be Entitled To

- **Medical Benefits**: Coverage for all reasonable and necessary medical treatment related to your injury
- **Temporary Total Disability (TTD)**: Wage replacement if you can't work while recovering
- **Permanent Partial Disability (PPD)**: Compensation for permanent impairments
- **Vocational Rehabilitation**: Help returning to work or finding new employment if needed

## Common Mistakes to Avoid

- **Waiting too long to report**: Report your injury right away
- **Not seeing a doctor**: Even if injuries seem minor, get evaluated
- **Not following medical advice**: Non-compliance can affect your benefits
- **Signing documents without understanding**: Review everything carefully

## How We Help with Workers' Comp Cases

Our team understands the workers' compensation system. We provide:

- Thorough documentation of your injuries
- Communication with insurance adjusters
- Work status reports and restrictions
- Coordination with your employer
- Independent medical evaluations if needed

Don't navigate the system alone. We're here to help you get the treatment you need and deserve.
    `.trim(),
    author: "Dr. Demetrios Giokaris",
    authorTitle: "Chief Physician",
    publishedAt: "2024-12-01",
    category: "Health Education",
    tags: ["workers compensation", "work injury", "insurance", "legal"],
    readTime: "5 min read",
    metaDescription:
      "Complete guide to workers' compensation injuries in Illinois. Learn your rights, how to file a claim, and get proper medical treatment for work injuries.",
  },
  {
    slug: "auto-accident-injury-what-to-know",
    title: "Auto Accident Injuries: What You Need to Know",
    excerpt:
      "Been in a car accident? Learn about common injuries, why delayed symptoms occur, and how to protect your health and legal rights after a collision.",
    content: `
## Why Seeking Medical Care After an Accident Matters

Even if you feel fine immediately after a car accident, it's crucial to get a medical evaluation. Adrenaline can mask pain and injuries, and many conditions don't show symptoms until days or weeks later.

## Common Auto Accident Injuries

### Whiplash and Neck Injuries
The sudden back-and-forth motion of a collision can strain neck muscles and damage ligaments. Symptoms may include neck pain, stiffness, headaches, and dizziness.

### Back Injuries
The force of an accident can cause herniated discs, muscle strains, and spinal injuries. Back pain after an accident should always be evaluated.

### Soft Tissue Injuries
Muscles, tendons, and ligaments throughout the body can be damaged. These injuries may not show up on X-rays but can cause significant pain and limitation.

### Concussions
Even without hitting your head, the rapid movement of a collision can cause brain injury. Watch for headaches, confusion, memory problems, or changes in mood.

## Why Symptoms May Be Delayed

- **Inflammation builds gradually**: Swelling and inflammation worsen over time
- **Adrenaline masks pain**: The stress response can temporarily hide symptoms
- **Soft tissue injuries develop**: Some damage takes time to become apparent
- **Hidden structural damage**: Problems like disc herniations may not cause immediate symptoms

## Protecting Your Health and Rights

### Get Evaluated Promptly
See a doctor within 72 hours of your accident, even if you feel okay. This creates important documentation.

### Follow Treatment Recommendations
Consistent medical care shows the connection between your accident and injuries. Gaps in treatment can be used against you.

### Keep Detailed Records
Document your symptoms, treatments, missed work, and how injuries affect your daily life.

### Communicate with Your Attorney
If you have legal representation, make sure your medical team and attorney are coordinated.

## How We Help Auto Accident Patients

At Rand Medical Center, we:
- Provide thorough initial evaluations
- Create detailed medical documentation
- Offer comprehensive treatment plans
- Coordinate with insurance companies and attorneys
- Provide expert testimony if needed

Don't delay—your health and your case depend on prompt, proper medical care.
    `.trim(),
    author: "Dr. Krishna C. Chunduri",
    authorTitle: "Pain Management Specialist",
    publishedAt: "2024-11-28",
    category: "Health Education",
    tags: ["auto accident", "car crash", "whiplash", "personal injury"],
    readTime: "5 min read",
    metaDescription:
      "Essential information about auto accident injuries. Learn about common injuries, delayed symptoms, and how to protect your health after a car accident.",
  },
  {
    slug: "understanding-chronic-pain",
    title: "Understanding Chronic Pain: Causes, Effects, and Treatment Options",
    excerpt:
      "Chronic pain affects millions of Americans. Learn what causes persistent pain, how it differs from acute pain, and the treatment options that can help.",
    content: `
## What Is Chronic Pain?

Pain is considered chronic when it persists for more than three months, continuing beyond the normal healing time for an injury or illness. Unlike acute pain, which serves as a warning signal, chronic pain often continues even after the original cause has healed.

## How Chronic Pain Differs from Acute Pain

**Acute Pain:**
- Serves a protective purpose
- Has a clear cause
- Resolves as healing occurs
- Responds predictably to treatment

**Chronic Pain:**
- May persist without clear cause
- Involves changes in the nervous system
- Can exist independent of ongoing tissue damage
- Often requires multimodal treatment

## Common Causes of Chronic Pain

- **Arthritis**: Joint inflammation and degeneration
- **Nerve damage**: From diabetes, injuries, or other conditions
- **Fibromyalgia**: Widespread pain with heightened pain sensitivity
- **Back conditions**: Degenerative disc disease, spinal stenosis
- **Previous injuries**: Some injuries lead to long-term pain
- **Unknown causes**: Sometimes chronic pain develops without identifiable cause

## How Chronic Pain Affects Your Life

Chronic pain impacts more than just physical comfort:

- **Sleep disruption**: Pain interferes with restful sleep
- **Mood changes**: Depression and anxiety are common
- **Reduced activity**: Leading to deconditioning and weight gain
- **Work limitations**: Affecting income and career
- **Relationship strain**: Chronic conditions affect family dynamics
- **Cognitive effects**: "Brain fog" and concentration difficulties

## Treatment Approaches

Effective chronic pain management typically combines multiple approaches:

### Interventional Procedures
- Epidural steroid injections
- Nerve blocks
- Radiofrequency ablation
- Joint injections

### Physical Therapy
- Targeted exercises
- Manual therapy
- Education on body mechanics

### Medication Management
- Anti-inflammatory medications
- Nerve pain medications
- Careful use of other pain relievers

### Lifestyle Modifications
- Regular exercise
- Stress management
- Sleep hygiene
- Anti-inflammatory diet

## Our Approach to Chronic Pain

We believe in treating the whole person, not just the pain. Our comprehensive approach includes accurate diagnosis, personalized treatment plans, and ongoing support to help you regain function and quality of life.
    `.trim(),
    author: "Dr. Krishna C. Chunduri",
    authorTitle: "Pain Management Specialist",
    publishedAt: "2024-11-10",
    category: "Pain Management",
    tags: ["chronic pain", "pain management", "treatment", "quality of life"],
    readTime: "5 min read",
    metaDescription:
      "Understanding chronic pain: causes, effects on daily life, and comprehensive treatment options including interventional procedures and physical therapy.",
  },
  {
    slug: "when-to-see-orthopedic-specialist",
    title: "When Should You See an Orthopedic Specialist?",
    excerpt:
      "Joint pain, injuries, and mobility problems don't always require a specialist. Learn when it's time to see an orthopedic doctor for your bone and joint issues.",
    content: `
## What Does an Orthopedic Specialist Do?

Orthopedic specialists diagnose and treat conditions affecting the musculoskeletal system—your bones, joints, muscles, ligaments, and tendons. They handle everything from sports injuries to arthritis to complex joint replacements.

## Signs You Should See an Orthopedic Specialist

### Persistent Pain
If joint or musculoskeletal pain lasts more than a few days and isn't improving with rest and over-the-counter treatments, it's time for an evaluation.

### Limited Range of Motion
Difficulty bending, straightening, or rotating a joint that doesn't improve over time needs professional assessment.

### Instability
If a joint feels like it's "giving way" or you have trouble bearing weight, this could indicate ligament damage or other structural problems.

### Visible Deformity
Any obvious change in the shape of a joint or limb after an injury requires immediate evaluation.

### Swelling That Won't Go Away
Persistent swelling in a joint, especially with warmth or redness, should be evaluated promptly.

### Injuries That Aren't Healing
If an injury isn't improving as expected, or if you've reinjured the same area multiple times, specialist care can help.

## Common Conditions We Treat

- **Arthritis**: Osteoarthritis, rheumatoid arthritis, other joint conditions
- **Sports injuries**: ACL tears, meniscus injuries, rotator cuff tears
- **Fractures**: Broken bones that may need surgical repair
- **Tendon problems**: Tendinitis, tears, chronic tendon issues
- **Cartilage damage**: Injuries affecting joint surfaces
- **Joint replacement**: When conservative treatments aren't enough

## What to Expect at Your First Visit

1. **Detailed history**: We'll discuss your symptoms, how they started, and what makes them better or worse
2. **Physical examination**: Testing range of motion, strength, and stability
3. **Imaging review**: We may order X-rays, MRI, or other studies
4. **Diagnosis and plan**: You'll receive a clear explanation and treatment recommendations

## Treatment Options

Not everyone needs surgery. Many orthopedic conditions respond well to:

- Physical therapy and exercise programs
- Anti-inflammatory medications
- Joint injections (corticosteroids or hyaluronic acid)
- Bracing or orthotics
- Activity modifications

When surgery is needed, our fellowship-trained surgeons use the latest minimally invasive techniques whenever possible.
    `.trim(),
    author: "Dr. Christos S. Giannoulias",
    authorTitle: "Orthopedic Surgeon",
    publishedAt: "2024-10-15",
    category: "Orthopedics",
    tags: ["orthopedics", "joint pain", "sports injury", "specialist"],
    readTime: "4 min read",
    metaDescription:
      "Know when to see an orthopedic specialist for joint pain, injuries, and mobility issues. Learn about common conditions and what to expect at your appointment.",
  },
  {
    slug: "preparing-for-first-visit",
    title: "Preparing for Your First Visit to Rand Medical Center",
    excerpt:
      "Make the most of your first appointment. Here's what to bring, what to expect, and how to prepare for your initial evaluation at our clinic.",
    content: `
## Welcome to Rand Medical Center

We want your first visit to be as smooth and productive as possible. This guide will help you prepare so we can focus on what matters most—your health.

## What to Bring to Your Appointment

### Required Items
- **Photo ID**: Driver's license, state ID, or passport
- **Insurance cards**: All that apply to your coverage
- **Referral**: If required by your insurance plan
- **Completed paperwork**: Download forms from our website ahead of time

### Helpful Items
- **Medical records**: Recent imaging (X-rays, MRI, CT scans) and reports
- **Medication list**: All current medications with dosages
- **Symptom diary**: Notes on when symptoms occur and what makes them better or worse
- **Questions**: Write down anything you want to ask

### For Work-Related Injuries
- Employer information and contact
- Workers' compensation claim number
- Date of injury report

### For Auto Accidents
- Insurance information for all parties
- Attorney contact information if applicable
- Police report number

## What to Expect During Your Visit

### Check-In (15-20 minutes before appointment)
Arrive early to complete any remaining paperwork. Our staff will verify your insurance and collect any copays.

### Medical History Review
Your provider will ask detailed questions about:
- Your current symptoms
- How your condition started
- Previous treatments you've tried
- Your medical history
- Your goals for treatment

### Physical Examination
Depending on your condition, this may include:
- Range of motion testing
- Strength assessment
- Neurological examination
- Specific tests for your area of concern

### Diagnostic Studies
We may order imaging or other tests to complete your evaluation. Many studies can be done on-site.

### Treatment Discussion
You'll receive:
- A clear explanation of your diagnosis
- Treatment options with pros and cons
- A recommended treatment plan
- Time to ask questions

## Tips for a Productive Visit

- **Be honest and complete**: The more we know, the better we can help
- **Describe your symptoms clearly**: Location, intensity, timing, triggers
- **Ask questions**: No question is too simple
- **Take notes**: Or bring someone who can help remember details
- **Discuss your goals**: What do you want to be able to do?

## After Your Visit

You'll receive:
- Written instructions for any treatments
- Prescriptions if needed
- Referrals for physical therapy or other services
- Follow-up appointment scheduling
- Contact information for questions

We're here to help you feel better and get back to the activities you love.
    `.trim(),
    author: "Rand Medical Center Staff",
    authorTitle: "Patient Services",
    publishedAt: "2024-09-25",
    category: "Health Education",
    tags: ["first visit", "new patient", "preparation", "what to expect"],
    readTime: "4 min read",
    metaDescription:
      "Prepare for your first visit to Rand Medical Center. Learn what to bring, what to expect during your appointment, and how to make the most of your evaluation.",
  },
];

export const BLOG_CATEGORIES = [
  "Pain Management",
  "Orthopedics",
  "Physical Therapy",
  "Health Education",
  "Workers Compensation",
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
