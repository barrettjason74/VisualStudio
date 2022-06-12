import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import components into app.js

import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
// import { render } from 'react-dom';



export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    
  }


  render () {
    return (

      // add a return statement that renders this HTML
      // change all class attributes to className

      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {'<!-- Add a SearchBar component -->'}
          <div className="App-playlist">
          {'<!-- Add a SearchResults component -->'}
          {'<!-- Add a Playlist component -->'}
          </div>
        </div>
      </div>
    );
  }
}


export default App;