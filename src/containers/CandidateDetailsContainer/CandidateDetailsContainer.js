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

    addNewCandidate = obj => {
        this.props.onAddingCandidate(obj);
        this.props.history.goBack();
    }

    render(){
        return(
            <CandidateDetails
                onChangesCanceled={this.cancelChanges}
                onCandidateAdded={this.addNewCandidate}
                candidate={this.props.candidateInfo}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        candidateInfo: state.candidatesReducer.candidateInfo,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddingCandidate: (obj) => dispatch(candidatesActions.addCandidateToTheList(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidateDetailsContainer);
