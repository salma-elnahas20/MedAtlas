const TONES = {
  default: "border-slate-200 bg-white",
  danger: "border-red-200 bg-red-50",
};

export default function Card({ tone = "default", padding = "p-5", className = "", children }) {
  return (
    <div className={`rounded-xl border shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${TONES[tone]} ${padding} ${className}`}>
      {children}
    </div>
  );
}
