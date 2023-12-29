/* eslint-disable react/prop-types */
import yellowCircle from "../assets/game/yellowCircle.png";
import redCircle from "../assets/game/redCircle.png";

export const Board = (props) => {
  function renderSwitch(value) {
    switch (value) {
      case 1:
        return <img src={redCircle} alt="red circle" />;

      case 2:
        return <img src={yellowCircle} alt="yellow circle" />;

      default:
        // if (props.move[1] === col) {
        //   return props.turn === 1 ? (
        //     <img src={yellowCircle} alt="yellow circle" />
        //   ) : (
        //     <img src={redCircle} alt="red circle" />
        //   );
        // }
        return (
          <div className="bg-darkPurple w-16 h-16 max-md:w-8 max-md:h-8 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="bg-purple w-16 h-16 max-md:w-8 max-md:h-8 rounded-full absolute top-[-10px] max-md:top-[-5px]"></div>
          </div>
        );
    }
  }

  const renderCell = (row, col, value) => (
    <div
      key={col}
      className="w-16 h-16 max-md:w-8 max-md:h-8 rounded-full flex items-center justify-center m-2"
    >
      {renderSwitch(value, col)}
    </div>
  );

  const renderRow = (row, rowData) => (
    <div key={row} className="flex">
      {rowData.map((value, col) => renderCell(row, col, value))}
    </div>
  );

  return (
    <>
      {props.board && (
        <div className="w-fit bg-darkPurple p-2 rounded-2xl">
          <div className="w-fit flex flex-col items-cente bg-lightPurple rounded-2xl">
            {props.board.map((rowData, row) => renderRow(row, rowData))}
          </div>
        </div>
      )}
    </>
  );
};
