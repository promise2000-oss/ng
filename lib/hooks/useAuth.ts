"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/lib/services/auth.service";
import type { AuthUser, LoginPayload, RegisterPayload } from "@/lib/types";

const AUTH_KEY = ["auth"];

export function useAuth() {
  const queryClient = useQueryClient();

  const profile = useQuery({
    queryKey: [...AUTH_KEY, "me"],
    queryFn: authService.getProfile,
    enabled: typeof window !== "undefined" && !!localStorage.getItem("nicegene_auth_token"),
    retry: false,
  });

  const login = useMutation({
    mutationFn: (data: LoginPayload) => authService.login(data),
    onSuccess: (user: AuthUser) => {
      localStorage.setItem("nicegene_auth_token", user.token);
      queryClient.setQueryData([...AUTH_KEY, "me"], user);
    },
  });

  const register = useMutation({
    mutationFn: (data: RegisterPayload) => authService.register(data),
    onSuccess: (user: AuthUser) => {
      localStorage.setItem("nicegene_auth_token", user.token);
      queryClient.setQueryData([...AUTH_KEY, "me"], user);
    },
  });

  const updateProfile = useMutation({
    mutationFn: (data: { name?: string; email?: string }) => authService.updateProfile(data),
    onSuccess: (user: AuthUser) => {
      queryClient.setQueryData([...AUTH_KEY, "me"], user);
    },
  });

  const logout = () => {
    localStorage.removeItem("nicegene_auth_token");
    queryClient.setQueryData([...AUTH_KEY, "me"], null);
    queryClient.clear();
  };

  return {
    profile,
    login,
    register,
    updateProfile,
    logout,
    isAuthenticated: profile.isSuccess && !!profile.data,
    isLoading: profile.isLoading,
  };
}
