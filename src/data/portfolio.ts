import { BriefcaseBusiness, ClipboardCheck, Code2, Database, FileCheck2, Globe2, Headphones, Megaphone, Plane, ShoppingBag } from "lucide-react";
import travelProject from "@/assets/project-travel.jpg";
import hearingProject from "@/assets/project-hearing.jpg";
import commerceProject from "@/assets/project-commerce.jpg";

export const experiences = [
  {
    company: "Mohsin E Azam Travels & Tours",
    role: "Data Operator / Data Coordinator",
    period: "2023 – Present",
    featured: true,
    summary: "Supporting reliable travel operations through accurate passenger information, documentation and day-to-day coordination.",
    responsibilities: ["Travel and passenger data management", "Passport and travel documentation handling", "Visa processing support", "Flight reservation and ticketing support", "Customer record management", "Data entry, verification and office coordination", "Customer support and operational task coordination"],
  },
  {
    company: "NaturalSaltLamp.Shop",
    role: "Business Owner",
    period: "2023 – Present",
    featured: false,
    summary: "Managing a practical online business across products, customers, promotion and day-to-day e-commerce operations.",
    responsibilities: ["E-commerce and online sales operations", "Product and website management", "Digital marketing and online promotion", "Customer handling", "Business operations"],
  },
  {
    company: "Iqra College of Technology, Islamabad",
    role: "Lab Assistant & Data Coordinator",
    period: "February 2022 – January 2023",
    featured: false,
    summary: "Provided dependable data, documentation, administrative and technical support in an education environment.",
    responsibilities: ["Data management and record keeping", "Documentation", "Office coordination", "Technical and lab support", "Administrative support"],
  },
];

export const skillGroups = [
  { title: "Travel & Tours", icon: Plane, skills: ["Passenger Data Management", "Travel Documentation", "Passport Documentation", "Visa Processing Support", "Flight Reservation Support", "Ticketing Support", "Customer Coordination", "Travel Operations", "Record Management"] },
  { title: "Digital Marketing", icon: Megaphone, skills: ["Digital Marketing", "SEO", "Social Media Marketing", "Content Marketing", "Online Business Promotion", "Google Business / Online Presence", "Marketing Strategy"] },
  { title: "Web Development", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Responsive Web Design", "Supabase", "Database Integration", "Cloudflare Deployment", "GitHub", "GitHub Codespaces"] },
  { title: "Design", icon: Globe2, skills: ["Graphic Design", "Adobe Illustrator", "UI/UX Concepts", "Social Media Design", "Branding"] },
  { title: "Data & Business", icon: Database, skills: ["Data Management", "Data Entry", "Data Organization", "E-commerce Operations", "Customer Management", "Business Operations"] },
];

export const services = [
  { icon: Plane, title: "Travel & Tours Support", description: "Practical operational support for travel workflows and customer coordination." },
  { icon: Database, title: "Travel Data Management", description: "Careful organization, verification and maintenance of passenger information." },
  { icon: FileCheck2, title: "Travel Documentation Support", description: "Structured support for passports, visa processing and travel records." },
  { icon: Megaphone, title: "Digital Marketing", description: "Clear digital promotion strategies for businesses and online visibility." },
  { icon: Code2, title: "Website Development", description: "Responsive websites designed around real business goals and users." },
  { icon: ShoppingBag, title: "E-commerce Development", description: "Online storefronts that support products, customers and sales operations." },
  { icon: ClipboardCheck, title: "Data Management", description: "Dependable data entry, organization and record management workflows." },
  { icon: BriefcaseBusiness, title: "Business Website Setup", description: "Professional digital foundations for service-based and local businesses." },
  { icon: Headphones, title: "Online Business Support", description: "Customer, website and operational support for growing online businesses." },
];

export const projects = [
  {
    title: "Mohsin-e-Azam Travels & Tours",
    url: "https://mohsineazam.com/",
    category: "Travel & Tours",
    filters: ["Travel & Tours", "Web Development", "Business"],
    description: "A professional Travel & Tours website focused on travel services including Umrah, Ziyarat and international tours.",
    technologies: ["Business Website", "Responsive Design", "Travel Services"],
    image: travelProject,
    featured: true,
  },
  {
    title: "All Hearing Aid Repair Lab",
    url: "https://allhearingaidrepairlab.site/",
    category: "Web Development / Business Website",
    filters: ["Web Development", "Business Websites", "Business"],
    description: "A professional website created to present the business and its hearing-aid repair related services through a dedicated online presence.",
    technologies: ["Business Website", "Service Design", "Responsive Design"],
    image: hearingProject,
    featured: false,
  },
  {
    title: "Chota Daraz",
    url: "https://chotadaraz.com/",
    category: "E-commerce / Web Development",
    filters: ["Web Development", "E-commerce", "Business"],
    description: "An e-commerce platform for watches, décor and gifts, with online shopping, Cash on Delivery and customer-oriented shopping features.",
    technologies: ["E-commerce", "Product Catalog", "Responsive Design"],
    image: commerceProject,
    featured: false,
  },
];

export const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Services", "Education", "Contact"];