"use client";

import { useMutation } from "@tanstack/react-query";
import { contactService } from "@/lib/services/contact.service";
import type { ContactPayload } from "@/lib/types";

export function useSubmitContact() {
  return useMutation({
    mutationFn: (data: ContactPayload) => contactService.submit(data),
  });
}
