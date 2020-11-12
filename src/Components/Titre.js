import React from "react";
import styled from "styled-components";
import { pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const Titre = ({ text, className, sousText, sousTitre }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.5,
      transition: {
        duration: 42,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 17,
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
      <p className="titre">{text}</p>
      <motion.p
        className="sous-text"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          transition: {
            duration: 25,
            delay: 25,
          },
        }}
      >
        {sousText}
      </motion.p>
      <motion.p
        className="sous-titre"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          transition: {
            duration: 25,
            delay: 35,
          },
        }}
      >
        {sousTitre}
      </motion.p>
    </motion.div>
  );
};

export default styled(Titre)`
  height: 40vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  position: fixed;
  left: 10vw;
  top: 14vh;
  opacity: 0.4;
  font-family: freight-big-pro, serif;
  white-space: normal;
  .titre {
    font-size: ${pxToRem(154)};
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
  .sous-text {
    font-size: ${pxToRem(95)};
    text-transform: uppercase;
    letter-spacing: 0rem;
  }
  .sous-titre {
    font-size: ${pxToRem(42)};
    margin-top: 40px;
    letter-spacing: 0.2rem;
    font-style: italic;
  }
  @media (max-width: 930px) {
    .titre {
      font-size: ${pxToRem(52)};
    }
    .sous-text {
      font-size: ${pxToRem(45)};
    }
    .sous-titre {
      font-size: ${pxToRem(22)};
      letter-spacing: 0.05rem;
    }
  }
`;
