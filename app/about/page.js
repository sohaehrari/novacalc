import Link from "next/link";
import {
  Calculator,
  Zap,
  ShieldCheck,
  Smartphone,
  Code2,
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Smart Calculations",
    description:
      "Perform everyday calculations quickly with a clean and intuitive calculator experience.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Fast & Responsive",
    description:
      "NovaCalc is designed to respond instantly, giving you a smooth calculation experience.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Results",
    description:
      "Accurate calculations with a simple interface that helps reduce unnecessary mistakes.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Use NovaCalc comfortably on desktops, tablets, and mobile devices.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "Built with modern web technologies to provide a fast and maintainable application.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: Palette,
    title: "Clean Interface",
    description:
      "A minimal and modern design focused on usability, readability, and simplicity.",
    color: "from-indigo-500 to-blue-400",
  },
];

const benefits = [
  "Simple and intuitive interface",
  "Fast calculation experience",
  "Responsive on every screen",
  "Modern and accessible design",
  "Easy to use for everyday calculations",
  "Built with Next.js and Tailwind CSS",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute right-[-100px] top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Simple. Fast. Powerful.</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              NovaCalc
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            A modern calculator built to make everyday calculations
            effortless. NovaCalc combines simplicity, speed, and a beautiful
            interface into one powerful experience.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Try NovaCalc
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/[0.08]"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Calculator preview */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    NovaCalc
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    Modern calculator
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 text-right">
                <p className="text-sm text-slate-500">Result</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight">
                  1,024
                </p>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {[
                  "AC",
                  "⌫",
                  "%",
                  "÷",
                  "7",
                  "8",
                  "9",
                  "×",
                  "4",
                  "5",
                  "6",
                  "−",
                  "1",
                  "2",
                  "3",
                  "+",
                  "0",
                  ".",
                  "=",
                  "✓",
                ].map((key, index) => (
                  <div
                    key={index}
                    className={`flex h-14 items-center justify-center rounded-xl border border-white/5 ${
                      key === "="
                        ? "bg-blue-500 text-white"
                        : key === "AC"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-white/[0.04] text-slate-300"
                    }`}
                  >
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Stats */}
          <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="mt-2 text-sm text-slate-500">Responsive</p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold text-white">Fast</p>
            <p className="mt-2 text-sm text-slate-500">Performance</p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="mt-2 text-sm text-slate-500">Available</p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold text-white">∞</p>
            <p className="mt-2 text-sm text-slate-500">Calculations</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Powerful Features
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for{" "}
            <span className="text-cyan-400">simple calculations</span>
          </h2>

          <p className="mt-5 text-slate-400">
            NovaCalc is designed with simplicity and performance in mind,
            giving you everything you need without unnecessary complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Why NovaCalc?
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for simplicity.
              <br />
              Designed for everyone.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              Whether you're solving a quick equation or working through
              everyday calculations, NovaCalc gives you a clean and reliable
              experience without unnecessary distractions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
                <Code2 className="h-4 w-4 text-blue-400" />
                Modern Stack
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Built with modern web technology
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                NovaCalc uses modern technologies to deliver a fast,
                responsive, and maintainable web application.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <p className="text-lg font-semibold">Next.js</p>
                <p className="mt-2 text-sm text-slate-500">
                  Modern React framework
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <p className="text-lg font-semibold">Tailwind</p>
                <p className="mt-2 text-sm text-slate-500">
                  Utility-first styling
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <p className="text-lg font-semibold">Lucide</p>
                <p className="mt-2 text-sm text-slate-500">
                  Beautiful icons
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                <p className="text-lg font-semibold">React</p>
                <p className="mt-2 text-sm text-slate-500">
                  Component architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-violet-600/20 p-10 text-center sm:p-16">
          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">
            <Sparkles className="mx-auto mb-5 h-8 w-8 text-cyan-400" />

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to calculate smarter?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Try NovaCalc today and experience a simple, fast, and modern
              calculator built for everyday use.
            </p>

            <Link
              href="/"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Start Calculating
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} NovaCalc. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/calculator"
              className="transition hover:text-white"
            >
              Calculator
            </Link>

            <a
              href="#features"
              className="transition hover:text-white"
            >
              Features
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
