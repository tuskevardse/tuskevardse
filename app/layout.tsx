import type { Metadata } from "next";

import { BrandIntro } from "@/components/layout/brand-intro";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteSeo } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteSeo.title,
  description: siteSeo.description,
  keywords: siteSeo.keywords,
  openGraph: {
    title: siteSeo.ogTitle,
    description: siteSeo.ogDescription,
    type: "website",
    locale: "hu_HU",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.ogTitle,
    description: siteSeo.ogDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>
        <div className="relative min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_45%,#eef5fb_100%)] text-ink">
          <BrandIntro />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
