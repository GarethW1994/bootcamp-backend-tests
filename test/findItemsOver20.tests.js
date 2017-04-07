//mocha assert
const assert = require('assert');
//list objects
var itemList = [
    {name: 'apples', price: 10},
    {name: 'pears', price: 37},
    {name: 'bananas', price: 27},
    {name: 'apples', price: 3}
];

//get module
const findItemsOver20Test = require('../findItemsOver20');

//test function
describe("findItemsOver20", function () {
    it("should return [ { Item: { name: 'pears', price: 37 } },{ Item: { name: 'bananas', price: 27 } } ]' when given value of 20", function () {
        assert.deepEqual(findItemsOver20Test(itemList, 20), [{
            Item: {
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
        })
});