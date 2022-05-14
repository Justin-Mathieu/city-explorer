import axios from 'axios';
import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Map from './Map';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citySearch: {}
        }

    }
    handleForm = (event) => {
        this.setState({ citySearch: event.target.value });
        console.log(this.state.citySearch);
    }

    location = async () => {
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.citySearch}&format=json`;
        const response = await axios.get(url);
        console.log(response);
        this.setState({ locationName: response.data[0].display_name });
        this.setState({ locationLon: response.data[0].lon })
        this.setState({ locationLat: response.data[0].lat })
    };
    errorMessage
    render() {
        return (
            <>
                <h2>The city you searched for is {this.state.locationName}, {this.state.locationLat}, {this.state.locationLon}</h2>
                <SearchForm handleForm={this.handleForm} location={this.location} />
                <Map longitude={this.state.locationLon} latitude={this.state.locationLat} />
            </>
        );
    }
}


export default Main;