"use client";
import React from "react";
import { motion } from "motion/react";
import { Icons } from "@/lib/icons";

const AnimationAvatar = () => {
  return (
    <motion.div
      className="flex size-28 items-center justify-center rounded-full bg-black"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.5 },
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
    >
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
        <Icons.logo width={40} height={40} />
      </motion.div>
    </motion.div>
  );
};

export default AnimationAvatar;
