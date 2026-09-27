"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(onThemeChange: () => void) {
  window.addEventListener(themeChangeEvent, onThemeChange);
  return () => window.removeEventListener(themeChangeEvent, onThemeChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 lg:px-8 xl:px-10" aria-label="Main navigation">
      <Link className="text-lg font-bold tracking-tight text-neutral-950" href="/">
        Hongkhy<span className="text-emerald-800"></span>
      </Link>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-600 sm:gap-x-5 sm:text-sm">
        {navigation.map((item) => (
          item.href === "/#about" ? (
            <a className="transition-colors hover:text-neutral-950" href={item.href} key={item.href}>
              {item.label}
            </a>
          ) : (
            <Link className="transition-colors hover:text-neutral-950" key={item.href} href={item.href}>
              {item.label}
            </Link>
          )
        ))}
        <button
          aria-checked={isDark}
          aria-label="Toggle dark mode"
          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${isDark ? "bg-emerald-700" : "bg-neutral-300"}`}
          onClick={toggleTheme}
          role="switch"
          type="button"
          title="Toggle dark mode"
        >
          <span className={`inline-block h-4 w-4 rounded-full bg-neutral-950 shadow transition-transform ${isDark ? "translate-x-6" : "translate-x-1"}`} />
        </button>
      </div>
    </nav>
  );
}