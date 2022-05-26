import React from 'react';
import './App.css';
import Weatherday from './weatherDay';

class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.weather.map(day => (
                    < Weatherday
                        date={day.date}
                        description={day.description}
                        low={day.low}
                        high={day.high}

                    />
                ))}


            </>
        );
    }
};

export default Weather;
