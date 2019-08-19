import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateCreationDetails from '../../components/CandidateCreationDetails/CandidateCreationDetails';
import {addCandidate} from '../../api/axios-candidates'
import Hoc from '../../hoc/Hoc'
import Modal from '../../components/UI/Modal/Modal';
import ConfirmDialog from '../../components/UI/ConfirmDialog/ConfirmDialog';
import { toast, ToastContainer } from "react-toastify";
import NewInterviewView from '../../components/InterviewsView/NewInterviewDetails/NewInterviewDetails';
import "react-toastify/dist/ReactToastify.css";
import * as interviewersActions from "../../store/actions/interviewersIndex";
import {create} from '../../api/axios-interviews'

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
            .then(response => {
                this.setState({
                    createdCandidate: response.data
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

    createInterview = obj => {
        create(obj)
            .then(() => {
                this.props.history.push({
                    pathname: "/interviews"
                })
            })
            .catch(() => {
                toast.error('Something went wrong. Interview record is not created. Please try again.',
                    {
                        className: 'toast-body__error',
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
                <Modal show={this.state.showInterviewModal} modalClosed={this.cancelInterviewCreation} customStyle={{width: '500px', top: '10%'}}>
                    <NewInterviewView
                        interviewers={this.props.interviewers}
                        candidate={this.state.createdCandidate}
                        onInterviewCreate={this.createInterview}
                    />
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