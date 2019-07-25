import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidatesView from '../../components/CandidatesView/CandidatesView';
import * as candidatesActions from '../../store/actions/candidatesIndex';

class CandidatesContainer extends Component{
    constructor(props) {
        super(props);

        this.addNewHandler = this.addNewHandler.bind(this)
    }

    componentDidMount(){
        this.props.onFetchCandidates(0, 10);
        this.props.onFetchCandidatesNumber();
    }

    addNewHandler() {
        this.props.history.push({
            pathname: '/candidates/details'
        })
        // this.props.onUpdateInterviewerProfileOffline(interviewer)
        // this.setState({editable: true})
    }

    render(){
        return(
            <CandidatesView
                candidates={this.props.candidates}
                addNewCandidate={this.addNewHandler}
                loadMoreItems={this.props.onFetchCandidates}
                candidatesNumber={this.props.candidatesNumber}
            />
        )
    }
}

const mapStateToProps = state => {

    return{
        candidates: state.candidatesReducer.candidates,
        candidatesNumber: state.candidatesReducer.candidatesNumber
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchCandidates: (page, size) => dispatch(candidatesActions.fetchCandidates(page, size)),
        onFetchCandidatesNumber: () => dispatch(candidatesActions.fetchCandidatesNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidatesContainer);
