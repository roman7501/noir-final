import React from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const Button = ({ text, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default styled(Button)`
  background: #fff;
  border: transparent;
  border-radius: 50px;
  padding: 10px 50px;
  font-family: ${fonts.body};
  font-size: ${pxToRem(16)};
  font-weight: 500;
  outline: none;
`;
