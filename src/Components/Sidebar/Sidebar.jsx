import { Settings } from "lucide-react";
import { navItems } from "../../data/dashboardData";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-[#1b2a41] text-slate-300 md:flex">
      <div className="border-b border-white/10 px-6 py-6 text-xl font-semibold tracking-tight text-white">
        MedAtlas
      </div>

      <nav className="mt-4 flex flex-col gap-1 px-3" aria-label="Main">
        {navItems.map(({ label, icon: Icon, active, badge }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? "page" : undefined}
            className={`relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
              active ? "bg-[#2a3d57] font-medium text-white" : "hover:bg-white/5 hover:text-white"
            }`}
          >
            {active && <span className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-red-600" />}
            <Icon size={16} className={active ? "text-red-400" : ""} />
            <span className="flex-1 truncate">{label}</span>
            {badge && (
              <span className="rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-slate-200">
                {badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/10 px-3 py-4">
        <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-white/5 hover:text-white">
          <Settings size={16} /> Settings
        </a>
      </div>
    </aside>
  );
}
