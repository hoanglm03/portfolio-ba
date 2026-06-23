import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SportHub Platform",
  description:
    "BA case study: Mobile app connecting sports players with skill-matched opponents. 16 User Stories, 66 ACs, 13 wireframes, AI matching algorithm.",
  openGraph: {
    title: "SportHub Platform | Hoang Le Minh",
    description:
      "BA case study: Mobile app connecting sports players with skill-matched opponents. 16 User Stories, 66 ACs, 13 wireframes.",
  },
};

export default function SportHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
