(function(exports) {
   var mod = {
    _modules: {},
    define: function(module, callback) {
      mod._modules[module] = {
        callback: callback,
        executed: false,
        exported: null
      }
    },
    require: function(module) {
      if (!mod._modules[module].executed) {
        mod._modules[module].exported = mod._modules[module].callback()
        mod._modules[module].executed = true
      }
      return mod._modules[module].exported
    },
    use: function(callback) {
      callback(mod.define, mod.require)
    },
    expose: function(config) {
      config.global[config.define] = mod.define
      config.global[config.require] = mod.require
    }
  }
  // Exporting for testing
  exports._modules = mod._modules,
  exports.define = mod.define,
  exports.require = mod.require,
  exports.use = mod.use,
  exports.expose = mod.expose
})(typeof exports === 'undefined'? this['mod'] = {}: exports);
