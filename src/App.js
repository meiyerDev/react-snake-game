import { createGlobalStyle } from "styled-components";
import LayoutAppComponent from "./components/LayoutAppComponent";
import ScoreSectionComponent from "./components/ScoreSectionComponent";
import SnakeBoardComponent from "./components/SnakeBoardComponent";
import { GameProvider } from "./contexts/game-context";
import { GameHistoryProvider } from "./contexts/game-history-context";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 16px;
    font-family: "Suez One", serif;
  }
`;

function App() {
  console.log("App");
  return (
    <GameProvider>
      <GameHistoryProvider>
        <LayoutAppComponent>
          <GlobalStyle />
          <ScoreSectionComponent />
          <SnakeBoardComponent />
        </LayoutAppComponent>
      </GameHistoryProvider>
    </GameProvider>
  );
}

export default App;
