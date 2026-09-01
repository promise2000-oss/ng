import api from "@/lib/api";

export type PartnerType = "Technology" | "Academic" | "Business" | "Community";

export type Partner = {
  _id: string;
  name: string;
  type: PartnerType;
  logo?: string;
  website: string;
  description: string;
  oneLiner: string;
  dateJoined: string;
  featured: boolean;
};

export type PartnerApplicationPayload = {
  company: string;
  contactName: string;
  email: string;
  phone?: string;
  type: PartnerType;
  message?: string;
};

export const partnersService = {
  getAll: () =>
    api.get<Partner[]>("/partners").then((r) => r.data),

  getById: (id: string) =>
    api.get<Partner>(`/partners/${id}`).then((r) => r.data),

  apply: (data: PartnerApplicationPayload) =>
    api.post<{ message: string }>("/partners/apply", data).then((r) => r.data),
};
