"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, FileText, Layout, GitBranch, Database, CheckCircle, Target, Smartphone } from "lucide-react";

const keyMetrics = [
  { icon: FileText, value: "21", label: "Functional Requirements" },
  { icon: Layout, value: "13", label: "Screen Wireframes" },
  { icon: Users, value: "16", label: "User Stories" },
  { icon: CheckCircle, value: "66", label: "Acceptance Criteria" },
  { icon: GitBranch, value: "6", label: "Use Cases" },
  { icon: Database, value: "12", label: "Data Entities (ERD)" },
];

const features = [
  {
    title: "Smart Matching Algorithm",
    description: "Matching Score = Sport (hard filter) + Location (40%) + Skill Level (40%) + Rating (20%). Players find opponents of similar skill within their area.",
  },
  {
    title: "Court Booking System",
    description: "Pessimistic Slot Locking with 5-minute hold, auto-release mechanism. Players can book courts and invite opponents in one seamless flow.",
  },
  {
    title: "Invite & Accept Flow",
    description: "5-minute timeout with auto-rotate to next opponent. First-come-first-served matching ensures fast, fair pairings.",
  },
  {
    title: "Player Rating & ELO",
    description: "3-tier skill system (Beginner / Intermediate / Advanced) with ELO auto-adjustment based on match outcomes.",
  },
  {
    title: "Revenue Model",
    description: "Commission 12% per booking + Premium subscription 49K VND/month + In-app Wallet for seamless payments.",
  },
  {
    title: "Refund Policy Matrix",
    description: "3-tier refund: >24h before match = 100%, 6-24h = 50%, <6h = 0%. Clear business rules documented for every edge case.",
  },
];

const documents = [
  { name: "Business Requirements Document (BRD)", desc: "Business objectives, revenue model, stakeholder analysis, timeline" },
  { name: "Product Requirements Document (PRD)", desc: "P0/P1/P2 capabilities, release plan, MVP scope" },
  { name: "Software Requirements Specification (SRS)", desc: "21 FRs, 7 NFRs, 13 Business Rules, 9 Error Codes" },
  { name: "User Requirements Document (URD)", desc: "Personas, user needs, user journeys" },
  { name: "Use Cases (6)", desc: "Register, Find Opponent, Book Match, Rate, View History, Manage Court" },
  { name: "User Stories (16) + Acceptance Criteria (66)", desc: "Given/When/Then format, sprint-ready backlog" },
  { name: "ERD (12 entities) + Sequence Diagrams (3)", desc: "Full data model & interaction flows in Mermaid" },
  { name: "Traceability Matrix", desc: "BO → CAP → FR → US → AC → UC → Screen — 97% coverage" },
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
  return (
    <div className="min-h-screen bg-stone-50">
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
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                Sport Matching & Booking
              </span>
              <span className="text-emerald-300 text-sm">Oct 2025 – Jan 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-3">SportHub Platform</h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Mobile app connecting sports players with skill-matched opponents nearby and enabling court booking in under 3 minutes.
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
              className="bg-white rounded-2xl p-5 shadow-lg border border-stone-100 text-center hover:shadow-xl transition-shadow"
            >
              <m.icon size={20} className="mx-auto mb-2 text-emerald-600" />
              <div className="font-display text-2xl text-emerald-800">{m.value}</div>
              <div className="text-xs text-stone-500 mt-1 font-medium">{m.label}</div>
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
          <h2 className="font-display text-3xl mb-3">App Demo</h2>
          <p className="text-stone-500 mb-8">UI screens designed in Figma — covering onboarding, matching, booking, and profile flows.</p>
          <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white p-4">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100">
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
          <h2 className="font-display text-3xl mb-6">About the Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-600 leading-relaxed">
                SportHub is a sport matching platform combined with court booking, targeting the Vietnamese market.
                It solves a major pain point: players currently have to find opponents through Facebook groups
                with no way to filter by skill level or location, wasting significant time.
              </p>
              <p className="text-stone-600 leading-relaxed">
                The platform focuses on <strong>Badminton</strong> and <strong>Pickleball</strong> initially,
                with a smart matching algorithm that considers sport type, distance, skill level, and player rating
                to pair opponents of similar ability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Target Market</p>
                  <p className="text-sm text-stone-500">Vietnam — recreational sports players aged 18-40</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Platform</p>
                  <p className="text-sm text-stone-500">Mobile app (Android & iOS)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">System Roles</p>
                  <p className="text-sm text-stone-500">Player, Partner (Court Owner), Staff, Admin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Total Documentation</p>
                  <p className="text-sm text-stone-500">47 files — 97% traceability coverage</p>
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
          <h2 className="font-display text-3xl mb-8">Key Features & Business Rules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-2xl bg-white border border-stone-100 p-6 hover:shadow-lg hover:border-emerald-200/50 transition-all duration-300"
              >
                <h3 className="font-display text-lg text-emerald-800 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.description}</p>
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
          <h2 className="font-display text-3xl mb-8">BA Deliverables</h2>
          <div className="space-y-3">
            {documents.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-emerald-200 transition-colors"
              >
                <FileText size={18} className="mt-0.5 text-emerald-500 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{d.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{d.desc}</p>
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
          <h2 className="font-display text-3xl mb-6">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 text-sm rounded-full bg-white border border-stone-200 text-stone-600 font-medium hover:border-emerald-300 hover:text-emerald-700 transition-colors"
              >
                {t}
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
          <h2 className="font-display text-3xl mb-8">Release Plan</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { version: "v1.0 (MVP)", target: "Jun 2026", items: ["Registration & OTP", "Smart Matching", "Court Booking", "Invite Flow", "Rating System", "Match History"] },
              { version: "v1.1", target: "Aug–Sep 2026", items: ["MoMo/VNPay Payment", "Auto ELO Adjustment", "Partner Registration", "In-app Wallet", "Premium Subscription"] },
              { version: "v2.0", target: "TBD", items: ["Match Cancellation & Refund", "Fraud Detection", "Admin Dashboard & Reports"] },
            ].map((r, i) => (
              <motion.div
                key={r.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`rounded-2xl p-6 border ${i === 0 ? "bg-emerald-50 border-emerald-200" : "bg-white border-stone-100"}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg text-emerald-800">{r.version}</h3>
                  {i === 0 && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white rounded-full">Current</span>
                  )}
                </div>
                <p className="text-xs text-stone-400 mb-4">Target: {r.target}</p>
                <ul className="space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                      <CheckCircle size={13} className={i === 0 ? "text-emerald-500" : "text-stone-300"} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back link */}
        <div className="text-center pt-8 border-t border-stone-100">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
