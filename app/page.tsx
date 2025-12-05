import BrainStatus from "./components/BrainStatus";
import IncomeWidget from "./components/IncomeWidget";
import PhaseTabs from "./components/PhaseTabs";
import StreamTable from "./components/StreamTable";
import LogFeed from "./components/LogFeed";

export default async function DashboardPage() {
  // Temporary mock data — you will replace this with real API data later
  const streams = [
    { name: "Gumroad", status: "OK", lastRun: "2 min ago" },
    { name: "Payhip", status: "OK", lastRun: "2 min ago" },
    { name: "Auto Blogging", status: "OK", lastRun: "3 min ago" },
    { name: "Newsletter", status: "OK", lastRun: "1 min ago" },
    { name: "Affiliate Funnel", status: "OK", lastRun: "Just now" },
    { name: "Shopify", status: "OK", lastRun: "Just now" },
    { name: "Template Machine", status: "OK", lastRun: "Just now" }
  ];

  const logs = [
    "JRAVIS Worker Started...",
    "Gumroad Stream Completed ✔",
    "Payhip Stream Completed ✔",
    "Auto Blogging Stream Completed ✔",
    "Newsletter Stream Completed ✔",
    "Affiliate Funnel Stream Completed ✔",
    "Shopify Stream Completed ✔",
    "Template Machine Completed ✔",
    "JRAVIS Worker Finished."
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* TOP BAR */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">JRAVIS Control Center</h1>
        <p className="text-gray-600">Mission 2040 — Fully Automated Income Systems</p>
      </header>

      {/* PHASE TABS */}
      <PhaseTabs />

      {/* ROW 1 — SYSTEM + INCOME */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <BrainStatus status="online" />
        <IncomeWidget amount={150000} />
      </div>

      {/* ROW 2 — STREAM TABLE */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">All Income Streams</h2>
        <StreamTable streams={streams} />
      </div>

      {/* ROW 3 — LOGS */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">JRAVIS System Logs</h2>
        <LogFeed logs={logs} />
      </div>
    </div>
  );
}
