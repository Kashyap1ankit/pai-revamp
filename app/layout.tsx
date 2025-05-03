import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Puch Ai",
  description: "Created by Ankit Kashyp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-t from-primary-bg to-secondary-bg antialiased text-base text-gray-900">
        <Navbar />

        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-44">
          {children}
        </main>
      </body>
    </html>
  );
}
