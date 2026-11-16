import Card from "../Card/Card";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function StatCard({ label, icon: Icon, value, unit, sub, progress, danger = false }) {
  return (
    <Card tone={danger ? "danger" : "default"} padding="p-6">
      <div className={`flex items-center justify-between text-[11px] font-medium uppercase tracking-wider ${danger ? "text-red-700" : "text-slate-500"}`}>
        <span>{label}</span>
        <Icon size={16} />
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className={`text-4xl font-bold tracking-tight ${danger ? "text-red-700" : "text-slate-900"}`}>{value}</span>
        {unit && <span className="text-lg text-slate-400">{unit}</span>}
        <span className={`text-xs ${danger ? "text-red-700/80" : "text-slate-500"}`}>{sub}</span>
      </div>
      <div className="mt-4">
        <ProgressBar value={progress} tone={danger ? "red" : "navy"} />
      </div>
    </Card>
  );
}
