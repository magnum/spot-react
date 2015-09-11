var React = require('react');
var Artist = require('./Artist');

var ArtistList = React.createClass({
  render: function() {
    var artists = this.props.list.map(function(a){
      return <Artist key={a.name} info={a} />
    });
    return (
      <ul className="artist-list">
        {artists}
      </ul>
    );
  }
});

module.exports = ArtistList;
