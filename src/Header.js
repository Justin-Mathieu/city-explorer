import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

class Header extends React.Component {
    render() {
        return (
            <Container className='header'>
                <h1>City Explorer</h1>
                <h2>Learn about cities...</h2>

            </Container>
        );
    }
}

export default Header;