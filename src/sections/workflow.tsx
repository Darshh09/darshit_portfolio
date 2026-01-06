"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import type { ComponentType } from "react";
import Image from "next/image";
import {
  IconPencil,
  IconVectorBezier,
  IconPalette,
  IconDeviceFloppy,
  IconRocket,
  IconClipboardList,
  IconLoader2,
  IconCheck,
} from "@tabler/icons-react";

/** ======= Content (YOUR PORTFOLIO STEPS) ======= */
type StepDef = {
  title: string;
  note: string;
  icon: ComponentType<{ className?: string }>;
};

const steps: readonly StepDef[] = [
  { title: "Canvas",     note: "Kickoff & requirements sketch.",                 icon: IconClipboardList },
  { title: "Concept",    note: "Scope, constraints, success metrics.",           icon: IconPencil },
  { title: "Refinement", note: "Wireframes, design tokens, architecture.",       icon: IconVectorBezier },
  { title: "Styling",    note: "Polish UI & micro-interactions.",                icon: IconPalette },
  { title: "Drafting",   note: "Implement end-to-end user flow in staging.",     icon: IconDeviceFloppy },
  { title: "Delivery",   note: "Ship to prod with docs & handover.",             icon: IconRocket },
];

/** ======= DS Logo for the final step ======= */
const DSLogo = ({ size = 20 }: { size?: number }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <Image
      src="/dsmainlogo.png"
      alt="DS Logo"
      fill
      className="object-contain"
    />
  </div>
);

/** ======= Keyframes (Tailwind v4-safe) ======= */
const keyframes = `
@keyframes blink-yellow { 0%,100%{opacity:.85} 50%{opacity:.25} }
@keyframes blink-green  { 0%,100%{opacity:.9}  50%{opacity:.35} }
@keyframes spin         { to { transform: rotate(360deg) } }
`;

type Blink = "none" | "yellow" | "green";

/** Layout */
const BOX = { w: 92, h: 76, r: 10 };
const POS = [
  { x: 120, y: 80 },  // Canvas
  { x: 320, y: 80 },  // Concept
  { x: 520, y: 80 },  // Refinement
  { x: 520, y: 220 }, // Styling
  { x: 320, y: 220 }, // Drafting
  { x: 120, y: 220 }, // Delivery
];

/** Connections (i -> i+1) */
const LINES = POS.slice(0, -1).map((p, i) => ({
  x1: p.x + BOX.w / 2,
  y1: p.y + BOX.h / 2,
  x2: POS[i + 1].x + BOX.w / 2,
  y2: POS[i + 1].y + BOX.h / 2,
}));

export default function AnimatedWorkflow() {
  const controls = useAnimation();
  const controlsRef = useRef(controls);
  controlsRef.current = controls;

  const [isMounted, setIsMounted] = useState(false);

  const [active, setActive] = useState(0); // active step index
  const [blink, setBlink] = useState<Blink>("yellow");
  const [phase, setPhase] = useState<"processing" | "done" | "moving">("processing");
  const [progress, setProgress] = useState<number[]>(Array(LINES.length).fill(0));

  // Timings
  const processingDuration = 1600; // ms (yellow blink while "processing")
  const greenFlash = 650;          // ms (green blink after done)
  const moveDuration = 1200;       // ms (move to next step + draw line)
  const finalHold = 1200;          // ms hold on last step before reset

  // Cursor target (center of active box)
  const cursorTarget = useMemo(() => {
    const p = POS[active];
    return { cx: p.x + BOX.w / 2, cy: p.y + BOX.h / 2 };
  }, [active]);

  // Set mounted state and initialize
  useEffect(() => {
    setIsMounted(true);
    // Initialize cursor position
    controlsRef.current.set({
      x: POS[0].x + BOX.w / 2 - 16,
      y: POS[0].y + BOX.h / 2 - 16,
      opacity: 1
    });
  }, []);

  // Step lifecycle
  useEffect(() => {
    if (!isMounted) return;

    let t1: any, t2: any, t3: any, raf: number;

    // Start processing (yellow)
    setPhase("processing");
    setBlink("yellow");

    t1 = setTimeout(() => {
      // Finish processing -> green blink
      setPhase("done");
      setBlink("green");

      t2 = setTimeout(() => {
        // Done -> move to next (or reset if last)
        setBlink("none");

        if (active === steps.length - 1) {
          setPhase("moving");
          t3 = setTimeout(() => {
            // reset
            setProgress(Array(LINES.length).fill(0));
            setActive(0);
            setPhase("processing");
            setBlink("yellow");
            controlsRef.current.set({
              x: POS[0].x + BOX.w / 2 - 16,
              y: POS[0].y + BOX.h / 2 - 16,
              opacity: 1,
            });
          }, finalHold);
          return;
        }

        // Draw connection line for this leg
        const idx = active;
        const start = performance.now();
        const animateLine = (now: number) => {
          const elapsed = now - start;
          const pct = Math.min(1, elapsed / moveDuration);
          setProgress((prev) => {
            const copy = [...prev];
            copy[idx] = pct;
            return copy;
          });
          if (pct < 1) raf = requestAnimationFrame(animateLine);
        };
        raf = requestAnimationFrame(animateLine);

        // Move cursor
        const next = POS[active + 1];
        setPhase("moving");
        controlsRef.current
          .start({
            x: next.x + BOX.w / 2 - 16,
            y: next.y + BOX.h / 2 - 16,
            transition: { duration: moveDuration / 1000, ease: "linear" },
          })
          .then(() => {
            cancelAnimationFrame(raf);
            setActive((a) => a + 1);
            setPhase("processing");
            setBlink("yellow");
          });
      }, greenFlash);
    }, processingDuration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active, isMounted]);

  // Precompute icons for safe rendering
  const ActiveIcon = steps[active].icon;
  const NextIcon = steps[Math.min(active + 1, steps.length - 1)].icon;

  return (
    <div className="relative w-full  mx-auto">
      <style>{keyframes}</style>

      {/* Step note bubble */}
      <div className="mb-4 flex items-center gap-2">
        {phase === "processing" ? (
          <IconLoader2 className="size-4 text-amber-300" style={{ animation: "spin 1s linear infinite" }} />
        ) : phase === "done" ? (
          <IconCheck className="size-4 text-emerald-400" />
        ) : (
          <ActiveIcon className="size-4 text-cyan-300" />
        )}
        <p className="text-sm text-white/90">{steps[active].note}</p>
      </div>

      {/* SVG board */}
      <svg
        viewBox="0 0 720 360"
        width="100%"
        height="350"
        className="rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur"
      >
        <defs>
          <linearGradient id="boxStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#525252" />
            <stop offset="1" stopColor="#2b2b2b" />
          </linearGradient>
          <radialGradient id="boxFill" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="100%" stopColor="#141414" />
          </radialGradient>
        </defs>

        {/* Base (grey) connections */}
        <g>
          {LINES.map((l, i) => (
            <line
              key={`base-${i}`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="#2f3134"
              strokeDasharray="6 6"
              strokeWidth={2}
            />
          ))}
        </g>

        {/* Animated green connections */}
        <g>
          {LINES.map((l, i) => {
            const pct = progress[i];
            if (pct <= 0) return null;
            const x = l.x1 + (l.x2 - l.x1) * pct;
            const y = l.y1 + (l.y2 - l.y1) * pct;
            return (
              <line
                key={`fill-${i}`}
                x1={l.x1}
                y1={l.y1}
                x2={x}
                y2={y}
                stroke="#22c55e"
                strokeWidth={4}
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px #22c55e88)" }}
              />
            );
          })}
        </g>

        {/* Step boxes */}
        <g>
          {POS.map((p, i) => {
            const StepIcon = steps[i].icon;
            return (
              <g key={`box-${i}`}>
                <rect
                  x={p.x}
                  y={p.y}
                  width={BOX.w + 10}
                  height={BOX.h + 20}
                  rx={BOX.r}
                  fill="url(#boxFill)"
                  stroke="url(#boxStroke)"
                  strokeWidth={2}
                />
                {/* Icon */}
                <foreignObject x={p.x + BOX.w / 2 - 10} y={p.y + 10} width={24} height={45}>
                  <div className="w-6 h-6 flex mt-4 items-center justify-center">
                    <StepIcon className="size-5 text-white/90" />
                  </div>
                </foreignObject>
                {/* Title */}
                <foreignObject x={p.x} y={p.y + 42} width={BOX.w} height={44}>
                  <div className="w-full mt-6 text-center text-[12px] leading-[14px] text-white/90 font-medium">
                    {steps[i].title}
                  </div>
                </foreignObject>

                {/* Corner light */}
                {(() => {
                  const isThisBlinking =
                    (phase !== "moving" && i === active) ||
                    (phase === "moving" && i === active + 1);
                  if (!isThisBlinking || blink === "none") return null;
                  const cx = p.x + BOX.w - 10;
                  const cy = p.y + 10;
                  const color = blink === "yellow" ? "#FFD600" : "#22C55E";
                  const anim =
                    blink === "yellow"
                      ? "animate-[blink-yellow_0.9s_linear_infinite]"
                      : "animate-[blink-green_0.6s_linear_infinite]";
                  return (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill={color}
                      className={anim}
                      style={{ filter: `drop-shadow(0 0 8px ${color}AA)` }}
                    />
                  );
                })()}
              </g>
            );
          })}
        </g>

        {/* Cursor block */}
        <motion.g
          initial={{
            x: POS[0].x + BOX.w / 2 - 16,
            y: POS[0].y + BOX.h / 2 - 16,
            opacity: 1,
          }}
          animate={controls}
        >
          <rect
            x={0}
            y={0}
            width={32}
            height={32}
            rx={8}
            fill="#23272A"
            stroke={blink === "yellow" ? "#FFD600" : blink === "green" ? "#22C55E" : "#3a3a3a"}
            strokeWidth={blink === "yellow" ? 2.5 : blink === "green" ? 3 : 2}
            style={{
              filter:
                blink === "yellow"
                  ? "drop-shadow(0 0 8px #FFD600)"
                  : blink === "green"
                  ? "drop-shadow(0 0 10px #22C55E)"
                  : "drop-shadow(0 1px 4px #0008)",
            }}
          />
          <foreignObject x={4} y={4} width={24} height={24}>
            <div className="w-6 h-6 flex items-center justify-center">
              {active === steps.length - 1 && phase !== "moving" ? (
                <DSLogo size={24} />
              ) : phase === "processing" ? (
                <IconLoader2 className="size-5 text-amber-300" style={{ animation: "spin 1s linear infinite" }} />
              ) : phase === "done" ? (
                <IconCheck className="size-5 text-emerald-400" />
              ) : (
                <NextIcon className="size-5 text-white/90" />
              )}
            </div>
          </foreignObject>
        </motion.g>
      </svg>
    </div>
  );
}
