"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "../../shared/section-heading";
import SectionDivider from "@/components/shared/section-divider";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      className='flex flex-col justify-center items-center w-full min-h-screen scroll-mt-36 dark:bg-darkBg dark:text-white'
      id='projects'
      ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div className='my-24 flex flex-col gap-4 justify-center items-center'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
