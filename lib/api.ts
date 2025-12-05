export async function apiPost(path: string, body: any) {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("session") ?? ""
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
}

export async function apiGet(path: string) {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND}${path}`, {
    method: "GET",
    headers: {
      token: localStorage.getItem("session") ?? ""
    },
  }).then(res => res.json());
}
