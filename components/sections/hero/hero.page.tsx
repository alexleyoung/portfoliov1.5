"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "../../shared/section-divider";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import TextAnimation from "./text-animation";
import { smoothScrollTo } from "@/lib/utils";
import { CircleUser, Link, Linkedin } from "lucide-react";
import Image from "next/image";
import { useActiveSectionContext } from "@/stores/active-section/active-section-context";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className='flex flex-col h-screen w-full scroll-mt-36 justify-center items-center relative'
        id='home'
        ref={ref}>
        <a
          className='flex justify-center items-center absolute right-6 bottom-6 sm:right-8 sm:bottom-8 cursor-pointer z-[49]'
          onClick={(e) => {
            smoothScrollTo({ e, id: "about" });
          }}>
          <motion.span
            className='w-[5px] h-8 md:w-2 md:h-10 bg-black  dark:bg-[#ddbea9] rounded-lg m-2'
            initial={{ y: 0, rotate: -45 }}
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.span
            className='w-[5px] h-8 md:w-2 md:h-10 bg-black dark:bg-[#ddbea9] rounded-lg m-2'
            initial={{ y: 0, rotate: 45 }}
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </a>
        <div className='flex flex-col items-start justify-center container tracking-wide text-black dark:text-white'>
          <div className='relative w-full h-full container flex flex-col items-center'>
            <div className='lg:text-[3rem] text-[2rem] font-extrabold lg:mb-5 text-center h-72 w-[280px] sm:w-[520px] md:w-[700px] lg:w-[920px]'>
              <motion.span
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                className='font-extrabold mb-10 text-start'>
                Hey ! 👋
              </motion.span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Alex.`} />
            </div>
            <motion.div
              className='flex flex-col md:flex-row w-92 items-center md:mt-12 justify-center gap-3 px-4 lg:text-lg font-medium text-sm z-50'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}>
              <a
                className='group w-64 sm:w-auto bg-darkBg text-white hover:dark:text-black px-7 py-3 cursor-pointer flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-darkBlue active:scale-105 transition justify-center'
                onClick={(e) => {
                  smoothScrollTo({ e, id: "contact" });
                  setActiveSection("contact");
                  setTimeOfLastClick(Date.now());
                }}>
                Contact me here{" "}
                <CircleUser className='opacity-70 group-hover:opacity-80' />
              </a>

              <a
                className='group w-64 sm:w-auto bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 justify-center'
                href='https://drive.google.com/file/d/1vaJx-GmKjsGEfoP4sEMC4mCK4jXpFhdl/view?usp=sharing'
                target='_blank'>
                See Resume{" "}
                <Link className='opacity-60 group-hover:opacity-100' />
              </a>

              <div className='flex gap-2 '>
                <a
                  className='bg-white p-4 text-gray-700 hover:text-blue-600 duration-300 flex items-center justify-center gap-2 rounded-full w-[60px] h-[60px] focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                  href='https://www.linkedin.com/in/alexleyoung/'
                  target='_blank'>
                  <Linkedin />
                </a>

                <a
                  className='bg-white p-4  flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 hover:text-gray-950 w-[60px] h-[60px] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 justify-center'
                  href='https://github.com/alexleyoung'
                  target='_blank'>
                  <Image
                    width={25}
                    height={25}
                    src={"/svgs/github.svg"}
                    alt='github icon'
                    className='brightness-75 hover:brightness-100'
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className='dark:bg-darkBg w-full flex justify-center'>
        <SectionDivider />
      </div>
    </>
  );
}
