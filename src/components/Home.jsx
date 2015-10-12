import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router'

export default class Home extends React.Component{
  render() {
    return (
      <div>
        <h3>Home page</h3>
        <ul>
          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/page2">page2</Link></li>
          <li><Link to="/search">search</Link></li>
        </ul>
        {this.props.children}
      </div>
      );
  }
};
