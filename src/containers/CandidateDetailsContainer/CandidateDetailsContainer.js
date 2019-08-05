import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateDetails from '../../components/CandidateDetails/CandidateDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';
import {getInterviewDateByCandidateId} from '../../api/axios-interviews';
import Hoc from '../../hoc/Hoc'

class CandidateDetailsContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            interviewDate: ""
        }
    }

    cancelChanges = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        getInterviewDateByCandidateId(this.props.candidateInfo.id)
            .then(response => {
                this.setState({
                    interviewDate: response.data
                })
            })
        // this.props.onFetchCandidates(0, 30);
    }

    render(){
        return(
            <Hoc>
                <CandidateDetails
                    onChangesCanceled={this.cancelChanges}
                    candidate={this.props.candidateInfo}
                    interviewDate={this.state.interviewDate}
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
