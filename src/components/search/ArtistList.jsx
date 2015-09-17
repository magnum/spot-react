import React from 'react';
import Artist from './Artist';

export default class ArtistList extends React.Component{
  render() {
    let artists = this.props.list.map(function(a){
      return <li key={a.id}><Artist info={a} /></li>
    });
    return (
      <ul className="artist-list">
        {artists}
      </ul>
    );
  }
};
