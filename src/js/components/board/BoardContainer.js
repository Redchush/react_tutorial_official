import React from 'react'
import GameService from "../../service/GameService"
import * as R from 'ramda';
import BoardView from "./BoardView";
// const { List } = require('immutable');
import Immutable from 'immutable';



class BoardContainer extends React.PureComponent{

  constructor(props) {
    super(props);
    this.handleClickCell = this.handleClickCell.bind(this);
    this.handleReload = R.bind(this.handleReload, this);
    BoardContainer.preventClick = R.bind(BoardContainer.preventClick, this);
    this.state = BoardContainer.getDefaultState();
  }

  static getDefaultState(){
    return {
      cells: Immutable.List(new Array(9).fill(null)),
      xIsNext: true
    }
  }
  static preventClick(evt){
    evt.preventDefault();
  }

  handleClickCell(i) {
      const newSquares = this.state.cells.toArray();
      if(GameService.calculateWinner(newSquares) !== null || newSquares[i] !== null){
        return;
      }
      const newList = this.state.cells.set(i, this.getPlayerIndex());
      this.setState({
        cells: newList,
        xIsNext: !this.state.xIsNext,
      });
  }
  getPlayerIndex(){
    return this.state.xIsNext ? 0 : 1;
  }
  getCurrentProfile(){
   let inx = this.getPlayerIndex();
   return this.props.profiles.get(inx);
  }
  handleReload(){
    this.setState(BoardContainer.getDefaultState());
  }

  render() {
    const winnerIndex = GameService.calculateWinner(this.state.cells.toArray());
    const winner = (winnerIndex === 0 || winnerIndex === 1) ? this.props.profiles.get(winnerIndex) : null;
    let status = winner ? 'Победитель ' + winner.name : 'Next player: ' + this.getCurrentProfile().name;
    return (
      <BoardView
        handleReload={this.handleReload}
        handleClickCell={this.handleClickCell}
        handleClickShadow={BoardContainer.preventClick}
        profiles={this.props.profiles}
        cells={this.state.cells}
        status={status}
        size={this.props.settings.boardSize}
        winner={winner}
      />
    );
  }

}
export default BoardContainer