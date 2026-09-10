"use client"



import History from "@/components/history/History";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function historyPage(){
    const[history]=useLocalStorage("nexacalc-history",[])
    return(
        <main className="min-h-screen bg-zinc-950 py-10 text-white sm:px-6 lg:px-8">
<div>
    <History history={history}/>
</div>
        </main>
    )
}