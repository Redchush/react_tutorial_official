

import React from "react";
import * as PropTypes from "prop-types";

function Square(props) {
  let styles = {};
  if(props.color){
    styles.color = props.color;
  }
  if(props.cellSize){
    let dimension =  props.cellSize + "px";
    styles.width = dimension;
    styles.height = dimension;
  }

  return (
    <button className="square"
            style={styles}
            onClick={props.onClick}>
        {props.value}
    </button>
  )
}
Square.propTypes = {
  cellSize: PropTypes.number,
  color: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};


export default Square
