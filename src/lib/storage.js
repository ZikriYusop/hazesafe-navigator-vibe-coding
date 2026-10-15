export const STORAGE_KEY = "hazesafe_routes";

export function loadRoutes() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveRoutes(routes) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(routes));
    return true;
  } catch {
    return false;
  }
}