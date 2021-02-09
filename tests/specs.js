const assert = require('chai').assert,
      fs = require('fs'),
      Parking = require('../src/modules/parkingLot.js');

let commands = [], parkingLot = new Parking();

// test specs for unit testing the methods in Parking Lot class
describe('Test for reading input test data', function () {
  it('reading input.txt', function (done) {
    fs.readFile('./data/input.txt', 'utf-8', function (err, data) {
      if (err) {
        throw 'Unable to read input test file';
      }
      commands = JSON.parse(JSON.stringify(data)).split('\n');
      done();
    });
  });

  it('checking commands', function (done) {
      assert.equal(commands[0].split(' ')[0], 'Create_parking_lot');
      assert.equal(commands[1].split(' ')[0], 'Park');
      assert.equal(commands[10].split(' ')[0], 'Leave');
      done();
  });
});

// unit tests for functions in ParkingLot class
describe('Testing Functions in ParkingLot class', function () {

  it('Creating a Parking lot', function (done) {
      const totalParkings = parkingLot.createParkingLot(commands[0]);
      assert.equal(totalParkings, 6);
      done();
  });

  it('Allocating Parking to Car 1', function (done) {
      const ele = parkingLot.parkCar(commands[1]);
      assert.equal(ele, 1);
      done();
  });

  it('Allocating Parking to Car 2', function (done) {
      const ele = parkingLot.parkCar(commands[2]);
      assert.equal(ele, 2);
      done();
  });

  it('Allocating Parking to Car 3', function (done) {
    const ele = parkingLot.parkCar(commands[3]);
    assert.equal(ele, 3);
    done();
  });

  it('Allocating Parking to Car 4', function (done) {
      const ele = parkingLot.parkCar(commands[4]);
      assert.equal(ele, 4);
      done();
  });

  it('Allocating Parking to Car 5', function (done) {
    const ele = parkingLot.parkCar(commands[5]);
    assert.equal(ele, 5);
    done();
  });

  it('Allocating Parking to Car 6', function (done) {
    const ele = parkingLot.parkCar(commands[6]);
    assert.equal(ele, 6);
    done();
  });

  it('Exiting from slot 2', function (done) {
      const ele = parkingLot.leaveCar(commands[10]);
      assert.equal(ele, 'HR-01-HH-2341');
      done();
  });

  it('Allocating Parking to User 7. Should Reallocate the nearest empty postion 2', function (done) {
      var ele = parkingLot.parkCar(commands[12]);
      assert.equal(ele, 2);
      assert.notEqual(ele, 7);
      done();
  });

  it('Allocating Parking to User 8. Should indicate Parking is full.', function (done) {
      try {
        var ele = parkingLot.parkCar(commands[13]);
      }
      catch (err) {
        assert.notEqual(ele, 8);
      }
      done();
  });

  it('Registration no. for cars with driver_age 21', function (done) {
      var ele = parkingLot.getCarsWithSameAgeDriver(commands[13]);
      ele = ele.split(', ');
      assert.equal(ele[0], 'KA-01-HH-1234');
      assert.equal(ele[1], 'TN-01-HH-5321');
      done();
  });

  it('Slot no. for cars with driver_age 21', function (done) {
      var ele = parkingLot.getSlotsWithSameAgeDriver(commands[7]);
      ele = ele.split(',').map(Number);
      assert.equal(ele[0], 1);
      assert.equal(ele[1], 3);
      done();
  });

  it('Slot no. for registration no. RJ-01-HH-5315', function (done) {
      var ele = parkingLot.getSlotByCarNumber(commands[4]);
      assert.equal(ele, 4);
      done();
  });

});
