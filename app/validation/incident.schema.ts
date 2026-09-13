import { z } from "zod";
import { IncidentStatus } from "./enums/incident-status.enum";

const IncidentSchema = z.object({
  id: z.coerce.number(),
  organizationId: z.coerce.number(),
  monitorId: z.coerce.number(),
  incidentStatus: z.enum(IncidentStatus, {
    error: "Incident status invalid",
  }),
  startedAt: z.coerce.date(),
  resolvedAt: z.coerce.date().optional(),
  title: z
    .string()
    .min(2, "The title must contain at least 2 characters")
    .max(50, "The title is too long")
    .trim(),
  description: z
    .string()
    .min(2, "The description must contain at least 2 characters")
    .max(100, "The description is too long")
    .trim()
    .optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateIncidentSchema = IncidentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateIncidentSchema = IncidentSchema.partial();

export type CreateIncidentDto = z.infer<typeof CreateIncidentSchema>;

export type UpdateIncidentDto = z.infer<typeof UpdateIncidentSchema>;
