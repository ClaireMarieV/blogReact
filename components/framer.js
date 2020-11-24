import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Framer = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, repeat: Infinity }}
      variants={{
        visible: { rotate: 0, opacity: 1 },
        hidden: { rotate: -2, opacity: 0.4 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Framer;
