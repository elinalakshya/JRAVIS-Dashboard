"use client";

import { useState } from "react";
import { apiPost } from "../../lib/api";
import { setSession } from "../../lib/session";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  async function login() {
    const res = await apiPost("/api/auth/login", { password, pin });

    if (res?.token) {
      setSession(res.token);
      window.location.href = "/";
    } else {
      setError(res?.detail || "Login failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/lakshya-logo.png" className="w-32 logo-glow" />

      <h1 className="mt-4 text-3xl font-bold glow-gold">LAKSHYA 2040</h1>

      <div className="mt-8 w-72 space-y-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-neutral-900 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="6-digit PIN"
          maxLength={6}
          className="w-full p-3 bg-neutral-900 rounded"
          onChange={(e) => setPin(e.target.value)}
        />

        <button
          className="w-full p-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400"
          onClick={login}
        >
          LOGIN
        </button>

        {error && <p className="text-red-400 text-center">{error}</p>}
      </div>
    </div>
  );
}
