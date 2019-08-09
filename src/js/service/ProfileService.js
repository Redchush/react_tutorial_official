
import * as R from "ramda";
import ProfileValidator from "./ProfileValidator";


class ProfileService{

  constructor() {
    this.validate = R.curry(ProfileValidator.validate);
  }
  getProfileBySign(profiles, sign){
    if(!sign){
      return;
    }
    return profiles.find((profile) => {return profile.sign === sign});
  }
}

export default new ProfileService()