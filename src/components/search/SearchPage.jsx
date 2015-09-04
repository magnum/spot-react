var React = require('react');
var SearchActions = require('./SearchActions');
var SearchStore = require('./SearchStore');
var _ = require('lodash');

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
    var artists = this.state.artists.map(function(a){
      var imgUrl;
      if (a.images.length > 0){
        imgUrl = _.min(a.images, 'width').url;
      }
      return (
        <li>
          <img src={imgUrl}  />
          {a.name}
        </li>);
    });
    return (
      <div>
        <div className="row">
          <button onClick={this.searchClicked}>search</button>
        </div>
        <div className="row">
          <ul>
            {artists}
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = SearchPage;