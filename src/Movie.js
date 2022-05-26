import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';



class Movie extends React.Component {

    render() {
        return (
            <>
                <Card style={{ width: '30rem' }}>
                    <Card.Img className='img' variant="top" src={`https://image.tmdb.org/t/p/w500${this.props.img}`} alt={this.props.title} />
                    <Card.Body className='card'>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.overview}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Release Date{this.props.release}</ListGroupItem>
                        <ListGroupItem>Average Votes: {this.props.votes}</ListGroupItem>
                        <ListGroupItem>Popularity: {this.props.pop}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    </Card.Body>
                </Card>


            </>
        );
    }
};

export default Movie;
