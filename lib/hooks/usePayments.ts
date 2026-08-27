"use client";

import { useMutation } from "@tanstack/react-query";
import { paymentsService } from "@/lib/services/payments.service";

export function useVerifyPayment() {
  return useMutation({
    mutationFn: (reference: string) => paymentsService.verify(reference),
  });
}
