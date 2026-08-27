import api from "@/lib/api";
import type { Exam, ExamSubmissionPayload, ExamResult } from "@/lib/types";

export const examsService = {
  getAll: () =>
    api.get<Exam[]>("/exams").then((r) => r.data),

  getById: (id: string) =>
    api.get<Exam>(`/exams/${id}`).then((r) => r.data),

  create: (data: Partial<Exam>) =>
    api.post<Exam>("/exams", data).then((r) => r.data),

  submit: (id: string, answers: Record<string, string | string[]>) =>
    api.post<ExamResult>(`/exams/${id}/submit`, { answers }).then((r) => r.data),
};
