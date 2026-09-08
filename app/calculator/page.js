import Calculator from "@/components/calculator/Calculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-lg shadow-indigo-200">
              🧮
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Calculator
            </h1>

            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Simple, fast and easy calculations
            </p>
          </div>

          {/* Calculator */}
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-2 shadow-2xl shadow-indigo-100 backdrop-blur-xl sm:p-3">
            <Calculator />
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-xs text-zinc-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}