"use client";

import React from "react";

export default function StreamingAnimation() {
  return (
    <div className="animated-streaming-main-card">
      {/* SVG grid background */}
      <svg
        className="animated-streaming-grid"
        viewBox="0 0 392 258"
        width="392"
        height="258"
        aria-hidden="true"
        focusable="false"
      >
        <g opacity="0.08" stroke="var(--color-muted-foreground)" strokeDasharray="1 1">
          {/* Horizontal lines */}
          {[...Array(16)].map((_, i) => (
            <line key={`h-${i}`} x1="0" x2="392" y1={15.5 + i * 16} y2={15.5 + i * 16} />
          ))}
          {/* Vertical lines */}
          {[...Array(25)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={12 + i * 16}
              x2={12 + i * 16}
              y1={0}
              y2={256}
            />
          ))}
        </g>
      </svg>
      {/* Simulate the glowing browser card */}
      <div className="animated-streaming-browser-card">
        <div className="animated-streaming-window">
          {/* Title bar dots */}
          <div className="flex items-center gap-2 pt-2 pl-3 pb-1">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="ml-auto text-xs text-neutral-500/70 font-mono pr-3">artist-stream.tsx</span>
          </div>
          <div className="flex-1 flex items-center">
            {/* Simulate some 'streaming' data or "live lines" */}
            <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto block">
              <polyline
                points="0,55 10,30 30,40 50,10 70,30 90,12 110,48 130,26 150,24 170,56 190,15 200,35"
                fill="none"
                stroke="url(#streamingGradient)"
                strokeWidth="3"
                className="stroke-animate"
              />
              <defs>
                <linearGradient id="streamingGradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#67e8f9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>

  );
}
