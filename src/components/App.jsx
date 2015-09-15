var React = require('react');
var ReactRouter = require('react-router');
var Routes = require('./Routes');
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

ReactRouter.run(Routes(App), function (Handler) {
  React.render(<Handler/>, document.getElementById('container'));
});
