import React from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";

const Description = ({ className }) => {
  return (
    <div className={className}>
      <p>
        La langue des oiseaux est un spectacle pour enfants que nous rêvons
        depuis deux ans. <br />
        Nous voulions parler de peur, de doute, de silence et de solitude.{" "}
        <br />
        Les circonstances actuelles en repoussent la création scénique, mais
        proposent finalement aussi une autre modalité de jeu. <br />
        <br />
        Nous avons fait de cet objet théâtral une pièce sonore. <br />
        Le confinement nous ayant pris en toute fin de création, le terme du
        spectacle est resté flottant, inachevé - une porte ouverte. <br />
        <br />À vous, si vous le voulez, d’inventer votre propre fin.
      </p>
    </div>
  );
};

export default styled(Description)`
  margin-left: 10vw;
  margin-right: 15px;
  p {
    margin-top: 70px;
    font-family: ${fonts.body};
    font-size: ${pxToRem(18)};
    letter-spacing: ${fonts.space};
    line-height: ${fonts.line};
  }

  @media (max-width: 600px) {
    p {
      font-size: ${pxToRem(13)};
      margin-left: 0vw;
      margin-right: 2vw;
    }
  }
`;
