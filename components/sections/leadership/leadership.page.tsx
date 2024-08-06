import { useSectionInView } from "@/lib/hooks";
import { leadershipData } from "@/lib/data";
import LeadershipCard from "@/components/sections/leadership/leadershipCard";
import SectionDivider from "@/components/shared/section-divider";
import { ExpandableCardDemo } from "./grid";
import SectionHeading from "@/components/shared/section-heading";

const Leadership = () => {
  const { ref } = useSectionInView("leadership", 0.25);

  return (
    <section
      className='flex flex-col justify-center items-center w-full min-h-screen scroll-mt-20 dark:bg-darkBg dark:text-white'
      id='leadership'
      ref={ref}>
      <SectionHeading>Leadership</SectionHeading>
      {/* <div className='flex flex-col gap-4'>
        {leadershipData.map((data, index) => (
          <LeadershipCard key={index} leadershipData={data} />
        ))}
      </div> */}
      <ExpandableCardDemo />
      <SectionDivider />
    </section>
  );
};

export default Leadership;
