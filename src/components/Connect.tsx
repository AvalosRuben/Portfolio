import ConnectSection, { type ConnectSectionProps } from "./ui/ConnectSection";

const ConnectInfo: ConnectSectionProps[] = [
  {
    Abbreviation: "GH",
    Text: "Github",
    Link: "github.com/AvalosRuben",
  },
  {
    Abbreviation: "LI",
    Text: "Linkedin",
    Link: "linkedin.com/in/ruben-avalos-martinez-04154030b/",
  },
  {
    Abbreviation: "MA",
    Text: "Email",
    Link: "rubenavalosmtz@gmail.com",
  },
];

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
        <div className="p-6 w-full lg:w-1/2 border border-charcoal-faint/50 flex flex-col gap-2 ">
          <span className="text-xs md:text-xs font-space text-charcoal-faint">
            // TERMINAL.SESSION :: CONNECT_
          </span>
          {ConnectInfo.map((c) => (
            <ConnectSection
              Abbreviation={c.Abbreviation}
              Text={c.Text}
              Link={c.Link}
            />
          ))}
          <div className="flex gap-2 items-center justify-center mr-auto mt-2">
            <span className="text-xs lg:text-sm font-space text-charcoal-faint tracking-widest ">
              &gt; CONNECT_
            </span>
            <span className="inline-block w-2 h-3.5 bg-charcoal-faint cursor-blink" />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col gap-2 p-6 w-1/2 border border-charcoal-faint/50 h-fit">
          <span className="text-xs md:text-xs font-space text-charcoal-faint">
            // SYS.INFO
          </span>
          <div className="flex items-center justify-between">
            <span className="text-xs font-space text-charcoal-faint">
              UNIT.ID
            </span>
            <span className="text-xs font-space text-charcoal">
              RA-3008-NA03
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-space text-charcoal-faint">
              BUILD.VER
            </span>
            <span className="text-xs font-space text-charcoal">
              v1.0.0 - stable
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-space text-charcoal-faint">
              LAST.DEPLOY
            </span>
            <span className="text-xs font-space text-charcoal">09.2026</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-space text-charcoal-faint">
              KERNEL
            </span>
            <span className="text-xs font-space text-charcoal">ARC.3.3</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
