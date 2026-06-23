import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worklogs Management System",
  description:
    "BA case study: Internal worklog tracking system with RBAC for 4 roles, approval workflows, reporting dashboards, and 30+ functional specs.",
  openGraph: {
    title: "Worklogs Management System | Hoang Le Minh",
    description:
      "BA case study: Internal worklog tracking system with RBAC for 4 roles, approval workflows, and reporting dashboards.",
  },
};

export default function WorklogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
