import DataStream from "./ui/DataStream";
import InfoTag from "./ui/InfoTag";

function Hero() {
  return (
    <div className="w-full h-fit pb-10 flex flex-col items-center">
      <section className="w-[70vw] h-fit" id="summary">
        <div className="flex items-center justify-between text-xs font-space text-charcoal-faint py-10">
          <span>37°46'N / 122°25'W</span>
          <span>NODE.ID :: RA-0042 // SECTOR.7</span>
          <span>INIT.SEQ :: 0x1F4A</span>
        </div>
        <div className="flex gap-10 w-full">
          <div className="flex flex-col gap-8 w-1/4 items-center">
            <div className="border border-charcoal/60 relative">
              <div className="absolute -top-px -left-px border-t-8 border-l-8 border-r-8 border-b-8 border-t-charcoal/60 border-l-charcoal/60 border-r-transparent border-b-transparent" />
              <div className="absolute -top-px -right-px border-t-8 border-l-8 border-r-8 border-b-8 border-t-charcoal/60 border-r-charcoal/60 border-l-transparent border-b-transparent" />
              <div className="absolute -bottom-px -left-px border-t-8 border-l-8 border-r-8 border-b-8 border-b-charcoal/60 border-l-charcoal/60 border-r-transparent border-t-transparent" />
              <div className="absolute -bottom-px -right-px border-t-8 border-l-8 border-r-8 border-b-8 border-b-charcoal/60 border-r-charcoal/60 border-l-transparent border-t-transparent" />

              <img
                src="yo.jpeg"
                alt="Profile"
                className="w-full h-auto block"
              />
            </div>
            <div className="w-full border border-charcoal-faint/70 flex flex-col items-center text-xs font-space text-charcoal-faint p-2">
              <span className="mr-auto ml-1">SYS.STATUS</span>
              <div className="flex  px-1 w-full justify-between">
                <span>AVAIL -- </span>
                <span className="font-bold text-charcoal">IMMEDIATE</span>
              </div>
              <div className="flex  px-1 w-full justify-between">
                <span>MODE -- </span>
                <span className="font-bold text-charcoal">PART TIME</span>
              </div>
              <div className="flex  px-1 w-full justify-between">
                <span>TZ -- </span>
                <span className="font-bold text-charcoal">UTC - 6 </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-1/2">
            <span className="text-charcoal-faint text-xs font-space mr-auto">
              [ IDENT.RECORD :: RA-0042 ]
            </span>
            <div className="flex flex-col text-6xl font-space font-bold text-charcoal border-b border-charcoal w-full pb-6">
              <span>RUBEN</span>
              <span>AVALOS</span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex gap-2 items-center justify-between">
                <InfoTag title="TITLE" info="SOFTWARE DEV JR" />
                <InfoTag title="LOCATION" info="MERIDA, YUC" />
              </div>
              <div className="flex gap-2 items-center justify-between">
                <InfoTag title="SPEC" info="BACKEND " />
                <InfoTag title="EXP" info="6 months" />
              </div>
              <div className="flex gap-2 items-center justify-between">
                <InfoTag title="STATUS" info="OPEN TO OFFERS" />
                <InfoTag title="LANG" info="ENG // ESP" />
              </div>
            </div>
            <div className="w-full border border-charcoal-faint/70 flex flex-col items-center text-xs font-space text-charcoal-faint p-2">
              <span className="mr-auto ml-1">// EXEC.SUMMARY</span>
              {/* TODO - i got hopes that i'll write something better */}
              <p className="text-left w-full">
                Junior Full Stack engineer, looking to start my career. I'm a
                fast learner always looking for new challenges to keep growing.
                I got a great sense of team work and love the golang gopher.
              </p>
            </div>
          </div>
          <div className="w-fit">
            <DataStream />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
