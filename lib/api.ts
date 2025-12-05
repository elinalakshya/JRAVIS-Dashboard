// lib/api.ts
import axios from "axios";

const API_URL = "https://jravis-backend.onrender.com/api";
const API_KEY = process.env.NEXT_PUBLIC_JRAVIS_API_KEY;

export async function apiGet(path: string) {
  const res = await axios.get(`${API_URL}${path}`, {
    headers: {
      "x-api-key": API_KEY!,
    },
  });
  return res.data;
}
