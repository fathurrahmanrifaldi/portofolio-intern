import type { Project } from "@/lib/types";

/**
 * Projects, ordered by strength (strongest first).
 * Fill every "[TODO: ...]" string. Follow the order problem -> your contribution -> tech -> outcome.
 * To add a screenshot: put the file in /public/projects/ and set `image: "/projects/<file>.png"`.
 */
export const projects: Project[] = [    
  {
    slug: "financial-tracker",
    title: "AI-Powered Financial Receipt Tracker (n8n & Gemini AI)",
    originalName: "AI-Powered Financial Receipt Tracker (n8n & Gemini AI)",
    problem: "Financial tracking still relies on manual entry from physical receipts and PDF files, which is time-consuming, error-prone, and inefficient for businesses needing real-time financial insights.",
    role: "Fullstack Developer",
    stack: ["Laravel, Tailwind CSS, MySQL"],
    features: [
      "Recording multi-item waste deposits in a single dynamic form",
      "Decision support system for determining the best customers",
      "Citizen Self-Service Portal & Interactive Financial Dashboard",
    ],
    outcome: "Eliminated paper-based accounting, accelerated monthly report summarization from hours to seconds, and improved transparency of customer balances.",
    architecture:
      "Built using a monolithic Model-View-Controller (MVC) architecture with a layered approach and implements Role-Based Access Control (RBAC) to manage three access levels: Super Admin, Staff, and Customers through custom route middleware. The system also features an analytics module for periodic financial summaries, graphical visualization using Chart.js, and decision matrix calculations using the Simple Additive Weighting (SAW) method.",
    challenges: [
      {
        challenge: "Risk of balance inconsistency and data corruption during multi-table transaction recording",
        solution: "Implemented database transactions and rollback mechanisms to ensure atomicity and consistency of multi-table operations.",
      },
    ],
    nextSteps: ["Integrate WhatsApp API for automatic notifications of deposit details and balance withdrawal status to residents' phones in real-time"],
    liveUrl: "https://basara.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/BASARA",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/projects/basara-photo.png",
    imageAlt: "Screenshot of the BASARA waste bank system dashboard",
  },
  {
    slug: "home-ai-agent",
    title: "Management System for Grocery Store Inventory (SIMETRIS)",
    originalName: "Sistem Manajemen Inventaris (SIMETRIS) Warung Sembako Ibu Trisna",
    problem: "Inventory management at Warung Sembako Ibu Trisna is still done manually, leading to stock discrepancies and inefficient sales tracking",
    role: "Fullstack Web Developer",
    stack: ["React, Supabase, Tailwind CSS, PostgreSQL"],
    features: [
      "Recording of incoming and outgoing goods, complete with automatic balances",
      "Tracking the receipt and expiration dates for each batch",
      "Reconciliation of physical counts versus system records, including deviation calculations.",
    ],
    outcome: "Improved operational efficiency at the grocery store, reduced recording errors, and provided better visibility into stock conditions.",
    architecture:"Architecture based on React 19, TypeScript, Vite, and Tailwind CSS v4, featuring a responsive interface and modular components. The data layer uses SimetrisStore with a hybrid architecture that supports Supabase/PostgreSQL for cloud operations and local storage as a fallback. Data security and integrity are maintained through authentication, RLS, RBAC, atomic database procedures, audit logs, and a FEFO mechanism for inventory management.",
    challenges: [
      {
        challenge: "Preventing Race Conditions and Negative Stock in Concurrent Mutations",
        solution: "Implemented optimistic concurrency control and database-level constraints to ensure that stock levels cannot go negative, even when multiple users are updating inventory simultaneously.",
      },
    ],
    nextSteps: ["Memanfaatkan *HTML5 / BarcodeDetector Web API* langsung dari kamera smartphone untuk memindai kode batang sembako"],
    liveUrl: "https://simetrisku.vercel.app",
    githubUrl: "https://github.com/fathurrahmanrifaldi/simetris",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/projects/simetris.png",
    imageAlt: "Screenshot of the Warung Ibu Trisna inventory system",
  },
  {
    slug: "customer-feedback-sentiment-analyzer",
    title: "Eva Salon Booking Website",
    originalName: "Website Booking Eva Salon",
    problem: "Schedule and booking management at Eva Salon is still done manually and is prone to errors",
    role: "Fullstack Web Developer",
    stack: ["Laravel, Tailwind CSS, MySQL"],
    features: [
      "Online booking system with an interactive calendar",
      "Automatic notifications to customers and staff",
      "Admin dashboard for managing schedules and transactions",
    ],
    outcome: "Improved operational efficiency at the salon, reduced manual queuing, and enhanced customer experience.",
    architecture: "The application uses a Layered Clean MVC + Service Layer architecture, with the Controller handling HTTP requests and the Service Layer managing the core business logic, including slot availability calculations, booking management, and automated staff allocation.",
    challenges: [
      {
        challenge: "Potential deadlock when multiple staff members try to book the same time slot simultaneously",
        solution: "Implemented database-level locking and transaction management to ensure that only one booking can be made for a specific time slot at any given moment.",
      },
    ],
    nextSteps: ["Integrate a payment gateway for online payments and implement a loyalty program for frequent customers."],
    liveUrl: "https://evasalon.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/eva-salon",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/projects/evasalon-photo.png",
    imageAlt: "Screenshot of the Eva Salon booking website",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
