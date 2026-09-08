import Display from "./Display";
import Keypad from "./Keypad";

export default function Calculator(){
    return(
        <section className="mx-auto w-full mx-w-md">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl sm:p-5">
<div className="overflow-hidden rounded-[1.5rem]  border border-white/10 bg-zinc-950">
    <Display/>
    <div className="p-4 sm:p-5">
<Keypad/>
    </div>
    </div> 
</div>
        </section>
    )
}