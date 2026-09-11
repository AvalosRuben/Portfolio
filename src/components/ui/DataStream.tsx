const DATA_LINES = [
  "LRXR.IRP.942.MHI.QME",
  "VPSR.CVE.962.ICQ.MCI",
  "UMOR.LTL.083.CWS.UEH",
  "KJKG.NIT.250.ETF.BLZ",
  "WRCC.ENV.185.MRA.PBA",
  "AABM.IRA.412.QZZ.JUY",
  "EPHG.EBM.105.XUH.RBR",
  "SPRP.VYU.127.GNM.QKA",
  "JHRF.FGJ.557.ASU.AXQ",
  "CGNJ.LWE.888.DGK.DPK",
  "OGUL.XDG.042.EJB.LXV",
  "ZOWA.NHM.222.NDZ.OEL",
  "GEBE.DYB.717.BOV.RBG",
  "UTBW.OEV.366.FXX.DHN",
  "QDBP.VLY.582.MOS.LBW",
  "NUSP.JFE.111.OQL.VJS",
];

function DataStream({ label = "DATA.STREAM ↓", lines = DATA_LINES }) {
  return (
    <div className="relative h-[480px] overflow-hidden font-space">
      <style>{`
        @keyframes streamScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-data-stream {
          animation: streamScroll 12s linear infinite;
        }
      `}</style>

      {/* Header Label */}
      <div className="mb-2 text-[8px] tracking-[0.2em] text-charcoal-faint">
        {label}
      </div>

      {/* Ticker Window */}
      <div className="relative h-[calc(100%-20px)] overflow-hidden">
        {/* Animated Text Block */}
        <div className="animate-data-stream text-[8px] leading-[1.9] tracking-[0.05em] text-charcoal-light">
          {[...lines, ...lines].map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        {/* Top Fade Gradient */}
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-10 bg-gradient-to-b from-cream to-transparent" />

        {/* Bottom Fade Gradient */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-t from-cream to-transparent" />
      </div>
    </div>
  );
}

export default DataStream;
