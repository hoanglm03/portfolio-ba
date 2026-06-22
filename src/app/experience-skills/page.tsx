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

const ease = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease },
};

/* ── Professional Experience ── */
const experiences = [
  {
    role: "Functional Consultant / BA Pre-Sales",
    level: "JUNIOR",
    company: "BRAVO Software JSC — Ha Noi",
    period: "Jan 2025 – May 2026",
    metrics: [
      { value: "3+", label: "Clients" },
      { value: "20+", label: "Users Trained" },
      { value: "5", label: "Modules" },
    ],
    bullets: [
      "Elicited and documented detailed business requirements from 3+ enterprise clients across accounting, warehouse, purchasing, production, and HR-payroll modules, securing 100% timely sign-off on BRDs.",
      "Configured BRAVO ERP system components (catalogs, parameters, user authorization, document circulation), optimizing core operational workflows by 20%.",
      "Delivered tailored training sessions for 20+ end-users per project, reducing post-go-live support tickets by 40%.",
      "Collaborated with B2B client departments to troubleshoot deployment issues, minimizing data processing errors by 35% during UAT.",
    ],
    domains: ["ERP", "Accounting", "Warehouse", "HR-Payroll", "Production"],
    tags: ["BRD", "ERP Config", "UAT", "Training", "B2B"],
  },
  {
    role: "Business Analyst — SportHub Platform",
    level: "JUNIOR",
    company: "Viet Tri Dao Digital Technology Co., Ltd.",
    period: "Oct 2025 – Jan 2026",
    metrics: [
      { value: "80+", label: "User Stories" },
      { value: "4", label: "System Roles" },
      { value: "10", label: "Team Size" },
    ],
    bullets: [
      "Collected requirements to deliver BRD, SRS, and 80+ User Stories (Gherkin) for a cross-platform sports booking app.",
      "Designed UI wireframes via Figma and mapped system workflows using UML diagrams.",
      "Formulated business rules (OTP, Refund, Google Maps) and coordinated End-to-End UAT.",
    ],
    domains: ["Booking", "Sport"],
    tags: ["BRD", "SRS", "Gherkin", "Figma", "UML", "UAT"],
  },
  {
    role: "Freelance Web/App Builder",
    level: "FREELANCE",
    company: "Self-employed",
    period: "Aug 2025 – Present",
    metrics: [
      { value: "3+", label: "Projects" },
      { value: "95%", label: "Satisfaction" },
      { value: "100%", label: "On-time" },
    ],
    bullets: [
      "Gathered and analyzed business needs for product validation, translating vague ideas into clear user stories and feature matrices.",
      "Designed interactive UI/UX wireframes and high-fidelity prototypes using Figma, cutting client feedback iterations by 20%.",
      "Engineered responsive interfaces and managed deployment on Vercel with optimized domain configuration.",
      "Resolved post-launch frontend and functional bugs, maintaining 95% customer satisfaction rate.",
    ],
    domains: ["Web", "Landing Page", "Product Validation"],
    tags: ["User Stories", "Figma", "Vercel", "UI/UX"],
  },
];

/* ── BA Lifecycle ── */
const lifecycle = [
  { step: 1, title: "Requirement Gathering", desc: "Elicit needs from stakeholders via interviews, workshops, and document analysis.", icon: Search },
  { step: 2, title: "Requirement Analysis", desc: "Analyze, prioritize (MoSCoW), and validate requirements against business goals.", icon: BarChart3 },
  { step: 3, title: "Design Phase", desc: "Model processes (BPMN/UML), create wireframes, and draft SRS/BRD documentation.", icon: PenTool },
  { step: 4, title: "Implementation", desc: "Collaborate with developers, clarify requirements, and manage change requests.", icon: Code },
  { step: 5, title: "Testing Phase", desc: "Coordinate UAT, write test cases, verify acceptance criteria, and track defects.", icon: TestTube },
  { step: 6, title: "Deployment", desc: "Support go-live, deliver training, and gather feedback for continuous improvement.", icon: Rocket },
];

/* ── Core Competencies ── */
const baSkills = [
  "Requirements Elicitation & Analysis",
  "Stakeholder Management",
  "Business Process Modeling (BPMN)",
  "Documentation (BRD, SRS, User Stories)",
  "Wireframing & Prototyping",
  "Feature Prioritization (MoSCoW)",
  "Sprint Planning & Backlog Management",
  "End-to-End SDLC Delivery",
  "UAT Coordination & Testing",
];

const softSkills = [
  { label: "Communication", icon: MessageSquare },
  { label: "Teamwork", icon: Users },
  { label: "Critical Thinking", icon: Brain },
  { label: "Quick Adaptation & Self-learning", icon: Zap },
  { label: "Leadership", icon: Crown },
];

/* ── Tools ── */
const toolCategories = [
  { category: "Diagram & Modeling", tools: ["Draw.io", "Lucidchart", "Visio", "BPMN 2.0"] },
  { category: "Wireframing & Prototyping", tools: ["Figma", "Balsamiq", "Axure", "v0", "Lovable", "Figma Make"] },
  { category: "Data & Reporting", tools: ["SQL (Advanced)", "Power BI", "MS Excel", "Pivot Tables", "VLOOKUP"] },
  { category: "Documentation", tools: ["Confluence", "Notion", "MS Office", "Google Workspace"] },
  { category: "Project Management", tools: ["Jira", "Agile/Scrum", "Waterfall", "SDLC"] },
  { category: "API & Testing", tools: ["Postman"] },
];

export default function ExperienceSkillsPage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-emerald-300 top-[-150px] right-[-100px] animate-pulse-soft" />
        <div className="orb w-[350px] h-[350px] bg-amber-200 bottom-[-80px] left-[-60px] animate-pulse-soft" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-100/80 text-emerald-800 backdrop-blur-sm border border-emerald-200/50 mb-6">
              Experience & Skills
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-5">
              BA Expertise &{" "}
              <span className="text-emerald-700">Technical Toolset</span>
            </h1>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
              End-to-end project experience throughout the software development
              life cycle — from requirement gathering to deployment & training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Professional Experience ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Briefcase size={18} />
            </div>
            <h2 className="font-display text-3xl">Professional Experience</h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="group rounded-3xl border border-stone-100 bg-stone-50 p-7 md:p-8 hover:shadow-2xl hover:shadow-emerald-50 hover:border-emerald-200/50 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="font-display text-xl md:text-2xl group-hover:text-emerald-800 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider rounded-full bg-emerald-100 text-emerald-700">
                        {exp.level}
                      </span>
                    </div>
                    <p className="text-sm text-stone-400">{exp.company}</p>
                    <p className="text-sm text-emerald-700 font-semibold mt-0.5">{exp.period}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-5">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-display text-xl text-emerald-700">{m.value}</div>
                        <div className="text-[11px] text-stone-400 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Domains + Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.domains.map((d) => (
                    <span key={d} className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                      {d}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white text-stone-500 border border-stone-150 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <GraduationCap size={18} />
            </div>
            <h2 className="font-display text-3xl">Education</h2>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="rounded-3xl border border-stone-100 bg-white p-7 md:p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="font-display text-2xl">Thuong Mai University</h3>
                <p className="text-sm text-stone-400 mt-1">Ha Noi, Viet Nam</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-700">2022 – 2026</p>
                <p className="font-display text-lg">GPA: 3.4/4.0</p>
              </div>
            </div>
            <p className="font-semibold text-stone-800 mb-4">
              Bachelor of Management Information Systems
            </p>
            <div className="space-y-2.5 text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>Core Coursework:</strong> Business Analysis, IT Project Management, Database Management Systems, Systems Analysis & Design</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span><strong>Achievement:</strong> 1st Prize (Overall Winner) — LowCode Challenge 2025</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Business Analysis", "IT Project Management", "DBMS", "Systems Design"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-stone-50 text-stone-500 border border-stone-150 font-medium">
                  {t}
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
              Methodology
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">BA Lifecycle</h2>
            <p className="text-emerald-200/60 max-w-xl mx-auto text-lg">
              My approach through each phase of the software development life cycle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lifecycle.map((item, i) => (
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
                  <item.icon size={18} className="text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-sm text-emerald-200/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">
              Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Core Competencies</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* BA Skills */}
            <motion.div {...fadeIn}>
              <h3 className="font-display text-xl mb-6 text-emerald-800">BA & Product Skills</h3>
              <div className="space-y-2.5">
                {baSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease }}
                    className="group flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-stone-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills + Languages */}
            <div>
              <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
                <h3 className="font-display text-xl mb-6 text-emerald-800">Soft Skills</h3>
                <div className="space-y-2.5 mb-10">
                  {softSkills.map((skill, i) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease }}
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300"
                    >
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <skill.icon size={13} />
                      </span>
                      <span className="text-sm font-medium text-stone-700">{skill.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <h3 className="font-display text-xl mb-5 text-emerald-800">Languages</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-700">Vietnamese</span>
                      <span className="text-xs font-medium text-emerald-600">Native</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-200">
                      <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-700">English</span>
                      <span className="text-xs font-medium text-emerald-600">B1 — TOEIC 720/990</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-200">
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
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3 block">
              Toolkit
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Analysis Tools</h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg">
              Tools I use to model processes, design interfaces, analyze data, and manage projects.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toolCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                className="group p-6 rounded-2xl border border-stone-100 bg-white hover:shadow-lg hover:border-emerald-200/50 transition-all duration-300"
              >
                <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm rounded-lg bg-stone-50 border border-stone-100 text-stone-600 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all duration-200 cursor-default"
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
