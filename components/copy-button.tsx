'use client';

import { useState } from 'react';
import { IconCopy, IconClipboard } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  className?: string;
  getValue: () => string;
  event?: string;
}

export function CopyButton({ className, getValue, event }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = getValue();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80',
        className
      )}
    >
      {copied ? (
        <IconClipboard className="size-3 text-green-400" />
      ) : (
        <IconCopy className="size-3 text-neutral-400" />
      )}
      <span className="sr-only">Copy</span>
    </button>
  );
}

