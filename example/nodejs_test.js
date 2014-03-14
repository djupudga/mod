// This script demonstrates how a script, written for a browser
// using mod.js, can easily be tested in node.js, without having
// to mock dependencies globally.

// The test depends on mod.js so it must be required and
// exported as a global object (no way around that)
global.mod = require('../mod')

// Now for the calculator app.
// mod.js doesn't load any dependencies, so you must do
// it for it. The calculator has a dependency on underscore
// so you must either load it and expose it to mod.js
// or mock it. For this example we'll load and expose it.

// Load underscore.js as a node.js module
var _ = require('underscore')
// Expose it to mod.js
mod.expose('underscore', _)

// Load the calculator app.
require('calculator')

// Now, get the calculator from mod.js
var calculator = mod.require('calculator')

// Do some calculation.
console.log('1+2+3+4+5=' + calculator.add([1,2,3,4,5]))
console.log('1*2*3*4*5=' + calculator.multiply([1,2,3,4,5]))