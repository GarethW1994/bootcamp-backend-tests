module.exports = function isFromBellville(regNum, location) {
  var isFromBellville = regNum.startsWith(location);

  return isFromBellville;
}
