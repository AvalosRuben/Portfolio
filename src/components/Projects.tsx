import SingleProject from "./ui/SingleProject";

const ProjectsInfo = [
  {
    name: "Maria & Montejo",
    state: "Deployed",
    description:
      "A modern, elegant, single-page, responsive site of my favourite coffee shop. Designed and coded entirely by myself! ",
    img: "/MariaYMontejoBanner.png",
    technologies: ["Typescript", "React", "Vercel", "TailwindCSS"],
    link: "https://mariaymontejo.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      className="w-[90vw] md:w-[80vw] lg:w-[70vw] h-fit mt-4 pb-10"
      id="projects"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-2 w-2 bg-charcoal shrink-0" />
        <span className="font-courier text-xs sm:text-sm text-charcoal font-bold tracking-wider shrink-0">
          [ FEATURED_PROJECTS ] // OUTPUT.RECORD
        </span>
        <div className="w-full border-b border-charcoal-faint/60" />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full">
        {ProjectsInfo.map((p) => (
          <SingleProject
            name={p.name}
            state={p.state}
            description={p.description}
            img={p.img}
            technologies={p.technologies}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
