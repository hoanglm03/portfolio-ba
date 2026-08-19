"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PhoneMockupBanner from "./PhoneMockupBanner";
import { useLang } from "@/contexts/LanguageContext";

const projectsStatic = [
  {
    key: "sporthub" as const,
    title: "SportHub Platform",
    period: "Oct 2025 – Jan 2026",
    tags: ["BRD", "SRS", "User Stories", "Use Cases", "ERD", "UAT"],
    image: "/projects/sport-bg.jpg",
    screenImage: "/projects/sporthub-screen.png",
    bannerTitle: "Find & Match<br/>Play & Book",
    metrics: { bpmn: 3, screens: 13, stories: 16 },
    href: "/projects/sporthub",
  },
  {
    key: "circleBank" as const,
    title: "Circle Bank Mobile App",
    period: "Personal Project",
    tags: ["SRS", "MoSCoW", "Use Cases", "eKYC", "NCDC API", "NFRs"],
    image: "/projects/banking-bg.jpg",
    screenImage: undefined,
    bannerTitle: "Digital Onboarding<br/>eKYC & Account",
    metrics: { bpmn: 5, screens: 10, stories: 18 },
    href: "/projects/circle-bank",
  },
  {
    key: "worklogs" as const,
    title: "Worklogs Management System",
    period: "Personal Project",
    tags: ["SRS", "RBAC", "Dashboard", "UI Specs", "Validation"],
    image: null,
    gradient: "from-emerald-950 via-emerald-900 to-emerald-800",
    bannerTitle: "Worklogs<br/>Management System",
    metrics: { bpmn: 0, screens: 15, stories: 30 },
    href: "/projects/worklogs",
  },
  {
    key: "bravoErp" as const,
    title: "BRAVO ERP Implementation",
    period: "Jan 2026 – May 2026",
    tags: ["ERP", "BRD", "UAT", "Training", "Configuration"],
    image: null,
    gradient: "from-emerald-950 via-emerald-900 to-emerald-800",
    bannerTitle: "BRAVO ERP<br/>Implementation",
    metrics: { bpmn: 0, screens: 0, stories: 0 },
    href: "/projects/bravo-erp",
  },
];

export default function Projects() {
  const { t } = useLang();

  const projects = projectsStatic.map((p) => ({
    ...p,
    ...t.projects.items[p.key],
  }));

  return (
    <section id="projects" className="relative py-28 bg-white dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3 block">
            {t.projects.sectionLabel}
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-stone-900 dark:text-stone-100">
            {t.projects.title}
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-lg text-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Card = (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 dark:hover:shadow-emerald-900/20 hover:border-emerald-200/50 dark:hover:border-emerald-700/50 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image banner */}
                {p.image && (
                  <div className="relative">
                    <PhoneMockupBanner
                      bgImage={p.image}
                      screenImage={p.screenImage}
                      title={p.bannerTitle || ""}
                      subtitle={p.bannerSubtitle || ""}
                      label={p.bannerLabel}
                    />
                    <div className="absolute top-0 left-0 right-0 bg-emerald-950/80 backdrop-blur-sm text-white px-5 py-2 text-xs font-bold tracking-wide uppercase z-10">
                      {p.domain} · {p.period}
                    </div>
                    {p.metrics && (
                      <div className="absolute bottom-3 right-4 flex gap-2 z-10">
                        <span className="px-2.5 py-1 text-xs font-bold bg-white/90 rounded-full text-stone-800 backdrop-blur-sm shadow-sm">
                          {p.metrics.bpmn} {t.projects.sequenceDiagrams}
                        </span>
                        <span className="px-2.5 py-1 text-xs font-bold bg-white/90 rounded-full text-stone-800 backdrop-blur-sm shadow-sm">
                          {p.metrics.screens} {t.projects.screens}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Gradient banner for cards without image */}
                {!p.image && p.gradient && (
                  <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                      }}
                    />
                    <div className="absolute top-0 left-0 right-0 bg-emerald-950/80 backdrop-blur-sm text-white px-5 py-2 text-xs font-bold tracking-wide uppercase z-10">
                      {p.domain} · {p.period}
                    </div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 max-w-[80%]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                        <span className="text-emerald-200 text-[11px] font-semibold tracking-widest uppercase">{p.bannerLabel}</span>
                      </div>
                      <h3
                        className="text-white font-display text-xl md:text-2xl leading-snug mb-2"
                        dangerouslySetInnerHTML={{ __html: p.bannerTitle || "" }}
                      />
                      <p className="text-emerald-200/70 text-xs leading-relaxed max-w-[320px]">{p.bannerSubtitle}</p>
                    </div>
                  </div>
                )}

                <div className="p-7">
                  {/* Top row — only show for cards without any banner */}
                  {!p.image && !p.gradient && (
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors text-stone-900 dark:text-stone-100">
                          {p.title}
                        </h3>
                        <p className="text-sm text-stone-400 dark:text-stone-500 mt-0.5">{p.period}</p>
                      </div>
                      <span className="shrink-0 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                        {p.domain}
                      </span>
                    </div>
                  )}

                  {/* Title for cards with banner */}
                  {(p.image || p.gradient) && (
                    <h3 className="font-display text-xl md:text-2xl group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors mb-3 text-stone-900 dark:text-stone-100">
                      {p.title}
                    </h3>
                  )}

                  <p className="text-stone-500 dark:text-stone-400 text-sm mb-5 leading-relaxed">{p.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-white dark:bg-stone-700 text-stone-500 dark:text-stone-400 border border-stone-150 dark:border-stone-600 font-medium group-hover:border-emerald-200 dark:group-hover:border-emerald-700 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                {p.href && (
                  <div className="absolute top-16 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-white/90 dark:bg-stone-700/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <ArrowUpRight size={16} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                )}
              </motion.article>
            );

            return p.href ? (
              <Link key={p.title} href={p.href} className="block">
                {Card}
              </Link>
            ) : (
              <div key={p.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
