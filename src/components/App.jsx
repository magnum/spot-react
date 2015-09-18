import React from 'react';
import Routes from './Routes';
import ReactRouter, {RouteHandler} from 'react-router';

require('../sass/style.scss');

export default class App extends React.Component{
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
};

ReactRouter.run(Routes(App), Handler => {
  React.render(<Handler/>, document.getElementById('container'));
});
