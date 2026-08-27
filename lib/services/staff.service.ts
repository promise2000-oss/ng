import api from "@/lib/api";
import type { Staff, CreateStaffPayload, UpdateStaffPayload } from "@/lib/types";

export const staffService = {
  getAll: () =>
    api.get<Staff[]>("/staff").then((r) => r.data),

  getById: (id: string) =>
    api.get<Staff>(`/staff/${id}`).then((r) => r.data),

  create: (data: CreateStaffPayload) => {
    const form = new FormData();
    form.append("name", data.name);
    form.append("email", data.email);
    form.append("dateOfBirth", data.dateOfBirth);
    form.append("role", data.role);
    form.append("department", data.department);
    if (data.category) form.append("category", data.category);
    if (data.image) form.append("image", data.image);
    if (data.isActive !== undefined) form.append("isActive", String(data.isActive));
    return api.post<Staff>("/staff", form, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((r) => r.data);
  },

  update: (id: string, data: UpdateStaffPayload) => {
    if (data.image) {
      const form = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (val !== undefined && key !== "image") form.append(key, String(val));
      });
      form.append("image", data.image);
      return api.put<Staff>(`/staff/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then((r) => r.data);
    }
    return api.put<Staff>(`/staff/${id}`, data).then((r) => r.data);
  },

  delete: (id: string) =>
    api.delete(`/staff/${id}`).then((r) => r.data),
};
