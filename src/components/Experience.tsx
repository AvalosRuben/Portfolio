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
      <div className="flex">
        <div className="hidden sm:block w-1/4">
          <ASCIIFlower />
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
export default Experience;
