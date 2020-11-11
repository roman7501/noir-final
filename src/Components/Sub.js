import React from "react";
import styled from "styled-components";
import { fonts } from "../theme/helpers";
import { motion } from "framer-motion";

const Sub = ({ text, className, key }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 3,
      },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default styled(Sub)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.body};
  letter-spacing: ${fonts.space};
  line-height: 2.5;

  p {
    transform: translate(-20vw, 50px);
  }
`;
