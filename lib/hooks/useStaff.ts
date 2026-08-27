"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { staffService } from "@/lib/services/staff.service";
import type { CreateStaffPayload, UpdateStaffPayload } from "@/lib/types";

const STAFF_KEY = ["staff"];

export function useStaff() {
  return useQuery({
    queryKey: STAFF_KEY,
    queryFn: staffService.getAll,
  });
}

export function useStaffMember(id: string) {
  return useQuery({
    queryKey: [...STAFF_KEY, id],
    queryFn: () => staffService.getById(id),
    enabled: !!id,
  });
}

export function useCreateStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateStaffPayload) => staffService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STAFF_KEY });
    },
  });
}

export function useUpdateStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateStaffPayload }) =>
      staffService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STAFF_KEY });
    },
  });
}

export function useDeleteStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => staffService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STAFF_KEY });
    },
  });
}
