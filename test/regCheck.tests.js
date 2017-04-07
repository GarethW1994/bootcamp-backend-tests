//mocha tests 
const assert = require('assert');
//function module
const regCheckTestFunction = require('../regCheck');

//mocha test 
describe("regCheck()", function(){
   it ("should return 'true' when numberplate match given location", function() {
      assert.equal(regCheckTestFunction('CA 45624', 'CA'), true); 
   });
    
   it ("should return 'false' when numberplate do not match given location", function() {
      assert.equal(regCheckTestFunction('CL 45624', 'CA'), false); 
   });
});
