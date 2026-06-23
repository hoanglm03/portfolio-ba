import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Skills",
  description:
    "Work experience at BRAVO Vietnam, freelance BA projects, and skills in BPMN, UML, SQL, Agile, and ERP implementation.",
  openGraph: {
    title: "Experience & Skills | Hoang Le Minh",
    description:
      "Work experience at BRAVO Vietnam, freelance BA projects, and skills in BPMN, UML, SQL, Agile, and ERP implementation.",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
