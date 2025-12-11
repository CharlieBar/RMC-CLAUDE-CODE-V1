# Rand Medical Center Website - Next Session Tasks

## Project Overview
- **Project**: Rand Medical Center Next.js Website
- **Location**: `/home/user/RMC-CLAUDE-CODE-V1/rand-medical-center/`
- **Branch**: `claude/resume-next-session-01Y1wsC1xqNi6eVuCg2LsZaT`
- **Current Status**: 85 pages building successfully, all navigation links fixed
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, Lucide Icons

---

## COMPLETED WORK

### Pages Created (85 total)
- **Homepage** with hero, services, conditions, providers, testimonials
- **About Section**: Main page, Mission, Facility, Accreditation
- **Services**: Pain Management, Orthopedics, Physical Therapy, Internal Medicine
- **Conditions**: 31 condition pages with detailed content
- **Treatments**: 10 treatment pages (epidurals, RFA, joint injections, nerve blocks, occipital nerve block, SI joint injection, etc.)
- **Providers**: 5 provider profile pages
- **Blog**: 9 articles with dynamic routing
- **Patients**: Hub page, Insurance & Pricing, Forms, FAQ
- **Legal**: Privacy Policy, Terms, HIPAA Notice, Nondiscrimination, Accessibility
- **Other**: Contact, Immediate Care, Surgery Center

### Infrastructure
- SEO metadata on all pages
- Sitemap.xml and robots.txt
- Responsive design with Tailwind
- Component library (Button, Badge, Card, Accordion)

---

## RECENTLY COMPLETED (This Session)

### Quick Wins Completed
- [x] Patient sub-pages already existed and are complete (/patients/faq, /patients/forms, /patients/insurance-pricing)
- [x] Fixed all treatment links in conditions.ts to point to `/treatments/*` pages
- [x] Fixed broken orthopedics sub-page links (pointed to non-existent pages)
- [x] Schema markup (JSON-LD) already implemented in layout.tsx
- [x] Added Google Maps iframe embeds to homepage and contact page
- [x] Fixed broken `/patients/new-patients` link in contact page

### Content Enhancement Completed
- [x] Added 5 new blog articles (total now 9):
  - Workers' Compensation Injury Guide
  - Auto Accident Injury: What to Know
  - Understanding Chronic Pain
  - When to See an Orthopedic Specialist
  - Preparing for Your First Visit
- [x] Added 2 new treatments (total now 10):
  - Occipital Nerve Block
  - SI Joint Injection

---

## REMAINING TASKS

### 1. CONTENT GAPS (Priority: High)

#### 1.1 Blog Content Enhancement ✅ COMPLETED
~~Current blog has 4 articles.~~ Now has 9 articles.
- [x] Added 5 new blog articles covering key topics
- [x] Workers' compensation process guide
- [x] Auto accident injury FAQ
- [x] Understanding chronic pain
- [x] When to see an orthopedic specialist
- [x] Preparing for your first visit

#### 1.2 Additional Treatments ✅ PARTIALLY COMPLETED
Added to `src/lib/treatments.ts`:
- [x] Occipital nerve block
- [x] SI joint injections
- [ ] Spinal cord stimulation (optional)
- [ ] Medial branch blocks (optional)

---

### 2. DESIGN POLISH (Priority: Medium)

#### 2.1 Visual Assets
- [ ] Create `/public/images/` directory structure:
  ```
  /public/images/
  ├── providers/
  │   ├── dr-giokaris.jpg
  │   ├── dr-chunduri.jpg
  │   ├── dr-giannoulias.jpg
  │   ├── dr-poepping.jpg
  │   └── ruben-bermudez.jpg
  ├── og-image.jpg (1200x630 for social sharing)
  ├── hero/
  │   └── clinic-hero.jpg
  └── facility/
      └── facility-tour.jpg
  ```
- [ ] Replace `<UserCircle />` placeholders with actual images or higher-quality medical stock images
- [ ] Add OG image for social media previews

#### 2.3 Component Polish
- [ ] Review Card hover states for consistency
- [ ] Ensure all buttons have proper focus states for accessibility
- [ ] Check mobile menu behavior and touch targets
- [ ] Verify form styling on contact page

#### 2.4 Typography & Spacing
- [ ] Audit heading hierarchy (h1, h2, h3) across all pages
- [ ] Check consistent spacing between sections
- [ ] Verify line heights for readability

---

### 3. INTERNAL LINKING (Priority: Medium)

#### 3.1 Cross-Linking Strategy
Improve SEO and user navigation with internal links:

**Conditions → Treatments**
- [ ] Each condition page should link to relevant treatment pages
- [ ] Update `conditions.ts` treatment arrays to use correct `/treatments/*` URLs

**Treatments → Conditions**
- [ ] Each treatment page should link to conditions it helps
- [ ] Add "Conditions We Treat With This Procedure" section

**Providers → Services**
- [ ] Link providers to their specialty service pages
- [ ] Add "Conditions Treated" to provider pages

**Blog → Related Content**
- [ ] Add "Related Conditions" links to blog articles
- [ ] Add "Related Treatments" links to blog articles

#### 3.2 Breadcrumb Implementation
- [ ] Add breadcrumbs to all sub-pages (some pages have them, ensure consistency)
- [ ] Pattern: Home > Section > Page

#### 3.3 Footer Links Audit
- [ ] Verify all footer links point to existing pages
- [ ] Consider adding "Popular Conditions" or "Quick Links" section

---

### 4. SEO OPTIMIZATION (Priority: Medium)

#### 4.1 Metadata Audit
- [ ] Ensure unique meta descriptions for all 78 pages
- [ ] Add keywords to metadata where appropriate
- [ ] Verify OpenGraph tags on all pages

#### 4.2 Schema Markup (JSON-LD)
Add structured data for:
- [ ] Organization schema on homepage
- [ ] LocalBusiness schema with address, hours, phone
- [ ] MedicalOrganization schema
- [ ] Physician schema on provider pages
- [ ] FAQPage schema on FAQ page
- [ ] Article schema on blog posts

#### 4.3 Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images (if added)
- [ ] Review bundle size
- [ ] Add proper image dimensions to prevent layout shift

---

### 5. FUNCTIONAL ENHANCEMENTS (Priority: Low)

#### 5.1 Contact Form
- [ ] Review contact form functionality
- [ ] Add form validation messages
- [ ] Consider adding appointment request form fields

#### 5.2 Search Functionality
- [ ] Consider adding site search for conditions/treatments
- [ ] Could use simple client-side search or Algolia

#### 5.3 Accessibility (WCAG 2.1 AA)
- [ ] Run aXe accessibility audit
- [ ] Ensure proper ARIA labels
- [ ] Check color contrast ratios
- [ ] Verify keyboard navigation
- [ ] Add skip-to-content link

---

### 6. SOCIAL MEDIA LINKS (Priority: Low)

Update `src/lib/constants.ts` SITE_CONFIG.socialMedia:
- [ ] Add Facebook URL (if available)
- [ ] Add Instagram URL (if available)
- [ ] Add LinkedIn URL (if available)
- [ ] Add YouTube URL (if available)
- [ ] Or remove social icons from footer if not needed

---

## FILE REFERENCE

### Key Data Files
- `src/lib/conditions.ts` - 31 conditions with full content
- `src/lib/treatments.ts` - 10 treatments with details
- `src/lib/providers.ts` - 5 providers with bios
- `src/lib/blog.ts` - 9 blog articles
- `src/lib/constants.ts` - Site config, navigation, providers list

### Content Source Files (Root Directory)
- `rand-pages-content.json` - Pre-written page content (124KB)
- `services-conditions.json` - 48 conditions, 57 services data (65KB)
- `lower-back-pain.md` - Detailed condition content
- `carpal-tunnel-syndrome.md` - Detailed condition content
- `physical-therapy.md` - Treatment content
- `prp-therapy.md` - Treatment content

### Component Files
- `src/components/ui/` - Button, Badge, Card, Accordion
- `src/components/layout/` - Header, Footer

---

## ESTIMATED EFFORT

| Task Category | Estimated Time |
|--------------|----------------|
| Content Gaps (patient pages, blog) | 3-4 hours |
| Design Polish (images, maps) | 2-3 hours |
| Internal Linking | 2-3 hours |
| SEO Optimization | 2-3 hours |
| Functional Enhancements | 2-4 hours |
| **Total** | **11-17 hours** |

---

## QUICK WINS (Can Do First)

1. Create `/patients/faq/page.tsx` with accordion FAQ
2. Add schema markup to homepage
3. Fix treatment links in conditions.ts
4. Add map embed to contact page
5. Create `/patients/forms/page.tsx` with download links

---

## NOTES

- All navigation links are now fixed and working
- Build generates 85 static pages successfully
- No TypeScript or build errors
- Mobile responsiveness is implemented but should be tested
- Dark mode is NOT implemented (light mode only)
