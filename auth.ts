import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginAuthSchema } from "./app/validation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const parseCredentials = LoginAuthSchema.safeParse(credentials);

        if (!parseCredentials.success) {
          return null;
        }

        const { email, password } = parseCredentials.data;
        try {
          const login = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
          });

          if (!login.ok) {
            return null;
          }
          const response = await login.json();

          return {
            id: String(response.usuario.id),
            email: response.usuario.email,
            name: response.usuario.name,
            token: response.token,
          };
        } catch (error) {
          console.log(error);

          throw new Error("Error login user");
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token, trigger }) => {
      if (trigger === "signIn" && user) {
        token.id = user.id;
        token.token = user.token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.token = token.token as string;
      return session;
    },
  },
});
