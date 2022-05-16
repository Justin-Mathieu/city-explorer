import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component {

    render() {
        return (
            <>
                <h3>{this.props.message}</h3>
            </>
        )
    }
};

export default Error;