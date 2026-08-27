import api from "@/lib/api";
import type { Certificate, CertificatePayload } from "@/lib/types";

export const certificatesService = {
  getByQuery: (params: { email?: string; name?: string }) =>
    api.get<Certificate[]>("/certificates", { params }).then((r) => r.data),

  verify: (id: string) =>
    api.get<Certificate>(`/certificates/${id}`).then((r) => r.data),

  issue: (data: CertificatePayload) =>
    api.post<Certificate>("/certificates", data).then((r) => r.data),
};
