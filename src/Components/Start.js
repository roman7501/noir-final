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
  const [itsTooLate, setItsTooLate] = useState(null);
  const [audioTime, setAudioTime] = useState(0);

  // Display indications
  const start = 50000;

  // 50000;

  useEffect(() => {
    setTimeout(() => setLetsPlay(true), start);
    setTimeout(() => setIndications(false), start);
  }, [letsPlay, indications]);

  useEffect(() => {
    const dateNow = new Date();
    const hours = dateNow.getHours();
    // Desactiver la page en dehors de 20h
    if (hours === 20) {
      setItsTooLate(false);
    } else {
      // change this line to true <-----------------------
      setItsTooLate(true);
    }
  }, [itsTooLate]);

  // Subtitles
  const subtitles = dataSubtitles.subtitles;

  const textFinal = Object.keys(subtitles).map((el) => {
    if (audioTime >= 1078) {
      localStorage.removeItem("audioTime");
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 40,
              delay: 0,
            },
          }}
        >
          <p>
            Le spectacle en est là aujourd’hui <br /> Nous ne savons pas encore
            quand ni dans quelles conditions nous pourrons le terminer <br />
            <br />
            Merci de l’avoir écouté <br /> <br />
            Il est rare d’avoir l’occasion de présenter une pièce dans cet
            état-là d’entre-deux, inachevée et ouverte. <br />
            Nous avons voulu en profiter pour proposer à chacun.e d’inventer sa
            propre fin, <br /> et conserver le souvenir de ces passages -
            permettre à tous.tes d’entendre ces traces <br />
            <br /> Pour celleux qui le souhaitent, nous mettons à disposition un
            numéro de téléphone où vous pourrez laisser un message, raconter la
            fin de l’histoire que vous venez d’entendre <br />
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
    <div className={className}>
      {!itsTooLate && (
        <motion.div
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
                src="https://firebasestorage.googleapis.com/v0/b/dans-le-noir-62252.appspot.com/o/LDO-Audio-V12.mp3?alt=media&token=264967ef-6f25-4e4a-9d40-37d448150e63"
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
      )}
      {itsTooLate && <p className="too-late">Ce n'est pas encore l'heure</p>}
    </div>
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
    line-height: 2;
  }
  .buttons {
    margin-top: 60px;
    margin-bottom: 50px;
  }
  .too-late {
    font-family: ${fonts.body};
    font-size: ${pxToRem(18)};
    letter-spacing: ${fonts.space};
    margin: 100px;
  }
`;
