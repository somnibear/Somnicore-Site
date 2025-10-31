# Somnicore Sleep Wellness Website

## Overview

This is a marketing website for Somnicore LLC, a sleep wellness technology company developing mobile applications and wearable devices for sleep tracking. The site showcases their products, company information, and provides contact forms for potential customers and partners. Built as a full-stack web application using React on the frontend and Express on the backend, with a focus on professional presentation and trust-building for a health technology startup.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React with TypeScript for component-based UI development
- Wouter for client-side routing (lightweight alternative to React Router)
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

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- TypeScript for type safety across the stack
- Custom middleware for request logging and JSON parsing with raw body preservation

**Development Setup**
- Vite middleware integration for HMR in development
- SSR-ready architecture with template rendering capability
- Separate build processes for client and server code

**Storage Interface**
- Abstracted storage interface (IStorage) for database operations
- In-memory storage implementation (MemStorage) as default
- User CRUD operations defined in storage contract
- Designed for easy migration to persistent database (Drizzle ORM ready)

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema definition using Drizzle's type-safe API
- Migration support with drizzle-kit
- Zod integration for runtime schema validation

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Schema exports typed Insert/Select models for type safety

**Note on Database**
- Configuration present but database not actively used in current implementation
- In-memory storage currently handles any data persistence needs
- Infrastructure ready for database integration when needed

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