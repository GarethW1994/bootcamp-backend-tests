//mocha assert
const assert = require('assert');
//module function
const countAllTownTestFunction = require('../countAllFromTown.js');


//mocha assert function
describe('countAllFromTown()', function() {
   it ("should return '2' when given a string regNumbers matching 2 from given location", function() {
      assert.equal(countAllTownTestFunction('CA 123,CA 123, CY 456, CL 789', 'CA'), 2); 
   }); 
    
    it ("should return '0' when given a string regNumbers not matching given location", function() {
         assert.equal(countAllTownTestFunction('CA 123,CA 123, CY 456, CL 789', 'GP'), 0); 
    })
});