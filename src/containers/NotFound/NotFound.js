import React from 'react';
import Error from '../../components/UI/Error/Error'

class NotFound extends React.Component{

    goBack = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <Error goBack={this.goBack}/>
        )
    }
}

export default NotFound;