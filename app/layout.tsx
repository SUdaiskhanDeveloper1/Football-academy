import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";

const headingFont = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-heading", display: "swap" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Youth Football Coaching in Manchester`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "football academy",
    "youth football training",
    "football coaching Manchester",
    "kids football classes",
    "football holiday camps",
    "1-to-1 football coaching",
    "elite youth football",
    "goalkeeper training",
    "FootballCoin Academy"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    url: "/",
    title: `${siteConfig.name} | Youth Football Coaching in Manchester`,
    description: siteConfig.description,
    images: [{ url: images.youthMatchAction.src.src, width: images.youthMatchAction.src.width, height: images.youthMatchAction.src.height, alt: images.youthMatchAction.alt }]
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#070F26",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body>
        <Provider>
          <a
            href="#main"
            style={{ position: "absolute", left: "-9999px", top: 0, zIndex: 1000 }}
            className="skip-link"
          >
            Skip to main content
          </a>
          <TopBar />
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
