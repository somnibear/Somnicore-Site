# Somnicore Sleep Wellness Website

## Overview

This is a marketing website for Somnicore LLC, a sleep wellness technology company developing mobile applications and wearable devices for sleep tracking. The site showcases their products, company information, and provides contact forms for potential customers and partners. Built as a static React application optimized for GitHub Pages deployment, with a focus on professional presentation and trust-building for a health technology startup. The site is designed to support developer account applications with Apple and Google.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React with TypeScript for component-based UI development
- Wouter with hash-based routing for GitHub Pages compatibility
- Hash URLs (/#/about, /#/products) work seamlessly with static hosting
- Vite as the build tool and development server

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library following the "New York" style variant
- Tailwind CSS for utility-first styling with custom design system
- Class Variance Authority (CVA) for component variant management

**Design System**
- Custom color scheme using CSS custom properties (HSL-based)
- Apple Human Interface Guidelines-inspired design philosophy
- Typography: Inter (body) and Space Grotesk (headings) from Google Fonts
- Responsive breakpoints with mobile-first approach
- Elevation system using opacity-based hover/active states

**State Management**
- TanStack Query (React Query) for server state and data fetching
- Local component state with React hooks
- Form handling via React Hook Form with Zod validation

**Page Structure**
- Home: Hero section with product overview and features
- About: Company mission and values
- Products: Detailed product showcase (mobile apps and wearable devices)
- Contact: Contact form for inquiries
- Privacy & Terms: Legal documentation pages
- 404: Custom not-found page

### Deployment Architecture

**Static Site Configuration**
- GitHub Pages optimized with hash-based routing
- Automated deployment via GitHub Actions workflow
- Conditional base path configuration for user/org vs project pages
- `.nojekyll` file prevents Jekyll processing

**Development Environment**
- Express.js server for local development (not used in production)
- Vite dev server with HMR
- Development setup in `server/` directory (not deployed)

**Build Process**
- Production build creates static files in `dist/public`
- Automatic base path detection in CI/CD workflow
- All assets bundled and optimized by Vite
- No backend server required in production

**Deployment Options**
1. **Automated** (recommended): GitHub Actions workflow deploys on push to main
2. **Manual**: Build locally and push to gh-pages branch
3. See `DEPLOYMENT.md` for detailed instructions

### External Dependencies

**UI Component Libraries**
- @radix-ui/* family: 25+ accessible component primitives
- lucide-react: Icon library
- embla-carousel-react: Carousel/slider functionality
- cmdk: Command menu/palette component
- react-day-picker: Date selection
- recharts: Chart/graph rendering capability

**Development Tools**
- @replit/vite-plugin-*: Replit-specific development tooling
- esbuild: Fast JavaScript bundler for production server build
- tsx: TypeScript execution for development server
- autoprefixer & postcss: CSS processing

**Utilities**
- clsx & tailwind-merge: Conditional class name handling
- date-fns: Date manipulation
- nanoid: Unique ID generation
- wouter: Lightweight routing

**Type Safety**
- TypeScript across entire stack
- Drizzle-Zod for schema-to-validation bridge
- @hookform/resolvers for form validation integration

**External Services**
- Google Fonts: Typography (Inter, Space Grotesk, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- Neon Database: PostgreSQL hosting (configured but optional)
- Potential future integrations: Apple Health, Google Fit (mentioned in product features)