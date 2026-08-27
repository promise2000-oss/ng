import api from "@/lib/api";
import type { ContactPayload, ContactSubmission } from "@/lib/types";

export const contactService = {
  submit: (data: ContactPayload) =>
    api.post<{ message: string; contact: ContactSubmission }>("/contact", data).then((r) => r.data),

  getAll: () =>
    api.get<ContactSubmission[]>("/contact").then((r) => r.data),

  markRead: (id: string) =>
    api.put<ContactSubmission>(`/contact/${id}/read`).then((r) => r.data),
};
