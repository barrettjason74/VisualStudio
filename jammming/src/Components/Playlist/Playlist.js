import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }    
    
    render () {
        return (
    
            // add a return statement that renders this HTML
            // change all class attributes to className
        
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
                <Tracklist tracks={this.props.playlistTracks}
                   isRemoval={true}
                   onRemove={this.props.onRemove} />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
  
export default Playlist;