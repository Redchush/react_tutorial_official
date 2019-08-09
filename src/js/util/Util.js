import * as R from "ramda";

class Util{

  objFromArray(array, value){
    R.reduce((accumulator, val) => { accumulator[val] = value; return accumulator}, {}, array);
  }
}

export default new Util();