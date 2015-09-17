import React from 'react';

export default class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: ''};
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  onSearch(){
    if (typeof this.props.onSearchCallback == 'function'){
      this.props.onSearchCallback(this.state.value);
    }
  }
  onChange(evt){
    this.setState({value: evt.target.value});
  }
  render() {
    var isDisabled = this.state.value == '';
    return (
      <form>
        <div className="form-group col-xs-10">
          <input className="form-control" type="text" value={this.state.value} onChange={this.onChange}/>
        </div>
        <button type="button" className="btn btn-primary" disabled={isDisabled} onClick={this.onSearch}><i className="fa fa-search"></i></button>
      </form>
    );
  }
};
