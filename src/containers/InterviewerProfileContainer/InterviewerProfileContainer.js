import React, { Component } from 'react';
import { connect } from 'react-redux';
import InterviewerProfile from '../../components/InterviewerProfile/InterviewerProfile';
import * as interviewersActions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
import Hoc from '../../hoc/Hoc';
import Details from '../../components/InterviewerProfile/Details/Details'

class InterviewerProfileContainer extends Component{


    onRemoveFromProfile = () => {
        this.props.history.push({
            pathname: 'interviewers'
        })
    }

    render(){
        return(
            <Hoc>
                <InterviewerProfile
                    interviewer={this.props.history.location.state.interviewer}
                    updateInterviewer={this.props.onUpdateInterviewerProfile}
                    remove={this.onRemoveFromProfile}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {

    return{
        interviewerProfile: state.interviewerProfile,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onUpdateInterviewerProfile: (obj) => dispatch(interviewersActions.updateInterviewer(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InterviewerProfileContainer);