import { z } from 'zod';
import { Role } from './enums/role-member.enum';

const MembershipSchema = z.object({
  id: z.coerce.number(),
  userId: z.coerce.number(),
  organizationId: z.coerce.number(),
  role: z.preprocess(
    (val) => {
      if (Array.isArray(val)) return val;
      if (typeof val === 'string') return [val];
      return undefined;
    },
    z.array(z.enum(Role)),
  ),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateMembershipSchema = MembershipSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export const UpdateMembershipSchema = CreateMembershipSchema.partial();

export type CreateMembershipDto = z.infer<typeof CreateMembershipSchema>;

export type UpdateMembershipDto = z.infer<typeof UpdateMembershipSchema>;
