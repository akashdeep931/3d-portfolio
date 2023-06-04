import type { Experience, Technologies } from "../types/main";
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
  next,
  node,
  northcoders,
  pinia,
  psql,
  pullandbear,
  react,
  redux,
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

export const languages: Technologies[] = [
  {
    name: "JavaScript",
    icon: JS,
  },
  {
    name: "TypeScript",
    icon: TS,
  },
  {
    name: "C#",
    icon: csharp,
  },
];

export const frontend: Technologies[] = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "ReactJS",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "VueJS",
    icon: vue,
  },
  {
    name: "Pinia",
    icon: pinia,
  },
  {
    name: "Ionic",
    icon: ionic,
  },
  {
    name: "Capacitor",
    icon: capacitor,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

export const backend: Technologies[] = [
  {
    name: "NodeJS",
    icon: node,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

export const techType: string[] = ["Languages", "Frontend", "Backend"];
