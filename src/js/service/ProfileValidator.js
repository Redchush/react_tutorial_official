
function Validation(full, char) {
  this.full = full;
  this.char = char;
}

class ProfileValidator{
  constructor(){
    this.validators = {
      name: new Validation(/^([a-z0-9]{2,10})$/i, /^([a-z0-9]{0,10})$/i),
      sign: new Validation(/^.$/, /^([.]?)$/),
      signColor: new Validation(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/im, /^#([A-Fa-f0-9]{0,6})$/i),
    }
  }

  TYPES = {
    FULL : "full",
    CHAR : "CHAR"
  };

  validate(prop, type, value){
    let regexp = this.validators[prop] && this.validators[prop][type];
    if(regexp){
      return regexp.test(value);
    } else {
      console.error("No such regexp for " + prop + " and " + type);
    }
    return false;
  }
}

export default new ProfileValidator();