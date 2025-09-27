import { cn } from '@/lib/cn';

export default function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/80', className)}>
      {children}
    </span>
  );
}
