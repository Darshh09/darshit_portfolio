'use client';

import { useState, useEffect } from 'react';

export type PackageManager = 'pnpm' | 'yarn' | 'npm' | 'bun';

interface Config {
  packageManager?: PackageManager;
}

export function useConfig(): [Config, (updater: (prev: Config) => Config) => void] {
  const [config, setConfigState] = useState<Config>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('config');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return { packageManager: 'pnpm' };
        }
      }
    }
    return { packageManager: 'pnpm' };
  });

  const setConfig = (updater: (prev: Config) => Config) => {
    setConfigState((prev) => {
      const next = updater(prev);
      if (typeof window !== 'undefined') {
        localStorage.setItem('config', JSON.stringify(next));
      }
      return next;
    });
  };

  return [config, setConfig];
}

