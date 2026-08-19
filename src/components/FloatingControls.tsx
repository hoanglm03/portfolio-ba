"use client";

import { Sun, Moon, Settings } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function FloatingControls() {
  const { theme, toggleTheme } = useThemeContext();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-6 right-4 z-50">
      {/* Panel — absolute so it doesn't shift the button */}
      {open && (
        <div className="absolute bottom-14 right-0 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-600 rounded-2xl shadow-xl p-2 flex flex-col gap-1 min-w-[160px]">
          {/* Dark / Light mode */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors text-left w-full"
          >
            <span className="w-7 h-7 rounded-lg bg-stone-100 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300">
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </span>
            <span className="text-sm font-medium text-stone-700 dark:text-stone-200">
              {isDark ? "Light mode" : "Dark mode"}
            </span>
          </button>

          <div className="h-px bg-stone-100 dark:bg-stone-700 mx-2" />

          {/* Language */}
          <button
            onClick={() => setLang(lang === "en" ? "vi" : "en")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors text-left w-full"
          >
            <span className="w-7 h-7 rounded-lg bg-stone-100 dark:bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">
              {lang === "en" ? "VI" : "EN"}
            </span>
            <span className="text-sm font-medium text-stone-700 dark:text-stone-200">
              {lang === "en" ? "Tiếng Việt" : "English"}
            </span>
          </button>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Settings"
        className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border ${
          open
            ? "bg-emerald-700 text-white border-emerald-600"
            : "bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-600 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400"
        }`}
      >
        <Settings size={17} className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
      </button>
    </div>
  );
}
