//function
module.exports = function(list, threshold) {
    var overObj = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > threshold) {
            overObj.push({
                'Item': listName
            });
        }
    }

    return overObj;
};

//log output
//console.log(findItemsOver(itemList, 20));
//console.log(" ");
//console.log(findItemsOver(itemList2, 100));
