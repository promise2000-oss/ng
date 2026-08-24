import { STORE_KEYS, loadStore, saveStore } from "./store";

export type DemoRole = "student" | "referrer";

export type DemoAccount = {
  id: string;
  role: DemoRole;
  email: string;
  code: string;
  name: string;
};

export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    id: "stu-demo-1",
    role: "student",
    email: "student@nicegene.com",
    code: "123456",
    name: "Emmanuel Okafor",
  },
  {
    id: "ref-demo-1",
    role: "referrer",
    email: "referrer@nicegene.com",
    code: "654321",
    name: "Chinedu Eze",
  },
];

export type AuthSession = {
  accountId: string;
  role: DemoRole;
  email: string;
  name: string;
  loginAt: string;
};

export function getAccountByEmail(email: string): DemoAccount | undefined {
  return DEMO_ACCOUNTS.find((a) => a.email.toLowerCase() === email.trim().toLowerCase());
}

export function verifyLogin(email: string, code: string): DemoAccount | null {
  const account = getAccountByEmail(email);
  if (!account || account.code !== code.trim()) return null;
  return account;
}

export function createSession(account: DemoAccount): void {
  const session: AuthSession = {
    accountId: account.id,
    role: account.role,
    email: account.email,
    name: account.name,
    loginAt: new Date().toISOString(),
  };
  saveStore(STORE_KEYS.authSession, session);
}

export function getSession(): AuthSession | null {
  return loadStore<AuthSession | null>(STORE_KEYS.authSession, () => null);
}

export function clearSession(): void {
  saveStore(STORE_KEYS.authSession, null);
}

export function demoCredentialHint(role: DemoRole): DemoAccount {
  return DEMO_ACCOUNTS.find((a) => a.role === role) ?? DEMO_ACCOUNTS[0];
}