// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const newArray = [...drivers.slice(0,1), ...drivers.slice(1,2)];
  return newArray;
};

const returnLastTwoDrivers = function (drivers) {
  const newArray = [...drivers.slice(-2)];
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {

  return function(fare) {

    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, functions) {

  return functions(drivers);
}
