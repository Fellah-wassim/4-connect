/* eslint-disable react/prop-types */

export const GameRules = (props) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-7xl self-center">Rules</p>
      <div className="flex flex-col gap-2">
        <p className="text-4xl">Objective</p>
        <p className="text-2xl">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-4xl">How To Play?</p>
        <ol className="text-2xl list-decimal">
          <li>1. Yellow goes first in the first game.</li>
          <li>
            2. Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>3. The game ends when there is a 4-in-a-row or a stalemate.</li>
        </ol>
      </div>

      <button onClick={() => props.toggleIsGameRules()} className="rounded-xl">
        <div className="flex text-2xl gap-2 justify-center font-bold">
          <>I Understand</>
        </div>
      </button>
    </div>
  );
};

export default GameRules;
