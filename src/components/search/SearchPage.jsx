import React from 'react';
import SearchActions from './SearchActions';
import SearchStore from '../GlobalStore';
import _ from 'lodash';
import SearchBox from './SearchBox';
import ArtistList from './ArtistList';

export default class SearchPage extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {artists: []};
    this.onStoreChange = this.onStoreChange.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  }
  componentDidMount() {
    SearchStore.on('changed', this.onStoreChange);
  }
  componentWillUnmount() {
    SearchStore.removeListener('changed', this.onStoreChange);
  }
  onStoreChange (){
    let state = SearchStore.getState();
    this.setState({artists: state.artists});
  }
  searchClicked(artist){
    SearchActions.search(artist);
  }
  render(){
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
};
