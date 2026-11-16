import { Flame, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 rounded-xl bg-gradient-to-br from-[#111c2e] via-[#17253a] to-[#22334d] p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-xl">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-red-300">
          <Flame size={12} /> 4-Day Study Streak
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">Welcome back, Sarah</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Continue your curriculum modules, track diagnostic retention, and review active clinical cases.
        </p>
      </div>
      <button
        type="button"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-red-800 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
      >
        Resume Current Chapter <ArrowRight size={16} />
      </button>
    </section>
  );
}
