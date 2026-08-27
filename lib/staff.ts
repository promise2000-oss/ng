import api from "./api";
import type { Staff as StaffType } from "./types";

export type Staff = StaffType;

export function getStaff() {
  return api.get<Staff[]>("/staff").then((r) => r.data);
}

export function getStaffMember(id: string) {
  return api.get<Staff>(`/staff/${id}`).then((r) => r.data);
}
