import React from "react";
import styled from "styled-components";
import arrow from "../icons/arrow-down.png";
import { motion } from "framer-motion";

const Arrow = ({ className }) => {
  const arrowVariants = {
    animationOne: {
      y: [0, -5],
      transition: {
        y: { yoyo: Infinity, duration: 0.5 },
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={arrowVariants}
      animate="animationOne"
    >
      <img src={arrow} alt="scroll" />
    </motion.div>
  );
};

export default styled(Arrow)``;
