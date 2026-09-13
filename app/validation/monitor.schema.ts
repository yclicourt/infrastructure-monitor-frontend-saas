import { z } from "zod";
import { MonitorType } from "./enums/monitor-type.enum";
import { MonitorStatus } from "./enums/status-monitor.enum";

const MonitorSchema = z.object({
  id: z.coerce.number(),
  organizationId: z.coerce.number(),
  assetId: z.coerce.number(),
  name: z
    .string()
    .min(2, "The name must contain at least 2 characters")
    .max(50, "The name is too long")
    .trim(),
  monitorType: z.enum(MonitorType, {
    error: "Monitor type invalid",
  }),
  target: z
    .string()
    .min(2, "The target must contain at least 2 characters")
    .max(20, "The target is too long"),
  intervalSeconds: z.coerce.number(),
  timeoutSeconds: z.coerce.number(),
  monitorStatus: z.enum(MonitorStatus, {
    error: "Monitor status invalid",
  }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateMonitorSchema = MonitorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateMonitorSchema = CreateMonitorSchema.partial();

export type CreateMonitorDto = z.infer<typeof CreateMonitorSchema>;

export type UpdateMonitorDto = z.infer<typeof UpdateMonitorSchema>;
