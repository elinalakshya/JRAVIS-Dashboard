"use client";

import { useState } from "react";

export default function LockModal({ onUnlock }) {
  const [code, setCode] = useState("");

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 w-80">
        <h2 className="text-lg font-bold glow-gold text-center">
          Enter Lock Code
        </h2>

        <input
          type="password"
          maxLength={6}
          className="mt-4 w-full p-3 bg-neutral-800 rounded"
          placeholder="******"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={() => onUnlock(code)}
          className="w-full mt-4 p-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400"
        >
          UNLOCK
        </button>
      </div>
    </div>
  );
}
