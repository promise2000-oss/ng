import api from "@/lib/api";

export type NewsletterPayload = {
  email: string;
};

export const newsletterService = {
  subscribe: (data: NewsletterPayload) =>
    api.post<{ message: string }>("/newsletter/subscribe", data).then((r) => r.data),
};
