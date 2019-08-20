/**
 * Immutable
 * @class
 * @param id
 * @param name
 * @param sign
 * @param color
 */
class Profile{
  /**
   *
   * @param id
   * @param name
   * @param sign
   * @param color
   */
  constructor(id, name, sign, color){
    this.id = id;
    this.name = name;
    this.sign = sign;
    this.signColor = color;
    Object.freeze(this);
  }
  set(prop, val){
    if(prop === "name"){
      return this.setName(val);
    }
    if(prop === "sign"){
      return this.setSign(val);
    }
    if(prop === "signColor"){
      return this.setSignColor(val);
    }
  }
  setName(val){
    return new Profile(this.id, val, this.sign, this.signColor);
  }
  setSign(val){
    return new Profile(this.id, this.name, val, this.signColor);
  }
  setSignColor(val){
    return new Profile(this.id, this.name, this.sign, val);
  }
}

export default Profile