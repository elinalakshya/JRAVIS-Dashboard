// app/page.tsx
import { apiGet } from "../lib/api";

export default async function Dashboard() {
  const health = await apiGet("/health");
  const streams = await apiGet("/streams");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">JRAVIS Dashboard</h1>

      <div className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold">System Status</h2>
        <p className="mt-2">Backend: {health.status}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {streams.streams.map((stream) => (
          <a
            key={stream}
            href={`/stream/${stream}`}
            className="p-6 bg-white rounded shadow hover:bg-gray-50 transition"
          >
            <h3 className="text-xl font-semibold capitalize">{stream}</h3>
            <p className="text-sm text-gray-600">View recent outputs</p>
          </a>
        ))}
      </div>
    </main>
  );
}
