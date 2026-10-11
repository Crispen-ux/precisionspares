import { z } from "zod";

export const URGENCY = ["down", "week", "planning"] as const;
export type Urgency = (typeof URGENCY)[number];

export const URGENCY_LABEL: Record<Urgency, string> = {
  down: "Machine is down",
  week: "Needed this week",
  planning: "Planning or budget quote",
};

const phone = z
  .string()
  .trim()
  .min(1, "Enter a phone number we can reach you on")
  .refine((v) => (v.match(/\d/g) ?? []).length >= 9, {
    message: "Enter a valid phone number, for example 061 548 4573",
  })
  .refine((v) => /^[\d+\s()-]+$/.test(v), {
    message: "Use digits only, for example 061 548 4573",
  });

export const stepOneSchema = z.object({
  part: z
    .string()
    .trim()
    .min(3, "Enter a part number or a short description")
    .max(2000),
  brand: z.string().trim().max(60).optional().default(""),
  urgency: z.enum(URGENCY, { message: "Choose how urgent this is" }),
});

export const stepTwoSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(120),
  company: z.string().trim().max(160).optional().default(""),
  phone,
  email: z
    .string()
    .trim()
    .max(200)
    .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
      message: "Enter a valid email address or leave it blank",
    })
    .optional()
    .default(""),
  notes: z.string().trim().max(4000).optional().default(""),
});

export const leadSchema = stepOneSchema.extend(stepTwoSchema.shape).extend({
  topic: z.string().trim().max(120).optional().default(""),
  page: z.string().trim().max(300).optional().default(""),
  referrer: z.string().trim().max(500).optional().default(""),
  utm: z.record(z.string(), z.string().max(200)).optional().default({}),
  /** honeypot: real users never fill this */
  website: z.string().optional().default(""),
  /** ms timestamp when the form was first shown, used as a speed trap */
  startedAt: z.number().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
