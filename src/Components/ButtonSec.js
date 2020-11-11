import React from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const ButtonSec = ({ text, className }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.15,
        transition: { duration: 3 },
        backgroundColor: "white",
        color: "black",
      }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default styled(ButtonSec)`
  background: none;
  border: solid 1px #fff;
  color: #fff;
  border-radius: 50px;
  padding: 10px 50px;
  font-family: ${fonts.body};
  font-size: ${pxToRem(16)};
  font-weight: 500;
  outline: none;
`;
