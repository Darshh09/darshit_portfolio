import { HEATMAP, HEATMAP_COLS, HEATMAP_ROWS } from '@/lib/data';

export default function Contributions() {
  return (
    <section className="mt-6">
      <div className="text-[11px] text-white/40">Sep</div>

      <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-4">
        <div className="grid gap-[4px]" style={{ gridTemplateRows: `repeat(${HEATMAP_ROWS}, 10px)` }}>
          {HEATMAP.map((row, r) => (
            <div key={r} className="grid gap-[4px]" style={{ gridTemplateColumns: `repeat(${HEATMAP_COLS}, 10px)` }}>
              {row.map((v, c) => (
                <span
                  key={`${r}-${c}`}
                  className="inline-block rounded-[3px]"
                  style={{
                    background:
                      v === 0
                        ? 'rgba(255,255,255,.06)'
                        : v === 1
                        ? '#2a3a46'
                        : v === 2
                        ? '#355062'
                        : '#3f6c85',
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-3 text-[11px] text-white/40">
          Total {Math.round(2839)} contributions in lifetime
        </div>
      </div>

      {/* Timeline slider + labels (static UI for now) */}
      <div className="mt-6">
        <input type="range" className="w-full accent-cyan-400" />
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <Badge label="Axiom" active />
          <Badge label="Sellhub" />
          <Badge label="Freelance" />
          <Badge label="Graduation" />
          <span className="ml-auto text-[11px] text-white/40">ALL ↗</span>
        </div>
      </div>
      <div className="mb-16"></div>
    </section>
  );
}

function Badge({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`card inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs ${
        active ? 'ring-1 ring-cyan-400/30' : ''
      }`}
    >
      <span className={`size-2 rounded-full ${active ? 'bg-cyan-400' : 'bg-white/30'}`} />
      <span className="text-white/80">{label}</span>
    </div>
  );
}
