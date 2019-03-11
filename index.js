// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
  const arr = [];
  arr.push(drivers[0]);
  arr.push(drivers[1]);
  return arr;
}

const returnLastTwoDrivers = function (drivers){
  const arr = [];
  arr.push(drivers[drivers.length - 2]);
  arr.push(drivers[drivers.length - 1]);
  return arr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function(n){
    return n * number;
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

function fetchSpecifiedDrivers(drivers, callback) {
  return callback(drivers);
}
