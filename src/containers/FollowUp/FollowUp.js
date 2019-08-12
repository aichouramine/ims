import React, { Component } from 'react';
import CreateFollowUpView from '../../components/CreateFollowUpView/CreateFollowUpView';

class FollowUp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <CreateFollowUpView
                candidate={this.props.location.state.candidate}
            />
        )
    }
}

export default FollowUp;
