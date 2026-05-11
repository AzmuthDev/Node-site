"use client";

import { ImageGallery } from "@/components/ui/3d-image-gallery";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-black"
    >
      <ImageGallery />
    </motion.main>
  );
}
