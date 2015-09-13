var dispatcher = require('../../utils/AppDispatcher');
var createStore = require('../../utils/createStore');

var currentArtist = {};
var currentArtistAlbums = [];

var ArtistStore = createStore({
  getArtist: function() {
    return currentArtist;
  },
  getAlbums: function(){
    return currentArtistAlbums;
  }
});

var actionMap = {
  'LOAD_ARTIST_COMPLETED': function(artist){ currentArtist = artist; },
  'LOAD_ALBUMS_COMPLETED': function(albums){ currentArtistAlbums = albums; }
};

dispatcher.registerActions(actionMap, ArtistStore);

module.exports = ArtistStore;
