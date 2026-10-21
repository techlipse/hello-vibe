"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-50 px-6 py-16 text-stone-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/50 blur-3xl"
      />
      <section className="relative w-full max-w-xl rounded-3xl border border-stone-200/80 bg-white/80 p-8 text-center shadow-xl shadow-stone-900/5 backdrop-blur sm:p-14">
        <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
          <span aria-hidden="true" className="text-2xl font-medium">
            ✳
          </span>
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          A little interaction
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hello, world!
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-stone-500">
          A simple click counter, just for fun. Give it a try.
        </p>

        <p
          aria-live="polite"
          className="mt-10 text-6xl font-semibold tabular-nums tracking-tight text-stone-900"
        >
          {count}
        </p>
        <p className="mt-2 text-sm text-stone-500">
          {count === 1 ? "click" : "clicks"} so far
        </p>
        <button
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-violet-700/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 active:translate-y-0"
          onClick={() => setCount((currentCount) => currentCount + 1)}
          type="button"
        >
          Count a click
        </button>
      </section>
    </main>
  );
}
