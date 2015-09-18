import React from 'react';
import Router from 'react-router';

export default class Home extends React.Component{
  render() {
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
};
