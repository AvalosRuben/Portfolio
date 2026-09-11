interface SingleProjectProps {
  name: string;
  state: string;
  description: string;
  img: string;
  technologies: string[];
  link: string;
}

function SingleProject({
  name,
  state,
  description,
  img,
  technologies,
  link,
}: SingleProjectProps) {
  return (
    <a href={link}>
      <div className="group relative w-full flex flex-col border border-charcoal-faint items-center ">
        <div className="absolute inset-0 bg-charcoal/7 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
        <div className="w-full h-40 border-b border-charcoal">
          <img src={img} className="w-full h-full object-cover block" />
        </div>
        <div className="w-full h-25 sm:h-40 bg-cream-dark/40 flex flex-col p-6 gap-4">
          <div className="flex justify-between">
            <span className="font-space text-sm font-bold text-charcoal">
              {name}
            </span>
            <span className="font-courier px-1 pt-1 border border-charcoal text-xs">
              [{state}]
            </span>
          </div>
          <span className="hidden sm:block font-courier text-xs text-charcoal-light">
            {description}
          </span>
          <div className="flex items-center gap-2 text-xs font-courier text-charcoal-faint">
            {technologies.map((t) => (
              <span>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default SingleProject;
