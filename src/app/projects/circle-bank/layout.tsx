import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circle Bank Mobile App",
  description:
    "BA case study: Digital onboarding app with eKYC verification, 18 requirements, 5 use cases, targeting 80% conversion rate and $5M revenue gain.",
  openGraph: {
    title: "Circle Bank Mobile App | Hoang Le Minh",
    description:
      "BA case study: Digital onboarding app with eKYC verification, 18 requirements, 5 use cases, targeting 80% conversion rate.",
  },
};

export default function CircleBankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
