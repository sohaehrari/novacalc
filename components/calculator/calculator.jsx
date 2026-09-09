"use client";

import useCalculator from "@/hooks/useCalculator";
import Display from "./Display";
import Keypad from "./Keypad";

export default function Calculator() {
  const {
    state,
    inputNumber,
    clear,
    inputOperator,
    calculate,
    backspace,
  } = useCalculator();

  return (
    <section className="mx-auto w-full max-w-md">
      <div className="rounded-[2rem] border border-zinc-200/80 bg-white p-2 shadow-xl shadow-indigo-100 sm:p-3">
        <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-50">
          <Display
            expression={state.expression}
            result={state.display}
          />

          <div className="p-4 sm:p-5">
            <Keypad
              onNumber={inputNumber}
              onClear={clear}
              onBackspace={backspace}
              onOperator={inputOperator}
              onCalculate={calculate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}