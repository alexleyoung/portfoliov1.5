"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import portfolioImg from "../../../public/images/photo.jpg";
import Image from "next/image";
import SectionDivider from "../../shared/section-divider";
import { useRef } from "react";
import SectionHeading from "../../shared/section-heading";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/utils";

export default function About() {
  const { ref } = useSectionInView("about", 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className='flex flex-col md:scroll-mt-4 lg:scroll-mt-24 items-center justify-center lg:justify-start leading-8 h-[1000px] lg:h-[1100px] z-50 w-full dark:bg-darkBg dark:text-white'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'>
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        className='w-full overflow-hidden'
        ref={divRef}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}>
        <div className='group w-full h-full flex justify-center items-center'>
          <div className='flex border flex-col lg:flex-row gap-12 justify-center items-center text-center lg:text-start max-w-[40rem] lg:max-w-[80rem] px-12 text-md lg:text-lg z-40 font-semibold tracking-wide text-primary'>
            <Image
              src={portfolioImg}
              alt='portfolio image'
              placeholder='blur'
              width={470}
              height={470}
              className='rounded-full z-10 lg:w-[380px] lg:h-[380px] xl:w-[470px] xl:h-[470px] border-8'
            />

            <div className='flex flex-col gap-6 leading-relaxed'>
              <span>
                I&apos;m an AI Engineer studying CS & Math @ ISU with expertise
                in fullstack development using TypeScript/React/Next,
                Node/Express/Flask, database technologies like
                MongoDB/PostgreSQL/MySQL, and AI integrations like LangChain,
                LlamaIndex, and Pinecone.
              </span>
              <span>
                I am also an AWS Certified Cloud Practicioner, with practical
                experience using services like S3, RDS, and EC2.
              </span>
              <p className='flex flex-col items-center lg:items-start'>
                <span>So if you are interested,</span>
                <Link
                  href={"contact"}
                  onClick={(e) => {
                    smoothScrollTo({ e, id: "contact" });
                  }}
                  className='w-52 lg:w-40'>
                  <span className='text-2xl font-bold dark:bg-darkBlue uppercase lg:normal-case bg-lightBlue'>
                    Contact me!
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <SectionDivider />
    </motion.section>
  );
}
