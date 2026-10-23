import { z } from "zod";

/** Shared by the contact form (client) and the API route (server). */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name (at least 2 characters).")
    .max(80, "Keep your name under 80 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters.")
    .max(2000, "Keep your message under 2000 characters."),
  /** Honeypot. Real users never see or fill this field. */
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<"name" | "email" | "message", string[]>>;
