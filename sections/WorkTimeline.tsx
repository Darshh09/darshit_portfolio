'use client';

import { useMemo } from 'react';
import {
  IconBriefcase2,
  IconBuildingSkyscraper,
  IconUserCog,
  IconSchool,
} from '@tabler/icons-react';

/** ----------------------------- Types ---------------------------------- */
export type WorkItem = {
  id: string;
  label: string;       // Company or track (e.g., "Quantel AI", "Freelance")
  role?: string;       // Optional smaller subtitle
  start: string;       // e.g. "Jun/21"
  end: string;         // e.g. "Now" | "Aug/25"
  icon?: React.ReactNode;
};

/** ---------------------- Demo data (edit me) ---------------------------- */
export const DEFAULT_ITEMS: WorkItem[] = [
  {
    id: 'quantel',
    label: 'Quantel AI',
    role: 'Senior Software Engineer',
    start: 'Jun/21',
    end: 'Now',
    icon: <IconBuildingSkyscraper size={18} />,
  },
  {
    id: 'brotherhood',
    label: 'BrotherhoodBytes',
    role: 'Co-founder',
    start: '2023',
    end: 'Now',
    icon: <IconBriefcase2 size={18} />,
  },
  {
    id: 'freelance',
    label: 'Freelance',
    role: 'Full-Stack Developer',
    start: 'Jan/23',
    end: 'Jan/25',
    icon: <IconUserCog size={18} />,
  },
  {
    id: 'grad',
    label: 'Graduation',
    role: undefined,
    start: 'Aug/19',
    end: 'Sep/23',
    icon: <IconSchool size={18} />,
  },
];

/** --------------------------- Component --------------------------------- */
type Props = {
  items?: WorkItem[];
  currentId?: string; // which item is “active/Now”
  onAllClick?: () => void;
};

export default function WorkTimeline({
  items = DEFAULT_ITEMS,
  currentId,
  onAllClick,
}: Props) {
  const activeIndex = useMemo(
    () => Math.max(0, items.findIndex((i) => (currentId ? i.id === currentId : i.end.toLowerCase() === 'now'))),
    [items, currentId]
  );

  return (
    <section aria-label="Work Timeline" className="relative w-full">
      {/* Title row: right-aligned “ALL »” */}
      <div className="mb-3 flex items-center justify-end">
        <button
          onClick={onAllClick}
          className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200"
        >
          <span>ALL</span>
          <span className="transition-transform group-hover:translate-x-1">»</span>
        </button>
      </div>

      {/* Rail */}
      <div className="relative mb-6 h-6">
        {/* base rail */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded bg-white/10" />
        {/* progress rail up to active */}
        <div
          className="absolute top-1/2 h-[2px] -translate-y-1/2 rounded bg-white/40"
          style={{
            left: 0,
            right:
              items.length > 1
                ? `${((items.length - 1 - activeIndex) / (items.length - 1)) * 100}%`
                : '0%',
          }}
        />
        {/* dots */}
        <div className="relative flex w-full justify-between">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={item.id} className="relative flex h-6 w-6 items-center justify-center">
                {/* outer hit area */}
                <div className="pointer-events-none absolute inset-0" />
                {/* dot */}
                <span
                  className={[
                    'inline-block h-[10px] w-[10px] rounded-full',
                    isActive ? 'bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.15)] animate-[blink_1.2s_ease-in-out_infinite]' : 'bg-white/25',
                  ].join(' ')}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <article
              key={item.id}
              className={[
                'rounded-xl border p-4 backdrop-blur',
                'border-white/10 bg-white/[0.04]',
                'transition hover:border-white/20 hover:bg-white/[0.06]',
                isActive ? 'ring-1 ring-white/15' : '',
              ].join(' ')}
            >
              <div className="mb-2 flex items-center gap-3">
                {/* icon bubble */}
                <span
                  className={[
                    'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                    'border-white/10 bg-white/[0.06] text-neutral-200',
                  ].join(' ')}
                >
                  {item.icon ?? <IconBriefcase2 size={18} />}
                </span>

                <div className="min-w-0">
                  <h3 className="truncate text-[15px] font-semibold text-white">{item.label}</h3>
                  {item.role ? (
                    <p className="truncate text-xs text-neutral-400">{item.role}</p>
                  ) : null}
                </div>
              </div>

              {/* dates */}
              <p className="mt-3 font-mono text-sm tracking-wide text-neutral-400">
                {item.start} <span className="mx-1">-</span>{' '}
                <span className={item.end.toLowerCase() === 'now' ? 'text-neutral-100' : ''}>
                  {item.end}
                </span>
              </p>
            </article>
          );
        })}
      </div>

      {/* Local keyframes for the blinking active dot */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.25); }
          50% { opacity: 0.55; box-shadow: 0 0 0 6px rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}
