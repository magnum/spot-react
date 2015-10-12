import React from 'react';
import ReactDOM from 'react-dom';
//import Routes from './Routes';
import { Router, Route, Link } from 'react-router'

require('../sass/style.scss');

export default class App extends React.Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

ReactDOM.render((
  <Router>
    <Route component={App}>
      <Route path="/" component={require('./Home')} />
      <Route path="/page1" component={require('./Page1')}/>
      <Route path="/page2" component={require('./Page2')}/>
      <Route path="/search" component={require('./search/SearchPage')}/>
      <Route path="/artist/:id" component={require('./artist/ArtistDetails')} />
    </Route>
  </Router>
  ), document.getElementById('container'))


// ReactRouter.run(Routes(App), Handler => {
//   React.render(<Handler/>, document.getElementById('container'));
// });
