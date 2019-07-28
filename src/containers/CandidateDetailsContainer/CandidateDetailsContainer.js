import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateDetails from '../../components/CandidateDetails/CandidateDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';

class CandidateDetailsContainer extends Component{
    constructor(props) {
        super(props);

    }

    cancelChanges = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        // this.props.onFetchCandidates(0, 30);
    }

    render(){
        return(
            <CandidateDetails
                onChangesCanceled={this.cancelChanges}
            />
        )
    }
}

const mapStateToProps = state => {

    return{

    }

}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidateDetailsContainer);
