import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidatesView from '../../components/CandidatesView/CandidatesView';
import * as candidatesActions from '../../store/actions/candidatesIndex';

class CandidatesContainer extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.onFetchCandidates(0, 30);
    }

    render(){
        return(
            <CandidatesView
                candidates={this.props.candidates}
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
