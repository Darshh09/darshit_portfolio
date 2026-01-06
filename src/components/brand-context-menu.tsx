'use client';

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { copyText } from '@/utils/copy';

import { DarshitMark, getMarkSVG } from './darshit-mark';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './ui/context-menu';

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === 'light' ? '#000' : '#fff');
            copyText(svg);
            toast.success('Copied Mark as SVG');
          }}
        >
          <DarshitMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <Link href="/arts">
            <TriangleDashedIcon />
            Components
          </Link>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

