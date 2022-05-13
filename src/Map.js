import axios from 'axios';
import React from 'react';
import './App.css';

class Map extends React.Component {
    getMap = async () => {
        const map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOACTIONIQ_KEY}&center=4${this.props.logitude}&zoom=16&size=480x480&markers=icon:large-red-cutout`
        mapImage = await axios.get(map)
    }
    render() {
        return (
            <>


            </>
        );
    }
};

export default Map;