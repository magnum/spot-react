var React = require('react');
var SearchActions = require('./SearchActions');
var SearchStore = require('./SearchStore');

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
    console.log('changed', artists);
    this.setState({artists: artists});
  },
  searchClicked: function(){
    SearchActions.search('pink floyd');
  },
  render: function() {
    return (
      <div>
        <button onClick={this.searchClicked}>search</button>
      </div>
    );
  }

});

module.exports = SearchPage;