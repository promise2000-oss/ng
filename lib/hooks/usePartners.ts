"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { partnersService, type Partner, type PartnerApplicationPayload } from "@/lib/services/partners.service";

const PARTNERS_KEY = ["partners"];

export function usePartners() {
  return useQuery({
    queryKey: PARTNERS_KEY,
    queryFn: partnersService.getAll,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePartner(id: string) {
  return useQuery({
    queryKey: [...PARTNERS_KEY, id],
    queryFn: () => partnersService.getById(id),
    enabled: !!id,
  });
}

export function useApplyAsPartner() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PartnerApplicationPayload) => partnersService.apply(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["partner-applications"] });
    },
  });
}
