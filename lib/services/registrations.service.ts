import api from "@/lib/api";
import type { Registration, RegistrationPayload } from "@/lib/types";

export const registrationsService = {
  submit: (data: RegistrationPayload) =>
    api.post<{ message: string; registration: Registration }>("/registrations", data).then((r) => r.data),

  getAll: () =>
    api.get<Registration[]>("/registrations").then((r) => r.data),

  getById: (id: string) =>
    api.get<Registration>(`/registrations/${id}`).then((r) => r.data),
};
