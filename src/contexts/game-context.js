import { createContext, useContext, useReducer } from "react";
import {
  ACTION_ADD_SCORE,
  ACTION_RESET_GAME,
  ACTION_RESET_SCORE,
} from "../constants";

const GameContext = createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case ACTION_ADD_SCORE: {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case ACTION_RESET_SCORE: {
      return {
        ...state,
        score: state.score - 1,
      };
    }
    case ACTION_RESET_GAME: {
      return {
        ...state,
        score: 0,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, {
    score: 0,
  });

  const value = { state, dispatch };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function useGame(fn) {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a CountProvider");
  }
  if (fn === undefined) return context;
  return fn(context.state);
}

export { GameProvider, useGame };
