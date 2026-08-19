"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, FileText, Layout, GitBranch, Database, CheckCircle, Target, Smartphone } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const keyMetrics = [
  { icon: FileText, value: "21", label: "Functional Requirements" },
  { icon: Layout, value: "20+", label: "Screen Wireframes" },
  { icon: Users, value: "80+", label: "User Stories" },
  { icon: CheckCircle, value: "66+", label: "Acceptance Criteria" },
  { icon: GitBranch, value: "6", label: "Use Cases" },
  { icon: Database, value: "12", label: "Data Entities (ERD)" },
];

const techStack = [
  "Google Maps API",
  "Firebase (FCM, Analytics)",
  "MoMo / VNPay",
  "Figma",
  "Jira",
  "Mermaid (ERD/Flows)",
];

export default function SportHubDetail() {
  const { t } = useLang();
  const pd = t.projectDetails.sporthub;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Hero banner */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
        <Image
          src="/projects/sporthub-demo.png"
          alt="SportHub app demo screens"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/50 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-emerald-200 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              {t.common.backToProjects}
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                Sport Matching &amp; Booking
              </span>
              <span className="text-emerald-300 text-sm">Oct 2025 – Jan 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-3">SportHub Platform</h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
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
              <m.icon size={20} className="mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
              <div className="font-display text-2xl text-emerald-800 dark:text-emerald-400">{m.value}</div>
              <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-3 text-stone-900 dark:text-stone-100">{pd.appDemoTitle}</h2>
          <p className="text-stone-500 dark:text-stone-400 mb-8">{pd.appDemoSubtitle}</p>
          <div className="rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm bg-white dark:bg-stone-800 p-4">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-700">
              <Image
                src="/projects/sporthub-demo.png"
                alt="SportHub complete UI screens — Login, Registration, OTP, Sport Selection, Matching, Court Booking, Invite, Match History, Rating, Profile"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* About the project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-6 text-stone-900 dark:text-stone-100">{pd.aboutTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-stone dark:prose-invert max-w-none">
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {pd.aboutP1}
              </p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {pd.aboutP2}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target size={18} className="mt-1 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.targetMarketLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.targetMarketValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone size={18} className="mt-1 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.platformLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.platformValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users size={18} className="mt-1 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.systemRolesLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.systemRolesValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText size={18} className="mt-1 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{pd.totalDocsLabel}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{pd.totalDocsValue}</p>
                </div>
              </div>
            </div>
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.keyFeaturesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pd.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-2xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 p-6 hover:shadow-lg hover:border-emerald-200/50 dark:hover:border-emerald-700 transition-all duration-300"
              >
                <h3 className="font-display text-lg text-emerald-800 dark:text-emerald-400 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{f.description}</p>
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
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.baDeliverablesTitle}</h2>
          <div className="space-y-3">
            {pd.documents.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-colors"
              >
                <FileText size={18} className="mt-0.5 text-emerald-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{d.name}</p>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & tech */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl mb-6 text-stone-900 dark:text-stone-100">{pd.toolsTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 font-medium hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Release plan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl mb-8 text-stone-900 dark:text-stone-100">{pd.releasePlanTitle}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pd.releases.map((r, i) => (
              <motion.div
                key={r.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`rounded-2xl p-6 border ${
                  i === 0
                    ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700"
                    : "bg-white dark:bg-stone-800 border-stone-100 dark:border-stone-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg text-emerald-800 dark:text-emerald-400">{r.version}</h3>
                  {i === 0 && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white rounded-full">{pd.currentLabel}</span>
                  )}
                </div>
                <p className="text-xs text-stone-400 dark:text-stone-500 mb-4">{pd.targetLabel}: {r.target}</p>
                <ul className="space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
                      <CheckCircle size={13} className={i === 0 ? "text-emerald-500" : "text-stone-300 dark:text-stone-600"} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back link */}
        <div className="text-center pt-8 border-t border-stone-100 dark:border-stone-700">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 active:scale-95"
          >
            <ArrowLeft size={16} />
            {t.common.backToProjects}
          </Link>
        </div>
      </div>
    </div>
  );
}
