var React = require('react');
var Router = require('react-router');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Home page</h3>
        <ul>
          <li><Router.Link to="page1">page1</Router.Link></li>
          <li><Router.Link to="page2">page2</Router.Link></li>
          <li><Router.Link to="search">search</Router.Link></li>
        </ul>
      </div>
      );
  }
});

module.exports = Home;
