"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { examsService } from "@/lib/services/exams.service";

const EXAMS_KEY = ["exams"];

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
