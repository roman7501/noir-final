import React from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const Indications = ({ className }) => {
  const timeFade = 10;
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: timeFade,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 10,
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
      <div className="container">
        <p> ça va bientôt commencer</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 7,
              delay: 7,
            },
          }}
        >
          installez-vous
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 10,
              delay: 20,
            },
          }}
        >
          si vous voulez, vous pouvez éteindre les lumières
        </motion.p>
      </div>
      <motion.p
        className="important"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          transition: {
            duration: 7,
            delay: 29,
          },
        }}
      >
        - Attention, si vous rechargez la page le son reprendra au début -
      </motion.p>
    </motion.div>
  );
};

export default styled(Indications)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.body};
  letter-spacing: ${fonts.space};
  line-height: 2.5;
  position: relative;
  .container {
    transform: translate(-60px, 50px);
  }
  p {
    text-align: left;
  }
  .important {
    margin-top: 160px;
    font-size: ${pxToRem(18)};
  }
  @media (max-width: 600px) {
    .container {
      transform: translate(0px, 0px);
    }
    font-size: 16px;
    padding: 20px;
  }
`;
