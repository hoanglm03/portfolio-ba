"use client";

import { motion } from "framer-motion";
import {
  FileText,
  GitBranch,
  Layout,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

const impacts = [
  {
    icon: FileText,
    metric: "80+",
    label: "User Stories",
    desc: "Gherkin-format stories across multiple domains",
  },
  {
    icon: GitBranch,
    metric: "20%",
    label: "Workflow Optimization",
    desc: "Core operational workflows improved via ERP configuration",
  },
  {
    icon: Layout,
    metric: "10+",
    label: "UI Screens Specified",
    desc: "Full UI specifications for banking & sports apps",
  },
  {
    icon: Users,
    metric: "20+",
    label: "Users Trained",
    desc: "End-users trained per ERP project deployment",
  },
  {
    icon: TrendingUp,
    metric: "40%",
    label: "Fewer Support Tickets",
    desc: "Post-go-live support ticket reduction",
  },
  {
    icon: Shield,
    metric: "35%",
    label: "Fewer Data Errors",
    desc: "Data processing errors minimized during UAT",
  },
];

export default function Impact() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950" />
      <div className="orb w-[600px] h-[600px] bg-emerald-400 top-[-200px] right-[-200px] opacity-10" />
      <div className="orb w-[400px] h-[400px] bg-amber-300 bottom-[-100px] left-[-100px] opacity-[0.07]" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-3 block">
            Measurable Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Impact & Results
          </h2>
          <p className="text-emerald-200/70 max-w-lg text-lg">
            Quantifiable outcomes from BA work across ERP, fintech, and sports domains.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.1] hover:border-emerald-400/30 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 group-hover:text-emerald-200 transition-colors">
                <item.icon size={20} />
              </div>
              <div className="font-display text-3xl text-white mb-1">{item.metric}</div>
              <div className="font-semibold text-emerald-100 text-sm">{item.label}</div>
              <p className="text-sm text-emerald-200/50 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
