import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import CandidatesView from '../../components/CandidatesView/CandidatesView';
import * as candidatesActions from '../../store/actions/candidatesIndex';

class CandidatesContainer extends Component{
    constructor(props) {
        super(props);

        this.addNewHandler = this.addNewHandler.bind(this)
        this.editHandler = this.editHandler.bind(this)
        this.updateUrl = this.updateUrl.bind(this)
        this.viewFollowUp = this.viewFollowUp.bind(this)
    }

    componentDidMount(){
        this.props.onFetchCandidates(this.getPageNumber(), 10);
        this.props.onFetchCandidatesNumber();
    }

    addNewHandler() {
        this.props.onSeeDetails();
        this.props.history.push({
            pathname: `${this.props.location.pathname}/addNewCandidate`
        })
    }

    editHandler(candidate) {
        this.props.history.push({
            pathname: `${this.props.location.pathname}/details/${candidate.id}`
        })
        this.props.onSeeDetails(candidate)
    }

    viewFollowUp(candidate){
        this.props.history.push({
            pathname: `${this.props.location.pathname}/followUp/${candidate.id}`,
            state: { candidate: candidate }
        })
    }

    updateUrl(url){
        this.props.history.push(`?${url}`);
    }

    getPageNumber = () => {
        if(this.props.history.location.search){
            const searchParams = new URLSearchParams(this.props.history.location.search);
            return +searchParams.get('page')-1;
        }

        return 0;
    }

    render(){
        return(
            <Hoc>
                <CandidatesView
                    candidates={this.props.candidates}
                    addNewCandidate={this.addNewHandler}
                    editCandidate={this.editHandler}
                    viewFollowUp={this.viewFollowUp}
                    loadMoreItems={this.props.onFetchCandidates}
                    candidatesNumber={this.props.candidatesNumber}
                    onUrlUpdate={this.updateUrl}
                    history={this.props.history}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {

    return{
        candidates: state.candidatesReducer.candidates,
        candidatesNumber: state.candidatesReducer.candidatesNumber,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchCandidates: (page, size) => dispatch(candidatesActions.fetchCandidates(page, size)),
        onFetchCandidatesNumber: () => dispatch(candidatesActions.fetchCandidatesNumber()),
        onSeeDetails: (obj) => dispatch(candidatesActions.goToCandidateDetails(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidatesContainer);
