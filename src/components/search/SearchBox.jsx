var React = require('react');

var SearchBox = React.createClass({
  onSearch: function(){
    var artist = this.refs.artist.getDOMNode().value;
    if (typeof this.props.onSearchCallback == 'function'){
      this.props.onSearchCallback(artist);
    }
  },
  render: function() {
    return (
      <form>
        <div className="form-group col-xs-10">
          <input className="form-control" type="text" ref="artist" />
        </div>
        <button className="btn btn-primary" onClick={this.onSearch}><i className="fa fa-search"></i></button>
      </form>
    );
  }
});


module.exports = SearchBox;
