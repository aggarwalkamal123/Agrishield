import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "AgriShield",
  description:
    "AI Powered Heavy Metal Risk Assessment and Decision Support Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-900 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">

        <ThemeProvider>

          <Navbar />

          <main className="flex-1">

            {children}

          </main>

          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}
