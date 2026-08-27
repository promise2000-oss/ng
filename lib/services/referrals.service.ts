import api from "@/lib/api";
import type { Referral, ReferralPayload, ReferralStatus } from "@/lib/types";

export const referralsService = {
  submit: (data: ReferralPayload) =>
    api.post<{ message: string; referral: Referral }>("/referrals", data).then((r) => r.data),

  getAll: () =>
    api.get<Referral[]>("/referrals").then((r) => r.data),

  getById: (id: string) =>
    api.get<Referral>(`/referrals/${id}`).then((r) => r.data),

  updateStatus: (id: string, status: ReferralStatus, note?: string) =>
    api.put<Referral>(`/referrals/${id}/status`, { status, note }).then((r) => r.data),
};
