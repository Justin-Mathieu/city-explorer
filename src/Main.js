import axios from 'axios';
import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Map from './Map';
import Error from './Error';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citySearch: {},
            locationLat: '',
            locationLon: '',
            errorMessage: ''

        }

    }
    handleForm = (event) => {

        this.setState({ citySearch: event.target.value });
        console.log(this.state.citySearch);
    }

    location = async () => {
        try {
            const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.citySearch}&format=json`;
            const response = await axios.get(url);
            console.log(response);

            this.setState({ locationName: response.data[0].display_name });
            this.setState({ locationLon: response.data[0].lon })
            this.setState({ locationLat: response.data[0].lat })
        } catch (error) {
            this.handleErrorMessage(error);
        }
    };
    getWeather = async () => {
        const url = process.env.REACT_APP_API
        const weatherData = await axios.get(`${url}/weaatherdata?city=paris`);
        console.log(weatherData);
    }
    handleErrorMessage = (error) => {
        console.error(error)
        this.setState({ errorMessage: `...Something went wrong ${error.response.data.error} status Code: ${error.response.status}` })
    }
    render() {
        return (
            <>
                <h2>The city you searched for is {this.state.locationName}, {this.state.locationLat}, {this.state.locationLon}</h2>
                <SearchForm handleForm={this.handleForm} location={this.location} weather={this.getWeather} />
                <Error message={this.state.errorMessage} />
                <Map longitude={this.state.locationLon} latitude={this.state.locationLat} />
            </>
        );
    }
}


export default Main;