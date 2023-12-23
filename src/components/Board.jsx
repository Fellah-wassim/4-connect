export const Board = (props) => {
  const renderCell = (row, col, value) => (
    <div
      key={col}
      className={`${
        value === 1 ? "bg-black" : "bg-white"
      } w-16 h-16 border border-gray-500 rounded-full flex items-center justify-center`}
    >
      {value}
    </div>
  );

  const renderRow = (row, rowData) => (
    <div key={row} className="flex">
      {rowData.map((value, col) => renderCell(row, col, value))}
    </div>
  );
  return (
    props.board && (
      <div className="w-fit flex flex-col items-cente">
        {props.board.map((rowData, row) => renderRow(row, rowData))}
      </div>
    )
  );
};
