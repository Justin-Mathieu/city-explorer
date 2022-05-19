import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';

class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.weather.length && <ListGroup>

                    <ListGroup.Item>{this.props.weather[0].date}{this.props.weather[0].description}</ListGroup.Item>
                    <ListGroup.Item>{this.props.weather[1].date}{this.props.weather[1].description}</ListGroup.Item>
                    <ListGroup.Item>{this.props.weather[2].date}{this.props.weather[2].description}</ListGroup.Item>

                </ListGroup>}
            </>
        );
    }
};

export default Weather;
