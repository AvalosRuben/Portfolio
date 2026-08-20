function App() {
  return (
    <div className="w-full h-screen bg-cream micro-grid text-charcoal flex flex-col">
      <header className="border-b border-charcoal bg-cream-dark sticky top-0 z-50 w-full">
        <div className="border-charcoal border-b py-4 px-6 flex items-center justify-between text-xs text-charcoal-light font-mono">
          <span>SYS.CLOCK :: 19.8.2026 // UTC-6</span>
          <div className="flex gap-10 items-center">
            <span>SYS.ONLINE</span>
            <span>P(FILT) 45Pa</span>
            <span>VFD 19%</span>
            <span className="text-charcoal font-bold">CELLS • 19%</span>
            <span>PORT......3</span>
          </div>
        </div>
      </header>
      Hello World!
      <p className="text-3xl">This is my portfolio</p>
    </div>
  );
}

export default App;
