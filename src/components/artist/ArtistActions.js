var dispatcher = require('../../utils/AppDispatcher');
var api = require('../../utils/api')();

var serverActions = {
  loadArtistCompleted: dispatcher.build('LOAD_ARTIST_COMPLETED'),
  loadAlbumsCompleted: dispatcher.build('LOAD_ALBUMS_COMPLETED')
};

module.exports = {
  loadArtistDetails: function(id){
    api.get('/artists/' + id, function(err, res){
      serverActions.loadArtistCompleted(res.body);
    });
  },
  loadArtistAlbums: function(id){
    api.get('/artists/' + id + '/albums?limit=50', function(err, res){
      serverActions.loadAlbumsCompleted(res.body.items);
    });
  }
};
