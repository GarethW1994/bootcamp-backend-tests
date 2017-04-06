//mocha test
const assert = require('assert');
//get module
const transportFeeFunctionTest = require('../transportFee');

//mocha test function
describe('transportFee()', function() {
   it ("should return 'R10' when shift given is 'morning'", function() {
     assert.equal(transportFeeFunctionTest('morning'), 'R10');  
   }); 
    
    it ("should return 'R20' when shift given is 'afternoon'", function() {
       assert.equal(transportFeeFunctionTest('afternoon'), 'R20'); 
    });
    
    it ("should return 'transport cost is nothing!' when shift given is 'night'", function() {
        assert.equal(transportFeeFunctionTest('night'), 'transport cost is nothing!');
    })
    
    it ("should return 'Shift Not Recoginized. Try Again!' when given shift is unknown", function() {
        assert.equal(transportFeeFunctionTest('late evening'), 'Shift Not Recognized. Try Again!');
    })
});