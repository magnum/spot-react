var React = require('react');
var SearchActions = require('./SearchActions');
var SearchStore = require('./SearchStore');
var _ = require('lodash');
var SearchBox = require('./SearchBox');

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

var ArtistList = React.createClass({
  render: function() {
    var artists = this.props.list.map(function(a){
      return <Artist key={a.name} info={a} />
    });
    return (
      <ul>
        {artists}
      </ul>
    );
  }
});

var Artist = React.createClass({
  render: function() {
    var artist = this.props.info;
    return (
      <li>
       {artist.name}
      </li>
    );
  }
});


module.exports = SearchPage;