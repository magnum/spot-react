import React from 'react';
import {DefaultRoute, Route} from 'react-router';

export default function getRoutes(App){
  var routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute name="home" handler={require('./Home')} />
      <Route name="page1" path="page1/" handler={require('./Page1')}/>
      <Route name="page2" path="page2/" handler={require('./Page2')}/>
      <Route name="search" path="search/" handler={require('./search/SearchPage')}/>
      <Route name="artist-details" path="artist/:id" handler={require('./artist/ArtistDetails')}/>
    </Route>);
  return routes;
}
