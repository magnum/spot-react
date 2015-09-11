var dispatcher = require('../../utils/AppDispatcher');
var createStore = require('../../utils/createStore');

var currentArtist = {};

var ArtistStore = createStore({
  getArtist: function() {
    return currentArtist;
  }
});

var actionMap = {
  'LOAD_ARTIST_COMPLETED': function(artist){ currentArtist = artist; }
};

dispatcher.registerActions(actionMap, ArtistStore);

module.exports = ArtistStore;
