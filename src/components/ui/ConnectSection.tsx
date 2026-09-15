import { MoveUpRight } from "lucide-react";

export interface ConnectSectionProps {
  Abbreviation: string;
  Text: string;
  Link: string;
}

function ConnectSection({ Abbreviation, Text, Link }: ConnectSectionProps) {
  return (
    <div className="flex py-3 border-b border-charcoal-faint/50 hover:pl-4 transition-all">
      <div className="flex gap-4 items-center justify-center w-full ">
        <span className="text-charcoal-faint text-xxs lg:text-xs tracking-wider">
          {Abbreviation.toUpperCase()}://
        </span>
        <span className="text-charcoal-light font-bold text-xxs lg:text-xs">
          {Text.toUpperCase()}
        </span>
        <span className="text-charcoal-light font-courier text-xs lg:text-sm tracking-wider">
          {Link.toLowerCase()}
        </span>
        <MoveUpRight className="ml-auto w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]" />
      </div>
    </div>
  );
}

export default ConnectSection;
