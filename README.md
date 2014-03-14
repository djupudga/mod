mod.js
===

Lightweight dependency managment without dependency loading for JavaScript.

**mod.js**
- is an experiment.
- assumes scripts are already loaded
- and in the correct (dependency) order
- keeps the global namespace as clutter free as possible
- helps you manage dependencies in scripts
- makes your browser scripts more testable

**mod.js** does not load any scripts. It assumes
that all scripts are loaded. It's only purpose is
to make it easier to manage dependencies in your
scripts and keep the global namespace clean. This
will make code more testable. Testability increases
when dependencies become clearer and don't rely on
global objects.

Some examples:
```javascript
// Define a module
mod.use(function(module, require) {
  // For creating people
  module('person', function() {
    var person = function(name) {
      this.name = name
    }
    return person
  })
  // For creating a world class pop band
  module('bandmaker', function() {
    return {
      makeBand: function() {
        var person = require('person')
        return {
          john: new person('John Lennon'),
          george: new person('George Harrison'),
          ringo: new person('Ringo Starr'),
          paul: new person('Paul Macartney')
        }
      }
    }
  })

  var bandMaker = require('bandmaker')
  var theBeatles = bandMaker.makeBand()
  // We have a winner
  console.log(theBeatles)
})
```