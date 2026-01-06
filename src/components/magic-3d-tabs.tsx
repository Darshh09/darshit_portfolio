"use client";

import React, { useEffect, useId, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from '@/lib/utils';

export interface MagicTabItem {
  label: string;
  title?: string;
  description?: string;
  content?: string | React.ReactNode;
  gradient?: string;
  previewImage?: string;
}

interface Magic3DTabsProps {
  tabs: MagicTabItem[];
  containerClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  contentClassName?: string;
  defaultTab?: number;
}

export function Magic3DTabs({
  tabs,
  containerClassName,
  tabClassName,
  activeTabClassName,
  contentClassName,
  defaultTab = 0,
}: Magic3DTabsProps) {
  const generatedId = useId();
  const safeTabs = useMemo(() => tabs.filter(Boolean), [tabs]);
  const [activeTab, setActiveTab] = useState<MagicTabItem | null>(
    safeTabs[defaultTab] ?? safeTabs[0] ?? null
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);

  const getTabDomId = (label: string) =>
    `${generatedId}-tab-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const getPanelDomId = (label: string) =>
    `${generatedId}-panel-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  useEffect(() => {
    if (!activeTab || !safeTabs.some((tab) => tab.label === activeTab.label)) {
      setActiveTab(safeTabs[0] ?? null);
    }
  }, [activeTab, safeTabs]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  if (!safeTabs.length || !activeTab) return null;

  const activeIndex = safeTabs.findIndex((tab) => tab.label === activeTab.label);

  return (
    <section
      className={cn(
        "w-full max-w-7xl mx-auto px-4 py-6 sm:px-6  lg:px-8",
        containerClassName
      )}
      aria-label="Magic 3D Tabbed content"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Unique Tab Navigation with 3D Effect */}
        <div className="w-full overflow-x-auto overflow-y-hidden  mb-8">
          <div
            className="flex min-w-max items-center gap-2 sm:gap-3 justify-center"
            role="tablist"
            aria-orientation="horizontal"
          >
            {safeTabs.map((tab, index) => {
              const isActive = activeTab.label === tab.label;
              const tabId = getTabDomId(tab.label);
              const panelId = getPanelDomId(tab.label);
              const distance = Math.abs(index - activeIndex);
              const scale = Math.max(0.85, 1 - distance * 0.1);
              const isHovered = hoveredTabIndex === index;

              return (
                <div key={tab.label} className="relative group">
                  <motion.button
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    onMouseEnter={() => setHoveredTabIndex(index)}
                    onMouseLeave={() => setHoveredTabIndex(null)}
                    className={cn(
                      "relative z-0 rounded-full cursor-pointer px-4 mt-2 py-2.5 text-sm font-medium transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-base",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                      tabClassName
                    )}
                    role="tab"
                    id={tabId}
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    animate={{
                      scale,
                      y: isActive ? -2 : 0,
                      opacity: distance > 2 ? 0.5 : 1,
                    }}
                    whileHover={{
                      scale: isActive ? 1.02 : 0.98,
                      y: isActive ? -3 : -1,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.4,
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="magic-3d-tabs-active-pill"
                        transition={{
                          type: "spring",
                          bounce: 0.3,
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        className={cn(
                          "absolute inset-0 rounded-full",
                          "bg-white/10 backdrop-blur-sm",
                          "border border-white/20",
                          "shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025]",
                          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/5 before:to-transparent",
                          activeTabClassName
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 whitespace-nowrap transition-colors",
                        isActive ? "text-white" : "text-neutral-400"
                      )}
                    >
                      {tab.title ?? tab.label}
                    </span>
                  </motion.button>

                  {/* Hover Preview */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-50 pointer-events-none"
                      >
                        <div
                          className="rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
                          style={{
                            background: "color-mix(in oklab, var(--color-card) 98%, black 2%)",
                            boxShadow: "var(--shadow-soft)",
                          }}
                        >
                          {tab.previewImage && (
                            <div className="relative h-32 bg-gradient-to-br from-purple-600/30 to-violet-600/30">
                              <div
                                className="absolute inset-0 bg-cover bg-center opacity-60"
                                style={{ backgroundImage: `url(${tab.previewImage})` }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                          )}
                          <div className="p-4">
                            <h4 className="text-white font-semibold text-sm mb-1">
                              {tab.title ?? tab.label}
                            </h4>
                            {tab.description && (
                              <p className="text-neutral-400 text-xs leading-relaxed">
                                {tab.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Magic 3D Content Container with Perspective */}
        <div
          className={cn(
            "w-full relative",
            "[perspective:1000px]",
            "h-[24rem] md:h-[32rem] lg:h-[40rem]"
          )}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="wait">
            {safeTabs.map((tab) => {
              const isActive = activeTab.label === tab.label;
              if (!isActive) return null;

              return (
                <motion.div
                  key={tab.label}
                  initial={{
                    opacity: 0,
                    rotateX: -20,
                    rotateY: 20,
                    scale: 0.8,
                    z: -100,
                  }}
                  animate={{
                    opacity: 1,
                    rotateX: mousePosition.y * 0.5,
                    rotateY: mousePosition.x * 0.5,
                    scale: 1,
                    z: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotateX: 20,
                    rotateY: -20,
                    scale: 0.8,
                    z: -100,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    background: tab.gradient || "color-mix(in oklab, var(--color-card) 96%, black 4%)",
                    border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: "var(--radius)",
                  }}
                  className={cn(
                    "w-full h-full rounded-2xl relative overflow-hidden",
                    contentClassName
                  )}
                  role="tabpanel"
                  id={getPanelDomId(tab.label)}
                  aria-labelledby={getTabDomId(tab.label)}
                >
                  {/* Dynamic Shadow Layer - Clean & Responsive */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: `
                        0 0 0 1px rgba(255,255,255,.06),
                        0 20px 50px rgba(0,0,0,.35),
                        ${mousePosition.x * 0.3}px 0 ${Math.abs(mousePosition.x) * 1.5}px rgba(0, 0, 0, ${0.15 + Math.abs(mousePosition.x) * 0.01}),
                        ${-mousePosition.x * 0.3}px 0 ${Math.abs(mousePosition.x) * 1.5}px rgba(0, 0, 0, ${0.15 + Math.abs(mousePosition.x) * 0.01}),
                        0 ${mousePosition.y * 0.3}px ${Math.abs(mousePosition.y) * 1.5}px rgba(0, 0, 0, ${0.1 + Math.abs(mousePosition.y) * 0.01}),
                        inset 0 1px 0 rgba(255,255,255,0.02),
                        inset 0 -1px 0 rgba(255,255,255,0.01)
                      `,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  />

                  {/* 3D Content Layers */}
                  <div className="relative w-full h-full p-4 sm:p-6 md:p-8">
                    {/* Animated Background Gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-40"
                      animate={{
                        background: [
                          `radial-gradient(circle at 0% 0%, rgba(181, 201, 255, 0.2), transparent 50%)`,
                          `radial-gradient(circle at 100% 100%, rgba(181, 201, 255, 0.2), transparent 50%)`,
                          `radial-gradient(circle at 0% 0%, rgba(181, 201, 255, 0.2), transparent 50%)`,
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Floating Particles Effect */}
                    <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
                      {[...Array(6)].map((_, i) => {
                        // Use deterministic pseudo-random based on index and tab label
                        // This ensures consistent values between server and client
                        const baseSeed = i * 1000 + (activeTab?.label?.charCodeAt(0) || 0);
                        const seededRandom = (offset: number) => {
                          const seed = baseSeed + offset;
                          const x = Math.sin(seed) * 10000;
                          return x - Math.floor(x);
                        };

                        return (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-white/10 blur-sm"
                            initial={{
                              x: seededRandom(1) * 100 + "%",
                              y: seededRandom(2) * 100 + "%",
                              scale: 0,
                            }}
                            animate={{
                              x: [
                                seededRandom(3) * 100 + "%",
                                seededRandom(4) * 100 + "%",
                                seededRandom(5) * 100 + "%",
                              ],
                              y: [
                                seededRandom(6) * 100 + "%",
                                seededRandom(7) * 100 + "%",
                                seededRandom(8) * 100 + "%",
                              ],
                              scale: [0, 1, 0],
                              opacity: [0, 0.6, 0],
                            }}
                            transition={{
                              duration: 4 + seededRandom(9) * 2,
                              repeat: Infinity,
                              delay: seededRandom(10) * 2,
                              ease: "easeInOut",
                            }}
                          />
                        );
                      })}
                    </div>

                    {/* Content with 3D Transform */}
                    <motion.div
                      className="relative z-10 h-full flex flex-col"
                      style={{
                        transform: "translateZ(50px)",
                      }}
                    >
                      {tab.title && (
                        <motion.h3
                          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ delay: 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6"
                        >
                          {tab.title}
                        </motion.h3>
                      )}
                      <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.25, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="text-neutral-200 flex-1 text-sm sm:text-base"
                        style={{
                          transform: "translateZ(30px)",
                        }}
                      >
                        {tab.content}
                      </motion.div>
                    </motion.div>

                    {/* 3D Edge Highlights */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div
                        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          transform: "translateZ(100px)",
                        }}
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          transform: "translateZ(-100px)",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

