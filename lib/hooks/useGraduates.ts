"use client";

import { useQuery } from "@tanstack/react-query";
import { graduatesService } from "@/lib/services/graduates.service";

const GRADUATES_KEY = ["graduates"];

export function useGraduates() {
  return useQuery({
    queryKey: GRADUATES_KEY,
    queryFn: graduatesService.getAll,
  });
}

export function useGraduate(id: string) {
  return useQuery({
    queryKey: [...GRADUATES_KEY, id],
    queryFn: () => graduatesService.getById(id),
    enabled: !!id,
  });
}
