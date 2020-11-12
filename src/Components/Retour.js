import React from "react";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";

const Retour = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default styled(Retour)`
  font-family: ${fonts.body};
  font-size: ${pxToRem(20)};
  letter-spacing: 0.1rem;
  border: none;
  background: transparent;
  color: white;
  outline: none;
  @media (max-width: 600px) {
    font-size: ${pxToRem(16)};
  }
`;
