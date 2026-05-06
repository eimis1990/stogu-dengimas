"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Materials from "@/components/sections/Materials";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import QuickPricing from "@/components/sections/QuickPricing";
import Contact from "@/components/sections/Contact";
import PricingPanel from "@/components/ui/PricingPanel";

export default function ClientHome() {
  const [isPricingPanelOpen, setIsPricingPanelOpen] = useState(false);

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Materials />
      <Gallery />
      <WhyUs />
      <QuickPricing onOpenFullPricing={() => setIsPricingPanelOpen(true)} />
      <Contact />
      <PricingPanel
        isOpen={isPricingPanelOpen}
        onClose={() => setIsPricingPanelOpen(false)}
      />
    </>
  );
}
