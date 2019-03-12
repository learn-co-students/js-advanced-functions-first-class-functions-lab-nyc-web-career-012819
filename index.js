const returnFirstTwoDrivers = function (drivers)
{
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers)
{
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (value)
{
  return function (val) {
    return val * value
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, passed)
{
  return passed(drivers);
}
