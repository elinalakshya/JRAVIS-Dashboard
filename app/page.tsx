"use client";

import useSWR from "swr";
import Protected from "../../protected";
import { apiGet } from "../../../lib/api";

import Header from "../../components/Header";
import RevenueChart from "../../components/RevenueChart";
import StreamTable from "../../components/StreamTable";
import BrainStatus from "../../components/BrainStatus";
import PhaseTabs from "../../components/PhaseTabs";

const fetcher = (url: string) => apiGet(url);

export default function Dashboard() {
  const { data } = useSWR("/api/realtime/dashboard", fetcher, {
    refreshInterval: 3000
  });

  return (
    <Protected>
      <Header />

      <div className="p-6">
        <PhaseTabs />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RevenueChart data={data?.revenue_history || []} />
          <BrainStatus status={data?.brain_status} />
        </div>

        <StreamTable streams={data?.streams || []} />
      </div>
    </Protected>
  );
}
