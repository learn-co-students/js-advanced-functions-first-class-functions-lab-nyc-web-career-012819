// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  newArray = [drivers[0], drivers[1]]
  return newArray
};

const returnLastTwoDrivers = function (drivers) {
  newArray = [drivers[drivers.length-2], drivers[drivers.length-1]]
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (int) {
  return function fareMultiplier (fare){
    return int * fare
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare)
}

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers)
}
