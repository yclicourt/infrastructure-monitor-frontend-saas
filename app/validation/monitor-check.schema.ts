import { z } from "zod";
import { MonitorStatus } from "./enums/status-monitor.enum";

const MonitorCheckSchema = z.object({
  id: z.coerce.number(),
  monitorId: z.coerce.number(),
  status: z.enum(MonitorStatus, {
    error: "Monitor status invalid",
  }),
  statusCode: z.coerce.number().optional(),
  responseTimeMS: z.coerce.number().optional(),
  errorMessage: z
    .string()
    .min(2, "The errorMessage must contain at least 2 characters")
    .max(100, "The errorMessage is too long")
    .optional(),
  checkedAt: z.coerce.date(),
});

export const CreateMonitorCheckSchema = MonitorCheckSchema.omit({
  id: true,
});

export const UpdateMonitorCheckSchema = CreateMonitorCheckSchema.partial();

export type CreateMonitorCheckDto = z.infer<typeof CreateMonitorCheckSchema>;

export type UpdateMonitorCheckDto = z.infer<typeof UpdateMonitorCheckSchema>;
