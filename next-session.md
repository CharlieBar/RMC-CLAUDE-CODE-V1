# Rand Medical Center Website - Next Session Tasks

## Overview

This document outlines all remaining work needed to complete and polish the Rand Medical Center website. The site is built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

**Current Status:** ~70% complete
**Branch:** `claude/complete-plan-files-01M1QEesMaeVbW58wFkx6xSR`

---

## 1. CRITICAL: Missing Pages (Navigation Broken)

These pages are linked in the navigation but don't exist, causing broken links:

### Provider Pages (HIGH PRIORITY)
- [ ] `/providers` - Provider directory listing page
- [ ] `/providers/[slug]` - Individual provider detail pages (5 providers defined in constants.ts)

**Data exists in:** `src/lib/constants.ts` (PROVIDERS array with 5 providers)

### Injury Services Pages (HIGH PRIORITY)
- [ ] `/services/injuries/motor-vehicle-accidents` - Auto accident injury care
- [ ] `/services/injuries/workers-compensation` - Workers' comp services
- [ ] `/services/injuries/personal-injury` - Personal injury treatment

**Note:** These are linked from the homepage "Get the Care You Need Today" section

### About Sub-Pages
- [ ] `/about/mission` - Mission statement page
- [ ] `/about/accreditation` - Accreditation details (Joint Commission, etc.)
- [ ] `/about/facility` - Facility tour/information
- [ ] `/careers` - Jobs/careers page

### Diagnostic Services Pages
- [ ] `/services/diagnostics/x-ray` - X-ray services
- [ ] `/services/diagnostics/lab` - Lab services

### Surgery Center Sub-Pages
- [ ] `/surgery-center/pain-procedures` - Pain procedure details
- [ ] `/surgery-center/orthopedic-procedures` - Orthopedic procedure details

### Patient Services
- [ ] `/patients/referrals` - Referral information page

### Legal/Compliance Pages (REQUIRED FOR MEDICAL SITE)
- [ ] `/legal/notice-of-privacy-practices` - HIPAA Notice (legally required)
- [ ] `/legal/terms` - Terms of use
- [ ] `/legal/nondiscrimination` - Nondiscrimination statement (legally required)
- [ ] `/accessibility` - ADA accessibility statement

---

## 2. Physical Therapy Sub-Pages

The physical therapy service page links to these program pages that don't exist:

- [ ] `/services/physical-therapy/post-surgical-rehab`
- [ ] `/services/physical-therapy/spine-rehab`
- [ ] `/services/physical-therapy/sports-rehab`
- [ ] `/services/physical-therapy/manual-therapy`
- [ ] `/services/physical-therapy/balance-training`
- [ ] `/services/physical-therapy/work-conditioning`

---

## 3. Orthopedics Sub-Pages

The orthopedics service page links to these specialty pages:

- [ ] `/services/orthopedics/shoulder-rotator-cuff`
- [ ] `/services/orthopedics/knee`
- [ ] `/services/orthopedics/hip`
- [ ] `/services/orthopedics/sports-injuries`

---

## 4. Internal Medicine Sub-Pages

- [ ] `/services/internal-medicine/physicals`
- [ ] `/services/internal-medicine/preventive-care`
- [ ] `/services/internal-medicine/chronic-disease-management`
- [ ] `/services/internal-medicine/vaccinations`

---

## 5. Assets & Images

### Missing Images
The `public/` folder only has default Next.js SVGs. Need to add:

- [ ] `/images/og-image.jpg` - Social sharing image (referenced in layout.tsx)
- [ ] `/images/providers/` - Provider headshots (5 photos needed)
  - `dr-giokaris.jpg`
  - `dr-chunduri.jpg`
  - `dr-giannoulias.jpg`
  - `dr-poepping.jpg`
  - `ruben-bermudez.jpg`
- [ ] `/images/facility/` - Facility photos for about pages
- [ ] `/images/services/` - Service-specific images
- [ ] `/images/conditions/` - Condition page hero images
- [ ] Favicon and app icons (`/favicon.ico`, `/apple-touch-icon.png`)

### Map Integration
- [ ] Replace map placeholder on homepage with actual Google Maps embed or static map image
- [ ] Consider using `@react-google-maps/api` or static image fallback

---

## 6. Content Improvements

### Homepage
- [x] All sections complete
- [ ] Add real testimonials (currently using placeholder names)
- [ ] Consider adding before/after statistics or outcomes data

### Blog
- [x] 9 blog articles complete
- [ ] Add 3-5 more articles to round out each category
- [ ] Consider adding author photos to blog posts

### Conditions (13 defined)
- [x] All condition data complete with human-centered descriptions
- [ ] Consider adding FAQ section to condition pages
- [ ] Add schema markup for MedicalCondition

### Treatments (6 defined)
- [x] All treatment data complete
- [ ] Consider adding video content placeholders
- [ ] Add schema markup for MedicalProcedure

---

## 7. SEO Enhancements

### Schema Markup (Structured Data)
- [ ] LocalBusiness/MedicalClinic schema on all pages
- [ ] MedicalCondition schema on condition pages
- [ ] MedicalProcedure schema on treatment pages
- [ ] FAQPage schema on FAQ page
- [ ] Organization schema sitewide
- [ ] BreadcrumbList schema on all pages

### Technical SEO
- [x] sitemap.ts configured
- [x] robots.ts configured
- [ ] Add proper canonical URLs
- [ ] Add hreflang if multilingual support needed
- [ ] Verify all meta descriptions are 150-160 chars

---

## 8. Accessibility (WCAG 2.1 AA)

### Required Improvements
- [ ] Add skip-to-content link
- [ ] Ensure all images have descriptive alt text
- [ ] Test keyboard navigation throughout
- [ ] Add aria-labels to icon-only buttons
- [ ] Ensure sufficient color contrast (already good, verify)
- [ ] Add focus visible states to all interactive elements
- [ ] Test with screen reader

### Forms
- [ ] Add proper form labels and error messages
- [ ] Implement accessible form validation

---

## 9. Performance Optimizations

### Images
- [ ] Implement Next.js Image component with proper sizing
- [ ] Add blur placeholders for images
- [ ] Consider WebP format with fallbacks

### Code
- [ ] Remove unused Framer Motion dependency (installed but not used)
- [ ] Implement dynamic imports for heavy components
- [ ] Add loading states/skeletons for dynamic content

### Fonts
- [ ] Verify font-display: swap is working
- [ ] Consider subsetting fonts

---

## 10. Features to Consider Adding

### High Value
- [ ] Online appointment booking form (in addition to external link)
- [ ] Patient portal integration/link
- [ ] Live chat widget
- [ ] Emergency contact banner (dismissible)
- [ ] Newsletter signup

### Medium Value
- [ ] Search functionality
- [ ] Print-friendly styles for patient forms
- [ ] Social media feed integration
- [ ] Video testimonials section
- [ ] Virtual tour

### Nice to Have
- [ ] Dark mode toggle
- [ ] Language switcher (Spanish)
- [ ] Appointment reminder system
- [ ] Insurance verification widget

---

## 11. Design Polish

### Animations
- [ ] Add subtle entrance animations (Framer Motion already installed)
- [ ] Smooth scroll behavior for anchor links
- [ ] Loading transitions between pages

### Visual Refinements
- [ ] Add hover states to all cards (mostly done)
- [ ] Implement parallax effects on hero sections (optional)
- [ ] Add micro-interactions to CTAs
- [ ] Consider adding decorative medical illustrations

### Mobile Experience
- [ ] Test all breakpoints thoroughly
- [ ] Optimize touch targets (min 44px)
- [ ] Test mobile menu thoroughly
- [ ] Add pull-to-refresh if applicable

---

## 12. Testing Requirements

### Functional Testing
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] External links open in new tabs
- [ ] Phone links trigger phone app

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Android

### Device Testing
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (iPad, 768px)
- [ ] Mobile (iPhone, Android, 375px, 390px)

---

## 13. Pre-Launch Checklist

### Technical
- [ ] SSL certificate configured
- [ ] Domain DNS properly set
- [ ] 301 redirects from old site (if applicable)
- [ ] Google Analytics/Tag Manager installed
- [ ] Google Search Console verified
- [ ] Performance testing (Core Web Vitals)

### Content
- [ ] All placeholder content replaced
- [ ] Contact info verified accurate
- [ ] Operating hours verified
- [ ] Insurance list current
- [ ] All provider info accurate

### Legal
- [ ] Privacy policy reviewed by legal
- [ ] HIPAA notice reviewed
- [ ] Terms of service reviewed
- [ ] Nondiscrimination notice included
- [ ] ADA compliance verified

### Business
- [ ] Booking system tested end-to-end
- [ ] Phone number tested
- [ ] Contact form tested
- [ ] Google Business Profile updated

---

## Priority Order for Next Session

1. **Create provider pages** (most linked, highly visible)
2. **Create injury services pages** (linked from homepage CTAs)
3. **Create legal pages** (compliance requirement)
4. **Add provider images** or professional placeholders
5. **Create remaining service sub-pages**
6. **Add map integration**
7. **Schema markup implementation**
8. **Accessibility audit and fixes**
9. **Performance optimization**
10. **Final testing and polish**

---

## File Structure Reference

```
rand-medical-center/
├── src/
│   ├── app/
│   │   ├── page.tsx                    ✅ Complete
│   │   ├── about/page.tsx              ✅ Complete
│   │   ├── blog/
│   │   │   ├── page.tsx                ✅ Complete
│   │   │   └── [slug]/page.tsx         ✅ Complete
│   │   ├── conditions/
│   │   │   ├── page.tsx                ✅ Complete
│   │   │   └── [slug]/page.tsx         ✅ Complete
│   │   ├── contact/page.tsx            ✅ Complete
│   │   ├── immediate-care/page.tsx     ✅ Complete
│   │   ├── patients/
│   │   │   ├── faq/page.tsx            ✅ Complete
│   │   │   ├── forms/page.tsx          ✅ Complete
│   │   │   ├── insurance-pricing/      ✅ Complete
│   │   │   └── referrals/              ❌ MISSING
│   │   ├── providers/                  ❌ MISSING (entire directory)
│   │   ├── services/
│   │   │   ├── page.tsx                ✅ Complete
│   │   │   ├── internal-medicine/      ✅ Hub only
│   │   │   ├── orthopedics/            ✅ Hub only
│   │   │   ├── pain-management/
│   │   │   │   ├── page.tsx            ✅ Complete
│   │   │   │   └── [slug]/page.tsx     ✅ Complete
│   │   │   ├── physical-therapy/       ✅ Hub only
│   │   │   ├── diagnostics/            ❌ MISSING
│   │   │   └── injuries/               ❌ MISSING
│   │   ├── surgery-center/page.tsx     ✅ Complete
│   │   ├── treatments/page.tsx         ✅ Complete
│   │   └── legal/
│   │       └── privacy-policy/         ✅ Complete
│   ├── components/
│   │   ├── layout/                     ✅ Complete
│   │   └── ui/                         ✅ Complete
│   └── lib/
│       ├── blog.ts                     ✅ 9 posts
│       ├── conditions.ts               ✅ 13 conditions
│       ├── treatments.ts               ✅ 6 treatments
│       ├── constants.ts                ✅ Complete
│       ├── fonts.ts                    ✅ Complete
│       └── utils.ts                    ✅ Complete
└── public/                             ⚠️ Needs images
```

---

## Notes

- The website uses a consistent teal color scheme throughout
- All pages follow the same layout pattern with hero sections, badges, and CTAs
- The design system is well-established in `globals.css`
- TypeScript is properly configured throughout
- The site is mobile-responsive but needs thorough testing

---

*Last updated: December 10, 2024*
