function App() {
  return (
    <div className="w-full h-screen bg-cream micro-grid text-charcoal flex flex-col items-center">
      <header className="border-b border-charcoal/35 bg-cream-dark sticky top-0 z-50 w-full font-space tracking-wider">
        <div className="border-charcoal/10  border-b py-4 px-6 flex items-center justify-between text-xs text-charcoal-light ">
          <span>SYS.CLOCK :: 19.8.2026 // UTC-6</span>{" "}
          {/*TODO - Set to the actual date*/}
          <div className="flex gap-10 items-center">
            <span>SYS.ONLINE</span>
            <span>P(FILT) 45Pa</span>
            <span>VFD 19%</span>
            <span className="text-charcoal font-bold">CELLS • 19%</span>
            <span>PORT......3</span>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 text-sm px-6 font-bold text-charcoal">
          <div className="flex gap-2 items-center justify-between">
            {/*TODO - Add a figure */}
            <span>RUBEN AVALOS // PORTFOLIO v1.0</span>
          </div>
          <div className="flex gap-10 items-center">
            {/*TODO - Change to nav and buttons to set the scroll to id*/}
            <span>SUMMARY</span>
            <span>EXP</span>
            <span>TECH</span>
            <span>PROJ</span>
            <span>CONNECT</span>
          </div>
        </div>
      </header>
      <section className="w-[70vw] h-screen" id="summary">
        <div className="flex items-center justify-between text-xs font-space text-charcoal-faint py-10">
          <span>37°46'N / 122°25'W</span>
          <span>NODE.ID :: RA-0042 // SECTOR.7</span>
          <span>INIT.SEQ :: 0x1F4A</span>
        </div>
      </section>
    </div>
  );
}

export default App;
