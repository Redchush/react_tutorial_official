
import * as React from "react";
import Square from "./Square";
import * as PropTypes from "prop-types";


function renderSquare(props, i) {
  let cell = props.cells.get(i);
  let value = (cell !== null) ? props.profiles.get(cell).sign : null;
  let color = (cell !== null) ? props.profiles.get(cell).signColor : null;
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
      <div className={'shadow ' + (props.isEnd ? 'show' : 'hide')}/>
      <div className="game-field" style={{fontSize : props.fontSize}}>
        {renderBoard(props, new Array(props.boardSize).fill(null))}
      </div>
    </div>
    <button className="btn-form-submit" onClick={props.handleReload}> Reload </button>
  </React.Fragment>
);

BoardView.propTypes = {
  handleReload: PropTypes.func.isRequired,
  boardSize: PropTypes.number,
  fontSize: PropTypes.number,
  status: PropTypes.string,
  signToProfile: PropTypes.object,
  profiles : PropTypes.object
};

export default BoardView;
