import { StaticImageData } from "next/image";
import { fetchApi, imageUrl } from "./api";

import cloudImg from "@/assets/images/services/cloud.png";
import academyImg from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import droneImg from "@/assets/images/services/drone.jpg";
import webImg from "@/assets/images/events/team-working.jpg";
import techImg from "@/assets/images/logos/NICEGENE TECH.png";
import posImg from "@/assets/images/services/NICEGENE POS & INVENTORY.jpg";
import networkImg from "@/assets/images/services/NICEGENE system networking and server setup.jpg";
import brandImg from "@/assets/images/clients/brand.jpg";
import aircomImg from "@/assets/images/clients/Aircom Limited.png";
import esutImg from "@/assets/images/events/ESUT1.jpg";

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
  image: string | StaticImageData;
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

export const staticProjects: Project[] = [
  {
    id: "laec",
    title: "Lagos Archdiocesan Education Commission (LAEC)",
    description:
      "Design and development of a cloud-native CBT platform for intercollegiate examinations across all archdiocesan institutions — supporting 10+ schools and 10,000+ users with zero downtime.",
    image: cloudImg,
    category: "Cloud Services",
    status: "Completed",
    technologies: ["AWS", "Serverless", "Lambda", "Multi-Tenant", "CBT"],
    client: "Lagos Archdiocesan Education Commission",
    year: "2026",
    liveUrl: "https://www.laaec.com",
  },
  {
    id: "st-finbarrs",
    title: "St. Finbarr's College, Yaba, Lagos",
    description:
      "Deployment and development of NICEGENE DailyApp, a school ERP platform for complete school management.",
    image: webImg,
    category: "Web Development",
    status: "Completed",
    technologies: ["DailyApp", "React", "Node.js", "AWS"],
    client: "St. Finbarr's College",
    year: "2026",
    liveUrl: "https://www.saintfinbarrscollege.com",
  },
  {
    id: "ola",
    title: "Our Lady of Apostles (OLA) Secondary School, Yaba",
    description:
      "Complete LAN and system networking infrastructure setup; design and development of a modern interactive school web application; ongoing deployment of NICEGENE DailyApp School ERP System.",
    image: networkImg,
    category: "Networking",
    status: "Ongoing",
    technologies: ["LAN", "Networking", "Web App", "DailyApp"],
    client: "OLA Secondary School",
    year: "2026",
    liveUrl: "https://www.olassyaba.org",
  },
  {
    id: "st-gregorys",
    title: "St. Gregory's College, Ikoyi, Lagos",
    description:
      "Ongoing design and implementation of the NICEGENE DailyApp School ERP Management Platform.",
    image: techImg,
    category: "Web Development",
    status: "Ongoing",
    technologies: ["DailyApp", "React", "Node.js", "AWS"],
    client: "St. Gregory's College",
    year: "2026",
    liveUrl: "https://www.stgregoryscollege.com",
  },
  {
    id: "fortis-legal",
    title: "Fortis Legal LP, Ikoyi, Lagos",
    description:
      "Design and development of a modern, interactive corporate web application for a leading law firm.",
    image: webImg,
    category: "Web Development",
    status: "Completed",
    technologies: ["Next.js", "React", "Tailwind CSS", "AWS"],
    client: "Fortis Legal LP",
    year: "2025",
    liveUrl: "https://www.fortislegal.com.ng",
  },
  {
    id: "1",
    title: "Cloud Migration for Aircom Limited",
    description: "End-to-end migration of on-premise infrastructure to AWS cloud with zero downtime and cost optimization.",
    image: aircomImg,
    category: "Cloud Services",
    status: "Completed",
    technologies: ["AWS", "EC2", "S3", "RDS", "CloudFront"],
    client: "Aircom Limited",
    year: "2025",
  },
  {
    id: "2",
    title: "NICEGENE Digital Academy Platform",
    description: "Full-featured e-learning platform with course management, student tracking, and certification workflows.",
    image: academyImg,
    category: "Digital Academy",
    status: "Ongoing",
    technologies: ["React", "Next.js", "MongoDB", "Node.js", "Tailwind"],
    year: "2026",
  },
  {
    id: "3",
    title: "Drone Survey & Mapping System",
    description: "Aerial data collection and 3D mapping solution for construction site monitoring and land surveying.",
    image: droneImg,
    category: "Drone Services",
    status: "Completed",
    technologies: ["Drone", "GIS", "Photogrammetry", "Python", "AutoCAD"],
    year: "2025",
  },
  {
    id: "4",
    title: "ESUT Digital Transformation Portal",
    description: "Comprehensive digital portal for university administration, student records, and online learning integration.",
    image: esutImg,
    category: "Consulting",
    status: "Completed",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    client: "Enugu State University",
    year: "2025",
  },
  {
    id: "5",
    title: "NICEGENE POS & Inventory System",
    description: "Point-of-sale system with real-time inventory tracking, sales analytics, and multi-branch support.",
    image: posImg,
    category: "POS & Inventory",
    status: "Completed",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    year: "2025",
  },
  {
    id: "6",
    title: "Corporate Website Redesign",
    description: "Modern, responsive corporate website with CMS integration, performance optimization, and SEO strategy.",
    image: webImg,
    category: "Web Development",
    status: "Completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    year: "2026",
  },
  {
    id: "7",
    title: "Network Infrastructure Setup",
    description: "Enterprise-grade network setup including firewall configuration, VLAN segmentation, and secure VPN deployment.",
    image: networkImg,
    category: "Networking",
    status: "Completed",
    technologies: ["Cisco", "Firewall", "VPN", "VLAN", "SD-WAN"],
    year: "2025",
  },
  {
    id: "8",
    title: "Brand Identity & Graphics Package",
    description: "Complete brand identity design including logo, brand guidelines, stationery, and digital asset creation.",
    image: brandImg,
    category: "Branding",
    status: "Completed",
    technologies: ["Figma", "Photoshop", "Illustrator", "After Effects"],
    year: "2025",
  },
  {
    id: "9",
    title: "NICEGENE Cloud Services Portal",
    description: "Self-service cloud management portal for clients to monitor resources, manage billing, and request support.",
    image: cloudImg,
    category: "Cloud Services",
    status: "Maintenance",
    technologies: ["AWS", "React", "Node.js", "Docker", "Terraform"],
    year: "2026",
  },
  {
    id: "10",
    title: "NICEGENE Tech Brand Refresh",
    description: "Strategic brand refresh including new visual identity, website update, and marketing collateral redesign.",
    image: techImg,
    category: "Branding",
    status: "Completed",
    technologies: ["Figma", "Photoshop", "After Effects", "Premiere Pro"],
    year: "2025",
  },
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
  const data = await fetchApi<ApiProject[]>("/projects");
  return data.map((p) => {
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
