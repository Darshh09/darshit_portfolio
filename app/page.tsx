import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { PageWrap } from '@/components/containers';
import Hero from '@/sections/hero';
import Workflow from '@/sections/workflow';
import { navigationLinks } from '@/lib/navigation';
import HorizontalTimeline from "@/sections/HorizontalTimeline";
import ExternalLinks from "@/sections/ExternalLinks";
import ProjectGrid from "@/sections/ProjectGrid";

export default function Page() {

  return (
    <>
      <PageWrap>
        <Hero />
        <Workflow />
        <ExternalLinks />
        <HorizontalTimeline />
        <ProjectGrid />
      </PageWrap>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={navigationLinks}
      />
    </>
  );
}
