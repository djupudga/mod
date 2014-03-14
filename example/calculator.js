// This example is composed of a
// simple script which runs in a
// web browser.
//
// The script "test_script.js" is
// simple test scripts which runs
// in node.js.
//
// Testing browser code in node.js
// can sometimes be a bit difficult
// because of the dependencies. Also,
// it is not always clear which
// dependencies a script has.

mod.use(function(module, require) {
  module('calculator', function() {
    var underscore = require('underscore')
    var calculator = {
      add: function() {
        return underscore.reduce(arguments, function(memo, num) {
          return memo + num
        }, 0)
      },
      multiply: function(numbers) {
        return underscore.reduce(numbers, function(memo, num) {
          return memo * num
        }, 1)
      }
    }
    return calculator
  })
})
