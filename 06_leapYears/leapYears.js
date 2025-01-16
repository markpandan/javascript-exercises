const leapYears = function (year) {
  if (year % 100 == 0) {
    // Years divisible by 100 are not considered as leap years but only for years divisible by 400
    if (year % 400 == 0) return true;
    else return false;
  } else if (year % 4 == 0)
    // Years divisible by 4 are considered leap years
    return true;
  else return false;
};

// Do not edit below this line
module.exports = leapYears;
