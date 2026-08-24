const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://nice-web-admin-backend-1.onrender.com/api";

const IMAGE_BASE = BASE_URL.replace(/\/api$/, "");

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message || "Something went wrong");
  }

  return res.json();
}

export function imageUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  return `${IMAGE_BASE}${path}`;
}
