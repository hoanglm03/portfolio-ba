"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, CheckCircle, ExternalLink, Trophy } from "lucide-react";

const certs = [
  { title: "1st Prize (Overall Winner) — LowCode Challenge 2025", note: "Awarded 6M VND", highlight: true },
  { title: "HackerRank SQL Advanced", href: "https://www.hackerrank.com/certificates/4936919c46f4" },
  { title: "Business Analyst Foundations — LinkedIn Learning", href: "https://www.linkedin.com/learning/certificates/495285e827de44352c8d62c7497fd3ef020eefc27367db29e849ddabbe7bf5a5" },
  { title: "Foundations of User Experience (UX) Design", href: "https://www.coursera.org/account/accomplishments/verify/JV38NXJYP7W9" },
  { title: "Agile Project Management", href: "https://www.coursera.org/account/accomplishments/verify/GC7DQL0NFVWQ" },
];

const skills = [
  {
    category: "BA Core",
    items: ["Elicitation", "BPMN", "UML", "User Stories", "UAT", "MoSCoW"],
  },
  {
    category: "Documentation",
    items: ["Confluence", "Notion", "MS Office", "Draw.io", "Figma"],
  },
  {
    category: "Data & Reporting",
    items: ["SQL (Advanced)", "Power BI", "Excel (Pivot, VLOOKUP, Dashboard)"],
  },
  {
    category: "Tools",
    items: ["Jira", "Postman", "Lucidchart", "Visio", "Balsamiq", "Axure", "v0", "Lovable"],
  },
  {
    category: "Methodology",
    items: ["Agile/Scrum", "Waterfall", "SDLC"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">
            Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Skills & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Certificates & Education */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Award size={16} />
              </div>
              Achievements & Certificates
            </h3>

            {/* Featured: LowCode Award */}
            <a
              href="https://1c.com.vn/vn/news/final-of-the-low-code-idea-development-competition"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-amber-200/60 bg-gradient-to-br from-amber-50 via-white to-emerald-50 hover:shadow-xl hover:border-amber-300 transition-all duration-500 mb-5"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/lowcode-award.jpg"
                  alt="LowCode Challenge 2025 — 1st Prize Award Ceremony at Thuong Mai University"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-amber-300" />
                    <span className="text-white font-bold text-sm">1st Prize — LowCode Challenge 2025</span>
                  </div>
                  <ExternalLink size={14} className="text-white/70 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-amber-700 font-semibold mb-1">Overall Winner — Awarded 6,000,000 VND</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Business idea development competition on 1C:Enterprise LowCode platform, organized at Thuong Mai University.
                </p>
              </div>
            </a>

            {/* Other Certificates */}
            <div className="space-y-2.5">
              {certs.filter(c => !c.highlight).map((c) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <CheckCircle size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                    <p className="font-medium text-sm text-stone-700 flex-1">{c.title}</p>
                    {c.href && <ExternalLink size={14} className="mt-0.5 shrink-0 text-stone-300 group-hover:text-emerald-500 transition-colors" />}
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.title}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3.5 rounded-xl border border-stone-100 bg-white hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={c.title}
                    className="group p-3.5 rounded-xl border border-stone-100 bg-white hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Education */}
            <div className="mt-8 p-6 rounded-2xl bg-stone-50 border border-stone-100">
              <h3 className="font-display text-lg mb-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <GraduationCap size={16} />
                </div>
                Education
              </h3>
              <p className="font-semibold text-stone-800">Thuong Mai University</p>
              <p className="text-sm text-stone-500 mt-1">
                B.Sc Management Information Systems — <span className="text-emerald-700 font-semibold">GPA: 3.4/4.0</span> (2022–2026)
              </p>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Coursework: Business Analysis, IT Project Management, Database Management, Systems Analysis & Design
              </p>
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl mb-6">Skill Set</h3>
            <div className="space-y-6">
              {skills.map((s) => (
                <div key={s.category}>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">
                    {s.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm rounded-full bg-stone-50 border border-stone-150 text-stone-600 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
