# Somnicore Website Design Guidelines

## Design Approach

**Selected Framework:** Apple Human Interface Guidelines with wellness-focused customization

**Rationale:** As you're applying for Apple developer accounts and building a sleep wellness product, adopting Apple's design principles establishes immediate credibility while allowing for calming, health-focused adaptations. The clean, content-first approach emphasizes trust and professionalism essential for developer account approval.

**Core Principles:**
- Clarity over cleverness - information must be immediately accessible
- Professional credibility - every element reinforces legitimacy
- Calm sophistication - visual design reflects sleep wellness without being overtly "sleepy"
- Trust-building through transparency

---

## Typography System

**Primary Font:** Inter (Google Fonts) - modern, highly legible, professional
**Accent Font:** Space Grotesk (Google Fonts) - for headlines, adds personality while maintaining professionalism

**Hierarchy:**
- Hero Headlines: Space Grotesk, 4xl to 6xl, font-bold
- Section Headlines: Space Grotesk, 3xl to 4xl, font-semibold
- Subsection Titles: Inter, xl to 2xl, font-semibold
- Body Copy: Inter, base to lg, font-normal, leading-relaxed
- Small Text/Captions: Inter, sm, font-normal
- Legal/Footer: Inter, xs to sm, font-normal

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, and 24
- Micro spacing (component internals): 2, 4
- Component spacing: 6, 8, 12
- Section padding: 16, 20, 24
- Generous whitespace between sections to create breathing room

**Responsive Containers:**
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto
- Reading content: max-w-prose mx-auto

**Grid Strategy:**
- Desktop: 3-column for features, 2-column for products/team
- Tablet: 2-column maximum
- Mobile: Single column with generous padding

---

## Page Structure & Components

### Homepage
**Hero Section:**
- Full-width with large background image (see Images section)
- Height: 85vh on desktop, 70vh on mobile
- Centered content with company tagline and primary CTA
- Subtle overlay for text readability
- Primary CTA: "Learn About Our Technology" with blurred background
- Secondary element: "Trusted by Sleep Researchers" badge

**Company Mission Section:**
- Single column, max-w-4xl
- Large introductory paragraph about Somnicore's vision
- 3-column feature grid below: Apps, Hardware, Research (with icons from Heroicons)

**Product Overview:**
- 2-column layout alternating image/text
- Sleep Tracker App showcase
- Hardware Device showcase
- Each with benefit statements and specs

**Trust Indicators:**
- Single row with: "LLC Registered", "HIPAA Compliant", "Clinically Validated" badges
- Small icons with text labels

**CTA Section:**
- Centered, generous padding (py-24)
- "Join the Future of Sleep Wellness" headline
- Email signup form with privacy statement
- Contact button as alternative action

### About Page
**Company Story:**
- Hero-style introduction with founder background
- Timeline or milestone section showing company development
- Team section with photos and brief bios (2-3 columns)

**Mission & Values:**
- Large typography for mission statement
- 3-column grid for core values with icons
- Commitment to privacy and user health

### Products/Services Page
**Product Cards:**
- Featured product hero with large image and detailed specs
- Side-by-side comparison of app features and hardware capabilities
- Technical specifications in clean tables
- Integration capabilities (iOS, Android compatibility badges)

### Contact Page
**Two-Column Layout:**
- Left: Contact form (Name, Email, Company, Message)
- Right: Business information, office hours, mailing address
- Map integration placeholder comment
- Response time expectation statement

### Legal Pages (Privacy Policy, Terms of Service)
**Single Column, Max-Width Prose:**
- Clear hierarchical headings
- Dated "Last Updated" timestamp
- Section navigation for long documents
- Professional, readable formatting with ample line-height

---

## Component Library

**Navigation:**
- Fixed top navigation with logo left, links right
- Desktop: horizontal links (Home, About, Products, Contact)
- Mobile: hamburger menu with full-screen overlay
- Subtle bottom border or drop shadow on scroll

**Buttons:**
- Primary: Larger size, rounded-lg, bold text, px-8 py-4
- Secondary: Outlined style, same sizing
- Text links: Subtle underline on hover
- All buttons with blurred backgrounds when over images

**Cards:**
- Rounded-xl borders with subtle shadows
- Consistent padding (p-8)
- Hover state: gentle lift effect (translate-y)
- Image cards: aspect-ratio-square or 16:9

**Forms:**
- Rounded-lg inputs with focus states
- Generous padding (px-6 py-4)
- Clear label positioning above inputs
- Helper text below fields
- Error states with color indicators and icons

**Footer:**
- Three-column layout: Company Info, Quick Links, Newsletter Signup
- Social media icons (LinkedIn, Twitter)
- Copyright and legal links
- Company address and contact email
- "© 2024 Somnicore LLC. All rights reserved."

---

## Images

**Hero Image (Homepage):**
- Peaceful bedroom scene at twilight with soft, natural lighting
- Should convey calm, restful sleep environment
- Person peacefully sleeping with subtle tech device on nightstand
- Muted, sophisticated tones (not overly saturated)
- High quality, professional photography

**Product Images:**
- Sleep tracker app screenshots showing clean interface
- Hardware device professional product photography on neutral background
- Environmental shots of devices in use (bedside table, wrist-worn)
- Infographic-style visualizations of sleep data

**About Page:**
- Authentic team photos in professional but approachable setting
- Office environment photos showing R&D work
- Founder/leadership headshots with consistent styling

**Background Images:**
- Subtle gradient overlays or abstract wave patterns in sections
- Never distracting from content
- Used sparingly for visual interest in CTA sections

---

## Accessibility

- All interactive elements meet minimum 44x44px touch targets
- Color contrast ratios exceed WCAG AA standards
- Form inputs include visible labels and placeholders
- Focus states clearly visible with outline rings
- Semantic HTML structure for screen readers
- Skip navigation links for keyboard users

---

## Animations

**Minimal & Purposeful:**
- Smooth scroll behavior for anchor links
- Fade-in on scroll for section reveals (subtle, once)
- Gentle hover states on cards (lift effect)
- Button press states with subtle scale
- Navigation menu transitions (smooth slide/fade)

**Explicitly Avoid:** Parallax effects, infinite scrolling animations, distracting background movements

---

## Icon System

**Heroicons** (via CDN) - outline style for consistency
- Feature sections: beaker, device-mobile, chart-bar
- Trust badges: shield-check, clock, academic-cap
- Navigation: menu, x-mark, chevron-down
- Forms: envelope, phone, map-pin