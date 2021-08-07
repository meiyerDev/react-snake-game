import React from "react";
import styled from "styled-components";
import { useGame } from "../contexts/game-context";

const ScoreContainerComponent = styled.div`
  align-self: center;
  justify-self: center;
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  box-shadow: inset 0px 0px 20px #ffffff;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  margin-top: 10px;
  padding: 0.2rem 4rem;
  width: 8rem;
`;

const ScoreTextComponent = styled.h2`
  text-align: center;
  font-size: 8rem;
  -webkit-text-stroke: 0.2rem white;
`;

const ScoreComponent = () => {
  const score = useGame((state) => state.score);
  console.log("ScoreComponent");
  return (
    <ScoreContainerComponent>
      <ScoreTextComponent>{score}</ScoreTextComponent>
    </ScoreContainerComponent>
  );
};

export default ScoreComponent;
