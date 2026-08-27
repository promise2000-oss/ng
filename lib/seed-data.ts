import type { StaticImageData } from "next/image";
import awsLogo from "@/assets/images/services/AWS Cloud.png";
import aircomLogo from "@/assets/images/clients/Aircom Limited.png";
import cloudServicesLogo from "@/assets/images/services/Cloud_Services.png";
import brandLogo1 from "@/assets/images/clients/brand1.jpg";
import brandLogo2 from "@/assets/images/clients/brand2.jpg";
import brandLogo3 from "@/assets/images/clients/brand3.jpg";
import brandLogo4 from "@/assets/images/clients/brand4.jpg";
import brandLogo5 from "@/assets/images/clients/brand5.jpg";
import brandLogo6 from "@/assets/images/clients/brand6.jpg";
import profilePartnerLogo from "@/assets/images/clients/profile partners logo.png";
import launchPhoto from "@/assets/images/events/NICEGENE GRAND LAUNCH.jpg";
import academyPhoto from "@/assets/images/services/NICEGENE DIGITAL ACADEMY.jpg";
import monthPhoto from "@/assets/images/events/nicegene_month.jpg";
import dronePhoto from "@/assets/images/services/drone.jpg";
import teamWorking from "@/assets/images/services/teamwork-values.jpg";

export type ImageSource = StaticImageData | string | null;

// ---------------------------------------------------------------------------
// Site configuration
// ---------------------------------------------------------------------------

export type SiteConfig = {
  academyOpen: boolean;
  birthdayHighlightEnabled: boolean;
  examFullscreenEnforced: boolean;
  examAutoSaveSeconds: number;
  examPassMark: number;
  announcementIntervalMs: number;
};

export const defaultSiteConfig: SiteConfig = {
  academyOpen: true,
  birthdayHighlightEnabled: true,
  examFullscreenEnforced: true,
  examAutoSaveSeconds: 30,
  examPassMark: 50,
  announcementIntervalMs: 9000,
};

// ---------------------------------------------------------------------------
// Announcements (homepage scrolling bar)
// ---------------------------------------------------------------------------

export type Announcement = {
  id: string;
  text: string;
  type: "academy" | "news" | "event";
};

export const seedAnnouncements: Announcement[] = [
  {
    id: "ann-1",
    text: "Academy admissions are open for the new cohort — register online today and secure your seat.",
    type: "academy",
  },
  {
    id: "ann-2",
    text: "NICEGENE Tech Insight Series returns — themed on cloud computing careers in Africa. Watch this space.",
    type: "event",
  },
  {
    id: "ann-3",
    text: "Our flagship platform for the Lagos Archdiocesan Education Commission continues to serve 10,000+ users with zero downtime.",
    type: "news",
  },
  {
    id: "ann-4",
    text: "Certificates can now be verified instantly — scan any certificate QR code or visit our verification portal.",
    type: "news",
  },
];

// ---------------------------------------------------------------------------
// Partners (PRD 3.1)
// ---------------------------------------------------------------------------

export type PartnerType = "Technology" | "Academic" | "Business" | "Community";

export type Partner = {
  id: string;
  name: string;
  logo: ImageSource;
  initials: string;
  type: PartnerType;
  website: string;
  description: string;
  oneLiner: string;
  dateJoined: string;
  featured: boolean;
};

export const seedPartners: Partner[] = [
  {
    id: "p-aws",
    name: "Amazon Web Services",
    logo: awsLogo,
    initials: "AWS",
    type: "Technology",
    website: "https://aws.amazon.com",
    description:
      "NICEGENE builds exclusively on AWS — cloud-native, serverless architectures that power secure, scalable platforms for schools and institutions across Nigeria, including our flagship LAEC examination platform.",
    oneLiner: "Our primary cloud platform — enterprise-grade infrastructure and serverless services.",
    dateJoined: "2025-03-01",
    featured: true,
  },
  {
    id: "p-aircom",
    name: "Aircom Limited",
    logo: aircomLogo,
    initials: "AC",
    type: "Technology",
    website: "https://aircomlimited.com",
    description:
      "A trusted technology distribution partner supporting our hardware and networking projects with enterprise-grade equipment and expertise.",
    oneLiner: "Hardware distribution and networking equipment partner.",
    dateJoined: "2025-06-01",
    featured: true,
  },
  {
    id: "p-cloud-services",
    name: "Cloud Services Group",
    logo: cloudServicesLogo,
    initials: "CS",
    type: "Technology",
    website: "https://example.com/cloud-services",
    description:
      "Collaboration partner for cloud enablement, managed services, and digital infrastructure delivery across institutional projects.",
    oneLiner: "Cloud enablement and managed services alliance.",
    dateJoined: "2025-08-15",
    featured: false,
  },
  {
    id: "p-vidline",
    name: "Vidline",
    logo: profilePartnerLogo,
    initials: "VL",
    type: "Technology",
    website: "https://vidline.io",
    description:
      "Our virtual training platform. NICEGENE Academy live classes and the Tech Insight Series are delivered on Vidline's industry-standard virtual classroom.",
    oneLiner: "Virtual training platform powering NICEGENE Academy classes.",
    dateJoined: "2026-01-10",
    featured: true,
  },
  {
    id: "p-google",
    name: "Google Workspace",
    logo: brandLogo1,
    initials: "GW",
    type: "Technology",
    website: "https://workspace.google.com",
    description:
      "We communicate and collaborate with clients through Google Workspace, keeping engagements transparent and productive.",
    oneLiner: "Collaboration and communication infrastructure partner.",
    dateJoined: "2025-02-01",
    featured: false,
  },
  {
    id: "p-microsoft",
    name: "Microsoft",
    logo: brandLogo2,
    initials: "MS",
    type: "Technology",
    website: "https://www.microsoft.com",
    description:
      "Enterprise collaboration and productivity ally — from Microsoft Teams to the office and development tools we deploy for clients.",
    oneLiner: "Enterprise productivity and collaboration partner.",
    dateJoined: "2025-02-01",
    featured: false,
  },
  {
    id: "p-esut",
    name: "ESUT JAMB Centre",
    logo: brandLogo3,
    initials: "ES",
    type: "Academic",
    website: "https://www.esut.edu.ng",
    description:
      "Academic partner for professional certification and skills development programmes benefiting students and graduates.",
    oneLiner: "Academic partner for certification and skills programmes.",
    dateJoined: "2025-09-01",
    featured: false,
  },
  {
    id: "p-laec",
    name: "Lagos Archdiocesan Education Commission",
    logo: brandLogo4,
    initials: "LA",
    type: "Academic",
    website: "https://www.laaec.com",
    description:
      "Flagship institutional partner — we designed, built, and operate the cloud-native CBT and school management platform serving 10+ schools and 10,000+ users.",
    oneLiner: "Flagship institutional partner behind our LAEC platform.",
    dateJoined: "2024-11-01",
    featured: true,
  },
  {
    id: "p-stfinbarrs",
    name: "St. Finbarr's College",
    logo: brandLogo5,
    initials: "SF",
    type: "Academic",
    website: "https://www.saintfinbarrscollege.com",
    description:
      "School partner running NICEGENE DailyApp — our complete school ERP platform for daily administration and learning management.",
    oneLiner: "School partner running the NICEGENE DailyApp ERP.",
    dateJoined: "2025-05-01",
    featured: false,
  },
  {
    id: "p-ola",
    name: "OLA Secondary School",
    logo: brandLogo6,
    initials: "OL",
    type: "Academic",
    website: "https://www.olassyaba.org",
    description:
      "School partner enjoying full LAN infrastructure, an interactive web application, and the ongoing rollout of NICEGENE DailyApp.",
    oneLiner: "School partner for networking, web, and ERP delivery.",
    dateJoined: "2025-05-01",
    featured: false,
  },
  {
    id: "p-fortis",
    name: "Fortis Legal LP",
    logo: brandLogo2,
    initials: "FL",
    type: "Business",
    website: "https://www.fortislegal.com.ng",
    description:
      "Business partner and client — we designed and developed a modern, interactive corporate web application for one of Nigeria's leading legal practices.",
    oneLiner: "Corporate web application delivery partner.",
    dateJoined: "2025-10-01",
    featured: false,
  },
  {
    id: "p-community-tech",
    name: "Lagos Tech Community",
    logo: brandLogo4,
    initials: "LC",
    type: "Community",
    website: "https://example.com/lagos-tech-community",
    description:
      "Community partner organising developer meetups, mentorship circles, and knowledge-sharing events with the Nigerian tech ecosystem.",
    oneLiner: "Community partner for meetups and mentorship.",
    dateJoined: "2026-03-15",
    featured: false,
  },
];

export type PartnerApplication = {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  type: PartnerType;
  message: string;
  date: string;
};

// ---------------------------------------------------------------------------
// Clients (PRD 3.2)
// ---------------------------------------------------------------------------

export type Client = {
  id: string;
  name: string;
  logo: ImageSource;
  initials: string;
  sector: string;
  service: string;
  year: string;
  caseStudy?: string;
  featured: boolean;
  visible: boolean;
};

export const clientSectors = ["Education", "Healthcare", "Retail", "Government", "Legal", "Media"];

export const seedClients: Client[] = [
  {
    id: "c-laec",
    name: "Lagos Archdiocesan Education Commission",
    logo: null,
    initials: "LA",
    sector: "Education",
    service: "Cloud System Development",
    year: "2024",
    caseStudy:
      "Designed and deployed a cloud-native, multi-tenant serverless CBT and school management platform. It now supports over 10 schools and 10,000 students, teachers, and administrative staff with zero service downtime since launch.",
    featured: true,
    visible: true,
  },
  {
    id: "c-stfinbarrs",
    name: "St. Finbarr's College, Yaba",
    logo: null,
    initials: "SF",
    sector: "Education",
    service: "Web & App Development",
    year: "2025",
    caseStudy:
      "Deployed NICEGENE DailyApp, our complete school ERP platform for student records, fees, and daily school administration — giving the college a single digital backbone.",
    featured: true,
    visible: true,
  },
  {
    id: "c-ola",
    name: "Our Lady of Apostles Secondary School",
    logo: null,
    initials: "OL",
    sector: "Education",
    service: "System Networking & Infrastructure",
    year: "2025",
    caseStudy:
      "Delivered complete LAN and system networking infrastructure, a modern interactive school web application, and the ongoing deployment of the NICEGENE DailyApp ERP system.",
    featured: true,
    visible: true,
  },
  {
    id: "c-stgregorys",
    name: "St. Gregory's College, Ikoyi",
    logo: null,
    initials: "SG",
    sector: "Education",
    service: "Web & App Development",
    year: "2026",
    caseStudy:
      "Ongoing design and implementation of the NICEGENE DailyApp School ERP Management Platform to digitise the college's administration.",
    featured: true,
    visible: true,
  },
  {
    id: "c-fortis",
    name: "Fortis Legal LP",
    logo: null,
    initials: "FL",
    sector: "Legal",
    service: "Web & App Development",
    year: "2025",
    caseStudy:
      "Designed and developed a modern, interactive corporate web application that reflects the firm's premium positioning and drives client enquiries.",
    featured: false,
    visible: true,
  },
  {
    id: "c-retailmart",
    name: "RetailMart Superstores",
    logo: null,
    initials: "RM",
    sector: "Retail",
    service: "POS & Inventory Management",
    year: "2025",
    caseStudy:
      "Installed POS hardware and rolled out cloud-based stock tracking and sales reporting, eliminating inventory losses and shortening checkout times across branches.",
    featured: true,
    visible: true,
  },
  {
    id: "c-healthplus",
    name: "HealthPlus Clinic Group",
    logo: null,
    initials: "HP",
    sector: "Healthcare",
    service: "Digitization & Records Management",
    year: "2025",
    caseStudy:
      "Converted paper-based patient records into a structured, searchable digital records system, reducing lookup times and improving data integrity.",
    featured: false,
    visible: true,
  },
  {
    id: "c-publicworks",
    name: "State Public Works Agency",
    logo: null,
    initials: "PW",
    sector: "Government",
    service: "Cloud Migration & Networking",
    year: "2024",
    caseStudy:
      "Migrated legacy file servers to a secure AWS architecture and rebuilt the agency's office network for reliability and access control.",
    featured: false,
    visible: true,
  },
  {
    id: "c-mediacoop",
    name: "MediaCoop Studios",
    logo: null,
    initials: "MC",
    sector: "Media",
    service: "Graphic Design & Video Editing",
    year: "2026",
    caseStudy:
      "Produced brand identity, corporate assets, and high-definition video marketing collateral for the studio's product launches.",
    featured: false,
    visible: true,
  },
  {
    id: "c-agridrone",
    name: "AgriScope Farms",
    logo: null,
    initials: "AS",
    sector: "Retail",
    service: "Drone Services",
    year: "2026",
    caseStudy:
      "Aerial mapping and crop health surveys across farmlands, delivering precise analytics that improved field-level decision making.",
    featured: false,
    visible: true,
  },
];

// ---------------------------------------------------------------------------
// Testimonials (PRD 3.4)
// ---------------------------------------------------------------------------

export type Testimonial = {
  id: string;
  name: string;
  organization: string;
  initials: string;
  position?: string;
  email: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  videoUrl?: string;
  photo?: string;
  consent: boolean;
  featured: boolean;
  status: "approved" | "pending" | "rejected";
};

export const testimonialServices = [
  "Cloud",
  "Networking",
  "Academy",
  "POS",
  "Web Development",
  "Consulting",
  "Digitization",
  "Drone Services",
  "Graphic Design",
];

export const seedTestimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Fr. Michael Adewale",
    organization: "Lagos Archdiocesan Education Commission",
    initials: "MA",
    position: "Secretary, Education Commission",
    email: "michael.adewale@laec.org.ng",
    rating: 5,
    text: "NICEGENE built our national examination platform on a serverless architecture that has served over 10,000 students with zero downtime. Their engineering discipline and communication are simply exemplary.",
    service: "Cloud",
    date: "2026-02-10",
    consent: true,
    featured: true,
    status: "approved",
  },
  {
    id: "t-2",
    name: "Mrs. Olufunke Adeyemi",
    organization: "St. Finbarr's College, Yaba",
    initials: "OA",
    position: "Principal",
    email: "o.adeyemi@stfinbarrs.edu.ng",
    rating: 5,
    text: "The DailyApp ERP has transformed how we manage records and fees. NICEGENE trained our staff patiently and supported us through every stage of the rollout.",
    service: "Web Development",
    date: "2025-11-18",
    consent: true,
    featured: true,
    status: "approved",
  },
  {
    id: "t-3",
    name: "Mr. Tunde Bakare",
    organization: "RetailMart Superstores",
    initials: "TB",
    position: "Operations Manager",
    email: "tunde.bakare@retailmart.ng",
    rating: 5,
    text: "Our POS and inventory system went from chaos to complete clarity. Stock losses stopped, and our sales reports are now real-time. Highly recommended for any retailer.",
    service: "POS",
    date: "2025-09-02",
    consent: true,
    featured: true,
    status: "approved",
  },
  {
    id: "t-4",
    name: "Dr. Chinelo Eze",
    organization: "HealthPlus Clinic Group",
    initials: "CE",
    position: "Head of Medical Records",
    email: "chinelo.eze@healthplus.ng",
    rating: 4,
    text: "Digitising our patient records was a huge project, and NICEGENE handled it with sensitivity and precision. Our clinicians now find records in seconds.",
    service: "Digitization",
    date: "2025-07-22",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-5",
    name: "Chiamaka Osei",
    organization: "NICEGENE Academy Alumna",
    initials: "CO",
    position: "Cloud Engineer",
    email: "chiamaka.osei@gmail.com",
    rating: 5,
    text: "The Cloud Computing track at NICEGENE Academy gave me real AWS skills and a certificate that employers actually recognise. I now work as a cloud engineer.",
    service: "Academy",
    date: "2026-05-14",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    consent: true,
    featured: true,
    status: "approved",
  },
  {
    id: "t-6",
    name: "Emeka Nwankwo",
    organization: "MediaCoop Studios",
    initials: "EN",
    position: "Creative Director",
    email: "emeka.nwankwo@mediacoop.ng",
    rating: 5,
    text: "The brand identity and video collateral NICEGENE produced elevated our studio's public image beyond expectation. Creative, fast, and professional.",
    service: "Graphic Design",
    date: "2026-03-30",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-7",
    name: "Barr. Hannah Ogunleye",
    organization: "Fortis Legal LP",
    initials: "HO",
    position: "Managing Partner",
    email: "hannah.ogunleye@fortislegal.com.ng",
    rating: 5,
    text: "Our new corporate website looks world-class and is effortless to manage. The NICEGENE team understood exactly what a premium legal brand needs.",
    service: "Web Development",
    date: "2025-12-05",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-8",
    name: "Mr. Adebayo Salami",
    organization: "OLA Secondary School",
    initials: "AS",
    position: "ICT Coordinator",
    email: "adebayo.salami@olasecondary.edu.ng",
    rating: 5,
    text: "From the LAN setup to our school web application, everything NICEGENE installed just works. Their engineers explain everything and are always reachable.",
    service: "Networking",
    date: "2026-01-19",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-9",
    name: "Miss Zainab Musa",
    organization: "Data Analytics Alumna",
    initials: "ZM",
    position: "Business Intelligence Analyst",
    email: "zainab.musa@gmail.com",
    rating: 4,
    text: "Power BI, SQL, and storytelling with data — the Academy's Data Analytics track was hands-on from week one. The small cohort meant real attention.",
    service: "Academy",
    date: "2026-04-08",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-10",
    name: "Engr. Peter Adekunle",
    organization: "AgriScope Farms",
    initials: "PA",
    position: "Farm Manager",
    email: "peter.adekunle@agriscope.ng",
    rating: 5,
    text: "The drone mapping surveys gave us field-level accuracy we never had before. NICEGENE flew, analysed, and delivered a complete report. Outstanding value.",
    service: "Drone Services",
    date: "2026-06-02",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-11",
    name: "Mrs. Glory Ekwueme",
    organization: "Bamboo Foods Ltd",
    initials: "GE",
    position: "Chief Operations Officer",
    email: "glory.ekwueme@bamboofoods.ng",
    rating: 5,
    text: "NICEGENE's consulting engagement mapped every manual process in our operations and rebuilt them as digital workflows. We cut processing time by half.",
    service: "Consulting",
    date: "2026-02-25",
    consent: true,
    featured: false,
    status: "approved",
  },
  {
    id: "t-12",
    name: "Mr. Ibrahim Danladi",
    organization: "State Public Works Agency",
    initials: "ID",
    position: "Director of ICT",
    email: "ibrahim.danladi@spwa.gov.ng",
    rating: 4,
    text: "The migration to a secure cloud architecture was seamless with no downtime for our services. A partner we can trust with government-grade work.",
    service: "Cloud",
    date: "2025-08-11",
    consent: true,
    featured: false,
    status: "approved",
  },
];

// ---------------------------------------------------------------------------
// Events (PRD 3.5)
// ---------------------------------------------------------------------------

export type EventCategory =
  | "Company Launch"
  | "Training Graduation"
  | "Workshop"
  | "Webinar"
  | "Community Outreach"
  | "Speaking Engagement";

export type CompanyEvent = {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  description: string;
  photos: ImageSource[];
  recap?: string;
  registrationUrl?: string;
};

function daysFromNow(days: number, hour = 10, minute = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

export const eventCategories: EventCategory[] = [
  "Company Launch",
  "Training Graduation",
  "Workshop",
  "Webinar",
  "Community Outreach",
  "Speaking Engagement",
];

export const seedEvents: CompanyEvent[] = [
  {
    id: "ev-1",
    title: "Tech Insight Series — Cloud Careers in Africa",
    category: "Webinar",
    date: daysFromNow(9, 16, 0),
    time: "16:00 WAT",
    location: "Live on Vidline (Online)",
    description:
      "A free webinar exploring cloud engineering careers, AWS certification paths, and how to land your first cloud role. Open to students, graduates, and professionals.",
    photos: [],
    registrationUrl: "/events",
  },
  {
    id: "ev-2",
    title: "AWS Cloud Bootcamp — Hands-On Workshop",
    category: "Workshop",
    date: daysFromNow(21, 9, 0),
    time: "09:00 WAT",
    location: "NICEGENE Academy, Lekki-Ajah, Lagos",
    description:
      "A practical day of EC2, Linux, and serverless deployment on AWS guided by our cloud engineers. Bring your laptop.",
    photos: [],
    registrationUrl: "/events",
  },
  {
    id: "ev-3",
    title: "Academy Cohort Graduation Ceremony",
    category: "Training Graduation",
    date: daysFromNow(34, 11, 0),
    time: "11:00 WAT",
    location: "Lekki Gardens Estate Phase 3, Lagos",
    description:
      "Celebrating our graduating cohort — certificates will be presented and employers are invited to meet the new talent pipeline.",
    photos: [],
    registrationUrl: "/events",
  },
  {
    id: "ev-4",
    title: "Digital Literacy Outreach for Schools",
    category: "Community Outreach",
    date: daysFromNow(45, 10, 0),
    time: "10:00 WAT",
    location: "Yaba, Lagos",
    description:
      "Bringing free digital literacy sessions and tech career talks to secondary school students, as part of our community commitment.",
    photos: [],
    registrationUrl: "/events",
  },
  {
    id: "ev-5",
    title: "NICEGENE Technologies Grand Launch",
    category: "Company Launch",
    date: daysFromNow(-210, 12, 0),
    time: "12:00 WAT",
    location: "Lekki-Ajah, Lagos",
    description:
      "The official launch of NICEGENE Technologies — unveiling our vision, services, and the NICEGENE Digital Academy to partners and the public.",
    photos: [launchPhoto, teamWorking, monthPhoto],
    recap:
      "An inspiring launch attended by partners, educators, and tech enthusiasts. The NICEGENE Digital Academy and our flagship service lines were unveiled to a packed hall.",
    registrationUrl: "/events",
  },
  {
    id: "ev-6",
    title: "Tech Insight Series — Data Protection Law & Practices",
    category: "Webinar",
    date: daysFromNow(-120, 16, 0),
    time: "16:00 WAT",
    location: "Live on Vidline (Online)",
    description:
      "The maiden edition of our quarterly professional training series, themed \"Data Protection Law & Practices\".",
    photos: [academyPhoto, monthPhoto],
    recap:
      "The maiden edition attracted 158 registered participants from 23 states and the FCT — 81 male (51.3%) and 77 female (48.7%) — spanning students, lawyers, analysts, developers, and business owners. Participants received Certificates of Participation after the post-session evaluation.",
    registrationUrl: "/events",
  },
  {
    id: "ev-7",
    title: "First Academy Cohort — Web Development Graduation",
    category: "Training Graduation",
    date: daysFromNow(-95, 14, 0),
    time: "14:00 WAT",
    location: "NICEGENE Academy, Lekki-Ajah, Lagos",
    description:
      "Presentation of certificates to our pioneering Web Development and Cloud Computing graduates.",
    photos: [academyPhoto, teamWorking],
    recap:
      "Our very first cohort of Academy graduates received their certificates after weeks of hands-on, project-driven training.",
    registrationUrl: "/events",
  },
  {
    id: "ev-8",
    title: "Speaking Engagement — Future of EdTech in Nigeria",
    category: "Speaking Engagement",
    date: daysFromNow(-75, 10, 0),
    time: "10:00 WAT",
    location: "Lagos Business School",
    description:
      "Our CEO spoke on building cloud-native platforms for Nigerian education at the Lagos EdTech conference.",
    photos: [teamWorking],
    recap:
      "A well-received session sharing lessons from building the LAEC platform — from multi-tenancy to zero-downtime operations.",
    registrationUrl: "/events",
  },
  {
    id: "ev-9",
    title: "Drone Services Field Demo",
    category: "Workshop",
    date: daysFromNow(-45, 9, 0),
    time: "09:00 WAT",
    location: "AgriScope Farms, Ogun State",
    description:
      "A live demonstration of aerial mapping and industrial inspection services for agriculture clients.",
    photos: [dronePhoto],
    recap: "Live field mapping demo for farm operators — showcasing precision agriculture with drones.",
    registrationUrl: "/events",
  },
];

export type EventRsvp = {
  id: string;
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone: string;
  date: string;
};

// ---------------------------------------------------------------------------
// Team birthdays (PRD 3.6) — month only, never full dates publicly
// ---------------------------------------------------------------------------

export type TeamMember = {
  id: string;
  name: string;
  firstName: string;
  role: string;
  bio: string;
  birthMonth: number;
  initials: string;
};

export const seedTeamBirthdays: TeamMember[] = [
  {
    id: "tm-eugene",
    name: "Eugene O. Orji",
    firstName: "Eugene",
    role: "Chief Executive Officer",
    bio: "Cloud Engineer and Project Management professional with expertise in cloud computing, digital transformation, and scalable technology solutions.",
    birthMonth: 8,
    initials: "EO",
  },
  {
    id: "tm-ikenna",
    name: "Ikenna Okpalaeze",
    firstName: "Ikenna",
    role: "Head of Legal",
    bio: "In-house legal counsel specialised in technology law, corporate compliance, and practical legal solutions for business growth.",
    birthMonth: 10,
    initials: "IO",
  },
  {
    id: "tm-rita",
    name: "Ezeme Rita C.",
    firstName: "Rita",
    role: "Finance Team",
    bio: "Finance professional supporting sound financial management through analytical thinking, accuracy, and effective financial practices.",
    birthMonth: 3,
    initials: "ER",
  },
  {
    id: "tm-victor",
    name: "Victor James",
    firstName: "Victor",
    role: "Program Coordinator",
    bio: "Public health and AI professional focused on digital innovation, automation, and technology-driven solutions for sustainable impact.",
    birthMonth: 5,
    initials: "VJ",
  },
  {
    id: "tm-nnaemeka",
    name: "Nnaemeka E. Ezenwa-Okoro",
    firstName: "Nnaemeka",
    role: "Media & Publicity Lead",
    bio: "Brand and visual communication specialist with expertise in content strategy, digital media, and audience engagement.",
    birthMonth: 7,
    initials: "NE",
  },
  {
    id: "tm-marcelina",
    name: "Marcelina Idoko",
    firstName: "Marcelina",
    role: "Technical Team Lead",
    bio: "Software engineer specialised in backend development, mobile applications, blockchain technologies, and scalable software solutions.",
    birthMonth: 9,
    initials: "MI",
  },
  {
    id: "tm-nnenna",
    name: "Egwu Nnenna",
    firstName: "Nnenna",
    role: "Marketing & Sales Lead",
    bio: "Digital marketer and public health professional dedicated to audience engagement, brand growth, and practical digital marketing solutions.",
    birthMonth: 11,
    initials: "EN",
  },
];

// ---------------------------------------------------------------------------
// Academy courses, cohorts, and registration (PRD 4.1)
// ---------------------------------------------------------------------------

export type LearningMode = "Online" | "Physical" | "Hybrid";

export type Cohort = {
  id: string;
  courseTitle: string;
  name: string;
  startDate: string;
  classDays: string;
  classTime: string;
  examDate: string;
  examWindow: string;
  spots: number;
};

export const currentCohortName = "August 2026 Cohort";

export const seedCohorts: Cohort[] = [
  {
    id: "ch-1",
    courseTitle: "Cloud Computing",
    name: currentCohortName,
    startDate: "2026-08-24",
    classDays: "Mondays & Wednesdays",
    classTime: "17:00 – 19:00 WAT",
    examDate: "2026-11-16",
    examWindow: "09:00 – 11:00 WAT",
    spots: 25,
  },
  {
    id: "ch-2",
    courseTitle: "Front-end Web Development",
    name: currentCohortName,
    startDate: "2026-08-25",
    classDays: "Tuesdays & Thursdays",
    classTime: "17:00 – 19:00 WAT",
    examDate: "2026-11-17",
    examWindow: "09:00 – 11:00 WAT",
    spots: 25,
  },
  {
    id: "ch-3",
    courseTitle: "Data Analytics",
    name: currentCohortName,
    startDate: "2026-08-26",
    classDays: "Saturdays",
    classTime: "10:00 – 14:00 WAT",
    examDate: "2026-11-14",
    examWindow: "10:00 – 12:00 WAT",
    spots: 30,
  },
];

export type CourseDetail = {
  title: string;
  slug: string;
  track: string;
  fee: string;
  duration: string;
  status: string;
  outcomes: string[];
  curriculum: { module: string; topics: string[] }[];
  tutor: string;
  tutorRole: string;
  certificateAwarded: string;
  alumniTestimonials: string[];
  cohorts: string[];
};

export const seedCourseDetails: CourseDetail[] = [
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    track: "Cloud Track",
    fee: "₦215,000",
    duration: "12 Weeks",
    status: "On Going",
    outcomes: [
      "Design and deploy secure architectures on AWS EC2, S3, and serverless services",
      "Administer Linux servers and manage cloud infrastructure with confidence",
      "Migrate legacy workloads to the cloud with minimal disruption",
      "Implement identity, monitoring, and cost-control best practices",
    ],
    curriculum: [
      { module: "Cloud Foundations", topics: ["Cloud concepts and models", "AWS global infrastructure", "Identity & Access Management"] },
      { module: "Compute & Storage", topics: ["EC2 and instance lifecycle", "S3 storage classes and lifecycle", "EBS and snapshots"] },
      { module: "Networking & Security", topics: ["VPC design and subnets", "Security groups and NACLs", "Route 53 and CloudFront"] },
      { module: "Serverless & DevOps", topics: ["Lambda and API Gateway", "Infrastructure as code (CloudFormation)", "CI/CD on AWS"] },
      { module: "Capstone Project", topics: ["Design a production-grade cloud architecture", "Deployment and documentation"] },
    ],
    tutor: "Marcelina Idoko",
    tutorRole: "Technical Team Lead, NICEGENE Technologies",
    certificateAwarded: "Certificate of Completion (NICEGENE Digital Academy) — verifiable via QR code",
    alumniTestimonials: [
      "The Cloud Computing track gave me real AWS skills and a certificate that employers actually recognise. I now work as a cloud engineer.",
      "Hands-on from week one — I deployed my first serverless application before mid-course.",
    ],
    cohorts: [currentCohortName],
  },
  {
    title: "Front-end Web Development",
    slug: "front-end-web-development",
    track: "Web Dev Track",
    fee: "₦120,000",
    duration: "12 Weeks",
    status: "On Going",
    outcomes: [
      "Build responsive interfaces with HTML5, CSS3, and JavaScript",
      "Develop interactive applications with React and modern tooling",
      "Consume APIs and deploy secure web applications to the cloud",
    ],
    curriculum: [
      { module: "Web Foundations", topics: ["HTML5 semantics", "CSS3 layout and Flexbox/Grid", "Responsive design"] },
      { module: "JavaScript Core", topics: ["ES6+ syntax", "DOM manipulation", "Async patterns and fetch"] },
      { module: "React", topics: ["Components and props", "State and hooks", "Routing and forms"] },
      { module: "Deployment", topics: ["Git and GitHub", "Build and deploy to the cloud", "Performance basics"] },
    ],
    tutor: "Nnaemeka E. Ezenwa-Okoro",
    tutorRole: "Media & Publicity Lead, NICEGENE Technologies",
    certificateAwarded: "Certificate of Completion (NICEGENE Digital Academy) — verifiable via QR code",
    alumniTestimonials: [
      "Practical sessions on building and deploying secure web applications to the cloud — exactly what employers want.",
    ],
    cohorts: [currentCohortName],
  },
  {
    title: "Data Analytics",
    slug: "data-analytics",
    track: "Data Track",
    fee: "₦180,000",
    duration: "12 Weeks",
    status: "On Going",
    outcomes: [
      "Query and model data with SQL",
      "Build interactive dashboards and reports in Power BI",
      "Translate raw data into business intelligence stories",
    ],
    curriculum: [
      { module: "Data Foundations", topics: ["Data types and cleaning", "Excel for analysts", "Statistics essentials"] },
      { module: "SQL", topics: ["Selects, joins, and aggregations", "Window functions", "Data modeling"] },
      { module: "Power BI", topics: ["Data transformation (Power Query)", "DAX measures", "Dashboard design"] },
      { module: "Capstone Project", topics: ["End-to-end analytics project", "Presentation and storytelling"] },
    ],
    tutor: "Egwu Nnenna",
    tutorRole: "Marketing & Sales Lead, NICEGENE Technologies",
    certificateAwarded: "Certificate of Completion (NICEGENE Digital Academy) — verifiable via QR code",
    alumniTestimonials: [
      "Power BI, SQL, and storytelling with data — hands-on from week one. The small cohort meant real attention.",
    ],
    cohorts: [currentCohortName],
  },
];

// ---------------------------------------------------------------------------
// Certificates (PRD 4.3)
// ---------------------------------------------------------------------------

export type Certificate = {
  id: string;
  studentName: string;
  course: string;
  completionDate: string;
  grade?: string;
  gradeConsented: boolean;
  status: "valid" | "revoked";
};

export const seedCertificates: Certificate[] = [
  {
    id: "NDA-2026-CLD-0047",
    studentName: "Marcel Nwosu",
    course: "Cloud Computing",
    completionDate: "2026-07-30",
    grade: "Distinction",
    gradeConsented: true,
    status: "valid",
  },
  {
    id: "NDA-2026-WEB-0123",
    studentName: "Aisha Bello",
    course: "Front-end Web Development",
    completionDate: "2026-07-28",
    grade: "Merit",
    gradeConsented: true,
    status: "valid",
  },
  {
    id: "NDA-2026-DAT-0021",
    studentName: "Tunde Adeyemi",
    course: "Data Analytics",
    completionDate: "2026-06-15",
    grade: "Pass",
    gradeConsented: false,
    status: "valid",
  },
  {
    id: "NDA-2026-CLD-0051",
    studentName: "Emmanuel Okafor",
    course: "Cloud Computing",
    completionDate: "2026-08-08",
    grade: "Distinction",
    gradeConsented: true,
    status: "valid",
  },
  {
    id: "NDA-2025-REV-0009",
    studentName: "Somebody Else",
    course: "Networking Fundamentals",
    completionDate: "2025-11-02",
    gradeConsented: false,
    status: "revoked",
  },
];

// ---------------------------------------------------------------------------
// Students & registrations (PRD 4.1)
// ---------------------------------------------------------------------------

export type PaymentRecord = {
  id: string;
  amount: string;
  method: string;
  date: string;
  status: "confirmed" | "pending";
  receiptNo: string;
};

export type StudentNotification = {
  id: string;
  title: string;
  body: string;
  date: string;
  read: boolean;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  applicationId: string;
  course: string;
  cohort: string;
  mode: LearningMode;
  status: "active" | "inactive" | "pending-payment";
  payments: PaymentRecord[];
  assignments: { title: string; due: string; score?: string }[];
  examSchedule: string;
  examDone: boolean;
  examScore?: number;
  examReleased: boolean;
  certificateId?: string;
  notifications: StudentNotification[];
  dateOfBirth: string;
  gender: string;
  nationality: string;
  stateOfOrigin: string;
  address: string;
  qualification: string;
  occupation: string;
  heardAboutUs: string;
  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhone: string;
};

export const demoStudentId = "stu-demo-1";

export const seedStudents: Student[] = [
  {
    id: demoStudentId,
    name: "Emmanuel Okafor",
    email: "student@nicegene.com",
    phone: "+234 803 123 4567",
    whatsapp: "+234 803 123 4567",
    applicationId: "NDA-APP-2026-1042",
    course: "Cloud Computing",
    cohort: currentCohortName,
    mode: "Hybrid",
    status: "active",
    payments: [
      {
        id: "pay-1",
        amount: "₦215,000",
        method: "Bank transfer — Providus Bank",
        date: "2026-07-15",
        status: "confirmed",
        receiptNo: "RCPT-2026-331",
      },
    ],
    assignments: [
      { title: "AWS IAM & Security Best Practices", due: "2026-09-12", score: "88%" },
      { title: "VPC Design Exercise", due: "2026-09-26", score: "92%" },
      { title: "Serverless Application Build", due: "2026-10-10" },
    ],
    examSchedule: "2026-11-16",
    examDone: true,
    examScore: 78,
    examReleased: true,
    certificateId: "NDA-2026-CLD-0051",
    notifications: [
      {
        id: "ntf-1",
        title: "Final exam scheduled",
        body: "Your Cloud Computing final exam is scheduled for 16 November 2026 (09:00 – 11:00 WAT). The exam link will be sent to your email 24 hours before.",
        date: "2026-11-01",
        read: false,
      },
      {
        id: "ntf-2",
        title: "Certificate issued",
        body: "Congratulations! Your certificate (NDA-2026-CLD-0051) has been issued. You can download it from your student portal and verify it at any time.",
        date: "2026-08-08",
        read: true,
      },
      {
        id: "ntf-3",
        title: "Assignment graded",
        body: "Your VPC Design Exercise scored 92%. Great work!",
        date: "2026-09-28",
        read: true,
      },
    ],
    dateOfBirth: "1999-03-14",
    gender: "Male",
    nationality: "Nigerian",
    stateOfOrigin: "Anambra",
    address: "14 Marine Road, Apapa, Lagos",
    qualification: "B.Sc. Computer Science",
    occupation: "Graduate",
    heardAboutUs: "Social media",
    emergencyName: "Mrs. Ngozi Okafor",
    emergencyRelationship: "Mother",
    emergencyPhone: "+234 805 987 6543",
  },
];

export type Registration = Student & { reviewed: boolean };

// ---------------------------------------------------------------------------
// Referrals (PRD 3.3)
// ---------------------------------------------------------------------------

export type ReferralStatus =
  | "Submitted"
  | "Contacted"
  | "Proposal Sent"
  | "Converted"
  | "Commission Due";

export const referralFlow: ReferralStatus[] = [
  "Submitted",
  "Contacted",
  "Proposal Sent",
  "Converted",
  "Commission Due",
];

export type Referral = {
  id: string;
  trackingId: string;
  referrerName: string;
  referrerContact: string;
  relationship: string;
  refereeName: string;
  refereeContact: string;
  refereeCompany: string;
  service: string;
  status: ReferralStatus;
  dateSubmitted: string;
  statusHistory: { status: ReferralStatus; date: string; note: string }[];
  commission: number;
};

export const demoReferrerId = "ref-demo-1";

export const seedReferrals: Referral[] = [
  {
    id: demoReferrerId + "-r1",
    trackingId: "NDR-2026-0137",
    referrerName: "Chinedu Eze",
    referrerContact: "referrer@nicegene.com",
    relationship: "Business acquaintance",
    refereeName: "Hope Academy Schools",
    refereeContact: "info@hopeacademy.ng",
    refereeCompany: "Hope Academy Schools",
    service: "Web & App Development",
    status: "Commission Due",
    dateSubmitted: "2026-03-18",
    statusHistory: [
      { status: "Submitted", date: "2026-03-18", note: "Referral received and logged" },
      { status: "Contacted", date: "2026-03-20", note: "NICEGENE team made first contact" },
      { status: "Proposal Sent", date: "2026-03-27", note: "Proposal issued to the lead" },
      { status: "Converted", date: "2026-04-14", note: "Engagement confirmed and signed" },
      { status: "Commission Due", date: "2026-04-14", note: "Reward payable to referrer" },
    ],
    commission: 25000,
  },
  {
    id: demoReferrerId + "-r2",
    trackingId: "NDR-2026-0412",
    referrerName: "Chinedu Eze",
    referrerContact: "referrer@nicegene.com",
    relationship: "Former colleague",
    refereeName: "BrightPath Clinics",
    refereeContact: "admin@brightpath.ng",
    refereeCompany: "BrightPath Clinics",
    service: "Digitization & Records Management",
    status: "Proposal Sent",
    dateSubmitted: "2026-06-09",
    statusHistory: [
      { status: "Submitted", date: "2026-06-09", note: "Referral received and logged" },
      { status: "Contacted", date: "2026-06-11", note: "NICEGENE team made first contact" },
      { status: "Proposal Sent", date: "2026-06-20", note: "Quotation submitted to the lead" },
    ],
    commission: 0,
  },
  {
    id: demoReferrerId + "-r3",
    trackingId: "NDR-2026-0598",
    referrerName: "Chinedu Eze",
    referrerContact: "referrer@nicegene.com",
    relationship: "Church network",
    refereeName: "St. Mark's College",
    refereeContact: "rector@stmarkscollege.edu.ng",
    refereeCompany: "St. Mark's College",
    service: "Cloud Migration & Networking",
    status: "Submitted",
    dateSubmitted: "2026-08-11",
    statusHistory: [{ status: "Submitted", date: "2026-08-11", note: "Referral received and logged" }],
    commission: 0,
  },
];

// ---------------------------------------------------------------------------
// Exam portal (PRD 4.2)
// ---------------------------------------------------------------------------

export type QuestionType = "single" | "multiple" | "truefalse" | "short";

export type ExamQuestion = {
  id: string;
  course: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  answer?: string | string[];
  sampleAnswer?: string;
  marks: number;
};

export const questionBank: ExamQuestion[] = [
  {
    id: "q-1",
    course: "Cloud Computing",
    type: "single",
    prompt: "Which AWS service provides resizable virtual servers in the cloud?",
    options: ["Amazon S3", "Amazon EC2", "Amazon Route 53", "Amazon CloudFront"],
    answer: "Amazon EC2",
    marks: 10,
  },
  {
    id: "q-2",
    course: "Cloud Computing",
    type: "single",
    prompt: "Which service is used to manage user access and permissions in AWS?",
    options: ["IAM", "VPC", "CloudWatch", "SQS"],
    answer: "IAM",
    marks: 10,
  },
  {
    id: "q-3",
    course: "Cloud Computing",
    type: "multiple",
    prompt: "Which of the following are characteristics of serverless computing? (select all that apply)",
    options: [
      "No server management by the user",
      "Automatic scaling",
      "You pay only for what you use",
      "You must provision fixed capacity in advance",
    ],
    answer: ["No server management by the user", "Automatic scaling", "You pay only for what you use"],
    marks: 10,
  },
  {
    id: "q-4",
    course: "Cloud Computing",
    type: "truefalse",
    prompt: "S3 provides durable object storage with high availability.",
    options: ["True", "False"],
    answer: "True",
    marks: 5,
  },
  {
    id: "q-5",
    course: "Cloud Computing",
    type: "truefalse",
    prompt: "A security group in AWS allows traffic by default unless explicitly denied.",
    options: ["True", "False"],
    answer: "False",
    marks: 5,
  },
  {
    id: "q-6",
    course: "Cloud Computing",
    type: "single",
    prompt: "Which AWS service is a fully managed content delivery network (CDN)?",
    options: ["Amazon CloudFront", "Amazon EC2", "Amazon EBS", "Amazon VPC"],
    answer: "Amazon CloudFront",
    marks: 10,
  },
  {
    id: "q-7",
    course: "Cloud Computing",
    type: "single",
    prompt: "Which AWS service lets you run code without provisioning or managing servers?",
    options: ["AWS Lambda", "Amazon EC2", "Amazon RDS", "Elastic Beanstalk"],
    answer: "AWS Lambda",
    marks: 10,
  },
  {
    id: "q-8",
    course: "Cloud Computing",
    type: "multiple",
    prompt: "Which are components of a VPC? (select all that apply)",
    options: ["Subnets", "Route tables", "Internet Gateway", "S3 buckets"],
    answer: ["Subnets", "Route tables", "Internet Gateway"],
    marks: 10,
  },
  {
    id: "q-9",
    course: "Cloud Computing",
    type: "truefalse",
    prompt: "AWS free tier requires a valid credit card but you are never billed for anything.",
    options: ["True", "False"],
    answer: "False",
    marks: 5,
  },
  {
    id: "q-10",
    course: "Cloud Computing",
    type: "short",
    prompt: "In one or two sentences, explain the main advantage of Infrastructure as Code (IaC).",
    marks: 25,
    sampleAnswer:
      "IaC enables repeatable, version-controlled, and automated provisioning of cloud infrastructure, eliminating manual configuration errors.",
  },
  {
    id: "q-11",
    course: "Front-end Web Development",
    type: "single",
    prompt: "Which HTML5 element is used to structure navigation links?",
    options: ["<nav>", "<div>", "<span>", "<header>"],
    answer: "<nav>",
    marks: 10,
  },
  {
    id: "q-12",
    course: "Front-end Web Development",
    type: "single",
    prompt: "Which CSS property creates a flexible layout that adapts to the container?",
    options: ["display: flex", "position: absolute", "float: left", "z-index: 10"],
    answer: "display: flex",
    marks: 10,
  },
  {
    id: "q-13",
    course: "Front-end Web Development",
    type: "truefalse",
    prompt: "React components must always be class-based.",
    options: ["True", "False"],
    answer: "False",
    marks: 5,
  },
  {
    id: "q-14",
    course: "Front-end Web Development",
    type: "multiple",
    prompt: "Which of the following are JavaScript data types? (select all that apply)",
    options: ["string", "boolean", "array", "object"],
    answer: ["string", "boolean", "object"],
    marks: 10,
  },
  {
    id: "q-15",
    course: "Front-end Web Development",
    type: "short",
    prompt: "Briefly explain what a single-page application (SPA) is.",
    marks: 25,
    sampleAnswer:
      "An SPA loads a single HTML page and dynamically updates content via JavaScript, avoiding full page reloads for a faster experience.",
  },
];

export type ExamDefinition = {
  id: string;
  course: string;
  title: string;
  durationMinutes: number;
  questionIds: string[];
  passMark: number;
  instructions: string[];
};

export const seedExams: ExamDefinition[] = [
  {
    id: "exam-cloud-final",
    course: "Cloud Computing",
    title: "Cloud Computing — Final Assessment",
    durationMinutes: 15,
    questionIds: ["q-1", "q-2", "q-3", "q-4", "q-5", "q-6", "q-7", "q-8", "q-9", "q-10"],
    passMark: 50,
    instructions: [
      "This exam is timed. The countdown is always visible and your answers are submitted automatically when time expires.",
      "You may navigate between questions freely and flag questions for review.",
      "Your answers are auto-saved every 30 seconds. Do not refresh or close the tab during the exam.",
      "The exam runs in full-screen mode. Attempting to exit may trigger an anti-cheat alert.",
      "Once submitted, the exam cannot be reopened.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Blog fallback posts (Section 6) — used only if the external feed is unavailable
// ---------------------------------------------------------------------------

export type FallbackPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  image?: ImageSource;
};

export const blogCategories = [
  "Cloud Computing",
  "Web Development",
  "Digital Skills",
  "Company News",
  "Industry Insights",
];

export const fallbackPosts: FallbackPost[] = [
  {
    id: "cloud-migration-checklist",
    title: "Cloud Migration: The NICEGENE Checklist for Institutions",
    excerpt:
      "Ten steps we follow when moving a school or organisation to the cloud — from discovery to zero-downtime cutover.",
    content: [
      "Migrating an institution to the cloud is a transformation project, not a lift-and-shift exercise. Over the years we have moved schools, agencies, and retail businesses to AWS, and every successful project follows the same disciplined path.",
      "Step one is discovery: understand every manual process and legacy system before designing anything. Step two is architecture — choosing the right services for the actual workload, not for the vendor catalogue.",
      "Security and identity come before data movement. We configure IAM, backups, and monitoring before a single file is transferred, and every migration ends with a cutover window that has been rehearsed end to end.",
      "The result is what our LAEC platform demonstrates: over 10,000 users on a serverless architecture with zero recorded downtime since deployment.",
    ],
    category: "Cloud Computing",
    author: "Eugene O. Orji",
    authorRole: "Chief Executive Officer",
    date: "2026-07-28",
    readingTime: "5 min read",
    image: teamWorking,
  },
  {
    id: "serverless-cbt-platform",
    title: "Inside Our Serverless CBT Platform: Multi-Tenancy at Scale",
    excerpt:
      "How we built a cloud-native examination platform that lets ten schools operate independently on shared infrastructure.",
    content: [
      "The Lagos Archdiocesan Education Commission needed a platform where each school felt independent while everything ran on one shared, secure infrastructure.",
      "We chose a serverless architecture — API Gateway, Lambda, and DynamoDB — so that exam-day traffic spikes scale automatically without capacity planning.",
      "Tenancy was managed at the application layer through scoped access tokens, while each school received its own catalogues, schedules, and reporting views over the same data plane.",
      "The platform has processed intercollegiate examinations across more than 10 schools and 10,000 students, teachers, and administrative staff with zero service downtime.",
    ],
    category: "Web Development",
    author: "Marcelina Idoko",
    authorRole: "Technical Team Lead",
    date: "2026-07-09",
    readingTime: "6 min read",
    image: academyPhoto,
  },
  {
    id: "powerbi-for-institutions",
    title: "From Spreadsheets to Power BI: Analytics for Nigerian Institutions",
    excerpt:
      "Why every school and agency should turn its manual reports into living dashboards — and how the Academy teaches it.",
    content: [
      "Most institutions in Nigeria still produce reports the same way they did a decade ago: manually, on spreadsheets, delivered late.",
      "Power BI turns the same data into living dashboards — attendance, fees, exam performance, and inventory — updated automatically and readable by anyone.",
      "That is why Power BI is a core tool in our Data Analytics track at NICEGENE Academy. Trainees learn SQL, Power Query, and DAX on real institutional-style datasets.",
      "The outcome is a generation of analysts who can convert raw data into decisions, not just documents.",
    ],
    category: "Digital Skills",
    author: "Egwu Nnenna",
    authorRole: "Marketing & Sales Lead",
    date: "2026-06-18",
    readingTime: "4 min read",
  },
  {
    id: "tech-insight-series",
    title: "Tech Insight Series: 158 Professionals, 23 States, One Mission",
    excerpt:
      "Recap of the maiden edition of our quarterly training series, themed 'Data Protection Law & Practices'.",
    content: [
      "The maiden edition of the NICEGENE Tech Insight Series, themed 'Data Protection Law & Practices', attracted 158 registered participants — 81 male (51.3%) and 77 female (48.7%) — from 23 states and the FCT.",
      "Participants spanned students, lawyers, graduates, data analysts, software developers, IT professionals, academics, entrepreneurs, and business owners — proof of how central data protection has become to every profession.",
      "Every participant who completed the programme requirements, including the post-session evaluation, received a Certificate of Participation.",
      "The next edition is open for registration — watch the announcements bar and our events page for dates.",
    ],
    category: "Company News",
    author: "Nnaemeka E. Ezenwa-Okoro",
    authorRole: "Media & Publicity Lead",
    date: "2026-05-22",
    readingTime: "3 min read",
    image: monthPhoto,
  },
  {
    id: "nigerian-data-protection-act",
    title: "What the Nigeria Data Protection Act, 2023 Means for Your Institution",
    excerpt:
      "A practical guide to NDPA obligations — and why compliance should be designed in from day one.",
    content: [
      "The Nigeria Data Protection Act, 2023, and the GAID 2025 directive place concrete obligations on institutions that process personal data: consent, purpose limitation, security safeguards, and breach notification.",
      "For schools and businesses, the practical work is in system design: who can access a record, how long it is retained, and how it is deleted when no longer needed.",
      "At NICEGENE we are building a growing data protection practice that helps clients design compliant systems from the ground up, instead of bolting compliance on afterward.",
      "Start with a data inventory: map what you collect, where it lives, and who touches it. Everything else follows from that.",
    ],
    category: "Industry Insights",
    author: "Ikenna Okpalaeze",
    authorRole: "Head of Legal",
    date: "2026-05-05",
    readingTime: "7 min read",
  },
  {
    id: "drone-services-africa",
    title: "Drones Beyond Videography: Industrial Applications We Deliver",
    excerpt:
      "Aerial mapping, inspections, and cinematography — where NICEGENE drone services create measurable value.",
    content: [
      "Drones are usually associated with beautiful footage, but their greatest value is industrial: aerial mapping, structural inspections, and precision agriculture.",
      "Our drone practice delivers high-definition cinematography for brands, site surveys for construction, and crop health analytics for farms.",
      "Every engagement is flown with licensed operators and processed through structured deliverables — orthomosaics, inspection reports, or finished film.",
      "Whether you need a launch film or a farm survey, the same standard applies: a clear brief, a precise flight plan, and a deliverable you can act on.",
    ],
    category: "Industry Insights",
    author: "Victor James",
    authorRole: "Program Coordinator",
    date: "2026-04-14",
    readingTime: "4 min read",
    image: dronePhoto,
  },
];

// ---------------------------------------------------------------------------
// Why NICEGENE / numbers (Section 5.1)
// ---------------------------------------------------------------------------

export const byTheNumbers = [
  { value: 2, suffix: "+", label: "Years in Operation" },
  { value: 60, suffix: "+", label: "Clients Served" },
  { value: 300, suffix: "+", label: "Students Trained" },
  { value: 80, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "+", label: "Certifications Issued" },
];

export function monthName(month: number): string {
  return new Date(2000, month - 1, 1).toLocaleString("en-US", { month: "long" });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}