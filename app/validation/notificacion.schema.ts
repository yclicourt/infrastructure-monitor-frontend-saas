import { z } from "zod";
import { NotificationType } from "./enums/notification-type.enum";
import { NotificationStatus } from "./enums/notification-status.enum";

const NotificationSchema = z.object({
  id: z.coerce.number(),
  organizationId: z.coerce.number(),
  incidentId: z.coerce.number(),
  notificationType: z.enum(NotificationType, {
    error: "Notification type invalid",
  }),
  recipient: z
    .string()
    .min(2, "The recipient must contain at least 2 characters")
    .max(50, "The recipient is too long")
    .trim(),
  notificationStatus: z.enum(NotificationStatus, {
    error: "Notification status invalid",
  }),
  sentAt: z.coerce.date().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateNotificationSchema = NotificationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateNotificationSchema = CreateNotificationSchema.partial();

export type CreateNotificationDto = z.infer<typeof CreateNotificationSchema>;

export type UpdateNotificationDto = z.infer<typeof UpdateNotificationSchema>;
