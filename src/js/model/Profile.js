class Profile{

  constructor(id, name, sign){
    this.id = id;
    this.name = name;
    this.sign = sign;
    Object.freeze(this);
  }
  set(prop, val){
    if(prop === "name"){
      return this.setName(val);
    }
    if(prop === "sign"){
      return this.setSign(val);
    }
  }

  setName(val){
    return new Profile(this.id, val, this.sign);
  }
  setSign(val){
    return new Profile(this.id, this.name, val);
  }
}

export default Profile