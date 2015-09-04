var React = require('react');
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;


function getRoutes(App){

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={require('./Home')} />
    <Route name="page1" path="page1/" handler={require('./Page1')}/>
    <Route name="page2" path="page2/" handler={require('./Page2')}/>
  </Route>);
  return routes;
}

module.exports = getRoutes;
