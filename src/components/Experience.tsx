"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const typeColors = {
  education: "bg-amber-400",
  work: "bg-emerald-500",
  achievement: "bg-rose-400",
};

const typeBadge = {
  education: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  work: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  achievement: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

export default function Experience() {
  const { t } = useLang();
  const timeline = t.experience.timeline;

  return (
    <section id="experience" className="py-28 bg-stone-50 dark:bg-stone-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3 block">
            {t.experience.sectionLabel}
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-stone-900 dark:text-stone-100">
            {t.experience.title}
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-100 dark:from-emerald-800 dark:via-emerald-700 dark:to-emerald-900 md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />

              {/* Dot */}
              <div className="relative z-10 shrink-0">
                <div className={`w-[16px] h-[16px] rounded-full ${typeColors[item.type]} ring-4 ring-white dark:ring-stone-900 shadow-md shadow-stone-200 dark:shadow-stone-800 mt-5 ml-[17px] md:ml-0`} />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white dark:bg-stone-800 rounded-2xl p-6 shadow-sm border border-stone-100 dark:border-stone-700 hover:shadow-lg hover:border-emerald-100 dark:hover:border-emerald-800 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-display text-sm text-emerald-700 dark:text-emerald-400">{item.year}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${typeBadge[item.type]}`}>
                    {t.experience.typeBadges[item.type]}
                  </span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors text-stone-900 dark:text-stone-100">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
