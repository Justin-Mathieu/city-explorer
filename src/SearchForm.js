import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'

class SearchForm extends React.Component {
    handler = () => {
        this.props.weather();
        this.props.location();
    }

    render() {
        return (
            <Container>
                <input onChange={this.props.handleForm} placeholder='Search Here...' />
                <button onClick={this.handler}>Explore!</button>
            </Container>
        );
    }
}

export default SearchForm;