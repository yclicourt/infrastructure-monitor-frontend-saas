"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export const authenticate = async (
  state: string | undefined,
  formData: FormData,
) => {
  try {
    return await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
