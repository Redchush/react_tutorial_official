
const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ig;
const namePattern = /^([a-z0-9]{2,10})$/ig;
const signPattern = /^([.]{1})$/g;

const hexColorCharPatter = "";
const nameCharPattern = "";
const signCharPattern = "";

class ProfileService{
  static validationRegexp = {
    name: namePattern,
    sign: signPattern,
    signColor: hexColorPattern
  };


  getProfileBySign(profiles, sign){
    if(!sign){
      return;
    }
    return profiles.find((profile) => {return profile.sign === sign});
  }

  validate(prop, value){
    let validator = ProfileService.validationRegexp[prop];
    if(validator){
      return validator.test(value);
    }
    return false;
  }
}

export default new ProfileService()