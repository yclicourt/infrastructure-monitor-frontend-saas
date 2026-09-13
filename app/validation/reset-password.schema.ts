import { z } from 'zod';

const ResetPasswordUserSchema = z.object({
  token: z.string(),
  newPassword: z
    .string()
    .trim()
    .min(5, 'The name must contain at least 5 characters')
    .max(255, 'The password is too long'),
});

export const ResetPasswordUser = ResetPasswordUserSchema;

export type ResetPasswordDto = z.infer<typeof ResetPasswordUser>;
