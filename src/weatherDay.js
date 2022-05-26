import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'

class Weatherday extends React.Component {

    render() {
        return (
            <>
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.date}</Card.Title>
                        <Card.Text>
                            Low Temp: {this.props.low}

                            High Temp: {this.props.high}

                            Description: {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </>
        );
    }
};

export default Weatherday;
