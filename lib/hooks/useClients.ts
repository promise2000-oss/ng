"use client";

import { useQuery } from "@tanstack/react-query";
import { clientsService, type Client } from "@/lib/services/clients.service";

const CLIENTS_KEY = ["clients"];

export function useClients() {
  return useQuery({
    queryKey: CLIENTS_KEY,
    queryFn: clientsService.getAll,
    staleTime: 5 * 60 * 1000,
  });
}
