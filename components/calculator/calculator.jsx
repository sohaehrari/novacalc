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
      {/* Calculator Card */}
      <div className="rounded-[2rem] border border-zinc-200/80 bg-white p-2 shadow-xl shadow-indigo-100 sm:p-3">
        {/* Calculator Inner */}
        <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-50">
          {/* Display */}
          <Display
            expression={state.expression}
            result={state.display}
          />

          {/* Keypad */}
          <div className="p-4 sm:p-5">
            <Keypad
              onNumber={inputNumber}
              onOperator={inputOperator}
              onCalculate={calculate}

              onClear={clear}
              onBackspace={backspace}
            />
          </div>
        </div>
      </div>
    </section>
  );
}