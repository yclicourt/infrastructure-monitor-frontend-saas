import { z } from "zod";
import { UserStatus } from "./enums/user-status.enum";

const UserSchema = z.object({
  id: z.coerce.number(),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, "The email is too short")
    .max(255, "The email is too long")
    .refine((email) => !email.endsWith(".temp"), {
      message: "Temporary emails are not allowed",
    }),
  password: z
    .string()
    .trim()
    .min(5, "The name must contain at least 5 characters")
    .max(255, "The password is too long"),
  name: z
    .string()
    .min(2, "The name must contain at least 2 characters")
    .max(50, "The name is too long")
    .trim(),
  userStatus: z.enum(UserStatus, {
    error: "User status invalid",
  }),
  lastLogin: z.coerce.date().optional(),
  resetToken: z.string().optional(),
  resetTokenExpiry: z.coerce.date().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

// Create UserSchema
export const CreateUserSchema = UserSchema.omit({
  id: true,
  lastLogin: true,
  resetToken: true,
  userStatus: true,
  resetTokenExpiry: true,
  createdAt: true,
  updatedAt: true,
});

// Update UserSchema
export const UpdateUserSchema = CreateUserSchema.partial();

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;

// AuthSchema
export const AuthUserSchema = UserSchema.omit({
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true,
});

export type AuthUserDto = z.infer<typeof AuthUserSchema>;

// LoginAuth
export const LoginAuthSchema = UserSchema.omit({
  id: true,
  name: true,
  userStatus: true,
  lastLogin: true,
  resetToken: true,
  resetTokenExpiry: true,
  createdAt: true,
  updatedAt: true,
});

export type LoginAuthDto = z.infer<typeof LoginAuthSchema>;

// ForgotPassword
export const ForgotPasswordUserSchema = UserSchema.omit({
  id: true,
  name: true,
  password: true,
  userStatus: true,
  lastLogin: true,
  resetToken: true,
  resetTokenExpiry: true,
  createdAt: true,
  updatedAt: true,
});
export type ForgotPasswordDto = z.infer<typeof ForgotPasswordUserSchema>;
