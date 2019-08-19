
import * as React from "react";
import Square from "./Square";


function renderSquare(props, i) {
  let value = (props.cells.get(i) !== null) ? props.profiles.get(props.cells.get(i)).sign : null;
  let color = (props.cells.get(i) !== null) ? props.profiles.get(props.cells.get(i)).signColor : null;
  return <Square key={'cell-' + i}
                 value={value}
                 color={color}
                 cellSize={props.cellSize}
                 onClick={() => props.handleClickCell(i)}
  />;
}
function renderBoard(props, arr){
  const width = arr.length;
  return arr.map((val, idx1) =>
     (
      <div className="board-row" key={'row' + idx1}>
        {arr.map((val, idx2) => renderSquare(props, idx2 + idx1 * width))}
      </div>
    ))
}

const BoardView = props  => (
  <React.Fragment>
    <div className="status">{props.status}</div>
    <div className="desc">
      <div className={'shadow ' + (props.isEnd ? 'show' : 'hide')}></div>
      <div className="game-field">
        {renderBoard(props, new Array(props.boardSize).fill(null))}
      </div>
    </div>
    <button className="btn-form-submit" onClick={props.handleReload}> Reload </button>
  </React.Fragment>
);

export default BoardView;
