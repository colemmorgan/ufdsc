import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  delay: number;
};

const FadeIn: React.FC<FadeInProps> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: 15, filter: "blur(20px)", opacity: 0 }}
      animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.50, ease: "easeInOut", delay: delay}}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
