import Util from "../../js/util/Util";

describe('Util', () => {
  it('createValidationResult create new object by set to each property true value (shallow) ', () => {
    let test = {
      a: "a1",
      b: "b1"
    };
    let validationResult = Util.createValidationResult(test);
    expect(validationResult).toEqual({a: true, b: true})
});
  it('createValidationResult not change initial object ', () => {
    let test = {
      a: "a1",
      b: "b1"
    };

    let validationResult = Util.createValidationResult(test);
    expect(test.a).toEqual("a1");
    expect(test.b).toEqual("b1");
    expect(Object.keys(test).length).toEqual(2);
  });

});