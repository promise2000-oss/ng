"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blogsService } from "@/lib/services/blogs.service";

const BLOGS_KEY = ["blogs"];

export function useBlogs() {
  return useQuery({
    queryKey: BLOGS_KEY,
    queryFn: blogsService.getAll,
  });
}

export function useBlog(id: string) {
  return useQuery({
    queryKey: [...BLOGS_KEY, id],
    queryFn: () => blogsService.getById(id),
    enabled: !!id,
  });
}
