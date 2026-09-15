
"use client";

import { useState } from "react";

// Provides the dedicated settings workspace for controlling NexaCalc preferences
export default function SettingsPage() {
  const [sound, setSound] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
            NexaCalc
          </p>

          <h1 className="text-4xl font-semibold tracking-tight">
            Settings
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Customize your NexaCalc experience.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
          <div className="border-b border-white/10 p-6">
            <h2 className="text-base font-semibold text-white">
              Preferences
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Manage calculator behavior.
            </p>
          </div>

          <div className="divide-y divide-white/10">
            <label className="flex cursor-pointer items-center justify-between gap-6 p-6">
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Keyboard shortcuts
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Use your physical keyboard to control the calculator.
                </p>
              </div>

              <input
                type="checkbox"
                checked={keyboard}
                onChange={(event) => setKeyboard(event.target.checked)}
                className="h-5 w-5 accent-indigo-500"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between gap-6 p-6">
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Button sound
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Enable calculator interaction sounds.
                </p>
              </div>

              <input
                type="checkbox"
                checked={sound}
                onChange={(event) => setSound(event.target.checked)}
                className="h-5 w-5 accent-indigo-500"
              />
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
