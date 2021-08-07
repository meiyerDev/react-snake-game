import React from "react";
import styled from "styled-components";
import ResetGameComponent from "./ResetGameComponent";
import ScoreBoardComponent from "./ScoreBoardComponent";
import ScoreComponent from "./ScoreComponent";

const ScoreSectionContainerComponent = styled.div`
  display: grid;
  grid-template-rows: 12rem 24rem 8rem;
  row-gap: 0.25rem;
  justify-content: center;
`;

const ScoreSectionComponent = () => {
  console.log("ScoreSectionComponent");
  return (
    <ScoreSectionContainerComponent>
      <ScoreComponent />
      <ScoreBoardComponent />
      <ResetGameComponent />
    </ScoreSectionContainerComponent>
  );
};

export default ScoreSectionComponent;
