import dispatcher from '../../utils/AppDispatcher';
import apiBuilder from '../../utils/api';
let api = apiBuilder();

let serverActions = {
  loadArtistCompleted: dispatcher.build('LOAD_ARTIST_COMPLETED'),
  loadAlbumsCompleted: dispatcher.build('LOAD_ALBUMS_COMPLETED')
};

export default {
  loadArtistDetails(id){
    api.get('/artists/' + id, (err, res) => {
      serverActions.loadArtistCompleted(res.body);
    });
  },
  loadArtistAlbums(id){
    api.get('/artists/' + id + '/albums?limit=50', (err, res)=> {
      serverActions.loadAlbumsCompleted(res.body.items);
    });
  }
};
