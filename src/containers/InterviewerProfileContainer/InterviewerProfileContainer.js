import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import InterviewerProfile from '../../components/InterviewerProfile/InterviewerProfile';

class InterviewerProfileContainer extends Component{

    render(){
        return(
            <InterviewerProfile interviewer={this.props.history.location.state.interviewer}/>
        )
    }
}

export default InterviewerProfileContainer;