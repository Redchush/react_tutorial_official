import ProfileValidator from "../../js/service/ProfileValidator";

describe('ProfileValidator', () => {
  it("not empty validator", ()=> {
    let nameValidator = ProfileValidator.validators['sign'][ProfileValidator.TYPES.FULL];
    expect(nameValidator).toEqual(expect.anything());
  });
  it('one sign should be valid', () => {
    let result =  ProfileValidator.validate("sign", "full", "a");
    expect(result).toBeTruthy();
  });
  it('two sign should be invalid', () => {
    let result =  ProfileValidator.validate("sign", "full", "aa");
    expect(result).toBeFalsy();
  });
  it("hex value should be valid", ()=>{
    expect(ProfileValidator.validate("signColor", "full", "#999999")).toBeTruthy();
  })
});