import {
  LayoutDashboard,
  BookOpen,
  SquareCheckBig,
  ClipboardList,
  PersonStanding,
  StickyNote,
  HeartPulse,
  Wind,
  Eye,
  Play,
  RotateCcw,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Courses", icon: BookOpen },
  { label: "Quizzes", icon: SquareCheckBig },
  { label: "Clinical Cases", icon: ClipboardList },
  { label: "Full Body Mode", icon: PersonStanding, badge: "PHYSIO" },
  { label: "Saved Notes", icon: StickyNote },
];

export const modules = [
  {
    chapter: "Chapter 04 • Cardiovascular",
    title: "Coronary Circulation & Ischemia",
    progress: 68,
    action: "Resume Study",
    icon: Play,
  },
  {
    chapter: "Chapter 02 • Biomechanics",
    title: "Glenohumeral Joint Stability",
    progress: 42,
    action: "Resume Study",
    icon: Play,
  },
  {
    chapter: "Chapter 07 • Neuroanatomy",
    title: "Cranial Nerve Reflex Arcs",
    progress: 88,
    action: "Review Module",
    icon: RotateCcw,
  },
];

export const checks = [
  {
    title: "Acute Coronary Syndromes & ECG",
    meta: "Cardiology • 24 questions • Completed today",
    score: "96%",
    action: "Review",
    icon: HeartPulse,
  },
  {
    title: "Lower Extremity Peripheral Neuropathies",
    meta: "Physiotherapy • 18 questions • Yesterday",
    score: "78%",
    action: "Retest",
    icon: PersonStanding,
  },
  {
    title: "Ventilation-Perfusion (V/Q) Mismatch",
    meta: "Pulmonology • 20 questions • Oct 24",
    score: "92%",
    action: "Review",
    icon: Wind,
  },
  {
    title: "Cranial Nerve Palsies & Cavernous Sinus",
    meta: "Neuroanatomy • Due for retention cycle",
    icon: Eye,
    due: true,
    highlight: true,
  },
];

export const initialTasks = [
  { id: 1, text: "Review AI explanation on Aortic Stenosis", done: true },
  { id: 2, text: "Complete Rotator Cuff 3D pin identification", done: true },
  { id: 3, text: "Upper Limb Fascial Compartments dissection", done: false },
  { id: 4, text: "Workup 62yo male dyspnea clinical case", done: false },
];
