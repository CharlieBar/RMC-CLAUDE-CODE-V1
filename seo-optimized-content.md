---
name: seo-optimized-content
description: Create SEO-optimized medical content that ranks well in search engines while maintaining readability and conversion focus. Use this skill for condition pages, treatment pages, service descriptions, and any content targeting specific keywords.
---

# SEO-Optimized Content Guide

Create content that ranks well in Google while genuinely helping patients. This guide covers keyword strategy, on-page optimization, schema markup, and content structure for medical websites.

---

## SEO Content Principles

### 1. Search Intent First
Understand WHY someone is searching before writing:

| Intent Type | Query Examples | Content Approach |
|-------------|----------------|------------------|
| **Informational** | "what causes back pain" | Educational, comprehensive guide |
| **Commercial** | "best treatment for sciatica" | Comparison, options, recommendations |
| **Transactional** | "pain doctor arlington heights" | Service page, strong CTAs, booking |
| **Navigational** | "rand medical center hours" | Direct answer, contact info |

### 2. E-E-A-T for Medical Content
Google prioritizes Experience, Expertise, Authoritativeness, and Trustworthiness:

- **Experience**: Include patient testimonials, case examples
- **Expertise**: Credit content to doctors, include credentials
- **Authoritativeness**: Cite medical sources, link to studies
- **Trustworthiness**: Clear contact info, privacy policies, accurate claims

---

## Keyword Strategy

### Primary Keyword Selection
Choose ONE primary keyword per page:

**Formula for medical pages:**
`[Condition/Treatment] + [Modifier] + [Location]`

**Examples:**
- "sciatica treatment arlington heights"
- "back pain doctor near me"
- "epidural injection for herniated disc"

### Secondary Keywords
Include 3-5 related terms naturally:

**For "sciatica treatment" page:**
- sciatic nerve pain relief
- sciatica symptoms
- lower back and leg pain
- herniated disc sciatica
- sciatica exercises

### LSI Keywords (Latent Semantic Indexing)
Include related concepts Google expects to see:

**For sciatica content:**
- lumbar spine, nerve compression, radiating pain
- physical therapy, epidural injection, stretches
- sitting, walking, sleeping positions

### Keyword Placement

| Location | Priority | Notes |
|----------|----------|-------|
| **H1** | Critical | Primary keyword, natural phrasing |
| **First 100 words** | Critical | Include primary keyword early |
| **URL slug** | High | `/conditions/sciatica-treatment/` |
| **Meta title** | High | Primary keyword near beginning |
| **Meta description** | High | Include keyword, add CTA |
| **H2 headings** | Medium | 2-3 H2s with keyword variations |
| **Image alt text** | Medium | Descriptive with keyword when natural |
| **Body content** | Medium | 1-2% density, natural usage |

---

## Page Structure for SEO

### Title Tag Formula
**Format:** `[Primary Keyword] | [Benefit/Qualifier] | Rand Medical Center`
**Length:** 50-60 characters

**Examples:**
```
Sciatica Treatment in Arlington Heights | Expert Relief | Rand Medical Center
Back Pain Doctor Near Me | Same-Day Appointments | Rand Medical Center
Epidural Steroid Injections | 70-90% Success Rate | Rand Medical Center
```

### Meta Description Formula
**Format:** `[Benefit statement with keyword]. [Credibility]. [CTA with location].`
**Length:** 150-160 characters

**Examples:**
```
Find lasting sciatica relief in Arlington Heights. Board-certified specialists,
advanced treatments, same-day appointments. Call (224) 735-3522 today.

Expert back pain treatment near you. 15+ years experience, on-site imaging,
insurance accepted. Schedule your consultation at Rand Medical Center.
```

### URL Structure
**Rules:**
- Lowercase, hyphenated
- No dates, no unnecessary words
- Include primary keyword
- Keep under 60 characters

**Good:**
```
/conditions/sciatica/
/treatments/epidural-steroid-injections/
/services/pain-management/
```

**Bad:**
```
/conditions/sciatica-treatment-options-arlington-heights-il/
/page?id=12345
/treatments/epidural_injections
```

---

## Content Structure Templates

### Condition Page Structure
```
H1: [Condition] Treatment in Arlington Heights, IL

Intro (100-150 words)
- What is condition (simple definition)
- Who it affects (stats)
- Hope statement
- Primary CTA

H2: What is [Condition]?
- Clear explanation
- How it affects daily life
- Prevalence statistics

H2: [Condition] Symptoms
- Bullet list of symptoms
- When symptoms are serious
- Red flag warnings

H2: What Causes [Condition]?
- Primary causes
- Risk factors
- Contributing factors

H2: How is [Condition] Diagnosed?
- What to expect at appointment
- Diagnostic tests
- On-site capabilities mention

H2: Treatment Options for [Condition]
- H3: Conservative Treatments
- H3: Interventional Treatments
- H3: Surgical Options (if applicable)
- Treatment comparison table

H2: Why Choose Rand Medical Center?
- Differentiators
- Credentials
- Success rates

H2: Frequently Asked Questions
- 8-12 FAQs with schema markup
- Cover search queries

H2: Schedule Your Consultation
- Strong CTA
- Contact info
- Location/hours
```

### Treatment Page Structure
```
H1: [Treatment Name] in Arlington Heights

Intro (100-150 words)
- What treatment does
- Who it helps
- Success rate mention

H2: What is [Treatment]?
- How it works
- Conditions it treats
- Expected outcomes

H2: Am I a Candidate for [Treatment]?
- Ideal candidates
- Who should avoid
- Consultation importance

H2: What to Expect During [Treatment]
- Preparation
- The procedure
- Recovery timeline

H2: Benefits of [Treatment]
- Bullet list
- Compared to alternatives

H2: Risks and Side Effects
- Honest disclosure
- How risks are minimized

H2: [Treatment] Results
- Success rates
- How long results last
- Patient testimonials

H2: Frequently Asked Questions
- 6-10 treatment-specific FAQs

H2: Schedule Your [Treatment] Consultation
- CTA with booking options
```

---

## Internal Linking Strategy

### Link Quantity Per Page
- **Condition pages**: 10-15 internal links
- **Treatment pages**: 8-12 internal links
- **Blog posts**: 5-8 internal links
- **Service hub pages**: 15-20 internal links

### Link Types to Include

| Link Type | Purpose | Example |
|-----------|---------|---------|
| **Pillar → Cluster** | Topic authority | Pain Management → Specific injections |
| **Cluster → Pillar** | Distribute authority | Sciatica → Pain Management hub |
| **Related conditions** | Topic relevance | Sciatica → Herniated Disc |
| **Treatment options** | Conversion path | Back Pain → Epidural Injections |
| **Doctor profiles** | Trust/E-E-A-T | → Dr. Chunduri profile |
| **Blog resources** | Engagement | → "5 Stretches for Sciatica" |

### Anchor Text Best Practices
**Good anchor text:**
- "epidural steroid injections for sciatica"
- "learn more about herniated disc treatment"
- "our pain management specialists"

**Bad anchor text:**
- "click here"
- "learn more"
- "this page"

---

## Schema Markup

### Required Schema for Medical Pages

**MedicalCondition:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Sciatica",
  "alternateName": "Sciatic Nerve Pain",
  "description": "Pain radiating along the sciatic nerve from lower back through the leg",
  "associatedAnatomy": {
    "@type": "AnatomicalStructure",
    "name": "Sciatic Nerve"
  },
  "possibleTreatment": [
    {
      "@type": "MedicalTherapy",
      "name": "Epidural Steroid Injection"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Physical Therapy"
    }
  ],
  "signOrSymptom": [
    "Radiating leg pain",
    "Lower back pain",
    "Numbness in leg"
  ]
}
```

**FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does sciatica last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acute sciatica typically lasts 4-6 weeks with proper treatment..."
      }
    }
  ]
}
```

**LocalBusiness (sitewide):**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Rand Medical Center",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1925 E Rand Rd",
    "addressLocality": "Arlington Heights",
    "addressRegion": "IL",
    "postalCode": "60004"
  },
  "telephone": "+1-224-735-3522",
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$"
}
```

---

## Featured Snippet Optimization

### Target These Query Types

**Definition queries:**
Format answer in 40-60 words directly after H2
```
H2: What is Sciatica?
Sciatica is pain that radiates along the path of the sciatic nerve, which
runs from your lower back through your hips and buttocks and down each leg.
It typically affects only one side of your body and is usually caused by a
herniated disc or bone spur compressing part of the nerve.
```

**List queries:**
Use numbered or bulleted lists
```
H2: Sciatica Symptoms
The most common symptoms of sciatica include:
• Sharp, shooting pain from lower back down the leg
• Numbness or tingling in the affected leg
• Muscle weakness in the leg or foot
• Pain that worsens when sitting
• Burning sensation along the nerve path
```

**How-to queries:**
Use numbered steps
```
H2: How to Prepare for an Epidural Injection
1. Stop blood thinners as directed by your doctor
2. Arrange transportation (you cannot drive after)
3. Wear comfortable, loose-fitting clothing
4. Eat a light meal 2-3 hours before
5. Arrive 15 minutes early for paperwork
```

---

## Content Length Guidelines

| Page Type | Word Count | Rationale |
|-----------|------------|-----------|
| **Condition pages** | 2000-3000 | Comprehensive, ranks for multiple queries |
| **Treatment pages** | 1500-2500 | Detailed but focused |
| **Service hub pages** | 800-1200 | Overview with links |
| **Blog posts** | 1800-2500 | In-depth, shareable |
| **Doctor profiles** | 500-800 | Bio + credentials |
| **Landing pages** | 1000-1500 | Conversion-focused |

---

## Local SEO Elements

### Include on Every Page
- City name (Arlington Heights) 2-4 times naturally
- "Serving [surrounding cities]" in footer/relevant sections
- Address and phone number
- Google Map embed on contact pages

### Local Keywords to Target
```
[service] arlington heights
[condition] doctor near me
[treatment] northwest chicago suburbs
pain management palatine
orthopedic surgeon mount prospect
```

### NAP Consistency
Ensure Name, Address, Phone are identical everywhere:
```
Rand Medical Center
1925 E Rand Rd
Arlington Heights, IL 60004
(224) 735-3522
```

---

## Technical SEO Checklist

### On-Page Elements
- [ ] H1 contains primary keyword
- [ ] Title tag under 60 characters
- [ ] Meta description 150-160 characters with CTA
- [ ] URL is clean and contains keyword
- [ ] Images have descriptive alt text
- [ ] Internal links to related content
- [ ] External link to authoritative source (1-2)
- [ ] Schema markup implemented
- [ ] Mobile-responsive design
- [ ] Page loads under 3 seconds

### Content Quality
- [ ] Answers search intent completely
- [ ] Original, not duplicated content
- [ ] Updated date visible
- [ ] Author attribution for medical content
- [ ] Sources cited for statistics
- [ ] Clear CTAs throughout

---

## Measuring SEO Success

### Key Metrics to Track
- Organic traffic to page
- Keyword rankings (primary + secondary)
- Click-through rate from search results
- Time on page
- Bounce rate
- Conversion rate (bookings, calls)

### Tools
- Google Search Console (rankings, clicks)
- Google Analytics (traffic, behavior)
- Semrush/Ahrefs (keyword tracking)
- PageSpeed Insights (performance)
