import Link from "next/link";



export default function Home(){
  const features = [
    {
      title: "Standard Calculator",
      description:
        "Fast and precise calculator for everyday mathematical calculations.",
      href: "/calculator",
      icon: "+",
    },
    {
      title: "Scientific Calculator",
      description:
        "Perform advanced calculations including trigonometry, logarithms, powers, and more.",
      href: "/scientific-calculator",
      icon: "∑",
    },
    {
      title: "Percentage Calculator",
      description:
        "Quickly calculate percentages, discounts, increases, and decreases.",
      href: "/percentage",
      icon: "%",
    },
    {
      title: "Unit Converter",
      description:
        "Convert length, weight, temperature, area, volume, and other common units.",
      href: "/unit-converter",
      icon: "⇄",
    },
    {
      title: "Currency Converter",
      description:
        "Convert values between different currencies quickly and easily.",
      href: "/currency",
      icon: "$",
    },
    {
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index using your height and weight.",
      href: "/bmi",
      icon: "⚖",
    },
  ];
  
return(
<main className="min-h-screen  bg-zinc-950 text-white">
<section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              Smart Calculation Workspace
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Calculate with{" "}
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-white bg-clip-text text-transparent">
                precision.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
              A modern collection of powerful calculators designed to make
              everyday calculations fast, simple, and accurate.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/calculator"
                className="rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Open Calculator
              </Link>

              <Link
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Explore Tools
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-semibold">6+</p>
                <p className="mt-1 text-sm text-zinc-500">Calculation Tools</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">100%</p>
                <p className="mt-1 text-sm text-zinc-500">Free to Use</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">Fast</p>
                <p className="mt-1 text-sm text-zinc-500">Instant Results</p>
              </div>
            </div>
          </div>

          {/* Calculator Preview */}
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-indigo-500/10 blur-3xl" />

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-indigo-500/10 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                {/* Calculator Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">Calculator</p>
                    <h2 className="text-lg font-medium">Standard</h2>
                  </div>

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>
                </div>

                {/* Display */}
                <div className="mb-5 rounded-2xl border border-white/10 bg-zinc-950 p-6 text-right">
                  <p className="text-sm text-zinc-500">12 × 8 + 24</p>
                  <p className="mt-2 text-4xl font-semibold">120</p>
                </div>

                {/* Fake Buttons */}
                <div className="grid grid-cols-4 gap-3">
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
                  ].map((button, index) => (
                    <button
                      key={index}
                      className={`rounded-xl border border-white/10 p-4 text-sm transition ${
                        button === "="
                          ? "bg-indigo-500 text-white hover:bg-indigo-400"
                          : button === "+" ||
                              button === "−" ||
                              button === "×" ||
                              button === "÷"
                            ? "bg-white/10 text-indigo-300 hover:bg-white/15"
                            : "bg-white/[0.03] text-zinc-300 hover:bg-white/10"
                      } ${button === "0" ? "col-span-2" : ""}`}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-indigo-400">
              CALCULATION TOOLS
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to calculate smarter.
            </h2>

            <p className="mt-4 text-zinc-400">
              Choose from a growing collection of simple and powerful tools
              built for everyday calculations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-300 ring-1 ring-indigo-400/20">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-medium">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>

                <div className="mt-5 text-sm font-medium text-indigo-400 transition group-hover:text-indigo-300">
                  Open tool →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-white/[0.03] p-10 text-center sm:p-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to calculate?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Start with our standard calculator and explore all the tools
            available in your calculation workspace.
          </p>

          <Link
            href="/calculator"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Start Calculating
          </Link>
        </div>
      </section>
      <div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
<span>
  Bild for percisions
</span>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 SmartCalc. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/calculator" className="hover:text-white">
              Calculator
            </Link>
            <Link href="#features" className="hover:text-white">
              Tools
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

