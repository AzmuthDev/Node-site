"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextBlurRevealProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextBlurReveal = ({ text, children, className = "", delay = 0 }: TextBlurRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  if (text) {
    const words = text.split(" ");
    return (
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={`inline-flex flex-wrap ${className}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={item}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: item.hidden,
        show: { ...item.show, transition: { ...item.show.transition, delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
