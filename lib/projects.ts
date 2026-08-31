import api, { imageUrl } from "./api";

export type ProjectCategory =
  | "All"
  | "Web Development"
  | "Cloud Services"
  | "Digital Academy"
  | "Drone Services"
  | "Branding"
  | "Consulting"
  | "POS & Inventory"
  | "Networking";

export type ProjectStatus = "Completed" | "Ongoing" | "Maintenance";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: ProjectStatus;
  technologies: string[];
  client?: string;
  year?: string;
  liveUrl?: string;
};

export const projectCategories: ProjectCategory[] = [
  "All",
  "Web Development",
  "Cloud Services",
  "Digital Academy",
  "Drone Services",
  "Branding",
  "Consulting",
  "POS & Inventory",
  "Networking",
];

export interface ApiProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags?: string[];
  liveUrl?: string;
  status?: string;
  client?: string;
  year?: string;
}

export async function getApiProjects(): Promise<Project[]> {
  const data = await api.get<ApiProject[]>("/projects").then((r) => r.data);
  return data.map((p: ApiProject) => {
    let techs: string[] = [];
    const rawTags = p.tags;
    if (Array.isArray(rawTags)) {
      techs = rawTags;
    } else if (typeof rawTags === "string") {
      try {
        const parsed = JSON.parse(rawTags);
        techs = Array.isArray(parsed) ? parsed : [];
      } catch {
        techs = (rawTags as string).split(",").map((t) => t.trim());
      }
    }
    return {
      id: p._id,
      title: p.title,
      description: p.description,
      image: imageUrl(p.image) || "",
      category: p.category,
      status: (p.status || "Completed") as ProjectStatus,
      technologies: techs,
      client: p.client,
      year: p.year,
      liveUrl: p.liveUrl,
    };
  });
}
