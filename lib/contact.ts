import { ComponentType } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { fetchApi } from "./api";

export type ContactCard = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  details: string[];
  href?: string;
  action?: string;
  bg: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
};

export const contactCards: ContactCard[] = [
  {
    icon: FaPhoneAlt, title: "Phone", details: ["+234 806 070 4412"],
    href: "tel:+2348060704412", action: "Call Now",
    bg: "bg-blue-500/10", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", borderHover: "hover:border-blue-500/40",
  },
  {
    icon: FaEnvelope, title: "Email", details: ["info@nicegeneco.com.ng"],
    href: "mailto:info@nicegeneco.com.ng", action: "Send Email",
    bg: "bg-[#2E5FA3]/10", iconBg: "bg-[#2E5FA3]/20", iconColor: "text-[#2E5FA3]", borderHover: "hover:border-[#2E5FA3]/40",
  },
  {
    icon: FaGlobe, title: "Website", details: ["www.nicegeneco.com.ng"],
    href: "https://www.nicegeneco.com.ng", action: "Visit Site",
    bg: "bg-green-500/10", iconBg: "bg-green-500/20", iconColor: "text-green-400", borderHover: "hover:border-green-500/40",
  },
  {
    icon: FaWhatsapp, title: "WhatsApp", details: ["+234 806 070 4412"],
    href: "https://wa.me/2348060704412", action: "Chat Now",
    bg: "bg-green-700/10", iconBg: "bg-green-700/20", iconColor: "text-green-700", borderHover: "hover:border-green-500/40",
  },
  {
    icon: FaMapMarkerAlt, title: "Office", details: ["Road 15, Lekki Gardens Estate Phase 3, Hitech Road, Lekki-Ajah, Lagos"],
    bg: "bg-purple-500/10", iconBg: "bg-purple-500/20", iconColor: "text-purple-500", borderHover: "hover:border-purple-500/40",
  },
];

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  organisation: string;
  phone: string;
  service: string;
  consent: boolean;
};

export type ContactResponse = {
  message: string;
  contact: ContactPayload & { _id: string; createdAt: string };
};

export function submitContact(data: ContactPayload) {
  return fetchApi<ContactResponse>("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
