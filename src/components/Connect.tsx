function Connect() {
  return (
    <section
      className="w-[90vw] md:w-[80vw] lg:w-[70vw] h-fit mt-4 pb-6"
      id="connect"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-2 w-2 bg-charcoal shrink-0" />
        <span className="font-courier text-xs sm:text-sm text-charcoal font-bold tracking-wider shrink-0">
          [ CONNECT ] // ENDPOINT.DIRECTORY
        </span>
        <div className="w-full border-b border-charcoal-faint/60" />
      </div>
      <div className="flex gap-2">
        <div className="p-6 w-1/2 border border-charcoal-faint/50 flex flex-col gap-2 ">
          <span className="text-xs md:text-xs font-space text-charcoal-faint">
            // TERMINAL.SESSION :: CONNECT_
          </span>
        </div>
      </div>
    </section>
  );
}

export default Connect;
