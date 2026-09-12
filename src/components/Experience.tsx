import ExperiencieBlock, {
  type ExperiencieBlockProps,
} from "./ExperienceBlock";
import ASCIIFlower from "./ui/ASCIIFlower";

const ExperienceInfo: ExperiencieBlockProps[] = [
  {
    Title: "Software Dev Intern",
    Company: "ZIES",
    Place: "Remote",
    StartDate: "2026.03",
    FinishDate: "2026.09",
    Descriptions: [
      "Developed a management system to keep track of the employees and their projects from zero, including mockups, data models, frontend and architecture.",
      "Learned about software design and architecture from the hand of data engineers and solutions architects.",
      "Gained experience on remote work.",
    ],
    Number: 1,
  },
  {
    Title: "Fullstack Dev Intern",
    Company: "Wayakna",
    Place: "Mérida, YUC",
    StartDate: "2026.01",
    FinishDate: "2026.03",
    Descriptions: [
      "Worked as a fullstack dev with a MERN stack on the company projects.",
      "Gained experience on team work.",
      "Redesigned the UI completely, giving it a fresh and new look.",
    ],
    Number: 2,
  },
];

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
        <div className="w-full border-t border-charcoal flex flex-col h-fit border-b">
          {ExperienceInfo.map((e: ExperiencieBlockProps) => (
            <ExperiencieBlock
              Title={e.Title}
              Company={e.Company}
              Place={e.Place}
              StartDate={e.StartDate}
              FinishDate={e.FinishDate}
              Descriptions={e.Descriptions}
              Number={e.Number}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
