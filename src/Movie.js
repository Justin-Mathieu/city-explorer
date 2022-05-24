import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.movieinfo.map(card =>
                    < Card >
                        <div class="card">
                            <img class="card-top" src={`https://image.tmdb.org/t/p/w500${card.image}`} alt={card.title} />
                            <div class="card-body">
                                <h5 class="card-title">{card.title}</h5>
                                <p class="card-text">{card.overview}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Average Votes: {card.avgVotes}</li>
                                <li class="list-group-item">Popularity: {card.pop}</li>
                                <li class="list-group-item">Release Date: {card.release}</li>
                            </ul>
                            <div class="card-body">
                            </div>
                        </div>

                    </Card>)}
            </>
        );
    }
};

export default Weather;
