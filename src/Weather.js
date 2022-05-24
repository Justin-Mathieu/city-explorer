import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.weather.length && <ListGroup>

                    <ListGroup.Item>Low of {this.props.weather[0].low}, high of {this.props.weather[0].high} with "{this.props.weather[0].description}",
                        "date": {this.props.weather[0].date}</ListGroup.Item>
                    <ListGroup.Item>Low of{this.props.weather[1].low}, high of {this.props.weather[1].high} with "{this.props.weather[1].description}",
                        "date": {this.props.weather[1].date}</ListGroup.Item>

                    <ListGroup.Item>Low of {this.props.weather[2].low}, high of {this.props.weather[2].high} with "{this.props.weather[2].description}",
                        "date": {this.props.weather[2].date}</ListGroup.Item>

                </ListGroup>}
            </>
        );
    }
};

export default Weather;
