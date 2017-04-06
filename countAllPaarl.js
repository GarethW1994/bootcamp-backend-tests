module.exports = function(regNum) {
    var regNumsplit = regNum.split(',');

    var newList = [];

    var paarlList = [];

    for (var i = 0; i < regNumsplit.length; i++) {

        newList.push(regNumsplit[i]);

        if (regNumsplit[i].startsWith('CJ')) {

            paarlList.push(newList[i]);
        }

    }



    return paarlList.length + ' Paarl plates';
}