import React from "react";

import cseTechImg from "@/public/images/cse-tech.png";
import factcheckImg from "@/public/images/factcheck.jpg";

import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from "lucide-react";

export const links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Contact",
    id: "contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Fellow",
    location: "Headstarter AI | NYC (Remote)",
    description: `Work on the construction of 5 AI software projects in 5 weeks, with the final project being a validated idea with 1000+ users.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: "Jul 2024 - Present",
  },
  {
    title: "Software Engineering Research Assistant",
    location: "ISU | Ames, IA",
    description: `Worked alongside Dr. Tsung-Pin Yeh on "The Road to the Industrial Metaverse". Developed XR application using Unity, USD, and Photon to create a cooperative VR experience to manipulate custom USD models in realtime.`,
    icon: React.createElement(BookIcon),
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Undergraduate Student",
    location: "ISU | Ames, IA",
    description: `Formally studying Computer Science and Math. 4.00 GPA. Relevant courswork: Data Structures, Algorithms, Computer Architecture, Software Construction, Databases. Served as CS Peer Mentor, and CSE Club President.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: "Aug 2023 - Present",
  },
] as const;

export const images = {
  cseTechImg,
  factcheckImg,
};

export const projectsData = [
  {
    title: "CSE Tech",
    description:
      "An all-in-one platform for CSE Club at ISU. Features include public events and articles, as well as a custom admin panel with Authentication.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Node/Express",
      "Lucia",
      "MongoDB",
    ],
    imageUrl: cseTechImg,
    link: "https://github.com/alexleyoung/techblog",
  },
  {
    title: "FactCheck",
    description: `Yale Hack '24 Project. Chromium extension for fact-checking news articles. Uses sentiment analysis and classification to score the factuality of text content.`,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Flask",
      "PyTorch",
      "Tensorflow",
    ],
    imageUrl: factcheckImg,
    link: "https://github.com/maarao/webscraper/tree/main",
  },
] as const;

export const skillsData = [
  ["JavaScript", "/svgs/javascript-js.svg"],
  ["TypeScript", "/svgs/typescript-icon.svg"],
  ["Python", "/svgs/python.svg"],
  ["Java", "/svgs/java.svg"],
  ["C", "/svgs/c.svg"],
  ["HTML", "/svgs/file-type-html.svg"],
  ["CSS", "/svgs/file-type-css.svg"],
  ["React", "/svgs/react.svg"],
  ["Next.js", "/svgs/nextjs.svg"],
  ["Node.js", "/svgs/node-js.svg"],
  ["Express", "/svgs/express-original.svg"],
  ["Flask", "/svgs/flask.svg"],
  ["Django", "/svgs/django.svg"],
  ["Tailwind", "/svgs/tailwind-css.svg"],
  ["MongoDB", "/svgs/mongodb-original.svg"],
  ["PostgreSQL", "/svgs/postgresql.svg"],
  ["AWS", "/svgs/aws.svg"],
  ["Git", "/svgs/git.svg"],
  ["GitHub", "/svgs/github.svg"],
] as const;
