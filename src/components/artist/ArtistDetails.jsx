import React from 'react';
import Router from 'react-router';
import ArtistActions from './ArtistActions';
import ArtistStore from './ArtistStore';
import Artist from '../search/Artist';

export default class ArtistDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      artist:{id:0, images:[]},
      albums:[]
    };
    this.onStoreChanged = this.onStoreChanged.bind(this);
  }
  contextTypes: {
    router: Router.PropTypes.router.isRequired
  }
  componentDidMount() {
    ArtistStore.on('changed', this.onStoreChanged);
    let id = this.props.params.id;
    ArtistActions.loadArtistDetails(id);
    ArtistActions.loadArtistAlbums(id);
  }
  componentWillUnmount() {
    ArtistStore.removeListener('changed', this.onStoreChanged);
  }
  onStoreChanged(){
    let artist = ArtistStore.getArtist();
    let albums = ArtistStore.getAlbums();
    this.setState({artist: artist, albums: albums });
  }
  render() {
    return (
      <div>
        <div className="row">
          <Artist info={this.state.artist} big />
        </div>
        <div className="row">
          <ul>
            {this.state.albums.map(function(a) { return <li key={a.id}><Album info={a}/></li>})}
          </ul>
        </div>
      </div>
    );
  }

};

class Album extends React.Component{
  render(){
    return <div>{this.props.info.name}</div>
  }
}
