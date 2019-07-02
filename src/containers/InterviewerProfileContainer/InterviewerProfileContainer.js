import React, { Component } from 'react';
import { connect } from 'react-redux';
import InterviewerProfile from '../../components/InterviewerProfile/InterviewerProfile';
import * as interviewersActions from '../../store/actions/interviewersIndex';
import Modal from '../../components/UI/Modal/Modal';
import ConfirmDialog from '../../components/UI/ConfirmDialog/ConfirmDialog';
import Hoc from '../../hoc/Hoc';
import Details from '../../components/InterviewerProfile/Details/Details'

class InterviewerProfileContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            confirm: false,
        };

        this.confirmHandler = this.confirmHandler.bind(this)
        this.confirmCancelHandler = this.confirmCancelHandler.bind(this)
    }

    onRemoveFromProfile = () => {
        // console.log('removed')
        // this.props.history.push({
        //     pathname: 'interviewers'
        // })
        this.setState({confirm: false})
    }

    confirmHandler() {
        this.setState({
            confirm: true
        })
    }

    confirmCancelHandler() {
        this.setState({confirm: false})
    }

    render(){
        return(
            <Hoc>
                <Modal show={this.state.confirm} modalClosed={this.confirmCancelHandler} confirmed={this.onRemoveFromProfile}>
                    <ConfirmDialog onConfirmRemove={this.onRemoveFromProfile} onCancel={this.confirmCancelHandler}/>
                </Modal>
                <InterviewerProfile
                    interviewer={this.props.history.location.state.interviewer}
                    updateInterviewer={this.props.onUpdateInterviewerProfile}
                    remove={this.confirmHandler}
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