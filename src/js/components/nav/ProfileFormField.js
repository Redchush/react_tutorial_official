import ProfileValidator from "../../service/ProfileValidator";
import * as R from "ramda";


class ProfileFormField{

  /**
   *
   * @returns {{name: ProfileFormField, sign: ProfileFormField, signColor: ProfileFormField}}
   */
  static constructAll = function (){
    let validate = R.curry(ProfileValidator.validate);
    return {
      name: new ProfileFormField("name", "Name", "Please, enter a valid user name", validate("name")),
      sign: new ProfileFormField("sign", "Sign", 'Please, enter a valid one sign' , validate("sign")),
      signColor: new ProfileFormField("signColor", "Color", 'Please, enter a valid hex color. Example: #000000', validate("signColor"))
    }
  };
  constructor(prop, label, errorMsg, validator){
    this.prop = prop;
    this.label = label;
    this.errorMsg = errorMsg;
    this.validateChar = validator("char");
    this.validateString = validator("full");
  }
}
export default ProfileFormField;