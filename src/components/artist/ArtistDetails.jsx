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
      tracks:[]
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
    ArtistActions.loadTopTracks(id);
  }
  componentWillUnmount() {
    ArtistStore.removeListener('changed', this.onStoreChanged);
  }
  onStoreChanged(){
    let artist = ArtistStore.getArtist();
    let tracks = ArtistStore.getTopTracks();
    this.setState({artist: artist, tracks: tracks });
  }
  render() {
    return (
      <div>
        <div className="row">
          <Artist info={this.state.artist} big />
        </div>
        <div className="row">
          <ul>
            {this.state.tracks.map(function(t) { return <li key={t.id}><Track info={t}/></li>})}
          </ul>
        </div>
      </div>
    );
  }

};

class Track extends React.Component{
  render(){
    return <div>{this.props.info.name}</div>
  }
}
