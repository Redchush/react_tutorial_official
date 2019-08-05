

import React from "react";

function Square(props) {
  let styles = {};
  if(props.color){
    styles.color = props.color;
  }
  return (
    <button className="square"
            style={styles}
            onClick={props.onClick}>
        {props.value}
    </button>
  )
}


export default Square
