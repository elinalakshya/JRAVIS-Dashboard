"use client";

import { useEffect } from "react";
import { getSession } from "../lib/session";

export default function Protected({ children }) {
  useEffect(() => {
    if (!getSession()) {
      window.location.href = "/login";
    }
  }, []);

  return <>{children}</>;
}
