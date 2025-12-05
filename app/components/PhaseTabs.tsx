"use client";

import { useState } from "react";

const phases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"];

export default function PhaseTabs() {
  const [active, setActive] = useState("Phase 1");

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">
      {phases.map((p) => (
        <button
          key={p}
          onClick={() => setActive(p)}
          className={`px-4 py-2 rounded-lg border 
            ${active === p ? "border-yellow-400 text-yellow-400" : "border-neutral-700 text-neutral-400"}
            hover:border-yellow-500 hover:text-yellow-500 transition`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
