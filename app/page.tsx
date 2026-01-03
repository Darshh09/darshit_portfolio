import React from "react";
import { PageWrap } from '@/components/containers';
import Hero from '@/sections/hero';
import Workflow from '@/sections/workflow';
import HorizontalTimeline from "@/sections/HorizontalTimeline";
import ExternalLinks from "@/sections/ExternalLinks";
import ProjectGrid from "@/sections/ProjectGrid";
import BlogPreview from "@/sections/blog-preview";
import Footer from "@/components/footer";
import Arts from "@/app/arts/page";

export default function Page() {

  return (
    <PageWrap className="pb-40">
      <Hero />
      <Workflow />
      <ExternalLinks />
      <HorizontalTimeline />
      <ProjectGrid />
      <Arts />
      <BlogPreview />
      <Footer />
    </PageWrap>
  );
}
