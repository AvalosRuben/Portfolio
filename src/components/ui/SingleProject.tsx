function SingleProject() {
  return (
    <div className="group relative w-full flex flex-col border border-charcoal-faint items-center ">
      <div className="absolute inset-0 bg-charcoal/7 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
      <div className="w-full h-40 border-b border-charcoal">
        <img
          src="MariaYMontejoBanner.png"
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="w-full h-40 bg-cream-dark/40 flex flex-col p-6 gap-4">
        <div className="flex justify-between">
          <span className="font-space text-sm font-bold text-charcoal">
            MARIA Y MONTEJO PÁGINA
          </span>
          <span className="font-courier px-1 pt-1 border border-charcoal text-xs">
            [Deployed]
          </span>
        </div>
        <span className="font-courier text-xs text-charcoal-light">
          Responsive static web page with a modern and elegant design of my
          favourite coffee shop. Designed and coded by myself. Deployed on a
          free vercel plan.
        </span>
        <div className="flex items-center gap-2 text-xs font-courier text-charcoal-faint">
          <span>TypeScript</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Vercel</span>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
