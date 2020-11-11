import React from "react";
import styled from "styled-components";

const Round = ({ className }) => {
  return <div className={className}></div>;
};

export default styled(Round)`
  margin: 100px 100px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
`;
