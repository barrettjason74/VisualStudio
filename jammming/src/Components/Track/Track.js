import React from 'react';
import './SearchResults.css';

export class Track extends React.Component { 
    render () {
        return (
    
            // add a return statement that renders this HTML
            // change all class attributes to className
        
            <div class="Track">
                <div class="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div>
                <button class="Track-action"><!-- + or - will go here --></button>
            </div>
        );
    }
}
  
  export default Track;