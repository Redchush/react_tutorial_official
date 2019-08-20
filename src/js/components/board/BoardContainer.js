import React from 'react'
import GameService from "../../service/GameService"
import * as R from 'ramda';
import BoardView from "./BoardView";
// const { List } = require('immutable');
import Immutable from 'immutable';
import * as PropTypes from "prop-types";
import ProfileService from "../../service/ProfileService";



class BoardContainer extends React.Component{

  constructor(props) {
    super(props);
    this.handleReload = R.bind(this.handleReload, this);
    BoardContainer.preventClick = R.bind(BoardContainer.preventClick, this);
    this.state = this.getDefaultState();
  }

  getDefaultState = () => { return {
    cells: Immutable.List(new Array(GameService.getCellCount(this.props.settings.boardSize)).fill(null)),
    xIsNext: true
  }};

  static preventClick(evt){
    evt.preventDefault();
  }

  handleClickCell = (i) => {
      const newSquares = this.state.cells.toArray();
      if(newSquares[i] !== null || GameService.isGameOver(newSquares)){
        return;
      }
      const newList = this.state.cells.set(i, this.getPlayerIndex());
      this.setState({
        cells: newList,
        xIsNext: !this.state.xIsNext,
      });
  };

  getPlayerIndex = () => this.state.xIsNext ? 0 : 1;

  getCurrentProfile = () => this.props.profiles.get(this.getPlayerIndex());

  handleReload = () => this.setState(this.getDefaultState());

  render() {
    let isEnd = false;
    let cells = this.state.cells.toArray();
    const winnerIndex = GameService.calculateWinner(cells);
    const winner = (winnerIndex === 0 || winnerIndex === 1) ? this.props.profiles.get(winnerIndex) : null;
    let status = winner ? 'Победитель ' + winner.name : 'Next player: ' + this.getCurrentProfile().name;
    if(!winner && !GameService.hasAnyEmpty(cells)){
      status = "Ничья!";
      isEnd = true;
    }
    return (
      <BoardView
        handleReload={this.handleReload}
        handleClickCell={this.handleClickCell}
        handleClickShadow={BoardContainer.preventClick}
        profiles={this.props.profiles}
        cells={this.state.cells}
        status={status}
        boardSize={this.props.settings.boardSize}
        cellSize={this.props.settings.cellSize}
        fontSize={this.props.settings.fontSize}
        isEnd={winner || isEnd}
      />
    );
  }
}
BoardContainer.propTypes = {
  settings: PropTypes.object,
  profiles: PropTypes.object
};

export default BoardContainer