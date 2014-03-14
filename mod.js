(function(exports, undefined) {
   var mod = {
    _modules: {},
    define: function(module, callback) {
      mod._modules[module] = {
        callback: callback,
        executed: false,
        module: null
      }
    },
    expose: function(module, content) {
      mod._modules[module] = {
        callback: null,
        executed: true,
        module: content
      }
    },
    require: function(module) {
      if (mod._modules[module] === undefined) {
        throw new Error('Unknown module: ' + module)
      }
      if (!mod._modules[module].executed) {
        mod._modules[module].module = mod._modules[module].callback()
        mod._modules[module].executed = true
      }
      return mod._modules[module].module
    },
    use: function(callback) {
      callback(mod.define, mod.require)
    },
    attach: function(config) {
      config.global[config.define] = mod.define
      config.global[config.require] = mod.require
    }
  }
  exports._modules = mod._modules
  exports.define = mod.define
  exports.expose = mod.expose
  exports.require = mod.require
  exports.use = mod.use
  exports.attach = mod.attach
})(typeof exports === 'undefined'? this['mod'] = {}: exports);
