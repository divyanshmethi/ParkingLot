/**
 * @description a basic object with two fields: Number and AGE
 */
class Car {
  constructor (NUMBER, AGE) {
      this.NUMBER = NUMBER; // unique property of an instance of car class
      this.AGE = AGE;
  }

  /**
   *
   * @param {Object} carA an instance of Car class
   * @param {Object} carB an instance of Car class
   * @description returns true if two Car Objects are equal, false if both are not equal
   */
  isCarEqual (carA, carB) {
      return ((carA.NUMBER.toLowerCase() === carB.NUMBER.toLowerCase())
          && carA.AGE === carB.AGE);
  }
}

module.exports = Car;