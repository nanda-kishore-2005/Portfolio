import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Nanda Kishore Manne | Full-Stack Web Developer",
  description: "Portfolio of Nanda Kishore Manne - Full-Stack Web Developer, Node.js, Web3, MongoDB, Innovation Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
