import { useSectionInView } from "@/lib/hooks";
import { leadershipData } from "@/lib/data";
import SectionDivider from "@/components/shared/section-divider";

const Leadership = () => {
  const { ref } = useSectionInView("leadership", 0.25);

  return (
    <section
      className='flex flex-col justify-center items-center w-full min-h-screen scroll-mt-20 dark:bg-darkBg dark:text-white'
      id='leadership'
      ref={ref}>
      <div className='flex flex-col gap-4'>
        {leadershipData.map((data, index) => (
          <div key={index}>{data.title}</div>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
};

export default Leadership;
