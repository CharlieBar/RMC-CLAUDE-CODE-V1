# Rand Medical Center Website - Content Completion Plan

## Current State Summary

### Completed with Human-Centered Content
- [x] Homepage (`/`) - Empathetic headlines, conversational CTAs
- [x] About page (`/about`) - Story-driven content, relatable values
- [x] Contact page (`/contact`) - Friendly, accessible tone
- [x] Services hub (`/services`) - Conversational service descriptions
- [x] Pain Management (`/services/pain-management`) - Empathy-first messaging

### Pages Needing Human-Centered Content Update
- [ ] Orthopedics (`/services/orthopedics`)
- [ ] Physical Therapy (`/services/physical-therapy`)
- [ ] Internal Medicine (`/services/internal-medicine`)
- [ ] Immediate Care (`/immediate-care`)
- [ ] Surgery Center (`/surgery-center`)

---

## Phase 1: Service Pages Content Rewrite

### 1.1 Orthopedics Page (`/services/orthopedics/page.tsx`)

**Current Issues:**
- Generic headline "Expert Care for Bones & Joints"
- Clinical service descriptions
- No empathetic lead-in

**Content Updates:**
| Section | Current | Updated |
|---------|---------|---------|
| Hero H1 | "Expert Care for Bones & Joints" | "Move Without Pain Again" |
| Hero Intro | "Our board-certified orthopedic surgeons provide comprehensive surgical and non-surgical care..." | "Torn ACL? Arthritic knee? Shoulder that won't stop aching? We see these every day—and we know how to fix them." |
| Services Section | "Orthopedic Services" | "What We Fix" |
| Surgeons Section | "Board-Certified Orthopedic Surgeons" | "Surgeons Who Do This Every Day" |
| Conditions | "Conditions We Treat" | "Sound Like You?" |
| CTA | "Get Back to Moving Freely" | "Let's Get You Moving Again" |

**Service Descriptions to Rewrite:**
1. Shoulder & Rotator Cuff: "Throwing pain? Can't reach overhead? We fix torn rotator cuffs, frozen shoulders, and more."
2. Knee Care: "ACL tears, meniscus problems, worn-out joints—whether you need surgery or not, we'll get your knee working again."
3. Hip Treatment: "Hip pain making it hard to walk? We do everything from injections to total hip replacement."
4. Sports Injuries: "Get back in the game. We treat athletes from weekend warriors to pros."
5. Fracture Care: "Broken bone? We handle everything from simple fractures to complex breaks."
6. Hand & Wrist: "Carpal tunnel, trigger finger, or hand injury—we'll get you using your hands again."

---

### 1.2 Physical Therapy Page (`/services/physical-therapy/page.tsx`)

**Content Updates:**
| Section | Current | Updated |
|---------|---------|---------|
| Hero H1 | "Restore Your Strength & Mobility" | "Get Stronger. Move Better. Feel Like Yourself." |
| Hero Intro | "Our physical therapists work closely with your medical team to create personalized rehabilitation programs..." | "Recovery doesn't happen by accident. Our PTs create a plan that works for YOUR body, YOUR schedule, and YOUR goals—whether that's playing with your grandkids or getting back on the tennis court." |
| Approach | "Integrated, Personalized Care" | "We Don't Just Give You Exercises" |
| Programs | "Rehabilitation Programs" | "What We Help With" |
| Process | "What to Expect" | "How It Works" |
| CTA | "Start Your Recovery Today" | "Let's Get You Back to 100%" |

**Program Descriptions to Rewrite:**
1. Post-Surgical Rehab: "Just had surgery? We'll make sure you heal right and get your strength back safely."
2. Spine Rehab: "Back and neck problems are our specialty. We work with your pain doctor to get you better."
3. Sports Rehab: "Getting an athlete back to their sport takes specific training. We know the protocols."
4. Manual Therapy: "Sometimes you need hands-on work—massage, joint mobilization, the stuff that loosens things up."
5. Balance Training: "Falls are scary and preventable. We'll help you feel steady on your feet."
6. Work Conditioning: "Going back to work after an injury? We'll make sure you can do your job safely."

---

### 1.3 Internal Medicine Page (`/services/internal-medicine/page.tsx`)

**Content Updates:**
| Section | Current | Updated |
|---------|---------|---------|
| Hero H1 | TBD | "A Doctor Who Knows You" |
| Hero Intro | TBD | "Having a primary care doctor who actually knows your history makes all the difference. We manage your ongoing health, coordinate with specialists, and make sure nothing falls through the cracks." |
| Services | TBD | "What We Do" |
| CTA | TBD | "Time for a Checkup?" |

---

### 1.4 Immediate Care Page (`/immediate-care/page.tsx`)

**Content Updates:**
| Section | Current | Updated |
|---------|---------|---------|
| Hero H1 | TBD | "Need to See a Doctor Today?" |
| Hero Intro | TBD | "Walk in or call ahead—we'll see you today. Whether it's a sprain, an infection, or you just need to be checked out, you don't have to wait for an appointment or pay ER prices." |
| Services | TBD | "What We Treat" |
| CTA | TBD | "Walk In or Book Now" |

---

### 1.5 Surgery Center Page (`/surgery-center/page.tsx`)

**Content Updates:**
| Section | Current | Updated |
|---------|---------|---------|
| Hero H1 | TBD | "Get In, Get It Done, Go Home" |
| Hero Intro | TBD | "Our outpatient surgery center handles most procedures without an overnight hospital stay. Same safety standards as a hospital, but more convenient and usually less expensive." |
| Accreditation | TBD | "We Meet the Highest Standards" |
| CTA | TBD | "Schedule Your Procedure" |

---

## Phase 2: Conditions Data Rewrite (`src/lib/conditions.ts`)

### 2.1 Overview
The conditions data file contains 8 conditions with clinical descriptions. Each needs a more empathetic, conversational rewrite.

### 2.2 Conditions to Update

| Condition | Current Description Style | New Approach |
|-----------|---------------------------|--------------|
| Back Pain | Clinical ("Back pain is one of the most common reasons...") | Empathetic ("If you've been dealing with back pain, you know how much it takes over your life...") |
| Sciatica | Technical explanation | "That shooting pain down your leg? That's your sciatic nerve telling you something's wrong..." |
| Neck Pain | Generic medical info | "Neck pain from staring at screens, sleeping wrong, or that fender-bender years ago..." |
| Knee Pain | List-style causes | "Your knee takes a beating every day. When it starts hurting, everything gets harder..." |
| Shoulder Pain | Medical terminology | "Can't reach behind your back? Shoulder keeps you up at night? We see this constantly..." |
| Arthritis | Textbook definition | "When every morning starts stiff and every movement aches, you might think it's just aging..." |
| Herniated Disc | Anatomical explanation | "That disc in your spine is like a jelly donut—when it bulges, it can press on nerves..." |
| Sports Injuries | Generic list | "You pushed hard and something gave. Now you need to get back to doing what you love..." |

### 2.3 Template for Each Condition Rewrite

```typescript
{
  slug: "condition-slug",
  name: "Condition Name",
  description: "Lead with empathy. Acknowledge the reader's experience. Then explain what's happening in plain terms.",
  causes: [
    // Keep causes factual but approachable
    "Plain-language explanation of cause 1",
    "Plain-language explanation of cause 2"
  ],
  symptoms: [
    // Describe how symptoms feel, not just what they are
    "What the patient actually experiences",
    "How it affects daily life"
  ],
  treatments: [/* Links stay the same */],
  relatedConditions: [/* Keep existing */],
  metaDescription: "SEO-optimized but human-readable"
}
```

---

## Phase 3: Blog Articles Enhancement (`src/lib/blog.ts`)

### 3.1 Current Articles Status
4 articles exist with good informational content but could be more conversational:

1. **Understanding Epidural Steroid Injections** - Good, could add more "what it feels like" sections
2. **How to Prepare for Knee Replacement Surgery** - Good practical advice, could be warmer
3. **Benefits of Physical Therapy After Surgery** - Informative, could add patient perspective
4. **When Should You See a Doctor for Back Pain?** - Good, could be more reassuring

### 3.2 Article Improvements

**For Each Article:**
- [ ] Add relatable opening that acknowledges reader's situation
- [ ] Include "What patients tell us" sections
- [ ] Add specific outcomes/timelines where appropriate
- [ ] End with encouraging, non-pushy CTA

### 3.3 New Articles to Consider (Future)

1. "What to Expect at Your First Pain Management Appointment"
2. "5 Signs Your Back Pain Needs Professional Help"
3. "Recovery Timeline: What's Normal After Knee Replacement"
4. "Workers' Comp Injuries: Your Rights and Next Steps"

---

## Phase 4: Internal Linking Strategy

### 4.1 Current State
Pages have some internal links but not optimized per SEO skill file guidelines.

### 4.2 Target Links Per Page Type
| Page Type | Target Links | Current | Gap |
|-----------|--------------|---------|-----|
| Homepage | 15-20 | ~12 | +8 |
| Service Pages | 10-15 | ~6 | +6 |
| Condition Pages | 10-15 | ~4 | +8 |
| Blog Articles | 8-12 | ~4 | +6 |

### 4.3 Linking Improvements

**Homepage:**
- Add links in hero to specific conditions
- Add links in injury CTAs to specific treatment pages
- Add "Most requested" quick links section

**Service Pages:**
- Cross-link between related services (Pain Management ↔ Physical Therapy)
- Link to relevant condition pages
- Link to related blog articles

**Condition Pages:**
- Already link to treatments ✅
- Add links to "How we diagnose" sections
- Add links to relevant blog articles
- Add links to insurance/pricing info

**Blog Articles:**
- Add in-content links to services mentioned
- Add links to condition pages
- Add "Related reading" section at bottom

---

## Phase 5: UI/UX Polish

### 5.1 Color Consistency
**Current Issue:** Different service pages use different accent colors:
- Pain Management: Teal (#14b8a6)
- Orthopedics: Blue (#2563eb)
- Physical Therapy: Green (#16a34a)
- Internal Medicine: Unknown

**Decision:** Keep distinct colors for branding differentiation, but ensure:
- Consistent hover states
- Same button styles (rounded-lg, consistent sizing)
- Same transition timing (300ms)

### 5.2 Component Consistency Checklist
- [ ] All CTAs use consistent button sizes
- [ ] Card hover states consistent across pages
- [ ] Badge styles consistent
- [ ] Icon sizes consistent (h-5 w-5 inline, h-6 w-6 in circles)
- [ ] Section padding consistent (`section` class)

### 5.3 Mobile Responsiveness Check
- [ ] Hero text readable on mobile
- [ ] CTAs tap-friendly (44px minimum)
- [ ] Navigation menu works properly
- [ ] Cards stack correctly on small screens
- [ ] Forms usable on mobile

### 5.4 Accessibility Improvements
- [ ] Verify contrast ratios (WCAG AA minimum)
- [ ] Add sr-only labels where needed
- [ ] Ensure focus states visible
- [ ] Check heading hierarchy (h1 → h2 → h3)

---

## Phase 6: Patient Resources Content

### 6.1 Insurance & Pricing Page
- [ ] Clear, honest pricing information
- [ ] List of accepted insurance plans
- [ ] Self-pay options explained simply
- [ ] No-surprise billing statement

### 6.2 FAQ Page
- [ ] Human-friendly question phrasing
- [ ] Conversational answers
- [ ] Link to relevant pages for more info
- [ ] Easy contact CTA for unanswered questions

### 6.3 Forms Page
- [ ] Clear instructions for each form
- [ ] Explain why each form is needed
- [ ] Provide both online and printable options

---

## Implementation Order

### Week 1: Service Pages
1. Orthopedics content rewrite
2. Physical Therapy content rewrite
3. Internal Medicine content rewrite
4. Immediate Care content rewrite
5. Surgery Center content rewrite

### Week 2: Conditions & Blog
1. Rewrite all 8 condition descriptions
2. Update condition page template with human-centered section headers
3. Enhance 4 existing blog articles
4. Add internal links to blog articles

### Week 3: Linking & Polish
1. Implement internal linking strategy
2. UI consistency pass on all pages
3. Mobile responsiveness testing
4. Accessibility audit and fixes

### Week 4: Testing & Launch
1. Full site review
2. Content proofread
3. Link testing
4. Performance check
5. Final commit and deployment

---

## Content Guidelines Reminder (from skill files)

### Do's
- Lead with empathy ("We know how frustrating...")
- Use contractions ("you're", "we'll", "don't")
- Be specific with numbers ("90% of patients", "within 48 hours")
- Write like you talk
- Acknowledge the reader's situation first

### Don'ts
- Avoid: "comprehensive", "cutting-edge", "state-of-the-art", "holistic"
- Avoid: "In today's fast-paced world..."
- Avoid: Starting with definitions
- Avoid: Generic "we're committed to excellence"
- Avoid: Overusing "journey" or "solution"

---

## Files to Modify

### Service Pages (5 files)
1. `/src/app/services/orthopedics/page.tsx`
2. `/src/app/services/physical-therapy/page.tsx`
3. `/src/app/services/internal-medicine/page.tsx`
4. `/src/app/immediate-care/page.tsx`
5. `/src/app/surgery-center/page.tsx`

### Data Files (2 files)
1. `/src/lib/conditions.ts` - All 8 conditions
2. `/src/lib/blog.ts` - All 4 articles

### Template Files (2 files)
1. `/src/app/conditions/[slug]/page.tsx` - Section headers
2. `/src/app/blog/[slug]/page.tsx` - Article layout

### Patient Resources (3 files)
1. `/src/app/patients/insurance-pricing/page.tsx`
2. `/src/app/patients/faq/page.tsx`
3. `/src/app/patients/forms/page.tsx`

---

## Success Metrics

- [ ] All pages pass human-writing-style guidelines
- [ ] 10+ internal links per major page
- [ ] Consistent UI across all pages
- [ ] Mobile-friendly on all screen sizes
- [ ] Build passes with no errors
- [ ] All 33 pages have quality content
