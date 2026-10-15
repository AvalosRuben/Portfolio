import { useGSAP } from "@gsap/react";
import ExperiencieBlock, {
  type ExperiencieBlockProps,
} from "./ExperienceBlock";
import ASCIIFlower from "./ui/ASCIIFlower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const experienceTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "top center",
      },
    });
    experienceTl.from(".exp-title", { duration: 0.3, opacity: 0, y: 20 });
    experienceTl.from(".flower", { duration: 0.3, opacity: 0, y: 20 });
    experienceTl.from(".exp-borders", { duration: 0.3, opacity: 0, y: 20 });
    experienceTl.from(".exp-block", {
      duration: 0.3,
      opacity: 0,
      y: 20,
      stagger: 0.3,
    });
    experienceTl.from(".exp-decor", { duration: 0.3, opacity: 0, y: 20 });
  });
  return (
    <section
      className="w-[90vw] md:w-[80vw] lg:w-[70vw] h-fit mt-4 pb-10"
      id="experience"
    >
      <div className="flex items-center gap-3 mb-6 exp-title">
        <div className="h-2 w-2 bg-charcoal shrink-0" />
        <span className="font-courier text-xs sm:text-sm text-charcoal font-bold tracking-wider shrink-0">
          [ EXPERIENCE_LOG ] // CAREER.TELEMETRY
        </span>
        <div className="w-full border-b border-charcoal-faint/60" />
      </div>
      <div className="flex gap-10 w-full lg:pt-4">
        <div className="hidden lg:block w-1/4 flower">
          <ASCIIFlower />
        </div>
        <div className="w-full border-t border-charcoal flex flex-col h-fit border-b exp-borders">
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
      <div className="flex justify-between font-space text-xxs md:text-xs text-charcoal-faint/40 w-full border-t border-charcoal-faint/40 pt-2 mt-2 exp-decor">
        <span>SEG.03 // EXPERIENCE</span>
        <span>▲▲▲▲▲▲▲░░░ 73% </span>
        <span>NEXT :: TECH STACK</span>
      </div>
    </section>
  );
}
export default Experience;
