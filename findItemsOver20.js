//function
module.exports = function(list) {
    var itemsOver = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > 20) {
            itemsOver.push({
                'Item': listName
            });
        }
    }

    return itemsOver;
};
