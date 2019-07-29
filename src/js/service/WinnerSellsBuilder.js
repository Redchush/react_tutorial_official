import * as R from 'ramda';

class WinnerSellsBuilder{

  static memo = {};

  static Builder = function (squareSize) {
    let firstHorLine = R.range(0, squareSize);
    let firstVertLine = firstHorLine.map( multiplier => multiplier*squareSize);

    this.getLeftTopToRightBottomDiagonal = function (squareSize) {
      return firstHorLine.map(index => index === 0 ? index : index*(squareSize + 1));
    };
    this.getRightTopToLeftBottomDiagonal = function (squareSize) {
      return R.range(1, squareSize + 1).map(index => index*(squareSize - 1));
    };
    this.getHorizontalLine = function (squareSize, lineIndex) {
      return lineIndex === 0 ? firstHorLine : R.range(lineIndex*squareSize, squareSize*(lineIndex + 1));
    };
    this.getVerticalLine = function (squareSize, lineIndex) {
      return lineIndex === 0 ? firstVertLine : firstVertLine.map(number => number + lineIndex);
    };
  };

  static getWinnerCells = function (squareSize) {
    if(WinnerSellsBuilder.memo[squareSize]){
      return WinnerSellsBuilder.memo[squareSize];
    }
    let Builder = new WinnerSellsBuilder.Builder(squareSize);
    let resultArraySize = squareSize*2 + 2;
    let result = new Array(resultArraySize).fill([]);
    for(let i = 0; i < squareSize; i++){
      result[i] = Builder.getHorizontalLine(squareSize, i);
      result[i + squareSize] = Builder.getVerticalLine(squareSize, i);
    }
    result[resultArraySize - 2] = Builder.getLeftTopToRightBottomDiagonal(squareSize);
    result[resultArraySize - 1] = Builder.getRightTopToLeftBottomDiagonal(squareSize);
    WinnerSellsBuilder.memo[squareSize] = result;
    return result;
  };
}

export default WinnerSellsBuilder