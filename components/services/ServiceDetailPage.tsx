"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import SpecsModal, { type Specs } from "@/components/SpecsModal";
import cloudPoster from "@/assets/images/services/Cloud_Services.png";
import consultingPoster from "@/assets/images/services/work.png";
import academyPoster from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import gadgetsPoster from "@/assets/images/services/NICEGENE GADGETS 2.jpg";
import graphicsPoster from "@/assets/images/services/work white.png";
import webPoster from "@/assets/images/services/Nicegene services.png";
import networkingPoster from "@/assets/images/services/NICEGENE system networking and server setup.jpg";
import digitizationPoster from "@/assets/images/services/NICEGENE cloud migration and digitization.jpg";
import dronePoster from "@/assets/images/services/NICEGENE DRONE SERVICES.jpg";
import photoPoster from "@/assets/images/events/team-working.jpg";
import posPoster from "@/assets/images/services/NICEGENE POS & INVENTORY.jpg";
import omenImg from "@/assets/images/gadgets/omen.png";
import victus2Img from "@/assets/images/gadgets/victus2.jpg";
import zbookImg from "@/assets/images/gadgets/z-book.jpg";
import elitebook840Img from "@/assets/images/gadgets/HP-EliteBook-840-G8.jpg";
import pavilion15Img from "@/assets/images/gadgets/HP-Pavilion-15.png";
import latitude7410Img from "@/assets/images/gadgets/latitude_7410.jpg";
import latitude7390Img from "@/assets/images/gadgets/latitude_7390.jpg";
import latitude7420Img from "@/assets/images/gadgets/latitude_7420.jpg";
import latitude5310Img from "@/assets/images/gadgets/latitude_5310.jpg";
import latitude5300Img from "@/assets/images/gadgets/latitude_5300.jpg";
import {
  FaCloudUploadAlt,
  FaChartLine,
  FaServer,
  FaShieldAlt,
  FaDollarSign,
  FaWifi,
  FaLayerGroup,
  FaBookOpen,
  FaMobileAlt,
  FaPalette,
  FaCode,
  FaHelicopter,
  FaCameraRetro,
  FaCashRegister,
  FaGraduationCap,
  FaClock,
  FaAward,
  FaUsers,
  FaCogs,
  FaShoppingCart,
  FaChartBar,
  FaMicrochip,
  FaDesktop,
  FaGamepad,
  FaPenFancy,
  FaLaptopCode,
  FaRocket,
  FaVideo,
  FaImage,
  FaStoreAlt,
  FaClipboardList,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaLightbulb,
  FaNetworkWired,
  FaFileAlt,
  FaDatabase,
  FaSearch,
} from "react-icons/fa";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaCloudUploadAlt, FaChartLine, FaServer, FaShieldAlt, FaDollarSign, FaLaptopCode,
  FaWifi, FaLayerGroup, FaGraduationCap, FaClock, FaAward, FaUsers, FaBookOpen,
  FaMobileAlt, FaPalette, FaCode, FaHelicopter, FaCameraRetro, FaCashRegister,
  FaCogs, FaShoppingCart, FaChartBar, FaMicrochip, FaDesktop, FaGamepad, FaPenFancy,
  FaRocket, FaVideo, FaImage, FaStoreAlt, FaClipboardList, FaCheckCircle, FaStar,
  FaLightbulb, FaNetworkWired, FaFileAlt, FaDatabase, FaSearch,
};

const academyCourses = [
  { title: "Front-end Web Development", desc: "Mastering HTML5, CSS3, JavaScript, and modern frameworks like React.", fee: "₦120,000", time: "12 Weeks", status: "On Going" },
  { title: "Cloud Computing", desc: "Master AWS cloud architecture, and deployment strategies for enterprise solutions.", fee: "₦215,000", time: "12 Weeks", status: "On Going" },
  { title: "Product Design (UI/UX)", desc: "Master UI/UX principles, wireframing, and high-fidelity prototyping using Figma.", fee: "₦100,000", time: "8 Weeks", status: "On Going" },
  { title: "Project Management", desc: "Waterfall, Agile, and Scrum methodologies including team leadership.", fee: "₦120,000", time: "8 Weeks", status: "On Going" },
  { title: "Cybersecurity", desc: "Ethical hacking, threat intelligence, network security, and digital forensics.", fee: "₦150,000", time: "8 Weeks", status: "On Going" },
  { title: "Data Analytics", desc: "Learn data visualization, SQL, and PowerBI for business insights.", fee: "₦180,000", time: "12 Weeks", status: "On Going" },
  { title: "Digital Marketing", desc: "Strategic SEO, Social Media Management, and High-ROI Ad Campaign optimization.", fee: "₦80,000", time: "8 Weeks", status: "On Going" },
  { title: "Video Editing", desc: "Professional storytelling using Premiere Pro and CapCut desktop.", fee: "₦50,000", time: "5 Weeks", status: "On Going" },
  { title: "Web3 Technologies", desc: "Blockchain fundamentals, Smart Contracts, and the Semantic Web.", fee: "₦80,000", time: "8 Weeks", status: "On Going" },
  { title: "Graphics Design", desc: "Master visual branding, typography, and professional Canva/Photoshop.", fee: "₦50,000", time: "6 Weeks", status: "On Going" },
  { title: "Product Management", desc: "From ideation to launch—product lifecycle, strategy, and roadmapping.", fee: "₦120,000", time: "8 Weeks", status: "On Going" },
  { title: "Forex Trading", desc: "Analysis, Risk Management, and Price Action trading for global markets.", fee: "₦100,000", time: "8 Weeks", status: "On Going" },
  { title: "Architectural Design", desc: "AutoCAD, Revit, and rendering with Lumion, Twinmotion, or Vray.", fee: "₦150,000", time: "8 Weeks", status: "On Going" },
  { title: "Structural Engineering", desc: "Steel/concrete modeling using Orion, ProtaStructure, or STAAD.Pro.", fee: "₦150,000", time: "8 Weeks", status: "On Going" },
  { title: "MEP Designs", desc: "Mechanical, Electrical & Plumbing analysis and load calculations.", fee: "₦150,000", time: "8 Weeks", status: "On Going" },
  { title: "Digital Productivity", desc: "Master Microsoft 365 and Google Workspace for enterprise collaboration.", fee: "₦50,000", time: "4 Weeks", status: "On Going" },
  { title: "YouTube Optimization", desc: "Channel growth architecture, SEO, and thumbnail psychology.", fee: "₦50,000", time: "4 Weeks", status: "On Going" },
  { title: "Social Media Optimization", desc: "Content strategy and ad management for IG, TikTok, and LinkedIn.", fee: "₦50,000", time: "4 Weeks", status: "On Going" },
  { title: "Staff Training", desc: "Custom on-site training for corporate organizations and schools.", fee: "Contact Us", time: "Flexible", status: "Available" },
  { title: "Tech for Kids", desc: "Empowering children with early coding, logic, and safe internet navigation.", fee: "₦50,000", time: "Monthly", status: "Open" },
];

const gadgetsCategories = [
  { icon: "FaDesktop", title: "High-Performance Laptops", desc: "EliteBooks, Latitudes, ThinkPads" },
  { icon: "FaMicrochip", title: "Pro Workstations", desc: "Z-Book series for creatives" },
  { icon: "FaGamepad", title: "Gaming Mastery", desc: "High refresh rates & RTX power" },
  { icon: "FaCogs", title: "Ultimate Computing", desc: "Alienware & Omen configs" },
];

const gadgetsProducts: { name: string; tag: string; image: typeof omenImg; specs: Specs }[] = [
  { name: "Dell Alienware M18 R1", tag: "High-End Gaming Workstation", image: omenImg, specs: { processor: "Intel Core i9-13900HX", ram: "32GB DDR5", storage: "1TB NVMe SSD", display: '18" QHD+ 165Hz', graphics: "NVIDIA RTX 4080 12GB", os: "Windows 11 Pro" } },
  { name: "HP 15 Victus Gaming", tag: "Reliable Performance", image: victus2Img, specs: { processor: "Intel Core i5-13420H", ram: "8GB DDR4", storage: "512GB NVMe SSD", display: '15.6" FHD 144Hz', graphics: "NVIDIA RTX 3050 4GB", os: "Windows 11 Home" } },
  { name: "HP Z-Book 14 G7", tag: "Portable Powerhouse", image: zbookImg, specs: { processor: "Intel Core i7-10850H", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "NVIDIA Quadro T1000 4GB", os: "Windows 11 Pro" } },
  { name: "HP EliteBook 840 G8", tag: "Premium Enterprise Performer", image: elitebook840Img, specs: { processor: "Intel Core i7-1185G7", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "Intel Iris Xe", os: "Windows 11 Pro" } },
  { name: "HP Pavilion 15", tag: "Sleek Power & Entertainment", image: pavilion15Img, specs: { processor: "Intel Core i5-1235U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '15.6" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Home" } },
  { name: "Dell Latitude 7410", tag: "Business Class Ultrabook", image: latitude7410Img, specs: { processor: "Intel Core i7-10610U", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 7390", tag: "Premium Business Laptop", image: latitude7390Img, specs: { processor: "Intel Core i5-8350U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '13.3" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 7420", tag: "Enterprise Ultrabook", image: latitude7420Img, specs: { processor: "Intel Core i7-1185G7", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "Intel Iris Xe", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 5310", tag: "Smart Workplace Solutions", image: latitude5310Img, specs: { processor: "Intel Core i5-10310U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '13.3" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 5300", tag: "Affordable Business Essential", image: latitude5300Img, specs: { processor: "Intel Core i5-8265U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '13.3" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } }
];

const devProcess = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals and target audience." },
  { step: "02", title: "UI/UX Design", desc: "Creating interactive prototypes for your approval." },
  { step: "03", title: "Development", desc: "Coding your solution with modern, clean standards." },
  { step: "04", title: "Deployment", desc: "Launching on the best platform for maximum speed and uptime." },
];

function HeroSection({ image, title, tagline, gradient, icon }: { image?: typeof omenImg; title: string; tagline: string; gradient: string; icon?: React.ComponentType<{ size?: number; className?: string }> }) {
  const IconComp = icon;
  return (
    <section className="relative px-6 md:px-20 pt-36 pb-20 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker pointer-events-none" />
      <div className={`absolute inset-0 ${gradient} opacity-30 pointer-events-none`} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors group"
          >
            <FaArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center text-white overflow-hidden ring-2 ring-white/20">
            {IconComp ? (
              <IconComp size={32} />
            ) : image ? (
              <Image
                src={image}
                alt={title}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent text-xs uppercase tracking-[0.2em]"
            >
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-3xl md:text-5xl font-semibold leading-tight mt-1 text-white"
            >
              {title}
            </motion.h1>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 max-w-3xl text-sm md:text-base leading-relaxed"
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}

function Section({ title, children, delay = 0 }: { title?: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="mb-14 last:mb-0"
    >
      {title && (
        <h2 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
          <span className="w-1 h-7 bg-accent rounded-full inline-block" />
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}

function FeatureGrid({ items, columns = 3 }: { items: { icon: string; title: string; desc: string }[]; columns?: number }) {
  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns] ?? "lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-4`}>
      {items.map((item, i) => {
        const Icon = icons[item.icon] || FaCheckCircle;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="flex gap-3 bg-surface border border-gray-200 rounded-xl p-5 hover:bg-secondary/5 hover:border-secondary/20 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-secondary/20 group-hover:scale-110 transition-all">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
              <p className="text-xs text-text-primary leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function PricingCard({ title, fee, time, status, desc }: { title: string; fee: string; time: string; status: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-surface border border-gray-200 rounded-xl p-5 hover:border-secondary/30 hover:bg-secondary/[0.04] transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-primary">
          <FaGraduationCap size={18} />
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-success/10 text-success border border-success/20">
          {status}
        </span>
      </div>
      <h4 className="text-base font-semibold text-text-primary mb-1">{title}</h4>
      <p className="text-xs text-text-primary mb-3 leading-relaxed">{desc}</p>
      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div>
          <span className="text-lg font-bold text-primary">{fee}</span>
          <span className="text-xs text-text-primary/70 ml-2">{time}</span>
        </div>
        <Link href="/cohort" className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-primary hover:bg-secondary hover:text-primary transition-all">
          Enroll Now
        </Link>
      </div>
    </motion.div>
  );
}

function CTASection({ title, desc, href, label }: { title: string; desc: string; href: string; label: string }) {
  return (
    <section className="px-6 md:px-20 pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker border border-primary/20 rounded-3xl p-10 md:p-16 text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          <p className="text-text-primary mt-4 max-w-2xl mx-auto text-sm">{desc}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all mt-8"
          >
            {label} <FaArrowRight size={12} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

const serviceConfig: Record<string, { image?: typeof omenImg; title: string; tagline: string; gradient: string; icon?: React.ComponentType<{ size?: number; className?: string }> }> = {
  cloud: {
    image: cloudPoster,
    title: "Cloud System Development, Migration & Operations",
    tagline:
      "We design, build, and manage secure, scalable cloud architectures on AWS, tailored to how your organisation actually operates — the same architecture pattern behind our flagship LAEC platform.",
    gradient: "bg-gradient-to-b from-secondary/5 to-transparent",
  },
  consulting: {
    image: consultingPoster,
    title: "IT Consulting & Digital Solutions",
    tagline:
      "Strategic advisory that turns manual, paper-heavy operations into efficient digital workflows.",
    gradient: "bg-gradient-to-b from-accent/5 to-transparent",
  },
  academy: {
    image: academyPoster,
    title: "NICEGENE Academy — Professional Trainings",
    tagline:
      "Practical, instructor-led digital skills training delivered through live virtual classes and hands-on projects — built to make participants job-ready, not just certificate-ready.",
    gradient: "bg-gradient-to-b from-secondary/5 to-transparent",
  },
  gadgets: {
    image: gadgetsPoster,
    title: "Technology Gadget Sales",
    tagline:
      "Premium laptops and IT hardware from trusted global brands, giving individuals and organizations access to high-performance technology backed by our own technical support.",
    gradient: "bg-gradient-to-b from-accent/5 to-transparent",
  },
  graphics: {
    image: graphicsPoster,
    title: "Graphic Design & Video Editing",
    tagline:
      "Premium branding and visual storytelling — brand identity, corporate logos, and professional video marketing collateral.",
    gradient: "bg-gradient-to-b from-accent/5 to-transparent",
  },
  web: {
    image: webPoster,
    title: "Web & App Development",
    tagline:
      "Custom, responsive, and secure websites and applications built on modern frameworks — from corporate web applications and school portals to bespoke internal tools.",
    gradient: "bg-gradient-to-b from-secondary/5 to-transparent",
  },
  networking: {
    image: networkingPoster,
    title: "System Networking & Infrastructure",
    tagline:
      "End-to-end LAN design, server setup, and administration to give your organisation a stable, secure technical backbone.",
    gradient: "bg-gradient-to-b from-secondary/5 to-transparent",
  },
  digitization: {
    image: digitizationPoster,
    title: "Digitization & Records Management",
    tagline:
      "Convert paper-based records and manual processes into structured, secure, and searchable digital systems.",
    gradient: "bg-gradient-to-b from-accent/5 to-transparent",
  },
  drone: {
    image: dronePoster,
    title: "Drone Services",
    tagline:
      "Aerial mapping, industrial inspections, and high-definition cinematography for diverse industry needs.",
    gradient: "bg-gradient-to-b from-secondary/5 to-transparent",
  },
  photo: {
    image: photoPoster,
    title: "Photography & Videography",
    tagline: "Premium ground visuals captured with cinematic precision and artistic detail by NICEGENE TECHNOLOGIES.",
    gradient: "bg-gradient-to-b from-accent/5 to-transparent",
  },
  pos: {
    image: posPoster,
    title: "Point of Sale & Inventory Management Systems",
    tagline:
      "Complete retail automation, including POS hardware installation, real-time stock tracking, and cloud-based sales reporting.",
    gradient: "bg-gradient-to-b from-accent/5 to-transparent",
  },
  "data-protection": {
    title: "Data Protection & Compliance Services",
    tagline:
      "NICEGENE Technologies is a duly licensed Data Protection Compliance Organization (DPCO), certified by the Nigeria Data Protection Commission (NDPC) under Section 33 of the Nigeria Data Protection Act, 2023 — helping organizations build lawful, secure, and audit-ready data protection practices.",
    gradient: "bg-gradient-to-b from-secondary/5 to-transparent",
    icon: FaShieldAlt,
  },
};

export default function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; tag: string; specs: Specs } | null>(null);
  const config = serviceConfig[serviceId];
  if (!config) return null;

  const { image, title, tagline, gradient, icon } = config;

  return (
    <main className="w-full bg-background text-text-primary">
      <HeroSection image={image} title={title} tagline={tagline} gradient={gradient} icon={icon} />

      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        {/* ===== CLOUD ===== */}
        {serviceId === "cloud" && (
          <>
            <Section title="Who We Are">  
              <p className="text-text-primary/80 leading-relaxed max-w-4xl">
                <strong className="text-text-primary">NICEGENE TECHNOLOGIES </strong> specializes in helping Nigerian
                enterprises and startups migrate to the cloud. We don&apos;t just move your data; we architect
                environments optimized for high performance, maximum security, and reduced monthly costs.
              </p>
            </Section>

            <Section title="Our Cloud Services">
              <FeatureGrid
                items={[
                  { icon: "FaCloudUploadAlt", title: "Cloud Migration", desc: "Seamlessly move your on-premise servers and databases to AWS with zero downtime and full data integrity." },
                  { icon: "FaLaptopCode", title: "Digitization & Records", desc: "Transform physical assets into a secure digital ecosystem with streamlined workflows." },
                  { icon: "FaDollarSign", title: "Cost Optimization", desc: "Analyze your usage and implement Savings Plans and Reserved Instances to reduce bills." },
                  { icon: "FaLayerGroup", title: "Serverless Computing", desc: "Run code without managing servers using AWS Lambda. Scale automatically, pay per use." },
                  { icon: "FaShieldAlt", title: "Disaster Recovery", desc: "Protect your business with automated backups and multi-region failover solutions." },
                  { icon: "FaWifi", title: "System Networking", desc: "Engineer a high-speed digital backbone with custom server configs and secure LAN/WAN." },
                ]}
              />
            </Section>

            <Section title="Why Move to AWS with NICEGENE?">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["99.99% Uptime Guarantee", "Enhanced Data Security", "Global Reach for Local Businesses", "Managed Support 24/7", "Automated Scaling", "Enterprise-Grade Architecture"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 bg-secondary/5 border border-secondary/10 rounded-lg px-4 py-3"
                  >
                    <FaCheckCircle className="text-primary shrink-0" size={14} />
                    <span className="text-sm text-text-primary/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ===== IT CONSULTING ===== */}
        {serviceId === "consulting" && (
          <>
            <Section title="Who We Help">
              <p className="text-text-primary/80 leading-relaxed max-w-4xl">
                We work with businesses, schools, and public institutions to
                identify where manual processes are costing them time,
                accuracy, or money, and design tailored digital solutions to
                fix it. Our consulting engagements combine technical expertise
                with a clear understanding of institutional operations.
              </p>
            </Section>

            <Section title="What We Deliver">
              <FeatureGrid
                items={[
                  { icon: "FaClipboardList", title: "Process Analysis", desc: "Identify where manual processes are costing time, accuracy, or money." },
                  { icon: "FaLightbulb", title: "Digital Workflow Design", desc: "Tailored digital solutions designed around how your organisation actually works." },
                  { icon: "FaUsers", title: "Institutional Insight", desc: "Technical expertise combined with a clear understanding of institutional operations." },
                  { icon: "FaRocket", title: "Transformation Roadmaps", desc: "A practical, staged path from manual operations to efficient digital workflows." },
                ]}
              />
            </Section>

            <Section title="Who We Work With">
              <div className="flex flex-wrap gap-3">
                {["Businesses", "Schools", "Public Institutions", "Retailers", "Commissions"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm rounded-full bg-secondary/10 text-primary border border-secondary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ===== NETWORKING ===== */}
        {serviceId === "networking" && (
          <>
            <Section title="What We Do">
              <p className="text-text-primary/80 leading-relaxed max-w-4xl">
                We design and implement complete LAN and system networking
                infrastructure, including server setup and administration, to
                give your organisation a stable, secure technical backbone.
              </p>
            </Section>

            <Section title="Our Networking Services">
              <FeatureGrid
                items={[
                  { icon: "FaNetworkWired", title: "LAN Design & Implementation", desc: "Complete local area network infrastructure designed for your organisation." },
                  { icon: "FaServer", title: "Server Setup & Administration", desc: "Configuration, deployment, and ongoing administration of your servers." },
                  { icon: "FaShieldAlt", title: "Secure Configuration", desc: "Security-first networking that keeps your organisation connected and protected." },
                  { icon: "FaWifi", title: "Stable Technical Backbone", desc: "A dependable network foundation for schools, businesses, and institutions." },
                ]}
              />
            </Section>
          </>
        )}

        {/* ===== DIGITIZATION ===== */}
        {serviceId === "digitization" && (
          <>
            <Section title="What We Do">
              <p className="text-text-primary/80 leading-relaxed max-w-4xl">
                We convert paper-based records and manual processes into
                structured, secure, and searchable digital systems — reducing
                administrative overhead and improving data integrity for
                schools and institutions managing large volumes of records.
              </p>
            </Section>

            <Section title="Our Digitization Services">
              <FeatureGrid
                items={[
                  { icon: "FaFileAlt", title: "Records Digitization", desc: "Convert paper-based records into structured, secure, searchable digital systems." },
                  { icon: "FaDatabase", title: "Structured Archives", desc: "Organised digital repositories that make records easy to manage and retrieve." },
                  { icon: "FaSearch", title: "Advanced Search & Retrieval", desc: "Quickly locate any record with structured, searchable digital storage." },
                  { icon: "FaCheckCircle", title: "Improved Data Integrity", desc: "Reduce administrative overhead and protect the accuracy of your records." },
                ]}
              />
            </Section>
          </>
        )}

        {/* ===== ACADEMY ===== */}
        {serviceId === "academy" && (
          <>
            <Section title="Professional Certification Courses">
              <p className="text-text-primary/80 text-sm mb-8 max-w-3xl">
                Join over <strong className="text-text-primary">500+ successful alumni</strong> who have transformed
                their careers through our industry-standard training programs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {academyCourses.map((course) => (
                  <PricingCard key={course.title} {...course} />
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ===== GADGETS ===== */}
        {serviceId === "gadgets" && (
          <>
            <Section title="Categories">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gadgetsCategories.map((cat, i) => {
                  const CatIcon = icons[cat.icon] || FaDesktop;
                  return (
                    <motion.div
                      key={cat.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-surface border border-gray-200 rounded-xl p-5 text-center hover:border-secondary/30 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-primary mx-auto mb-3 group-hover:bg-secondary/20 group-hover:scale-110 transition-all">
                        <CatIcon size={24} />
                      </div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">{cat.title}</h4>
                      <p className="text-xs text-text-primary/70">{cat.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </Section>

            <Section title="Featured Products">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {gadgetsProducts.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="bg-surface border border-gray-200 rounded-xl p-4 text-center hover:border-secondary/30 transition-all group"
                  >
                    <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-secondary/5 to-secondary/5 flex items-center justify-center mb-3 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-text-primary leading-tight">{product.name}</h4>
                    <p className="text-xs text-text-primary/70 mt-1">{product.tag}</p>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      aria-haspopup="dialog"
                      className="mt-3 text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-primary hover:bg-secondary hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      View Specs
                    </button>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section title="Custom Sourcing">
              <div className="bg-accent/5 border border-accent/10 rounded-xl p-6 text-center">
                <p className="text-text-primary/80 text-sm mb-4 max-w-2xl mx-auto">
                   Looking for a specific high-end system? Our sales team are here to serve you better.
                </p>
                <a
                  href="https://wa.me/2348060704412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
                >
                  Chat our Sales Team <FaArrowRight size={12} />
                </a>
              </div>
            </Section>
          </>
        )}

        {/* ===== GRAPHICS ===== */}
        {serviceId === "graphics" && (
          <>
            <Section title="General Graphics">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Marketing Flyers", "Event Posters", "Social Media Content", "Service Labels"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="aspect-square rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/10 border border-gray-200 flex items-center justify-center text-center p-6 hover:border-secondary/30 transition-all group"
                  >
                    <div>
                      <FaPenFancy className="text-primary text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-text-primary/80 font-medium">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section title="Branding & Logos">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Corporate Logos", "Full Business Branding", "Professional Stationery", "Brand Guidelines"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="aspect-square rounded-xl bg-gradient-to-br from-accent/10 to-accent/10 border border-gray-200 flex items-center justify-center text-center p-6 hover:border-accent/30 transition-all group"
                  >
                    <div>
                      <FaPalette className="text-accent text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-text-primary/80 font-medium">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section title="Need a Custom Design?">
              <div className="bg-gradient-to-r from-secondary/5 to-accent/5 border border-gray-200 rounded-xl p-6 text-center">
                <p className="text-text-primary/80 text-sm mb-4">Your brand deserves the best. Let&apos;s create something remarkable together.</p>
                <a
                  href="https://wa.me/2348060704412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
                >
                  Chat with a Designer <FaArrowRight size={12} />
                </a>
              </div>
            </Section>
          </>
        )}

        {/* ===== WEB ===== */}
        {serviceId === "web" && (
          <>
            <Section>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "Next.js", "Node.js", "Tailwind CSS", "AWS Amplify", "MongoDB"].map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 text-sm rounded-full bg-secondary/10 text-primary border border-secondary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </Section>

            <Section title="What We Build">
              <FeatureGrid
                items={[
                  { icon: "FaCogs", title: "SaaS Applications", desc: "Complex platforms with user authentication, subscription billing, and real-time dashboards." },
                  { icon: "FaMobileAlt", title: "Mobile-First Design", desc: "100% responsive sites ensuring perfect experiences on any device." },
                  { icon: "FaShoppingCart", title: "E-commerce Solutions", desc: "Custom online stores integrated with Paystack and Flutterwave." },
                ]}
              />
            </Section>

            <Section title="Our Development Process">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {devProcess.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative bg-surface border border-gray-200 rounded-xl p-5 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">{step.title}</h4>
                    <p className="text-xs text-text-primary">{step.desc}</p>
                    {i < devProcess.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 -right-3 text-primary/30 text-xl">
                        →
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ===== DRONE ===== */}
        {serviceId === "drone" && (
          <>
            <Section title="Drone Services">
              <FeatureGrid
                columns={2}
                items={[
                  { icon: "FaRocket", title: "Precision Mapping", desc: "Generate high-resolution 2D maps and 3D models for construction and land surveying." },
                  { icon: "FaVideo", title: "Aerial Cinematography", desc: "Capture stunning 4K visuals for real estate, media production, and corporate branding." },
                  { icon: "FaAward", title: "Pilot Certification", desc: "Comprehensive hands-on training for aspiring pilots covering flight safety and regulations." },
                  { icon: "FaImage", title: "Ground Photography", desc: "Professional ground photography for a complete visual experience." },
                ]}
              />
            </Section>
          </>
        )}

        {/* ===== PHOTOGRAPHY ===== */}
        {serviceId === "photo" && (
          <>
            <Section title="Our Services">
              <FeatureGrid
                columns={2}
                items={[
                  { icon: "FaCameraRetro", title: "Studio Photography", desc: "High-end portraits, corporate headshots, and creative studio sessions tailored to your brand." },
                  { icon: "FaVideo", title: "Event Coverage", desc: "Full cinematic coverage for weddings and conferences with professional 4K post-production." },
                  { icon: "FaImage", title: "Acrylic Frame Making", desc: "Bespoke high-gloss Acrylic Frames — the perfect modern choice for wedding and family galleries." },
                  { icon: "FaUsers", title: "Wedding Galleries", desc: "Comprehensive digital and physical galleries designed to preserve your love story." },
                ]}
              />
            </Section>
          </>
        )}

        {/* ===== POS ===== */}
        {serviceId === "pos" && (
          <>
            <Section title="Core Features">
              <FeatureGrid
                columns={2}
                items={[
                  { icon: "FaClipboardList", title: "Smart Inventory", desc: "Automated tracking ensures you always know what's in your store in real-time." },
                  { icon: "FaChartBar", title: "Growth Analytics", desc: "Track your most profitable items and peak sales hours instantly." },
                  { icon: "FaCogs", title: "Hardware Synergy", desc: "Industrial-grade scanners, thermal receipt printers, and secure cash drawers." },
                  { icon: "FaStoreAlt", title: "Multi-Store Control", desc: "Manage several branches from one centralized dashboard." },
                ]}
              />
            </Section>

            <Section title="Enterprise-Grade Management">
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: "FaStoreAlt", title: "Centralized Multi-Store Control", desc: "Manage several branches from one dashboard." },
                    { icon: "FaShieldAlt", title: "Audit Trails", desc: "Detailed logs of every transaction for maximum security." },
                    { icon: "FaUsers", title: "Loyalty Management", desc: "Integrated customer databases to drive repeat business." },
                    { icon: "FaMobileAlt", title: "Remote Access", desc: "Monitor your store's performance from your smartphone." },
                  ].map((item, i) => {
                    const ItemIcon = icons[item.icon] || FaCheckCircle;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                          <ItemIcon size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
                          <p className="text-xs text-text-primary mt-0.5">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Section>
          </>
        )}

        {/* ===== DATA PROTECTION & COMPLIANCE ===== */}
        {serviceId === "data-protection" && (
          <>
            <Section title="Who We Are">
              <p className="text-text-primary/80 leading-relaxed max-w-4xl">
                <strong className="text-text-primary">NICEGENE Technologies</strong> is a duly licensed Data Protection
                Compliance Organization (DPCO), certified by the Nigeria Data Protection Commission (NDPC) under
                Section 33 of the Nigeria Data Protection Act, 2023. This license authorizes us to provide training,
                auditing, consulting, and compliance services to help organizations meet their obligations under
                Nigerian data protection law.
              </p>
              <p className="text-text-primary/80 leading-relaxed max-w-4xl mt-4">
                As data protection increasingly becomes a legal requirement rather than a best practice, we help
                businesses, schools, and public institutions build compliant, defensible data protection programmes
                &mdash; not as an afterthought, but as part of how their systems are designed from the ground up.
              </p>
            </Section>

            <Section title="What We Offer">
              <FeatureGrid
                columns={2}
                items={[
                  { icon: "FaCheckCircle", title: "Compliance Audits", desc: "Statutory data protection compliance audits, including the annual audits required of organizations designated as Data Controllers or Data Processors of Major Importance (DCPMI)." },
                  { icon: "FaSearch", title: "Data Protection Impact Assessments (DPIAs)", desc: "Structured assessments to identify and mitigate data protection risks in new systems, products, or processes before they go live." },
                  { icon: "FaUsers", title: "Outsourced DPO Services", desc: "Acting as your organization's registered Data Protection Officer, providing ongoing oversight, advisory, and NDPC liaison without the cost of a full-time in-house hire." },
                  { icon: "FaFileAlt", title: "NDPC Registration & Filing Support", desc: "Assistance with Data Controller/Processor registration, entity classification, and annual compliance audit returns through the NDPC portal." },
                  { icon: "FaClipboardList", title: "Policy & Documentation Development", desc: "Drafting privacy policies, data protection policies, consent frameworks, and internal data-handling procedures aligned with the NDPA." },
                  { icon: "FaGraduationCap", title: "Staff & Vendor Training", desc: "Practical data protection training for staff and third-party vendors, delivered through our NICEGENE Academy and Tech Insight Series." },
                  { icon: "FaShieldAlt", title: "Breach Response & Notification Support", desc: "Guidance and hands-on support in responding to data breaches, including NDPC notification requirements and timelines." },
                  { icon: "FaCogs", title: "Ongoing Compliance Monitoring", desc: "Continued advisory support to keep your organization compliant as your systems, data flows, and the regulatory landscape evolve." },
                ]}
              />
            </Section>

            <Section title="Why This Matters">
              <div className="bg-accent/5 border border-accent/10 rounded-xl p-6 md:p-8">
                <p className="text-text-primary/80 leading-relaxed max-w-4xl mb-4">
                  Under the <strong className="text-text-primary">Nigeria Data Protection Act, 2023</strong>,
                  organizations that process personal data &mdash; particularly those classified as Data Controllers
                  or Processors of Major Importance &mdash; are required to register with the NDPC, appoint a Data
                  Protection Officer, and undergo periodic compliance audits conducted by a licensed DPCO.
                  Non-compliance can expose organizations to regulatory penalties and reputational risk.
                </p>
                <p className="text-text-primary/80 leading-relaxed max-w-4xl">
                  As a licensed DPCO with hands-on cloud systems development and general institutional IT experience,
                  we bring a <strong className="text-text-primary">practical, technically grounded approach</strong> to
                  compliance &mdash; not just paperwork, but data protection that&apos;s actually built into how your
                  systems work.
                </p>
              </div>
            </Section>

            <Section title="Verify Our License">
              <div className="bg-surface border border-gray-200 rounded-xl p-6 md:p-8">
                <p className="text-text-primary/80 leading-relaxed max-w-4xl mb-4">
                  NICEGENE Technologies is listed on the NDPC&apos;s official register of licensed Data Protection
                  Compliance Organizations, as <strong className="text-text-primary">NICEGENE TECHNOLOGY SOLUTIONS LIMITED</strong>.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                  <span className="text-xs text-text-primary/60">License No:</span>
                  <span className="text-sm font-mono font-semibold text-primary">NDPC/DPCO/XXXX</span>
                  {/* TODO: Replace NDPC/DPCO/XXXX with actual NDPC license number */}
                </div>
                <div>
                  <a
                    href="https://ndpc.gov.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 text-primary font-semibold text-sm hover:bg-secondary hover:text-white transition-all"
                  >
                    View Our Listing on ndpc.gov.ng <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            </Section>
          </>
        )}
      </div>

      <CTASection
        title={serviceId === "academy" ? "Ready to Start Your Journey?" : serviceId === "data-protection" ? "Ready to Assess Your Compliance?" : "Have a Project in Mind?"}
        desc={
          serviceId === "academy"
            ? "Join over 500+ successful alumni and take the next step in your career today."
            : serviceId === "data-protection"
            ? "Book a Data Protection Consultation and let us help your organization meet its NDPC obligations."
            : "Let's discuss how NICEGENE can help you achieve your goals."
        }
        href={serviceId === "academy" ? "/cohort" : serviceId === "data-protection" ? "/contact" : "/contact"}
        label={serviceId === "academy" ? "Apply Now" : serviceId === "data-protection" ? "Book a Consultation" : "Get Started"}
      />
      <SpecsModal
        product={selectedProduct ? { name: selectedProduct.name, specs: selectedProduct.specs } : null}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
