export function setSession(token: string) {
  localStorage.setItem("session", token);
}

export function getSession() {
  return localStorage.getItem("session");
}

export function clearSession() {
  localStorage.removeItem("session");
}
