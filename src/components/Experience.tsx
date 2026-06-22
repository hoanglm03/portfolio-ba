"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started University",
    desc: "Bachelor of Management Information Systems at Thuong Mai University (GPA: 3.4/4.0)",
    type: "education" as const,
  },
  {
    year: "Jan 2025",
    title: "BRAVO Software JSC",
    desc: "Joined as Functional Consultant / BA Pre-Sales — ERP implementation across accounting, warehouse, HR, and production modules.",
    type: "work" as const,
  },
  {
    year: "Aug 2025",
    title: "Freelance Web/App Builder",
    desc: "Started freelancing — gathering requirements, designing UI/UX prototypes in Figma, deploying on Vercel.",
    type: "work" as const,
  },
  {
    year: "Oct 2025",
    title: "Viet Tri Dao Digital Technology Co., Ltd.",
    desc: "Business Analyst for SportHub Platform — delivered BRD, SRS, 80+ User Stories (Gherkin) for a cross-platform sports booking app with 4 system roles. Team of 10.",
    type: "work" as const,
  },
  {
    year: "2025",
    title: "1st Prize — LowCode Challenge",
    desc: "Won overall 1st prize at LowCode Challenge 2025 (6M VND award).",
    type: "achievement" as const,
  },
  {
    year: "2026",
    title: "Graduating & Next Chapter",
    desc: "Completing B.Sc in MIS. Seeking Junior BA role to deepen domain expertise and deliver measurable business value.",
    type: "education" as const,
  },
];

const typeColors = {
  education: "bg-amber-400",
  work: "bg-emerald-500",
  achievement: "bg-rose-400",
};

const typeBadge = {
  education: "bg-amber-50 text-amber-700",
  work: "bg-emerald-50 text-emerald-700",
  achievement: "bg-rose-50 text-rose-700",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">
            Timeline
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Growth Journey</h2>
          <p className="text-stone-500 text-lg">
            From university foundations to professional BA practice.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-100 md:-translate-x-px" />

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
                <div className={`w-[14px] h-[14px] rounded-full ${typeColors[item.type]} ring-4 ring-stone-50 mt-5 ml-[17px] md:ml-0`} />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-display text-sm text-emerald-700">{item.year}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${typeBadge[item.type]}`}>
                    {item.type}
                  </span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
