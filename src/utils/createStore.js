var EventEmitter = require('events').EventEmitter;

function extend(source, target) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

function createStore(target){
  return extend(EventEmitter.prototype, target);
}

module.exports = createStore;