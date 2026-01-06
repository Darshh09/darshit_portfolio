'use client';

import { cn } from '@/lib/utils';

interface MDXProps {
  code: string;
  className?: string;
}

export function MDX({ code, className }: MDXProps) {
  // Simple MDX renderer - just render the code as preformatted text
  // For a full implementation, you'd use a proper MDX parser
  return (
    <div className={cn('overflow-auto', className)}>
      <pre className="p-4 rounded-lg bg-code border border-white/10">
        <code className="font-mono text-sm text-neutral-300 whitespace-pre-wrap">
          {code}
        </code>
      </pre>
    </div>
  );
}

