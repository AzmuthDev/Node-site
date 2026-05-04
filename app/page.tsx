"use client";

import Hero from "@/components/landing/animated-shader-hero";
import { NodeHero } from "@/components/ui/node-hero";
import { ServiceCarousel } from "@/components/sections/service-carousel";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden bg-[#020617] selection:bg-[#19D1E6]/30">
      <AnimatePresence mode="wait">
        {!showMainContent ? (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-screen"
          >
            {/* Landing Cover Section */}
            <Hero
              headline={{
                line1: "NODE",
                line2: ""
              }}
              subtitle=""
              buttons={{
                primary: {
                  text: "A sua presença digital começa aqui",
                  onClick: () => setShowMainContent(true)
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            {/* Main Content Sections */}
            <NodeHero />
            <ServiceCarousel />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
