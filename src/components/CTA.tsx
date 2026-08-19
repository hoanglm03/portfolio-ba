"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950" />
      <div className="orb w-[500px] h-[500px] bg-emerald-400 top-[-150px] left-[-150px] opacity-[0.08]" />
      <div className="orb w-[400px] h-[400px] bg-amber-300 bottom-[-100px] right-[-100px] opacity-[0.06]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-4 block">
            {t.cta.sectionLabel}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-5">
            {t.cta.title}
          </h2>
          <p className="text-emerald-100/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a
              href="https://mail.google.com/mail/?view=cm&to=hoanglm03.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-emerald-200/80 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">hoanglm03.work@gmail.com</span>
            </a>
            <a
              href="tel:0367725243"
              className="group flex items-center gap-2 text-emerald-200/80 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">0367725243</span>
            </a>
            <span className="flex items-center gap-2 text-emerald-200/80 text-sm">
              <MapPin size={16} />
              {t.cta.location}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=hoanglm03.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-900 font-semibold hover:bg-emerald-50 transition-all hover:shadow-2xl hover:shadow-emerald-400/20 active:scale-95"
            >
              {t.cta.getInTouch}
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/CV_Le_Minh_Hoang_BA.pdf"
              target="_blank"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-emerald-400/40 text-white font-semibold hover:bg-emerald-800/50 hover:border-emerald-300/60 transition-all active:scale-95"
            >
              <Download size={16} />
              {t.cta.downloadCV}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
