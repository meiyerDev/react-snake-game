import styled from "styled-components";
import { resetGame } from "../actions/GameActions";
import { useGame } from "../contexts/game-context";

const ButtonResetGameComponent = styled.button``;

const ResetGameComponent = () => {
  const { dispatch } = useGame();
  return (
    <ButtonResetGameComponent onClick={() => resetGame(dispatch)}>
      Reiniciar Juego
    </ButtonResetGameComponent>
  );
};

export default ResetGameComponent;
