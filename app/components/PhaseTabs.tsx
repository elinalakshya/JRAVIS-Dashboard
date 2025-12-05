// app/components/PhaseTabs.tsx
"use client";

import { useState } from "react";

export default function PhaseTabs() {
  const [active, setActive] = useState("Phase 1");

  const tabs = ["Phase 1", "Phase 2", "Phase 3"];

  return (
    <div className="flex gap-3 mb-4">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`px-4 py-2 rounded-lg text-sm font-medium 
            ${
              active === t
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          {t}
        </button>
      ))}

      <div className="ml-4 text-sm text-gray-600 self-center">
        Active: {active}
      </div>
    </div>
  );
}
