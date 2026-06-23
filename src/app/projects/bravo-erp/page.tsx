"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Layout,
  Users,
  Database,
  Settings,
  Package,
  Warehouse,
  ShoppingCart,
  Factory,
  UserCheck,
  BarChart3,
  CheckCircle,
  TrendingDown,
  GraduationCap,
  ClipboardList,
  Cog,
  Shield,
} from "lucide-react";

const keyMetrics = [
  { icon: Database, value: "5", label: "ERP Modules" },
  { icon: Users, value: "3+", label: "Enterprise Clients" },
  { icon: GraduationCap, value: "20+", label: "Users Trained" },
  { icon: TrendingDown, value: "40%", label: "Tickets Reduced" },
  { icon: FileText, value: "BRD", label: "Documentation" },
  { icon: Settings, value: "E2E", label: "Configuration" },
];

const modules = [
  {
    title: "Accounting & Finance",
    description:
      "General ledger, accounts payable/receivable, financial reporting, tax declarations, and multi-currency management.",
    icon: BarChart3,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Warehouse Management",
    description:
      "Inventory tracking, stock-in/stock-out management, warehouse transfers, lot tracking, and min/max stock alerts.",
    icon: Warehouse,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    title: "Purchasing",
    description:
      "Purchase requisitions, purchase orders, supplier management, price comparison, and procurement approval workflows.",
    icon: ShoppingCart,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    title: "Production",
    description:
      "Bill of materials (BOM), production orders, work-in-progress tracking, material consumption, and finished goods output.",
    icon: Factory,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    title: "HR & Payroll",
    description:
      "Employee records, attendance tracking, salary calculation, insurance contributions, and payroll reporting.",
    icon: UserCheck,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

const responsibilities = [
  {
    phase: "Requirements Elicitation",
    tasks: [
      "Conducted workshops & interviews with stakeholders from 3+ enterprise clients",
      "Documented as-is processes and identified pain points per department",
      "Translated business needs into functional requirements (BRD)",
    ],
  },
  {
    phase: "System Configuration",
    tasks: [
      "Configured master catalogs: Chart of Accounts, Items, Suppliers, Customers",
      "Set up system parameters: fiscal year, tax rates, rounding rules, numbering sequences",
      "Defined user authorization: role-based access per module and function",
      "Designed document circulation workflows: approval chains, status transitions",
    ],
  },
  {
    phase: "UAT & Training",
    tasks: [
      "Coordinated User Acceptance Testing with client teams across all 5 modules",
      "Created training materials and conducted hands-on training for 20+ end-users per project",
      "Provided go-live support and troubleshooting during production rollout",
    ],
  },
  {
    phase: "Post Go-Live Support",
    tasks: [
      "Monitored system performance and user adoption metrics",
      "Resolved production issues and change requests",
      "Reduced post-go-live support tickets by 40% through proactive training and documentation",
    ],
  },
];

const deliverables = [
  { name: "Business Requirements Document (BRD)", desc: "Requirements per module elicited from 3+ enterprise client workshops" },
  { name: "As-Is / To-Be Process Mapping", desc: "Current vs. target business processes across 5 ERP modules" },
  { name: "System Configuration Specs", desc: "Catalogs, parameters, authorization rules, document circulation" },
  { name: "UAT Test Cases & Results", desc: "End-to-end test scenarios per module with sign-off records" },
  { name: "Training Materials", desc: "User guides and hands-on workshop materials for 20+ end-users" },
  { name: "Go-Live Checklist & Support Log", desc: "Production readiness checklist and post-go-live issue tracking" },
];

const configAreas = [
  { name: "Catalogs", desc: "Chart of Accounts, Items, Suppliers, Customers, Warehouses" },
  { name: "Parameters", desc: "Fiscal year, tax rates, rounding, numbering sequences" },
  { name: "User Authorization", desc: "Role-based access control per module and function" },
  { name: "Document Circulation", desc: "Approval workflows, status transitions, notification rules" },
];

export default function BravoERPDetail() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero banner */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden bg-gradient-to-br from-orange-950 via-amber-900 to-orange-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
                               linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-amber-200 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30">
                ERP / Enterprise
              </span>
              <span className="text-amber-300 text-sm">Jan 2026 – May 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-3">
              BRAVO ERP Implementation
            </h1>
            <p className="text-amber-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              End-to-end ERP deployment across 5 modules for 3+ enterprise clients — from requirements elicitation to go-live support.
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
              <m.icon size={20} className="mx-auto mb-2 text-amber-600" />
              <div className="font-display text-2xl text-amber-800">{m.value}</div>
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
                BRAVO is a Vietnamese ERP software solution designed for enterprises. This project involved
                implementing the full BRAVO ERP suite across multiple enterprise clients, covering accounting,
                warehouse management, purchasing, production, and HR-payroll modules.
              </p>
              <p className="text-stone-600 leading-relaxed">
                As a BA/Implementation Consultant, I was responsible for the complete lifecycle — from
                eliciting requirements through client workshops, configuring the system, conducting UAT,
                training end-users, and providing post-go-live support.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Package size={18} className="mt-1 text-amber-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">ERP Platform</p>
                  <p className="text-sm text-stone-500">BRAVO ERP — Vietnamese enterprise solution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users size={18} className="mt-1 text-amber-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Client Scale</p>
                  <p className="text-sm text-stone-500">3+ enterprise clients, cross-functional teams</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="mt-1 text-amber-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Training</p>
                  <p className="text-sm text-stone-500">20+ end-users trained per project deployment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingDown size={18} className="mt-1 text-amber-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Impact</p>
                  <p className="text-sm text-stone-500">40% reduction in post-go-live support tickets</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ERP Modules */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">ERP Modules Implemented</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`rounded-2xl bg-white border ${m.border} p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${m.bg} ${m.color} flex items-center justify-center mb-3`}>
                  <m.icon size={20} />
                </div>
                <h3 className="font-display text-lg text-stone-800 mb-2">{m.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BA Responsibilities by Phase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">BA Responsibilities</h2>
          <div className="space-y-6">
            {responsibilities.map((r, i) => (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-2xl bg-white border border-stone-100 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-amber-50 text-amber-700 font-bold text-sm flex items-center justify-center border border-amber-100">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg text-amber-800">{r.phase}</h3>
                </div>
                <ul className="space-y-2.5 ml-11">
                  {r.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-stone-600">
                      <CheckCircle size={14} className="mt-0.5 text-amber-400 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Configuration Areas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">System Configuration</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {configAreas.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-amber-200 transition-colors"
              >
                <Cog size={18} className="mt-0.5 text-amber-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{c.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">Implementation Flow</h2>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              "Client Workshop",
              "→",
              "As-Is Analysis",
              "→",
              "Requirements (BRD)",
              "→",
              "System Config",
              "→",
              "UAT",
              "→",
              "Training (20+ users)",
              "→",
              "Go-Live",
              "→",
              "Post-Go-Live Support",
            ].map((step, i) =>
              step === "→" ? (
                <span key={i} className="text-amber-400 font-bold text-lg">→</span>
              ) : (
                <span key={i} className="px-3 py-2 text-xs font-semibold rounded-lg bg-amber-50 text-amber-800 border border-amber-100">
                  {step}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* BA Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl mb-8">BA Deliverables</h2>
          <div className="space-y-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-amber-200 transition-colors"
              >
                <FileText size={18} className="mt-0.5 text-amber-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{d.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back link */}
        <div className="text-center pt-8 border-t border-stone-100">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-800 text-white font-semibold hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-200 active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
