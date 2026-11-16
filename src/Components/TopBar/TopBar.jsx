import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-8 py-3.5">
      <label className="flex max-w-xl flex-1 items-center gap-2.5 rounded-lg bg-slate-100 px-3.5 py-2.5 text-slate-400">
        <Search size={16} />
        <input
          type="search"
          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
          placeholder="Search courses, clinical cases, topics..."
        />
      </label>

      <div className="ml-auto flex items-center gap-6">
        <span className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1b2a41]" />
          Physiotherapy & Medicine
        </span>
        <button type="button" className="relative text-slate-600 hover:text-slate-900" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/80?img=47"
            alt=""
            className="h-9 w-9 rounded-full bg-slate-200 object-cover"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Sarah Khan</div>
            <div className="text-xs text-slate-500">MS-3 Clinical Track</div>
          </div>
        </div>
      </div>
    </header>
  );
}
