import { useState, useEffect } from "react";

function TopBar() {
  const [clockString, setClockString] = useState(
    "SYS.CLOCK :: --.--.---- // UTC...",
  );

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();

      const offsetHours = -(now.getTimezoneOffset() / 60);
      const offsetSign = offsetHours >= 0 ? "+" : "";

      setClockString(
        `SYS.CLOCK :: ${day}.${month}.${year} // UTC${offsetSign}${offsetHours}`,
      );
    };

    updateDate();

    const timer = setInterval(updateDate, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <header className="border-b border-charcoal/35 bg-cream-dark sticky top-0 z-50 w-full font-space tracking-wider text-xxs sm:text-sm">
      <div className="hidden border-charcoal/10  border-b py-4 px-6 sm:flex items-center justify-between text-charcoal-light sm:text-xxs">
        <span>{clockString}</span>
        <div className="flex gap-10 items-center">
          <span>SYS.ONLINE</span>
          <span>P(FILT) 45Pa</span>
          <span>VFD 19%</span>
          <span className="text-charcoal font-bold">CELLS • 19%</span>
          <span>PORT......3</span>
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-between py-3 px-6 font-bold text-charcoal">
        <div className="hidden sm:flex gap-2 items-center justify-between">
          <span>RUBEN AVALOS // PORTFOLIO v1.0</span>
        </div>
        <nav className="flex gap-10 items-center">
          <a href="#summary">SUMMARY</a>
          <a href="#projects">PROJ</a>
          <a href="#experience">EXP</a>
          <a href="#tech">TECH</a>
          <a href="#connect">CONNNECT</a>
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
