//mocha assert
const assert = require('assert');
//module
const findItemsOverTestFunction = require('../findItemsOver');

//list objects
var itemList = [
    { name : 'apples',  price   : 10 },
    { name : 'pears',   price   : 37 },
    { name : 'bananas', price   : 27 },
    { name : 'apples',  price   : 3  },
];

var itemList2 = [
    { name : 'jeans',  price    : 299.99 },
    { name : 'shirt',  price    : 99.99  },
    { name : 'jacket', price    : 499.99 },
];

//test function
describe('findItemsOver()', function () {
            it("should return '[ { Item: { name: 'pears', price: 37 } },{ Item: { name: 'bananas', price: 27 } } ]' form list1", function() {
            assert.deepEqual(findItemsOverTestFunction(itemList, 20), [{
                    Item:   {
                            name: 'pears',
                            price: 37
                            }
                        },
                        {
                     Item: {
                            name: 'bananas',
                            price: 27
                            }
                        }])
                    });
    
        it("should return '[ { Item: { name: 'jeans', price: 299.99 } },{ Item: { name: 'jacket', price: 499.99 } } ]' form list2", function() {
            assert.deepEqual(findItemsOverTestFunction(itemList2, 100), [{
                    Item:   {
                            name: 'jeans',
                            price: 299.99
                            }
                        },
                        {
                     Item: {
                            name: 'jacket',
                            price: 499.99
                            }
                        }])
                    });
            });
