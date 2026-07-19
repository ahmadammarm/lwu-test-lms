# Learning With Us - LMS Dashboard

This repository contains the frontend implementation for the Learning With Us (LWU) Learning Management System (LMS) dashboard. This project was developed as part of the Web Developer Internship take-home test.

The goal of this project is to build a responsive, aesthetic, and functional dashboard for the "Student" role, allowing users to track their learning progress, browse courses and ebooks, and view their purchase history.

## Tech Stack

The application is built using modern frontend technologies optimized for rapid development and clean maintainability:

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- UI Components: Shadcn UI (Radix UI primitives)
- Icons: Lucide React

## Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm package manager

### Installation

1. Clone the repository or extract the project folder.
2. Navigate into the project directory:
   cd lwu-test-lms
3. Install the dependencies:
   pnpm install
4. Start the development server:
   pnpm run dev
5. Open your browser and navigate to http://localhost:3000 to view the application.

## Application Structure

The codebase is strictly organized following a feature-based Component-Driven Architecture to be extremely DRY (Don't Repeat Yourself) and scalable:

- `/app`: Contains all the Next.js page routes. Page files are kept thin, acting only as containers for state management and layout assembly.
- `/components/shared`: Contains global reusable components used across multiple pages (e.g., `PageHeader.tsx`, `SearchInput.tsx`, `EmptyState.tsx`).
- `/components/features`: Contains modularized UI components grouped by specific domain/page logic (e.g., `courses`, `ebooks`, `history`).
- `/components/layout`: Contains structural layout components like `AppSidebar.tsx` and `Header.tsx`.
- `/components/ui`: Contains reusable, accessible UI primitives provided by Shadcn (Buttons, Cards, Inputs, Tables).
- `/lib/mock-data.ts`: Centralized store for all application mock data, simulating a backend database.

## System Design & Architecture

A complete End-to-End (E2E) System Design plan has been documented to demonstrate the proposed architecture for expanding this project into a full-stack production application.

The design covers:
1. **Application Layer**: Unified frontend and backend using Next.js SSR and Server Actions.
2. **Database Layer**: PostgreSQL optimization, Indexing, Eager Loading, and Singleton Connection Pooling.
3. **Authentication**: Stateless JWT via NextAuth.js.
4. **Caching Layer**: Hybrid caching strategy using Next.js Data Cache and React Query.

👉 **[Read the Full System Design Document here](./docs/system-design-plan.md)**

## Summary

This project demonstrates a clean, component-driven approach to frontend development. By leveraging a strict design system (Tailwind + Shadcn) and ensuring responsive design, the dashboard provides a premium user experience while maintaining a scalable codebase.
