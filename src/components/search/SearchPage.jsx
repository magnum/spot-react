var React = require('react');
var SearchActions = require('./SearchActions');
var SearchStore = require('./SearchStore');
var _ = require('lodash');
var SearchBox = require('./SearchBox');
var ArtistList = require('./ArtistList');

var SearchPage = React.createClass({
  getInitialState: function() {
    return {
      artists: []
    };
  },
  componentDidMount: function() {
    SearchStore.on('changed', this.onStoreChange);
  },
  componentWillUnmount: function(){
    SearchStore.removeListener('changed', this.onStoreChange);
  },
  onStoreChange: function(){
    var artists = SearchStore.getArtists();
    this.setState({artists: artists});
  },
  searchClicked: function(artist){
    SearchActions.search(artist);
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <SearchBox onSearchCallback={this.searchClicked}/>
        </div>
        <div className="row">
          <ArtistList list={this.state.artists} />
        </div>
      </div>
    );
  }
});

module.exports = SearchPage;
