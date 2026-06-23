import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Hoang Le Minh | Business Analyst Portfolio",
    template: "%s | Hoang Le Minh",
  },
  description:
    "Business Analyst with hands-on experience in ERP implementation, requirements elicitation, BPMN/UML modeling, and end-user training.",
  keywords: ["Business Analyst", "BA Portfolio", "Hoang Le Minh", "Requirements", "BPMN", "ERP", "SRS", "Use Cases"],
  authors: [{ name: "Hoang Le Minh" }],
  openGraph: {
    title: "Hoang Le Minh | Business Analyst Portfolio",
    description: "Business Analyst with hands-on experience in ERP implementation, requirements elicitation, BPMN/UML modeling, and end-user training.",
    type: "website",
    locale: "en_US",
    siteName: "Hoang Le Minh Portfolio",
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
      <body className="min-h-full flex flex-col font-body antialiased bg-stone-50 text-stone-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
