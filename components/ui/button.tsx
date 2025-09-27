'use client';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
};

export function Button({ children, href, onClick, icon, className, variant = 'ghost' }: Props) {
  const base =
    'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-colors';
  const style =
    variant === 'primary'
      ? 'bg-white/10 hover:bg-white/15 border border-white/10'
      : 'bg-white/5 hover:bg-white/10 border border-white/10';

  if (href) {
    return (
      <Link href={href} className={cn(base, style, className)}>
        {icon}{children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cn(base, style, className)}>
      {icon}{children}
    </button>
  );
}
