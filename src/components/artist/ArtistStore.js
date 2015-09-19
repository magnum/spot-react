import dispatcher from '../../utils/AppDispatcher';
import createStore  from '../../utils/createStore';

let currentArtist = {};
let currentArtistAlbums = [];
let currentTopTracks = [];

let ArtistStore = createStore({
  getArtist() {
    return currentArtist;
  },
  getAlbums(){
    return currentArtistAlbums;
  },
  getTopTracks(){
    return currentTopTracks;
  }
});

var actionMap = {
  'LOAD_ARTIST_COMPLETED': artist => { currentArtist = artist; },
  'LOAD_ALBUMS_COMPLETED': albums => { currentArtistAlbums = albums; },
  'LOAD_TOP_TRACKS_COMPLETED': tracks => { currentTopTracks = tracks; }
};

dispatcher.registerActions(actionMap, ArtistStore);

export default ArtistStore;
