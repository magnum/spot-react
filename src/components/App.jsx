var React = require('react');
var ReactRouter = require('react-router');
var Routes = require('./Routes');
var RouteHandler = ReactRouter.RouteHandler;

if (!localStorage.getItem('bootreact_token')){
  window.location.pathname = "/login.html";
}

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
