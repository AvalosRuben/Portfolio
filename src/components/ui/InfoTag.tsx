interface InfoTagProps {
  title: string;
  info: string;
}
function InfoTag({ title, info }: InfoTagProps) {
  return (
    <div className="flex flex-col font-space w-full border-b border-charcoal-faint/50 pb-2 pt-1">
      <span className="text-xxs sm:text-xs text-charcoal-faint mr-auto">
        {title}
      </span>
      <span className="text-xs sm:text-sm text-charcoal font-bold mr-auto">
        {info}
      </span>
    </div>
  );
}

export default InfoTag;
