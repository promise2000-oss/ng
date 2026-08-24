import type { Specs } from "@/components/SpecsModal";

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
import elitebook845Img from "@/assets/images/gadgets/EliteBook-845.jpg";

import type { StaticImageData } from "next/image";

export type GadgetCategory = {
  title: string;
  desc: string;
  img: StaticImageData;
};

export type GadgetProduct = {
  name: string;
  tag: string;
  img: StaticImageData;
  specs: Specs;
};

export const categories: GadgetCategory[] = [
  { title: "High-Performance Laptops", desc: "EliteBooks, Latitudes, ThinkPads", img: elitebook845Img },
  { title: "Professional Workstations", desc: "Z-Book series for creatives", img: zbookImg },
  { title: "Gaming Mastery", desc: "High refresh rates & RTX power", img: victus2Img },
  { title: "Ultimate Computing", desc: "Alienware & Omen configs", img: omenImg },
];

export const products: GadgetProduct[] = [
  { name: "Dell Alienware M18 R1", tag: "High-End Gaming Workstation", img: omenImg, specs: { processor: "Intel Core i9-13900HX", ram: "32GB DDR5", storage: "1TB NVMe SSD", display: '18" QHD+ 165Hz', graphics: "NVIDIA RTX 4080 12GB", os: "Windows 11 Pro" } },
  { name: "HP 15 Victus Gaming", tag: "Reliable Performance", img: victus2Img, specs: { processor: "Intel Core i5-13420H", ram: "8GB DDR4", storage: "512GB NVMe SSD", display: '15.6" FHD 144Hz', graphics: "NVIDIA RTX 3050 4GB", os: "Windows 11 Home" } },
  { name: "HP Z-Book 14 G7", tag: "Portable Powerhouse", img: zbookImg, specs: { processor: "Intel Core i7-10850H", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "NVIDIA Quadro T1000 4GB", os: "Windows 11 Pro" } },
  { name: "HP EliteBook 840 G8", tag: "Premium Enterprise Performer", img: elitebook840Img, specs: { processor: "Intel Core i7-1185G7", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "Intel Iris Xe", os: "Windows 11 Pro" } },
  { name: "HP Pavilion 15", tag: "Sleek Power & Entertainment", img: pavilion15Img, specs: { processor: "Intel Core i5-1235U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '15.6" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Home" } },
  { name: "Dell Latitude 7410", tag: "Business Class Ultrabook", img: latitude7410Img, specs: { processor: "Intel Core i7-10610U", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 7390", tag: "Premium Business Laptop", img: latitude7390Img, specs: { processor: "Intel Core i5-8350U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '13.3" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 7420", tag: "Enterprise Ultrabook", img: latitude7420Img, specs: { processor: "Intel Core i7-1185G7", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: '14" FHD IPS', graphics: "Intel Iris Xe", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 5310", tag: "Smart Workplace Solutions", img: latitude5310Img, specs: { processor: "Intel Core i5-10310U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '13.3" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
  { name: "Dell Latitude 5300", tag: "Affordable Business Essential", img: latitude5300Img, specs: { processor: "Intel Core i5-8265U", ram: "8GB DDR4", storage: "256GB NVMe SSD", display: '13.3" FHD IPS', graphics: "Intel UHD", os: "Windows 11 Pro" } },
];
