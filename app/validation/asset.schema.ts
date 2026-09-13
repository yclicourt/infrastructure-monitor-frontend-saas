import { z } from "zod";
import { TypeAsset } from "./enums/asset-type.enum";
import { ServiceType } from "./enums/service-type.enum";

const AssetSchema = z.object({
  id: z.coerce.number(),
  organizationId: z.coerce.number(),
  clientId: z.coerce.number().nullable(),
  name: z
    .string()
    .min(2, "The name must contain at least 2 characters")
    .max(50, "The name is too long")
    .trim(),
  typeAsset: z.enum(TypeAsset, {
    error: "Type asset invalid",
  }),
  serviceType: z.enum(ServiceType, {
    error: "Service type invalid",
  }),
  technology: z
    .string()
    .min(2, "The technology must contain at least 2 characters")
    .max(50, "The technology is too long")
    .nullable(),
  hostname: z
    .string()
    .min(2, "The hostname must contain at least 2 characters")
    .max(50, "The hostname is too long")
    .nullable(),
  ipAddress: z
    .string()
    .min(2, "The ipAddress must contain at least 2 characters")
    .max(50, "The ipAddress is too long")
    .nullable(),
  url: z
    .string()
    .min(2, "The url must contain at least 2 characters")
    .max(50, "The url is too long")
    .nullable(),
  environment: z
    .string()
    .min(2, "The environment must contain at least 2 characters")
    .max(50, "The environment is too long")
    .nullable(),
  description: z
    .string()
    .min(2, "The description must contain at least 2 characters")
    .max(100, "The description is too long")
    .nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateAssetSchema = AssetSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateAssetSchema = CreateAssetSchema.partial();

export type CreateAssetDto = z.infer<typeof CreateAssetSchema>;

export type UpdateAssetDto = z.infer<typeof UpdateAssetSchema>;
