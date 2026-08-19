"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const { t } = useLang();

  const navLinks = [
    { href: "/", label: t.nav.home, match: "/" },
    { href: "/experience-skills", label: t.nav.experience, match: "/experience-skills" },
    { href: "/#projects", label: t.nav.projects, match: "/#projects" },
    { href: "/#achievements", label: t.nav.achievements, match: "/#achievements" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["achievements", "projects", "home"];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(id);
              return;
            }
          }
        }
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  function isActive(link: (typeof navLinks)[number]) {
    if (pathname === "/experience-skills") {
      return link.match === "/experience-skills";
    }
    if (pathname === "/") {
      if (link.match === "/" && (activeSection === "home" || activeSection === "")) return true;
      if (link.match === "/#projects" && activeSection === "projects") return true;
      if (link.match === "/#achievements" && activeSection === "achievements") return true;
    }
    return false;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-sm border-b border-stone-200/50 dark:border-stone-700/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-0.5">
          <span className="font-display text-2xl text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors">
            HOANG
          </span>
          <span className="text-lg font-light text-stone-400 dark:text-stone-500">.BA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const active = isActive(l);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 ${
                  active
                    ? "text-emerald-700 dark:text-emerald-400 after:w-full"
                    : "text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 after:w-0 hover:after:w-full"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="/CV_Le_Minh_Hoang_BA.pdf"
            target="_blank"
            className="group flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full bg-emerald-800 text-white hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 active:scale-95"
          >
            {t.nav.viewCV}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-700 dark:text-stone-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-700/50`}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((l) => {
            const active = isActive(l);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  active
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400"
                }`}
              >
                {active && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />}
                {l.label}
              </Link>
            );
          })}
          <a
            href="/CV_Le_Minh_Hoang_BA.pdf"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full bg-emerald-800 text-white"
          >
            {t.nav.viewCV} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
