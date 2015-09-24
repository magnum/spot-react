var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      counter:0,
      clicks: []
    };
  },
  handleClick: function(){
    this.state.clicks.push(new Date());
    this.setState({counter: this.state.counter + 1, clicks: this.state.clicks});
  },
  onChange: function(evt){
    this.setState({counter: parseInt(evt.target.value)});
  },
  render: function() {
    var clicks = this.state.clicks.map(function(c, i) { return <DateItem key={i} value={c} /> });
    return (
      <div>
        <input type="text" value={this.state.counter} onChange={this.onChange} />
        <MyButton label="Click here" clickCallback={this.handleClick} />
        <ul>
          {clicks}
        </ul>
      </div>
      );
  }
});

var DateItem = React.createClass({
  render: function(){
    var date = this.props.value;
    return <li>{date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</li>
  }
});

var MyButton = React.createClass({
  handleOnClick: function(){
    this.props.clickCallback();
  },
  render: function(){
    return <button type="button" onClick={this.handleOnClick} >{this.props.label}</button>
  }
});

module.exports = Home;
