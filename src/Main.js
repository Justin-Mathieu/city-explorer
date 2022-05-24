import axios from 'axios';
import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Map from './Map';
import Error from './Error';
import Weather from './Weather';
import Movie from './Movie';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citySearch: {},
            locationLat: '',
            locationLon: '',
            errorMessage: '',
            weatherinfo: [],
            movieinfo: []


        }

    }
    handleForm = (event) => {

        this.setState({ citySearch: event.target.value });
        // console.log(this.state.citySearch);
    }

    location = async () => {
        try {
            const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.citySearch}&format=json`;
            const response = await axios.get(url);
            // console.log(response);

            this.setState({ locationName: response.data[0].display_name });
            this.setState({ locationLon: response.data[0].lon });
            this.setState({ locationLat: response.data[0].lat })
        } catch (error) {
            error.customMessage = '"Not a location"'
            this.handleErrorMessage(error);
        }
    };
    getWeather = async (error) => {
        try {
            const url = process.env.REACT_APP_API;
            const weatherResults = await axios.get(`${url}/weather?lat=${this.state.locationLat}&lon=${this.state.locationLon}`);
            this.setState({ weatherinfo: weatherResults.data });
        } catch (error) {
            error.customMessage = 'No Weather Data'
            this.handleErrorMessage(error);
        }
    }

    getMovies = async (error) => {
        try {
            const url = process.env.REACT_APP_API;
            const movieResults = await axios.get(`${url}/movie?search=${this.state.citySearch}`);
            console.log('this is the first result', movieResults.data)
            this.setState({ movieinfo: movieResults.data });

        } catch (error) {
            error.customMessage = 'No movie Data'
            this.handleErrorMessage(error);
        }
    }


    handleErrorMessage = (error) => {
        console.error(error)
        this.setState({ errorMessage: `...Something went wrong ${error.customMessage} status Code: ${error.response.status}` })
    }
    render() {
        return (
            <>
                {this.state.locationLat && <h2>The city you searched for is {this.state.locationName}, {this.state.locationLat}, {this.state.locationLon}</h2>}
                <SearchForm handleForm={this.handleForm} location={this.location} weather={this.getWeather} movies={this.getMovies} />
                <Error message={this.state.errorMessage} />
                <Map longitude={this.state.locationLon} latitude={this.state.locationLat} />
                <Weather weather={this.state.weatherinfo} />
                <Movie movieinfo={this.state.movieinfo} />
            </>
        );
    }
}


export default Main;