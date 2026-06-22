"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, Layout, Shield, Users, CheckCircle, Database, GitBranch, Smartphone, Target, DollarSign } from "lucide-react";

const keyMetrics = [
  { icon: FileText, value: "18", label: "Requirements" },
  { icon: Layout, value: "10+", label: "UI Screens" },
  { icon: GitBranch, value: "5", label: "Use Cases" },
  { icon: Shield, value: "7", label: "Business Rules" },
  { icon: Database, value: "24+", label: "NFRs" },
  { icon: Users, value: "9", label: "Stakeholders (RACI)" },
];

const features = [
  {
    title: "eKYC Identity Verification",
    description: "Integrated NCDC API for real-time identity verification using CCCD/Passport. OCR solution extracts data from ID documents automatically.",
  },
  {
    title: "Digital Customer Onboarding",
    description: "End-to-end flow: Product Page → Identity Verification → Personal Profile → eKYC → Account & Card Selection → Welcome Email.",
  },
  {
    title: "Bank Account & Debit Card",
    description: "3 account types (Classic, Gold, Platinum) + 2 debit card types with color selection. Auto-creates login credentials upon success.",
  },
  {
    title: "MoSCoW Prioritization",
    description: "All 18 requirements classified as Must Have. Clear requirement status tracking: New → Approved → Implemented → Cancelled/Deferred.",
  },
  {
    title: "KYC Eligibility Criteria",
    description: "5 verification criteria: Full Name match, DOB match, Age ≥ 18, Occupation Status (Employed/Self-Employed/Student), Individual Status (Alive).",
  },
  {
    title: "Security & Compliance",
    description: "PCI-DSS compliance, 1024-bit SSL encryption, audit trails, data protection (8 principles), 99% uptime SLA, retry mechanisms.",
  },
];

const useCases = [
  { id: "UC1", name: "Capture & Verify CCCD/Passport No.", flows: "Basic + 3 Alternative + 1 Exceptional" },
  { id: "UC2", name: "Capture & Create Customer Profile", flows: "Basic + 4 Alternative" },
  { id: "UC3", name: "Upload KYC Document & Perform eKYC", flows: "Basic + 1 Alternative" },
  { id: "UC4", name: "Select & Create Bank Account & Debit Card", flows: "Basic" },
  { id: "UC5", name: "Login with Phone Number", flows: "Basic + 2 Alternative" },
];

const documents = [
  { name: "Software Requirements Specification (SRS)", desc: "18 requirements (REQ1–REQ18), MoSCoW prioritized, all Must Have" },
  { name: "Business Rules Catalogue (7 rules)", desc: "CCCD/Passport format validation, uniqueness constraints, PIT format" },
  { name: "Use Case Specifications (5 UCs)", desc: "Detailed basic/alternative/exceptional flows with UI specifications per screen" },
  { name: "Non-Functional Requirements (24+)", desc: "Performance, security, scalability, compatibility, availability, compliance" },
  { name: "KYC Verification Criteria Matrix", desc: "5 criteria matching customer data vs NCDC data" },
  { name: "System Context Diagram", desc: "NCDC, SMS Provider (Vietguys), OCR Solution, Circle Banking System" },
  { name: "Process Flows (To-Be)", desc: "E2E Customer Creation to Login, Login Sub Process, OTP Sub Process" },
  { name: "RACI Matrix & Distribution List", desc: "9 stakeholders: PO, BA, PM, Architects, Marketing, Sales, Support" },
];

const techStack = [
  "NCDC API",
  "OCR Solution",
  "Vietguys SMS",
  "Swagger/OpenAPI",
  "Figma",
  "SSL/TLS 1024-bit",
  "PCI-DSS",
  "Firebase",
];

export default function CircleBankDetail() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero banner */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <Image
          src="/projects/banking-bg.jpg"
          alt="Banking & fintech"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/60 to-emerald-900/40" />

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
                Banking & Fintech
              </span>
              <span className="text-emerald-300 text-sm">Mar 2025 – Jul 2025</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-3">Circle Bank Mobile App</h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Digital onboarding app with eKYC identity verification, account creation, and debit card issuance — targeting 80% conversion rate and $5M USD revenue gain.
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

        {/* Business context */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-6">About the Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-stone-600 leading-relaxed mb-4">
                Circle Bank (CB) is Vietnam&apos;s leading bank with a strong Transaction Account Onboarding franchise.
                However, the in-branch application conversion rate was only <strong>37.5%</strong>, and customers waited
                up to 2 weeks for Customer Service contact.
              </p>
              <p className="text-stone-600 leading-relaxed">
                The Digital Sales Team created this Customer Onboarding Digital Application to increase conversion
                to <strong>80%</strong>, projecting <strong>$5 million USD</strong> revenue gain by FY2025.
                The SRS covers the complete digital onboarding journey from identity verification to account creation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Conversion Target</p>
                  <p className="text-sm text-stone-500">37.5% → 80% application conversion rate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Revenue Impact</p>
                  <p className="text-sm text-stone-500">Projected $5M USD revenue gain by FY2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Platform</p>
                  <p className="text-sm text-stone-500">iOS 10+ / Android 10+ · English & Vietnamese</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={18} className="mt-1 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Compliance</p>
                  <p className="text-sm text-stone-500">PCI-DSS, Data Protection Act (8 principles), 99% uptime SLA</p>
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

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl mb-8">Use Case Catalogue</h2>
          <div className="space-y-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-emerald-200 transition-colors"
              >
                <span className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm flex items-center justify-center border border-emerald-100">
                  {uc.id}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-stone-800 text-sm">{uc.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{uc.flows}</p>
                </div>
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
          <h2 className="font-display text-3xl mb-6">Tools & Integrations</h2>
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

        {/* Onboarding flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl mb-8">Onboarding Flow</h2>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              "Product Page",
              "→",
              "CCCD/Passport Verify",
              "→",
              "NCDC Integration",
              "→",
              "Personal Details",
              "→",
              "Address & Occupation",
              "→",
              "Create Profile",
              "→",
              "eKYC Upload",
              "→",
              "eKYC Check",
              "→",
              "Select Account & Card",
              "→",
              "Welcome Email",
            ].map((step, i) =>
              step === "→" ? (
                <span key={i} className="text-emerald-400 font-bold text-lg">→</span>
              ) : (
                <span key={i} className="px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
                  {step}
                </span>
              )
            )}
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
