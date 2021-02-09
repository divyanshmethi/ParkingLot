#!/usr/bin/env node
const fs = require('fs')

const	commandLineInputs = process.argv;

/**
 * @description importing the parkingLot class
 */
const Parking = require('./modules/parkingLot.js');
const parkingLot = new Parking();

// to avoid memory leaks errors, default max listeners = 10
require('events').EventEmitter.defaultMaxListeners = 0;

if (commandLineInputs[commandLineInputs.length - 1].endsWith('.txt')) {
    fs.readFile(commandLineInputs[2], 'utf-8', function (err, data) {
        if (err) {
            console.log('Error in reading file');
        }
        const arr = data.split('\n');
		  for (let i = 0; i < arr.length; i++) {
			  processUserCommands(arr[i]);
        }

        process.exit(0);
    });
}

/**
 *
 * @param {String} input
 * @description function to call different functions based on 
 * commands that the users enters
 */
function processUserCommands (input) {
	const userCommand = input.split(' ')[0];
    switch (userCommand) {
        
        case 'Create_parking_lot':
            try {
              const totalParkingSlots = parkingLot.createParkingLot(input);
              console.log('Created parking of ' + totalParkingSlots + ' slots');
            }
            catch (err) {
              console.log(err.message);
            }
            break;
        
        case 'Park':
            try {
              const parkingSlotNumber = parkingLot.parkCar(input);
              console.log('Car with vehicle registration number ' + input.split(' ')[1] + ' has been parked at slot number ' + parkingSlotNumber);
            }
            catch (err) {
              console.log(err.message);
            }
            break;
        
        case 'Leave':
            try {
              const carNum = parkingLot.leaveCar(input);
              console.log('Slot number ' + (input.split(' ')[1] - 1) + ' is vacated, the car with vehicle registration number ' + carNum);
            }
            catch (err) {
              console.log(err.message);
            }
            break;
        
        case 'Vehicle_registration_number_for_driver_of_age':
            registrationNumbers = parkingLot.getCarsWithSameAgeDriver(input);
            if (registrationNumbers) {
              console.log(registrationNumbers);
			      }
			      else {
              console.log('Sorry, Car with given Driver Age is not found');
            }
            break;
        
        case 'Slot_numbers_for_driver_of_age':
            parkingSlotNumbers = parkingLot.getSlotsWithSameAgeDriver(input);
            if (parkingSlotNumbers) {
              console.log(parkingSlotNumbers);
            }
            else {
              console.log('Sorry, Cars with given Driver Age is not found');
            }
            break;
        
        case 'Slot_number_for_car_with_number':
            parkingSlotNumber = parkingLot.getSlotByCarNumber(input);
            if (parkingSlotNumber) {
              console.log(parkingSlotNumber);
			      }
			      else {
              console.log('Sorry, Car with given registration number is not found');
            }
            break;

        case 'exit':
			      process.exit(0);
        default:
            console.log(input + ' is an invalid command');
            break;
    }
}