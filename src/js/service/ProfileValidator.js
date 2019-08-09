
function Validation(full, char) {
  this.full = full;
  this.char = char;
}

class ProfileValidator{
  constructor(){
    this.validators = {
      name: new Validation(/^([a-z0-9]{2,10})$/ig, /^([a-z0-9]{0,10})$/ig),
      sign: new Validation(/^([.])$/g, /^([.]?)$/g),
      signColor: new Validation(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ig, /^#([A-Fa-f0-9]{0,6})$/ig),
    }
  }
  validate(prop, type, value){
    let validator = this.validators[prop];
    if(validator){
      return validator[type].test(value);
    }
    return false;
  }
}

export default new ProfileValidator();