import * as R from "ramda";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

class GameService{

  isGameOver = (squares)=> this.calculateWinner(squares) !== null || !this.hasAnyEmpty(squares);

  getCellCount = (boardSize)=> Math.pow(boardSize,2);

  calculateWinner(squares) {
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if ((squares[a] !== null) && (squares[a] !== undefined) && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

   hasAnyEmpty(squares){
    if(!squares){
      return false;
    }
    return R.any((item) => {return item !== 0 && !item}, squares)
  }
}

export default new GameService()