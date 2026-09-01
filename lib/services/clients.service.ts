import api from "@/lib/api";

export type Client = {
  _id: string;
  id: string;
  name: string;
  initials: string;
  sector: string;
  service: string;
  year: string;
  caseStudy?: string;
  featured: boolean;
  visible: boolean;
  logo?: string | null;
};

export const clientsService = {
  getAll: () =>
    api.get<Client[]>("/clients").then((r) => r.data),

  getById: (id: string) =>
    api.get<Client>(`/clients/${id}`).then((r) => r.data),
};
