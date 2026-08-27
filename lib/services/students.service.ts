import api from "@/lib/api";
import type { Student, UpdateStudentPayload } from "@/lib/types";

export const studentsService = {
  getAll: () =>
    api.get<Student[]>("/students").then((r) => r.data),

  getById: (id: string) =>
    api.get<Student>(`/students/${id}`).then((r) => r.data),

  update: (id: string, data: UpdateStudentPayload) =>
    api.put<Student>(`/students/${id}`, data).then((r) => r.data),
};
