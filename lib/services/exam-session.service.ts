import api from "@/lib/api";

export type ExamSession = {
  _id: string;
  examId: string;
  studentId: string;
  status: "in-progress" | "submitted" | "expired";
  startedAt: string;
  remainingMs: number;
  currentQuestion: number;
  answers: Record<string, string | string[]>;
  flagged: string[];
  exitAttempts: number;
  lastSavedAt: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateExamSessionPayload = {
  examId: string;
  studentId: string;
  remainingMs: number;
};

export type UpdateExamSessionPayload = {
  remainingMs?: number;
  currentQuestion?: number;
  answers?: Record<string, string | string[]>;
  flagged?: string[];
  exitAttempts?: number;
  status?: "in-progress" | "submitted" | "expired";
};

export const examSessionService = {
  create: (data: CreateExamSessionPayload) =>
    api.post<ExamSession>("/exam-sessions", data).then((r) => r.data),

  update: (id: string, data: UpdateExamSessionPayload) =>
    api.put<ExamSession>(`/exam-sessions/${id}`, data).then((r) => r.data),

  getById: (id: string) =>
    api.get<ExamSession>(`/exam-sessions/${id}`).then((r) => r.data),

  findByExam: (examId: string) =>
    api.get<ExamSession | null>("/exam-sessions", { params: { examId } }).then((r) => r.data),
};
