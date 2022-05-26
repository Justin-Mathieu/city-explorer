import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';



class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.movieinfo.map(card =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src={`https://image.tmdb.org/t/p/w500${card.image}`} alt={card.title} />
                        <Card.Body className='card'>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.overview}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Release Date{card.release}</ListGroupItem>
                            <ListGroupItem>Average Votes: {card.avgVotes}</ListGroupItem>
                            <ListGroupItem>Popularity: {card.pop}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                        </Card.Body>
                    </Card>

                )}
            </>
        );
    }
};

export default Weather;
