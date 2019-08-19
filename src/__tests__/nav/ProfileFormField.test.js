import ProfileFormField from '../../js/components/nav/ProfileFormField';

describe('ProfileFormField', () => {
    it('should correctly construct fields', () => {
        let result = ProfileFormField.constructAll();

        expect(Object.keys(result)).toEqual(["name", "sign", "signColor"]);
    });
    it("sign with several chars is invalid", () =>{
        let validators = ProfileFormField.constructAll();
        let validateString = validators.sign.validateString("aa");
        expect(validateString).toBeFalsy();
    });
    it("sign with one char is valid", () =>{
        let validators = ProfileFormField.constructAll();
        let validateString = validators.sign.validateString("a");
        expect(validateString).toBeTruthy();
    })
  it("name Player2 is valid", () =>{
    let validators = ProfileFormField.constructAll();
    let validateString = validators.name.validateString("Player2");
    let result2 =  validators.name.validateString("Player2");
    expect(validateString).toBeTruthy();
    expect(result2).toBeTruthy();
  })

    // it('should fill correctly the 4*4 diagonal', () => {
    //     let result = new WinnerSellsBuilder.Builder(4).getLeftTopToRightBottomDiagonal(4);
    //     expect(result).toEqual([0, 5, 10, 15 ]);
    //     let result2 = new WinnerSellsBuilder.Builder(4).getRightTopToLeftBottomDiagonal(4);
    //     expect(result2).toEqual([3, 6, 9, 12 ]);
    // });
    //
    // it('should memorize results', () => {
    //     let result1 = WinnerSellsBuilder.getWinnerCells(5);
    //     let result2 = WinnerSellsBuilder.getWinnerCells(5);
    //     expect(result1).toBe(result2);
    // })
});