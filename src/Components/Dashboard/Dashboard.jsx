import { TrendingUp, BookOpen, Clock, ChevronRight } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import Hero from "../Hero/Hero";
import StatCard from "../StatCard/StatCard";
import ModuleCard from "../ModuleCard/ModuleCard";
import DiagnosticChecks from "../DiagnosticChecks/DiagnosticChecks";
import DailyTasks from "../DailyTasks/DailyTasks";
import { modules } from "../../data/dashboardData";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="space-y-8 p-8">
          <Hero />

          <div className="grid gap-6 md:grid-cols-3">
            <StatCard label="Diagnostic Accuracy" icon={TrendingUp} value="84.2%" sub="Target 80%" progress={84} />
            <StatCard label="Anatomy & Physio Mastery" icon={BookOpen} value="72" unit="/ 96" sub="Chapters Completed" progress={75} />
            <StatCard label="Retention Queue" icon={Clock} value="3 Due" sub="Ready for Review" progress={45} danger />
          </div>

          <section aria-labelledby="continue-learning">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="continue-learning" className="text-base font-semibold">Continue Learning</h2>
              <a href="#" className="flex items-center gap-0.5 text-xs text-slate-600 hover:text-slate-900">
                All Curriculum <ChevronRight size={14} />
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {modules.map((m) => (
                <ModuleCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
            <DiagnosticChecks />
            <DailyTasks />
          </div>
        </main>
      </div>
    </div>
  );
}
