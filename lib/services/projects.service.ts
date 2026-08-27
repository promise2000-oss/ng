import api from "@/lib/api";
import type { Project, ProjectPayload } from "@/lib/types";

export const projectsService = {
  getAll: () =>
    api.get<Project[]>("/projects").then((r) => r.data),

  getById: (id: string) =>
    api.get<Project>(`/projects/${id}`).then((r) => r.data),

  create: (data: ProjectPayload) => {
    const form = new FormData();
    form.append("title", data.title);
    form.append("description", data.description);
    form.append("category", data.category);
    if (data.image) form.append("image", data.image);
    if (data.tags) form.append("tags", JSON.stringify(data.tags));
    if (data.liveUrl) form.append("liveUrl", data.liveUrl);
    if (data.status) form.append("status", data.status);
    if (data.client) form.append("client", data.client);
    if (data.year) form.append("year", data.year);
    return api.post<Project>("/projects", form, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((r) => r.data);
  },

  update: (id: string, data: ProjectPayload) => {
    if (data.image) {
      const form = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (val !== undefined && key !== "image") {
          form.append(key, key === "tags" ? JSON.stringify(val) : String(val));
        }
      });
      form.append("image", data.image);
      return api.put<Project>(`/projects/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then((r) => r.data);
    }
    return api.put<Project>(`/projects/${id}`, data).then((r) => r.data);
  },

  delete: (id: string) =>
    api.delete(`/projects/${id}`).then((r) => r.data),
};
