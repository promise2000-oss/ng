import api from "@/lib/api";
import type { BlogPost, BlogPayload } from "@/lib/types";

export const blogsService = {
  getAll: () =>
    api.get<BlogPost[]>("/blogs").then((r) => r.data),

  getById: (id: string) =>
    api.get<BlogPost>(`/blogs/${id}`).then((r) => r.data),

  create: (data: BlogPayload) => {
    const form = new FormData();
    form.append("title", data.title);
    form.append("content", data.content);
    form.append("author", data.author);
    if (data.image) form.append("image", data.image);
    if (data.tags) form.append("tags", JSON.stringify(data.tags));
    return api.post<BlogPost>("/blogs", form, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((r) => r.data);
  },

  update: (id: string, data: Partial<BlogPayload>) => {
    if (data.image) {
      const form = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (val !== undefined && key !== "image") {
          form.append(key, key === "tags" ? JSON.stringify(val) : String(val));
        }
      });
      form.append("image", data.image);
      return api.put<BlogPost>(`/blogs/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then((r) => r.data);
    }
    return api.put<BlogPost>(`/blogs/${id}`, data).then((r) => r.data);
  },

  delete: (id: string) =>
    api.delete(`/blogs/${id}`).then((r) => r.data),
};
