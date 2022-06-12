import React from 'react';
import './Track.css';

export class Track extends React.Component { 
    render () {
        return (
    
            // add a return statement that renders this HTML
            // change all class attributes to className
        
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                
                {this.renderAction()}
            </div>
        );
    }
}
  
  export default Track;