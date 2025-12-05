// app/components/BrainStatus.tsx
export default function BrainStatus({ status }: { status: string }) {
  const color =
    status === "online"
      ? "bg-green-500"
      : status === "error"
      ? "bg-red-500"
      : "bg-yellow-500";

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <div>
        <h2 className="font-semibold text-gray-900">JRAVIS Brain</h2>
        <p className="text-sm text-gray-600">Status: {status}</p>
      </div>
    </div>
  );
}
