import Card from "../Card/Card";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function ModuleCard({ chapter, title, progress, action, icon: Icon }) {
  return (
    <Card padding="p-6">
      <span className="inline-block rounded bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">{chapter}</span>
      <h3 className="mt-4 min-h-[3.25rem] text-lg font-semibold leading-snug text-slate-900">{title}</h3>
      <div className="mt-4 flex justify-between text-xs text-slate-600">
        <span>Progress</span>
        <span className="font-semibold text-slate-900">{progress}%</span>
      </div>
      <div className="mt-2">
        <ProgressBar value={progress} />
      </div>
      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-slate-100 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
      >
        <Icon size={13} /> {action}
      </button>
    </Card>
  );
}
