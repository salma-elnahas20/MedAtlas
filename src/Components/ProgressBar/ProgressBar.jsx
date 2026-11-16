export default function ProgressBar({ value, tone = "navy" }) {
  const isRed = tone === "red";
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-1.5 w-full overflow-hidden rounded-full ${isRed ? "bg-red-100" : "bg-slate-200"}`}
    >
      <div
        className={`h-full rounded-full ${isRed ? "bg-red-700" : "bg-[#1b2a41]"}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
