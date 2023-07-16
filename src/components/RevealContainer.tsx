import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const RevealContainer = ({ className, children }: Props) => {
  return (
    <motion.div
      className={className ?? ""}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealContainer;
