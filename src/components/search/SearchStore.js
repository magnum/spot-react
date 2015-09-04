var dispatcher = require('../../utils/AppDispatcher');
var createStore = require('../../utils/createStore');

var currentState = {};

var SearchStore = createStore({
  getArtists: function() {
    return currentState;
  }
});

var actionMap = {
  'SEARCH_COMPLETED': function(artists){ currentState = artists; }
};

dispatcher.registerActions(actionMap, SearchStore);

module.exports = SearchStore;
