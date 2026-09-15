// Provides the dedicated conversion workspace for currency, temperature, and length conversions
export default function ConverterPage() {
    const converters = [
      {
        title: "Currency",
        description: "Convert between supported currencies using live exchange rates.",
      },
      {
        title: "Temperature",
        description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin.",
      },
      {
        title: "Length",
        description: "Convert common length units such as meters, kilometers, and feet.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
              NexaCalc
            </p>
  
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Unit Converter
            </h1>
  
            <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
              Convert currencies, temperatures, and measurements from one
              convenient workspace.
            </p>
          </div>
  
          <div className="grid gap-4 md:grid-cols-3">
            {converters.map((converter) => (
              <div
                key={converter.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.06]"
              >
                <h2 className="text-lg font-semibold text-white">
                  {converter.title}
                </h2>
  
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {converter.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  
  
  
  
  
  