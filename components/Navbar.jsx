"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Calculator", href: "/calculator", icon: "⌘" },
  { name: "Scientific", href: "/scientific", icon: "∑" },
  { name: "History", href: "/history", icon: "◷" },
  { name: "Settings", href: "/settings", icon: "⚙" },
  { name: "About", href: "/about", icon: "i" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-semibold shadow-lg shadow-indigo-500/20 transition group-hover:scale-105">
            ∑
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide">CALCX</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Novacalc
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <span className="text-sm text-indigo-400 transition group-hover:text-indigo-300">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 shadow-lg shadow-white/5 transition hover:bg-zinc-200"
          >
            Start
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-400/20">
                  {item.icon}
                </span>

                <span>{item.name}</span>

                <span className="ml-auto text-zinc-600">→</span>
              </Link>
            ))}

            <Link
              href="/calculator"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}