'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  parts: Array<{ text: string; wrapInSpan?: boolean }>;
  speed?: number;
  className?: string;
}

export function TypewriterText({
  parts,
  speed = 50,
  className,
}: TypewriterTextProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  // Calculate total length and part boundaries
  const totalLength = parts.reduce((sum, part) => sum + part.text.length, 0);
  const partBoundaries: number[] = [];
  let currentBoundary = 0;
  parts.forEach((part) => {
    currentBoundary += part.text.length;
    partBoundaries.push(currentBoundary);
  });

  useEffect(() => {
    setDisplayedLength(0);
    setShowCursor(true);
    setIsTyping(true);

    let currentLength = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentLength < totalLength) {
        currentLength++;
        setDisplayedLength(currentLength);
        setIsTyping(true);
        timeoutId = setTimeout(typeNextChar, speed);
      } else {
        // Finished typing, wait a bit then start deleting
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          deleteNextChar();
        }, 2000); // Wait 2 seconds before deleting
      }
    };

    const deleteNextChar = () => {
      if (currentLength > 0) {
        currentLength--;
        setDisplayedLength(currentLength);
        setIsTyping(false);
        timeoutId = setTimeout(deleteNextChar, speed);
      } else {
        // Finished deleting, wait a bit then start typing again
        setIsTyping(true);
        timeoutId = setTimeout(() => {
          typeNextChar();
        }, 500); // Wait 0.5 seconds before typing again
      }
    };

    // Start typing
    timeoutId = setTimeout(typeNextChar, speed);

    return () => clearTimeout(timeoutId);
  }, [parts, speed, totalLength]);

  // Render text with proper wrapping
  let currentIndex = 0;
  const renderedParts: React.ReactNode[] = [];

  parts.forEach((part, partIndex) => {
    const partStart = currentIndex;
    const partEnd = currentIndex + part.text.length;
    const isPartVisible = displayedLength > partStart;
    const visibleLength = Math.min(displayedLength - partStart, part.text.length);

    if (isPartVisible && visibleLength > 0) {
      const visibleText = part.text.slice(0, visibleLength);
      const isPartComplete = displayedLength >= partEnd;

      if (part.wrapInSpan) {
        // For light mode, show the original text
        renderedParts.push(
          <span key={partIndex} className="inline dark:hidden">
            {visibleText}
          </span>
        );
        // For dark mode, replace "text-zinc-950" with "text-zinc-50"
        const darkModeText = visibleText.replace('text-zinc-950', 'text-zinc-50');
        renderedParts.push(
          <span key={`${partIndex}-dark`} className="hidden dark:inline">
            {darkModeText}
          </span>
        );
      } else {
        renderedParts.push(<span key={partIndex}>{visibleText}</span>);
      }
    }

    currentIndex = partEnd;
  });

  return (
    <span className={className}>
      {renderedParts}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="inline-block w-0.5 h-3.5 bg-current ml-0.5 align-middle"
        />
      )}
    </span>
  );
}
