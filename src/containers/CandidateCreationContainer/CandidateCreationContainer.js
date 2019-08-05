import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateCreationDetails from '../../components/CandidateCreationDetails/CandidateCreationDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';
import {addCandidate} from '../../api/axios-candidates'
import Hoc from '../../hoc/Hoc'
import Modal from '../../components/UI/Modal/Modal';
import ConfirmDialog from '../../components/UI/ConfirmDialog/ConfirmDialog';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CandidateCreationContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showConfirm: false,
        };
    }

    cancelChanges = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        // this.props.onFetchCandidates(0, 30);
    }

    callInterviewCreation = () => {
        this.setState({showConfirm: true})
    }

    cancelInterviewCreation = () => {
        this.setState({showConfirm: false})
        setTimeout(this.props.history.goBack, 200);
    }

    addNewCandidate = obj => {
        addCandidate(obj)
            .then(() => {
                this.callInterviewCreation();
            })
            .catch(() => {
                toast.error('Something went wrong. Please try again.',
                    {
                        className: 'black-background',
                        bodyClassName: "grow-font-size"
                    }
                );
            })
    }

    render(){
        return(
            <Hoc>
                <Modal show={this.state.showConfirm} modalClosed={this.cancelInterviewCreation}>
                    <ConfirmDialog onCancel={this.cancelInterviewCreation}/>
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
                />
            </Hoc>
        )
    }

}

const mapStateToProps = state => {
    return{
        candidateInfo: state.candidatesReducer.candidateInfo,
    }

}

const mapDispatchToProps = (dispatch) => {
    // return{
    //     onAddingCandidate: (obj) => dispatch(candidatesActions.addCandidateToTheList(obj))
    // }
}

export default connect(mapStateToProps) (CandidateCreationContainer);