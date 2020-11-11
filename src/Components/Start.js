import React, { useState, useEffect } from "react";
import Indications from "./Indications";
import dataSubtitles from "../data/dataSubtitles";
import dataTitres from "../data/dataTitres";
import Titre from "./Titre";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";

import { AnimatePresence, motion } from "framer-motion";
import Buttons from "./Buttons";

const Start = ({ className }) => {
  const [letsPlay, setLetsPlay] = useState(false);
  const [indications, setIndications] = useState(true);
  const [audioTime, setAudioTime] = useState(0);

  // Display indications
  const start = 50000;

  // 50000;

  useEffect(() => {
    setTimeout(() => setLetsPlay(true), start);
    setTimeout(() => setIndications(false), start);
  }, [letsPlay, indications]);

  // Subtitles
  const subtitles = dataSubtitles.subtitles;

  const textFinal = Object.keys(subtitles).map((el) => {
    if (audioTime >= 1120) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 20,
              delay: 0,
            },
          }}
        >
          <p>
            Le spectacle en est là aujourd’hui <br /> Nous ne savons pas encore
            quand ni dans quelles conditions nous pourrons le terminer <br />
            Merci de l’avoir écouté <br /> Il est rare d’avoir l’occasion de
            présenter une pièce dans cet état-là d’entre-deux, inachevée et
            ouverte. <br />
            Nous avons voulu en profiter pour proposer à chacun.e d’inventer sa
            propre fin, <br /> et conserver le souvenir de ces passages -
            permettre à tous.tes d’entendre ces traces <br /> Pour celleux qui
            le souhaitent, nous mettons à disposition un numéro de téléphone où
            vous pourrez laisser un message, raconter la fin de l’histoire que
            vous venez d’entendre <br />
            <br /> Ces dénouements alternatifs resteront audibles sur le site,
            au terme de chaque écoute
          </p>
          <div className="buttons">
            <Buttons />
          </div>
        </motion.div>
      );
    } else {
      return null;
    }
  });

  // Titres
  const titres = dataTitres.titres;

  const titre = Object.keys(titres).map((el) => {
    if (audioTime >= titres[el].start && audioTime < titres[el].end) {
      return (
        <Titre
          key={el}
          text={titres[el].text}
          sousText={titres[el].sousText}
          sousTitre={titres[el].sousTitre}
        ></Titre>
      );
    } else {
      return null;
    }
  });
  const variants = {
    // animationOne: {
    //   backgroundColor: ["#000000", "#050505"],
    //   transition: {
    //     backgroundColor: { yoyo: Infinity, duration: 0.2 },
    //   },
    // },
  };

  return (
    <motion.div
      className={className}
      // animate="animationOne"
      // variants={variants}
    >
      <AnimatePresence>
        {indications && <Indications className="indications" />}
      </AnimatePresence>
      {letsPlay && (
        <div className="play">
          <audio
            autoPlay
            onTimeUpdate={(e) => setAudioTime(e.target.currentTime)}
            src="https://firebasestorage.googleapis.com/v0/b/dans-le-noir-62252.appspot.com/o/LDO-AUDIO-V8.mp3?alt=media&token=1967b362-a415-4f59-91ef-d80427d500d7"
          ></audio>
          <div
            className="titre"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <AnimatePresence>{titre}</AnimatePresence>
          </div>

          <div className="text-final">{textFinal}</div>
        </div>
      )}
    </motion.div>
  );
};

export default styled(Start)`
  .play {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-final {
    padding: 15px;
    margin: 0 auto;
    max-width: 900px;
    font-family: ${fonts.body};
    font-size: ${pxToRem(18)};
    letter-spacing: ${fonts.space};
    line-height: ${fonts.line};
  }
  .buttons {
    margin-top: 60px;
    margin-bottom: 50px;
  }
`;
