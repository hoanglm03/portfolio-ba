"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  const stats = [
    { value: "5+", label: t.hero.stats.projects, delay: 0 },
    { value: "80+", label: t.hero.stats.userStories, delay: 0.1 },
    { value: "3+", label: t.hero.stats.clients, delay: 0.2 },
    { value: "20+", label: t.hero.stats.trained, delay: 0.3 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-emerald-300 top-[-100px] right-[-100px] animate-pulse-soft" />
      <div className="orb w-[400px] h-[400px] bg-amber-200 bottom-[10%] left-[-80px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="orb w-[300px] h-[300px] bg-emerald-200 top-[40%] right-[20%] animate-pulse-soft" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full z-10">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                <Sparkles size={12} />
                {t.hero.badge}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-stone-900 dark:text-stone-100"
            >
              {t.hero.greeting}{" "}
              <span className="relative inline-block text-emerald-800 dark:text-emerald-400">
                {t.hero.name}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#059669" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-stone-500 dark:text-stone-400 leading-relaxed mb-8 max-w-xl"
            >
              {t.hero.description}{" "}
              <span className="text-stone-800 dark:text-stone-200 font-medium">{t.hero.descriptionHighlight}</span>{" "}
              {t.hero.descriptionEnd}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-all hover:shadow-xl hover:shadow-emerald-200 dark:hover:shadow-emerald-900 active:scale-95"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full font-semibold border-2 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all active:scale-95"
              >
                {t.hero.contactMe}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-emerald-200/60 dark:border-emerald-700/60 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-emerald-100/40 dark:border-emerald-800/40" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-emerald-100 dark:shadow-emerald-900/50 ring-4 ring-white dark:ring-stone-800 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-emerald-950">
                <Image
                  src="/avatar.jpg"
                  alt="Hoang Le Minh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 glass dark:bg-stone-800/60 dark:border-stone-700/40 rounded-2xl px-4 py-2 shadow-lg"
              >
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">1st Prize LowCode 🏆</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + s.delay, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 text-center bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="font-display text-3xl md:text-4xl text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors">
                {s.value}
              </div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-14"
        >
          <a href="#projects" className="group flex flex-col items-center gap-1 text-stone-400 dark:text-stone-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <span className="text-xs font-medium uppercase tracking-widest">{t.hero.scroll}</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
