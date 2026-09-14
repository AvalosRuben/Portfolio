function TechStack() {
  return (
    <section
      className="w-[90vw] md:w-[80vw] lg:w-[70vw] h-fit mt-4 pb-6"
      id="TechStack"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-2 w-2 bg-charcoal shrink-0" />
        <span className="font-courier text-xs sm:text-sm text-charcoal font-bold tracking-wider shrink-0">
          [ TECH_STACK ] // CAPABILITY.MATRIX
        </span>
        <div className="w-full border-b border-charcoal-faint/60" />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <span className="mr-auto text-charcoal-faint/80 text-xxs md:text-xs font-space">
          //STACK.CATALOG
        </span>
      </div>
    </section>
  );
}

export default TechStack;
