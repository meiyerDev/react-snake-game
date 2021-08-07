import {
  ACTION_ADD_SCORE,
  ACTION_RESET_GAME,
  ACTION_RESET_SCORE,
} from "../constants";

export function addScore(dispatch) {
  dispatch({ type: ACTION_ADD_SCORE });
}

export function resetScore(dispatch) {
  dispatch({ type: ACTION_RESET_SCORE });
}

export function resetGame(dispatch) {
  dispatch({ type: ACTION_RESET_GAME });
}
