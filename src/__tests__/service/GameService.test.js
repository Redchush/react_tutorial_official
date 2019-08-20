import GameService from "../../js/service/GameService";

describe('GameService', () => {
  it('should define whether present empty cells', () => {
    let result1 = GameService.hasAnyEmpty([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(result1).toBeFalsy();
    let result2 = GameService.hasAnyEmpty([
      0, 1, 2, 3, 4, undefined,6, 7, 8

    ]);
    expect(result2).toBeTruthy();
  });
  it('get cells count', () => {
    expect( GameService.getCellCount(3)).toEqual(9);
  });

});