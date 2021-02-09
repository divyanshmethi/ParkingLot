const Car = require('./car.js');

/**
 * @description Base class for Parking lot
 */
class ParkingLot {

	constructor () {
        this.MAX_PARKING_SLOTS = 0; // Maximum number of parking slots available for parking
        this.parkingSlots = new Array(); // Array to hold information of parking slots
    }

	/**
	 *
	 * @param {String} input input string with cmd and number of slots
	 * @description creates a parking lot with given maximum slot numbers.
	 * Throws an error if zero or negative input is provided
	 */
	createParkingLot (input) {
		this.MAX_PARKING_SLOTS = parseInt(input.split(' ')[1]);
		if (this.MAX_PARKING_SLOTS <= 0) {
			// min number of slots: 1
			throw new Error('Minimum one slot is required to create parking slot');
		}
        for (let i = 0; i < this.MAX_PARKING_SLOTS; i++) {
            this.parkingSlots.push(null);
        }
        return this.MAX_PARKING_SLOTS;
	}

	/**
	 *
	 * @param {String} input string with cmd, car number and driver's age
	 * @description allocates nearest slot number to incoming cars.
	 * Throws an error if parking lot is empty/full or
   * if only one field (either registration number or age) is provided.
	 */
    parkCar (input) {
      const n = this.parkingSlots.length;
    	if (this.MAX_PARKING_SLOTS > 0) {
			  let car, carNumber, driverAge;
	    	if (this.findNearestAvailableSlot(this.parkingSlots) == true) {
		  		for (let i = 0; i < n; i++) {
		  			if (this.parkingSlots[i] == null) {
              carNumber = input.split(' ')[1];
              driverAge = input.split(' ')[3];
              if (carNumber && driverAge) {
                car = new Car(carNumber, driverAge);
                this.parkingSlots[i] = car;
                i = i + 1;
                return i;
              }
              else {
                throw new Error('Please provide registration number and Age both');
              }
		  			}
		  		}
			  }
			  else {
		  		throw new Error('Sorry, parking lot is full');
		  	  }
      }
      else {
	  		throw new Error('Minimum one slot is required to create parking slot');
	  	}
	}

	/**
	 *
	 * @param {String} input cmd with slot number
   * @returns existing car name
	 * @description Empties the slot for the provided number.
	 * Throws an error if parking lot is empty or
	 * slot number is not found
	 */
    leaveCar (input) {
      let existingCarNum;
    	if (this.MAX_PARKING_SLOTS > 0) {
			  let index = parseInt(input.split(' ')[1] - 1);
        if (index >= this.MAX_PARKING_SLOTS) {
          throw new Error(`Slot number ${index + 1} is not found`);
        }
        else if (this.parkingSlots[index] === null) {
          throw new Error(`Slot number ${index + 1} is already free`);
        }
          else if (index > -1 && index <= this.parkingSlots.length) {
            existingCarNum = this.parkingSlots[index].NUMBER;
            this.parkingSlots[index] = null;
            index = index + 1;
            return existingCarNum;
        }
		  }
		  else {
			  throw new Error('Sorry, parking lot is empty');
		  }
	  }

	/**
	 *
	 * @param {String} input
	 * @description returns a comma separated string of registration numbers of cars where driver age is equal to input.
	 * It returns null if car is not found
	 */
    getCarsWithSameAgeDriver (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
	      const sameAgeDriverCarsArray = new Array();
        const inputAge = input.split(' ')[1];
	      for (let i = 0; i < this.parkingSlots.length; i++) {
	      	if (this.parkingSlots[i] && this.parkingSlots[i].AGE.trim() == inputAge.trim()) {
        		sameAgeDriverCarsArray.push(this.parkingSlots[i].NUMBER);
	        }
	      }
    		return sameAgeDriverCarsArray.join(', ');
		  }
		  else {
			  return null;
		  }
	  }

	/**
	 *
	 * @param {String} input
	 * @description returns a comma separated string of slot numbers for cars.
	 * It returns null if cars having age is not found.
	 */
    getSlotsWithSameAgeDriver (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
	    	const slotsWithSameAgeDriver = new Array();
        const inputAge = input.split(' ')[1];
	        for (let i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].AGE == inputAge) {
	        		slotsWithSameAgeDriver.push(i + 1);
	        	}
	        }
        return slotsWithSameAgeDriver.join(', ');
      }
      else {
		    return null;
	    }
	  }

	/**
	 *
	 * @param {String} input
	 * @description returns slot number assigned to the given car number.
	 * Returns null if car is not found.
	 */
    getSlotByCarNumber (input) {
      if (this.MAX_PARKING_SLOTS > 0) {
        let ele = 'Not found';
          for (let i = 0; i < this.parkingSlots.length; i++) {
            const inp = input.split(' ')[1];
            if (this.parkingSlots[i] && this.parkingSlots[i].NUMBER.trim() == inp.trim()) {
              ele = i + 1;
            }
          }
        return ele;
      }
      else {
        return null;
      }
	  }

    /**
     * @description returns the nearest available slot
     * Helper method used by parkCar() method
     */
    findNearestAvailableSlot () {
      let ele = false;
      for (let i = 0; i < this.parkingSlots.length; i++) {
        if (this.parkingSlots[i] == null) {
          ele = true;
        }
      }
      return ele;
    }
}

module.exports = ParkingLot;
