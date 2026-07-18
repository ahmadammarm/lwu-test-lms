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

The codebase is organized to be DRY (Don't Repeat Yourself) and highly reusable:

- /app: Contains all the Next.js page routes (Login, Dashboard, Courses, Ebooks, History).
- /app/dashboard/layout.tsx: The main layout wrapper that includes the Sidebar and Header for all dashboard routes.
- /components/layout: Contains structural layout components like AppSidebar.tsx and Header.tsx.
- /components/ui: Contains reusable, unstyled UI components provided by Shadcn (Buttons, Cards, Inputs, Tables).
- /public: Stores static assets like the logo image.

## Approach Plan & System Design

Although this specific assignment only required the frontend implementation, below is a proposed system design and approach plan for building out the full-stack application. The design is kept practical, straightforward, and manageable for a small team or intern project.

### 1. Frontend Approach

The frontend is designed as a Single Page Application (SPA) utilizing Next.js Server Components where possible for performance, and Client Components where state (like search filtering) is needed.

State Management: 
Currently, React's local state (useState) is sufficient for handling search filters and UI toggles. If the app scales to require global state (e.g., user authentication data, global cart), a lightweight library like Zustand would be introduced.

### 2. Proposed Backend Architecture

To keep the stack unified and simple, the backend should be built using Next.js API Routes (Serverless Functions) or a simple Node.js + Express server. 

Tech Stack:
- Runtime: Node.js
- API Framework: Next.js Route Handlers (REST API)
- Database: PostgreSQL (Relational database is best for structured LMS data)
- ORM: Prisma (Provides excellent TypeScript integration and easy schema management)
- Authentication: NextAuth.js (For handling JWT sessions and OAuth if needed)

### 3. Database Schema Design

The relational database would consist of a few core tables to support the LMS:

- Users:
  - id (UUID, Primary Key)
  - email (String, Unique)
  - password_hash (String)
  - role (String: 'student' or 'admin')
  - created_at (DateTime)

- Courses:
  - id (UUID, Primary Key)
  - title (String)
  - description (Text)
  - instructor_name (String)
  - category (String)
  - total_modules (Integer)

- User_Courses (Many-to-Many tracking progress):
  - user_id (Foreign Key)
  - course_id (Foreign Key)
  - completed_modules (Integer)
  - progress_percentage (Integer)

- Transactions (Purchase History):
  - id (String, Primary Key e.g., 'INV-001')
  - user_id (Foreign Key)
  - item_name (String)
  - item_type (String: 'course' or 'ebook')
  - amount (Float)
  - status (String)
  - created_at (DateTime)

## Summary

This project demonstrates a clean, component-driven approach to frontend development. By leveraging a strict design system (Tailwind + Shadcn) and ensuring responsive design, the dashboard provides a premium user experience while maintaining a scalable codebase.
