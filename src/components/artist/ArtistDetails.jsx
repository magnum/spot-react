var React = require('react');
var Router = require('react-router');
var ArtistActions = require('./ArtistActions');
var ArtistStore = require('./ArtistStore');

var ArtistDetails = React.createClass({
  mixins: [ Router.State ],
  componentDidMount: function() {
    ArtistStore.on('Changed', this.onStoreChanged);
    var id = this.getParams().id;
    ArtistActions.loadArtistDetails(id);
  },
  componentWillUnmount: function() {
    ArtistStore.removeListener(this.onStoreChanged);
  },
  onStoreChanged: function(){

  },
  render: function() {
    return (
      <div>
        Details
      </div>
    );
  }

});

module.exports = ArtistDetails;
