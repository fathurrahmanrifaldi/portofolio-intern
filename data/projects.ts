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
    role: "AI Automation Engineer",
    stack: ["n8n", "Gemini AI"],
    features: [
      "Extracting and classifying data from incoming Telegram messages with Gemini AI and text preprocessing",
      "User interface for manual review, editing, and confirmation of extracted data",
      "Visual analytics dashboard with charts showing financial trends, distribution, and temporal patterns",
    ],
    outcome: "Automated 100% of the financial data extraction process, reducing manual data entry, improved data accuracy, and accelerated financial reporting timelines.",
    architecture:
      "Built using n8n to handle incoming WhatsApp messages and process data using Gemini AI, with a React frontend for user interaction and data visualization.",
    challenges: [
      {
        challenge: "Data consistency and accuracy in transaction processing",
        solution: "Implemented database transactions and rollback mechanisms to ensure atomicity and consistency of multi-table operations.",
      },
    ],
    nextSteps: ["Integrate WhatsApp API for automatic notifications of deposit details and balance withdrawal status to residents' phones in real-time"],
    liveUrl: "https://basara.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/BASARA",
    youtubeUrl: "https://youtu.be/tdfvKeiZTXs",
    image: "/projects/financial-tracker.png",
    imageAlt: "Screenshot of Financial-Tracker",
  },
  {
    slug: "customer-feedback-sentiment-analyzer",
    title: "Customer Feedback Sentiment Analyzer",
    originalName: "Customer Feedback Sentiment Analyzer",
    problem: "Unstructured and manual collection of customer feedback from WhatsApp messages and physical forms leads to slow processing and delayed response to service issues.",
    role: "AI Automation Engineer",
    stack: ["Langflow, LLM Gemini"],
    features: [
      "Integrated WhatsApp message processing with text preprocessing and sentiment classification",
      "User interface for manual review, editing, and confirmation of sentiment tags",
      "Visual analytics dashboard with charts showing sentiment trends, distribution, and temporal patterns",
    ],
    outcome: "Increased efficiency in monitoring customer feedback, improved accuracy in sentiment classification, and provided better insights into customer satisfaction levels.",
    architecture: "Built using Langflow to handle incoming WhatsApp messages and process data using Gemini AI, with a React frontend for user interaction and data visualization.",
    challenges: [
      {
        challenge: "Unstructured and manual collection of customer feedback from WhatsApp messages and physical forms leads to slow processing and delayed response to service issues",
        solution: "Integrate WhatsApp message processing with text preprocessing and sentiment classification"
      },
    ],
    nextSteps: ["Optimized data processing and visualization for large volumes of feedback data"],
    liveUrl: "https://simetrisku.vercel.app",
    githubUrl: "https://github.com/fathurrahmanrifaldi/simetris",
    youtubeUrl: "https://youtu.be/lSwo2c6EABI",
    image: "/projects/customer-analyzer.png",
    imageAlt: "Screenshot of the Customer Feedback Sentiment Analyzer",
  },
  {
    slug: "home-ai-agent",
    title: "Home AI Agent Infrastructure",
    originalName: "Home AI Agent Infrastructure",
    problem: "Currently, managing household needs and tasks remains inefficient and scattered across various platforms and manual systems, leading to time loss and difficulty in coordination.",
    role: "System Architect",
    stack: ["Python, Hermes, 9routers, REST API"],
    features: [
      "Built a REST API to connect Hermes with Supabase for seamless data flow",
      "Developed a mobile-first user interface for managing household needs and tasks",
      "Integrated Hermes for Telegram messages and notifications processing",
    ],
    outcome: "Minimized time for household management, increased coordination efficiency, and reduced daily task management effort.",
    architecture: "Built on Python, Hermes, and 9routers, with a responsive user interface for managing household needs and tasks and an API layer connecting Hermes with Supabase.",
    challenges: [
      {
        challenge: "Managing concurrent task updates and ensuring data consistency across distributed systems",
        solution: "Implemented a robust REST API with proper error handling and transaction management to ensure data integrity and reliability.",
      },
    ],
    nextSteps: ["Enhance AI capabilities for natural language understanding and task automation"],
    liveUrl: "https://evasalon.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/eva-salon",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/projects/ubuntu-img.png",
    imageAlt: "Screenshot of the Eva Salon booking website",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
