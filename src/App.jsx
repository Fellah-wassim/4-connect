import MainMenu from "./pages/MainMenu.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HumanVsBot from "./pages/HumanVsBot.jsx";
import { BotVsBot } from "./pages/BotVsBot.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/human-vs-bot" element={<HumanVsBot />} />
        <Route path="/bot1-vs-bot2" element={<BotVsBot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
