export default function Display() {
    return (
      // Calculator display: shows the current expression and result
      <div className="border-b border-white/10 bg-zinc-950 px-5 py-6 sm:px-6 sm:py-7">
        
        {/* Current expression */}
        <div className="min-h-6 overflow-x-auto text-right text-sm text-zinc-500">
          128 × 24
        </div>
  
        {/* Current result */}
        <div className="mt-2 overflow-x-auto text-right text-4xl font-medium tracking-tight text-white sm:text-5xl">
          3,072
        </div>
  
      </div>
    );
  }