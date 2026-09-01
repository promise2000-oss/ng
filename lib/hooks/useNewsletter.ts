"use client";

import { useMutation } from "@tanstack/react-query";
import { newsletterService, type NewsletterPayload } from "@/lib/services/newsletter.service";

export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: (data: NewsletterPayload) => newsletterService.subscribe(data),
  });
}
