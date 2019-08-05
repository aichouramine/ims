import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateDetails from '../../components/CandidateDetails/CandidateDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';
import Hoc from '../../hoc/Hoc'

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
            <Hoc>
                <CandidateDetails
                    onChangesCanceled={this.cancelChanges}
                    candidate={this.props.candidateInfo}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        candidateInfo: state.candidatesReducer.candidateInfo
    }

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps) (CandidateDetailsContainer);
