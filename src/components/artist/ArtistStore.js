import dispatcher from '../../utils/AppDispatcher';
import createStore  from '../../utils/createStore';

let currentArtist = {};
let currentArtistAlbums = [];

let ArtistStore = createStore({
  getArtist() {
    return currentArtist;
  },
  getAlbums(){
    return currentArtistAlbums;
  }
});

var actionMap = {
  'LOAD_ARTIST_COMPLETED': artist => { currentArtist = artist; },
  'LOAD_ALBUMS_COMPLETED': albums => { currentArtistAlbums = albums; }
};

dispatcher.registerActions(actionMap, ArtistStore);

export default ArtistStore;
