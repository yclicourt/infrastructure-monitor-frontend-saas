import { z } from 'zod';
import { StatusComercial } from './enums/status-comercial.enum';

const ClientSchema = z.object({
  id: z.coerce.number(),
  organizationId: z.coerce.number(),
  name: z
    .string()
    .min(2, 'The name must contain at least 2 characters')
    .max(50, 'The name is too long')
    .trim(),
  description: z
    .string()
    .min(2, 'The description must contain at least 2 characters')
    .max(100, 'The description is too long')
    .trim()
    .optional(),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, 'The email is too short')
    .max(255, 'The email is too long')
    .refine((email) => !email.endsWith('.temp'), {
      message: 'Temporary emails are not allowed',
    })
    .optional(),
  phone: z
    .string()
    .transform((val) => val.replace(/\s+/g, ''))
    .pipe(
      z
        .string()
        .regex(
          /^\+?[1-9]\d{1,14}$/,
          'Invalid telephone number (uses E.164 format, e.g.: +34000000000)',
        ),
    )
    .optional(),
  statusComercial: z.enum(StatusComercial, {
    error: 'Status comercial invalid',
  }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateClientSchema = ClientSchema.omit({
  id: true,
  statusComercial: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateClientSchema = ClientSchema.partial();

export type CreateClientDto = z.infer<typeof CreateClientSchema>;

export type UpdateClientDto = z.infer<typeof UpdateClientSchema>;
