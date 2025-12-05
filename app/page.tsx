"use client";

import useSWR from "swr";
import BrainStatus from "./components/BrainStatus";
import IncomeWidget from "./components/IncomeWidget";
import PhaseTabs from "./components/PhaseTabs";
import StreamTable from "./components/StreamTable";
import LogFeed from "./components/LogFeed";
import { fetcher } from "../lib/fetcher";

export default function DashboardPage() {
  // Auto-refresh every 5 seconds
  const { data: streams } = useSWR(
    "https://jravis-backend.onrender.com/api/streams",
    fetcher,
    { refreshInterval: 5000 }
  );

  const { data: logs } = useSWR(
    "https://jravis-backend.onrender.com/api/logs",
    fetcher,
    { refreshInterval: 5000 }
  );

  const { data: earnings } = useSWR(
    "https://jravis-backend.onrender.com/api/earnings",
    fetcher,
    { refreshInterval: 5000 }
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* TOP BAR */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">JRAVIS Control Center</h1>
        <p className="text-gray-600">
          Mission 2040 — Fully Automated Income Systems
        </p>
      </header>

      {/* PHASE SELECTOR */}
      <PhaseTabs />

      {/* SYSTEM + INCOME */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <BrainStatus status={streams ? "online" : "loading"} />
        <IncomeWidget amount={earnings?.total || 0} />
      </div>

      {/* STREAMS TABLE */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">All Income Streams</h2>
        <StreamTable streams={streams || []} />
      </div>

      {/* LOG FEED */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">JRAVIS Activity Logs</h2>
        <LogFeed logs={logs || []} />
      </div>
    </div>
  );
}
