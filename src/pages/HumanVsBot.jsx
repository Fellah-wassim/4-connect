import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Board } from "../components/Board";

const HumanVsBot = () => {
  const socket = io.connect("http://127.0.0.1:5000");
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const socket = io.connect("http://127.0.0.1:5000");
    socket.on("initial_state", (data) => {
      setBoard(data.board);
    });

    socket.on("update_state", (data) => {
      setBoard(data.board);
      const gameOverResult = data.game_over;

      if (gameOverResult === 1) {
        console.log("Human wins!");
      } else if (gameOverResult === 2) {
        console.log("Computer wins!");
      } else if (gameOverResult === 0) {
        console.log("It's a draw!");
      }
    });

    socket.emit("computer1_move");

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMove = (column) => {
    socket.emit("human_move", { column });
  };

  return (
    <div>
      Hello World
      <button onClick={() => sendMove(0)}>Send human Move</button>
      <Board board={board} />
    </div>
  );
};

export default HumanVsBot;
