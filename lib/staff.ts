import { fetchApi } from "./api";

export type Staff = {
  _id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  category: "executive" | "staff";
  image?: string;
  isActive: boolean;
};

export function getStaff() {
  return fetchApi<Staff[]>("/staff");
}

export function getStaffMember(id: string) {
  return fetchApi<Staff>(`/staff/${id}`);
}
