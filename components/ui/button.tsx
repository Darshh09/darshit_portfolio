'use client';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost' | 'secondary' | 'outline';
  size?: 'icon-sm' | 'default' | 'sm';
  target?: string;
  rel?: string;
  asChild?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  icon,
  className,
  variant = 'ghost',
  size = 'default',
  target,
  rel,
  asChild,
}: Props) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl text-sm transition-colors',
    size === 'icon-sm' ? 'p-2' : size === 'sm' ? 'px-3 py-1.5' : 'px-4 py-2'
  );
  const style =
    variant === 'primary'
      ? 'bg-white/10 hover:bg-white/15 border border-white/10'
      : variant === 'secondary'
        ? 'bg-white/5 hover:bg-white/10 border border-white/10'
        : variant === 'outline'
          ? 'bg-transparent hover:bg-white/5 border border-white/10'
          : 'bg-white/5 hover:bg-white/10 border border-white/10';

  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as { className?: string };
    return React.cloneElement(children, {
      className: cn(base, style, className, childProps.className),
    } as any);
  }

  if (href) {
    return (
      <Link href={href} className={cn(base, style, className)} target={target} rel={rel}>
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
