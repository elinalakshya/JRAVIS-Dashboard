export default function RevenueChart({ data }) {
  const points =
    data?.map((v: number, i: number) => `${i * 30},${120 - v}`).join(" ") ?? "";

  return (
    <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800">
      <h2 className="text-lg font-bold glow-gold">Revenue Growth</h2>

      <svg width="100%" height="140" className="mt-4">
        <polyline
          fill="none"
          stroke="#facc15"
          strokeWidth="3"
          points={points}
        />
      </svg>

      <p className="text-neutral-400 mt-2 text-sm">
        Updated every few seconds
      </p>
    </div>
  );
}
