///mocha assert
const assert = require('assert');
//function module
const countPaarlTestFunction = require('../countAllPaarl');

//mocha test function
describe('countAllPaarl()', function() {
   it ("should return '2 paarl plates' when given a string containing 2 paarl plates", function() {
      assert.equal(countPaarlTestFunction('CA 345-155,CJ 555-555,CL 345 789,CJ 444-444'), '2 Paarl plates'); 
   });
    
    it ("should return '0 paarl plates' when no paarl plates is found in string", function() {
       assert.equal(countPaarlTestFunction('CA 345-155,CA 555-555,CL 345 789'), '0 Paarl plates') 
    });
});