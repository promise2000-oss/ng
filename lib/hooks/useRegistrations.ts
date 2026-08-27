"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { registrationsService } from "@/lib/services/registrations.service";
import type { RegistrationPayload } from "@/lib/types";

const REGISTRATIONS_KEY = ["registrations"];

export function useRegistrations() {
  return useQuery({
    queryKey: REGISTRATIONS_KEY,
    queryFn: registrationsService.getAll,
  });
}

export function useRegistration(id: string) {
  return useQuery({
    queryKey: [...REGISTRATIONS_KEY, id],
    queryFn: () => registrationsService.getById(id),
    enabled: !!id,
  });
}

export function useSubmitRegistration() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: RegistrationPayload) => registrationsService.submit(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: REGISTRATIONS_KEY });
    },
  });
}
