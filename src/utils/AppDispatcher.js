var Dispatcher = require('flux').Dispatcher;
var dispatcher = new Dispatcher();

dispatcher.build = function(type) {
  return function(content) {
    dispatcher.dispatch({
      actionType: type,
      content: content
    });
  };
};

dispatcher.registerActions = function(actionMap, store, event){
  dispatcher.register(function(action) {
    if(actionMap[action.actionType]) {
      actionMap[action.actionType](action.content);
      store.emit(event || 'changed');
    }
  });
};

var oldRegister = dispatcher.register;

dispatcher.register = function(a) {
  oldRegister.call(dispatcher, a);
};

module.exports = dispatcher;
