import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

export default class Artist extends React.Component{
  render() {
    let artist = this.props.info;
    let image = 'http://fakeimg.pl/64/';
    if (artist.images.length > 0){
      image = _.min(artist.images, 'width').url;
    }

    return (
        <div>
          <img src={image} className="img-thumbnail" />
          <span><Link to="artist-details" params={{id: artist.id}}> {artist.name}</Link></span>
        </div>
    );
  }
};
