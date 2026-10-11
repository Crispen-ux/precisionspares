import Image from "next/image";

const SPEC: [string, string][] = [
  ["Model", "BP-01 burner control panel (basic version)"],
  ["Supply / control", "230 VAC supply, 24 VDC control"],
  ["Temperature controller", "Delta DTB4848CR digital PID with dual PV / SV display"],
  ["Indicators", "Power (green), burner run (green), fault (red)"],
  ["Controls", "Start and stop push buttons, emergency stop (twist to release)"],
  ["Enclosure", "400 x 600 x 250 mm, IP65, powder-coated steel, wall mounted"],
  ["Door", "Key lock and handle"],
  ["Cable entry", "Five cable glands, pre-punched and fitted"],
];

export function Bp01Showcase() {
  return (
    <section className="bg-panel py-14 md:py-20" aria-labelledby="bp01-h">
      <div className="container-x">
        <p className="font-mono text-sm font-semibold text-steel">Version 1</p>
        <h2 id="bp01-h" className="mt-1 max-w-2xl text-3xl sm:text-4xl">
          BP-01 burner control panel
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-2">
          The basic version: a temperature controller with start, stop and emergency stop in a lockable IP65 enclosure. Images are renders of the design.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
          <Image
            src="/images/bp-01/bp-01-overview.png"
            alt="BP-01 burner control panel: front, side and back views with temperature controller, indicator lamps, start and stop buttons and emergency stop"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl">Specification</h3>
            <dl className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white">
              {SPEC.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-steel">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-steel">
              Details can change to suit your burner. Confirm the specification with us when you request a quote.
            </p>
          </div>

          <div>
            <h3 className="text-2xl">Turn it around</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white">
              <iframe
                src="/bp-01-3d.html"
                title="Interactive 3D view of the BP-01 burner control panel"
                loading="lazy"
                className="h-[420px] w-full border-0 sm:h-[480px]"
              />
            </div>
            <p className="mt-3 text-sm text-steel">Drag to rotate, scroll or pinch to zoom.</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
          <Image
            src="/images/bp-01/bp-01-drawing.png"
            alt="BP-01 general arrangement drawing with dimensions, front panel cut-outs and parts list"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
