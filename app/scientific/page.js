

import Link from "next/link";

// Provides the dedicated scientific calculator workspace and introduces its advanced calculation tools
export default function ScientificPage() {
  const features = [
    "Square root",
    "Square & cube",
    "Trigonometry",
    "Logarithms",
    "Factorial",
    "Reciprocal",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
            NexaCalc
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Scientific Calculator
          </h1>

          <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
            Perform advanced mathematical calculations with a clean,
            focused, and responsive workspace.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.06]"
            >
              <p className="text-sm font-medium text-zinc-200">{feature}</p>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Available in the scientific calculation workspace.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/calculator"
            className="inline-flex rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.09] hover:text-white"
          >
            Back to Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}