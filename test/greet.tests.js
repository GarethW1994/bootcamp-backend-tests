//mocha tests
var assert = require('assert');
//call greet module
const greetMessage = require('../greet');

//test the greet function
describe('greet()', function() {
    it("should greet Gareth correctly", function(){
      assert.equal(greetMessage('Gareth'), 'Hello, Gareth');
    });

    it ("should greet Andrew correctly", function() {
       assert.equal(greetMessage('Andrew'), 'Hello, Andrew')
    });
});
