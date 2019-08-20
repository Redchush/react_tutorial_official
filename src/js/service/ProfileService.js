
import * as R from "ramda";
import ProfileValidator from "./ProfileValidator";


class ProfileService{

  constructor() {
    this.validate = R.curry(ProfileValidator.validate);
  }

  /**
   *
   * @param {Array.<Profile>} profiles
   * @return {Map<string, Profile>}
   */
  mapProfileToSign = (profiles) => R.reduce((acc, val) => {
      acc.set(val.sign, val); return acc;
    }, new Map(), profiles);
}

export default new ProfileService()