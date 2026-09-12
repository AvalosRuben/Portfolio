import ExperiencieBlock from "./ExperienceBlock";
import ASCIIFlower from "./ui/ASCIIFlower";

function Experience() {
  return (
    <section
      className="w-[90vw] md:w-[80vw] lg:w-[70vw] h-fit mt-4 pb-10"
      id="experience"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-2 w-2 bg-charcoal shrink-0" />
        <span className="font-courier text-xs sm:text-sm text-charcoal font-bold tracking-wider shrink-0">
          [ EXPERIENCE_LOG ] // CAREER.TELEMETRY
        </span>
      </div>
      <div className="flex gap-10 w-full lg:pt-4">
        <div className="hidden lg:block w-1/4">
          <ASCIIFlower />
        </div>
        <div className="w-full border-t border-charcoal flex flex-col">
          <ExperiencieBlock
            Title="Software Intern"
            Company="ZIES"
            Place="Remote"
            StartDate="2026.03"
            FinishDate="2026.09"
            Descriptions={[
              "Developed a management system to keep track of the employees and their projects from zero, including mockups, data models, frontend and architecture.",
              "Learned about software design and architecture from the hand of data engineers and solutions architects.",
              "Gained experience on remote work.",
            ]}
            Number={1}
          />
        </div>
      </div>
    </section>
  );
}
export default Experience;
