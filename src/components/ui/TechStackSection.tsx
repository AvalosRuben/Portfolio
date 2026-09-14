export interface TechStackSectionProps {
  Title: string;
  Tools: string[];
}

function TechStackSection({ Title, Tools }: TechStackSectionProps) {
  return (
    <div className="flex flex-col font-space gap-2">
      <span className="text-charcoal-faint/80 text-xxs md:text-xs">
        - {Title.toUpperCase()}
      </span>
      <div className="flex gap-2 ">
        {Tools.map((t) => (
          <span
            className="p-2 border border-charcoal-faint text-charcoal/80 bg-charcoal-faint/5 text-xxs md:text-xs tracking-wider
          hover:border-charcoal hover:bg-charcoal-faint/25"
          >
            [{t}]
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStackSection;
