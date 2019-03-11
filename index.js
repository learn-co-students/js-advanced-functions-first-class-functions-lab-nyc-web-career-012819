// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray) {
  return driverArray.slice(0,2);
}

const returnLastTwoDrivers = function(driverArray) {
  return driverArray.slice(-2, driverArray.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function (fare) {
    return num * fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
