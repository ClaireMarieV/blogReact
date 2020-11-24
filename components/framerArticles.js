import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const FramerArticles = ({ children }) => {
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
      whileHover={{ scale: 0.9, opacity: 1 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { scale: 1, opacity: 0.8 },
        hidden: { scale: 0.9, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FramerArticles;
