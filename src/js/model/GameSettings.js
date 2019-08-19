/**
 * @class
 */
class GameSettings{

  constructor(boardSize, cellSize){
    this.boardSize = boardSize;
    this.cellSize = cellSize;
    Object.freeze(this);
  }
  set(prop, val){
    if(prop === "boardSize"){
      return this.setBoardSize(val);
    }
    if(prop === "cellSize"){
      return this.setCellSize(val);
    }
  }
  setBoardSize(val){
    return new GameSettings(val, this.cellSize);
  }
  setCellSize(val){
    return new GameSettings(this.boardSize, val);
  }
}

export default GameSettings;