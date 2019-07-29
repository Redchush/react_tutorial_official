import WinnerSellsBuilder from '../../js/service/WinnerSellsBuilder';

// [
//   0 1 2
//   3 4 5
//   6 7 8
// ]

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15

describe('WinnerSellsBuilder', () => {
  it('should fill the winner cells', () => {
    let result = WinnerSellsBuilder.getWinnerCells(3);
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
    expect(result).toEqual(lines);
  });

  it('should fill correctly the 4*4 diagonal', () => {
    let result = new WinnerSellsBuilder.Builder(4).getLeftTopToRightBottomDiagonal(4);
    expect(result).toEqual([0, 5, 10, 15 ]);
    let result2 = new WinnerSellsBuilder.Builder(4).getRightTopToLeftBottomDiagonal(4);
    expect(result2).toEqual([3, 6, 9, 12 ]);
  });

  it('should memorize results', () => {
    let result1 = WinnerSellsBuilder.getWinnerCells(5);
    let result2 = WinnerSellsBuilder.getWinnerCells(5);
    expect(result1).toBe(result2);
  })
});