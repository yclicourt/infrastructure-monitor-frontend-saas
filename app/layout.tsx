import type { Metadata } from "next";
import "./ui/globals.css";
import { ReactNode } from "react";
import { roboto } from "./ui/font";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Infrastructure Monitoring Saas",
  description: "Infrastructure Monitoring Saas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <body className={`${roboto.className} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
