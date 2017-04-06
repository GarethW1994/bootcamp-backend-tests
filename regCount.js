module.exports = function(regNumber) {
    var splitString = regNumber.split(",");
    var countString = splitString.length;
    return splitString, countString;
};
