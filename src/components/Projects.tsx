"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PhoneMockupBanner from "./PhoneMockupBanner";

const projects = [
  {
    title: "SportHub Platform",
    period: "Oct 2025 – Jan 2026",
    domain: "Sport Matching & Booking",
    team: "10 members",
    description:
      "Mobile app connecting sports players with skill-matched opponents nearby and enabling court booking in under 3 minutes. Covers badminton, pickleball with AI matching algorithm.",
    highlights: [
      "Full BA documentation: BRD → SRS → 16 User Stories with 66 ACs",
      "Designed 13 wireframe screens & 6 detailed use cases",
      "Matching algorithm: Location (40%) + Skill (40%) + Rating (20%)",
      "Coordinated End-to-End UAT with cross-functional team",
    ],
    tags: ["BRD", "SRS", "User Stories", "Use Cases", "ERD", "UAT"],
    image: "/projects/sport-bg.jpg",
    screenImage: "/projects/sporthub-screen.png",
    bannerTitle: "Find & Match<br/>Play & Book",
    bannerSubtitle: "AI-powered opponent matching + instant court booking for badminton & pickleball players.",
    bannerLabel: "Mobile App",
    metrics: { bpmn: 3, screens: 13, stories: 16 },
    href: "/projects/sporthub",
  },
  {
    title: "Circle Bank Mobile App",
    period: "Mar 2025 – Jul 2025",
    domain: "Banking & Fintech",
    team: "Individual",
    description:
      "Digital onboarding mobile app for Circle Bank — eKYC identity verification, account creation, and debit card issuance. Targeting 80% conversion rate (up from 37.5%) and $5M USD revenue gain.",
    highlights: [
      "Full SRS with 18 requirements, 7 business rules, 24+ NFRs",
      "5 detailed use cases with basic/alternative/exceptional flows",
      "eKYC verification integrated with NCDC API + OCR solution",
      "MoSCoW prioritization, state diagrams, UI specifications",
    ],
    tags: ["SRS", "MoSCoW", "Use Cases", "eKYC", "NCDC API", "NFRs"],
    image: "/projects/banking-bg.jpg",
    screenImage: undefined,
    bannerTitle: "Digital Onboarding<br/>eKYC & Account",
    bannerSubtitle: "Streamlined identity verification and bank account creation for Vietnam's leading bank.",
    bannerLabel: "Mobile Banking",
    metrics: { bpmn: 5, screens: 10, stories: 18 },
    href: "/projects/circle-bank",
  },
  {
    title: "Worklogs Management System",
    period: "Personal Project",
    domain: "Internal Tools",
    team: "Individual",
    description:
      "Internal system to track project progress, log working hours, and manage tasks for software development teams.",
    highlights: [
      "Designed RBAC for 4 roles: Admin, PM, Team Leader, Member",
      "Specified reporting dashboards (pie/line/bar charts)",
      "Documented SRS with UI conventions & validation rules",
      "Error message specifications across all modules",
    ],
    tags: ["SRS", "RBAC", "Dashboard", "UI Specs", "Validation"],
    image: null,
    gradient: "from-emerald-950 via-emerald-900 to-emerald-800",
    bannerTitle: "Worklogs<br/>Management System",
    bannerSubtitle: "Internal worklog tracking with RBAC, approval workflows, and reporting dashboards.",
    bannerLabel: "Internal Tools",
    metrics: { bpmn: 0, screens: 15, stories: 30 },
    href: "/projects/worklogs",
  },
  {
    title: "BRAVO ERP Implementation",
    period: "Jan 2026 – May 2026",
    domain: "ERP / Enterprise",
    team: "Cross-functional",
    description:
      "ERP system implementation across accounting, warehouse, purchasing, production, and HR-payroll modules for 3+ enterprise clients.",
    highlights: [
      "Elicited & documented requirements from 3+ enterprise clients",
      "Configured catalogs, parameters, user authorization, document circulation",
      "Trained 20+ end-users per project",
      "Reduced post-go-live support tickets by 40%",
    ],
    tags: ["ERP", "BRD", "UAT", "Training", "Configuration"],
    image: null,
    gradient: "from-emerald-950 via-emerald-900 to-emerald-800",
    bannerTitle: "BRAVO ERP<br/>Implementation",
    bannerSubtitle: "End-to-end ERP deployment across accounting, warehouse, purchasing, production & HR-payroll.",
    bannerLabel: "Enterprise",
    metrics: { bpmn: 0, screens: 0, stories: 0 },
    href: "/projects/bravo-erp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-stone-500 max-w-lg text-lg">
            From Needs to Solutions — a curated showcase spanning sport-tech, ERP, fintech, and internal tools.
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
                className="group relative rounded-3xl bg-stone-50 border border-stone-100 overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 hover:border-emerald-200/50 transition-all duration-500 hover:-translate-y-1"
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
                          {p.metrics.bpmn} Sequence Diagrams
                        </span>
                        <span className="px-2.5 py-1 text-xs font-bold bg-white/90 rounded-full text-stone-800 backdrop-blur-sm shadow-sm">
                          {p.metrics.screens} Screens
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
                        <h3 className="font-display text-xl md:text-2xl group-hover:text-emerald-800 transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-sm text-stone-400 mt-0.5">{p.period}</p>
                      </div>
                      <span className="shrink-0 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {p.domain}
                      </span>
                    </div>
                  )}

                  {/* Title for cards with banner */}
                  {(p.image || p.gradient) && (
                    <h3 className="font-display text-xl md:text-2xl group-hover:text-emerald-800 transition-colors mb-3">
                      {p.title}
                    </h3>
                  )}

                  <p className="text-stone-500 text-sm mb-5 leading-relaxed">{p.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-stone-600">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full bg-white text-stone-500 border border-stone-150 font-medium group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                {p.href && (
                  <div className="absolute top-16 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <ArrowUpRight size={16} className="text-emerald-600" />
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
