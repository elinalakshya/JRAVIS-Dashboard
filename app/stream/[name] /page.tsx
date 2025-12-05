"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../../lib/api";

export default function StreamPage({ params }: { params: { name: string } }) {
  const { name } = params;

  const [streamData, setStreamData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      let token = null;

      // FIX: localStorage only runs in browser
      if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
      }

      const res = await apiGet(`/api/realtime/stream/${name}`, token);
      setStreamData(res);
    }

    load();
  }, [name]);

  if (!streamData) return <div className="p-6">Loading {name}…</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{name.toUpperCase()}</h1>
      <pre className="bg-black/30 p-4 mt-4 rounded-lg">
        {JSON.stringify(streamData, null, 2)}
      </pre>
    </div>
  );
}
