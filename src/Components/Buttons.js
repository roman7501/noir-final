import React, { useState } from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";

import { motion } from "framer-motion";

const Buttons = ({ className }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={className}>
      <div>
        {isClicked && <p>06 33 71 01 38</p>}
        {!isClicked && (
          <motion.button
            className="btn"
            whileHover={{
              scale: 1.05,
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => setIsClicked(true)}
            whileTap={{ scale: 0.9 }}
          >
            raconter
          </motion.button>
        )}
      </div>
      <div>
        <a
          href="https://vigilant-edison-e4b0c5.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            className="btn"
            whileHover={{
              scale: 1.05,
              backgroundColor: "white",
              color: "black",
            }}
            whileTap={{ scale: 0.9 }}
          >
            écouter
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default styled(Buttons)`
  display: flex;
  justify-content: space-evenly;
  .btn {
    background: none;
    border: solid 1px #fff;
    color: #fff;
    border-radius: 50px;
    padding: 10px 50px;
    font-family: ${fonts.body};
    font-size: ${pxToRem(16)};
    font-weight: 500;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;
