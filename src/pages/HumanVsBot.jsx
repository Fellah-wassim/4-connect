import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Board } from "../components/Board";
import { Header } from "../components/Header";
import { GameOverPopup } from "../components/Popups/GameOverPopup";

const HumanVsBot = () => {
  const [popupIsDisplayed, setPopupIsDisplayed] = useState(false);
  const [socket, setSocket] = useState(io.connect("http://127.0.0.1:5000"));
  const [debouncedEnter, setDebouncedEnter] = useState(null);
  const [board, setBoard] = useState([]);
  const [move, setMove] = useState([]);
  const [turn, setTurn] = useState(2);
  const [status, setStatus] = useState("");
  const [arrowDownPosition, setArrowDownPosition] = useState(0);

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
            setStatus("You Wins!");
            break;
          case 2:
            setStatus("Computer Wins!");
            break;
          case 0:
            setStatus("Draw!");
            break;
          default:
            break;
        }
      }
    });

    socket.emit("computer1_move");

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          if (arrowDownPosition > 0) {
            setArrowDownPosition(arrowDownPosition - 1);
          }
          break;
        case "ArrowRight":
          if (arrowDownPosition < 6) {
            setArrowDownPosition(arrowDownPosition + 1);
          }
          break;
        case "Enter":
          if (!debouncedEnter) {
            setDebouncedEnter(
              setTimeout(() => {
                socket.emit("human_move", { column: arrowDownPosition });
                socket.emit("computer1_move");
                setDebouncedEnter(null);
              }, 200)
            );
          }
          break;
        default:
          break;
      }
    };

    if (!popupIsDisplayed) window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (debouncedEnter) {
        clearTimeout(debouncedEnter);
      }
    };
  }, [arrowDownPosition, debouncedEnter, popupIsDisplayed, socket]);

  const handleReset = () => {
    socket.emit("reset");
    window.location.reload();
    socket.emit("computer1_move");
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
      <div className="w-full flex items-center justify-center">
        <div className="relative">
          <div className="h-16">
            <svg
              className="absolute top-0 z-10 w-16"
              style={{ left: `${arrowDownPosition * 80 + 16}px` }}
              width="80"
              height="61"
              viewBox="0 0 80 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.4287 55.6536L77.85 11.2167C79.2559 9.16454 80 7.09682 80 5.37815C80 2.05542 77.3333 -1.16567e-07 72.8695 -3.11684e-07L7.12013 -3.18568e-06C2.66155 -3.38057e-06 -8.97319e-08 2.05282 -2.34633e-07 5.36778C-3.09872e-07 7.08905 0.74472 9.12374 2.15449 11.1805L32.5752 55.6381C34.5348 58.4971 37.1717 60.0805 40.0036 60.0805C42.8335 60.0811 45.4698 58.5159 47.4287 55.6536Z"
                fill="#FE1814"
              />
            </svg>
          </div>
          <Board board={board} move={move} turn={turn} />
        </div>
      </div>
    </div>
  );
};

export default HumanVsBot;
