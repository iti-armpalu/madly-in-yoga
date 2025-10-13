// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Madly in Yoga — Landing",
  description: "Gradient landing page",
};

function CtaButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
    >
      Get Started
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-[100svh] bg-white text-zinc-900 antialiased flex flex-col">
        <Header
          brand={{ label: "Madly in Yoga", href: "/" }}
          nav={[
            // { href: "/", label: "Home", exact: true },
            { href: "/programs", label: "Browse Programs" },
            { href: "/about", label: "About" },
          ]}
          rightSlot={<CtaButton />}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
