import apiBuilder from '../../utils/api';
import dispatcher from '../../utils/AppDispatcher';

let api = apiBuilder();

let serverActions = {
  searchCompleted: dispatcher.build('SEARCH_COMPLETED')
};

export default {
  search(what){
    api.get(`/search?type=artist&q=${what}`, (err, res) => {
      let artists = res.body.artists.items;
      serverActions.searchCompleted(artists);
    });
  }
};
