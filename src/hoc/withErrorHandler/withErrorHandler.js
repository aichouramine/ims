import React from 'react';
import Hoc from '../Hoc'

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return(
            <WrappedComponent {...props}/>
        )
    }
};

export default withErrorHandler;