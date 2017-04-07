//mocha assert
const assert = require('assert');

//function module
const isWeekdayFunctionTest = require('../isWeekday');

//data
const date = new Date();

//mocha testing
describe('isWeekday()', function() {
   it ("should return 'true' if today's day is a weekday", function() {
      assert.equal(isWeekdayFunctionTest(date), true); 
   });
});
