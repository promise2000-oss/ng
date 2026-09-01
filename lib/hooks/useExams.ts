"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { examsService } from "@/lib/services/exams.service";
import { examSessionService, type CreateExamSessionPayload, type UpdateExamSessionPayload } from "@/lib/services/exam-session.service";

const EXAMS_KEY = ["exams"];
const EXAM_SESSION_KEY = ["exam-sessions"];

export function useExams() {
  return useQuery({
    queryKey: EXAMS_KEY,
    queryFn: examsService.getAll,
  });
}

export function useExam(id: string) {
  return useQuery({
    queryKey: [...EXAMS_KEY, id],
    queryFn: () => examsService.getById(id),
    enabled: !!id,
  });
}

export function useSubmitExam() {
  return useMutation({
    mutationFn: ({ id, answers }: { id: string; answers: Record<string, string | string[]> }) =>
      examsService.submit(id, answers),
  });
}

export function useExamSession(examId: string) {
  return useQuery({
    queryKey: [...EXAM_SESSION_KEY, examId],
    queryFn: () => examSessionService.findByExam(examId),
    enabled: !!examId,
  });
}

export function useCreateExamSession() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateExamSessionPayload) => examSessionService.create(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [...EXAM_SESSION_KEY, variables.examId] });
    },
  });
}

export function useSaveExamSession() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateExamSessionPayload }) =>
      examSessionService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: EXAM_SESSION_KEY });
    },
  });
}
