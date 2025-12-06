import React from "react";
import { motion as Motion } from "framer-motion";
const MotionAnimation = ({ children }) => {
  return (
    <Motion.div
    
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false,amount: 0.5 }} // animation only once
    >
      {children}
    </Motion.div>
  );
};

export default MotionAnimation;
