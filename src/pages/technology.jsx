import React from "react";
import { motion } from "framer-motion";

function Technology() {
  return (
    <motion.div
      className=""
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      Technology
    </motion.div>
  );
}

export default Technology;
