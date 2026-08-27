"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { studentsService } from "@/lib/services/students.service";
import type { UpdateStudentPayload } from "@/lib/types";

const STUDENTS_KEY = ["students"];

export function useStudents() {
  return useQuery({
    queryKey: STUDENTS_KEY,
    queryFn: studentsService.getAll,
  });
}

export function useStudent(id: string) {
  return useQuery({
    queryKey: [...STUDENTS_KEY, id],
    queryFn: () => studentsService.getById(id),
    enabled: !!id,
  });
}

export function useUpdateStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateStudentPayload }) =>
      studentsService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STUDENTS_KEY });
    },
  });
}
