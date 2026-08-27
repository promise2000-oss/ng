import api from "@/lib/api";
import type { AuthUser, LoginPayload, RegisterPayload } from "@/lib/types";

export const authService = {
  login: (data: LoginPayload) =>
    api.post<AuthUser>("/auth/login", data).then((r) => r.data),

  register: (data: RegisterPayload) =>
    api.post<AuthUser>("/auth/register", data).then((r) => r.data),

  getProfile: () =>
    api.get<AuthUser>("/auth/me").then((r) => r.data),

  updateProfile: (data: { name?: string; email?: string }) =>
    api.put<AuthUser>("/auth/update-profile", data).then((r) => r.data),
};
