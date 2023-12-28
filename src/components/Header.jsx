/* eslint-disable react/prop-types */
import { MenuPopup } from "./Popups/MenuPopup";
import logo from "../assets/logo.png";
import "../index.css";

export const Header = (props) => {
  return (
    <div className="flex justify-between items-center gap-2 px-20 py-10 max-sm:px-2 max-sm:py-1">
      {props.popupIsDisplayed && (
        <MenuPopup
          resumeGame={() => {
            props.setPopupIsDisplayed(false);
          }}
          restartGame={() => props.handleReset()}
        />
      )}
      <button className="bg-purple2 rounded-full">
        <div
          className="border-2 border-lightPurple bg-purple2 rounded-full px-10 max-sm:px-6"
          onClick={() => {
            props.setPopupIsDisplayed(true);
          }}
        >
          Menu
        </div>
      </button>
      <div>
        <img className="min-w-28" src={logo} alt="logo" />
      </div>
      <button
        className="bg-purple2 rounded-full"
        onClick={() => props.handleReset()}
      >
        <div className="border-2 border-lightPurple bg-purple2 rounded-full px-10 max-sm:px-6">
          Restart
        </div>
      </button>
    </div>
  );
};
