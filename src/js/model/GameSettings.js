/**
 * @class
 * @param {Number} boardSize
 * @param {Number} cellSize
 */
class GameSettings{

  static NAMES = {
    boardSize : "boardSize",
    cellSize : "cellSize"
  };
  /**
   *
   * @param {Number} boardSize
   * @param {Number} cellSize
   */
  constructor(boardSize, cellSize){
    this.boardSize = boardSize;
    this.cellSize = cellSize;
    this.fontSize = null;
    this._setFontSize();
    Object.freeze(this);
  }
  set(prop, val){
    if(prop === GameSettings.NAMES.boardSize){
      return this.setBoardSize(val);
    }
    if(prop === GameSettings.NAMES.cellSize){
      return this.setCellSize(val);
    }
  }

  _setFontSize(){
    if(this.cellSize){
      this.fontSize = Math.round(this.cellSize/1.6);
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