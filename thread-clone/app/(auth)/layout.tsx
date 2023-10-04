import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A replica Meta Thread Application built with Next.js",
};

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
