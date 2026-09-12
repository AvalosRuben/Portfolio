interface ExperiencieBlockProps {
  Title: string;
  Company: string;
  Place: string;
  StartDate: string;
  FinishDate: string;
  Descriptions: string[];
  Number: number;
}

function ExperiencieBlock({
  Title,
  Company,
  Place,
  StartDate,
  FinishDate,
  Descriptions,
  Number,
}: ExperiencieBlockProps) {
  return (
    <div className="w-full flex gap-2 justify-center pt-8 pr-4">
      <span className="text-sm font-space text-charcoal-faint pl-6 pr-4 whitespace-nowrap">
        {Number} //
      </span>
      <div className="w-full flex flex-col gap-2 justify-center">
        <div className="flex items-center justify-between">
          <span className="text-charcoal font-bold font-space tracking-wide">
            {Title.toUpperCase()}
          </span>
          <span className="text-charcoal-faint font-space text-xs">
            {StartDate} - {FinishDate}
          </span>
        </div>
        <span className="mr-auto text-charcoal-faint font-space text-xs">
          {Company.toUpperCase()} - {Place.toUpperCase()}
        </span>
        <div className="border-b pb-2 border-charcoal-faint/40">
          <div className="flex flex-col font-space text-sm gap-2 border-dashed border-t border-charcoal-faint/30 my-2 pt-2">
            {Descriptions.map((d) => (
              <span>▸ {d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencieBlock;
