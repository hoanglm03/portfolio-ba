"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Layout,
  Shield,
  Users,
  Database,
  GitBranch,
  BarChart3,
  Clock,
  Settings,
  ClipboardCheck,
  CalendarDays,
  UserCog,
  PieChart,
} from "lucide-react";

const keyMetrics = [
  { icon: FileText, value: "30+", label: "Functional Specs" },
  { icon: Layout, value: "15+", label: "UI Screens" },
  { icon: GitBranch, value: "12+", label: "Use Cases" },
  { icon: Shield, value: "4", label: "RBAC Roles" },
  { icon: Database, value: "12", label: "UI Conventions" },
  { icon: BarChart3, value: "3", label: "Chart Types" },
];

const features = [
  {
    title: "Role-Based Access Control (RBAC)",
    description:
      "4-tier permission system: Admin manages accounts/projects/holidays; PM reviews worklogs & manages members; TL manages products; Members log worklogs.",
  },
  {
    title: "Worklog Lifecycle Management",
    description:
      "Complete workflow: Create → Submit → Review → Approve/Reject → Resubmit. Status tracking (Open, Updated, Rejected, Closed) with comment codes.",
  },
  {
    title: "Project & Product Management",
    description:
      "Hierarchical structure: Projects → Products/Meetings. Status tracking (Open, Closed, Pending, Canceled) with phase management.",
  },
  {
    title: "Reporting Dashboards",
    description:
      "Pie charts for account roles & project status. Line charts for product hours/members. Bar charts for worklog hours by role/member/work type.",
  },
  {
    title: "Meeting Management",
    description:
      "Full meeting lifecycle with conductor, secretary, attendees, meeting minutes (rich text). Linked to worklogs for time tracking.",
  },
  {
    title: "Notification System",
    description:
      "Real-time notifications: PM notified of 'Updated' worklogs pending review; Members notified of 'Rejected' worklogs requiring resubmission.",
  },
];

const actors = [
  {
    role: "Admin",
    permissions: [
      "Manage Accounts (CRUD)",
      "Manage Projects (CRUD)",
      "Manage Holidays (CRUD)",
    ],
    icon: Settings,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    role: "PM",
    permissions: [
      "Manage Members & Products",
      "Review/Approve/Reject Worklogs",
      "Edit Project & View Statistics",
    ],
    icon: UserCog,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    role: "Team Leader",
    permissions: [
      "Manage Products",
      "Create/Edit/Delete own Worklogs",
      "Delete Meetings & View Statistics",
    ],
    icon: Users,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    role: "Member",
    permissions: [
      "Create/Edit/Delete own Worklogs",
      "Create/Edit Meetings",
      "View All Worklogs & Statistics",
    ],
    icon: ClipboardCheck,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

const useCases = [
  { id: "UC1", name: "Login & Home Page", flows: "Main + 3 Error flows" },
  { id: "UC2", name: "Account Maintenance (CRUD)", flows: "Create + Edit + Delete + Search" },
  { id: "UC3", name: "Project Maintenance (Admin)", flows: "Create + Edit + View Description" },
  { id: "UC4", name: "Holiday Maintenance", flows: "Create + Edit + Delete + Save & Continue" },
  { id: "UC5", name: "View My Projects & Notifications", flows: "Search + View Description + Notification links" },
  { id: "UC6", name: "PM: Edit Project & Manage Members", flows: "Edit + Assign + Edit Role + Remove" },
  { id: "UC7", name: "PM: Manage Products", flows: "Create + Edit + Search" },
  { id: "UC8", name: "PM: Manage Meetings", flows: "Create + Edit + Delete" },
  { id: "UC9", name: "PM: Review Worklogs", flows: "Search + Approve + Reject + View Content" },
  { id: "UC10", name: "Member: Manage My Worklogs", flows: "Create + Edit + Delete + Resubmit" },
  { id: "UC11", name: "Member: View All Worklogs", flows: "Search + Filter by Product/Meeting" },
  { id: "UC12", name: "View Statistics (Product & Worklog)", flows: "Pie + Line + Bar charts" },
];

const documents = [
  { name: "Software Requirements Specification (SRS v8.3)", desc: "30+ functional specifications across 3 major modules (Admin, PM, Member)" },
  { name: "Use Case Diagrams & Actor Definitions", desc: "4 actors with detailed permission matrix and functional breakdowns" },
  { name: "UI Specifications & Conventions (12 rules)", desc: "Textbox, Grid, Combobox, Date Picker, Messages, Search, Paging, Checkbox rules" },
  { name: "Error Message Catalogue", desc: "Standardized error messages per field with inline red display and green toast success" },
  { name: "RBAC Permission Matrix", desc: "Cross-referenced Admin/PM/TL/Member access for all 10+ functional areas" },
  { name: "Entity Status Diagrams", desc: "State machines for Project, Product, Meeting, and Worklog entities" },
  { name: "Reporting & Dashboard Specifications", desc: "Pie, Line, Bar chart specs with dynamic filtering by role/member/status" },
  { name: "Validation Rules & Business Logic", desc: "Field-level validation, date constraints, uniqueness checks, cascading dependencies" },
];

const conventions = [
  { name: "Search", desc: "Textbox = contains, Combobox = exact, AND logic, Reset button" },
  { name: "Paging", desc: "10 records/page, First/Prev/Next/Last navigation" },
  { name: "Messages", desc: "Red inline errors, green toast success, confirmation popups" },
  { name: "Date Picker", desc: "DD/MM/YYYY format, calendar picker, non-clearable" },
  { name: "Grid", desc: "Sortable columns, alternating row colors, default DB records" },
  { name: "Combobox", desc: "Alphabetical sort, blank item for optional, no blank for required" },
];

export default function WorklogsDetail() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero banner */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-indigo-200 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-indigo-400/20 text-indigo-200 border border-indigo-400/30">
                Internal Tools
              </span>
              <span className="text-indigo-300 text-sm">Personal Project</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-3">
              Worklogs Management System
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Internal worklog tracking system for software teams — RBAC, approval workflows, reporting dashboards, and complete SRS documentation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 -mt-24 relative z-20 mb-20"
        >
          {keyMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white rounded-2xl p-5 shadow-lg border border-stone-100 text-center hover:shadow-xl transition-shadow"
            >
              <m.icon size={20} className="mx-auto mb-2 text-indigo-600" />
              <div className="font-display text-2xl text-indigo-800">{m.value}</div>
              <div className="text-xs text-stone-500 mt-1 font-medium">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-6">About the Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-stone-600 leading-relaxed mb-4">
                The Worklogs Management System (WLS) is designed for small-to-medium software development
                companies to track project progress and manage working hours. Project members log their work
                and time spent, helping Project Managers monitor progress efficiently.
              </p>
              <p className="text-stone-600 leading-relaxed">
                The system features a comprehensive role-based access control with 4 distinct roles,
                a complete worklog approval workflow, meeting management, and interactive reporting
                dashboards with pie, line, and bar charts.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users size={18} className="mt-1 text-indigo-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Target Users</p>
                  <p className="text-sm text-stone-500">Small-to-medium software companies/centers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-indigo-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Core Workflow</p>
                  <p className="text-sm text-stone-500">Log Work → Submit → PM Review → Approve/Reject → Resubmit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PieChart size={18} className="mt-1 text-indigo-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Dashboards</p>
                  <p className="text-sm text-stone-500">Product summary, worklog hours by role/member, work type breakdown</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays size={18} className="mt-1 text-indigo-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Holiday Management</p>
                  <p className="text-sm text-stone-500">Recurring holidays, future-date validation, bulk delete</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RBAC Roles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">RBAC Permission Model</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {actors.map((a, i) => (
              <motion.div
                key={a.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`rounded-2xl bg-white border ${a.border} p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${a.bg} ${a.color} flex items-center justify-center mb-3`}>
                  <a.icon size={20} />
                </div>
                <h3 className="font-display text-lg text-stone-800 mb-3">{a.role}</h3>
                <ul className="space-y-2">
                  {a.permissions.map((p) => (
                    <li key={p} className="text-sm text-stone-500 flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.bg} ${a.color} shrink-0`} style={{ backgroundColor: "currentColor", opacity: 0.5 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key features */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-2xl bg-white border border-stone-100 p-6 hover:shadow-lg hover:border-indigo-200/50 transition-all duration-300"
              >
                <h3 className="font-display text-lg text-indigo-800 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">Use Case Catalogue</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-indigo-200 transition-colors"
              >
                <span className="shrink-0 w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center border border-indigo-100">
                  {uc.id}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-stone-800 text-sm">{uc.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{uc.flows}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Worklog lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">Worklog Lifecycle</h2>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              "Create Worklog",
              "→",
              "Open",
              "→",
              "PM Reviews",
              "→",
              "Approved → Closed",
              "|",
              "Rejected",
              "→",
              "Member Edits",
              "→",
              "Resubmit → Updated",
              "→",
              "PM Re-reviews",
            ].map((step, i) =>
              step === "→" ? (
                <span key={i} className="text-indigo-400 font-bold text-lg">→</span>
              ) : step === "|" ? (
                <span key={i} className="text-red-400 font-bold text-lg">|</span>
              ) : step.includes("Rejected") ? (
                <span key={i} className="px-3 py-2 text-xs font-semibold rounded-lg bg-red-50 text-red-700 border border-red-100">
                  {step}
                </span>
              ) : step.includes("Closed") ? (
                <span key={i} className="px-3 py-2 text-xs font-semibold rounded-lg bg-green-50 text-green-700 border border-green-100">
                  {step}
                </span>
              ) : (
                <span key={i} className="px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-100">
                  {step}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* UI Conventions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">UI Conventions Documented</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conventions.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="p-4 rounded-xl bg-white border border-stone-100 hover:border-indigo-200 transition-colors"
              >
                <p className="font-semibold text-indigo-700 text-sm mb-1">{c.name}</p>
                <p className="text-xs text-stone-500">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BA deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">BA Deliverables</h2>
          <div className="space-y-3">
            {documents.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-indigo-200 transition-colors"
              >
                <FileText size={18} className="mt-0.5 text-indigo-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{d.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Entity status reference */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl mb-6">Entity Status Reference</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { entity: "Project", statuses: ["Open", "Closed", "Pending", "Canceled"] },
              { entity: "Product", statuses: ["Open", "Closed", "Pending", "Canceled"] },
              { entity: "Meeting", statuses: ["Open", "Closed", "Canceled"] },
              { entity: "Worklog", statuses: ["Open", "Updated", "Rejected", "Closed"] },
            ].map((e) => (
              <div key={e.entity} className="p-4 rounded-xl bg-white border border-stone-100">
                <p className="font-semibold text-stone-800 text-sm mb-2">{e.entity}</p>
                <div className="flex flex-wrap gap-2">
                  {e.statuses.map((s) => (
                    <span
                      key={s}
                      className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                        s === "Open" ? "bg-blue-50 text-blue-700" :
                        s === "Closed" ? "bg-green-50 text-green-700" :
                        s === "Pending" ? "bg-amber-50 text-amber-700" :
                        s === "Canceled" ? "bg-stone-100 text-stone-500" :
                        s === "Updated" ? "bg-indigo-50 text-indigo-700" :
                        s === "Rejected" ? "bg-red-50 text-red-700" :
                        "bg-stone-50 text-stone-600"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back link */}
        <div className="text-center pt-8 border-t border-stone-100">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-800 text-white font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
