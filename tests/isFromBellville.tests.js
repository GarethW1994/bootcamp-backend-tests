//mocha assert
const assert = require('assert');
//require function module
const isFromBellvilleTest = require('../functions/isFromBellville');

//mocha testing
describe('isFromBellville()', function() {
   it ("should return 'false' when given a numberplate not from Bellville", function() {
      assert.equal(isFromBellvilleTest('CA 1234', 'CY'), false); 
   });
    
   it ("should return 'true' when given a numberplate from Bellville", function() {
      assert.equal(isFromBellvilleTest('CY 4356', 'CY'), true); 
   });
});