import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Le Minh Hoang | Business Analyst Portfolio",
    template: "%s | Le Minh Hoang",
  },
  description:
    "Business Analyst with hands-on experience in ERP implementation, requirements elicitation, BPMN/UML modeling, and end-user training.",
  keywords: ["Business Analyst", "BA Portfolio", "Le Minh Hoang", "Requirements", "BPMN", "ERP", "SRS", "Use Cases"],
  authors: [{ name: "Le Minh Hoang" }],
  openGraph: {
    title: "Le Minh Hoang | Business Analyst Portfolio",
    description: "Business Analyst with hands-on experience in ERP implementation, requirements elicitation, BPMN/UML modeling, and end-user training.",
    type: "website",
    locale: "en_US",
    siteName: "Le Minh Hoang Portfolio",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-body antialiased bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-300">
        <ThemeContextProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingControls />
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
