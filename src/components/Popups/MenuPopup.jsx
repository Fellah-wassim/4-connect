/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const MenuPopup = (props) => {
  return (
    <div className="fixed w-full top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col gap-10 justify-center items-center overflow-hidden w-[90%] lg:w-[35%] md:w-[60%] min-h-[80%] border-4 bg-[#17074E] border-lightPurple rounded-md p-6">
        <p className="text-7xl">PAUSE</p>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <button onClick={props.resumeGame} className="w-[80%] rounded-3xl">
            <div className="rounded-3xl">Resume Game</div>
          </button>
          <button onClick={props.restartGame} className="w-[80%] rounded-3xl">
            <div className="rounded-3xl">Restart Game</div>
          </button>
          <button onClick={props.restartGame} className="w-[80%] rounded-3xl">
            <Link to="/">
              <div className="rounded-3xl">Main Menu</div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
