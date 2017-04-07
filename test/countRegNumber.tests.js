//mocha assert
const assert = require('assert');
//module Function
const regCountFunctionTest = require('../regCount');


//mocha test
describe('regNumCounter()', function() {
   it ("should return the correct number of Registration Numbers in a string", function(){
      assert.equal(regCountFunctionTest('CA 4567,CL 4523,CY 9876,MP 12345 GP'), 4); 
   });
});