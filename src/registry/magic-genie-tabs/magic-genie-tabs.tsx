"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
  gradient?: string; // optional CSS gradient string for panel background
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = propTabs[activeIndex];

  const [stripHoverX, setStripHoverX] = useState<number | null>(null);

  const stripRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [genieOrigin, setGenieOrigin] = useState<{ x: number; y: number } | null>(
    null
  );
  const panelContainerRef = useRef<HTMLDivElement | null>(null);

  const [direction, setDirection] = useState<1 | -1>(1);

  const handleTabClick = (idx: number, e?: React.MouseEvent<HTMLButtonElement>) => {
    setDirection(idx > activeIndex ? 1 : -1);

    if (e && panelContainerRef.current) {
      const tabRect = e.currentTarget.getBoundingClientRect();
      const panelRect = panelContainerRef.current.getBoundingClientRect();
      const x = (tabRect.left + tabRect.right) / 2 - panelRect.left;
      const y = tabRect.bottom - panelRect.top;
      setGenieOrigin({ x, y });
    } else {
      setGenieOrigin(null);
    }

    setActiveIndex(idx);
  };

  const handleStripMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stripRef.current) return;
    const rect = stripRef.current.getBoundingClientRect();
    setStripHoverX(e.clientX - rect.left);
  };

  const handleStripMouseLeave = () => {
    setStripHoverX(null);
  };

  return (
    <div className={cn("w-full flex flex-col gap-4", containerClassName)}>
      {/* Top tab strip – sleek & minimal */}
      <div
        ref={stripRef}
        onMouseMove={handleStripMouseMove}
        onMouseLeave={handleStripMouseLeave}
        className={cn(
          "flex flex-row items-center justify-start gap-1",
          "max-w-full w-full overflow-x-auto no-visible-scrollbar",
          "px-2 py-1.5 rounded-2xl",
          "backdrop-blur-xl"
        )}
      >
        {propTabs.map((tab, idx) => {
          const isActive = idx === activeIndex;

          // very subtle dock-like magnification
          let tabScale = 1;
          let tabOffsetY = 0;

          if (stripHoverX != null && stripRef.current && buttonRefs.current[idx]) {
            const btn = buttonRefs.current[idx]!;
            const centerX = btn.offsetLeft + btn.offsetWidth / 2;
            const distance = Math.abs(stripHoverX - centerX);
            const maxInfluence = 130;

            const t = Math.max(0, 1 - distance / maxInfluence);
            const maxScale = 1.15;
            const minScale = 0.98;
            tabScale = minScale + t * (maxScale - minScale);
            tabOffsetY = -4 * t;
          } else if (isActive) {
            tabScale = 1.05;
            tabOffsetY = -2;
          }

          return (
            <motion.button
              key={tab.value}
              ref={(el) => {
                buttonRefs.current[idx] = el;
              }}
              onClick={(e) => handleTabClick(idx, e)}
              type="button"
              className={cn(
                "relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap",
                "transition-colors",
                tabClassName
              )}
              style={{ transformOrigin: "50% 50%" }}
              animate={{
                scale: tabScale,
                y: tabOffsetY,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                mass: 0.4,
              }}
            >
              {/* Active pill – only active tab has background */}
              {isActive && (
                <motion.div
                  layoutId="tabs-active-pill"
                  className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-muted dark:bg-muted",
                    "border border-border/50 dark:border-border/50",
                    activeTabClassName
                  )}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.4,
                  }}
                />
              )}

              <span
                className={cn(
                  "relative z-10 font-semibold",
                  isActive
                    ? "text-foreground dark:text-foreground"
                    : "text-foreground/70 dark:text-foreground/70"
                )}
              >
                {tab.title}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Panel with genie effect */}
      <div
        ref={panelContainerRef}
        className={cn("relative w-full", contentClassName)}
      >
        <AnimatePresence mode="wait">
          {propTabs.map((tab, idx) => {
            const isActive = idx === activeIndex;
            if (!isActive) return null;

            const fallbackGradient =
              "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.25) 0%, rgba(168, 85, 247, 0.15) 30%, rgba(192, 132, 252, 0.1) 60%, transparent 100%)";

            return (
              <div
                key={tab.value}
                className="relative w-full rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20"
              >
                <motion.div
                  initial={
                    genieOrigin
                      ? {
                          opacity: 0,
                          scaleY: 0.02,
                          scaleX: 0.9,
                          y: 120,
                          clipPath: "inset(98% 25% 0% 25% round 20px)",
                        }
                      : {
                          opacity: 0,
                          scaleY: 0.98,
                          scaleX: 0.99,
                          y: 12,
                          clipPath: "inset(12% 4% 0% 4% round 20px)",
                        }
                  }
                  animate={{
                    opacity: 1,
                    scaleY: 1,
                    scaleX: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0% round 20px)",
                  }}
                  exit={{
                    opacity: 0,
                    scaleY: 0.02,
                    scaleX: 0.9,
                    y: 120,
                    clipPath: "inset(98% 25% 0% 25% round 20px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{
                    transformOrigin: genieOrigin
                      ? `${genieOrigin.x}px ${genieOrigin.y}px`
                      : "50% 0%",
                    willChange: "transform, clip-path",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  className={cn(
                    "w-full h-full rounded-2xl overflow-hidden",
                    "bg-card dark:bg-card",
                    "relative",
                    "transform-gpu"
                  )}
                >

                {/* Gradient/Background layer */}
                {(() => {
                  const isCssGradient = tab.gradient && (
                    tab.gradient.includes("gradient") ||
                    tab.gradient.includes("rgb") ||
                    tab.gradient.includes("rgba") ||
                    tab.gradient.startsWith("#") ||
                    tab.gradient.startsWith("hsl") ||
                    tab.gradient.startsWith("hsla")
                  );

                  return (
                    <motion.div
                      className={cn(
                        "absolute inset-0 pointer-events-none",
                        // If gradient is a Tailwind class, apply it here
                        !isCssGradient && tab.gradient ? tab.gradient : ""
                      )}
                      style={{
                        // If gradient is a CSS gradient/color string, use it as backgroundImage
                        backgroundImage: isCssGradient
                          ? tab.gradient
                          : !tab.gradient
                          ? fallbackGradient
                          : undefined,
                      }}
                      animate={{
                        opacity: [0.5, 0.7, 0.5],
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })()}

                {/* Content */}
                <motion.div
                  className="relative z-10 w-full h-full max-h-[26rem] sm:max-h-[30rem] overflow-y-auto overflow-x-hidden
                             [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent
                             [&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-thumb]:rounded
                             [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/50
                             scrollbar-thin"
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.8, 0.4, 1],
                  }}
                >
                  <div className="p-4 sm:p-5 md:p-6 text-sm sm:text-base text-foreground dark:text-foreground leading-relaxed">
                    {tab.content}
                  </div>
                </motion.div>
                </motion.div>
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
