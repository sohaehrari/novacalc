

"use client";

import History from "@/components/history/History";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function HistoryPage() {
  const [history, setHistory] = useLocalStorage("nexacalc-history", []);

  const clearHistory = () => {
    setHistory([]);
  };

  // Provides the dedicated history workspace and controls persistent history data
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
        <History
          history={history}
          onClear={clearHistory}
        />
      </div>
    </main>
  );
}
