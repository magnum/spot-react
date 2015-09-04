var api = require('../../utils/api')();
var dispatcher = require('../../utils/AppDispatcher');

var serverActions = {
  searchCompleted: dispatcher.build('SEARCH_COMPLETED')
};

module.exports = {
  search: function(what){
    api.get('/search?type=artist&q=' + what, function(err, res){
      var artists = res.body.artists.items;
      serverActions.searchCompleted(artists);
    });
  }
};