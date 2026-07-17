import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "LaslesVPN — Want anything to be easy",
  description:
    "LaslesVPN provides a private virtual network that has unique features and high security. Get started today.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
