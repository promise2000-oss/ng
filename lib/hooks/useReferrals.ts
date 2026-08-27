"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { referralsService } from "@/lib/services/referrals.service";
import type { ReferralPayload, ReferralStatus } from "@/lib/types";

const REFERRALS_KEY = ["referrals"];

export function useReferrals() {
  return useQuery({
    queryKey: REFERRALS_KEY,
    queryFn: referralsService.getAll,
  });
}

export function useReferral(id: string) {
  return useQuery({
    queryKey: [...REFERRALS_KEY, id],
    queryFn: () => referralsService.getById(id),
    enabled: !!id,
  });
}

export function useSubmitReferral() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ReferralPayload) => referralsService.submit(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: REFERRALS_KEY });
    },
  });
}

export function useUpdateReferralStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status, note }: { id: string; status: ReferralStatus; note?: string }) =>
      referralsService.updateStatus(id, status, note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: REFERRALS_KEY });
    },
  });
}
