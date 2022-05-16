import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'

class SearchForm extends React.Component {

    render() {
        return (
            <Container>
                <input onChange={this.props.handleForm} placeholder='Search Here...' />
                <button onClick={this.props.location}>Explore!</button>
            </Container>
        );
    }
}

export default SearchForm;