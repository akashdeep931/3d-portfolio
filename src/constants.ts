import type { Experience } from "../types/main";
import { ertransit, grupMdt, northcoders, pullandbear } from "./assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech",
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
];
