import { useEffect, useState } from "react";
import { Board } from "../components/Board";
import { Header } from "../components/Header";
import { GameOverPopup } from "../components/Popups/GameOverPopup";
import io from "socket.io-client";

export const BotVsBot = () => {
  const [socket, setSocket] = useState(io.connect("http://127.0.0.1:5000"));
  const [popupIsDisplayed, setPopupIsDisplayed] = useState(false);
  const [status, setStatus] = useState("");
  const [board, setBoard] = useState([]);
  const [move, setMove] = useState([]);
  const [turn, setTurn] = useState(2);

  useEffect(() => {
    const socket = io.connect("http://127.0.0.1:5000");
    setSocket(socket);
    socket.on("initial_state", (data) => {
      setBoard(data.board);
    });

    socket.on("update_state", (data) => {
      setBoard(data.board);
      setMove(data.move);
      setTurn(data.turn);
      const gameOverResult = data.game_over;
      const isGameOver = gameOverResult !== -1;
      if (isGameOver) {
        switch (gameOverResult) {
          case 1:
            setStatus("Computer 2 Wins!");
            break;
          case 2:
            setStatus("Computer 1 Wins!");
            break;
          case 0:
            setStatus("Draw!");
            break;
          default:
            break;
        }
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleReset = () => {
    socket.emit("reset");
    window.location.reload();
  };

  return (
    <div className="bg-darkPurple h-[100vh] text-white text-2xl max-sm:text-base font-bold">
      <GameOverPopup
        status={status}
        disableStatus={() => setStatus("")}
        restartGame={handleReset}
      />
      <Header
        handleReset={handleReset}
        popupIsDisplayed={popupIsDisplayed}
        setPopupIsDisplayed={(bool) => setPopupIsDisplayed(bool)}
      />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <button
            onClick={() => socket.emit("computer1_move")}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            <span className="w-6 h-6 bg-[#ffff00] rounded-full border-2"></span>
            Computer 1
          </button>
          <button
            onClick={() => socket.emit("computer2_move")}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            <span className="w-6 h-6 bg-[#ff0000] rounded-full border-2"></span>
            Computer 2
          </button>
        </div>
        <Board board={board} move={move} turn={turn} />
      </div>
    </div>
  );
};
