import type { Project } from "@/lib/types";

/**
 * Projects, ordered by strength (strongest first).
 * Follows the case study structure:
 * Overview -> Architecture -> Tech Stack -> Implementation -> Testing & Validation -> Security Considerations -> Limitations & Future Improvements
 */
export const projects: Project[] = [
  {
    slug: "financial-tracker",
    title: "AI-Powered Financial Receipt Tracker (n8n & Gemini AI)",
    originalName: "AI-Powered Financial Receipt Tracker (n8n & Gemini AI)",
    overview:
      "Automates financial tracking and receipt data entry from physical receipts, PDFs, and messaging channels using n8n workflow automation and Gemini AI multimodal vision extraction.",
    architecture:
      "Built using n8n to handle incoming WhatsApp and Telegram messages, orchestrate preprocessing pipelines, extract entities via Gemini AI, and synchronize validated records with a PostgreSQL database and React/Next.js dashboard.",
    stack: ["n8n", "Gemini AI", "PostgreSQL", "Next.js", "Tailwind CSS", "REST API"],
    implementation: [
      "Configured n8n webhook nodes to capture multi-channel receipts and invoice documents automatically",
      "Engineered structured zero-shot prompts for Gemini AI to parse merchant, transaction date, category, tax, and amounts",
      "Built a human-in-the-loop review interface for verifying, editing, and confirming extracted transaction records",
      "Developed a visual analytics dashboard with charts showing financial trends, expense distribution, and temporal patterns",
    ],
    testingValidation: [
      "Tested extraction precision across 50+ diverse receipt formats (scanned paper, photos, digital PDF invoices), achieving reliable extraction accuracy",
      "Implemented database transactions and rollback mechanisms to ensure atomicity, data consistency, and zero duplicate ledger entries",
    ],
    securityConsiderations: [
      "Protected webhook endpoints with authentication headers and rate limiting to prevent unauthorized request spamming",
      "Encrypted API keys and database credentials in secure environment variables with least-privilege access controls",
      "Sanitized and validated all extracted transaction payloads before database persistence to prevent injection attacks",
    ],
    limitationsFutureImprovements: [
      "Integrate WhatsApp API for automatic notifications of deposit details and balance withdrawal status to users' phones in real-time",
      "Support automated multi-currency conversion and multi-page bulk PDF receipt batching",
    ],
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
    overview:
      "Automates collection and sentiment analysis of customer feedback from WhatsApp messages and digital forms, eliminating slow manual processing and enabling rapid response to customer issues.",
    architecture:
      "Built using Langflow visual flow orchestration to process incoming WhatsApp messages, run text preprocessing, classify sentiment via Gemini AI, and serve categorized feedback to a React analytics frontend.",
    stack: ["Langflow", "Gemini AI", "React", "Next.js", "Tailwind CSS", "REST API"],
    implementation: [
      "Integrated WhatsApp message processing with automated text preprocessing and sentiment classification pipelines",
      "Implemented structured LLM categorization into positive, neutral, negative, and urgent sentiment classes",
      "Developed an intuitive user interface for manual review, editing, and confirmation of sentiment tags",
      "Designed a visual analytics dashboard displaying customer satisfaction trends, issue categories, and temporal feedback distribution",
    ],
    testingValidation: [
      "Evaluated sentiment classification across multi-lingual feedback datasets to maximize sentiment detection accuracy",
      "Validated real-time processing throughput to ensure incoming feedback was categorized within sub-second response times",
    ],
    securityConsiderations: [
      "Masked customer phone numbers and sensitive personal data before forwarding messages to LLM processing",
      "Secured API endpoints with CORS restrictions and token-based authentication on management routes",
    ],
    limitationsFutureImprovements: [
      "Optimize data processing and visualization for large volumes of historical feedback data",
      "Add automated AI draft replies to help support agents address negative feedback promptly",
    ],
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
    overview:
      "A centralized home automation and task coordination infrastructure that streamlines household management across platforms, minimizing manual coordination and scheduling effort.",
    architecture:
      "Built on Python, Hermes AI agent framework, and 9routers message routing layer, with a responsive web interface and a secure REST API connecting Hermes with Supabase.",
    stack: ["Python", "Hermes", "9routers", "Supabase", "REST API", "Docker"],
    implementation: [
      "Built a high-performance REST API to connect the Hermes agent framework with Supabase for seamless persistent data flow",
      "Developed a mobile-first user interface for managing household tasks, grocery lists, and scheduling needs",
      "Integrated Hermes for Telegram messaging and notification processing with conversational command parsing",
      "Configured automated background routines for task reminders and priority alerts",
    ],
    testingValidation: [
      "Tested concurrent task updates across devices to prevent race conditions and maintain state integrity",
      "Implemented database transactions and comprehensive error handling routines to ensure system reliability under network interruptions",
    ],
    securityConsiderations: [
      "Enforced cryptographic signature checks for incoming webhook triggers and role-based Supabase security policies",
      "Isolated agent execution environments using containerization and strict environment variable secrets management",
    ],
    limitationsFutureImprovements: [
      "Enhance AI capabilities for advanced natural language understanding and multi-step complex task planning",
      "Add local offline execution mode for critical home controls during internet outages",
    ],
    liveUrl: "https://evasalon.up.railway.app/",
    githubUrl: "https://github.com/fathurrahmanrifaldi/eva-salon",
    youtubeUrl: "https://youtu.be/w0Wcuf8xQ3c",
    image: "/projects/ubuntu-img.png",
    imageAlt: "Screenshot of the Eva Salon booking website",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
