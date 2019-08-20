import * as R from "ramda";
import GameSettings from "../model/GameSettings";

const  trueValAccum = (accumulator, val) => { accumulator[val] = true; return accumulator};


class Util{
  /**
   * Create new object by set to each property true value (shallow)
   * @param {Object}keysSource
   */
  createValidationResult(keysSource){
    return R.reduce(trueValAccum, {}, R.keys(keysSource))
  }
}

export default new Util();