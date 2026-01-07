"use client";

import React from "react";
import {  Tabs } from "@/registry/magic-genie-tabs/magic-genie-tabs";

export default function MagicGenieTabsDemo() {
  const tabs = [
    {
      title: "Overvie1w",
      value: "overview",
       gradient: 'bg-gradient-to-br from-pink-700/50 to-red-900/50',
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p>
            This is the overview section. Add any content here — text, cards,
            charts, anything. The panel scrolls if you add more content.
          </p>

          <div className="mt-6 space-y-3">
            {Array.from({ length: 10 }).map((_, i) => (
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
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Magic Genie Tabs Demo 🧞‍♂️
        </h2>

        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
