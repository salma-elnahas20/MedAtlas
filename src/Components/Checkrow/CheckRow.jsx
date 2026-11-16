export default function CheckRow({ icon: Icon, title, meta, score, action, due, highlight }) {
  return (
    <li className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0 last:pb-0">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${highlight ? "bg-blue-100 text-blue-900" : "bg-slate-100 text-slate-700"}`}>
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-slate-900">{title}</div>
        <div className="truncate text-xs text-slate-500">{meta}</div>
      </div>
      {due ? (
        <>
          <span className="rounded border border-red-200 bg-red-50 px-2 py-1 text-[11px] text-red-700">Due today</span>
          <button type="button" className="rounded-md bg-red-800 px-5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-700">
            Start
          </button>
        </>
      ) : (
        <>
          <span className="w-12 text-right text-sm font-semibold text-slate-900">{score}</span>
          <button type="button" className="w-16 rounded-md px-2 py-1.5 text-xs font-medium text-[#1b2a41] transition-colors hover:bg-slate-100">
            {action}
          </button>
        </>
      )}
    </li>
  );
}
