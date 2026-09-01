import { authService } from "./services/auth.service";
import type { AuthUser } from "./types";

export type DemoRole = "student" | "referrer";

export type AuthSession = {
  userId: string;
  role: DemoRole;
  email: string;
  name: string;
  token: string;
  loginAt: string;
};

const SESSION_KEY = "nicegene_auth_session";

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export async function loginWithApi(
  email: string,
  password: string
): Promise<AuthUser | null> {
  try {
    const user = await authService.login({ email, password });
    return user;
  } catch {
    return null;
  }
}

export function createSession(user: AuthUser, role: DemoRole = "student"): void {
  const session: AuthSession = {
    userId: user._id,
    role,
    email: user.email,
    name: user.name,
    token: user.token,
    loginAt: new Date().toISOString(),
  };
  if (canUseStorage()) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    localStorage.setItem("nicegene_auth_token", user.token);
  }
}

export function getSession(): AuthSession | null {
  if (!canUseStorage()) return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (!canUseStorage()) return;
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("nicegene_auth_token");
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}
