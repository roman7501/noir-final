import React from "react";
import Description from "./Description";
import Header from "./Header";
import Spectacle from "./Spectacle";
import plumes from "../images/plumes-low.jpg";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const Home = ({ className }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      opacity: 0,

      transition: { duration: 1.5 },
    },
  };
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="bg">
        <motion.div
          className="fade-in"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 2,
            },
          }}
        >
          <Header />
          <Description />
        </motion.div>
      </div>
      <p className="citation">
        « Chaque matin, des enfants partent sans inquiétude. Tout est près.{" "}
        <br /> Les pires conditions matérielles sont excellentes » <br />
        André Breton
      </p>
      <Spectacle />
      <div className="generique">
        texte : Lucie Grunstein <br />
        <br />
        jeu : Isis Ravel, Gabriel Acremant, Joseph Menez, <br />
        Claire-Marie Daveau, Lucie Grunstein et Roman Jean-Elie <br />
        <br />
        son : Sarah Meunier-Schoenacker <br />
        <br />
        développement web : Clément Bossut et Roman Jean-Elie <br />
        <br />
        Production : Prémisses - Office de production artistique et solidaire{" "}
        <br /> <br />
        Coproductions : Théâtre de Rungis, Théâtre La Passerelle - Scène
        Nationale de Gap - autres en cours Résidences : Théâtre de Rungis,
        Théâtre La Passerelle - Scène Nationale de Gap Théâtre de Vanves, Le
        Centquatre-Paris
      </div>
    </motion.div>
  );
};

export default styled(Home)`
  position: relative;
  .bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
      url(${plumes});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .citation {
    font-family: freight-big-pro, serif;
    font-weight: 300;
    font-size: ${pxToRem(40)};
    font-style: normal;
    position: absolute;
    text-align: right;
    margin-right: 50px;
    margin-top: 100px;
    right: 0;
    opacity: 0.4;
    z-index: 1;
  }
  .generique {
    font-family: ${fonts.body};
    font-size: ${pxToRem(16)};
    letter-spacing: ${fonts.space};
    line-height: ${fonts.line};
    max-width: 700px;
    opacity: 0.4;
    font-size: ${pxToRem(14)};
    line-height: 20px;
    position: absolute;
    bottom: -100px;
    margin: 0 0 20px 50px;
  }

  @media (max-width: 900px) {
    .citation {
      display: none;
    }
    .generique {
      position: relative;
      margin: 0 0 20px 30px;
    }
  }
`;
