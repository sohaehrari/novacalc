export default function Display({expression,result}) {
    return (
      <div className="border-b border-white/10 bg-zinc-950 px-5 py-6 sm:px-6 sm:py-7">
        
        <div className="min-h-6 overflow-x-auto text-right text-sm text-zinc-500">
          {expression||"0"}
        </div>
  
        <div className="mt-2 overflow-x-auto text-right text-4xl font-medium tracking-tight text-white sm:text-5xl">
          {result}
        </div>
  
      </div>
    );
  }