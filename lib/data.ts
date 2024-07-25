import React from "react";

import campwithusImg from "@/public/images/camp-with-us.png";
import carcatalogImg from "@/public/images/car-catalog.png";
import cseTechImg from "@/public/images/cse-tech.png";
import projectmanagementImg from "@/public/images/project-management.png";
import reactfoodImg from "@/public/images/react-food.png";
import surgeImg from "@/public/images/surge.png";
import factcheckImg from "@/public/images/factcheck.jpg";
import aiLawyerImg from "@/public/images/ai-lawyer.png";
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
    title: "WhirrCrew",
    location: "Prague, Czechia",
    description: `Front-end Web Develpoer position. Working on various projects with AI integration.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: "Jun 2024 - Present",
  },
  {
    title: "NAU",
    location: "Kyiv, Ukraine",
    description: `Bachelor's degree in Cybersecurity. Studying on the faculty of Cyber Security and Software Engineering.`,
    icon: React.createElement(BookIcon),
    date: "Sep 2022 - Present",
  },
  {
    title: "Self-education",
    location: "Czechia",
    description: `Styding Programming, Software Engineering and Web Development, picking up a great expertise in TypeScript, React, Next.js, Node.js, and database technologies (MongoDB/PostgreSQL/MySQL) utilizing Prisma for efficient data access.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: "Jul 2022 - Present",
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  cseTechImg,
  projectmanagementImg,
  reactfoodImg,
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
