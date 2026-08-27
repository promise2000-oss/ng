import api from "@/lib/api";
import type { Payment } from "@/lib/types";

export const paymentsService = {
  verify: (reference: string) =>
    api.post<Payment>("/payments/verify", { reference }).then((r) => r.data),

  getByReference: (reference: string) =>
    api.get<Payment>(`/payments/${reference}`).then((r) => r.data),
};
