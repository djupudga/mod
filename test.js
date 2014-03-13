var mod = require('mod')

mod.use(function(_module) {
  _module('foo', function() {
    return function() {
      return 'hello world'
    }
  })
})

mod.use(function(_module, _require) {
  var foo = _require('foo')
  console.assert(foo() === 'hello world')
  console.log('mod.use works!!')
})

// Expose it globally (or locally)
var _global = {}
mod.expose({
  require: 'require',
  define: 'module',
  global: _global
})

_global.module('bar', function() {
  var foo = _global.require('foo')
  var res = foo()
  console.assert(res === 'hello world')
  console.log('mod.expose works!!')
})
mod.require('bar')