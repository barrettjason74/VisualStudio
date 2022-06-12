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
                {'<!-- Add a TrackList component -->'}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
  
  export default Playlist;