

import React from "react";
import * as PropTypes from "prop-types";
import * as R from "ramda";

let addColor =  (props,styles) => (props.color ? { ...styles, color: props.color } : styles);
let addWidth = (props, styles) => (props.cellSize ? {...styles,
  width: `${props.cellSize}px`,
  height: `${props.cellSize}px`} : props.cellSize);

let buildStyles = (props, styles={})=> R.compose(addColor, addWidth);

function Square(props) {
  let styles = buildStyles(props);

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
