
import * as React from "react";

function renderSquare(i) {
  return <Square key={'cell-' + i}
                 value={(this.state.squares[i] !== null) ? this.props.profiles.get(this.state.squares[i]).sign : null}
                 onClick={() => this.handleClick(i)}
  />;
}


var BoardView = function (props) {


  return (
    <div>{props.foo}</div>
  );
}


export default BoardView;
