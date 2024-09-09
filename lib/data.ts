import React from "react";

import cseTechImg from "@/public/images/cse-tech.png";
import factcheckImg from "@/public/images/factcheck.jpg";
import nlProf from "@/public/images/prof.png";
import asap from "@/public/images/asap.png";

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
    name: "Work",
    id: "experience",
  },
  {
    name: "Leadership",
    id: "leadership",
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

export const images = {
  cseTechImg,
  factcheckImg,
  nlProf,
  asap,
};

export const projectsData = [
  {
    title: "asap.",
    description:
      "All-in-one schedule management solution. Automatically schedule your week with AI using preferences, event, and task data. Create group calendars to automatically find availability.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Supabase",
      "OpenAI API",
      "Pinecone",
    ],
    imageUrl: asap,
    link: "https://tryasap.vercel.app/",
  },
  {
    title: "NLProfessor",
    description:
      "RAG-powered natural language queries to find your ideal college professor. User queries are embedded to perform similarity search, and results are passed to an LLM as additional context.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Supabase",
      "OpenAI API",
      "Pinecone",
    ],
    imageUrl: nlProf,
    link: "https://ai-professor-iota.vercel.app/",
  },
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

export const experiencesData = [
  {
    title: "Software Engineering Fellow",
    location: "Headstarter AI | NYC (Remote)",
    description: `Work on the construction of 5 AI software projects in 5 weeks, with the final project being a validated idea with 1000+ users.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: "Jul 2024 - Sep 2024",
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

export const leadershipData = [
  {
    title: "CSE Club President",
    location: "ISU | Ames, IA",
    description: `Lead a team of 6 officers to plan and execute 20+ events per semester. Increased club membership by 30% and garnered ~$10,000 in funding from sponsors.`,
    date: "May 2023 - Present",
  },
  {
    title: "CS Peer Mentor",
    location: "ISU | Ames, IA",
    description: `Mentored 25 first-year CS students on CS/SWE pathways at ISU. Led weekly classes focused on facilitating socialization and announcing CS opportunities. Hosted weekly office hours and study sessions. Helped students with homework, projects, and exam prep.`,
    date: "Aug 2023 - Present",
  },
  {
    title: "MSA Peer Educator",
    location: "ISU | Ames, IA",
    description: `Helped 20+ high-achieving multicultural navigate their first semester at ISU. Assisted MSA (Multicultural Student Affairs) in hosting 7 events throughout each semester. Answer student questions about work/life balance, goal setting, future planning, etc.`,
    date: "Aug 2023 - Present",
  },
  {
    title: "FHP Leader",
    location: "ISU | Ames, IA",
    description: `Led 12 first-year ISU Honors students through their first semester. Co-led a semester-long, weekly seminar with 15 unique lesson plans focused on allowing the students to thrive academically and personally at ISU. Helped students with course planning and navigating university struggles.`,
    date: "Feb 2023 - Present",
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
