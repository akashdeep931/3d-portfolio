import type { Experience, Project, Technologies } from "../types/main";
import {
  JS,
  TS,
  bootstrap,
  capacitor,
  csharp,
  css,
  dotnet,
  ertransit,
  express,
  firebase,
  grupMdt,
  html,
  ionic,
  motive,
  ncGames,
  next,
  node,
  northcoders,
  pinia,
  psql,
  pullandbear,
  react,
  redux,
  restAPI,
  tailwind,
  vue,
} from "./assets";

export const navLinks: { id: string; title: string }[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const roles: string[] = [
  "Backend Developer",
  "Frontend Developer",
  "App Developer",
  "A Software Developer!",
];

export const experiences: Experience[] = [
  {
    role: "Sales Staff",
    company: "Grup MDT",
    startDate: "Jun 2019",
    endDate: "Aug 2019",
    logo: grupMdt,
    logoBg: "#888888",
    description: [
      "Advise and engage customers offering a wide catalogue of various products.",
      "Set up and fill out all the documents needed for the acquisition of the offered product.",
    ],
  },
  {
    role: "Sales Assistant",
    company: "Pull & Bear",
    startDate: "Aug 2019",
    endDate: "Apr 2020",
    logo: pullandbear,
    logoBg: "#f1f1f1",
    description: [
      "Provide customer support.",
      "Do the picking in the warehouse.",
      "Organise and keep the clothes' section tidy.",
      "Carry out the cashier job: charges, returns, generate tax-free and so on.",
      "Help the Visual Merchandiser of the section to do the whole process.",
    ],
  },
  {
    role: "Freight Forwarder",
    company: "Ertransit",
    startDate: "May 2021",
    endDate: "Oct 2022",
    logo: ertransit,
    logoBg: "#fff",
    description: [
      "Provide customer service.",
      "Register the goods received at the warehouse.",
      "Claim and collect mandatory documentation for the shipment.",
      "Control and plan inbound containers' loading.",
      "Solve incidents.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Northcoders",
    startDate: "Feb 2023",
    endDate: "May 2023",
    logo: northcoders,
    logoBg: "#fff",
    description: [
      "Functional programming, OOP, SOLID principles and pair programming.",
      "Solve problems following TDD method using Jest.",
      "Build web servers and APIs with Express.js and Node.js.",
      "Use PSQL as the data management system.",
      "Test endpoints with supertest and build CI/CD pipeline.",
    ],
  },
];

export const tech: Technologies[] = [
  {
    name: "JavaScript",
    icon: JS,
    category: "Languages",
  },
  {
    name: "TypeScript",
    icon: TS,
    category: "Languages",
  },
  {
    name: "C#",
    icon: csharp,
    category: "Languages",
  },
  {
    name: "HTML5",
    icon: html,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: css,
    category: "Frontend",
  },
  {
    name: "ReactJS",
    icon: react,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: redux,
    category: "Frontend",
  },
  {
    name: "NextJS",
    icon: next,
    category: "Frontend",
  },
  {
    name: "VueJS",
    icon: vue,
    category: "Frontend",
  },
  {
    name: "Pinia",
    icon: pinia,
    category: "Frontend",
  },
  {
    name: "Ionic",
    icon: ionic,
    category: "Frontend",
  },
  {
    name: "Capacitor",
    icon: capacitor,
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: tailwind,
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    category: "Frontend",
  },
  {
    name: "NodeJS",
    icon: node,
    category: "Backend",
  },
  {
    name: "ExpressJS",
    icon: express,
    category: "Backend",
  },
  {
    name: ".NET",
    icon: dotnet,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: psql,
    category: "Backend",
  },
  {
    name: "Firebase",
    icon: firebase,
    category: "Backend",
  },
];

export const techCategories: string[] = ["Languages", "Frontend", "Backend"];

export const projects: Project[] = [
  {
    name: "MOTIVE",
    image: motive,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7067189428439392256/",
    repo: "https://github.com/zaneris123/motive-northcoders",
    techStack: [
      "VueJS",
      "Ionic",
      "Capacitor",
      "Firebase Cloud Firestore",
      "Firebase Authentication",
      "Firebase Cloud Storage",
      "Google Maps API",
    ],
  },
  {
    name: "NC-GAMES",
    image: ncGames,
    link: "https://nc-games-community.netlify.app/",
    repo: "https://github.com/akashdeep931/NC-GAMES",
    techStack: ["JavaScript", "HTML5", "CSS3", "React", "Axios"],
  },
  {
    name: "NC-GAMES-RestAPI",
    image: restAPI,
    link: "https://nc-games-api-39ip.onrender.com/api",
    repo: "https://github.com/akashdeep931/NC-GAMES-API",
    techStack: [
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "Cors",
      "dotenv",
      "pg",
      "Jest",
      "Supertest",
    ],
  },
];
