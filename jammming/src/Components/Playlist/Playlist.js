import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/TrackList';

export class Playlist extends React.Component { 
    render () {
        return (
    
            // add a return statement that renders this HTML
            // change all class attributes to className
        
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <Tracklist tracks={this.props.playlistTracks}
                   isRemoval={true}
                   onRemove={this.props.onRemove} />
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        );
    }
}
  
  export default Playlist;