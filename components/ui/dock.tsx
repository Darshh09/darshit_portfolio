import { Home, Briefcase, Brush, Cog, BookOpen } from 'lucide-react';
import { cn } from '@/lib/cn';

const items = [
  { icon: Home, label: 'Home' },
  { icon: Briefcase, label: 'Work' },
  { icon: Brush, label: 'Arts' },
  { icon: Cog, label: 'Skills' },
  { icon: BookOpen, label: 'Blog' },
];

export default function Dock() {
  return (
    <div className="pointer-events-auto sticky bottom-6 mx-auto mt-8 w-fit">
      <div className="card flex items-center gap-6 rounded-2xl px-6 py-3 backdrop-blur">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className={cn(
              'group relative grid place-items-center rounded-xl p-2 text-white/70 hover:text-white'
            )}
          >
            <Icon size={18} />
            <span className="absolute -bottom-7 text-xs text-white/60 opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
