import Card from "../Card/Card";
import CheckRow from "../Checkrow/CheckRow";
import { checks } from "../../data/dashboardData";

export default function DiagnosticChecks() {
  return (
    <Card padding="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">Upcoming Diagnostic Checks & Cases</h2>
        <span className="rounded bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">3 Pending</span>
      </div>
      <ul className="mt-2">
        {checks.map((c) => (
          <CheckRow key={c.title} {...c} />
        ))}
      </ul>
    </Card>
  );
}
