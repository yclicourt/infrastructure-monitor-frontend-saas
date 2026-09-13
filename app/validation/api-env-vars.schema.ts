import { z } from "zod";

const ApiEnvVarsSchema = z.object({
  BACKEND_URL: z.string(),
  NEXT_PUBLIC_BACKEND_URL: z.string(),
});

export const GetApiEnvVars = ApiEnvVarsSchema;

export type ApiEnvVars = z.infer<typeof GetApiEnvVars>;
