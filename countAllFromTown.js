module.exports = function(regNum, location) {
    var splitReg = regNum.split(',');

    var townList = [];

    var newList = [];
    for (var x = 0; x < splitReg.length; x++) {
        townList.push(splitReg[x]);

        if (townList[x].includes(location)) {
            newList.push(townList[x]);
        }
    }

    return newList.length;
}
