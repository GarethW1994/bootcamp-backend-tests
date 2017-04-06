module.exports = function RegCheck(regNum, location) {
    var checkRegLocation = regNum.includes(location);

    return checkRegLocation;
}
