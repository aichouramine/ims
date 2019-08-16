import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateCreationDetails from '../../components/CandidateCreationDetails/CandidateCreationDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';
import {addCandidate} from '../../api/axios-candidates'
import Hoc from '../../hoc/Hoc'
import Modal from '../../components/UI/Modal/Modal';
import ConfirmDialog from '../../components/UI/ConfirmDialog/ConfirmDialog';
import { toast, ToastContainer } from "react-toastify";
import InterviewView from '../../components/InterviewsView/InterviewDetails/InterviewDetails';
import "react-toastify/dist/ReactToastify.css";
import * as interviewersActions from "../../store/actions/interviewersIndex";

class CandidateCreationContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showConfirm: false,
            showInterviewModal: false,
            createdCandidate: {}
        };
    }

    cancelChanges = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        this.props.onFetchInterviewers();
    }

    confirmInterviewCreation = () => {
        this.setState({
            showConfirm: false,
            showInterviewModal: true,
        })
    }

    callInterviewCreation = (obj) => {
        this.setState({
            showConfirm: true,
        })
    }

    cancelInterviewCreation = () => {
        this.setState({
            showConfirm: false,
            showInterviewModal: false,
        })
        setTimeout(this.props.history.goBack, 100);
    }

    addNewCandidate = obj => {
        addCandidate(obj)
            .then(() => {
                this.setState({
                    createdCandidate: {...obj}
                })
            })
            .then(() => {
                this.callInterviewCreation();
            })
            .catch(() => {
                toast.error('Something went wrong. Please try again.',
                    {
                        className: 'toast-body__error',
                        // bodyClassName: "toast-body"
                    }
                );
            })
    }

    render(){
        return(
            <Hoc>
                <Modal show={this.state.showConfirm} modalClosed={this.cancelInterviewCreation} customStyle={{top: '20%'}}>
                    <ConfirmDialog
                        message="Candidate is added successfully."
                        subMessage="Would you like to create an interview record for candidate?"
                        onConfirmAction={this.confirmInterviewCreation}
                        onCancel={this.cancelInterviewCreation}/>
                </Modal>
                <Modal show={true} modalClosed={this.cancelInterviewCreation} customStyle={{width: '500px', top: '10%'}}>
                    <InterviewView interviewers={this.props.interviewers} candidate={this.state.createdCandidate}/>
                </Modal>
                <CandidateCreationDetails
                    onChangesCanceled={this.cancelChanges}
                    onCandidateAdded={this.addNewCandidate}
                    candidate={this.props.candidateInfo}
                />
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar={false}
                    autoClose={2000}
                    newestOnTop={true}
                    closeOnClick={true}
                    draggable={false}
                    rtl={false}
                    className="toast-container"
                />
            </Hoc>
        )
    }

}

const mapStateToProps = state => {
    return{
        candidateInfo: state.candidatesReducer.candidateInfo,
        interviewers: state.interviewersReducer.interviewers,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviewers: () => dispatch(interviewersActions.fetchInterviewers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidateCreationContainer);