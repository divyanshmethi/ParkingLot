**Problem**
To design a parking lot system with ability to find:

Vehicle Registration numbers of all cars which are parked by the driver of a certain age.

Slot number in which a car with a given registration number is parked.

Slot numbers of all slots where a cars of drivers of a particular age is parked.

**Pre requisites**

The source code for this project is written using Node.js. Make sure you have Node.js installed on your computer before running this application.

To check if you have Node.js and NPM installed by running simple commands to see what version of each is installed:

Test Node.js: To see if Node is installed, type node -v in Terminal. This should print the version number so you’ll see something like this v10.16.0.

Test NPM. To see if NPM is installed, type npm -v in Terminal. This should print the version number so you’ll see something like this 6.9.0.

**How to run ?**

STEP 1: npm install
npm install or npm i will download all the dependencies defined in package.json file and generate a node_modules/ folder with the installed modules.

STEP 2: Open terminal and type node src/index.js input.txt or npm start src/index.js

node src/index.js <path_to_file.txt>
Note: There is a sample data file named input.txt inside the data folder.

To run tests: npm run test-unit

**Modules**

There are two classes defined:

ParkingLot(): It is the main class which is used to initialize a parking lot. In each parking lot there is maximum number of slots and an array of slots that will be occupied by the car. It has following methods:

createParkingLot(input) : Creates a parking lot with given input. It throws an error Minimum one slot is required to create parking slot if zero or negative number (n <= 0) is provided as an input.

parkCar(input) : Allocates nearest slot from entry gate to the car. It can throw following errors:

Minimum one slot is required to create parking slot : When parking lot is not initialized.

Sorry, parking lot is full : When parking lot has reached its maximum capacity.

Please provide registration number and Age both : When input contains either of two i.e. registration number and Age of the car, not both.

leaveCar(input) : Deletes the car in the slot. It throws following errors:

Sorry, parking lot is empty if parking lot is empty.

Slot number <SLOT NUMBER> is not found when slot number is absent.

Slot number <SLOT NUMBER> is already free when slot number is not occupied.

getCarsWithSameAgeDriver(input) : Returns a comma separated string containing reg numbers of cars where the age of driver is equal to the one passed in the input e.g. KA-01-HH-1244, MH-01-DD-2039.

getSlotsWithSameAgeDriver(input) : Returns a comma separated string containing slot numbers of car where the age of driver is equal to the one passed in the input e.g. 3, 5, 6.

getSlotByCarNumber(input) : Fetches the slot number of car with given registration number.

findNearestAvailableSlot() : Finds nearest free slot. Helper Method

Car()

new Car(NUMBER, AGE) : Constructor used to initialize a car object containing two fields, registration number and age.

isCarEqual() : Checks whether two cars are equal or not.

Note: I've made an assumption that the registration number for two cars can never be same.

**CHEAT SHEET:**
1. npm install
2. node src/index.js data/input.txt
3. npm run test-unit -- for running tests
