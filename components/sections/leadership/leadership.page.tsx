import { useSectionInView } from "@/lib/hooks";
import SectionDivider from "@/components/shared/section-divider";
import { Grid } from "./grid";
import SectionHeading from "@/components/shared/section-heading";

const Leadership = () => {
  const { ref } = useSectionInView("leadership", 0.25);

  return (
    <section
      className='flex flex-col justify-center items-center w-full min-h-screen scroll-mt-20 dark:bg-darkBg dark:text-white'
      id='leadership'
      ref={ref}>
      <SectionHeading>Leadership</SectionHeading>
      <Grid />
      <SectionDivider />
    </section>
  );
};

export default Leadership;
