var React = require('react');

var SearchBox = React.createClass({
  getInitialState: function() {
    return { value: '' };
  },
  onSearch: function(){
    var artist = this.state.value;
    if (typeof this.props.onSearchCallback == 'function'){
      this.props.onSearchCallback(artist);
    }
  },
  onChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var isDisabled = this.state.value == '';
    return (
      <form>
        <div className="form-group col-xs-10">
          <input className="form-control" type="text" value={this.state.value} onChange={this.onChange}/>
        </div>
        <button className="btn btn-primary" disabled={isDisabled} onClick={this.onSearch}><i className="fa fa-search"></i></button>
      </form>
    );
  }
});


module.exports = SearchBox;
