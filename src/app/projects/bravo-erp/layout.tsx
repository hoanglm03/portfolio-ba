import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRAVO ERP Implementation",
  description:
    "BA case study: End-to-end ERP deployment across 5 modules (accounting, warehouse, purchasing, production, HR-payroll) for 3+ enterprise clients.",
  openGraph: {
    title: "BRAVO ERP Implementation | Hoang Le Minh",
    description:
      "BA case study: End-to-end ERP deployment across 5 modules for 3+ enterprise clients. 20+ users trained, 40% ticket reduction.",
  },
};

export default function BravoERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
