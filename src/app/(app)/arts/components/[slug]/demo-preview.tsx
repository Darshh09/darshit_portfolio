"use client";

import { RepeatIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";

const demoCode = `import { Tabs } from "@/registry/magic-genie-tabs/magic-genie-tabs";

export function MagicGenieTabsDemo() {
  const tabs = [
    {
      title: "Overview",
      value: "overview",
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p>
            This is the overview section. Add any content here — text, cards,
            charts, anything. The panel scrolls if you add more content.
          </p>
        </div>
      ),
    },
    {
      title: "Analytics",
      value: "analytics",
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-3">Analytics</h2>
          <p>Imagine charts here 📈 This tab opens with the same genie effect.</p>
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
        </div>
      ),
    },
  ];

  return <Tabs tabs={tabs} />;
}`;

export function DemoPreview({ children }: { children: React.ReactNode }) {
  const [replay, setReplay] = useState(0);

  return (
    <div className="my-12 not-prose">
      {/* Preview Area */}
      <div className="relative overflow-hidden rounded-t-xl border border-border bg-white dark:bg-black">
        {/* Top Bar with Buttons */}
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setReplay((v) => v + 1)}
                >
                  <RepeatIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Replay</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Demo Content Area */}
        <div
          key={replay}
          className="flex min-h-[400px] items-center justify-center bg-white dark:bg-black p-8"
        >
          <div className="w-full max-w-4xl">{children}</div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative overflow-hidden rounded-b-xl border border-t-0 border-border bg-code">
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-2">
          <span className="text-xs font-mono text-muted-foreground">
            magic-genie-tabs-demo.tsx
          </span>
          <CopyButton value={demoCode} />
        </div>
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm text-code-foreground">
            {demoCode}
          </code>
        </pre>
      </div>
    </div>
  );
}

