import type { StaticImageData } from "next/image";
import api from "./api";
import frontendImg from "@/assets/images/academy/courses/frontend.jpg";
import cloudImg from "@/assets/images/academy/courses/cloud.jpg";
import productDesignImg from "@/assets/images/academy/courses/product-design.jpg";
import projectManagementImg from "@/assets/images/academy/courses/project-management.jpg";
import cybersecurityImg from "@/assets/images/academy/courses/cybersecurity.jpg";
import dataAnalyticsImg from "@/assets/images/academy/courses/data-analytics.jpg";
import digitalMarketingImg from "@/assets/images/academy/courses/digital-marketing.jpg";
import videoEditingImg from "@/assets/images/academy/courses/video-editing.jpg";
import web3Img from "@/assets/images/academy/courses/web3.jpg";
import graphicsDesignImg from "@/assets/images/academy/courses/graphics-design.jpg";
import productManagementImg from "@/assets/images/academy/courses/product-management.jpg";
import forexImg from "@/assets/images/academy/courses/forex.jpg";
import architecturalImg from "@/assets/images/academy/courses/architectural.jpg";
import structuralImg from "@/assets/images/academy/courses/structural.jpg";
import mepImg from "@/assets/images/academy/courses/mep.jpg";
import productivityImg from "@/assets/images/academy/courses/productivity.jpg";
import youtubeImg from "@/assets/images/academy/courses/youtube.jpg";
import socialMediaImg from "@/assets/images/academy/courses/social-media.jpg";
import staffTrainingImg from "@/assets/images/academy/courses/staff-training.jpg";
import techForKidsImg from "@/assets/images/academy/courses/tech-for-kids.jpg";

export type Course = {
  image: StaticImageData;
  title: string;
  desc: string;
  track: string;
  fee: string;
  time: string;
  status: string;
  age?: string;
  courseDesc: string;
};

export const courses: Course[] = [
  { image: frontendImg, title: "Front-end Web Development", desc: "Modern HTML, CSS, JS, and React.", track: "Web Dev Track", fee: "₦120,000", time: "12 Weeks", status: "On Going", courseDesc: "Mastering HTML5, CSS3, JavaScript, and introduction to modern frameworks like React." },
  { image: cloudImg, title: "Cloud Computing", desc: "AWS Cloud Architecture & Deployment and Cloud lites", track: "Cloud Track", fee: "₦215,000", time: "12 Weeks", status: "On Going", courseDesc: "Master AWS cloud architecture, and deployment strategies for enterprise solutions." },
  { image: productDesignImg, title: "Product Design", desc: "UI/UX principles & Figma prototyping.", track: "UI/UX Track", fee: "₦100,000", time: "8 Weeks", status: "On Going", courseDesc: "Master UI/UX principles, wireframing, and high-fidelity prototyping using Figma and Adobe XD." },
  { image: projectManagementImg, title: "Project Management", desc: "Agile, Scrum, and Team Leadership.", track: "Management Track", fee: "₦120,000", time: "8 Weeks", status: "On Going", courseDesc: "Waterfall, Agile, and Scrum methodologies including team leadership and risk management." },
  { image: cybersecurityImg, title: "Cybersecurity", desc: "Ethical Hacking & Threat Intelligence.", track: "Security Track", fee: "₦150,000", time: "8 Weeks", status: "On Going", courseDesc: "Ethical hacking, threat intelligence, network security, and digital forensics." },
  { image: dataAnalyticsImg, title: "Data Analytics", desc: "SQL, PowerBI & Data Visualization.", track: "Data Track", fee: "₦180,000", time: "12 Weeks", status: "On Going", courseDesc: "Learn data visualization, SQL, and PowerBI for high-level business insights." },
  { image: digitalMarketingImg, title: "Digital Marketing", desc: "SEO, SEM, and Ad Optimization.", track: "Marketing Track", fee: "₦80,000", time: "8 Weeks", status: "On Going", courseDesc: "Strategic SEO, Social Media Management, and High-ROI Ad Campaign optimization." },
  { image: videoEditingImg, title: "Video Editing", desc: "Premiere Pro & CapCut storytelling.", track: "Content Track", fee: "₦50,000", time: "5 Weeks", status: "On Going", courseDesc: "Professional storytelling using Premiere Pro and CapCut desktop for creators." },
  { image: web3Img, title: "Introduction to Web3 Technologies", desc: "Blockchain & Smart Contract fundamentals", track: "Web3 Track", fee: "₦80,000", time: "8 Weeks", status: "On Going", courseDesc: "Introduction to Blockchain fundamentals, Smart Contracts, and the future of the Semantic Web." },
  { image: graphicsDesignImg, title: "Graphics Design", desc: "Branding, Typography & Photoshop.", track: "Graphics Track", fee: "₦50,000", time: "6 Weeks", status: "On Going", courseDesc: "Master visual branding, typography, and professional Canva/Photoshop skills." },
  { image: productManagementImg, title: "Product Management", desc: "Ideation, Roadmap & Launch.", track: "Product Track", fee: "₦120,000", time: "8 Weeks", status: "On Going", courseDesc: "From ideation to launch—learn product lifecycle, strategy, and roadmapping." },
  { image: forexImg, title: "Introduction to Forex Trading", desc: "Technical & Fundamental Analysis.", track: "Trading Track", fee: "₦100,000", time: "8 Weeks", status: "On Going", courseDesc: "Analysis, Risk Management, and Price Action trading for global markets." },
  { image: architecturalImg, title: "Architectural Design", desc: "2D Drafting & 3D Visualization.", track: "Architecture Track", fee: "₦150,000", time: "8 Weeks", status: "On Going", courseDesc: "Designing using AutoCAD, Revit, and rendering with Lumion, Twinmotion, or Vray." },
  { image: structuralImg, title: "Structural Engineering Design", desc: "Design & Member Detailing.", track: "Engineering Track", fee: "₦150,000", time: "8 Weeks", status: "On Going", courseDesc: "Modeling and analysis of steel/concrete using Orion, ProtaStructure, or STAAD.Pro." },
  { image: mepImg, title: "MEP Designs", desc: "Mechanical, Electrical & Plumbing Analysis.", track: "MEP Track", fee: "₦150,000", time: "8 Weeks", status: "On Going", courseDesc: "Building system design including load calculations and piping layout." },
  { image: productivityImg, title: "Digital Productivity", desc: "Microsoft 365 & Google Workspace.", track: "Productivity Track", fee: "₦50,000", time: "4 Weeks", status: "On Going", courseDesc: "Master Microsoft 365 and Google Workspace for enterprise-level collaboration." },
  { image: youtubeImg, title: "YouTube Optimization", desc: "SEO & Algorithm Mastery.", track: "Growth Track", fee: "₦50,000", time: "4 Weeks", status: "On Going", courseDesc: "Channel growth architecture, SEO, and thumbnail psychology." },
  { image: socialMediaImg, title: "Social Media Optimization", desc: "IG, TikTok, and LinkedIn Strategy.", track: "Social Media", fee: "₦50,000", time: "4 Weeks", status: "On Going", courseDesc: "Content strategy and ad management for IG, TikTok, and LinkedIn engagement." },
  { image: staffTrainingImg, title: "Staff Training", desc: "Corporate Workspace Solutions.", track: "Equipping Corporate Staff", fee: "Contact Us", time: "Flexible", status: "Available", courseDesc: "Custom on-site training for corporate organizations and schools." },
  { image: techForKidsImg, title: "Tech for Kids", desc: "Coding & Digital Literacy for young minds.", track: "Junior Track", fee: "₦50,000", time: "Monthly", status: "Open", age: "8 - 12 years", courseDesc: "Empowering children with early coding, logic, and safe internet navigation." },
];

export interface PricingOverride {
  _id: string;
  title: string;
  desc?: string;
  track?: string;
  fee?: string;
  time?: string;
  status?: string;
  courseDesc?: string;
}

export async function getCoursePricing(): Promise<PricingOverride[]> {
  return api.get<PricingOverride[]>("/courses").then((r) => r.data);
}

export function mergePricing(
  staticList: Course[],
  overrides: PricingOverride[]
): Course[] {
  const map = new Map(overrides.map((o) => [o.title, o]));
  return staticList.map((course) => {
    const override = map.get(course.title);
    if (!override) return course;
    return {
      ...course,
      desc: override.desc ?? course.desc,
      track: override.track ?? course.track,
      fee: override.fee ?? course.fee,
      time: override.time ?? course.time,
      status: override.status ?? course.status,
      courseDesc: override.courseDesc ?? course.courseDesc,
    };
  });
}
