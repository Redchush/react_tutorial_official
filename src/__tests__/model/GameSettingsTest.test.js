import GameSettings from "../../js/model/GameSettings";

describe('GameSettings', () => {
  it("create new object after set", ()=> {
      let gameSettings = new GameSettings(22, 33);
      expect(gameSettings.setBoardSize(30) !== gameSettings);
  });
  it('set proper font size after change', () => {
    let gameSettings = new GameSettings(22, 40);
    expect(gameSettings.fontSize).toEqual(25);
  });
  it('set proper font size after change', () => {
    let gameSettings = new GameSettings(12, 33);
    let newSettings = gameSettings.setCellSize(40);
    expect(newSettings.fontSize).toEqual(25);
  });

});