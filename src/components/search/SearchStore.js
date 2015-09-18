import dispatcher from '../../utils/AppDispatcher';
import createStore from '../../utils/createStore';

let currentState = {};

let SearchStore = createStore({
  getArtists() {
    return currentState;
  }
});

let actionMap = {
  'SEARCH_COMPLETED': artists => { currentState = artists; }
};

dispatcher.registerActions(actionMap, SearchStore);

export default SearchStore;
