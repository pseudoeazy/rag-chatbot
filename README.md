# Archivist – Next.js Frontend

Archivist is the frontend for a Retrieval-Augmented Generation (RAG) demo application built with **Next.js**. It allows users to authenticate with Google using Supabase, upload documents for ingestion, ask questions about those documents, and receive AI-generated answers from the NestJS backend.

## Features

- Google authentication with Supabase
- Client-side authentication using an `AuthProvider`
- PDF document upload
- AI-powered question answering
- Streaming responses
- Responsive UI built with Next.js and React
- Communicates with the NestJS backend via REST APIs

## Tech Stack

- Next.js 15
- React
- TypeScript
- Supabase Authentication
- Tailwind CSS
- shadcn/ui

## Prerequisites

- Node.js 20+
- Running NestJS backend
- Supabase project with Google OAuth configured

## Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3001
```

## Authentication

Authentication is handled by Supabase using **Google OAuth**.

After a successful login:

- The authenticated user is stored in the `AuthProvider`.
- The Supabase access token is attached to authenticated requests.
- The NestJS backend validates the JWT before serving protected endpoints.

## Backend

This application depends on the NestJS API.

Ensure the backend is running before starting the frontend.

Default API base URL:

```
http://localhost:3001/api
```

## Project Structure

```text
src/
├── app/
├── components/
├── lib/
└── providers/
```

## Available Scripts

```bash
npm run dev       # Start development server

npm run build     # Build production application

npm run start     # Start production server

npm run lint      # Run ESLint
```

## Demo Notes

This project is intended as a demonstration of a RAG workflow.

During sign-out, the backend removes uploaded demo documents while preserving the default sample document (`RAG_Test_Document.pdf`) so the application always contains a document that can be queried after a fresh login.

## License

This project is provided for demonstration and educational purposes.
