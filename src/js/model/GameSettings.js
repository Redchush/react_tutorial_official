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
    return new GameSettings(val);
  }
  setCellSize(val){
    return new GameSettings(val);
  }
}

export default GameSettings;