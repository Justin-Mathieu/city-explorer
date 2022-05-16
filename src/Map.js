import React from 'react';
import './App.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

class Map extends React.Component {

    render() {
        return (
            <Container >
                <Image className='map' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=10`} />
            </Container>
        );
    }
};

export default Map;