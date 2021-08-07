import { createContext, useReducer, useContext } from "react";
import { ACTION_ADD_SCORE_TO_HISTORY } from "../constants";

const GameHistoryContext = createContext();

function gameHistoryReducer(state, action) {
  switch (action.type) {
    case ACTION_ADD_SCORE_TO_HISTORY:
      return { ...state };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GameHistoryProvider({ children }) {
  const [state, dispatch] = useReducer(gameHistoryReducer, {
    scores: [
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
      { name: "meiyer", score: 300 },
    ],
  });

  const value = { state, dispatch };
  return (
    <GameHistoryContext.Provider value={value}>
      {children}
    </GameHistoryContext.Provider>
  );
}

function useGameHistory(fn) {
  const context = useContext(GameHistoryContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a CountProvider");
  }
  if (fn === undefined) return context;
  return fn(context.state);
}

export { GameHistoryProvider, useGameHistory };
