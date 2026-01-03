'use client';

import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';

export function NavigationDock() {
  return <FloatingDock items={navigationLinks} />;
}

