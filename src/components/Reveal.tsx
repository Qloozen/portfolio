import React, { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

type Props = {
  className?: string;
  children: ReactNode;
};

const componentReveal: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Reveal = ({ className, children }: Props) => {
  return (
    <motion.div className={className ?? ""} variants={componentReveal}>
      {children}
    </motion.div>
  );
};

export default Reveal;
