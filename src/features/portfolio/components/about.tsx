import { Markdown } from "@/components/markdown";
import { ProseMono } from "@/components/ui/typography";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="space-y-4">
          {/* Experience Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-md",
              "bg-foreground/5 dark:bg-foreground/10",
              "border border-edge",
              "text-sm font-medium"
            )}>
              <span className="text-foreground/70">5+ years</span>
              <span className="text-foreground/50">•</span>
              <span className="text-foreground/70">Design Engineer</span>
              <span className="text-foreground/50">•</span>
              <span className="text-foreground/70">Frontend Engineer</span>
            </div>
          </div>

          <ProseMono>
            <Markdown>{USER.about}</Markdown>
          </ProseMono>
        </div>
      </PanelContent>
    </Panel>
  );
}
