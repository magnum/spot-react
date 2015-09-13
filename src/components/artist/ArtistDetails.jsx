var React = require('react');
var Router = require('react-router');
var ArtistActions = require('./ArtistActions');
var ArtistStore = require('./ArtistStore');
var Artist = require('../search/Artist');

var ArtistDetails = React.createClass({
  mixins: [ Router.State ],
  getInitialState: function() {
    return {
      artist:{id:0, images:[]},
      albums:[]
    };
  },
  componentDidMount: function() {
    ArtistStore.on('changed', this.onStoreChanged);
    var id = this.getParams().id;
    ArtistActions.loadArtistDetails(id);
    ArtistActions.loadArtistAlbums(id);
  },
  componentWillUnmount: function() {
    ArtistStore.removeListener(this.onStoreChanged);
  },
  onStoreChanged: function(){
    var artist = ArtistStore.getArtist();
    var albums = ArtistStore.getAlbums();
    this.setState({artist: artist, albums: albums });
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <Artist info={this.state.artist} big={true} />
        </div>
        <div className="row">
          <ul>
            {this.state.albums.map(function(a) { return <li key={a.id}><Album info={a}/></li>})}
          </ul>
        </div>
      </div>
    );
  }

});

var Album = React.createClass({
  render: function(){
    console.log(this.props.info);
    return <div>{this.props.info.name}</div>
  }
})

module.exports = ArtistDetails;
