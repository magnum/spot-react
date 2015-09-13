var React = require('react');
var Link = require('react-router').Link;
var _ = require('lodash');

var Artist = React.createClass({
  render: function() {
    var artist = this.props.info;
    var image = 'http://fakeimg.pl/64/';
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
});

module.exports = Artist;
