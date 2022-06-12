import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          term: ''
        };
    
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
    }
    
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }
    
    search() {
        this.props.onSearch(this.state.term);
    }

    render () {
        return (
    
            // add a return statement that renders this HTML
            // change all class attributes to className
        
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}
  
  export default SearchBar;