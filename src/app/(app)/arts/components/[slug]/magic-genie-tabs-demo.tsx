"use client";

import React from "react";
import {  Tabs } from "@/registry/magic-genie-tabs/magic-genie-tabs";

export default function MagicGenieTabsDemo() {
  const tabs = [
    {
      title: "Overview",
      value: "overview",
      // You can use either a Tailwind class or a CSS gradient string
      gradient: 'bg-red-500/20', // Tailwind class with opacity
      // Or use a CSS gradient: gradient: 'radial-gradient(ellipse at top, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.2) 50%, transparent 100%)',
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p>
            This is the overview section. Add any content here — text, cards,
            charts, anything. The panel scrolls if you add more content.
          </p>

          <div className="mt-6 space-y-3">
            {Array.from({ length: 40 }).map((_, i) => (
              <p key={i} className="text-sm opacity-80">
                Dummy content line {i + 1}
              </p>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Analytics",
      value: "analytics",
      // Example with CSS gradient string
      gradient: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 100%)',
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-3">Analytics</h2>
          <p>
            Imagine charts here 📈 This tab opens with the same genie effect.
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Performance trends</li>
            <li>User cohorts</li>
            <li>Revenue breakdown</li>
          </ul>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Performance trends</li>
            <li>User cohorts</li>
            <li>Revenue breakdown</li>
          </ul>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Performance trends</li>
            <li>User cohorts</li>
            <li>Revenue breakdown</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Settings",
      value: "settings",
      // Another Tailwind class example
      gradient: 'bg-green-500/15',
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-3">Settings</h2>
          <p>Update preferences, security, and profile details here.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10">
              Profile
            </div>
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10">
              Notifications
            </div>
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10">
              Privacy
            </div>
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10">
              API Keys
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Tabs tabs={tabs} />
    </div>
  );
}
