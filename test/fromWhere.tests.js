//mocha tests
const assert = require('assert');
//get module
const fromWhereFunctionTest = require('../fromWhere');

//test function

describe('formWhere()', function() {
   it ("should return 'Paarl' when given registrationNum is 'CJ'", function() {
     assert.equal(fromWhereFunctionTest('CJ'), 'Paarl');  
   });
    
    it ("should return 'Cape Town' when given registrationNum is 'CA'", function() {
       assert.equal(fromWhereFunctionTest('CA'), 'Cape Town'); 
    });
    
    it ("should return 'Car location unknown' when given registration's location is not found", function() {
       assert.equal(fromWhereFunctionTest('CL'), 'Car location unknown'); 
    });
});