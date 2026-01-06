'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface FlipSentencesProps {
  children: string[];
  className?: string;
  as?: React.ElementType;
  variants?: any;
  onIndexChange?: (index: number) => void;
}

export function FlipSentences({
  children,
  className,
  as: Component = 'span',
  variants,
  onIndexChange,
}: FlipSentencesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (children.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % children.length;
        if (onIndexChange) {
          onIndexChange(next);
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [children.length, onIndexChange]);

  if (children.length === 0) return null;

  return (
    <Component className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={variants?.initial || { y: -12, opacity: 0 }}
          animate={variants?.animate || { y: 0, opacity: 1 }}
          exit={variants?.exit || { y: 12, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </Component>
  );
}

