"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Search,
  BarChart3,
  PenTool,
  Code,
  TestTube,
  Rocket,
  MessageSquare,
  Users,
  Brain,
  Zap,
  Crown,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease },
};

const lifecycleIcons = [Search, BarChart3, PenTool, Code, TestTube, Rocket];

const softSkillIcons = [MessageSquare, Users, Brain, Zap, Crown];

export default function ExperienceSkillsPage() {
  const { t } = useLang();
  const ec = t.experienceSkillsContent;

  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-emerald-300 top-[-150px] right-[-100px] animate-pulse-soft" />
        <div className="orb w-[350px] h-[350px] bg-amber-200 bottom-[-80px] left-[-60px] animate-pulse-soft" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50 mb-6">
              {t.experienceSkills.heroBadge}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-5 text-stone-900 dark:text-stone-100">
              {t.experienceSkills.heroTitle}{" "}
              <span className="text-emerald-700 dark:text-emerald-400">{t.experienceSkills.heroTitleHighlight}</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {t.experienceSkills.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Professional Experience ── */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Briefcase size={18} />
            </div>
            <h2 className="font-display text-3xl text-stone-900 dark:text-stone-100">{t.experienceSkills.professionalExp}</h2>
          </motion.div>

          <div className="space-y-8">
            {ec.experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="group rounded-3xl border border-stone-100 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 p-7 md:p-8 hover:shadow-2xl hover:shadow-emerald-50 dark:hover:shadow-emerald-900/20 hover:border-emerald-200/50 dark:hover:border-emerald-700 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors text-stone-900 dark:text-stone-100 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-stone-400 dark:text-stone-500">{exp.company}</p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">{exp.period}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-5">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-display text-xl text-emerald-700 dark:text-emerald-400">{m.value}</div>
                        <div className="text-[11px] text-stone-400 dark:text-stone-500 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Domains + Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.domains.map((d) => (
                    <span key={d} className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-100 dark:border-emerald-800">
                      {d}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-white dark:bg-stone-700 text-stone-500 dark:text-stone-400 border border-stone-150 dark:border-stone-600 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-24 bg-stone-50 dark:bg-stone-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <GraduationCap size={18} />
            </div>
            <h2 className="font-display text-3xl text-stone-900 dark:text-stone-100">{t.experienceSkills.education}</h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="rounded-3xl border border-stone-100 dark:border-stone-700 bg-white dark:bg-stone-800 p-7 md:p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100">{ec.education.university}</h3>
                <p className="text-sm text-stone-400 dark:text-stone-500 mt-1">{ec.education.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{ec.education.period}</p>
                <p className="font-display text-lg text-stone-900 dark:text-stone-100">{ec.education.gpa}</p>
              </div>
            </div>
            <p className="font-semibold text-stone-800 dark:text-stone-200 mb-4">
              {ec.education.degree}
            </p>
            <div className="space-y-2.5 text-sm text-stone-600 dark:text-stone-300">
              <div className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>{ec.education.courseworkLabel}:</strong> {ec.education.courseworkValue}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span><strong>{ec.education.achievementLabel}:</strong> {ec.education.achievementValue}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {ec.education.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-stone-50 dark:bg-stone-700 text-stone-500 dark:text-stone-400 border border-stone-150 dark:border-stone-600 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BA Lifecycle ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950" />
        <div className="orb w-[500px] h-[500px] bg-emerald-400 top-[-150px] left-[-150px] opacity-[0.08]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-3 block">
              {t.experienceSkills.methodologyLabel}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{t.experienceSkills.baLifecycle}</h2>
            <p className="text-emerald-200/60 max-w-xl mx-auto text-lg">
              {t.experienceSkills.lifecycleSubtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ec.lifecycle.map((item, i) => {
              const Icon = lifecycleIcons[i];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                  className="group p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.1] hover:border-emerald-400/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-display text-lg group-hover:bg-emerald-500/30 transition-colors">
                      {item.step}
                    </div>
                    <Icon size={18} className="text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-emerald-200/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3 block">
              {t.experienceSkills.capabilitiesLabel}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-stone-900 dark:text-stone-100">{t.experienceSkills.coreCompetencies}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* BA Skills */}
            <motion.div {...fadeIn}>
              <h3 className="font-display text-xl mb-6 text-emerald-800 dark:text-emerald-400">{t.experienceSkills.baSkillsTitle}</h3>
              <div className="space-y-2.5">
                {ec.baSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease }}
                    className="group flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills + Languages */}
            <div>
              <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
                <h3 className="font-display text-xl mb-6 text-emerald-800 dark:text-emerald-400">{t.experienceSkills.softSkillsTitle}</h3>
                <div className="space-y-2.5 mb-10">
                  {ec.softSkills.map((label, i) => {
                    const Icon = softSkillIcons[i];
                    return (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4, ease }}
                        className="group flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                      >
                        <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Icon size={13} />
                        </span>
                        <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <h3 className="font-display text-xl mb-5 text-emerald-800 dark:text-emerald-400">{t.experienceSkills.languagesTitle}</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">{t.experienceSkills.languageVietnamese}</span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{t.experienceSkills.languageVietnameseLevel}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-stone-700">
                      <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">{t.experienceSkills.languageEnglish}</span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{t.experienceSkills.languageEnglishLevel}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-stone-700">
                      <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: "72%" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="py-24 bg-stone-50 dark:bg-stone-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3 block">
              {t.experienceSkills.toolkitLabel}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-stone-900 dark:text-stone-100">{t.experienceSkills.toolsTitle}</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
              {t.experienceSkills.toolsSubtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ec.toolCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                className="group p-6 rounded-2xl border border-stone-100 dark:border-stone-700 bg-white dark:bg-stone-800 hover:shadow-lg hover:border-emerald-200/50 dark:hover:border-emerald-700 transition-all duration-300"
              >
                <h3 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm rounded-lg bg-stone-50 dark:bg-stone-700 border border-stone-100 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
