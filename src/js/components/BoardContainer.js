import React from 'react'
import Square from "./Square";
import GameService from "../service/GameService"
import * as R from 'ramda';

class BoardContainer extends React.PureComponent{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = R.bind(this.renderSquare, this);
    this.handleReload = R.bind(this.handleReload, this);
    this.preventClick = R.bind(this.preventClick, this);
    this.state = {
      squares : new Array(9).fill(null),
      xIsNext: true
    }
  }


  handleClick(i) {
      const newSquares = this.state.squares.slice();
      if(GameService.calculateWinner(newSquares) !== null || newSquares[i] !== null){
        return;
      }
      newSquares[i] = this.getPlayerIndex();
      this.setState({
        squares: newSquares,
        xIsNext: !this.state.xIsNext,
      });
  }

  getProfileBySign(sign){
    if(!sign){
      return;
    }
    return this.props.profiles.find((profile) => {return profile.sign === sign});
  }

  getPlayerIndex(){
    return this.state.xIsNext ? 0 : 1;
  }
  getCurrentProfile(){
   let inx = this.getPlayerIndex();
   return this.props.profiles.get(inx);
  }
  handleReload(){
    this.setState({
      squares: new Array(9).fill(null),
      xIsNext: true,
      winner : {}
    })
  }
  preventClick(evt){
    evt.preventDefault();
  }

  renderBoard(arr){
    const renderSquere = this.renderSquare;
    const width = arr.length;

    return arr.map((val, idx1) => {
      return (
        <div className="board-row" key={'row' + idx1}>
          {arr.map((val, idx2) => renderSquere(idx2 + idx1 * width))}
        </div>
      )
    })
  }

  render() {
    const winnerIndex = GameService.calculateWinner(this.state.squares);
    const winner = (winnerIndex === 0 || winnerIndex === 1) ? this.props.profiles.get(winnerIndex) : null;
    let status = winner ? 'Победитель ' + winner.name :
      'Next player: ' + this.getCurrentProfile().name;
    let arr =  new Array(3).fill(null);
    return (
      <React.Fragment>
        <div className="status">{status}</div>
        <div className="desc">
          <div className={'shadow ' + (winner ? 'show' : 'hide')} onClick={this.preventClick}></div>
          <div className="game-field">
            {this.renderBoard(arr)}
          </div>
        </div>
        <button onClick={this.handleReload}> Reload </button>
      </React.Fragment>
    );
  }

}
export default BoardContainer