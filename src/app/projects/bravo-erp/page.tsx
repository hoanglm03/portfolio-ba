"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
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
  Cog,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const keyMetrics = [
  { icon: Database, value: "5", label: "ERP Modules" },
  { icon: Users, value: "3+", label: "Enterprise Clients" },
  { icon: GraduationCap, value: "20+", label: "Users Trained" },
  { icon: TrendingDown, value: "40%", label: "Tickets Reduced" },
  { icon: FileText, value: "BRD", label: "Documentation" },
  { icon: Settings, value: "E2E", label: "Configuration" },
];

const moduleIcons = [BarChart3, Warehouse, ShoppingCart, Factory, UserCheck];
const moduleColors = [
  { color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-100 dark:border-blue-800" },
  { color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20", border: "border-amber-100 dark:border-amber-800" },
  { color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-100 dark:border-green-800" },
  { color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-100 dark:border-purple-800" },
  { color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/20", border: "border-rose-100 dark:border-rose-800" },
];

export default function BravoERPDetail() {
  const { t } = useLang();
  const pd = t.projectDetails.bravoErp;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
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
              {t.common.backToProjects}
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
              {pd.heroBannerSubtitle}
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
              className="bg-white dark:bg-stone-800 rounded-2xl p-5 shadow-lg border border-stone-100 dark:border-stone-700 text-center hover:shadow-xl transition-shadow"
            >
              <m.icon size={20} className="mx-auto mb-2 text-amber-600 dark:text-amber-400" />
              <div className="font-display text-2xl text-amber-800 dark:text-amber-400">{m.value}</div>
              <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">{m.label}</div>
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
          <h2 className="font-display text-3xl mb-6 text-stone-900 dark:text-stone-100">{pd.aboutTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                {pd.aboutP1}
              </p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {pd.aboutP2}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Package size={18} className="mt-1 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.erpPlatformLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.erpPlatformValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users size={18} className="mt-1 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.clientScaleLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.clientScaleValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="mt-1 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.trainingLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.trainingValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingDown size={18} className="mt-1 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.impactLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.impactValue}</p>
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.modulesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pd.modules.map((m, i) => {
              const Icon = moduleIcons[i];
              const style = moduleColors[i];
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`rounded-2xl bg-white dark:bg-stone-800 border ${style.border} p-6 hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${style.bg} ${style.color} flex items-center justify-center mb-3`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg text-stone-800 dark:text-stone-200 mb-2">{m.title}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{m.description}</p>
                </motion.div>
              );
            })}
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.responsibilitiesTitle}</h2>
          <div className="space-y-6">
            {pd.responsibilities.map((r, i) => (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-2xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-sm flex items-center justify-center border border-amber-100 dark:border-amber-800">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg text-amber-800 dark:text-amber-400">{r.phase}</h3>
                </div>
                <ul className="space-y-2.5 ml-11">
                  {r.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
                      <CheckCircle size={14} className="mt-0.5 text-amber-400 shrink-0" />
                      {task}
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.configTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {pd.configAreas.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 hover:border-amber-200 dark:hover:border-amber-700 transition-colors"
              >
                <Cog size={18} className="mt-0.5 text-amber-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{c.name}</p>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{c.desc}</p>
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.implementationFlowTitle}</h2>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              "Client Workshop", "→", "As-Is Analysis", "→", "Requirements (BRD)", "→",
              "System Config", "→", "UAT", "→", "Training (20+ users)", "→",
              "Go-Live", "→", "Post-Go-Live Support",
            ].map((step, i) =>
              step === "→" ? (
                <span key={i} className="text-amber-400 font-bold text-lg">→</span>
              ) : (
                <span key={i} className="px-3 py-2 text-xs font-semibold rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 border border-amber-100 dark:border-amber-800">
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.baDeliverablesTitle}</h2>
          <div className="space-y-3">
            {pd.deliverables.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 hover:border-amber-200 dark:hover:border-amber-700 transition-colors"
              >
                <FileText size={18} className="mt-0.5 text-amber-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{d.name}</p>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back link */}
        <div className="text-center pt-8 border-t border-stone-100 dark:border-stone-700">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-800 text-white font-semibold hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-200 dark:hover:shadow-amber-900 active:scale-95"
          >
            <ArrowLeft size={16} />
            {t.common.backToProjects}
          </Link>
        </div>
      </div>
    </div>
  );
}
