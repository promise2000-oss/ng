"use client";

import { useQuery } from "@tanstack/react-query";
import { certificatesService } from "@/lib/services/certificates.service";

export function useCertificates(params: { email?: string; name?: string }) {
  return useQuery({
    queryKey: ["certificates", params],
    queryFn: () => certificatesService.getByQuery(params),
    enabled: !!(params.email || params.name),
  });
}

export function useVerifyCertificate(id: string) {
  return useQuery({
    queryKey: ["certificates", "verify", id],
    queryFn: () => certificatesService.verify(id),
    enabled: !!id,
    retry: false,
  });
}
