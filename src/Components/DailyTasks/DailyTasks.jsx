import { useState } from "react";
import { Plus, Check } from "lucide-react";
import Card from "../Card/Card";
import { initialTasks } from "../../data/dashboardData";

export default function DailyTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const completed = tasks.filter((t) => t.done).length;
  const percent = Math.round((completed / tasks.length) * 100);

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <Card padding="p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Daily Study Tasks</h2>
          <p className="mt-0.5 text-xs text-slate-500">
            {completed} of {tasks.length} targets completed
          </p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-[#1b2a41]">
          {percent}%
        </span>
      </div>

      <ul className="mt-5 space-y-4">
        {tasks.map((t) => (
          <li key={t.id}>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
                className="peer sr-only"
              />
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#1b2a41] ${
                  t.done ? "border-[#1b2a41] bg-[#1b2a41] text-white" : "border-slate-400 bg-white"
                }`}
              >
                {t.done && <Check size={11} strokeWidth={3} />}
              </span>
              <span className={`text-sm leading-snug ${t.done ? "text-slate-400 line-through" : "text-slate-800"}`}>
                {t.text}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-md bg-slate-100 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
      >
        <Plus size={13} /> Add Study Task
      </button>
    </Card>
  );
}
