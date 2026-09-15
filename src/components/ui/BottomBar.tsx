function BottomBar() {
  return (
    <div className="flex lg:justify-between justify-center w-full border-t border-charcoal/35 bg-cream-dark font-space text-xxs px-10 text-charcoal-faint">
      <span className="text-[7px] md:text-xxs">
        RUBEN AVALOS // PORTFOLIO v1.0 // ALL RIGHTS RESERVED 2026
      </span>
      <span className="hidden lg:block">
        BUILT.WITH :: REACT + VITE + TAILWIND
      </span>
      <div className=" gap-2 items-center hidden lg:flex">
        <span>SYS.ONLINE</span>
        <span className="inline-block w-1.5 h-2.5 bg-charcoal-faint cursor-blink" />
      </div>
    </div>
  );
}

export default BottomBar;
