import React from 'react';
import './App.css';

class SearchForm extends React.Component {

    render() {
        return (
            <>
                <input onChange={this.props.handleForm} placeholder='Search Here...' />
                <button onClick={this.props.location}>Explore!</button>
            </>
        );
    }
}

export default SearchForm;