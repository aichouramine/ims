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
        this.props.onFetchCandidates(0, 30);
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
            />
        )
    }
}

const mapStateToProps = state => {

    return{
        candidates: state.candidatesReducer.candidates,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchCandidates: (page, size) => dispatch(candidatesActions.fetchCandidates(page, size)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidatesContainer);
