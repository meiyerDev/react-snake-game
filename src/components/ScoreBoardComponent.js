import styled from "styled-components";
import { useGameHistory } from "../contexts/game-history-context";

const ScoreBoardContainerComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  color: white;
  overflow-y: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    margin: 1rem 0rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

const ScoreListComponent = styled.div`
  width: 100%;
  text-align: left;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid white;
    padding: 1rem 0rem 0.3rem 0rem;
  }
`;

const ScoreItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;
  padding: 1rem 0rem 0.3rem 0rem;
`;

const ScoreBoardComponent = () => {
  console.log("ScoreBoardComponent");
  const scores = useGameHistory((state) => state.scores);
  return (
    <ScoreBoardContainerComponent>
      <ScoreListComponent>
        <div>
          <div>Nombre</div>
          <div>Puntaje (pts)</div>
        </div>
        <div>
          {scores.map((item, index) => (
            <ScoreItemComponent key={`history-scores-list-ìtem-${index}`}>
              <div>Holita</div>
              <div>300 pts</div>
            </ScoreItemComponent>
          ))}
        </div>
      </ScoreListComponent>
    </ScoreBoardContainerComponent>
  );
};

export default ScoreBoardComponent;
