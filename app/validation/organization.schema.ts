import { z } from "zod";

const OrganizationSchema = z.object({
  id: z.coerce.number(),
  name: z
    .string()
    .min(2, "The name must contain at least 2 characters")
    .max(50, "The name is too long")
    .trim(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateOrganizationSchema = OrganizationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateOrganizationSchema = CreateOrganizationSchema.partial();

export type CreateOrganizationDto = z.infer<typeof CreateOrganizationSchema>;

export type UpdateOrganizationDto = z.infer<typeof UpdateOrganizationSchema>;
