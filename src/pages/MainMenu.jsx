import { useState } from "react";
import GameRules from "../components/Menu/GameRules.jsx";
import "../index.css";
import logo from "../assets/mainMenu/logo.png";
import logo2 from "../assets/mainMenu/logo2.png";
import MenuList from "../components/Menu/MenuList.jsx";

const MainMenu = () => {
  const [isGameRulesPage, setIsGameRulesPage] = useState(false);

  const toggleIsGameRules = () => {
    setIsGameRulesPage(!isGameRulesPage);
  };

  return (
    <div className="main-menu-container h-[100vh] flex justify-center items-center text-bold text-white bg-darkPurple">
      <div className="relative flex flex-col gap-10 justify-center items-center overflow-hidden w-[90%] lg:w-[35%] md:w-[60%] min-h-[80%] border-2 bg-[#17074E] border-lightPurple rounded-md p-6">
        {isGameRulesPage ? (
          <GameRules toggleIsGameRules={toggleIsGameRules} />
        ) : (
          <>
            <img className="max-w-[60%]" src={logo} alt="logo" />
            <img className="max-w-[80%]" src={logo2} alt="logo" />
            <MenuList toggleIsGameRules={toggleIsGameRules} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
