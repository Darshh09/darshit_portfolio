import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { PageWrap } from '@/components/containers';
import Hero from '@/sections/hero';
import Workflow from '@/sections/workflow';
import { navigationLinks } from '@/lib/navigation';
import HorizontalTimeline from "@/sections/HorizontalTimeline";
import ExternalLinks from "@/sections/ExternalLinks";
import ProjectGrid from "@/sections/ProjectGrid";
import BlogPreview from "@/sections/blog-preview";
import Footer from "@/components/footer";

export default function Page() {

  return (
    <>
      <PageWrap className="pb-40">
        <Hero />
        <Workflow />
        <ExternalLinks />
        <HorizontalTimeline />
        <ProjectGrid />
        <BlogPreview />
        <Footer />
      </PageWrap>
      <FloatingDock
        items={navigationLinks}
      />
    </>
  );
}
