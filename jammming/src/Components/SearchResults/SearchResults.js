import React from 'react';
import './SearchResults.css';

import Tracklist from '../TrackList/TrackList';

export class SearchResults extends React.Component { 
    render () {
        return (
    
            // add a return statement that renders this HTML
            // change all class attributes to className
        
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist tracks={this.props.searchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}
  
  export default SearchResults;