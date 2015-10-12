import dispatcher from '../utils/AppDispatcher'
import {EventEmitter} from 'events'

function extend(source, target) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

function createStore(target){
  return extend(EventEmitter.prototype, target);
}

const initialState = {
  searchText: '',
  artists: [],
};

let currentState = initialState;

function reducer(state = initialState, action){
  if (action.actionType == 'SEARCH_COMPLETED'){
    return {...state, artists: action.content};
  }
  return state;
}

let store = createStore({getState: function(){ return currentState; }})

dispatcher.register((action) => {
  currentState = reducer(currentState, action);
  store.emit('changed');
});

export default store;
