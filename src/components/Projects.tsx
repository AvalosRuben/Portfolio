import SingleProject from "./ui/SingleProject";

function Projects() {
  return (
    <section className="w-[70vw] h-screen mt-4" id="projects">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-2 w-2 bg-charcoal shrink-0" />
        <span className="font-courier text-sm text-charcoal font-bold tracking-wider shrink-0">
          [ FEATURED_PROJECTS ] // OUTPUT.RECORD
        </span>
        <div className="w-full border-b border-charcoal-faint/60" />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <SingleProject />
        <SingleProject />
      </div>
    </section>
  );
}

export default Projects;
